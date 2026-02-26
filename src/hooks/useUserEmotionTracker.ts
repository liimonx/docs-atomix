"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AmbientBackgroundVariant } from "../components/ui/AmbientBackground";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Emotions the tracker can detect (subset of AmbientBackgroundVariant) */
type DetectableEmotion = Exclude<AmbientBackgroundVariant, "auto" | "growth" | "warmth" | "mystery">;

/** Score card for a single evaluation tick */
type EmotionScores = Record<DetectableEmotion, number>;

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const TICK_MS = 800; // Evaluation interval (ms)
const HYSTERESIS_TICKS = 3; // Consecutive wins required before switching emotion
const IDLE_TIME_MS = 12_000; // 12s of no activity → calm

// EMA asymmetric smoothing factors
const EMA_ATTACK = 0.75; // Fast rise (react to spikes instantly)
const EMA_DECAY = 0.15; // Slow fall (emotions linger organically)

// Signal normalization reference points (px/tick or events/tick)
const MOUSE_SPEED_REF = 1600; // Reference for max mouse speed per tick
const SCROLL_SPEED_REF = 1800; // Reference for max scroll speed per tick
const CLICK_RATE_REF = 3; // Reference for rapid click rate per tick
const TYPE_RATE_REF = 6; // Reference for fast typing per tick
const DIR_CHANGE_REF = 12; // Reference for erratic direction changes per tick

/**
 * Tracks user mouse, keyboard, and scroll activity to estimate their current
 * emotional state and maps it to an `AmbientBackgroundVariant`.
 *
 * ## Algorithm Overview
 * 1. **Raw signal collection** — Mouse distance, direction changes, scroll
 *    distance, clicks, key presses, and error keys are accumulated per tick.
 * 2. **Asymmetric EMA smoothing** — Each signal is smoothed with fast attack
 *    (α=0.75) and slow decay (α=0.15), so spikes register instantly but
 *    emotions linger naturally.
 * 3. **Weighted scoring** — Every tick, a confidence score is computed for
 *    each detectable emotion using normalized, weighted signal contributions.
 *    The highest-scoring emotion is the candidate.
 * 4. **Temporal hysteresis** — The candidate must win for 3 consecutive ticks
 *    before the emotion state actually changes, preventing flickering.
 */
export function useUserEmotionTracker(enabled = true): AmbientBackgroundVariant {
  const [emotion, setEmotion] = useState<AmbientBackgroundVariant>("auto");

  // ---- Timing refs ----
  const lastActivityTime = useRef(Date.now());

  // ---- Raw position refs ----
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);
  const lastMouseDir = useRef<{ dx: number; dy: number } | null>(null);
  const lastScrollY = useRef(0);

  // ---- Per-tick accumulators (reset every tick) ----
  const tickMouseDist = useRef(0);
  const tickScrollDist = useRef(0);
  const tickClicks = useRef(0);
  const tickKeys = useRef(0);
  const tickErrors = useRef(0); // Backspace / Delete
  const tickDirChanges = useRef(0); // Mouse direction reversals

  // ---- EMA-smoothed signals ----
  const emaMouseSpeed = useRef(0);
  const emaScrollSpeed = useRef(0);
  const emaClickRate = useRef(0);
  const emaTypeRate = useRef(0);
  const emaErrRatio = useRef(0); // errors / total keys (0‑1)
  const emaDirChanges = useRef(0);

  // ---- Hysteresis state ----
  const candidateEmotion = useRef<DetectableEmotion>("default");
  const candidateStreak = useRef(0);

  // ---- Helpers ----

  /** Asymmetric EMA: fast attack, slow decay */
  const asymEMA = useCallback((current: number, prev: number) => {
    const alpha = current > prev ? EMA_ATTACK : EMA_DECAY;
    return alpha * current + (1 - alpha) * prev;
  }, []);

  /** Clamp a value between 0 and 1, normalized against a reference */
  const normalize = useCallback((value: number, ref: number) => {
    return Math.min(value / ref, 1);
  }, []);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    lastScrollY.current = window.scrollY;

    // ------------------------------------------------------------------
    // Event handlers
    // ------------------------------------------------------------------

    const onMouseMove = (e: MouseEvent) => {
      lastActivityTime.current = Date.now();

      if (lastMousePos.current) {
        const dx = e.clientX - lastMousePos.current.x;
        const dy = e.clientY - lastMousePos.current.y;
        tickMouseDist.current += Math.sqrt(dx * dx + dy * dy);

        // Detect direction reversal (dot product of consecutive deltas < 0)
        if (lastMouseDir.current) {
          const dot =
            dx * lastMouseDir.current.dx + dy * lastMouseDir.current.dy;
          if (dot < 0) tickDirChanges.current += 1;
        }
        lastMouseDir.current = { dx, dy };
      }
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onScroll = () => {
      lastActivityTime.current = Date.now();
      const y = window.scrollY;
      tickScrollDist.current += Math.abs(y - lastScrollY.current);
      lastScrollY.current = y;
    };

    const onClick = () => {
      lastActivityTime.current = Date.now();
      tickClicks.current += 1;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      lastActivityTime.current = Date.now();
      tickKeys.current += 1;
      if (e.key === "Backspace" || e.key === "Delete") {
        tickErrors.current += 1;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousedown", onClick, { passive: true });
    window.addEventListener("keydown", onKeyDown, { passive: true });

    // ------------------------------------------------------------------
    // Main evaluation loop
    // ------------------------------------------------------------------
    const interval = setInterval(() => {
      const now = Date.now();
      const idleMs = now - lastActivityTime.current;

      // 1. Compute error ratio for this tick (0‑1)
      const rawErrRatio =
        tickKeys.current > 0 ? tickErrors.current / tickKeys.current : 0;

      // 2. Update EMA-smoothed signals
      emaMouseSpeed.current = asymEMA(tickMouseDist.current, emaMouseSpeed.current);
      emaScrollSpeed.current = asymEMA(tickScrollDist.current, emaScrollSpeed.current);
      emaClickRate.current = asymEMA(tickClicks.current, emaClickRate.current);
      emaTypeRate.current = asymEMA(tickKeys.current, emaTypeRate.current);
      emaErrRatio.current = asymEMA(rawErrRatio, emaErrRatio.current);
      emaDirChanges.current = asymEMA(tickDirChanges.current, emaDirChanges.current);

      // Track whether there's *active* slow input happening right now
      const hasActiveSlowMouse = tickMouseDist.current > 8 && tickMouseDist.current < 180;
      const hasActiveSlowScroll = tickScrollDist.current > 8 && tickScrollDist.current < 140;

      // 3. Reset per-tick accumulators
      tickMouseDist.current = 0;
      tickScrollDist.current = 0;
      tickClicks.current = 0;
      tickKeys.current = 0;
      tickErrors.current = 0;
      tickDirChanges.current = 0;

      // 4. Normalize signals to 0‑1 range
      const nMouse = normalize(emaMouseSpeed.current, MOUSE_SPEED_REF);
      const nScroll = normalize(emaScrollSpeed.current, SCROLL_SPEED_REF);
      const nClick = normalize(emaClickRate.current, CLICK_RATE_REF);
      const nType = normalize(emaTypeRate.current, TYPE_RATE_REF);
      const nErr = emaErrRatio.current; // already 0‑1
      const nDir = normalize(emaDirChanges.current, DIR_CHANGE_REF);
      const nIdle = Math.min(idleMs / IDLE_TIME_MS, 1);

      // 5. Weighted scoring — each emotion gets a confidence score
      const scores: EmotionScores = {
        // CALM: Driven entirely by inactivity duration
        calm: nIdle * 1.0,

        // ALERT: High mouse speed + direction changes + rage clicks + errors
        alert:
          nMouse * 0.25 +
          nDir * 0.30 +
          nClick * 0.20 +
          nErr * 0.25,

        // FOCUS: Sustained typing with low errors and minimal mouse/scroll
        focus:
          nType * 0.50 +
          (1 - nErr) * 0.20 +
          (1 - nMouse) * 0.15 +
          (1 - nScroll) * 0.15,

        // ENERGY: Moderate-high mouse + scroll speed, active clicking
        energy:
          (nMouse > 0.35 && nMouse < 0.85 ? nMouse : 0) * 0.35 +
          (nScroll > 0.25 && nScroll < 0.80 ? nScroll : 0) * 0.35 +
          nClick * 0.15 +
          (1 - nDir) * 0.15,

        // NATURE: Active slow deliberate movements (reading)
        nature:
          (hasActiveSlowMouse ? 0.5 : 0) +
          (hasActiveSlowScroll ? 0.5 : 0),

        // DEFAULT: Baseline — scores highest when everything is near zero
        default:
          (1 - nMouse) * 0.20 +
          (1 - nScroll) * 0.20 +
          (1 - nClick) * 0.20 +
          (1 - nType) * 0.20 +
          (1 - nIdle) * 0.20,
      };

      // 6. Find highest-scoring emotion
      let bestEmotion: DetectableEmotion = "default";
      let bestScore = -1;

      for (const key of Object.keys(scores) as DetectableEmotion[]) {
        if (scores[key] > bestScore) {
          bestScore = scores[key];
          bestEmotion = key;
        }
      }

      // 7. Temporal hysteresis — require consecutive wins before switching
      if (bestEmotion === candidateEmotion.current) {
        candidateStreak.current += 1;
      } else {
        candidateEmotion.current = bestEmotion;
        candidateStreak.current = 1;
      }

      if (candidateStreak.current >= HYSTERESIS_TICKS) {
        setEmotion((prev) =>
          prev !== candidateEmotion.current ? candidateEmotion.current : prev,
        );
      }
    }, TICK_MS);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKeyDown);
      clearInterval(interval);
    };
  }, [enabled, asymEMA, normalize]);

  return emotion;
}


"use client";

import { FC, memo, useMemo } from "react";
import { useUserEmotionTracker } from "../../hooks/useUserEmotionTracker";
import styles from "./AmbientBackground.module.scss";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AmbientBackgroundVariant =
  | "auto" // Let the emotion tracker decide (default)
  | "default" // Trust, Creativity (Blue & Purple)
  | "focus" // Logic, Structure (Indigo & Cyan)
  | "energy" // Vibrancy, Foundation (Orange & Rose)
  | "growth" // Harmony, Freshness (Emerald & Sky)
  | "warmth" // Joy, Optimism (Amber & Yellow)
  | "calm" // Tranquility, Depth (Teal & Blue)
  | "mystery" // Creativity, Wisdom (Purple & Pink)
  | "alert" // Caution, Urgency (Red & Orange)
  | "nature"; // Natural, Refreshing (Lime & Green)

interface AmbientBackgroundProps {
  /** Optional extra class names appended to the root element. */
  className?: string;
  /**
   * Explicit psychological color variant to use.
   * If left as "auto" (the default), the emotion tracker drives the color.
   */
  variant?: AmbientBackgroundVariant;
  /**
   * If true, background colors dynamically adjust based on the user's implicit emotions.
   * Tracks mouse movements, clicks, and typing speed in real time. (Default: true)
   */
  enableEmotionTracking?: boolean;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * **AmbientBackground**
 *
 * A minimal, aesthetic gradient backdrop for design-system documentation.
 * Colors are driven entirely by the user's live emotional state (mouse speed,
 * click patterns, typing cadence, scroll behavior) or by an explicit
 * developer override via the `variant` prop.
 */
const AmbientBackgroundBase: FC<AmbientBackgroundProps> = ({
  className = "",
  variant = "auto",
  enableEmotionTracking = true,
}) => {
  const trackedEmotion = useUserEmotionTracker(enableEmotionTracking);

  // Resolve Active Variant: Developer override → Emotion tracker → Default
  const activeVariant = useMemo<AmbientBackgroundVariant>(() => {
    if (variant && variant !== "auto") return variant;
    if (trackedEmotion && trackedEmotion !== "auto") return trackedEmotion;
    return "default";
  }, [variant, trackedEmotion]);

  // Map Variant to CSS Module Class
  const themeClass =
    activeVariant === "default" || activeVariant === "auto"
      ? ""
      : styles[`theme-${activeVariant}`];

  // Construct final className
  const rootClasses = [styles.root, themeClass, className]
    .filter(Boolean)
    .join(" ");

  return <div className={rootClasses} aria-hidden="true" />;
};

export const AmbientBackground = memo(AmbientBackgroundBase);

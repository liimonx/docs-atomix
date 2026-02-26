"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./HeroHeadlineSlider.module.scss";

gsap.registerPlugin(useGSAP);

/* ═══════════════════════════════════════
   Types & Data
   ═══════════════════════════════════════ */

interface SlideData {
  id: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
}

const SLIDES: SlideData[] = [
  {
    id: "slide-1",
    headlineLine1: "The Glass-First System",
    headlineLine2: "for Scalable Frontend.",
    description:
      "Atomix provides a react-ready engine to build distinct, high-performance interfaces with cinematic depth and frosted glass realism.",
  },
  {
    id: "slide-2",
    headlineLine1: "Cinematic Depth",
    headlineLine2: "with Unmatched Precision.",
    description:
      "Layer surfaces, blur backgrounds, and cast natural shadows with a token-driven design language that redefines premium UI.",
  },
  {
    id: "slide-3",
    headlineLine1: "Accessible by Design",
    headlineLine2: "Without Compromises.",
    description:
      "Intelligently contrasting frosted layers ensure perfect readability while maintaining a bleeding-edge aesthetic across all devices.",
  },
];

const SLIDE_DURATION = 7; // seconds

/* ═══════════════════════════════════════
   Word & Character Split Helpers
   ═══════════════════════════════════════ */

const SplitChars = ({
  text,
  className,
  charClass,
}: {
  text: string;
  className?: string;
  charClass: string;
}) => (
  <span className={className}>
    {text.split(" ").map((word, wordIdx) => (
      <span key={wordIdx} className={styles.wordOuter}>
        {word.split("").map((char, charIdx) => (
          <span key={charIdx} className={styles.charOuter}>
            <span className={`${charClass} ${styles.char}`}>{char}</span>
          </span>
        ))}
        {/* Add a space after each word except the last one */}
        {wordIdx < text.split(" ").length - 1 && (
          <span className={styles.charOuter}>
            <span className={styles.char}>&nbsp;</span>
          </span>
        )}
      </span>
    ))}
  </span>
);

/* ═══════════════════════════════════════
   Animation Helpers
   ═══════════════════════════════════════ */

/** Check reduced-motion preference once */
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Animate a slide IN — cinematic reveal */
function animateSlideIn(el: HTMLElement): gsap.core.Timeline {
  const contentWrapper = el.querySelector(`.${styles.contentWrapper}`);
  const charsL1 = el.querySelectorAll(`.${styles.charLine1}`);
  const charsL2 = el.querySelectorAll(`.${styles.charLine2}`);
  const desc = el.querySelector(`.${styles.description}`);
  const reduced = prefersReducedMotion();

  const tl = gsap.timeline();

  // Unified start for all transitions
  tl.set(el, { zIndex: 10, visibility: "visible", opacity: 1 });
  tl.set(contentWrapper, { visibility: "visible", opacity: 1 });

  if (reduced) {
    tl.set([charsL1, charsL2], { opacity: 1, yPercent: 0 });
    tl.set(desc, { opacity: 1, y: 0 });
    return tl;
  }

  // ── Reset chars — standardized depth
  tl.set([charsL1, charsL2], {
    opacity: 0,
    yPercent: 30,
    filter: "blur(12px)",
    transformOrigin: "50% 0%",
  });

  tl.set(desc, {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  });

  // ── Entrance Timing ──
  tl.to(charsL1, {
    opacity: 1,
    yPercent: 0,
    filter: "blur(0px)",
    duration: 0.8,
    stagger: { amount: 0.3, from: "start" },
    ease: "expo.out",
  });

  tl.to(
    charsL2,
    {
      opacity: 1,
      yPercent: 0,
      filter: "blur(0px)",
      duration: 0.8,
      stagger: { amount: 0.3, from: "start" },
      ease: "expo.out",
    },
    "<0.1",
  );

  tl.to(
    desc,
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      duration: 1.0,
      ease: "power3.out",
    },
    "<0.2",
  );

  return tl;
}

/** Animate a slide OUT — smooth cinematic fade */
function animateSlideOut(el: HTMLElement): gsap.core.Timeline {
  const contentWrapper = el.querySelector(`.${styles.contentWrapper}`);
  const charsL1 = el.querySelectorAll(`.${styles.charLine1}`);
  const charsL2 = el.querySelectorAll(`.${styles.charLine2}`);
  const desc = el.querySelector(`.${styles.description}`);
  const reduced = prefersReducedMotion();

  const tl = gsap.timeline();

  tl.set(el, { zIndex: 1, visibility: "visible" });

  if (reduced) {
    tl.set([charsL1, charsL2], { opacity: 0 });
    tl.set(desc, { opacity: 0 });
    tl.set(contentWrapper, { visibility: "hidden", opacity: 0 });
    tl.set(el, { visibility: "hidden", opacity: 0, y: 0 });
    return tl;
  }

  // ── Exit Timing ──
  tl.to(charsL1, {
    yPercent: -30,
    opacity: 0,
    filter: "blur(12px)",
    duration: 0.6,
    stagger: { amount: 0.2, from: "start" },
    ease: "power3.in",
  });

  tl.to(
    charsL2,
    {
      yPercent: -30,
      opacity: 0,
      filter: "blur(12px)",
      duration: 0.6,
      stagger: { amount: 0.2, from: "start" },
      ease: "power3.in",
    },
    "<0.05",
  );

  tl.to(
    desc,
    {
      y: -15,
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.5,
      ease: "power3.in",
    },
    "<0.1",
  );

  tl.set([el, contentWrapper], { visibility: "hidden", opacity: 0 });

  return tl;
}

/* ═══════════════════════════════════════
   Slider Component
   ═══════════════════════════════════════ */

export const HeroHeadlineSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Refs for GSAP — avoids stale closures
  const isPausedRef = useRef(false);
  const activeRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideEls = useRef<(HTMLDivElement | null)[]>([]);
  const progressEls = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP resources we need to clean up
  const autoAdvance = useRef<gsap.core.Tween | null>(null);
  const progressTween = useRef<gsap.core.Tween | null>(null);
  const idleTween = useRef<gsap.core.Tween | null>(null);
  const transitionTl = useRef<gsap.core.Timeline | null>(null);
  const isAnimating = useRef(false);

  /* ───── Stable ref for goToSlide (avoids circular deps) ───── */
  const goToSlideRef = useRef<(index: number) => void>(
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
  );

  /* ───── Auto-Advance Scheduler ───── */

  const scheduleAutoAdvance = useCallback(() => {
    // Kill any existing scheduled call
    autoAdvance.current?.kill();

    autoAdvance.current = gsap.delayedCall(SLIDE_DURATION, () => {
      const next = (activeRef.current + 1) % SLIDES.length;
      goToSlideRef.current(next);
    });
    if (isPausedRef.current) {
      autoAdvance.current.pause();
    }
  }, []);

  /* ───── Progress Bar ───── */

  const startProgressBar = useCallback((index: number) => {
    // Reset all bars except the active one
    progressEls.current.forEach((el, i) => {
      if (el && i !== index) {
        gsap.killTweensOf(el);
        gsap.to(el, {
          scaleX: 0,
          opacity: 0.25,
          duration: 0.25,
          transformOrigin: "left center",
          ease: "power2.out",
        });
      }
    });

    // Animate current bar over slideDuration
    const bar = progressEls.current[index];
    if (bar) {
      progressTween.current?.kill();
      progressTween.current = gsap.fromTo(
        bar,
        { scaleX: 0, opacity: 1 },
        {
          scaleX: 1,
          opacity: 1,
          duration: SLIDE_DURATION,
          ease: "none",
          transformOrigin: "left center",
          paused: isPausedRef.current,
        },
      );
    }
  }, []);

  /* ───── Idle Breathing ───── */

  const startIdleBreathing = useCallback((el: HTMLElement) => {
    idleTween.current?.kill();

    if (prefersReducedMotion()) return;

    idleTween.current = gsap.to(el, {
      y: "-=8",
      rotateZ: 0.5,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  /* ───── Core Navigation ───── */

  const goToSlide = useCallback(
    (nextIndex: number) => {
      if (isAnimating.current || nextIndex === activeRef.current) return;

      const prevIndex = activeRef.current;
      const prevEl = slideEls.current[prevIndex];
      const nextEl = slideEls.current[nextIndex];

      if (!prevEl || !nextEl) return;

      isAnimating.current = true;

      // 1. Kill all potential conflicting tweens immediately
      autoAdvance.current?.kill();
      progressTween.current?.kill();
      idleTween.current?.kill();
      transitionTl.current?.kill();

      // 2. State update for logic safety (ref-only)
      activeRef.current = nextIndex;

      // 3. Reset idle transform and add slight "push" to outgoing slide
      gsap.to(prevEl, { y: 0, duration: 0.5, ease: "power2.inOut" });

      // 5. Unified Transition Timeline
      const master = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
          startIdleBreathing(nextEl);
        },
      });

      // Exit and Entrance with precise overlap
      master.add(animateSlideOut(prevEl));

      // Sync UI state and progress bar EXACTLY when the next slide starts entering (0.3s overlap)
      master.add(() => {
        setActiveIndex(nextIndex);
        startProgressBar(nextIndex);
        scheduleAutoAdvance();
      }, 0.3);

      master.add(animateSlideIn(nextEl), 0.3);

      transitionTl.current = master;
    },
    [startProgressBar, startIdleBreathing, scheduleAutoAdvance],
  );

  // Keep stable ref in sync
  goToSlideRef.current = goToSlide;

  /* ───── Bootstrap: initial slide enter + auto advance ───── */

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Hide all slides initially
      slideEls.current.forEach((el) => {
        if (el) gsap.set(el, { visibility: "hidden", opacity: 0, zIndex: 1 });
      });

      // Enter the first slide
      const firstEl = slideEls.current[0];
      if (firstEl) {
        const tl = animateSlideIn(firstEl);
        tl.then(() => {
          startIdleBreathing(firstEl);
          startProgressBar(0);
          scheduleAutoAdvance();
        });
      }
    },
    { scope: containerRef },
  );

  /* ───── Mouse Parallax ───── */

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (prefersReducedMotion()) return;

        const { width, height, left, top } = container.getBoundingClientRect();
        const xPos = (e.clientX - left) / width - 0.5;
        const yPos = (e.clientY - top) / height - 0.5;

        // Viewport slight tilt
        const viewport = container.querySelector(`.${styles.slidesViewport}`);
        if (viewport) {
          gsap.to(viewport, {
            rotateY: xPos * 5,
            rotateX: -yPos * 5,
            duration: 1.5,
            ease: "power2.out",
          });
        }

        // Granular content parallax
        const activeSlide = slideEls.current[activeRef.current];
        if (activeSlide) {
          const headline = activeSlide.querySelector(`.${styles.headline}`);
          const desc = activeSlide.querySelector(`.${styles.description}`);

          if (headline) {
            gsap.to(headline, {
              x: xPos * 25,
              y: yPos * 15,
              rotateY: xPos * 8,
              rotateX: -yPos * 8,
              duration: 1.8,
              ease: "power3.out",
            });
          }

          if (desc) {
            gsap.to(desc, {
              x: xPos * 45,
              y: yPos * 25,
              duration: 2.2,
              ease: "power3.out",
            });
          }
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: containerRef },
  );

  /* ───── Keyboard Navigation (scoped to container) ───── */

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToSlide((activeRef.current + 1) % SLIDES.length);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToSlide((activeRef.current - 1 + SLIDES.length) % SLIDES.length);
      }
    },
    [goToSlide],
  );

  /* ───── Render ───── */

  return (
    <div
      className={`${styles.sliderContainer} ${
        isPaused ? styles.sliderPaused : ""
      }`}
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero headline slider"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Slides Viewport */}
      <div className={styles.slidesViewport}>
        {SLIDES.map((data, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={data.id}
              ref={(el) => {
                slideEls.current[index] = el;
              }}
              className={`${styles.slide} ${
                isActive ? styles.slideActive : ""
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${SLIDES.length}`}
              aria-hidden={!isActive}
            >
              <div
                className={`${styles.contentWrapper} ${
                  isActive ? styles.contentActive : ""
                }`}
              >
                <h1 className={`${styles.headline} u-font-black`}>
                  <span className={styles.lineWrapper}>
                    <SplitChars
                      text={data.headlineLine1}
                      className={styles.headlineLine}
                      charClass={styles.charLine1}
                    />
                  </span>
                  <span className={styles.lineWrapper}>
                    <SplitChars
                      text={data.headlineLine2}
                      className={styles.headlineLineSecondary}
                      charClass={styles.charLine2}
                    />
                  </span>
                </h1>
                <p className={styles.description}>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Indicators */}
      <div className={styles.progressContainer} role="tablist">
        {SLIDES.map((_, index) => (
          <button
            key={`progress-${index}`}
            className={`${styles.progressTrack} ${
              index === activeIndex ? styles.progressTrackActive : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1} of ${SLIDES.length}`}
            aria-selected={index === activeIndex}
            role="tab"
            id={`slide-tab-${index}`}
            type="button"
          >
            <div
              className={styles.progressFill}
              ref={(el) => {
                progressEls.current[index] = el;
              }}
            />
          </button>
        ))}
      </div>

      {/* Pause Indicator (screen-reader + visual) */}
      {isPaused && (
        <div className={styles.pauseIndicatorVisible} aria-live="polite">
          <span className={styles.pauseIcon} aria-hidden="true">
            ❚❚
          </span>
          <span className="u-sr-only">Paused</span>
        </div>
      )}
    </div>
  );
};

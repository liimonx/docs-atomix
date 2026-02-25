"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./HeroHeadlineSlider.module.scss";

gsap.registerPlugin(useGSAP);

interface SlideData {
  id: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
}

const slidesData: SlideData[] = [
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

/* ───────── Word-Split Helper ───────── */
const SplitWords = ({
  text,
  className,
  wordClass,
}: {
  text: string;
  className?: string;
  wordClass: string;
}) => (
  <span className={className}>
    {text.split(" ").map((word, i) => (
      <span key={i} className={styles.wordOuter}>
        <span className={`${wordClass} ${styles.word}`}>{word}</span>
      </span>
    ))}
  </span>
);

/* ═══════════════════════════════════════
   Individual Slide
   ═══════════════════════════════════════ */
const HeroHeadlineSlide = ({
  data,
  isActive,
  isFirstRender,
}: {
  data: SlideData;
  isActive: boolean;
  isFirstRender: boolean;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const idleAnim = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      const ctx = container.current;

      // Scoped selectors — only target elements inside THIS slide
      const wordsL1 = ctx.querySelectorAll(`.${styles.wordLine1}`);
      const wordsL2 = ctx.querySelectorAll(`.${styles.wordLine2}`);
      const desc = ctx.querySelector(`.${styles.description}`);
      const shimmer = ctx.querySelector(`.${styles.shimmerOverlay}`);

      if (isActive) {
        /* ─── ENTER ─── */
        // Kill any lingering idle animation
        idleAnim.current?.kill();

        // Ensure container is visible and on top
        gsap.set(ctx, { zIndex: 10, visibility: "visible", opacity: 1 });

        const tl = gsap.timeline();

        // ── Reset words
        gsap.set([wordsL1, wordsL2], {
          yPercent: 30, // Reduced from 100 for better visibility during start
          opacity: 0,
          rotateX: -30, // Much safer rotation
          rotateY: 0,
          skewY: 0,
          scale: 0.95,
          filter: "blur(4px)",
          transformOrigin: "50% 100%",
        });

        gsap.set(desc, {
          y: 10,
          opacity: 0,
          filter: "blur(8px)",
          scale: 1,
        });

        if (shimmer) gsap.set(shimmer, { xPercent: -120, opacity: 0 });

        const enterDelay = isFirstRender ? 0 : 0.3; // Remove delay on first render

        // ── Line 1 words — power cascade
        tl.to(wordsL1, {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          skewY: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.05,
          ease: "expo.out",
          delay: enterDelay,
        });

        // ── Line 2 words — cinematic depth
        tl.to(
          wordsL2,
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            skewY: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.05,
            ease: "expo.out",
          },
          "<0.1",
        );

        // ── Shimmer sweep across headline
        if (shimmer) {
          tl.to(
            shimmer,
            {
              xPercent: 240,
              opacity: 0.8,
              duration: 1.8,
              ease: "power3.inOut",
            },
            "<0.4",
          );
        }

        // ── Description — atmospheric reveal
        tl.to(
          desc,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 1.5,
            ease: "expo.out",
          },
          "0.6",
        );

        // ── Idle breathing animation
        tl.call(() => {
          idleAnim.current = gsap.to(ctx, {
            y: "-=8",
            duration: 4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      } else {
        /* ─── EXIT ─── */
        idleAnim.current?.kill();
        gsap.set(ctx, { zIndex: 1 });

        const exitTl = gsap.timeline();

        // Words slide up and dissolve
        exitTl.to([wordsL1, wordsL2], {
          yPercent: -100,
          opacity: 0,
          rotateX: 45,
          skewY: -5,
          filter: "blur(12px)",
          scale: 0.9,
          duration: 0.8,
          stagger: 0.04,
          ease: "power4.inOut",
        });

        exitTl.to(
          desc,
          {
            y: -25,
            opacity: 0,
            filter: "blur(15px)",
            scale: 0.96,
            duration: 0.6,
            ease: "power3.in",
          },
          "<0.1",
        );

        // Final hide
        exitTl.set(ctx, { visibility: "hidden", opacity: 0, y: 0 });
      }
    },
    { dependencies: [isActive], scope: container },
  );

  return (
    <div
      ref={container}
      className={`${styles.contentWrapper} ${
        isActive ? styles.contentActive : ""
      }`}
    >
      <h1 className={`${styles.headline} u-font-black`}>
        {/* Shimmer overlay for the headline */}
        {/* <span className={styles.shimmerOverlay} aria-hidden="true" /> */}

        <span className={styles.lineWrapper}>
          <SplitWords
            text={data.headlineLine1}
            className={styles.headlineLine}
            wordClass={styles.wordLine1}
          />
        </span>
        <span className={styles.lineWrapper}>
          <SplitWords
            text={data.headlineLine2}
            className={styles.headlineLineSecondary}
            wordClass={styles.wordLine2}
          />
        </span>
      </h1>

      <p className={styles.description}>{data.description}</p>
    </div>
  );
};

/* ═══════════════════════════════════════
   Slider Wrapper
   ═══════════════════════════════════════ */
export const HeroHeadlineSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const slideDuration = 6500;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Mouse Parallax Effect
  useGSAP(
    () => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;

        const { clientX, clientY } = e;
        const { width, height, left, top } =
          containerRef.current.getBoundingClientRect();

        const xPos = (clientX - left) / width - 0.5;
        const yPos = (clientY - top) / height - 0.5;

        // Target elements inside the active viewport
        const activeViewport = containerRef.current.querySelector(
          `.${styles.slidesViewport}`,
        );
        if (activeViewport) {
          gsap.to(activeViewport, {
            rotateY: xPos * 6,
            rotateX: -yPos * 6,
            duration: 1.2,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: containerRef },
  );

  // Reset the auto-advance interval
  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slidesData.length);
    }, slideDuration);
  }, [slideDuration]);

  useEffect(() => {
    setIsFirstRender(false);
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetInterval]);

  // Handle manual click — go to slide and restart timer
  const handleProgressClick = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
      resetInterval();
    },
    [activeIndex, resetInterval],
  );

  useGSAP(
    () => {
      // Reset all progress bars
      progressRefs.current.forEach((ref) => {
        if (ref) {
          gsap.to(ref, {
            scaleX: 0,
            opacity: 0.3,
            duration: 0.35,
            transformOrigin: "left center",
            ease: "power2.out",
          });
        }
      });

      // Animate current active bar
      const currentRef = progressRefs.current[activeIndex];
      if (currentRef) {
        gsap.fromTo(
          currentRef,
          { scaleX: 0, opacity: 1 },
          {
            scaleX: 1,
            opacity: 1,
            duration: slideDuration / 1000,
            ease: "none",
          },
        );
      }
    },
    { dependencies: [activeIndex] },
  );

  return (
    <div className={styles.sliderContainer} ref={containerRef}>
      {/* Slides Viewport */}
      <div className={styles.slidesViewport}>
        {slidesData.map((data, index) => {
          const isActiveState = index === activeIndex;
          return (
            <div
              key={data.id}
              className={`${styles.slide} ${
                isActiveState ? styles.slideActive : ""
              }`}
            >
              <HeroHeadlineSlide
                data={data}
                isActive={isActiveState}
                isFirstRender={isFirstRender}
              />
            </div>
          );
        })}
      </div>

      {/* Progress Indicators */}
      <div className={styles.progressContainer}>
        {slidesData.map((_, index) => (
          <button
            key={`progress-${index}`}
            className={`${styles.progressTrack} ${
              index === activeIndex ? styles.progressTrackActive : ""
            }`}
            onClick={() => handleProgressClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          >
            <div
              className={styles.progressFill}
              ref={(el) => {
                progressRefs.current[index] = el;
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

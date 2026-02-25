"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
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
  isTransitioning,
}: {
  data: SlideData;
  isActive: boolean;
  isFirstRender: boolean;
  isTransitioning: boolean;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const idleAnim = useRef<gsap.core.Tween | null>(null);
  const subtlePulse = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!container.current || isTransitioning) return;
      const ctx = container.current;

      // Scoped selectors — only target elements inside THIS slide
      const wordsL1 = ctx.querySelectorAll(`.${styles.wordLine1}`);
      const wordsL2 = ctx.querySelectorAll(`.${styles.wordLine2}`);
      const desc = ctx.querySelector(`.${styles.description}`);
      const shimmer = ctx.querySelector(`.${styles.shimmerOverlay}`);

      if (isActive) {
        /* ─── ENTER ─── */
        // Kill any lingering animations
        idleAnim.current?.kill();
        subtlePulse.current?.kill();

        // Ensure container is visible and on top
        gsap.set(ctx, { zIndex: 10, visibility: "visible", opacity: 1 });

        const tl = gsap.timeline();

        // ── Reset words with enhanced initial state
        gsap.set([wordsL1, wordsL2], {
          yPercent: 40,
          opacity: 0,
          rotateX: -25,
          rotateY: 5,
          skewY: 2,
          scale: 0.92,
          filter: "blur(6px)",
          transformOrigin: "50% 100%",
        });

        gsap.set(desc, {
          y: 15,
          opacity: 0,
          filter: "blur(10px)",
          scale: 0.98,
          letterSpacing: "-0.02em",
        });

        if (shimmer) gsap.set(shimmer, { xPercent: -120, opacity: 0 });

        const enterDelay = isFirstRender ? 0 : 0.25;

        // ── Line 1 words — refined cascade with custom ease
        tl.to(wordsL1, {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          skewY: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: {
            each: 0.04,
            from: "start",
            ease: "power3.out"
          },
          ease: "expo.out",
          delay: enterDelay,
        });

        // ── Line 2 words — with slight delay for dramatic effect
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
            duration: 1.0,
            stagger: {
              each: 0.035,
              from: "start",
              ease: "power3.out"
            },
            ease: "expo.out",
          },
          "<0.15",
        );

        // ── Shimmer sweep with refined timing
        if (shimmer) {
          tl.to(
            shimmer,
            {
              xPercent: 240,
              opacity: 0.75,
              duration: 1.6,
              ease: "power2.inOut",
            },
            "<0.3",
          );
        }

        // ── Description — smooth atmospheric reveal
        tl.to(
          desc,
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            letterSpacing: "0em",
            duration: 1.2,
            ease: "expo.out",
          },
          "0.55",
        );

        // ── Subtle idle breathing animation with refined parameters
        tl.call(() => {
          idleAnim.current = gsap.to(ctx, {
            y: "-=6",
            duration: 3.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          
          // Add subtle pulse effect to headline for premium feel
          subtlePulse.current = gsap.to(wordsL1, {
            scale: 1.02,
            duration: 4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1,
          });
        });
      } else {
        /* ─── EXIT ─── */
        idleAnim.current?.kill();
        subtlePulse.current?.kill();
        gsap.set(ctx, { zIndex: 1 });

        const exitTl = gsap.timeline();

        // Words slide up with refined motion
        exitTl.to([wordsL1, wordsL2], {
          yPercent: -80,
          opacity: 0,
          rotateX: 35,
          rotateY: -3,
          skewY: -3,
          filter: "blur(10px)",
          scale: 0.95,
          duration: 0.7,
          stagger: {
            each: 0.03,
            from: "end",
            ease: "power3.in"
          },
          ease: "power3.inOut",
        });

        exitTl.to(
          desc,
          {
            y: -20,
            opacity: 0,
            filter: "blur(12px)",
            scale: 0.97,
            duration: 0.55,
            ease: "power2.in",
          },
          "<0.1",
        );

        // Final hide with smooth transition
        exitTl.set(ctx, { visibility: "hidden", opacity: 0, y: 0 }, "+=0.1");
      }
    },
    { dependencies: [isActive, isTransitioning], scope: container },
  );

  return (
    <div
      ref={container}
      className={`${styles.contentWrapper} ${
        isActive ? styles.contentActive : ""
      }`}
      aria-hidden={!isActive}
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideDuration = 7000;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Memoize slides data to prevent unnecessary re-renders
  const memoizedSlides = useMemo(() => slidesData, []);

  // Enhanced Mouse Parallax Effect with refined sensitivity
  useGSAP(
    () => {
      if (!containerRef.current) return;
      
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
          containerRef.current!.getBoundingClientRect();

        const xPos = (clientX - left) / width - 0.5;
        const yPos = (clientY - top) / height - 0.5;

        // Target elements inside the active viewport
        const activeViewport = containerRef.current!.querySelector(
          `.${styles.slidesViewport}`,
        );
        if (activeViewport) {
          // More refined parallax with reduced intensity for premium feel
          gsap.to(activeViewport, {
            rotateY: xPos * 4,
            rotateX: -yPos * 4,
            duration: 1.4,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef },
  );

  // Auto-advance logic
  useEffect(() => {
    if (isFirstRender) return;
    
    const startAutoAdvance = () => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % memoizedSlides.length);
      }, slideDuration);
      return interval;
    };
    
    intervalRef.current = startAutoAdvance();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isFirstRender, memoizedSlides.length, slideDuration]);

  // Handle manual navigation
  const goToSlide = useCallback((index: number) => {
    if (index === activeIndex) return;
    
    // Clear any existing interval and timeout to prevent conflicts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setIsTransitioning(true);
    setActiveIndex(index);
    
    // Reset transition state after animation completes
    // Use a more reliable timing based on actual animation duration
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      // Restart auto-advance after manual navigation
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % memoizedSlides.length);
      }, slideDuration);
    }, 1400); // Match the actual GSAP exit animation duration (~1.35s)
  }, [activeIndex, memoizedSlides.length, slideDuration]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToSlide((activeIndex + 1) % memoizedSlides.length);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToSlide((activeIndex - 1 + memoizedSlides.length) % memoizedSlides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, goToSlide, memoizedSlides.length]);

  // Initialize 
  useEffect(() => {
    setIsFirstRender(false);
  }, []);


  useGSAP(
    () => {
      if (isTransitioning) return;
      
      // Reset all progress bars with smooth transition
      progressRefs.current.forEach((ref) => {
        if (ref) {
          gsap.to(ref, {
            scaleX: 0,
            opacity: 0.25,
            duration: 0.3,
            transformOrigin: "left center",
            ease: "power2.out",
          });
        }
      });

      // Animate current active bar with refined timing
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
            onComplete: () => {
              // Add subtle glow effect at completion for premium touch
              gsap.to(currentRef, {
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
                duration: 0.2,
                yoyo: true,
                repeat: 1,
              });
            }
          },
        );
      }
    },
    { dependencies: [activeIndex, isTransitioning] },
  );

  return (
    <div 
      className={styles.sliderContainer} 
      ref={containerRef}
      role="region"
      aria-label="Hero headline slider"
      tabIndex={0}
    >
      {/* Slides Viewport */}
      <div className={styles.slidesViewport}>
        {memoizedSlides.map((data, index) => {
          const isActiveState = index === activeIndex;
          return (
            <div
              key={data.id}
              className={`${styles.slide} ${
                isActiveState ? styles.slideActive : ""
              }`}
              role="tabpanel"
              aria-hidden={!isActiveState}
              aria-labelledby={`slide-tab-${index}`}
            >
              <HeroHeadlineSlide
                data={data}
                isActive={isActiveState}
                isFirstRender={isFirstRender}
                isTransitioning={isTransitioning}
              />
            </div>
          );
        })}
      </div>

      {/* Progress Indicators */}
      <div className={styles.progressContainer} role="tablist">
        {memoizedSlides.map((_, index) => (
          <button
            key={`progress-${index}`}
            className={`${styles.progressTrack} ${
              index === activeIndex ? styles.progressTrackActive : ""
            }`}
            onClick={() => {
              if (index !== activeIndex) {
                goToSlide(index);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (index !== activeIndex) {
                  goToSlide(index);
                }
              }
            }}
            aria-label={`Go to slide ${index + 1} of ${memoizedSlides.length}`}
            aria-selected={index === activeIndex}
            role="tab"
            id={`slide-tab-${index}`}
            type="button"
            disabled={index === activeIndex}
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
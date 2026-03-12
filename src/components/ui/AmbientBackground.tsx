"use client";

import { FC, memo, useRef } from "react";
import { useTheme } from "@shohojdhara/atomix";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./AmbientBackground.module.scss";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AmbientBackgroundVariant = "light" | "dark";

interface AmbientBackgroundProps {
  /** Optional extra class names appended to the root element. */
  className?: string;
  /**
   * Explicit variant to override automatic theme detection.
   */
  variant?: AmbientBackgroundVariant;
  /**
   * Enable mouse-based parallax effects (similar to hero headings).
   * @default true
   */
  enableMouseParallax?: boolean;
  /**
   * Enable scroll-based parallax effects using ScrollTrigger.
   * @default true
   */
  enableScrollParallax?: boolean;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * **AmbientBackground**
 *
 * A modern glassmorphism aesthetic with ambient background effects.
 * Features floating glass orbs, layered gradients, and subtle depth.
 * Includes both mouse-based and scroll-based parallax effects.
 */
const AmbientBackgroundBase: FC<AmbientBackgroundProps> = ({
  className = "",
  variant,
  enableMouseParallax = true,
  enableScrollParallax = true,
}) => {
  const { theme } = useTheme();

  // References for orb elements
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const orb4Ref = useRef<HTMLDivElement>(null);
  const orb5Ref = useRef<HTMLDivElement>(null);
  const orb6Ref = useRef<HTMLDivElement>(null);

  // References for overlay elements
  const gradientBaseRef = useRef<HTMLDivElement>(null);
  const gridOverlayRef = useRef<HTMLDivElement>(null);
  const glassOverlayRef = useRef<HTMLDivElement>(null);
  const noiseOverlayRef = useRef<HTMLDivElement>(null);
  const vignetteOverlayRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Use explicit variant or fallback to current theme
  const activeVariant =
    variant ||
    (theme === "dark" || theme === "high-contrast" ? "dark" : "light");

  // Map Variant to CSS Module Class
  const themeClass =
    activeVariant === "dark" ? styles["theme-dark"] : styles["theme-light"];

  // Construct final className
  const rootClasses = [styles.root, themeClass, className]
    .filter(Boolean)
    .join(" ");

  // Helper function to check for reduced motion preference
  const prefersReducedMotion = () => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  // Mouse-based parallax effect (similar to hero headings)
  useGSAP(
    () => {
      if (!enableMouseParallax || prefersReducedMotion()) return;

      const handleMouseMove = (e: MouseEvent) => {
        const xPos = e.clientX / window.innerWidth - 0.5;
        const yPos = e.clientY / window.innerHeight - 0.5;

        // Orbs: Different parallax speeds for each orb to create depth
        // Larger orbs move slower, smaller orbs move faster
        const orbs = [
          { ref: orb1Ref, x: xPos * 30, y: yPos * 20, duration: 2.0 }, // Slowest (largest)
          { ref: orb2Ref, x: xPos * 35, y: yPos * 25, duration: 1.9 },
          { ref: orb3Ref, x: xPos * 40, y: yPos * 30, duration: 1.8 },
          { ref: orb4Ref, x: xPos * 50, y: yPos * 35, duration: 1.7 },
          { ref: orb5Ref, x: xPos * 60, y: yPos * 40, duration: 1.6 },
          { ref: orb6Ref, x: xPos * 70, y: yPos * 45, duration: 1.5 }, // Fastest (smallest)
        ];

        // Overlay elements: Subtle movement for depth
        const overlays = [
          { ref: gradientBaseRef, x: xPos * 15, y: yPos * 10, duration: 2.2 }, // Slowest (background)
          { ref: gridOverlayRef, x: xPos * 20, y: yPos * 15, duration: 2.0 },
          { ref: glassOverlayRef, x: xPos * 10, y: yPos * 8, duration: 2.5 },
          { ref: noiseOverlayRef, x: xPos * 12, y: yPos * 10, duration: 2.3 },
          { ref: vignetteOverlayRef, x: xPos * 5, y: yPos * 3, duration: 2.8 }, // Slowest (foreground)
        ];

        orbs.forEach((orb) => {
          if (orb.ref.current) {
            gsap.to(orb.ref.current, {
              x: orb.x,
              y: orb.y,
              duration: orb.duration,
              ease: "power3.out",
            });
          }
        });

        overlays.forEach((overlay) => {
          if (overlay.ref.current) {
            gsap.to(overlay.ref.current, {
              x: overlay.x,
              y: overlay.y,
              duration: overlay.duration,
              ease: "power3.out",
            });
          }
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: containerRef },
  );

  // Scroll-based parallax effect using ScrollTrigger
  useGSAP(
    () => {
      if (!enableScrollParallax || prefersReducedMotion()) return;

      const orbs = [
        { ref: orb1Ref, speed: 0.1 }, // Slowest (largest orb)
        { ref: orb2Ref, speed: 0.15 },
        { ref: orb3Ref, speed: 0.2 },
        { ref: orb4Ref, speed: 0.25 },
        { ref: orb5Ref, speed: 0.3 },
        { ref: orb6Ref, speed: 0.35 }, // Fastest (smallest orb)
      ];

      // Overlay elements: Subtle scroll movement
      const overlays = [
        { ref: gradientBaseRef, speed: 0.05 }, // Slowest (background)
        { ref: gridOverlayRef, speed: 0.08 },
        { ref: glassOverlayRef, speed: 0.03 },
        { ref: noiseOverlayRef, speed: 0.04 },
        { ref: vignetteOverlayRef, speed: 0.02 }, // Slowest (foreground)
      ];

      orbs.forEach((orb) => {
        if (orb.ref.current) {
          gsap.fromTo(
            orb.ref.current,
            {
              y: 0,
            },
            {
              y: -window.innerHeight * orb.speed,
              ease: "none",
              scrollTrigger: {
                trigger: orb.ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1, // Smooth scrubbing
              },
            },
          );
        }
      });

      overlays.forEach((overlay) => {
        if (overlay.ref.current) {
          gsap.fromTo(
            overlay.ref.current,
            { y: 0 },
            {
              y: -window.innerHeight * overlay.speed,
              ease: "none",
              scrollTrigger: {
                trigger: overlay.ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }
      });

      // Cleanup ScrollTrigger instances on unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef },
  );

  return (
    <div className={rootClasses} aria-hidden="true" ref={containerRef}>
      {/* Base gradient layer */}
      <div ref={gradientBaseRef} className={styles.gradientBase} />

      {/* Grid Pattern overlay for glass contrast */}
      <div ref={gridOverlayRef} className={styles.gridOverlay} />

      {/* Floating glass orbs with parallax */}
      <div
        ref={orb1Ref}
        className={`${styles.orb} ${styles.orb1}`}
        data-parallax="mouse"
      />
      <div
        ref={orb2Ref}
        className={`${styles.orb} ${styles.orb2}`}
        data-parallax="mouse"
      />
      <div
        ref={orb3Ref}
        className={`${styles.orb} ${styles.orb3}`}
        data-parallax="mouse"
      />
      <div
        ref={orb4Ref}
        className={`${styles.orb} ${styles.orb4}`}
        data-parallax="mouse"
      />
      <div
        ref={orb5Ref}
        className={`${styles.orb} ${styles.orb5}`}
        data-parallax="mouse"
      />
      <div
        ref={orb6Ref}
        className={`${styles.orb} ${styles.orb6}`}
        data-parallax="mouse"
      />

      {/* Glassmorphism overlays */}
      <div ref={glassOverlayRef} className={styles.glassOverlay} />
      <div ref={noiseOverlayRef} className={styles.noiseOverlay} />
      <div ref={vignetteOverlayRef} className={styles.vignetteOverlay} />
    </div>
  );
};

export const AmbientBackground = memo(AmbientBackgroundBase);

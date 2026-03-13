"use client";

import { FC, memo, useRef, useCallback, useState, useEffect } from "react";
import { } from "@shohojdhara/atomix";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./AmbientBackground.module.scss";

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AmbientBackgroundVariant = "light" | "dark";

interface ParallaxConfig {
  mouseSpeed: { x: number; y: number };
  mouseDuration: number;
  scrollSpeed: number;
}

interface OrbConfig extends ParallaxConfig {
  id: number;
  className: string;
}

interface OverlayConfig extends ParallaxConfig {
  name: string;
  className: string;
}

interface AmbientBackgroundProps {
  /** Optional extra class names appended to the root element. */
  className?: string;
  /** Explicit variant to override automatic theme detection. */
  variant?: AmbientBackgroundVariant;
  /** Enable mouse-based parallax effects. @default true */
  enableMouseParallax?: boolean;
  /** Enable scroll-based parallax effects using ScrollTrigger. @default true */
  enableScrollParallax?: boolean;
}

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const ORBS_CONFIG: OrbConfig[] = [
  {
    id: 1,
    className: styles.orb1,
    mouseSpeed: { x: 30, y: 20 },
    mouseDuration: 2.0,
    scrollSpeed: 0.1,
  },
  {
    id: 2,
    className: styles.orb2,
    mouseSpeed: { x: 35, y: 25 },
    mouseDuration: 1.9,
    scrollSpeed: 0.15,
  },
  {
    id: 3,
    className: styles.orb3,
    mouseSpeed: { x: 40, y: 30 },
    mouseDuration: 1.8,
    scrollSpeed: 0.2,
  },
  {
    id: 4,
    className: styles.orb4,
    mouseSpeed: { x: 50, y: 35 },
    mouseDuration: 1.7,
    scrollSpeed: 0.25,
  },
  {
    id: 5,
    className: styles.orb5,
    mouseSpeed: { x: 60, y: 40 },
    mouseDuration: 1.6,
    scrollSpeed: 0.3,
  },
  {
    id: 6,
    className: styles.orb6,
    mouseSpeed: { x: 70, y: 45 },
    mouseDuration: 1.5,
    scrollSpeed: 0.35,
  },
];

const OVERLAYS_CONFIG: OverlayConfig[] = [
  {
    name: "gradient",
    className: styles.gradientBase,
    mouseSpeed: { x: 15, y: 10 },
    mouseDuration: 2.2,
    scrollSpeed: 0.05,
  },
  {
    name: "grid",
    className: styles.gridOverlay,
    mouseSpeed: { x: 20, y: 15 },
    mouseDuration: 2.0,
    scrollSpeed: 0.08,
  },
  {
    name: "glass",
    className: styles.glassOverlay,
    mouseSpeed: { x: 10, y: 8 },
    mouseDuration: 2.5,
    scrollSpeed: 0.03,
  },
  {
    name: "noise",
    className: styles.noiseOverlay,
    mouseSpeed: { x: 12, y: 10 },
    mouseDuration: 2.3,
    scrollSpeed: 0.04,
  },
  {
    name: "vignette",
    className: styles.vignetteOverlay,
    mouseSpeed: { x: 5, y: 3 },
    mouseDuration: 2.8,
    scrollSpeed: 0.02,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------------------------------------------------------------------------
// Hooks
// ---------------------------------------------------------------------------

const useAmbientParallax = ({
  enableMouseParallax,
  enableScrollParallax,
  scope,
}: {
  enableMouseParallax: boolean;
  enableScrollParallax: boolean;
  scope: React.RefObject<HTMLDivElement | null>;
}) => {
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const cleanupFns: (() => void)[] = [];

      // Mouse Parallax
      if (enableMouseParallax) {
        const handleMouseMove = (e: MouseEvent) => {
          const xPos = e.clientX / window.innerWidth - 0.5;
          const yPos = e.clientY / window.innerHeight - 0.5;

          // Animate orbs
          orbRefs.current.forEach((el, i) => {
            if (el && ORBS_CONFIG[i]) {
              gsap.to(el, {
                x: xPos * ORBS_CONFIG[i].mouseSpeed.x,
                y: yPos * ORBS_CONFIG[i].mouseSpeed.y,
                duration: ORBS_CONFIG[i].mouseDuration,
                ease: "power3.out",
                overwrite: "auto",
              });
            }
          });

          // Animate overlays
          OVERLAYS_CONFIG.forEach((config) => {
            const el = overlayRefs.current.get(config.name);
            if (el) {
              gsap.to(el, {
                x: xPos * config.mouseSpeed.x,
                y: yPos * config.mouseSpeed.y,
                duration: config.mouseDuration,
                ease: "power3.out",
                overwrite: "auto",
              });
            }
          });
        };

        window.addEventListener("mousemove", handleMouseMove);
        cleanupFns.push(() => window.removeEventListener("mousemove", handleMouseMove));
      }

      // Scroll Parallax
      if (enableScrollParallax) {
        // Shared scroll trigger config
        const getScrollConfig = (el: HTMLElement, speed: number) => ({
          y: -window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        orbRefs.current.forEach((el, i) => {
          if (el && ORBS_CONFIG[i]) {
            gsap.to(el, getScrollConfig(el, ORBS_CONFIG[i].scrollSpeed));
          }
        });

        OVERLAYS_CONFIG.forEach((config) => {
          const el = overlayRefs.current.get(config.name);
          if (el) {
            gsap.to(el, getScrollConfig(el, config.scrollSpeed));
          }
        });

        cleanupFns.push(() => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        });
      }

      return () => cleanupFns.forEach((fn) => fn());
    },
    {
      scope,
      dependencies: [enableMouseParallax, enableScrollParallax, orbRefs.current.length],
    },
  );

  const setOrbRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    orbRefs.current[index] = el;
  }, []);

  const setOverlayRef = useCallback((name: string) => (el: HTMLDivElement | null) => {
    if (el) overlayRefs.current.set(name, el);
    else overlayRefs.current.delete(name);
  }, []);

  return { setOrbRef, setOverlayRef };
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const AmbientBackgroundBase: FC<AmbientBackgroundProps> = ({
  className = "",
  variant,
  enableMouseParallax = true,
  enableScrollParallax = true,
}) => {
  const [internalTheme, setInternalTheme] = useState<string>("light");
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync with body attribute since useTheme might not be reactive to external toggles
  useEffect(() => {
    if (typeof document === "undefined") return;

    const getThemeFromDOM = () => {
      return document.body.getAttribute("data-atomix-color-mode") || "light";
    };

    setInternalTheme(getThemeFromDOM());

    const observer = new MutationObserver(() => {
      setInternalTheme(getThemeFromDOM());
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-atomix-color-mode"],
    });

    return () => observer.disconnect();
  }, []);

  const theme = variant ?? internalTheme;
  const activeVariant = theme.includes("dark") || theme === "high-contrast" ? "dark" : "light";
  const themeClass = activeVariant === "dark" ? styles["theme-dark"] : styles["theme-light"];

  const { setOrbRef, setOverlayRef } = useAmbientParallax({
    enableMouseParallax,
    enableScrollParallax,
    scope: containerRef,
  });

  const rootClasses = [styles.root, themeClass, className].filter(Boolean).join(" ");

  return (
    <div className={rootClasses} aria-hidden="true" ref={containerRef}>
      {/* Overlay layers */}
      {OVERLAYS_CONFIG.map((config) => (
        <div key={config.name} ref={setOverlayRef(config.name)} className={config.className} />
      ))}

      {/* Orb elements */}
      {ORBS_CONFIG.map((config, i) => (
        <div key={config.id} ref={setOrbRef(i)} className={`${styles.orb} ${config.className}`} />
      ))}
    </div>
  );
};

export const AmbientBackground = memo(AmbientBackgroundBase);

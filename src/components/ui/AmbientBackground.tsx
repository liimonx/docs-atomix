"use client";

import { FC, memo, useRef, useState, useEffect } from "react";
import styles from "./AmbientBackground.module.scss";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AmbientBackgroundVariant = "light" | "dark";

interface OrbConfig {
  id: number;
  className: string;
}

interface OverlayConfig {
  name: string;
  className: string;
}

interface AmbientBackgroundProps {
  /** Optional extra class names appended to the root element. */
  className?: string;
  /** Explicit variant to override automatic theme detection. */
  variant?: AmbientBackgroundVariant;
}

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const ORBS_CONFIG: OrbConfig[] = [
  { id: 1, className: styles.orb1 },
  { id: 2, className: styles.orb2 },
  { id: 3, className: styles.orb3 },
  { id: 4, className: styles.orb4 },
  { id: 5, className: styles.orb5 },
  { id: 6, className: styles.orb6 },
];

const OVERLAYS_CONFIG: OverlayConfig[] = [
  { name: "gradient", className: styles.gradientBase },
  { name: "grid", className: styles.gridOverlay },
  { name: "glass", className: styles.glassOverlay },
  { name: "noise", className: styles.noiseOverlay },
  { name: "vignette", className: styles.vignetteOverlay },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const AmbientBackgroundBase: FC<AmbientBackgroundProps> = ({
  className = "",
  variant,
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

  const rootClasses = [styles.root, themeClass, className].filter(Boolean).join(" ");

  return (
    <div className={rootClasses} aria-hidden="true" ref={containerRef}>
      {/* Overlay layers */}
      {OVERLAYS_CONFIG.map((config) => (
        <div key={config.name} className={config.className} />
      ))}

      {/* Orb elements */}
      {ORBS_CONFIG.map((config) => (
        <div key={config.id} className={`${styles.orb} ${config.className}`} />
      ))}
    </div>
  );
};

export const AmbientBackground = memo(AmbientBackgroundBase);

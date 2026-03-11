"use client";

import { FC, memo } from "react";
import { useTheme } from "@shohojdhara/atomix";
import styles from "./AmbientBackground.module.scss";

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
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * **AmbientBackground**
 *
 * A modern glassmorphism aesthetic with ambient background effects.
 * Features floating glass orbs, layered gradients, and subtle depth.
 */
const AmbientBackgroundBase: FC<AmbientBackgroundProps> = ({
  className = "",
  variant,
}) => {
  const { theme } = useTheme();

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

  return (
    <div className={rootClasses} aria-hidden="true">
      {/* Base gradient layer */}
      <div className={styles.gradientBase} />

      {/* Floating glass orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={`${styles.orb} ${styles.orb4}`} />
      <div className={`${styles.orb} ${styles.orb5}`} />
      <div className={`${styles.orb} ${styles.orb6}`} />

      {/* Glassmorphism overlays */}
      <div className={styles.glassOverlay} />
      <div className={styles.noiseOverlay} />
      <div className={styles.vignetteOverlay} />
    </div>
  );
};

export const AmbientBackground = memo(AmbientBackgroundBase);

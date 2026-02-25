"use client";

import { FC, memo } from "react";
import styles from "./AmbientBackground.module.scss";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AmbientBackgroundProps {
  /** Optional extra class names appended to the root element. */
  className?: string;
  /**
   * Controls the overall opacity / vibrancy of every layer.
   * - `"subtle"`  — muted, minimal distraction
   * - `"normal"` — balanced default
   * - `"vivid"`  — punchy, eye-catching
   * @default "normal"
   */
  intensity?: "subtle" | "normal" | "vivid";
  /**
   * Whether to render the film-grain noise overlay.
   * Disable on low-end devices or when the grain conflicts with content.
   * @default true
   */
  showNoise?: boolean;
}

// Map intensity prop → CSS Module class
const intensityClass: Record<string, string> = {
  subtle: styles.subtle,
  vivid: styles.vivid,
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * **AmbientBackground**
 *
 * A decorative, non-interactive backdrop consisting of layered glows,
 * a slowly rotating mesh gradient, an SVG grain texture, and a cinematic
 * vignette. Designed for design-system documentation sites where visual
 * richness reinforces the brand.
 *
 * All animations honour `prefers-reduced-motion`, and the component is
 * fully `aria-hidden` to avoid polluting the accessibility tree.
 */
const AmbientBackgroundBase: FC<AmbientBackgroundProps> = ({
  className = "",
  intensity = "normal",
  showNoise = true,
}) => {
  const rootClasses = [styles.root, intensityClass[intensity] ?? "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClasses} aria-hidden="true">
      {/* Layer 1 — slowly rotating mesh gradient */}
      <div className={styles.mesh} />

      {/* Layer 2 — primary blue-cyan glow (top-left) */}
      <div className={styles.glowPrimary} />

      {/* Layer 3 — secondary purple glow (bottom-right) */}
      <div className={styles.glowSecondary} />

      {/* Layer 4 — accent green glow (center) */}
      <div className={styles.glowAccent} />

      {/* Layer 5 — film-grain noise texture */}
      {showNoise && <div className={styles.noise} />}

      {/* Layer 6 — vignette shadow ring */}
      <div className={styles.vignette} />
    </div>
  );
};

export const AmbientBackground = memo(AmbientBackgroundBase);

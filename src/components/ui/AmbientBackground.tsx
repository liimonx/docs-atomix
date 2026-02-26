"use client";

import { FC, memo } from "react";
import styles from "./AmbientBackground.module.scss";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AmbientBackgroundProps {
  /** Optional extra class names appended to the root element. */
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * **AmbientBackground**
 *
 * A minimal, aesthetic gradient backdrop for design-system documentation.
 * Uses CSS radial-gradients to simulate soft overhead light.
 */
const AmbientBackgroundBase: FC<AmbientBackgroundProps> = ({
  className = "",
}) => {
  const rootClasses = [styles.root, className].filter(Boolean).join(" ");

  return <div className={rootClasses} aria-hidden="true" />;
};

export const AmbientBackground = memo(AmbientBackgroundBase);

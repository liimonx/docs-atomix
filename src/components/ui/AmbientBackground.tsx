"use client";

import { FC, memo } from "react";
import { usePathname } from "next/navigation";
import styles from "./AmbientBackground.module.scss";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AmbientBackgroundVariant =
  | "auto" // Intelligently chooses based on current path (default)
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
   * If left as "auto" (the default), it intelligently reads the current page path.
   */
  variant?: AmbientBackgroundVariant;
}

// ---------------------------------------------------------------------------
// Theme Logic
// ---------------------------------------------------------------------------

/**
 * Determines the color theme based on the current pathname,
 * applying color psychology to the documentation pages.
 */
const getThemeClassForPath = (path: string | null): string => {
  if (!path) return "";

  // Logic, Structure, Focus (Components) -> Indigo & Cyan
  // Reduces anxiety, promotes concentration and technical clarity.
  if (path.includes("/components")) {
    return styles["theme-focus"];
  }

  // Energy, Vibrancy, Foundation (Design Tokens) -> Orange & Rose
  // Stimulates excitement, creativity, and foundational energy.
  if (path.includes("/design-tokens") || path.includes("/foundation")) {
    return styles["theme-energy"];
  }

  // Growth, Harmony, Freshness (Getting Started) -> Emerald & Sky
  // Promotes a sense of calm, freshness, and welcoming.
  if (
    path.includes("/getting-started") ||
    path.includes("/installation") ||
    path.includes("/overview")
  ) {
    return styles["theme-growth"];
  }

  // Joy, Optimism, Warmth (Examples, Templates)
  if (path.includes("/examples") || path.includes("/templates")) {
    return styles["theme-warmth"];
  }

  // Tranquility, Reliability, Depth (API, FAQ, Support)
  if (
    path.includes("/api") ||
    path.includes("/faq") ||
    path.includes("/support")
  ) {
    return styles["theme-calm"];
  }

  // Creativity, Wisdom, Mystery (Advanced, Architecture, Guides)
  if (
    path.includes("/advanced") ||
    path.includes("/architecture") ||
    path.includes("/guides")
  ) {
    return styles["theme-mystery"];
  }

  // Caution, Urgency (Migration, Deprecated)
  if (
    path.includes("/migration") ||
    path.includes("/breaking-changes") ||
    path.includes("/deprecated")
  ) {
    return styles["theme-alert"];
  }

  // Natural, Refreshing (Community, Blog, About)
  if (
    path.includes("/community") ||
    path.includes("/blog") ||
    path.includes("/about")
  ) {
    return styles["theme-nature"];
  }

  // Trust, Creativity, Luxury (Home/Default) -> Blue & Purple
  return "";
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * **AmbientBackground**
 *
 * A minimal, aesthetic gradient backdrop for design-system documentation.
 * It intelligently changes colors based on the current page to evoke
 * different psychological responses, or can be overridden via `variant` prop.
 */
const AmbientBackgroundBase: FC<AmbientBackgroundProps> = ({
  className = "",
  variant = "auto",
}) => {
  const pathname = usePathname();

  // Resolve which theme class to apply
  let themeClass = "";
  if (variant === "auto") {
    themeClass = getThemeClassForPath(pathname);
  } else if (variant !== "default") {
    themeClass = styles[`theme-${variant}`];
  }

  const rootClasses = [styles.root, themeClass, className]
    .filter(Boolean)
    .join(" ");

  return <div className={rootClasses} aria-hidden="true" />;
};

export const AmbientBackground = memo(AmbientBackgroundBase);

"use client";

import { FC } from "react";

interface AmbientBackgroundProps {
  className?: string;
}

/**
 * AmbientBackground - Provides the subtle, cinematic glow effects
 * used throughout the Atomix design.
 */
export const AmbientBackground: FC<AmbientBackgroundProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`u-fixed u-top-0 u-left-0 u-w-100 u-h-100 u-overflow-hidden u-pointer-events-none u-z-0 ${className}`}
    >
      <div
        className="u-ambient-glow u-top-n20 u-left-n10"
        style={{
          background:
            "radial-gradient(circle, rgba(19, 164, 236, 0.15) 0%, rgba(19, 164, 236, 0) 70%)",
        }}
      ></div>
      <div
        className="u-ambient-glow u-bottom-n20 u-right-n10"
        style={{
          background:
            "radial-gradient(circle, rgba(19, 164, 236, 0.1) 0%, rgba(100, 100, 255, 0) 70%)",
          animationDelay: "1s",
        }}
      ></div>
    </div>
  );
};

"use client";

import { FC, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Spinner, AtomixLogo } from "@shohojdhara/atomix";

interface PageLoaderProps {
  /** Optional message to display under the loader */
  message?: string;
  /** Whether to show the logo */
  showLogo?: boolean;
  /** Whether the loader should be full screen */
  fullScreen?: boolean;
}

export const PageLoader: FC<PageLoaderProps> = ({
  message = "Loading...",
  showLogo = true,
  fullScreen = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Container fade in if full screen
      if (fullScreen && containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
        );
      }

      // Simple, elegant entrance
      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );

      if (showLogo && logoRef.current) {
        // Subtle hover-like float
        gsap.to(logoRef.current, {
          y: -4,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { dependencies: [showLogo, message, fullScreen] },
  );

  return (
    <div
      ref={containerRef}
      className={`u-flex u-items-center u-justify-center u-w-100 ${
        fullScreen
          ? "u-fixed u-top-0 u-start-0 u-h-100 u-z-modal u-backdrop-blur-sm"
          : "u-relative"
      }`}
      style={
        !fullScreen
          ? { minHeight: "400px", height: "calc(100vh - 120px)" }
          : { backgroundColor: "rgba(var(--atomix-background-rgb), 0.5)" }
      }
    >
      <div
        ref={contentRef}
        className="u-flex u-items-center u-justify-center u-z-1"
      >
        <div className="u-flex u-flex-column u-items-center u-justify-center u-gap-5 u-py-10 u-px-14">
          {showLogo && (
            <div
              ref={logoRef}
              className="u-text-primary u-flex u-items-center u-justify-center"
            >
              <AtomixLogo width={48} height={48} />
            </div>
          )}

          <div className="u-flex u-items-center u-justify-center u-relative">
            <Spinner size="md" variant="primary" />
          </div>

          {message && (
            <p
              ref={messageRef}
              className="u-m-0 u-mt-1 u-fs-sm u-font-bold u-text-secondary u-opacity-50 u-uppercase"
              style={{ letterSpacing: "0.2em" }}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

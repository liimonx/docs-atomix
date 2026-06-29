"use client";

import React, { Suspense, FC, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import gsap from "gsap";
import { prefersReducedMotion } from "@/utils/accessibility";

interface PageTransitionProps {
  children: React.ReactNode;
}

function PageTransitionContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const containerRef = useRef<HTMLDivElement>(null);

  const url =
    pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

  useEffect(() => {
    if (!containerRef.current) return;

    if (prefersReducedMotion()) {
      gsap.set(containerRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.32, ease: "easeInOut" },
    );
  }, [url]);

  return (
    <div ref={containerRef} key={url}>
      {children}
    </div>
  );
}

export const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <PageTransitionContent>{children}</PageTransitionContent>
    </Suspense>
  );
};

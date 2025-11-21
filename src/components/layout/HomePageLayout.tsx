'use client';

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Hero, Button, Icon } from "@shohojdhara/atomix";
import { DocumentationHeader } from "@/components/navigation/DocumentationHeader";
import { DocumentationFooter } from "./DocumentationFooter";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { SkipLinks } from "@/components/ui/SkipLinks";
import { useResponsive } from "@/hooks/useResponsive";

export const HomePageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { isMobile } = useResponsive();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [pathname, isMobile]);

  return (
    <div >
      <SkipLinks />
      {/* Header - ALWAYS visible - rendered first for proper DOM order */}
      <DocumentationHeader
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />

      {/* Full-width Hero Section - only shown on homepage */}
      {/* <Hero
        subtitle="A Comprehensive Design System"
        title="Build Amazing UIs with Atomix"
        text="A modern design system with 40+ components, comprehensive layouts, design tokens, and advanced effects like AtomixGlass. Built for React and vanilla JavaScript with accessibility and performance in mind."
        alignment="center"
        backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
        contentWidth="70%"
        fullViewportHeight
        className="u-py-64 hero"
        showOverlay={false}
        actions={
          <>
            <Button
              glass
              variant="primary"
              icon={<Icon name="ArrowRight" size="sm" />}
              onClick={() => router.push("/docs/getting-started/installation")}
            >
              Get Started
            </Button>
            <Button
              glass
              variant="info"
              onClick={() => router.push("/docs/components/overview")}
            >
              Explore Components
            </Button>
          </>
        }
        parallax={true}
        glass={
          {
            displacementScale: 30,
            blurAmount: 5,
            elasticity: 0,
            enableLiquidBlur: true,
            padding: "0 20px",
            cornerRadius: 30,
            overLight: false,
          } as any
        }
      />
      <div className="shade"></div> */}

     
      {/* Main content area - no sidebar for home page */}
      <div className="atomix-docs-main home-page">
        {/* Mobile Navigation Overlay */}
        {isMobile && sidebarOpen && (
          <MobileNavigation
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        {/* Page Content - no sidebar for home page */}
        <main id="main-content" className="atomix-docs-content full-width" role="main">
          {children}
        </main>
      </div>
      
      <DocumentationFooter />
    </div>
  );
};
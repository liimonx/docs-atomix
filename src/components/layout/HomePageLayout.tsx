'use client';

import React, { useState, useEffect, useRef, FC } from "react";
import { usePathname } from "next/navigation";
import { DocumentationHeader } from "@/components/navigation/DocumentationHeader";
import { DocumentationFooter } from "./DocumentationFooter";
import { DocumentationSidebar } from "@/components/navigation/DocumentationSidebar";
import { SkipLinks } from "@/components/ui/SkipLinks";

export const HomePageLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always start with false to match SSR, then set to true on desktop after mount
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Check if we're on desktop and handle resize
  const initialCheckRef = useRef(true);
  const previousIsDesktopRef = useRef<boolean | null>(null);
  
  useEffect(() => {
    setMounted(true);
    
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 1024;
      const wasDesktop = previousIsDesktopRef.current;
      setIsDesktop(desktop);
      
      // Update sidebar state based on screen size
      setSidebarOpen((prev) => {
        // On initial load, open on desktop
        if (initialCheckRef.current && desktop) {
          initialCheckRef.current = false;
          previousIsDesktopRef.current = desktop;
          return true;
        }
        
        // On resize: only change state when switching between mobile/desktop
        if (wasDesktop !== null) {
          // Switching from mobile to desktop: open it
          if (!wasDesktop && desktop && !prev) {
            previousIsDesktopRef.current = desktop;
            return true;
          }
          // Switching from desktop to mobile: close it
          if (wasDesktop && !desktop) {
            previousIsDesktopRef.current = desktop;
            return false;
          }
        }
        
        previousIsDesktopRef.current = desktop;
        return prev; // Otherwise maintain current state
      });
      
      if (initialCheckRef.current) {
        initialCheckRef.current = false;
      }
    };
    
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Close sidebar on route change only on mobile
  useEffect(() => {
    if (mounted && !isDesktop) {
      setSidebarOpen(false);
    }
  }, [pathname, isDesktop, mounted]);

  return (
    <div >
      <SkipLinks />
      {/* Header - ALWAYS visible - rendered first for proper DOM order */}
      <DocumentationHeader
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />

     
      {/* Main content area - no sidebar for home page */}
      <div className="home-page">
        {/* Sidebar (EdgePanel) - for all devices */}
        <DocumentationSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Page Content - no sidebar for home page */}
        <main id="main-content" role="main">
          {children}
        </main>
      </div>
      
      <DocumentationFooter />
    </div>
  );
};
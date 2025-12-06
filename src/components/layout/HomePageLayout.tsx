'use client';

import React, { useState, useEffect, FC } from "react";
import { usePathname } from "next/navigation";
import { DocumentationHeader } from "@/components/navigation/DocumentationHeader";
import { DocumentationFooter } from "./DocumentationFooter";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { SkipLinks } from "@/components/ui/SkipLinks";
import { useResponsive } from "@/hooks/useResponsive";

export const HomePageLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

     
      {/* Main content area - no sidebar for home page */}
      <div className="home-page">
        {/* Mobile Navigation Overlay */}
        {isMobile && sidebarOpen && (
          <MobileNavigation
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        {/* Page Content - no sidebar for home page */}
        <main id="main-content" role="main">
          {children}
        </main>
      </div>
      
      <DocumentationFooter />
    </div>
  );
};
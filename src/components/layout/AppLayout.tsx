'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef, FC } from "react";
import { Container, Grid, GridCol } from "@shohojdhara/atomix";
import { DocumentationHeader } from "@/components/navigation/DocumentationHeader";
import { DocumentationFooter } from "./DocumentationFooter";
import { DocumentationSidebar } from "@/components/navigation/DocumentationSidebar";
import { SkipLinks } from "@/components/ui/SkipLinks";
import { PageTransition } from "./PageTransition";

// Memoize static components to prevent re-renders
const MemoizedSkipLinks = React.memo(SkipLinks);
const MemoizedDocumentationFooter = React.memo(DocumentationFooter);

export const AppLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Always start with false to match SSR, then set to true on desktop after mount
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Memoize callbacks to prevent child re-renders
  const handleMenuToggle = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Close sidebar on route change only on mobile
  useEffect(() => {
    if (mounted && !isDesktop) {
      setSidebarOpen(false);
    }
    const handler = () => {
      if (!isDesktop) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, [isDesktop, mounted]);

  // Memoize header props to prevent re-renders
  const headerProps = useMemo(
    () => ({
      onMenuToggle: handleMenuToggle,
      sidebarOpen,
    }),
    [handleMenuToggle, sidebarOpen]
  );

  // Memoize sidebar props to prevent re-renders - remove activeItem dependency
  const sidebarProps = useMemo(
    () => ({
      isOpen: sidebarOpen,
      onClose: handleSidebarClose,
      onOpen: handleSidebarOpen,
      searchQuery,
      onSearchChange: handleSearchChange,
      onItemSelect: handleSidebarClose, // Close sidebar on mobile after navigation
    }),
    [
      sidebarOpen,
      handleSidebarClose,
      handleSidebarOpen,
      searchQuery,
      handleSearchChange,
    ]
  );

  return (
    <div>
      <MemoizedSkipLinks />
      {/* Header - ALWAYS visible - rendered first for proper DOM order */}
      <DocumentationHeader {...headerProps} />

      {/* Main content area */}
      <Container type="fluid">
        {/* Sidebar (EdgePanel) - Rendered outside grid for all devices */}
        <DocumentationSidebar {...sidebarProps} />
        
        <Grid>
          {/* Page Content - Only this should re-render on route change */}
          <GridCol xs={12}>
            <PageTransition>
              {children}
            </PageTransition>
          </GridCol>
        </Grid>
      </Container>
      <MemoizedDocumentationFooter />
    </div>
  );
};
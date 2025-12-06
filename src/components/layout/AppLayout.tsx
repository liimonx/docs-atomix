"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Grid, GridCol } from "@shohojdhara/atomix";
import { DocumentationHeader } from "@/components/navigation/DocumentationHeader";
import { DocumentationFooter } from "./DocumentationFooter";
import { DocumentationSidebar } from "@/components/navigation/DocumentationSidebar";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { SkipLinks } from "@/components/ui/SkipLinks";
import { useResponsive } from "@/hooks/useResponsive";
import { PageTransition } from "./PageTransition";

// Memoize static components to prevent re-renders
const MemoizedSkipLinks = React.memo(SkipLinks);
const MemoizedDocumentationFooter = React.memo(DocumentationFooter);

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { isMobile } = useResponsive();

  // Memoize callbacks to prevent child re-renders - only depend on isMobile
  const handleMenuToggle = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (!isMobile) return;
    setSidebarOpen(false);
    const handler = () => setSidebarOpen(false);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, [isMobile]);

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
      searchQuery,
      onSearchChange: handleSearchChange,
      onItemSelect: handleSidebarClose, // Close sidebar on mobile after navigation
    }),
    [
      sidebarOpen,
      handleSidebarClose,
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
        <Grid>
          {/* Sidebar - Desktop persistent, mobile overlay */}
          <GridCol xs={12} lg={3} xl={2} className="d-none d-lg-block">
            <DocumentationSidebar {...sidebarProps} />
          </GridCol>

          {/* Mobile Navigation Overlay */}
          {isMobile && sidebarOpen && (
            <MobileNavigation
              isOpen={sidebarOpen}
              onClose={handleSidebarClose}
            />
          )}

          {/* Page Content - Only this should re-render on route change */}
          <GridCol xs={12} lg={9} xl={10}>
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
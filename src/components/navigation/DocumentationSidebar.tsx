"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import {
  Badge,
  Icon,
  Input,
  SideMenu as AtomixSideMenu,
  EdgePanel,
} from "@shohojdhara/atomix";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import Link from "next/link";
import { trapFocus, prefersReducedMotion } from "@/utils/accessibility";

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onItemSelect?: () => void;
  toggleButtonRef?: React.RefObject<HTMLButtonElement>;
}

const EmptySearchState = ({ searchTerm }: { searchTerm: string }) => (
  <div className="u-p-6 u-text-center" role="status" aria-live="polite">
    <Icon name="Search" size="lg" className="u-mb-3 u-color-muted" />
    <p className="u-fs-md u-color-text-secondary u-mb-2">
      No results found for "{searchTerm}"
    </p>
    <p className="u-fs-sm u-color-muted">
      Try a different search term or browse the sections below.
    </p>
  </div>
);

export const DocumentationSidebar = ({
  isOpen,
  onClose,
  onOpen,
  searchQuery: externalSearchQuery,
  onSearchChange: externalOnSearchChange,
  onItemSelect,
  toggleButtonRef,
}: DocumentationSidebarProps) => {
  // Use external search query if provided, otherwise use internal state
  const [internalSearchTerm, setInternalSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const searchTerm = externalSearchQuery !== undefined ? externalSearchQuery : internalSearchTerm;
  const setSearchTerm = useCallback((value: string) => {
    if (externalOnSearchChange) {
      externalOnSearchChange(value);
    } else {
      setInternalSearchTerm(value);
    }
  }, [externalOnSearchChange]);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);
  const panelRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);
  const focusTrapCleanupRef = useRef<(() => void) | null>(null);

  // Handle client-side mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Debounce search input for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 150);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredSections = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return navigationData;
    }

    const searchLower = debouncedSearchTerm.toLowerCase();

    return navigationData
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.title.toLowerCase().includes(searchLower) ||
            item.description?.toLowerCase().includes(searchLower) ||
            item.searchTerms?.some((term) =>
              term.toLowerCase().includes(searchLower)
            )
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [debouncedSearchTerm]);

  const totalItems = filteredSections.reduce(
    (sum, section) => sum + section.items.length,
    0
  );

  const menuItems = useMemo(() => {
    return filteredSections.map((section) => ({
      title: section.title,
      items: section.items.map((item: any) => ({
        title: item.title,
        href: item.path,
        icon: <Icon name={item.icon} />,
        active: pathname === item.path,
        linkComponent: Link as any,
        'aria-current': pathname === item.path ? 'page' : undefined,
      })),
    }));
  }, [filteredSections, pathname]);

  // Find active item and scroll to it when sidebar opens
  useEffect(() => {
    if (isOpen && mounted && panelRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const activeLink = panelRef.current?.querySelector<HTMLAnchorElement>(
          'a[aria-current="page"]'
        );
        if (activeLink) {
          const shouldUseSmooth = !prefersReducedMotion();
          activeLink.scrollIntoView({
            behavior: shouldUseSmooth ? 'smooth' : 'auto',
            block: 'center',
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen, mounted, pathname]);

  // Focus management: trap focus when open, return focus when closed
  useEffect(() => {
    if (!mounted) return;

    if (isOpen && panelRef.current) {
      // Focus search input when sidebar opens
      const focusTimer = setTimeout(() => {
        // Try to focus via ref first, fallback to querySelector
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        } else {
          const input = panelRef.current?.querySelector<HTMLInputElement>(
            'input[type="text"][aria-label*="Search"]'
          );
          input?.focus();
        }
      }, 100);

      // Set up focus trap
      focusTrapCleanupRef.current = trapFocus(panelRef.current);

      return () => {
        clearTimeout(focusTimer);
        focusTrapCleanupRef.current?.();
        focusTrapCleanupRef.current = null;
      };
    } else if (!isOpen && toggleButtonRef?.current) {
      // Return focus to toggle button when sidebar closes
      toggleButtonRef.current.focus();
    }
  }, [isOpen, mounted, toggleButtonRef]);

  // Close panel when pathname changes (navigation occurred)
  useEffect(() => {
    // Only close if pathname actually changed (not on initial mount or when isOpen changes)
    if (mounted && isOpen && pathname !== prevPathnameRef.current) {
      prevPathnameRef.current = pathname;
      onClose();
      setSearchTerm(""); // Clear search on navigation
      onItemSelect?.(); // Call item select callback if provided
    } else if (mounted) {
      // Update ref even if we don't close
      prevPathnameRef.current = pathname;
    }
  }, [pathname, isOpen, onClose, mounted, onItemSelect, setSearchTerm]);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      // Handle opening - sync with parent state if onOpen callback provided
      onOpen?.();
    } else {
      // Handle closing - always sync with parent state
      setSearchTerm(""); // Clear search when closing
      onClose();
    }
  };

  const panelTitleLabel = searchTerm.trim()
    ? `${totalItems} found`
    : totalItems.toString();

  const panelTitle = (
    <div className="u-d-flex u-align-items-center u-gap-2">
      <span>Documentation</span>
      <Badge variant="primary" size="sm" label={panelTitleLabel} />
    </div>
  );

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
    searchInputRef.current?.focus();
  }, [setSearchTerm]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && searchTerm) {
      e.stopPropagation(); // Prevent closing the panel
      handleClearSearch();
    }
  }, [searchTerm, handleClearSearch]);

  return (
    <EdgePanel
      id="documentation-sidebar"
      title={panelTitle}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      position="start"
      mode="slide"
      backdrop={true}
      closeOnBackdropClick={true}
      closeOnEscape={true}
      style={{top: 'var(--atomix-navbar-height, 56px)'}}
      aria-label="Documentation navigation"
      role="navigation"
    >
      <div ref={panelRef} className="u-pt-4">
        {/* Search */}
        <div className="u-mb-6 u-px-2">
          <div className="u-position-relative u-mb-3">
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              size="md"
              aria-label="Search documentation navigation"
              aria-describedby={searchTerm ? "search-results-count" : undefined}
              className="u-w-100"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClearSearch();
                  }
                }}
                className="u-position-absolute u-end-0 u-top-0 u-mt-2 u-me-2 u-bg-transparent u-border-0 u-cursor-pointer u-p-1 u-d-flex u-align-items-center u-justify-content-center"
                aria-label={`Clear search for "${searchTerm}"`}
                type="button"
                tabIndex={0}
              >
                <Icon name="X" size="sm" />
              </button>
            )}
          </div>
          {searchTerm && (
            <div id="search-results-count" className="u-fs-xs u-color-muted u-mt-2" aria-live="polite">
              {totalItems === 0 ? (
                <span>No results found</span>
              ) : (
                <span>{totalItems} {totalItems === 1 ? 'result' : 'results'} found</span>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div>
          {filteredSections.length > 0 ? (
            <AtomixSideMenu
              title={panelTitle}
              menuItems={menuItems}
              LinkComponent={Link as any}
            >
              {null}
            </AtomixSideMenu>
          ) : (
            <EmptySearchState searchTerm={debouncedSearchTerm} />
          )}
        </div>

        {/* Footer Stats */}
        {filteredSections.length > 0 && (
          <div className="u-mt-6 u-pt-4 u-border-top u-px-3 u-fs-xs u-color-muted" role="status">
            <div className="u-d-flex u-justify-content-between u-mb-2">
              <span>Sections: {filteredSections.length}</span>
              <span>Items: {totalItems}</span>
            </div>
          </div>
        )}
      </div>
    </EdgePanel>
  );
};

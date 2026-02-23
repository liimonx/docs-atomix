"use client";

import { FC, useState, useMemo, useEffect, useRef, useCallback } from "react";
import {
  EdgePanel,
  Icon,
  Input,
  SideMenu as AtomixSideMenu,
} from "@shohojdhara/atomix";
import { navigationData } from "@/data/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { trapFocus, prefersReducedMotion } from "@/utils/accessibility";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmptySearchState = ({ searchTerm }: { searchTerm: string }) => (
  <div className="u-p-6 u-text-center" role="status" aria-live="polite">
    <Icon
      name="MagnifyingGlass"
      size="lg"
      className="u-mb-3 u-text-secondary"
    />
    <p className="u-fs-md u-text-secondary u-mb-2">
      No results found for "{searchTerm}"
    </p>
    <p className="u-fs-sm u-text-secondary">
      Try a different search term or browse the sections below.
    </p>
  </div>
);

export const MobileNavigation: FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);
  const panelRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const focusTrapCleanupRef = useRef<(() => void) | null>(null);

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
              term.toLowerCase().includes(searchLower),
            ),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [debouncedSearchTerm]);

  const totalItems = filteredSections.reduce(
    (sum, section) => sum + section.items.length,
    0,
  );

  // Handle client-side mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Focus management: trap focus when open, focus search input
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
            'input[type="text"][aria-label*="Search"]',
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
    }
  }, [isOpen, mounted]);

  const menuItems = useMemo(() => {
    return filteredSections.map((section) => ({
      title: section.title,
      items: section.items.map((item: any) => ({
        title: item.title,
        href: item.path,
        icon: <Icon name={item.icon} />,
        active: pathname === item.path,
        linkComponent: Link as any,
        "aria-current": pathname === item.path ? "page" : undefined,
      })),
    }));
  }, [filteredSections, pathname]);

  // Find active item and scroll to it when sidebar opens
  useEffect(() => {
    if (isOpen && mounted && panelRef.current) {
      const timer = setTimeout(() => {
        const activeLink = panelRef.current?.querySelector<HTMLAnchorElement>(
          'a[aria-current="page"]',
        );
        if (activeLink) {
          const shouldUseSmooth = !prefersReducedMotion();
          activeLink.scrollIntoView({
            behavior: shouldUseSmooth ? "smooth" : "auto",
            block: "center",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen, mounted, pathname]);

  // Close panel when pathname changes (navigation occurred)
  useEffect(() => {
    // Only close if pathname actually changed (not on initial mount or when isOpen changes)
    if (mounted && isOpen && pathname !== prevPathnameRef.current) {
      prevPathnameRef.current = pathname;
      onClose();
      setSearchTerm(""); // Clear search on navigation
    } else if (mounted) {
      // Update ref even if we don't close
      prevPathnameRef.current = pathname;
    }
  }, [pathname, isOpen, onClose, mounted]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSearchTerm(""); // Clear search when closing
      onClose();
    }
  };

  const panelTitle = debouncedSearchTerm.trim()
    ? `Documentation (${totalItems} found)`
    : `Documentation (${totalItems})`;

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
    searchInputRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape" && searchTerm) {
        e.stopPropagation(); // Prevent closing the panel
        handleClearSearch();
      }
    },
    [searchTerm, handleClearSearch],
  );

  return (
    <EdgePanel
      title={panelTitle}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      position="start"
      mode="slide"
      backdrop={true}
      closeOnBackdropClick={true}
      closeOnEscape={true}
    >
      <div ref={panelRef} className="u-pt-4">
        {/* Search */}
        <div className="u-mb-6 u-px-2">
          <div className="u-relative u-mb-3" onKeyDown={handleKeyDown}>
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="md"
              className="u-w-100"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClearSearch();
                  }
                }}
                className="u-absolute u-end-0 u-top-0 u-mt-2 u-me-2 u-bg-transparent u-border-0 u-cursor-pointer u-p-1 u-flex u-items-center u-justify-center"
                aria-label={`Clear search for "${searchTerm}"`}
                type="button"
                tabIndex={0}
              >
                <Icon name="X" size="sm" />
              </button>
            )}
          </div>
          {searchTerm && (
            <div
              id="mobile-search-results-count"
              className="u-text-xs u-text-secondary u-mt-2"
              aria-live="polite"
            >
              {totalItems === 0 ? (
                <span>No results found</span>
              ) : (
                <span>
                  {totalItems} {totalItems === 1 ? "result" : "results"} found
                </span>
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
          <div
            className="u-mt-6 u-pt-4 u-border-top u-px-3 u-text-xs u-text-secondary"
            role="status"
          >
            <div className="u-flex u-justify-between u-mb-2">
              <span>Sections: {filteredSections.length}</span>
              <span>Items: {totalItems}</span>
            </div>
          </div>
        )}
      </div>
    </EdgePanel>
  );
};

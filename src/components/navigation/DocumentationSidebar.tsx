"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import {
  Icon,
  Input,
  SideMenu as AtomixSideMenu,
  EdgePanel,
} from "@shohojdhara/atomix";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import Link from "next/link";

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen?: () => void;
}

const EmptySearchState = () => (
  <div className="u-p-4 u-text-center u-color-muted u-fs-sm">
    <p>No navigation items found. Try a different search term.</p>
  </div>
);

export const DocumentationSidebar = ({
  isOpen,
  onClose,
  onOpen,
}: DocumentationSidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  // Handle client-side mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) {
      return navigationData;
    }

    const searchLower = searchTerm.toLowerCase();

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
  }, [searchTerm]);

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
      })),
    }));
  }, [filteredSections, pathname]);

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
    if (open) {
      // Handle opening - sync with parent state if onOpen callback provided
      onOpen?.();
    } else {
      // Handle closing - always sync with parent state
      setSearchTerm(""); // Clear search when closing
      onClose();
    }
  };

  const panelTitle = searchTerm.trim()
    ? `Documentation (${totalItems} found)`
    : `Documentation (${totalItems})`;

  return (
    <EdgePanel
      title={panelTitle}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      position="start"
      mode="push"
      backdrop={true}
      closeOnBackdropClick={true}
      closeOnEscape={true}
      style={{top: '56px'}}
    >
      <div className="u-pt-4">
        {/* Search */}
        <div className="u-mb-6 u-px-2">
          <div className="u-position-relative u-mb-3">
            <Input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="md"
              aria-label="Search documentation navigation"
              className="u-w-100"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="u-position-absolute u-end-0 u-top-0 u-mt-2 u-me-2 u-bg-transparent u-border-0 u-cursor-pointer u-p-1"
                aria-label="Clear search"
                type="button"
              >
                <Icon name="X" size="sm" />
              </button>
            )}
          </div>
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
            <EmptySearchState />
          )}
        </div>

        {/* Footer Stats */}
        {filteredSections.length > 0 && (
          <div className="u-mt-6 u-pt-4 u-border-top u-px-3 u-fs-xs u-color-muted">
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

"use client";

import  { useState, useMemo } from "react";
import {
  Icon,
  Input,
  SideMenu as AtomixSideMenu,
} from "@shohojdhara/atomix";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import Link from "next/link";
interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmptySearchState = () => (
  <div className="u-p-4 u-text-center u-color-muted u-fs-sm">
    <p>No navigation items found. Try a different search term.</p>
  </div>
);

export const DocumentationSidebar = ({
  isOpen,
  onClose,
}: DocumentationSidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

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

  return (
    <div
      role="navigation"
      aria-label="Documentation navigation"
      className="u-pt-24 u-pb-16 u-position-sticky u-top-0 u-start-0 u-h-100 u-overflow-y-auto"
      style={{ height: "calc(100vh)" }}
    >
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
            title={`Documentation (${totalItems})`}
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

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          aria-hidden="true"
          role="presentation"
          className="u-position-fixed u-top-0 u-start-0 u-w-100 u-h-100 u-bg-dark u-opacity-50 u-z-index-dropdown"
        />
      )}
    </div>
  );
};

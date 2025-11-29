"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Badge,
  Icon,
  Input,
  Accordion,
  SideMenu,
  SideMenuList,
  SideMenuItem,
} from "@shohojdhara/atomix";
import { navigationData } from "@/data/navigation";
import type { NavigationItem } from "@/types/index";

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const DocumentationSidebar: React.FC<DocumentationSidebarProps> =
  React.memo(
    ({ isOpen, onClose, searchQuery: externalSearchQuery, onSearchChange }) => {
      const [searchTerm, setSearchTerm] = useState(externalSearchQuery || "");
      const [filteredNavigation, setFilteredNavigation] =
        useState(navigationData);
      const [expandedSections, setExpandedSections] = useState<string[]>([
        "components",
      ]);

      const pathname = usePathname();

      // Filter navigation based on search
      useEffect(() => {
        if (!searchTerm.trim()) {
          setFilteredNavigation(navigationData);
          // Sync with external search query if provided
          if (onSearchChange) {
            onSearchChange("");
          }
          return;
        }

        const lowerSearchTerm = searchTerm.toLowerCase();
        const filtered = navigationData
          .map((section) => ({
            ...section,
            items: section.items.filter(
              (item) =>
                item.title.toLowerCase().includes(lowerSearchTerm) ||
                (item.description &&
                  item.description.toLowerCase().includes(lowerSearchTerm)) ||
                (item.searchTerms &&
                  item.searchTerms.some((term) =>
                    term.toLowerCase().includes(lowerSearchTerm)
                  ))
            ),
          }))
          .filter((section) => section.items.length > 0);

        setFilteredNavigation(filtered);
        // Sync with external search query if provided
        if (onSearchChange) {
          onSearchChange(searchTerm);
        }
      }, [searchTerm, onSearchChange]);

      // Auto-expand section containing current page (debounced to prevent jitter)
      useEffect(() => {
        const timer = setTimeout(() => {
          const currentSection = navigationData.find((section) =>
            section.items.some((item) => item.path === pathname)
          );

          if (currentSection && !expandedSections.includes(currentSection.id)) {
            setExpandedSections((prev) => [...prev, currentSection.id]);
          }
        }, 50); // Small delay to prevent jitter during navigation

        return () => clearTimeout(timer);
      }, [pathname, expandedSections]);

      const getBadgeVariant = (
        variant: string
      ):
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "info"
        | "danger" => {
        switch (variant) {
          case "new":
            return "success";
          case "beta":
            return "warning";
          case "updated":
            return "info";
          case "deprecated":
            return "danger";
          default:
            return "secondary";
        }
      };

      const handleItemClick = () => {
        // Close mobile sidebar after navigation on mobile devices
        if (typeof window !== "undefined" && window.innerWidth <= 768) {
          onClose();
        }
      };

      const renderNavigationItem = (item: NavigationItem) => {
        const isActive = pathname === item.path;

        return (
          <Link key={item.path} href={item.path} onClick={handleItemClick}>
            <SideMenuItem
              active={isActive}
              icon={
                item.icon ? (
                  <Icon name={item.icon as any} size="sm" />
                ) : undefined
              }
            >
              <span>{item.title}</span>

              {item.badge && (
                <Badge
                  label={item.badge.text}
                  variant={getBadgeVariant(item.badge.variant) as any}
                  size="sm"
                />
              )}

              {item.isNew && <Badge label="New" variant="success" size="sm" />}

              {item.isUpdated && (
                <Badge label="Updated" variant="warning" size="sm" />
              )}
            </SideMenuItem>
          </Link>
        );
      };

      return (
        <>
          <div
            role="navigation"
            aria-label="Documentation navigation"
            className="u-pt-24 u-pb-24"
          >
            {/* Sidebar Header with Search */}
            <div className="u-mb-8 u-position-relative u-w-100">
              <div className="u-w-100">
                <div className="u-position-relative">
                  <Icon
                    name="MagnifyingGlass"
                    size="sm"
                    className="u-mr-2 u-position-absolute u-start-0 u-top-0 u-mt-2"
                  />
                  <div suppressHydrationWarning>
                    <Input
                      type="text"
                      placeholder="Search navigation..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      size="sm"
                      aria-label="Search navigation"
                      glass={{
                        blurAmount: 8,
                        elasticity: 0.1,
                        cornerRadius: 12,
                      }}
                      className="u-w-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Content */}
            <div suppressHydrationWarning>
              <SideMenu title="Documentation" collapsible={false}>
                {filteredNavigation.map((section) => (
                  <div key={section.id} suppressHydrationWarning>
                    <Accordion
                      title={section.title}
                      defaultOpen={expandedSections.includes(section.id)}
                    >
                      <SideMenuList>
                        {section.items.map(renderNavigationItem)}
                      </SideMenuList>
                    </Accordion>
                  </div>
                ))}
              </SideMenu>
            </div>
          </div>

          {/* Mobile overlay backdrop */}
          {isOpen && (
            <div onClick={onClose} aria-hidden="true" role="presentation" />
          )}
        </>
      );
    }
  );

DocumentationSidebar.displayName = "DocumentationSidebar";

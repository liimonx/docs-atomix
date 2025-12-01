"use client";

import React, { 
  useState, 
  useMemo, 
  useCallback, 
  useRef, 
  useEffect,
  ReactNode 
} from "react";
import { usePathname } from "next/navigation";
import {
  Badge,
  Icon,
  Input,
  SideMenu,
  SideMenuList,
  SideMenuItem,
} from "@shohojdhara/atomix";
import { navigationData } from "@/data/navigation";
import type { NavigationItem, NavigationSection, BadgeVariant } from "@/types/index";

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

interface BadgeConfig {
  text: string;
  variant: "primary" | "secondary" | "success" | "warning" | "info" | "danger";
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**
 * Maps badge variants to UI component variants
 */
const getBadgeVariant = (
  variant: BadgeVariant | string
): "primary" | "secondary" | "success" | "warning" | "info" | "danger" => {
  const variantMap: Record<string, "primary" | "secondary" | "success" | "warning" | "info" | "danger"> = {
    "new": "success",
    "beta": "warning",
    "updated": "info",
    "deprecated": "danger",
  };
  
  return variantMap[variant] || "secondary";
};

/**
 * Error Boundary component for graceful error handling
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Sanitize error message to prevent log injection
    const sanitizedMessage = String(error.message).replace(/[\r\n]/g, ' ');
    console.error("DocumentationSidebar Error:", sanitizedMessage, errorInfo.componentStack?.replace(/[\r\n]/g, ' '));
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div 
            className="u-p-4 u-color-danger u-fs-sm"
            role="alert"
          >
            <p>Failed to load navigation. Please refresh the page.</p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

/**
 * Utility function for computing badges for a navigation item
 * (not a React Hook, safe to use in any context)
 */
const getNavigationBadges = (item: NavigationItem): BadgeConfig[] => {
  const badges: BadgeConfig[] = [];
  
  if (item.badge) {
    badges.push({
      text: item.badge.text,
      variant: getBadgeVariant(item.badge.variant)
    });
  }
  
  if (item.isNew) {
    badges.push({
      text: "New",
      variant: "success"
    });
  }
  
  if (item.isUpdated) {
    badges.push({
      text: "Updated",
      variant: "info"
    });
  }
  
  return badges;
};



/**
 * Custom hook for filtering navigation data
 */
const useFilteredNavigation = (
  navigationData: NavigationSection[],
  searchTerm: string
): NavigationSection[] => {
  return useMemo(() => {
    if (!searchTerm.trim()) {
      return navigationData;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return navigationData
      .map(section => {
        const filteredItems = section.items.filter(item => {
          const titleMatch = item.title.toLowerCase().includes(lowerSearchTerm);
          const descriptionMatch = item.description?.toLowerCase().includes(lowerSearchTerm);
          const searchTermsMatch = item.searchTerms?.some(term =>
            term.toLowerCase().includes(lowerSearchTerm)
          );

          return titleMatch || descriptionMatch || searchTermsMatch;
        });

        return {
          ...section,
          items: filteredItems
        };
      })
      .filter(section => section.items.length > 0);
  }, [navigationData, searchTerm]);
};

/**
 * Individual navigation item component with proper memoization
 */
const NavigationItemComponent = React.memo<{
  item: NavigationItem;
  isActive: boolean;
  onClick: () => void;
}>(({ item, isActive, onClick }) => {
  const badges = getNavigationBadges(item);

  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <SideMenuItem
      href={item.path}
      active={isActive}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      icon={item.icon ? <Icon name={item.icon as any} size="sm" aria-hidden="true" /> : undefined}
    >
      <div className="u-d-flex u-align-items-center u-justify-content-between u-w-100">
        <span>{item.title}</span>
        {badges.length > 0 && (
          <div className="u-d-flex u-gap-1" role="group" aria-label={`${item.title} badges`}>
            {badges.map((badge, index) => (
              <Badge
                key={`${item.id}-badge-${index}`}
                label={badge.text}
                variant={badge.variant as any}
                size="sm"
                aria-label={`${badge.text} badge`}
              />
            ))}
          </div>
        )}
      </div>
    </SideMenuItem>
  );
});

NavigationItemComponent.displayName = "NavigationItemComponent";



/**
 * Empty state component for when no results are found
 */
const EmptySearchState: React.FC = () => (
  <div 
    className="u-p-4 u-text-center u-color-muted u-fs-sm"
    role="status"
    aria-live="polite"
  >
    <p>No navigation items found. Try a different search term.</p>
  </div>
);

/**
 * Custom hook for sorting navigation data by priority
 */
const useSortedNavigation = (data: NavigationSection[]): NavigationSection[] => {
  return useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }

    return data
      .map((section) => ({
        ...section,
        items: [...(section.items || [])].sort(
          (a, b) => (a.priority || 999) - (b.priority || 999)
        ),
      }))
      .sort((a, b) => (a.priority || 999) - (b.priority || 999));
  }, [data]);
};

/**
 * Navigation items list component - memoized to prevent re-renders
 */
const NavigationItemsList = React.memo<{
  items: NavigationItem[];
  pathname: string;
  onItemClick: () => void;
}>(({ items, pathname, onItemClick }) => (
  <SideMenuList>
    {items.map((item) => (
      <NavigationItemComponent
        key={item.id}
        item={item}
        isActive={pathname === item.path}
        onClick={onItemClick}
      />
    ))}
  </SideMenuList>
));

NavigationItemsList.displayName = "NavigationItemsList";

/**
 * Custom hook to build menuItems from navigation sections for SideMenu
 */
const useBuildMenuItems = (
  sections: NavigationSection[],
  pathname: string,
  onItemClick: () => void
) => {
  return useMemo(() => {
    return sections
      .filter((s) => s.id !== "static")
      .map((section) => ({
        title: section.title,
        toggleIcon: <Icon name="CaretDown" size="xs" aria-hidden="true" />,
        items: section.items.map((item) => {
          const badges = getNavigationBadges(item);
          return {
            title: (
              <div className="u-d-flex u-align-items-center u-justify-content-between u-w-100">
                <span>{item.title}</span>
                {badges.length > 0 && (
                  <div className="u-d-flex u-gap-1" role="group" aria-label={`${item.title} badges`}>
                    {badges.map((badge, index) => (
                      <Badge
                        key={`${item.id}-badge-${index}`}
                        label={badge.text}
                        variant={badge.variant as any}
                        size="sm"
                        aria-label={`${badge.text} badge`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ),
            href: item.path,
            icon: item.icon ? <Icon name={item.icon as any} size="sm" aria-hidden="true" /> : undefined,
            active: pathname === item.path,
            onClick: onItemClick,
          };
        }),
      }));
  }, [sections, pathname, onItemClick]);
};

/**
 * Main DocumentationSidebar component with advanced SideMenu usage
 */
const DocumentationSidebarContent: React.FC<DocumentationSidebarProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sort navigation data by priority
  const sortedNavigationData = useSortedNavigation(navigationData);

  // Filter navigation based on search term
  const filteredNavigation = useFilteredNavigation(sortedNavigationData, searchTerm);

  // Handle closing sidebar on mobile after navigation
  const handleItemClick = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      onClose();
    }
  }, [onClose]);

  // Handle search input change with validation
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 100) {
      setSearchTerm(value);
    }
  }, []);

  // Clear search on escape key
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setSearchTerm("");
      searchInputRef.current?.blur();
    }
  }, []);

  // Calculate total items count
  const totalItemsCount = useMemo(() => {
    return filteredNavigation.reduce((sum, section) => sum + section.items.length, 0);
  }, [filteredNavigation]);

  // Validate navigation data
  const hasValidNavigation = sortedNavigationData && sortedNavigationData.length > 0;

  // Partition filtered sections into optional "static" section and the rest
  const { staticItems, sectionsExcludingStatic } = useMemo(() => {
    const staticSection = filteredNavigation.find((s) => s.id === "static");
    const staticItems = staticSection ? staticSection.items : [];
    const sectionsExcludingStatic = filteredNavigation.filter((s) => s.id !== "static");
    return { staticItems, sectionsExcludingStatic };
  }, [filteredNavigation]);

  // Build menuItems for SideMenu component
  const menuItems = useBuildMenuItems(sectionsExcludingStatic, pathname, handleItemClick);

  return (
    <ErrorBoundary>
      <div
        role="navigation"
        aria-label="Documentation navigation"
        className="u-pt-24 u-pb-16 u-position-sticky u-top-0 u-start-0 u-h-100 u-overflow-y-auto"
        style={{
          height: "calc(100vh)",
        }}
      >
        {/* Sidebar Header with Search */}
        <div className="u-mb-6 u-position-relative u-w-100 u-px-2">
          <div className="u-w-100">
            {/* Search Input */}
            <div className="u-position-relative u-mb-3">
            
              <div suppressHydrationWarning onKeyDown={handleKeyDown}>
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search documentation..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  size="md"
                  aria-label="Search documentation navigation"
                  aria-describedby="search-help"
                  className="u-w-100"
                />
              </div>
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
            {/* <small id="search-help" className="u-d-block u-color-muted u-fs-xs">
              Press Escape to clear
            </small> */}
          </div>
        </div>

        {/* Navigation Content with Advanced SideMenu */}
        <div suppressHydrationWarning>
          {hasValidNavigation ? (
            <SideMenu
              title={`Documentation (${totalItemsCount})`}
              collapsible
              collapsibleDesktop={false}
              menuItems={filteredNavigation.length > 0 ? menuItems : []}
            >
              {filteredNavigation.length > 0 ? (
                <>
                  {staticItems.length > 0 && (
                    <NavigationItemsList
                      items={staticItems}
                      pathname={pathname}
                      onItemClick={handleItemClick}
                    />
                  )}
                </>
              ) : (
                <EmptySearchState />
              )}
            </SideMenu>
          ) : (
            <div 
              className="u-p-4 u-color-muted u-fs-sm"
              role="status"
            >
              <p>Navigation data is not available.</p>
            </div>
          )}
        </div>

        {/* Footer with Quick Stats */}
        {hasValidNavigation && filteredNavigation.length > 0 && (
          <div className="u-mt-6 u-pt-4 u-border-top u-px-3 u-fs-xs u-color-muted">
            <div className="u-d-flex u-justify-content-between u-mb-2">
              <span>Sections: {filteredNavigation.length}</span>
              <span>Items: {totalItemsCount}</span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile overlay backdrop */}
      {isOpen && (
        <div 
          onClick={onClose} 
          aria-hidden="true" 
          role="presentation" 
          className="u-position-fixed u-top-0 u-start-0 u-w-100 u-h-100 u-bg-dark u-opacity-50 u-z-index-dropdown"
        />
      )}
    </ErrorBoundary>
  );
};

DocumentationSidebarContent.displayName = "DocumentationSidebarContent";

/**
 * Exported component with memo to prevent re-renders from parent
 */
export const DocumentationSidebar = React.memo(DocumentationSidebarContent);

DocumentationSidebar.displayName = "DocumentationSidebar";
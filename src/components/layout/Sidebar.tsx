import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Icon, Badge, Input, Breadcrumb, BreadcrumbItem } from "@shohojdhara/atomix";
import { ChevronRight, ChevronDown } from "lucide-react";
import { navigationData, searchNavigation } from "@data/navigation";
import { SideMenu, SideMenuList, SideMenuItem } from "@shohojdhara/atomix/components/Navigation";
import type { NavigationSection, NavigationItem } from "@/types";

// Helper function to get title from path or item ID
const getTitleFromPath = (path: string): string => {
  const cleanPath = path.split('/').filter(Boolean).pop() || '';
  return cleanPath
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string | null;
  onItemSelect: (itemId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const getBadgeVariant = (
  variant: string
): "primary" | "secondary" | "success" | "danger" | "warning" | "info" => {
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

const NavigationItemComponent: React.FC<{
  item: NavigationItem;
  isActive: boolean;
  onSelect: (itemId: string) => void;
  level: number;
}> = ({ item, isActive, onSelect, level }) => {
  const location = useLocation();
  const isCurrentPath = location.pathname === item.path;

  const handleClick = () => {
    onSelect(item.id);
  };

  return (
    <li className="u-list-none">
      <Link
        to={item.path}
        className={`u-d-flex u-align-items-center u-gap-2 u-py-2 u-px-3 u-rounded u-text-decoration-none u-transition ${
          isCurrentPath
            ? "u-bg-primary-subtle u-text-primary-emphasis"
            : "u-text-body-emphasis hover:u-bg-tertiary-bg-subtle"
        }`}
        onClick={handleClick}
        style={{ paddingLeft: `${0.75 + level * 0.75}rem` }}
      >
        {item.icon && <Icon name={item.icon as any} size="sm" />}
        <span className="u-flex-grow-1">{item.title}</span>
        {item.badge && (
          <Badge
            variant={getBadgeVariant(item.badge.variant) as any}
            size="sm"
            label={item.badge.text}
          />
        )}
      </Link>
      {item.children && item.children.length > 0 && (
        <ul className="u-list-none u-ps-0 u-mt-1">
          {item.children.map((child) => (
            <NavigationItemComponent
              key={child.id}
              item={child}
              isActive={isActive}
              onSelect={onSelect}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const NavigationSectionComponent: React.FC<{
  section: NavigationSection;
  activeItem: string | null;
  onItemSelect: (itemId: string) => void;
  isSearching: boolean;
}> = ({ section, activeItem, onItemSelect, isSearching }) => {
  const [isCollapsed, setIsCollapsed] = useState(section.collapsed || false);
  const shouldShowCollapsed = !isSearching && isCollapsed;

  return (
    <div className="u-mb-4">
      <SideMenu 
        title={section.title} 
        collapsible 
        onToggle={() => setIsCollapsed(!isCollapsed)} 
        isOpen={!isCollapsed}
        className="u-mb-2"
      >
        <SideMenuList>
          {section.items.map((item) => (
            <SideMenuItem 
              key={item.id} 
              href={item.path}
              active={activeItem === item.id}
              onClick={() => onItemSelect(item.id)}
              className="u-d-flex u-align-items-center u-gap-2"
            >
              {item.icon && <Icon name={item.icon as any} size="sm" />}
              <span className="u-flex-grow-1">{item.title}</span>
              {item.badge && (
                <Badge
                  variant={getBadgeVariant(item.badge.variant) as any}
                  size="sm"
                  label={item.badge.text}
                />
              )}
            </SideMenuItem>
          ))}
        </SideMenuList>
      </SideMenu>
    </div>
  );
};

const Sidebar: React.FC<DocumentationSidebarProps> = ({
  isOpen,
  onClose,
  activeItem,
  onItemSelect,
  searchQuery,
  onSearchChange,
}) => {
  const [filteredItems, setFilteredItems] = useState<NavigationItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Filter items based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredItems([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = searchNavigation(searchQuery);
    setFilteredItems(results);
  }, [searchQuery]);

  const clearSearch = () => {
    onSearchChange("");
  };

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      <aside
        className={`atomix-docs-sidebar ${isOpen ? "open" : ""}`}
        aria-label="Documentation navigation"
      >
        <div className="u-d-flex u-flex-column u-h-100 u-px-3">
          {/* Navigation */}
          <nav
            className="u-flex-grow-1 u-overflow-y-auto"
            aria-label="Main navigation"
          >
            {/* Breadcrumb */}
            <Breadcrumb 
              items={[
                { label: "Home", path: "/" },
                ...location.pathname !== '/' 
                  ? location.pathname.split('/').filter(Boolean).map((segment, index, array) => {
                      const href = `/${array.slice(0, index + 1).join('/')}`;
                      const label = getTitleFromPath(segment);
                      const isLast = index === array.length - 1;
                      return isLast ? { label } : { label, path: href };
                    })
                  : []
              ]} 
              className="u-mb-2 u-mt-2 u-py-1" 
            />

            {/* Search */}
            <div className="u-mb-4">
              <div className="u-position-relative">
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onSearchChange(e.target.value)
                  }
                  size="sm"
                  aria-label="Search documentation"
                  className="u-pe-5"
                />
                {searchQuery ? (
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={clearSearch}
                    aria-label="Clear search"
                    className="u-position-absolute u-end-1 u-top-50 translate-middle-y"
                  >
                    <Icon name="X" size="sm" />
                  </Button>
                ) : (
                  <Icon 
                    name="Search" 
                    size="sm" 
                    className="u-position-absolute u-end-2 u-top-50 translate-middle-y u-text-body-secondary"
                  />
                )}
              </div>
            </div>

            {/* Results */}
            {isSearching && searchQuery ? (
              <div>
                <div className="u-py-2 u-px-3 u-fs-xs u-fw-semibold u-text-body-secondary u-text-uppercase">
                  {filteredItems.length} result
                  {filteredItems.length !== 1 ? "s" : ""}
                </div>
                <ul className="u-list-none u-ps-0">
                  {filteredItems.map((item) => (
                    <NavigationItemComponent
                      key={item.id}
                      item={item}
                      isActive={activeItem === item.id}
                      onSelect={onItemSelect}
                      level={0}
                    />
                  ))}
                </ul>
                {filteredItems.length === 0 && (
                  <div className="u-py-4 u-px-3 u-text-center u-text-body-secondary">
                    <Icon name="Search" size="md" className="u-mb-2" />
                    <p className="u-mb-0">No matching pages found</p>
                    <p className="u-fs-sm u-mb-0">Try adjusting your search terms</p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {navigationData.map((section) => (
                  <NavigationSectionComponent
                    key={section.id}
                    section={section}
                    activeItem={activeItem}
                    onItemSelect={onItemSelect}
                    isSearching={false}
                  />
                ))}
              </div>
            )}
          </nav>

          {/* Footer */}
          <div className="u-mt-auto u-py-3 u-border-top u-text-center">
            <p className="u-fs-xs u-text-body-secondary u-mb-1">
              Atomix v1.0.0
            </p>
            <p className="u-fs-xs u-text-body-secondary u-mb-0">
              Built with{" "}
              <Icon name="Heart" size="xs" className="u-text-danger" /> by
              Shohojdhara
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
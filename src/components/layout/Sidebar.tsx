import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Icon, Badge, Input } from '@shohojdhara/atomix';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { navigationData, searchNavigation } from '@data/navigation';
import type { NavigationSection, NavigationItem } from '@/types';

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string | null;
  onItemSelect: (itemId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const getBadgeVariant = (variant: string): 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' => {
  switch (variant) {
    case 'new': return 'success';
    case 'beta': return 'warning';
    case 'updated': return 'info';
    case 'deprecated': return 'danger';
    default: return 'secondary';
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
        className={`u-d-flex u-align-items-center u-gap-2 u-py-2 u-px-3 u-rounded u-text-decoration-none u-transition ${isCurrentPath ? 'u-bg-primary-subtle u-text-primary-emphasis' : 'u-text-body-emphasis hover:u-bg-tertiary-bg-subtle'}`}
        onClick={handleClick}
        style={{ paddingLeft: `${0.75 + level * 0.5}rem` }}
      >
        {item.icon && <Icon name={item.icon as any} size="sm" />}
        <span className="u-flex-grow-1">{item.title}</span>
        {item.badge && (
          <Badge color={getBadgeVariant(item.badge.variant)} size="sm">
            {item.badge.text}
          </Badge>
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
      <button
        className="u-d-flex u-align-items-center u-justify-content-between u-w-100 u-py-2 u-px-3 u-border-0 u-bg-transparent u-text-body-emphasis u-fw-semibold u-text-uppercase u-fs-xs u-cursor-pointer u-transition hover:u-text-primary"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-expanded={!shouldShowCollapsed}
      >
        <span>{section.title}</span>
        {shouldShowCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
      </button>

      {!shouldShowCollapsed && (
        <ul className="u-list-none u-ps-0 u-mt-2">
          {section.items.map((item) => (
            <NavigationItemComponent
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
              onSelect={onItemSelect}
              level={0}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const Sidebar: React.FC<DocumentationSidebarProps> = ({
  isOpen,
  onClose,
  activeItem,
  onItemSelect,
  searchQuery,
  onSearchChange
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
    onSearchChange('');
  };

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      <aside
        className={`atomix-docs-sidebar ${isOpen ? 'open' : ''}`}
        aria-label="Documentation navigation"
      >
        <div className="u-d-flex u-flex-column u-h-100 u-px-3">
          {/* Navigation */}
          <nav className="u-flex-grow-1 u-overflow-y-auto" aria-label="Main navigation">
            {/* Search */}
            <div className="u-mb-4 u-pt-3">
              <Input
                type="text"
                placeholder="Search navigation..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
                size="sm"
                aria-label="Search navigation"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={clearSearch}
                  className="u-mt-2 u-w-100"
                  aria-label="Clear search"
                >
                  Clear
                </Button>
              )}
            </div>

            {/* Results */}
            {isSearching && searchQuery ? (
              <div>
                <div className="u-py-2 u-px-3 u-fs-xs u-fw-semibold u-text-body-secondary u-text-uppercase">
                  {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
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
            <p className="u-fs-xs u-text-body-secondary u-mb-1">Atomix v1.0.0</p>
            <p className="u-fs-xs u-text-body-secondary u-mb-0">
              Built with <Icon name="Heart" size="xs" className="u-text-danger" /> by Shohojdhara
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

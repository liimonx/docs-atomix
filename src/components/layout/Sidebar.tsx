import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationData, searchNavigation } from '@data/navigation';
import { NavigationSection, NavigationItem } from '@types/index';

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string | null;
  onItemSelect: (itemId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ size: number }>> = {
  BookOpen,
  Download,
  Zap,
  Palette,
  Square,
  Grid3X3,
  Layers,
  Minus,
  Mouse,
  Type,
  AlignLeft,
  ChevronDown,
  Check,
  Circle,
  ToggleLeft,
  SlidersHorizontal,
  CreditCard,
  User,
  Award,
  Table,
  List,
  Image,
  Code,
  AlertTriangle,
  MessageSquare,
  Loader2,
  BarChart,
  ChevronRight: ChevronRightIcon,
  Tabs,
  MoreHorizontal,
  Menu,
  Navigation,
  PanelLeft,
  MessageCircle,
  HelpCircle,
  ArrowUpRight,
  Settings,
  EyeOff,
  Focus
};

const getIcon = (iconName: string | undefined) => {
  if (!iconName || !iconMap[iconName]) {
    return Square;
  }
  return iconMap[iconName];
};

const getBadgeStyles = (variant: string) => {
  const baseStyles = {
    fontSize: '0.625rem',
    fontWeight: '600',
    padding: '0.125rem 0.375rem',
    borderRadius: '9999px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em'
  };

  switch (variant) {
    case 'new':
      return {
        ...baseStyles,
        backgroundColor: 'var(--atomix-success)',
        color: 'white'
      };
    case 'beta':
      return {
        ...baseStyles,
        backgroundColor: 'var(--atomix-warning)',
        color: 'var(--atomix-text-primary)'
      };
    case 'updated':
      return {
        ...baseStyles,
        backgroundColor: 'var(--atomix-info)',
        color: 'white'
      };
    case 'deprecated':
      return {
        ...baseStyles,
        backgroundColor: 'var(--atomix-error)',
        color: 'white'
      };
    default:
      return baseStyles;
  }
};

const NavigationItemComponent: React.FC<{
  item: NavigationItem;
  isActive: boolean;
  onSelect: (itemId: string) => void;
  level: number;
}> = ({ item, isActive, onSelect, level }) => {
  const IconComponent = getIcon(item.icon);
  const location = useLocation();
  const isCurrentPath = location.pathname === item.path;

  const handleClick = () => {
    onSelect(item.id);
  };

  return (
    <li className="nav-item">
      <Link
        to={item.path}
        className={`nav-link ${isCurrentPath ? 'active' : ''}`}
        onClick={handleClick}
        style={{
          paddingLeft: `${0.75 + level * 0.5}rem`
        }}
      >
        <div className="nav-icon">
          <IconComponent size={16} />
        </div>
        <span className="nav-text">{item.title}</span>
        {item.badge && (
          <span
            className="nav-badge"
            style={getBadgeStyles(item.badge.variant)}
          >
            {item.badge.text}
          </span>
        )}
      </Link>
      {item.children && item.children.length > 0 && (
        <ul className="nav-list" style={{ marginLeft: '1rem' }}>
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

  // Don't collapse sections when searching
  const shouldShowCollapsed = !isSearching && isCollapsed;

  return (
    <div className="nav-section">
      <button
        className="section-header"
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0.5rem 0',
          border: 'none',
          background: 'transparent',
          fontSize: '0.875rem',
          fontWeight: '600',
          color: 'var(--atomix-text-primary)',
          cursor: 'pointer',
          textAlign: 'left'
        }}
        aria-expanded={!shouldShowCollapsed}
      >
        <span>{section.title}</span>
        {shouldShowCollapsed ? (
          <ChevronRight size={16} />
        ) : (
          <ChevronDown size={16} />
        )}
      </button>

      {!shouldShowCollapsed && (
        <ul className="nav-list">
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
        <div className="sidebar-content">
          {/* Search */}
          <div className="sidebar-search">
            <div
              className="search-input-container"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'var(--atomix-bg-primary)',
                border: '1px solid var(--atomix-border)',
                borderRadius: '6px',
                padding: '0.5rem'
              }}
            >
              <Search size={16} style={{ color: 'var(--atomix-text-secondary)', marginRight: '0.5rem' }} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  flex: 1,
                  fontSize: '0.875rem',
                  color: 'var(--atomix-text-primary)'
                }}
                aria-label="Search navigation"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: '0.25rem',
                    color: 'var(--atomix-text-secondary)'
                  }}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="sidebar-nav" aria-label="Main navigation">
            {isSearching && searchQuery ? (
              // Search results
              <div className="search-results">
                <div
                  className="search-results-header"
                  style={{
                    padding: '0.5rem 0',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'var(--atomix-text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
                </div>
                <ul className="nav-list">
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
              // Regular navigation
              <div className="navigation-sections">
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
          <div
            className="sidebar-footer"
            style={{
              marginTop: 'auto',
              padding: '1rem 0',
              borderTop: '1px solid var(--atomix-border)',
              fontSize: '0.75rem',
              color: 'var(--atomix-text-secondary)',
              textAlign: 'center'
            }}
          >
            <p>Atomix v1.0.0</p>
            <p>Built with ❤️</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

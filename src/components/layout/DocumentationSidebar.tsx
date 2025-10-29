import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Badge,
  Icon,
  Input,
  Button,
  SideMenu,
  SideMenuList,
  SideMenuItem
} from '@shohojdhara/atomix';
import { navigationData, searchNavigation } from '../../data/navigation';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import type { NavigationSection, NavigationItem } from '../../types';

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

// Map problematic icon names to alternatives that actually exist
const getSafeIconName = (iconName: string): string => {
  const iconMap: Record<string, string> = {
    'Navigation': 'NavigationArrow',
    'NavigationArrow': 'NavigationArrow',
    'ChevronDown': 'CaretDown',
    'ChevronDownIcon': 'CaretDown',
    'HelpCircle': 'Question',
    'HelpCircleIcon': 'Question',
    'Grid3X3': 'GridFour',
    'Grid2X2': 'GridFour',
    'Smartphone': 'DeviceMobile',
    'Droplets': 'Drop',
    'Drop': 'Drop'
  };

  return iconMap[iconName] || iconName;
};

export const DocumentationSidebar: React.FC<DocumentationSidebarProps> = ({
  isOpen,
  onClose,
  activeItem,
  onItemSelect,
  searchQuery,
  onSearchChange
}) => {
  const [filteredItems, setFilteredItems] = useState<NavigationItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const location = useLocation();
  const navigate = useNavigate();

  // Initialize collapsed state for sections
  useEffect(() => {
    const initialState: Record<string, boolean> = {};
    navigationData.forEach(section => {
      initialState[section.id] = section.collapsed ?? false;
    });
    setCollapsedSections(initialState);
  }, []);

  // Filter navigation based on search
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

  useKeyboardShortcuts({
    'Escape': () => onClose()
  });

  const isActive = (path: string) => location.pathname === path;

  const toggleSection = (sectionId: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <aside
      className={`atomix-docs-sidebar ${isOpen ? 'open' : ''}`}
      role="navigation"
      aria-label="Documentation navigation"
      aria-hidden={!isOpen}
    >
      <div className="u-my-8">
        <SideMenu>
          {/* Search inside SideMenu */}
          <div className="u-px-3 u-py-3">
            <Input
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
                onClick={() => onSearchChange('')}
                className="u-mt-2 u-w-100"
              >
                Clear
              </Button>
            )}
          </div>

          {/* Navigation Items */}
          {isSearching && searchQuery ? (
            <div className="u-px-3">
              <div className="u-py-2 u-fs-xs u-fw-semibold u-text-body-secondary u-text-uppercase">
                {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
              </div>
              <SideMenuList>
                {filteredItems.map((item) => (
                  <SideMenuItem
                    key={item.id}
                    href={item.path}
                    active={isActive(item.path)}
                    onClick={() => {
                      navigate(item.path);
                      onClose();
                      onItemSelect(item.id);
                    }}
                  >
                    {item.icon && <Icon name={getSafeIconName(item.icon) as any} size="sm" />}
                    {item.title}
                    {item.badge && (
                      <Badge variant={getBadgeVariant(item.badge.variant) as any} size="sm" label={item.badge.text}/>
                    )}
                  </SideMenuItem>
                ))}
              </SideMenuList>
            </div>
          ) : (
            navigationData.map((section) => (
              <div key={section.id}>
                <div
                  className="u-d-flex u-align-items-center u-justify-content-between u-px-3 u-py-2 section-header"
                  onClick={() => toggleSection(section.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="u-fs-sm u-fw-semibold u-text-brand-emphasis">
                    {section.title}
                  </div>
                  <Icon
                    name={collapsedSections[section.id] ? "CaretDown" : "CaretUp"}
                    size="sm"
                    className="collapse-icon"
                  />
                </div>

                {!collapsedSections[section.id] && (
                  <SideMenuList>
                    {section.items.map((item) => (
                      <SideMenuItem
                        key={item.id}
                        href={item.path}
                        active={isActive(item.path)}
                        onClick={() => {
                          navigate(item.path);
                          onClose();
                          onItemSelect(item.id);
                        }}
                      >
                        {item.icon && <Icon name={getSafeIconName(item.icon) as any} size="sm" />}
                        {item.title}
                        {item.badge && (
                          <Badge variant={getBadgeVariant(item.badge.variant) as any} size="sm" label={item.badge.text}/>
                        )}
                      </SideMenuItem>
                    ))}
                  </SideMenuList>
                )}
              </div>
            ))
          )}
        </SideMenu>
      </div>
    </aside>
  );
};

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
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<NavigationItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Filter navigation based on search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredItems([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = searchNavigation(searchTerm);
    setFilteredItems(results);
  }, [searchTerm]);

  useKeyboardShortcuts({
    'Escape': () => onClose()
  });

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={`atomix-docs-sidebar ${isOpen ? 'open' : ''}`}
      role="navigation"
      aria-label="Documentation navigation"
      aria-hidden={!isOpen}
    >
      <div className="u-my-8"
     >
        <SideMenu>
          {/* Search inside SideMenu */}
          <div className="u-px-3 u-py-3">
            <Input
              placeholder="Search navigation..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              size="sm"
              aria-label="Search navigation"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="xs"
                onClick={() => setSearchTerm('')}
                className="u-mt-2 u-w-100"
              >
                Clear
              </Button>
            )}
          </div>

          {/* Navigation Items */}
          {isSearching && searchTerm ? (
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
              <SideMenuList key={section.id}>
                {section.items.map((item) => (
                  <SideMenuItem
                    key={item.id}
                    href={item.path}
                    active={isActive(item.path)}
                    onClick={() => {
                      navigate(item.path);
                      onClose();
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
            ))
          )}
        </SideMenu>
      </div>
    </aside>
  );
};
'use client';

import React, { useState, useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { 
  Badge,
  Icon,
  Input,
  Accordion,
  SideMenu,
  SideMenuList,
  SideMenuItem
} from '@shohojdhara/atomix';
import { Search } from 'lucide-react';
import { navigationData } from '@/data/navigation';
import type { NavigationItem } from '@/types/index';
import styles from '@/components/layout/Sidebar.module.scss';

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const DocumentationSidebar: React.FC<DocumentationSidebarProps> = React.memo(({
  isOpen,
  onClose,
  searchQuery: externalSearchQuery,
  onSearchChange,
}) => {
  const [searchTerm, setSearchTerm] = useState(externalSearchQuery || '');
  const [filteredNavigation, setFilteredNavigation] = useState(navigationData);
  const [expandedSections, setExpandedSections] = useState<string[]>(['components']);

  const pathname = usePathname();
  const router = useRouter();

  // Filter navigation based on search
  useEffect(() => {
    if (!searchTerm) {
      setFilteredNavigation(navigationData);
      return;
    }

    const filtered = navigationData.map(section => ({
      ...section,
      items: section.items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    })).filter(section => section.items.length > 0);

    setFilteredNavigation(filtered);
    // Sync with external search query if provided
    if (onSearchChange) {
      onSearchChange(searchTerm);
    }
  }, [searchTerm, onSearchChange]);

  // Auto-expand section containing current page
  useEffect(() => {
    const currentSection = navigationData.find(section =>
      section.items.some(item => item.path === pathname)
    );

    if (currentSection && !expandedSections.includes(currentSection.id)) {
      setExpandedSections(prev => [...prev, currentSection.id]);
    }
  }, [pathname, expandedSections]);



  const handleNavigation = (path: string) => {
    router.push(path);
    onClose(); // Close mobile sidebar after navigation
  };

  const getBadgeVariant = (
    variant: string
  ): "primary" | "secondary" | "success" | "warning" | "info" | "danger" => {
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

  const renderNavigationItem = (item: NavigationItem) => {
    const isActive = pathname === item.path;

    return (
      <SideMenuItem
        key={item.path}
        href={item.path}
        active={isActive}
        onClick={() => handleNavigation(item.path)}
        icon={item.icon && <Icon name={item.icon as any} size="sm" />}
      >
        <span className="nav-text">{item.title}</span>

        {item.badge && (
          <Badge
            label={item.badge.text}
            variant={getBadgeVariant(item.badge.variant) as any}
            size="sm"
            className="nav-badge"
          />
        )}

        {item.isNew && (
          <Badge label="New" variant="success" size="sm" />
        )}

        {item.isUpdated && (
          <Badge label="Updated" variant="warning" size="sm" />
        )}
      </SideMenuItem>
    );
  };

  return (
    <div
      className={`atomix-docs-sidebar ${isOpen ? 'open' : ''}`}
      role="navigation"
      aria-label="Documentation navigation"
    >
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className={styles['sidebar-search']}>
          <Input
            placeholder="Search navigation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="sm"
            aria-label="Search navigation"
            glass={{
              blurAmount: 5,
              elasticity: 0,
              cornerRadius: 30,
            }}
            style={{
              paddingLeft: "40px",
              borderRadius: "30px",
            }}
          />
          <Search size={16} className="search-icon u-position-absolute u-top-0 u-start-0 u-z-index-1 u-mt-2 u-ms-4" />
        </div>
      </div>

      {/* Navigation Content */}
      <div className="sidebar-content u-mt-4">
        <SideMenu title="Documentation" collapsible={false}>
          {filteredNavigation.map((section) => (
            <div key={section.id} className="nav-section">
              <Accordion
                title={section.title}
                defaultOpen={expandedSections.includes(section.id)}
                className="nav-accordion"
              >
                <SideMenuList>
                  {section.items.map(renderNavigationItem)}
                </SideMenuList>
              </Accordion>
            </div>
          ))}
        </SideMenu>
      </div>

      {/* Mobile overlay backdrop */}
      {isOpen && (
        <div
          className="sidebar-backdrop mobile-only"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
    </div>
  );
});

DocumentationSidebar.displayName = 'DocumentationSidebar';
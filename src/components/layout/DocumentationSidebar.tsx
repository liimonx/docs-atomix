import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Badge,
  Icon,
  Input,
  Button,
  Progress,
  SideMenu,
  SideMenuList,
  SideMenuItem
} from '@shohojdhara/atomix';
import { navigationData } from '../../data/navigation';
import { useSearch } from '../../hooks/useSearch';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import type { NavigationSection, NavigationItem } from '../../types';

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentationSidebar: React.FC<DocumentationSidebarProps> = ({
  isOpen,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNavigation, setFilteredNavigation] = useState<NavigationSection[]>(navigationData);
  const [expandedSections, setExpandedSections] = useState<string[]>(['components']);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { searchResults } = useSearch();

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
        item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.searchTerms?.some(term => term.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    })).filter(section => section.items.length > 0);

    setFilteredNavigation(filtered);
  }, [searchTerm]);

  // Keyboard shortcuts
  useKeyboardShortcuts({
    'Escape': () => onClose(),
    'Cmd+K': (e) => {
      e.preventDefault();
      const searchInput = document.querySelector('.sidebar-search input') as HTMLInputElement;
      searchInput?.focus();
    }
  });

  const isActive = (path: string) => location.pathname === path;



  const totalComponents = useMemo(() => 
    navigationData.reduce((acc, section) => acc + section.items.length, 0),
    []
  );

  const completedComponents = useMemo(() => 
    navigationData.reduce((acc, section) => 
      acc + section.items.filter(item => item.badge?.variant === 'deprecated').length, 0
    ), []
  );

  const completionPercentage = (completedComponents / totalComponents) * 100;

  return (
    <aside
      className={`atomix-docs-sidebar ${isOpen ? 'open' : ''}`}
      role="navigation"
      aria-label="Documentation navigation"
      aria-hidden={!isOpen}
    >
      <div className="sidebar-header">
        <div className="sidebar-search">
          <Input
            placeholder="Search navigation... (Ctrl+K)"
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            icon="Search"
            size="sm"
            aria-label="Search navigation"
            className="search-input"
          />
        </div>
        
        {completionPercentage > 0 && (
          <div className="completion-progress">
            <div className="progress-info">
              <span className="progress-label">Documentation Progress</span>
              <span className="progress-value">{Math.round(completionPercentage)}%</span>
            </div>
            <Progress 
              value={completionPercentage} 
              size="sm"
              aria-label={`${completedComponents} of ${totalComponents} components documented`}
            />
          </div>
        )}
      </div>

      <SideMenu>
        {filteredNavigation.map((section) => (
          <SideMenuList key={section.id}>
            {section.items.map((item) => (
              <SideMenuItem
                key={item.id}
                href={item.path}
                active={isActive(item.path)}
                icon={item.icon && <Icon name={item.icon as any} size="sm" />}
                onClick={() => {
                  navigate(item.path);
                  onClose();
                }}
              >
                {item.title}
                {item.badge && (
                  <Badge
                    color={item.badge.variant === 'new' ? 'primary' : 
                           item.badge.variant === 'updated' ? 'secondary' : 
                           item.badge.variant === 'beta' ? 'warning' : 'danger'}
                    size="sm"
                  >
                    {item.badge.text}
                  </Badge>
                )}
              </SideMenuItem>
            ))}
          </SideMenuList>
        ))}
      </SideMenu>

      <div className="sidebar-footer">
        <div className="sidebar-info">
          <p className="info-text">
            Built with <Icon name="Heart" size="xs" aria-hidden="true" /> using Atomix
          </p>
          <p className="version-info">v1.0.0</p>
          
          <div className="quick-actions">
            <Button
              variant="ghost"
              size="xs"
              onClick={() => navigate('/getting-started')}
              aria-label="View getting started guide"
            >
              <Icon name="BookOpen" size="xs" />
              Quick Start
            </Button>
            
            <Button
              variant="ghost"
              size="xs"
              onClick={() => navigate('/examples')}
              aria-label="View examples"
            >
              <Icon name="Code" size="xs" />
              Examples
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};
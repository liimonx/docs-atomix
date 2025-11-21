'use client';

import React from 'react';
import Link from 'next/link';
import {
  Button,
  AtomixLogo,
  Icon,
  Navbar,
  Nav,
  ColorModeToggle,

} from '@shohojdhara/atomix';
import { GlobalSearch } from '@/components/ui/GlobalSearch';

interface DocumentationHeaderProps {
  onMenuToggle: () => void;
  sidebarOpen: boolean;
}

export const DocumentationHeader: React.FC<DocumentationHeaderProps> = ({
  onMenuToggle,
  sidebarOpen
}) => {




  const externalLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/shohojdhara/atomix',
      icon: 'GithubLogo'
    },
    {
      label: 'NPM',
      href: 'https://www.npmjs.com/package/@shohojdhara/atomix',
      icon: 'Package'
    }
  ];

  return (
    <header className="atomix-docs-header" role="banner">
      <Navbar
        glass={{
          displacementScale: 20,
          blurAmount: 2,
          elasticity: 0,
          mode: 'standard',
        } as any}
        brand={
          <div className="nav-brand">
            {/* Mobile menu toggle */}
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={onMenuToggle}
              aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
              className="mobile-menu-toggle"
            >
              <Icon name={sidebarOpen ? 'X' : 'List'} size="sm" />
            </Button>

            {/* Logo and Brand */}
            <Link
              href="/"
              className="navbar-brand"
              aria-label="Atomix Design System"
            >
              <AtomixLogo className="navbar-logo" />
              <span className="navbar-title">Atomix</span>
            </Link>
          </div>
        }
        className="docs-nav"
        aria-label="Main navigation"
        position="fixed"
      >
        {/* Navigation Items - Desktop Only */}
        <Nav className="" aria-label="Primary navigation" alignment='end'>
          {/* {navigationItems.map((item) => (
            <NavItem key={item.href} href={item.href}>
              <Icon name={item.icon as any} size="sm" className="nav-link-icon" />
              {item.label}
            </NavItem>
          ))} */}
           {/* Search */}
           <div className="nav-search">
            <GlobalSearch  />
          </div>
        </Nav>

        {/* Right Section */}
        <Nav className="nav-actions" alignment='end'>
         

          {/* External Links */}
          <div className="nav-external-links">
            {externalLinks.map((link) => (
              <Button
                key={link.href}
                as="a"
                href={link.href}
                variant="ghost"
                size="sm"
                aria-label={link.label}
                className="external-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={link.icon as any} size="sm" />
              </Button>
            ))}
          </div>

          {/* Theme Toggle */}
          <ColorModeToggle aria-label="Toggle theme"  defaultValue='dark' />
        
        </Nav>
      </Navbar>
    </header>
  );
};
'use client';

import { memo } from 'react';
import Link from 'next/link';
import {
  AtomixLogo,
  Icon,
  Navbar,
  Nav,
  ColorModeToggle,
  Button

} from '@shohojdhara/atomix';
import { GlobalSearch } from '@/components/ui/GlobalSearch';
import type { GlassProps } from '@/types/atomix-components';


interface DocumentationHeaderProps {
  isSidebarOpen?: boolean;
  onSidebarToggle?: () => void;
  showSidebarToggle?: boolean;
}

const DocumentationHeader = memo(function DocumentationHeader({
  isSidebarOpen,
  onSidebarToggle,
  showSidebarToggle = false
}: DocumentationHeaderProps) {
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
    <header role="banner">
      <Navbar
        glass={{
          displacementScale: 20,
          blurAmount: 2,
          elasticity: 0,
          mode: 'standard',
        } as GlassProps}
        brand={
          <div className="u-d-flex u-align-items-center u-gap-2">
            {/* Mobile menu toggle - only show on docs pages */}
            {showSidebarToggle && onSidebarToggle && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onSidebarToggle}
                aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
                className="u-d-lg-none"
              >
                <Icon name={isSidebarOpen ? 'X' : 'List'} size="sm" />
              </Button>
            )}

            {/* Logo and Brand */}
            <Link
              href="/"
              className="u-d-flex u-align-items-center u-gap-2 u-text-decoration-none"
              aria-label="Atomix Design System"
            >
              <AtomixLogo />
              <span className="u-fs-lg u-fw-semibold">Atomix</span>
            </Link>
          </div>
        }
        aria-label="Main navigation"
        position="fixed"
      >
        <Nav className="u-d-flex u-align-items-center u-gap-2" aria-label="Primary navigation" alignment='end'>
          {/* Search */}
          <div className="u-position-relative">
            <GlobalSearch />
          </div>
        </Nav>

        {/* Right Section */}
        <Nav className="u-d-flex u-align-items-center u-gap-2" alignment='end'>
          {/* External Links */}
          <div className="u-d-flex u-gap-2">
            {externalLinks.map((link) => (
              <Button
                key={link.href}
                as="a"
                href={link.href}
                variant="ghost"
                size="sm"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={link.icon as any} size="sm" />
              </Button>
            ))}
          </div>

          {/* Theme Toggle */}
          <ColorModeToggle aria-label="Toggle theme" defaultValue='dark' />

        </Nav>
      </Navbar>
    </header>
  );
});

export { DocumentationHeader };

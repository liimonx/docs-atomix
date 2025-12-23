'use client';

import { memo, useEffect, useState } from 'react';
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
import type { GlassProps } from '@/types/atomix-components';

interface DocumentationHeaderProps {
  onMenuToggle: () => void;
  sidebarOpen: boolean;
  showMenuButton?: boolean;
}

const DocumentationHeader = memo(function DocumentationHeader({
  onMenuToggle,
  sidebarOpen,
  showMenuButton = true,
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

  const [highlightMenuButton, setHighlightMenuButton] = useState(false);

  useEffect(() => {
    if (!showMenuButton) {
      return;
    }

    setHighlightMenuButton(true);
    const timeoutId = window.setTimeout(() => {
      setHighlightMenuButton(false);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [showMenuButton]);

  const menuToggleClassName = highlightMenuButton
    ? 'u-d-lg-none docs-menu-toggle-highlight'
    : 'u-d-lg-none';

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
            {showMenuButton && (
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={onMenuToggle}
                aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
                className={menuToggleClassName}
              >
                <Icon name={sidebarOpen ? 'X' : 'List'} size="sm" />
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

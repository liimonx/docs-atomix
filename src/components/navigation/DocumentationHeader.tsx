"use client";

import { memo } from "react";
import Link from "next/link";
import { GlobalSearch } from "@/components/ui/GlobalSearch";
import { Icon, Button, ColorModeToggle } from "@shohojdhara/atomix";

interface DocumentationHeaderProps {
  isSidebarOpen?: boolean;
  onSidebarToggle?: () => void;
  showSidebarToggle?: boolean;
}

const DocumentationHeader = memo(function DocumentationHeader({
  isSidebarOpen,
  onSidebarToggle,
  showSidebarToggle = false,
}: DocumentationHeaderProps) {
  return (
    <header className="u-flex u-align-items-center u-justify-between u-border-bottom u-border-color-border-dark u-px-4 u-py-3 u-bg-surface-dark u-sticky u-top-0 u-z-50 u-backdrop-blur">
      <div className="u-flex u-align-items-center u-gap-4">
        <div className="u-flex u-align-items-center u-gap-3 u-color-text-primary">
          {/* Mobile Toggle */}
          {showSidebarToggle && (
            <Button
              onClick={onSidebarToggle}
              variant="ghost"
              iconOnly
              className="u-lg-none"
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
              <Icon name="List" size="md" />
            </Button>
          )}

          {/* Logo */}
          <Link href="/" className="u-flex u-align-items-center u-gap-3 u-text-decoration-none u-color-text-primary">
            <div className="u-flex u-align-items-center u-justify-center u-bg-primary u-rounded-md u-p-1" style={{ width: '32px', height: '32px' }}>
              <Icon name="Stack" size="md" className="u-color-white" />
            </div>
            <h2 className="u-text-lg u-font-bold u-m-0 u-line-height-tight">Atomix</h2>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="u-hidden u-lg-flex u-align-items-center u-gap-4 u-ml-4">
          <Link href="/docs/components" className="u-text-sm u-font-medium u-color-text-secondary u-text-decoration-none hover:u-color-primary u-transition-colors">Components</Link>
          <Link href="/docs/patterns" className="u-text-sm u-font-medium u-color-text-secondary u-text-decoration-none hover:u-color-primary u-transition-colors">Patterns</Link>
          <Link href="/docs/foundations" className="u-text-sm u-font-medium u-color-text-secondary u-text-decoration-none hover:u-color-primary u-transition-colors">Foundations</Link>
          <Link href="/docs/resources" className="u-text-sm u-font-medium u-color-text-secondary u-text-decoration-none hover:u-color-primary u-transition-colors">Resources</Link>
        </nav>
      </div>

      <div className="u-flex u-flex-1 u-justify-end u-gap-4 u-align-items-center">
        {/* Search */}
        <div className="u-relative u-hidden u-sm-block u-width-100" style={{ maxWidth: '300px' }}>
           <GlobalSearch />
        </div>

        {/* Actions */}
        <div className="u-flex u-gap-2">
          <Button
            as="a"
            href="https://github.com/shohojdhara/atomix"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            className="u-hidden u-sm-flex"
          >
             GitHub
          </Button>
          <Button variant="primary" className="u-shadow-md">
             Download Kit
          </Button>
          <ColorModeToggle />
        </div>
      </div>
    </header>
  );
});

export { DocumentationHeader };

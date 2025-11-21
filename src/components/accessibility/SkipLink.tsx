// Skip Link Component for Accessibility
// =============================================================================

'use client';

import React from 'react';
import Link from 'next/link';
import styles from './SkipLink.module.scss';

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Skip link component for keyboard navigation
 * Allows users to skip to main content
 */
export function SkipLink({ href, children, className = '' }: SkipLinkProps) {
  return (
    <Link
      href={href}
      className={`${styles.skipLink} ${className}`}
      aria-label="Skip to main content"
    >
      {children}
    </Link>
  );
}

/**
 * Main content skip link (most common use case)
 */
export function SkipToMain() {
  return (
    <SkipLink href="#main-content">
      Skip to main content
    </SkipLink>
  );
}


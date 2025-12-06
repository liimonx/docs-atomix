'use client';

import { FC } from 'react';
import styles from './SkipLinks.module.scss';

/**
 * SkipLinks component for keyboard navigation accessibility
 * Provides skip links to main content and navigation for screen reader and keyboard users
 */
export interface SkipLinksProps {}

export const SkipLinks: FC<SkipLinksProps> = () => {
  return (
    <nav className={styles.skipLinks} aria-label="Skip navigation links">
      <a 
        href="#main-content" 
        className={styles.skipLink}
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <a 
        href="#navigation" 
        className={styles.skipLink}
        aria-label="Skip to navigation"
      >
        Skip to navigation
      </a>
    </nav>
  );
};


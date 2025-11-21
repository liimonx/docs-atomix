'use client';

import React from 'react';
import styles from './SkipLinks.module.scss';

/**
 * SkipLinks component for keyboard navigation accessibility
 * Provides skip links to main content and navigation for screen reader and keyboard users
 */
export const SkipLinks: React.FC = () => {
  return (
    <div className={styles.skipLinks}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <a href="#navigation" className={styles.skipLink}>
        Skip to navigation
      </a>
    </div>
  );
};


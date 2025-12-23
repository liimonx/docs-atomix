'use client';

import { Button, Icon } from '@shohojdhara/atomix';
import React, { forwardRef } from 'react';
import styles from './SidebarToggle.module.scss';

interface SidebarToggleProps {
  onClick: () => void;
  isOpen: boolean;
}

export const SidebarToggle = forwardRef<HTMLButtonElement, SidebarToggleProps>(
  ({ onClick, isOpen }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    };

    return (
      <Button
        ref={ref}
        variant="primary"
        size="md"
        glass={true}
        iconOnly={true}
        icon={
          <Icon name={isOpen ? 'X' : 'List'} size="lg" />
        }
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={isOpen ? 'Close documentation menu (Cmd/Ctrl+B)' : 'Open documentation menu (Cmd/Ctrl+B)'}
        aria-expanded={isOpen}
        aria-controls="documentation-sidebar"
        className={styles.sidebarToggle}
        type="button"
      />
    );
  }
);

SidebarToggle.displayName = 'SidebarToggle';
'use client';

import React from 'react';
import Link from 'next/link';
import { Icon, Card } from '@shohojdhara/atomix';
import type { SearchResult } from '../../types';
import styles from './SearchResultItem.module.scss';

interface SearchResultItemProps {
  result: SearchResult;
  onClick?: () => void;
}

export const SearchResultItem: React.FC<SearchResultItemProps> = ({ result, onClick }) => {
  const getIconName = (category: string) => {
    switch (category) {
      case 'component': return 'Component';
      case 'guide': return 'BookOpen';
      case 'token': return 'Palette';
      case 'layout': return 'Layout';
      default: return 'FileText';
    }
  };

  return (
    <Link
      href={result.path}
      onClick={onClick}
      className={styles.searchResultItem__link}
    >
      <Card
        className={styles.searchResultItem}
      >
        <div className={styles.searchResultItem__content}>
          <div className={styles.searchResultItem__icon}>
            <Icon name={getIconName(result.category) as any} size="sm" />
          </div>
          <div className={styles.searchResultItem__text}>
            <div className={styles.searchResultItem__title}>{result.title}</div>
            <div className={styles.searchResultItem__description}>
              {result.description && typeof result.description === 'string'
                ? result.description.replace(/<[^>]*>/g, '') // Strip HTML tags
                : result.description}
            </div>
            <div className={styles.searchResultItem__meta}>
              {result.category} • {result.breadcrumbs?.join(' › ') || 'Documentation'}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

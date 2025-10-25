import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@shohojdhara/atomix';
import type { SearchResult } from '../../types';

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
      to={result.path}
      onClick={onClick}
      className="u-d-flex u-align-items-center u-p-3 u-text-decoration-none u-border-radius-md u-transition u-mb-1 hover:u-bg-secondary-subtle"
      style={{
        color: 'var(--atomix-text-primary)',
        borderRadius: 'var(--atomix-docs-radius-md)'
      }}
    >
      <div className="u-d-flex u-align-items-center u-justify-content-center u-mr-3 u-p-2 u-bg-secondary-subtle u-border-radius-sm">
        <Icon name={getIconName(result.category) as any} size="sm" />
      </div>
      <div className="u-flex-grow-1">
        <div className="u-fw-medium u-mb-1">{result.title}</div>
        <div 
          className="u-fs-sm u-text-secondary u-line-clamp-2"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {result.description && typeof result.description === 'string' 
            ? result.description.replace(/<[^>]*>/g, '') // Strip HTML tags
            : result.description}
        </div>
        <div className="u-fs-xs u-text-secondary u-mt-1">
          {result.category} • {result.breadcrumbs?.join(' › ') || 'Documentation'}
        </div>
      </div>
    </Link>
  );
};
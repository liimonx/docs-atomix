import React from 'react';
import { Icon } from '@shohojdhara/atomix';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  description?: string;
  path: string;
}

interface SearchResultItemProps {
  result: SearchResult;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

export const SearchResultItem: React.FC<SearchResultItemProps> = ({ result, isSelected, onClick, onMouseEnter }) => {
  return (
    <div
      className={`search-result-item ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      role="option"
      aria-selected={isSelected}
    >
      <div className="search-result-content">
        <p>{result.title}</p>
        <p>{result.category}</p>
        {result.description && <p>{result.description}</p>}
      </div>
      <Icon name="CaretRight" size="sm" className="result-arrow" />
    </div>
  );
};
'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import Fuse from 'fuse.js';
import { navigationData } from '../data/navigation';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
  type: 'component' | 'guide' | 'example';
  score?: number;
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Flatten navigation data for search
  const searchableItems = useMemo(() => {
    const items: SearchResult[] = [];
    
    const processNavigation = (navItems: any[], category: string) => {
      navItems.forEach((item) => {
        items.push({
          id: item.path,
          title: item.title,
          description: item.description || '',
          path: item.path,
          category,
          type: item.type || 'guide'
        });

        if (item.children) {
          processNavigation(item.children, category);
        }
      });
    };

    navigationData.forEach((section) => {
      processNavigation(section.items, section.title);
    });

    return items;
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(searchableItems, {
      keys: [
        { name: 'title', weight: 0.7 },
        { name: 'description', weight: 0.2 },
        { name: 'category', weight: 0.1 }
      ],
      threshold: 0.3,
      includeScore: true
    });
  }, [searchableItems]);

  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const results = fuse.search(searchQuery);
    setSearchResults(results.slice(0, 10).map((result) => ({
      ...result.item,
      score: result.score
    })));
  }, [searchQuery, fuse]);

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchResults, clearSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
'use client';

import { FC, useMemo } from 'react';
import { Block, Badge } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import themeTokensData from '@/data/themeTokens.json';
import Fuse from 'fuse.js';
import { TokenItem } from './TokenItem';
import styles from './TokenList.module.scss';

interface TokenMetadata {
  name: string;
  displayName: string;
  type: string;
  category: string;
}

interface ThemeTokensData {
  light: Record<string, string>;
  dark: Record<string, string>;
  metadata: {
    light: TokenMetadata[];
    dark: TokenMetadata[];
    categories: Array<{ id: string; title: string; description: string }>;
  };
}

export const TokenList: FC = () => {
  const {
    activeMode,
    selectedCategory,
    searchQuery,
    favoriteTokens,
    lightTokens,
    darkTokens,
  } = useThemeStudioStore();

  const tokensData = themeTokensData as ThemeTokensData;
  const currentTokens = activeMode === 'light' ? lightTokens : darkTokens;
  const currentMetadata =
    activeMode === 'light' ? tokensData.metadata.light : tokensData.metadata.dark;

  // Filter and search tokens
  const filteredTokens = useMemo(() => {
    let filtered = [...currentMetadata];

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((token) => token.category === selectedCategory);
    }

    // Filter by search query (fuzzy search)
    if (searchQuery) {
      const fuse = new Fuse(filtered, {
        keys: ['name', 'displayName'],
        threshold: 0.3,
        includeScore: true,
      });
      const results = fuse.search(searchQuery);
      filtered = results.map((result) => result.item);
    }

    // Sort: favorites first, then by name
    filtered.sort((a, b) => {
      const aIsFavorite = favoriteTokens.has(a.name);
      const bIsFavorite = favoriteTokens.has(b.name);
      if (aIsFavorite && !bIsFavorite) return -1;
      if (!aIsFavorite && bIsFavorite) return 1;
      return a.name.localeCompare(b.name);
    });

    return filtered;
  }, [currentMetadata, selectedCategory, searchQuery, favoriteTokens]);

  // Group by category for display
  const tokensByCategory = useMemo(() => {
    const grouped: Record<string, TokenMetadata[]> = {};
    filteredTokens.forEach((token) => {
      if (!grouped[token.category]) {
        grouped[token.category] = [];
      }
      grouped[token.category].push(token);
    });
    return grouped;
  }, [filteredTokens]);


  if (filteredTokens.length === 0) {
    return (
      <Block className={styles.tokenList__empty}>
        <p>No tokens found. Try adjusting your search or filter criteria.</p>
      </Block>
    );
  }

  return (
    <div className={styles.tokenList} role="list">
      {Object.entries(tokensByCategory).map(([categoryId, tokens]) => {
        const category = tokensData.metadata.categories.find((c) => c.id === categoryId);
        return (
          <section key={categoryId} className={styles.tokenList__category} aria-labelledby={`category-${categoryId}`}>
            <h2 id={`category-${categoryId}`} className={styles.tokenList__categoryTitle}>
              {category?.title || categoryId}
              <Badge variant="secondary" size="sm" label={tokens.length.toString()} className={styles.tokenList__count} />
            </h2>
            <div className={styles.tokenList__items} role="list">
              {tokens.map((token) => (
                <TokenItem
                  key={token.name}
                  token={token}
                  value={currentTokens[token.name] || ''}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};


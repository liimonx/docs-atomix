import { FC } from 'react';
import { Input, Icon, Badge, Button } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import styles from './TokenSearch.module.scss';

export const TokenSearch: FC = () => {
  const { searchQuery, setSearchQuery, favoriteTokens, recentlyEdited } = useThemeStudioStore();

  const clearFilters = () => {
    setSearchQuery('');
  };

  return (
    <div className={styles.tokenSearch} role="search" aria-label="Token search">
      <div className={styles.tokenSearch__inputWrapper}>
        <Icon name="MagnifyingGlass" size={20} className={styles.tokenSearch__icon} aria-hidden="true" />
        <Input
          type="search"
          placeholder="Search tokens by name or value..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.tokenSearch__input}
          aria-label="Search tokens (Cmd/Ctrl+K or F)"
          aria-describedby="search-help"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className={styles.tokenSearch__clear}
            aria-label={`Clear search query: ${searchQuery}`}
          >
            <Icon name="X" size={16} aria-hidden="true" />
          </Button>
        )}
      </div>
      <span id="search-help" className="u-fs-sm u-text-secondary-emphasis u-mt-2 u-d-block">
        Use Cmd/Ctrl+K or Cmd/Ctrl+F to focus this search field
      </span>

      {((favoriteTokens instanceof Set && favoriteTokens.size > 0) || recentlyEdited.length > 0) && (
        <div className={styles.tokenSearch__quickFilters} role="status" aria-live="polite">
          {favoriteTokens instanceof Set && favoriteTokens.size > 0 && (
            <Badge variant="info" size="sm" label={`${favoriteTokens.size} favorites`} />
          )}
          {recentlyEdited.length > 0 && (
            <Badge variant="secondary" size="sm" label={`${recentlyEdited.length} recent`} />
          )}
        </div>
      )}
    </div>
  );
};


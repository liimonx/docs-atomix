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
    <div className={styles.tokenSearch}>
      <div className={styles.tokenSearch__inputWrapper}>
        <Icon name="MagnifyingGlass" size={20} className={styles.tokenSearch__icon} />
        <Input
          type="text"
          placeholder="Search tokens by name or value..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.tokenSearch__input}
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className={styles.tokenSearch__clear}
            aria-label="Clear search"
          >
            <Icon name="X" size={16} />
          </Button>
        )}
      </div>
      
      {(favoriteTokens.size > 0 || recentlyEdited.length > 0) && (
        <div className={styles.tokenSearch__quickFilters}>
          {favoriteTokens.size > 0 && (
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


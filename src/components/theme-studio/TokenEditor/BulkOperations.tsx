import { FC } from 'react';
import { Button, Icon, Badge, Callout } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import styles from './BulkOperations.module.scss';

export const BulkOperations: FC = () => {
  const {
    bulkEditMode,
    selectedTokens,
    setBulkEditMode,
    selectAllTokens,
    clearTokenSelection,
    bulkCopyToMode,
    activeMode,
  } = useThemeStudioStore();

  if (!bulkEditMode) {
    return (
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => setBulkEditMode(true)}
        className={styles.bulkOperations__toggle}
        aria-label="Enable bulk edit mode"
      >
        <Icon name="Selection" size={16} aria-hidden="true" />
        Bulk Edit
      </Button>
    );
  }

  const selectedCount = selectedTokens.size;
  const targetMode = activeMode === 'light' ? 'dark' : 'light';

  return (
    <div className={styles.bulkOperations} role="toolbar" aria-label="Bulk operations">
      <div className={styles.bulkOperations__header}>
        <div className={styles.bulkOperations__info}>
          <Badge variant="primary" size="sm" label={`${selectedCount} selected`} />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setBulkEditMode(false)}
            className={styles.bulkOperations__close}
            aria-label="Exit bulk edit mode"
          >
            <Icon name="X" size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>

      {selectedCount === 0 ? (
        <Callout variant="info" title="No tokens selected">
          Select tokens by clicking the checkbox on each token card, or use "Select All" to select all tokens.
        </Callout>
      ) : (
        <div className={styles.bulkOperations__actions}>
          <div className={styles.bulkOperations__group}>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={selectAllTokens}
              aria-label="Select all tokens"
            >
              <Icon name="CheckSquare" size={16} aria-hidden="true" />
              Select All
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={clearTokenSelection}
              aria-label="Clear selection"
            >
              <Icon name="Square" size={16} aria-hidden="true" />
              Clear
            </Button>
          </div>

          <div className={styles.bulkOperations__group}>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => bulkCopyToMode(targetMode)}
              aria-label={`Copy ${selectedCount} tokens to ${targetMode} mode`}
            >
              <Icon name="Copy" size={16} aria-hidden="true" />
              Copy to {targetMode === 'light' ? 'Light' : 'Dark'} Mode
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};


import { FC } from 'react';
import { Button, Icon } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import styles from './ModeToggle.module.scss';

export const ModeToggle: FC = () => {
  const { activeMode, setActiveMode } = useThemeStudioStore();

  return (
    <div className={styles.modeToggle} role="group" aria-label="Color mode selection">
      <Button
        variant={activeMode === 'light' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setActiveMode('light')}
        className={styles.modeToggle__button}
        aria-label="Switch to light mode"
        aria-pressed={activeMode === 'light'}
        title="Light mode"
      >
        <Icon name="Sun" size={14} aria-hidden="true" />
      </Button>
      <Button
        variant={activeMode === 'dark' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setActiveMode('dark')}
        className={styles.modeToggle__button}
        aria-label="Switch to dark mode"
        aria-pressed={activeMode === 'dark'}
        title="Dark mode"
      >
        <Icon name="Moon" size={14} aria-hidden="true" />
      </Button>
    </div>
  );
};


import { FC } from 'react';
import { Button, Icon } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import styles from './ModeToggle.module.scss';

export const ModeToggle: FC = () => {
  const { activeMode, setActiveMode } = useThemeStudioStore();

  return (
    <div className={styles.modeToggle} role="group" aria-label="Color mode selection">
      <Button
        variant={activeMode === 'light' ? 'primary' : 'outline-secondary'}
        size="sm"
        onClick={() => setActiveMode('light')}
        className={styles.modeToggle__button}
        aria-label="Switch to light mode"
        aria-pressed={activeMode === 'light'}
      >
        <Icon name="Sun" size={16} aria-hidden="true" />
        Light
      </Button>
      <Button
        variant={activeMode === 'dark' ? 'primary' : 'outline-secondary'}
        size="sm"
        onClick={() => setActiveMode('dark')}
        className={styles.modeToggle__button}
        aria-label="Switch to dark mode"
        aria-pressed={activeMode === 'dark'}
      >
        <Icon name="Moon" size={16} aria-hidden="true" />
        Dark
      </Button>
    </div>
  );
};


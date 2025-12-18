import { FC } from 'react';
import { Button, Icon } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import styles from './ModeToggle.module.scss';

export const ModeToggle: FC = () => {
  const { activeMode, setActiveMode } = useThemeStudioStore();

  return (
    <div className={styles.modeToggle}>
      <Button
        variant={activeMode === 'light' ? 'primary' : 'outline-secondary'}
        size="sm"
        onClick={() => setActiveMode('light')}
        className={styles.modeToggle__button}
        aria-label="Light mode"
      >
        <Icon name="Sun" size={16} />
        Light
      </Button>
      <Button
        variant={activeMode === 'dark' ? 'primary' : 'outline-secondary'}
        size="sm"
        onClick={() => setActiveMode('dark')}
        className={styles.modeToggle__button}
        aria-label="Dark mode"
      >
        <Icon name="Moon" size={16} />
        Dark
      </Button>
    </div>
  );
};


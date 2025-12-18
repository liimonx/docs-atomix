import { FC } from 'react';
import { Button, Icon } from '@shohojdhara/atomix';
import { ModeToggle } from './ModeToggle';
import { UndoRedo } from './UndoRedo';
import { PresetSelector } from './PresetSelector';
import { ExportMenu } from './ExportMenu';
import styles from './ThemeToolbar.module.scss';

interface ThemeToolbarProps {
  onImport?: () => void;
}

export const ThemeToolbar: FC<ThemeToolbarProps> = ({ onImport }) => {
  return (
    <div className={styles.themeToolbar}>
      <div className={styles.themeToolbar__left}>
        <ModeToggle />
        <UndoRedo />
      </div>
      
      <div className={styles.themeToolbar__center}>
        <PresetSelector />
      </div>
      
      <div className={styles.themeToolbar__right}>
        {onImport && (
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={onImport}
            className={styles.themeToolbar__button}
          >
            <Icon name="Upload" size={16} />
            Import
          </Button>
        )}
        <ExportMenu />
      </div>
    </div>
  );
};


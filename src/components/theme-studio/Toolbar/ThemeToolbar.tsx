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
    <nav className={styles.themeToolbar} role="toolbar" aria-label="Theme Studio Controls">
      <div className={styles.themeToolbar__left} role="group" aria-label="Theme mode and history">
        <ModeToggle />
        <UndoRedo />
      </div>
      
      <div className={styles.themeToolbar__center} role="group" aria-label="Theme presets">
        <PresetSelector />
      </div>
      
      <div className={styles.themeToolbar__right} role="group" aria-label="Import and export">
        {onImport && (
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={onImport}
            className={styles.themeToolbar__button}
            aria-label="Import theme from file (Cmd/Ctrl+I)"
          >
            <Icon name="Upload" size={16} aria-hidden="true" />
            Import
          </Button>
        )}
        <ExportMenu />
      </div>
    </nav>
  );
};


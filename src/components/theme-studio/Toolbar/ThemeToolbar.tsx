import { FC } from 'react';
import { Button, Icon } from '@shohojdhara/atomix';
import { ModeToggle } from './ModeToggle';
import { UndoRedo } from './UndoRedo';
import { PresetSelector } from './PresetSelector';
import { ExportMenu } from './ExportMenu';
import { ResponsivePreview } from '../PreviewPanel/ResponsivePreview';
import { TokenSearch } from '../TokenEditor/TokenSearch';
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
        <TokenSearch />
      </div>
      
      <div className={styles.themeToolbar__center} role="group" aria-label="Theme presets">
        <PresetSelector />
        <ResponsivePreview />
      </div>
      
      <div className={styles.themeToolbar__right} role="group" aria-label="Import and export">
        {onImport && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onImport}
            className={styles.themeToolbar__button}
            aria-label="Import theme from file (Cmd/Ctrl+I)"
            title="Import theme (Cmd/Ctrl+I)"
          >
            <Icon name="Upload" size={14} aria-hidden="true" />
            <span>Import</span>
          </Button>
        )}
        <ExportMenu />
      </div>
    </nav>
  );
};


import { FC } from 'react';
import { Button, Icon } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import { useUndoRedo } from '@/hooks/useUndoRedo';
import styles from './UndoRedo.module.scss';

export const UndoRedo: FC = () => {
  const { undo, redo } = useThemeStudioStore();
  const { canUndo, canRedo } = useUndoRedo();

  return (
    <div className={styles.undoRedo} role="group" aria-label="History controls">
      <Button
        variant="ghost"
        size="sm"
        onClick={undo}
        disabled={!canUndo}
        className={styles.undoRedo__button}
        aria-label={canUndo ? "Undo last change (Cmd/Ctrl+Z)" : "Nothing to undo"}
        title="Undo (Cmd/Ctrl+Z)"
      >
        <Icon name="ArrowCounterClockwise" size={14} aria-hidden="true" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={redo}
        disabled={!canRedo}
        className={styles.undoRedo__button}
        aria-label={canRedo ? "Redo last undone change (Cmd/Ctrl+Shift+Z)" : "Nothing to redo"}
        title="Redo (Cmd/Ctrl+Shift+Z)"
      >
        <Icon name="ArrowClockwise" size={14} aria-hidden="true" />
      </Button>
    </div>
  );
};


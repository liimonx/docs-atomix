import { FC } from 'react';
import { Button, Icon } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import { useUndoRedo } from '@/hooks/useUndoRedo';
import styles from './UndoRedo.module.scss';

export const UndoRedo: FC = () => {
  const { undo, redo } = useThemeStudioStore();
  const { canUndo, canRedo } = useUndoRedo();

  return (
    <div className={styles.undoRedo}>
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={undo}
        disabled={!canUndo}
        className={styles.undoRedo__button}
        aria-label="Undo"
        title="Undo (Cmd/Ctrl+Z)"
      >
        <Icon name="ArrowCounterClockwise" size={16} />
      </Button>
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={redo}
        disabled={!canRedo}
        className={styles.undoRedo__button}
        aria-label="Redo"
        title="Redo (Cmd/Ctrl+Shift+Z)"
      >
        <Icon name="ArrowClockwise" size={16} />
      </Button>
    </div>
  );
};


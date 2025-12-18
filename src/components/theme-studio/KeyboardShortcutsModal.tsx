import { FC } from 'react';
import { Modal } from '@shohojdhara/atomix';
import styles from './KeyboardShortcutsModal.module.scss';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SHORTCUTS = [
  { keys: ['Cmd/Ctrl', 'Z'], description: 'Undo last change' },
  { keys: ['Cmd/Ctrl', 'Shift', 'Z'], description: 'Redo last undone change' },
  { keys: ['Cmd/Ctrl', 'K'], description: 'Focus search' },
  { keys: ['Cmd/Ctrl', 'F'], description: 'Focus search' },
  { keys: ['Cmd/Ctrl', 'P'], description: 'Toggle preview' },
  { keys: ['Cmd/Ctrl', 'B'], description: 'Toggle color tools' },
  { keys: ['Cmd/Ctrl', 'E'], description: 'Export theme' },
  { keys: ['Cmd/Ctrl', 'I'], description: 'Import theme' },
  { keys: ['Cmd/Ctrl', '/'], description: 'Show keyboard shortcuts' },
];

export const KeyboardShortcutsModal: FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Keyboard Shortcuts"
      size="md"
    >
      <div className={styles.keyboardShortcutsModal}>
        <div className={styles.keyboardShortcutsModal__list}>
          {SHORTCUTS.map((shortcut, index) => (
            <div key={index} className={styles.keyboardShortcutsModal__item}>
              <div className={styles.keyboardShortcutsModal__keys}>
                {shortcut.keys.map((key, keyIndex) => (
                  <span key={keyIndex} className={styles.keyboardShortcutsModal__key}>
                    {key}
                    {keyIndex < shortcut.keys.length - 1 && (
                      <span className={styles.keyboardShortcutsModal__plus}>+</span>
                    )}
                  </span>
                ))}
              </div>
              <div className={styles.keyboardShortcutsModal__description}>
                {shortcut.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};


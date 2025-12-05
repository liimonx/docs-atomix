import { useEffect } from 'react';

type KeyboardShortcut = {
  [key: string]: (_event: KeyboardEvent) => void;
};

export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      const ctrl = event.ctrlKey;
      const cmd = event.metaKey;
      const alt = event.altKey;
      const shift = event.shiftKey;

      // Generate key combinations
      const combinations = [
        key,
        ctrl && `Ctrl+${key}`,
        cmd && `Cmd+${key}`,
        alt && `Alt+${key}`,
        shift && `Shift+${key}`,
        ctrl && shift && `Ctrl+Shift+${key}`,
        cmd && shift && `Cmd+Shift+${key}`,
        alt && shift && `Alt+Shift+${key}`,
        ctrl && alt && `Ctrl+Alt+${key}`,
        cmd && alt && `Cmd+Alt+${key}`
      ].filter(Boolean) as string[];

      combinations.forEach(combination => {
        if (shortcuts[combination]) {
          event.preventDefault();
          shortcuts[combination](event);
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcuts]);
};
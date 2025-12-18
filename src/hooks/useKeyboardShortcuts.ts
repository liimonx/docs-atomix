import { useEffect } from 'react';

type KeyboardShortcut = {
  [key: string]: (event: KeyboardEvent) => void;
};

export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input, textarea, or contenteditable
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        // Allow some shortcuts even in inputs (like Cmd/Ctrl+K for search)
        const allowedInInput = ['k', 'f', '/'];
        if (!allowedInInput.includes(event.key.toLowerCase())) {
          return;
        }
      }

      const key = event.key;
      const ctrl = event.ctrlKey;
      const cmd = event.metaKey;
      const alt = event.altKey;
      const shift = event.shiftKey;

      // Generate key combinations (order matters - more specific first)
      const combinations = [
        cmd && shift && `Cmd+Shift+${key}`,
        ctrl && shift && `Ctrl+Shift+${key}`,
        cmd && alt && `Cmd+Alt+${key}`,
        ctrl && alt && `Ctrl+Alt+${key}`,
        alt && shift && `Alt+Shift+${key}`,
        cmd && `Cmd+${key}`,
        ctrl && `Ctrl+${key}`,
        alt && `Alt+${key}`,
        shift && `Shift+${key}`,
        key,
      ].filter(Boolean) as string[];

      // Check combinations in order (most specific first)
      for (const combination of combinations) {
        if (shortcuts[combination]) {
          event.preventDefault();
          shortcuts[combination](event);
          return; // Only handle one combination
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcuts]);
};
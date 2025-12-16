import { useEffect } from 'react';
import { useThemeStudioStore } from '@/stores/themeStudioStore';

/**
 * Hook to handle undo/redo keyboard shortcuts
 */
export function useUndoRedo() {
  const { undo, redo, canUndo, canRedo } = useThemeStudioStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Cmd/Ctrl + Z (undo)
      if ((event.metaKey || event.ctrlKey) && event.key === 'z' && !event.shiftKey) {
        event.preventDefault();
        if (canUndo()) {
          undo();
        }
      }
      
      // Check for Cmd/Ctrl + Shift + Z or Cmd/Ctrl + Y (redo)
      if (
        ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key === 'z') ||
        ((event.metaKey || event.ctrlKey) && event.key === 'y')
      ) {
        event.preventDefault();
        if (canRedo()) {
          redo();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, canUndo, canRedo]);

  return { undo, redo, canUndo: canUndo(), canRedo: canRedo() };
}


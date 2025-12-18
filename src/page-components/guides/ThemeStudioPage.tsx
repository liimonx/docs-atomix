"use client";

import { FC, useEffect, useRef, useMemo, useState } from "react";
import { Hero, Callout } from "@shohojdhara/atomix";
import { ThemeStudioLayout } from "@/components/theme-studio/ThemeStudioLayout";
import { KeyboardShortcutsModal } from "@/components/theme-studio/KeyboardShortcutsModal";
import { useThemeStudioStore } from "@/stores/themeStudioStore";
import {
  applyThemeToDocument,
  validateImportedTheme,
} from "@/utils/themeTokenUtils";
import themeTokensData from "@/data/themeTokens.json";
import { useUndoRedo } from "@/hooks/useUndoRedo";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import styles from "@/styles/PageHero.module.scss";

interface ThemeTokensData {
  light: Record<string, string>;
  dark: Record<string, string>;
  metadata: {
    light: Array<{
      name: string;
      displayName: string;
      type: string;
      category: string;
    }>;
    dark: Array<{
      name: string;
      displayName: string;
      type: string;
      category: string;
    }>;
    categories: Array<{ id: string; title: string; description: string }>;
  };
}

const ThemeStudioPage: FC = () => {
  const tokensData = themeTokensData as ThemeTokensData;
  const { lightTokens, darkTokens, activeMode, setTheme } =
    useThemeStudioStore();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const applyTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [showShortcutsModal, setShowShortcutsModal] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  // Create serialized versions of tokens for reliable change detection
  const lightTokensSerialized = useMemo(
    () => JSON.stringify(lightTokens),
    [lightTokens]
  );
  const darkTokensSerialized = useMemo(
    () => JSON.stringify(darkTokens),
    [darkTokens]
  );

  // Initialize store with theme data
  useEffect(() => {
    setTheme(
      {
        light: tokensData.light,
        dark: tokensData.dark,
      },
      "Theme loaded"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Apply theme to document with debounce
  useEffect(() => {
    // Skip if tokens are empty (not initialized yet)
    if (Object.keys(lightTokens).length === 0 && Object.keys(darkTokens).length === 0) {
      return;
    }

    if (applyTimerRef.current) {
      clearTimeout(applyTimerRef.current);
    }

    applyTimerRef.current = setTimeout(() => {
      // Get current tokens from store to ensure we have the latest values
      const currentTokens = activeMode === "light" ? lightTokens : darkTokens;
      applyThemeToDocument(currentTokens, activeMode);
    }, 100); // Reduced debounce for more responsive updates

    return () => {
      if (applyTimerRef.current) {
        clearTimeout(applyTimerRef.current);
      }
    };
    // Use serialized versions for reliable change detection, plus actual tokens for latest values
  }, [lightTokensSerialized, darkTokensSerialized, activeMode, lightTokens, darkTokens]);

  // Enable undo/redo keyboard shortcuts
  useUndoRedo();

  // Additional keyboard shortcuts for Theme Studio
  useKeyboardShortcuts({
    'Cmd+k': (e) => {
      e.preventDefault();
      // Focus search input
      const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    },
    'Ctrl+k': (e) => {
      e.preventDefault();
      // Focus search input
      const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    },
    'Cmd+f': (e) => {
      e.preventDefault();
      // Focus search input
      const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    },
    'Ctrl+f': (e) => {
      e.preventDefault();
      // Focus search input
      const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    },
    'Cmd+p': (e) => {
      e.preventDefault();
      // Toggle split view
      const { splitViewEnabled, setSplitViewEnabled } = useThemeStudioStore.getState();
      setSplitViewEnabled(!splitViewEnabled);
    },
    'Ctrl+p': (e) => {
      e.preventDefault();
      // Toggle split view
      const { splitViewEnabled, setSplitViewEnabled } = useThemeStudioStore.getState();
      setSplitViewEnabled(!splitViewEnabled);
    },
    'Cmd+b': (e) => {
      e.preventDefault();
      // Toggle color tools
      const { colorToolsOpen, setColorToolsOpen } = useThemeStudioStore.getState();
      setColorToolsOpen(!colorToolsOpen);
    },
    'Ctrl+b': (e) => {
      e.preventDefault();
      // Toggle color tools
      const { colorToolsOpen, setColorToolsOpen } = useThemeStudioStore.getState();
      setColorToolsOpen(!colorToolsOpen);
    },
    'Cmd+/': (e) => {
      e.preventDefault();
      setShowShortcutsModal(true);
    },
    'Ctrl+/': (e) => {
      e.preventDefault();
      setShowShortcutsModal(true);
    },
    'Cmd+e': (e) => {
      e.preventDefault();
      // Trigger export (focus export button)
      const exportButton = document.querySelector('[aria-label="Export theme"]') as HTMLButtonElement;
      if (exportButton) {
        exportButton.click();
      }
    },
    'Ctrl+e': (e) => {
      e.preventDefault();
      // Trigger export (focus export button)
      const exportButton = document.querySelector('[aria-label="Export theme"]') as HTMLButtonElement;
      if (exportButton) {
        exportButton.click();
      }
    },
    'Cmd+i': (e) => {
      e.preventDefault();
      // Trigger import
      handleImport();
    },
    'Ctrl+i': (e) => {
      e.preventDefault();
      // Trigger import
      handleImport();
    },
  });

  // Handle import
  const handleImport = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);

        const validation = validateImportedTheme(data);
        if (!validation.valid) {
          setNotification({
            type: 'error',
            message: `Invalid theme file: ${validation.error || 'Unknown error'}`,
          });
          setTimeout(() => setNotification(null), 5000);
          return;
        }

        setTheme(
          {
            light: data.light,
            dark: data.dark,
          },
          "Theme imported"
        );
        setNotification({
          type: 'success',
          message: 'Theme imported successfully!',
        });
        setTimeout(() => setNotification(null), 3000);
      } catch (error) {
        setNotification({
          type: 'error',
          message: 'Error parsing theme file. Please ensure it is valid JSON.',
        });
        setTimeout(() => setNotification(null), 5000);
      }
    };
    reader.onerror = () => {
      setNotification({
        type: 'error',
        message: 'Error reading file. Please try again.',
      });
      setTimeout(() => setNotification(null), 5000);
    };
    reader.readAsText(file);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Theme Studio"
        subtitle="Create and customize themes interactively with real-time preview"
        text="Customize every design token from your Atomix design system. Switch between light and dark modes, preview changes in real-time, and export your theme for use in your application."
        alignment="center"
      />

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ display: "none" }}
        aria-label="Import theme file"
      />

      {/* Notification */}
      {notification && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 10000,
            maxWidth: '400px',
          }}
        >
          <Callout
            variant={notification.type === 'error' ? 'error' : notification.type === 'success' ? 'success' : 'info'}
            title={notification.type === 'error' ? 'Error' : notification.type === 'success' ? 'Success' : 'Info'}
            onClose={() => setNotification(null)}
          >
            {notification.message}
          </Callout>
        </div>
      )}

      <KeyboardShortcutsModal
        isOpen={showShortcutsModal}
        onClose={() => setShowShortcutsModal(false)}
      />

      <ThemeStudioLayout onImport={handleImport} />
    </div>
  );
};

ThemeStudioPage.displayName = "ThemeStudioPage";

export default ThemeStudioPage;

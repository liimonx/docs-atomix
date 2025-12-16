"use client";

import { FC, useEffect, useRef, useMemo } from "react";
import { Hero, Block, SectionIntro } from "@shohojdhara/atomix";
import { ThemeStudioLayout } from "@/components/theme-studio/ThemeStudioLayout";
import { useThemeStudioStore } from "@/stores/themeStudioStore";
import {
  applyThemeToDocument,
  validateImportedTheme,
} from "@/utils/themeTokenUtils";
import themeTokensData from "@/data/themeTokens.json";
import { useUndoRedo } from "@/hooks/useUndoRedo";
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
          alert(`Invalid theme file: ${validation.error}`);
          return;
        }

        setTheme(
          {
            light: data.light,
            dark: data.dark,
          },
          "Theme imported"
        );
        alert("Theme imported successfully!");
      } catch (error) {
        alert("Error parsing theme file. Please ensure it is valid JSON.");
      }
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

      <ThemeStudioLayout onImport={handleImport} />
    </div>
  );
};

ThemeStudioPage.displayName = "ThemeStudioPage";

export default ThemeStudioPage;

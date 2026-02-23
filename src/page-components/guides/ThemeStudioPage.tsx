"use client";

import { FC, useEffect, useRef, useMemo, useState } from "react";
import { Callout, Block, Button, Icon } from "@shohojdhara/atomix";
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

interface SavedThemeVersion {
  id: string;
  name: string;
  createdAt: string;
  light: Record<string, string>;
  dark: Record<string, string>;
}

const GOOGLE_FONT_FAMILIES: Record<string, string> = {
  Inter:
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap",
  "JetBrains Mono":
    "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap",
};

const ThemeStudioPage: FC = () => {
  const tokensData = themeTokensData as ThemeTokensData;
  const { lightTokens, darkTokens, activeMode, setTheme } =
    useThemeStudioStore();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const applyTimerRef = useRef<NodeJS.Timeout | null>(null);
  const fontLinksRef = useRef<Map<string, HTMLLinkElement>>(new Map());
  const [showShortcutsModal, setShowShortcutsModal] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);
  const [savedVersions, setSavedVersions] = useState<SavedThemeVersion[]>([]);

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
    let themeToLoad: { light: Record<string, string>; dark: Record<string, string> } | null = null;

    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sharedThemeParam = params.get("theme");

      if (sharedThemeParam) {
        try {
          const decoded = decodeURIComponent(sharedThemeParam);
          const sharedTheme = JSON.parse(atob(decoded));
          const validation = validateImportedTheme(sharedTheme);

          if (validation.valid) {
            themeToLoad = {
              light: sharedTheme.light,
              dark: sharedTheme.dark,
            };
            setNotification({
              type: "info",
              message: "Theme loaded from shared link.",
            });
            setTimeout(() => setNotification(null), 5000);
          } else {
            setNotification({
              type: "error",
              message: `Shared theme is invalid: ${validation.error || "Unknown error"}`,
            });
            setTimeout(() => setNotification(null), 5000);
          }
        } catch {
          setNotification({
            type: "error",
            message: "Unable to load shared theme from URL.",
          });
          setTimeout(() => setNotification(null), 5000);
        }
      }
    }

    if (!themeToLoad) {
      themeToLoad = {
        light: tokensData.light,
        dark: tokensData.dark,
      };
    }

    setTheme(themeToLoad, themeToLoad === tokensData ? "Theme loaded" : "Theme loaded from shared link");
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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const stored = window.localStorage.getItem("atomix-theme-studio-versions");
      if (stored) {
        const parsed = JSON.parse(stored) as SavedThemeVersion[];
        setSavedVersions(parsed);
      }
    } catch (error) {
      void error;
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(
        "atomix-theme-studio-versions",
        JSON.stringify(savedVersions)
      );
    } catch (error) {
      void error;
    }
  }, [savedVersions]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const currentTokens = activeMode === "light" ? lightTokens : darkTokens;
    const fontFamilies = new Set<string>();

    Object.entries(currentTokens).forEach(([name, value]) => {
      if (name.toLowerCase().includes("font-family")) {
        const primaryFamily = value
          .split(",")[0]
          .trim()
          .replace(/^['"]|['"]$/g, "");

        if (GOOGLE_FONT_FAMILIES[primaryFamily]) {
          fontFamilies.add(primaryFamily);
        }
      }
    });

    const head = document.head;
    const existingLinks = fontLinksRef.current;

    existingLinks.forEach((link, family) => {
      if (!fontFamilies.has(family)) {
        if (head.contains(link)) {
          head.removeChild(link);
        }
        existingLinks.delete(family);
      }
    });

    fontFamilies.forEach((family) => {
      if (existingLinks.has(family)) {
        return;
      }

      const href = GOOGLE_FONT_FAMILIES[family];
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.setAttribute("data-theme-studio-font", family);
      head.appendChild(link);
      existingLinks.set(family, link);
    });
  }, [lightTokens, darkTokens, activeMode]);

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

  const saveCurrentVersion = () => {
    if (Object.keys(lightTokens).length === 0 && Object.keys(darkTokens).length === 0) {
      setNotification({
        type: "error",
        message: "Cannot save an empty theme. Make changes before saving.",
      });
      setTimeout(() => setNotification(null), 5000);
      return;
    }

    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const createdAt = new Date().toISOString();
    const name = new Date(createdAt).toLocaleString();

    const version: SavedThemeVersion = {
      id,
      name,
      createdAt,
      light: { ...lightTokens },
      dark: { ...darkTokens },
    };

    setSavedVersions((prev) => [version, ...prev].slice(0, 20));
    setNotification({
      type: "success",
      message: "Theme snapshot saved.",
    });
    setTimeout(() => setNotification(null), 3000);
  };

  const loadVersion = (id: string) => {
    const version = savedVersions.find((v) => v.id === id);
    if (!version) {
      return;
    }

    setTheme(
      {
        light: version.light,
        dark: version.dark,
      },
      `Loaded version ${version.name}`
    );
    setNotification({
      type: "info",
      message: `Loaded theme version from ${version.name}.`,
    });
    setTimeout(() => setNotification(null), 3000);
  };

  const deleteVersion = (id: string) => {
    setSavedVersions((prev) => prev.filter((v) => v.id !== id));
  };

  const handleShareLink = async () => {
    if (typeof window === "undefined") {
      return;
    }

    if (Object.keys(lightTokens).length === 0 && Object.keys(darkTokens).length === 0) {
      setNotification({
        type: "error",
        message: "Cannot share an empty theme.",
      });
      setTimeout(() => setNotification(null), 5000);
      return;
    }

    const themePayload = {
      light: lightTokens,
      dark: darkTokens,
    };

    let shareUrl = window.location.href;

    try {
      const encoded = encodeURIComponent(btoa(JSON.stringify(themePayload)));
      const url = new URL(window.location.href);
      url.searchParams.set("theme", encoded);
      shareUrl = url.toString();
      window.history.replaceState(null, "", shareUrl);
    } catch (error) {
      void error;
    }

    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(shareUrl);
        setNotification({
          type: "success",
          message: "Shareable theme link copied to clipboard.",
        });
      } else {
        setNotification({
          type: "info",
          message: "Shareable theme link is ready in the address bar.",
        });
      }
    } catch {
      setNotification({
        type: "error",
        message: "Unable to copy share link. Copy it from the address bar.",
      });
    }

    setTimeout(() => setNotification(null), 5000);
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

      <Block className="u-pt-8 u-pb-4">
        <div className="u-flex u-justify-between u-items-center u-flex-wrap u-gap-4">
          <div>
            <h1 className="u-text-2xl u-font-semibold u-mb-1">
              Theme Studio
            </h1>
            <p className="u-text-sm u-text-secondary-emphasis">
              Create and customize themes interactively with real-time preview.
            </p>
            <p className="u-text-sm u-text-secondary-emphasis">
              Save snapshots, share themes with your team, and restore previous versions.
            </p>
          </div>
          <div className="u-flex u-gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={saveCurrentVersion}
              aria-label="Save current theme version"
            >
              <Icon name="FloppyDisk" size={14} aria-hidden="true" />
              <span>Save version</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShareLink}
              aria-label="Copy shareable theme link"
            >
              <Icon name="ShareNetwork" size={14} aria-hidden="true" />
              <span>Share link</span>
            </Button>
          </div>
        </div>

        {savedVersions.length > 0 && (
          <div className="u-mt-4" aria-label="Saved theme versions">
            <div className="u-flex u-gap-2 u-overflow-x-auto" role="list">
              {savedVersions.slice(0, 4).map((version) => (
                <div
                  key={version.id}
                  className="u-flex u-items-center u-gap-2"
                  role="listitem"
                >
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() => loadVersion(version.id)}
                    aria-label={`Load theme version from ${version.name}`}
                  >
                    <Icon
                      name="ClockCounterClockwise"
                      size={12}
                      aria-hidden="true"
                    />
                    <span className="u-truncate u-max-w-[160px]">
                      {version.name}
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() => deleteVersion(version.id)}
                    aria-label={`Delete theme version from ${version.name}`}
                  >
                    <Icon name="Trash" size={12} aria-hidden="true" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </Block>

      <ThemeStudioLayout onImport={handleImport} />
    </div>
  );
};

ThemeStudioPage.displayName = "ThemeStudioPage";

export default ThemeStudioPage;

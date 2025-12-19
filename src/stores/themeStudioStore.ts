import { create } from 'zustand';
import { produce, enableMapSet } from 'immer';

// Enable Immer MapSet plugin for Set/Map support
enableMapSet();

export interface HistoryEntry {
  id: string;
  timestamp: number;
  description: string;
  lightTokens: Record<string, string>;
  darkTokens: Record<string, string>;
}

export interface ThemeData {
  light: Record<string, string>;
  dark: Record<string, string>;
}

export interface ThemeStudioState {
  // Token state
  lightTokens: Record<string, string>;
  darkTokens: Record<string, string>;
  activeMode: 'light' | 'dark';
  
  // History management
  history: HistoryEntry[];
  historyIndex: number;
  maxHistorySize: number;
  
  // UI state
  selectedCategory: string | null;
  searchQuery: string;
  favoriteTokens: Set<string>;
  recentlyEdited: string[];
  comparisonMode: boolean;
  comparisonTheme: ThemeData | null;
  
  // Preview state
  previewComponent: string;
  splitViewEnabled: boolean;
  panelWidth: number; // Percentage for split view
  responsiveMode: 'desktop' | 'tablet' | 'mobile' | 'custom';
  customViewportWidth: number;
  customViewportHeight: number;
  
  // Color tools
  colorToolsOpen: boolean;
  activeColorTool: 'contrast' | 'palette' | 'harmonies' | null;
  
  // Bulk operations
  selectedTokens: Set<string>;
  bulkEditMode: boolean;
  
  // Custom presets
  customPresets: Record<string, { name: string; description?: string; light: Record<string, string>; dark: Record<string, string> }>;
  
  // Actions
  setActiveMode: (mode: 'light' | 'dark') => void;
  updateToken: (tokenName: string, value: string, description?: string) => void;
  updateTokens: (tokens: Record<string, string>, description?: string) => void;
  setTheme: (theme: ThemeData, description?: string) => void;
  
  // History actions
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  addHistoryEntry: (description: string) => void;
  clearHistory: () => void;
  
  // UI actions
  setSelectedCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
  toggleFavorite: (tokenName: string) => void;
  addRecentlyEdited: (tokenName: string) => void;
  setComparisonMode: (enabled: boolean) => void;
  setComparisonTheme: (theme: ThemeData | null) => void;
  setPreviewComponent: (component: string) => void;
  setSplitViewEnabled: (enabled: boolean) => void;
  setPanelWidth: (width: number) => void;
  setResponsiveMode: (mode: 'desktop' | 'tablet' | 'mobile' | 'custom') => void;
  setCustomViewportSize: (width: number, height: number) => void;
  
  // Color tools actions
  setColorToolsOpen: (open: boolean) => void;
  setActiveColorTool: (tool: 'contrast' | 'palette' | 'harmonies' | null) => void;
  
  // Bulk operations actions
  toggleTokenSelection: (tokenName: string) => void;
  selectAllTokens: () => void;
  clearTokenSelection: () => void;
  setBulkEditMode: (enabled: boolean) => void;
  bulkUpdateTokens: (updates: Record<string, string>, description?: string) => void;
  bulkCopyToMode: (targetMode: 'light' | 'dark') => void;
  bulkResetTokens: (description?: string) => void;
  
  // Custom presets actions
  saveCustomPreset: (id: string, name: string, description?: string) => void;
  deleteCustomPreset: (id: string) => void;
  loadCustomPresets: () => void;
  
  // Reset
  reset: () => void;
}

const MAX_HISTORY_SIZE = 100;
const MAX_RECENTLY_EDITED = 20;

const createInitialState = (initialTokens: ThemeData): Partial<ThemeStudioState> => ({
  lightTokens: { ...initialTokens.light },
  darkTokens: { ...initialTokens.dark },
  activeMode: 'light',
  history: [],
  historyIndex: -1,
  maxHistorySize: MAX_HISTORY_SIZE,
  selectedCategory: null,
  searchQuery: '',
  favoriteTokens: new Set<string>(),
  recentlyEdited: [],
  comparisonMode: false,
  comparisonTheme: null,
  previewComponent: 'all',
  splitViewEnabled: true,
  panelWidth: 50,
  responsiveMode: 'desktop',
  customViewportWidth: 1920,
  customViewportHeight: 1080,
  colorToolsOpen: false,
  activeColorTool: 'contrast',
  selectedTokens: new Set<string>(),
  bulkEditMode: false,
  customPresets: {},
});

export const useThemeStudioStore = create<ThemeStudioState>((set, get) => {
  // Initialize with default empty state - will be set by ThemeStudioPage
  const initialState = createInitialState({ light: {}, dark: {} });
  
  return {
    ...initialState,
    
    setActiveMode: (mode) => {
      set({ activeMode: mode });
    },
    
    updateToken: (tokenName, value, description) => {
      const state = get();
      const newState = produce(state, (draft) => {
        if (state.activeMode === 'light') {
          draft.lightTokens[tokenName] = value;
        } else {
          draft.darkTokens[tokenName] = value;
        }
        draft.recentlyEdited = [
          tokenName,
          ...draft.recentlyEdited.filter((t) => t !== tokenName)
        ].slice(0, MAX_RECENTLY_EDITED);
      });
      
      set(newState);
      get().addHistoryEntry(description || `Updated ${tokenName}`);
    },
    
    updateTokens: (tokens, description) => {
      const state = get();
      const newState = produce(state, (draft) => {
        if (state.activeMode === 'light') {
          Object.assign(draft.lightTokens, tokens);
        } else {
          Object.assign(draft.darkTokens, tokens);
        }
      });
      
      set(newState);
      get().addHistoryEntry(description || 'Updated multiple tokens');
    },
    
    setTheme: (theme, description) => {
      set({
        lightTokens: { ...theme.light },
        darkTokens: { ...theme.dark },
      });
      get().addHistoryEntry(description || 'Theme loaded');
    },
    
    addHistoryEntry: (description) => {
      const state = get();
      const currentSnapshot: HistoryEntry = {
        id: `${Date.now()}-${Math.random()}`,
        timestamp: Date.now(),
        description,
        lightTokens: { ...state.lightTokens },
        darkTokens: { ...state.darkTokens },
      };
      
      set(
        produce(state, (draft) => {
          // Remove any history after current index (when user made changes after undo)
          draft.history = draft.history.slice(0, draft.historyIndex + 1);
          draft.history.push(currentSnapshot);
          
          // Limit history size
          if (draft.history.length > draft.maxHistorySize) {
            draft.history.shift();
          } else {
            draft.historyIndex = draft.history.length - 1;
          }
        })
      );
    },
    
    undo: () => {
      const state = get();
      if (!state.canUndo()) return;
      
      const previousIndex = state.historyIndex - 1;
      const previousEntry = state.history[previousIndex];
      
      if (previousEntry) {
        set({
          lightTokens: { ...previousEntry.lightTokens },
          darkTokens: { ...previousEntry.darkTokens },
          historyIndex: previousIndex,
        });
      }
    },
    
    redo: () => {
      const state = get();
      if (!state.canRedo()) return;
      
      const nextIndex = state.historyIndex + 1;
      const nextEntry = state.history[nextIndex];
      
      if (nextEntry) {
        set({
          lightTokens: { ...nextEntry.lightTokens },
          darkTokens: { ...nextEntry.darkTokens },
          historyIndex: nextIndex,
        });
      }
    },
    
    canUndo: () => {
      const state = get();
      return state.historyIndex > 0;
    },
    
    canRedo: () => {
      const state = get();
      return state.historyIndex < state.history.length - 1;
    },
    
    clearHistory: () => {
      set({
        history: [],
        historyIndex: -1,
      });
    },
    
    setSelectedCategory: (category) => {
      set({ selectedCategory: category });
    },
    
    setSearchQuery: (query) => {
      set({ searchQuery: query });
    },
    
    toggleFavorite: (tokenName) => {
      set(
        produce(get(), (draft) => {
          if (draft.favoriteTokens.has(tokenName)) {
            draft.favoriteTokens.delete(tokenName);
          } else {
            draft.favoriteTokens.add(tokenName);
          }
        })
      );
    },
    
    addRecentlyEdited: (tokenName) => {
      const state = get();
      set({
        recentlyEdited: [
          tokenName,
          ...state.recentlyEdited.filter((t) => t !== tokenName),
        ].slice(0, MAX_RECENTLY_EDITED),
      });
    },
    
    setComparisonMode: (enabled) => {
      set({ comparisonMode: enabled });
    },
    
    setComparisonTheme: (theme) => {
      set({ comparisonTheme: theme });
    },
    
    setPreviewComponent: (component) => {
      set({ previewComponent: component });
    },
    
    setSplitViewEnabled: (enabled) => {
      set({ splitViewEnabled: enabled });
    },
    
    setPanelWidth: (width) => {
      set({ panelWidth: Math.max(20, Math.min(80, width)) });
    },
    
    setResponsiveMode: (mode) => {
      set({ responsiveMode: mode });
      // If switching to preset, update viewport size based on preset
      if (mode !== 'custom') {
        const preset = mode === 'desktop' ? { width: 1920, height: 1080 } :
                      mode === 'tablet' ? { width: 768, height: 1024 } :
                      { width: 375, height: 667 };
        set({
          customViewportWidth: preset.width,
          customViewportHeight: preset.height,
        });
      }
    },
    
    setCustomViewportSize: (width, height) => {
      set({
        customViewportWidth: Math.max(320, Math.min(3840, width)),
        customViewportHeight: Math.max(240, Math.min(2160, height)),
        responsiveMode: 'custom', // Switch to custom when manually adjusting
      });
    },
    
    setColorToolsOpen: (open) => {
      set({ colorToolsOpen: open });
    },
    
    setActiveColorTool: (tool) => {
      set({ activeColorTool: tool });
    },
    
    toggleTokenSelection: (tokenName) => {
      set(
        produce(get(), (draft) => {
          if (draft.selectedTokens.has(tokenName)) {
            draft.selectedTokens.delete(tokenName);
          } else {
            draft.selectedTokens.add(tokenName);
          }
        })
      );
    },
    
    selectAllTokens: () => {
      const state = get();
      const allTokens = new Set([
        ...Object.keys(state.lightTokens),
        ...Object.keys(state.darkTokens),
      ]);
      set({ selectedTokens: allTokens });
    },
    
    clearTokenSelection: () => {
      set({ selectedTokens: new Set<string>() });
    },
    
    setBulkEditMode: (enabled) => {
      set({ bulkEditMode: enabled });
      if (!enabled) {
        set({ selectedTokens: new Set<string>() });
      }
    },
    
    bulkUpdateTokens: (updates, description) => {
      const state = get();
      const newState = produce(state, (draft) => {
        Object.entries(updates).forEach(([tokenName, value]) => {
          if (state.selectedTokens.has(tokenName)) {
            if (state.activeMode === 'light') {
              draft.lightTokens[tokenName] = value;
            } else {
              draft.darkTokens[tokenName] = value;
            }
          }
        });
      });
      
      set(newState);
      get().addHistoryEntry(description || 'Bulk updated tokens');
      get().clearTokenSelection();
    },
    
    bulkCopyToMode: (targetMode) => {
      const state = get();
      const sourceTokens = state.activeMode === 'light' ? state.lightTokens : state.darkTokens;
      
      const updates: Record<string, string> = {};
      state.selectedTokens.forEach((tokenName) => {
        if (sourceTokens[tokenName]) {
          updates[tokenName] = sourceTokens[tokenName];
        }
      });
      
      const newState = produce(state, (draft) => {
        Object.entries(updates).forEach(([tokenName, value]) => {
          if (targetMode === 'light') {
            draft.lightTokens[tokenName] = value;
          } else {
            draft.darkTokens[tokenName] = value;
          }
        });
      });
      
      set(newState);
      get().addHistoryEntry(`Copied ${state.selectedTokens.size} tokens to ${targetMode} mode`);
      get().clearTokenSelection();
    },
    
    bulkResetTokens: (description) => {
      // This would need access to default tokens - for now, just clear selection
      get().clearTokenSelection();
      get().addHistoryEntry(description || 'Bulk reset tokens');
    },
    
    saveCustomPreset: (id, name, description) => {
      const state = get();
      const preset = {
        name,
        description,
        light: { ...state.lightTokens },
        dark: { ...state.darkTokens },
      };
      
      set(
        produce(state, (draft) => {
          draft.customPresets[id] = preset;
        })
      );
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        try {
          const allPresets = { ...state.customPresets, [id]: preset };
          localStorage.setItem('atomix-custom-presets', JSON.stringify(allPresets));
        } catch (error) {
          console.error('Failed to save custom preset to localStorage:', error);
        }
      }
    },
    
    deleteCustomPreset: (id) => {
      set(
        produce(get(), (draft) => {
          delete draft.customPresets[id];
        })
      );
      
      // Update localStorage
      if (typeof window !== 'undefined') {
        try {
          const state = get();
          localStorage.setItem('atomix-custom-presets', JSON.stringify(state.customPresets));
        } catch (error) {
          console.error('Failed to update localStorage:', error);
        }
      }
    },
    
    loadCustomPresets: () => {
      if (typeof window === 'undefined') return;
      
      try {
        const stored = localStorage.getItem('atomix-custom-presets');
        if (stored) {
          const presets = JSON.parse(stored);
          set({ customPresets: presets });
        }
      } catch (error) {
        console.error('Failed to load custom presets from localStorage:', error);
      }
    },
    
    reset: () => {
      const initialState = createInitialState({ light: {}, dark: {} });
      set({
        ...initialState,
        lightTokens: { ...get().lightTokens },
        darkTokens: { ...get().darkTokens },
      });
    },
  } as ThemeStudioState;
});


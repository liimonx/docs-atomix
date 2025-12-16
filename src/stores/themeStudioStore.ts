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
  
  // Color tools
  colorToolsOpen: boolean;
  activeColorTool: 'contrast' | 'palette' | 'harmonies' | null;
  
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
  
  // Color tools actions
  setColorToolsOpen: (open: boolean) => void;
  setActiveColorTool: (tool: 'contrast' | 'palette' | 'harmonies' | null) => void;
  
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
  colorToolsOpen: false,
  activeColorTool: 'contrast',
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
    
    setColorToolsOpen: (open) => {
      set({ colorToolsOpen: open });
    },
    
    setActiveColorTool: (tool) => {
      set({ activeColorTool: tool });
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


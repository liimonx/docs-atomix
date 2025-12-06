export interface DesignToken {
  name: string;
  category: string;
  type: 'color' | 'spacing' | 'typography';
  value: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  description?: string;
  cssVariable?: string;
}

// Component Documentation Types
export interface ComponentDocumentation {
  icon?: string;
  isNew?: boolean;
  deprecationMessage?: string;
  quickStart?: string;
  name: string;
  description: string;
  category: string;
  version: string;
  status: 'stable' | 'beta' | 'experimental' | 'deprecated';
  lastUpdated: string;
  author: string;
  props: PropDefinition[];
  examples: ComponentExample[];
  features: ComponentFeature[];
  usage: ComponentUsage[];
  accessibility: AccessibilityInfo;
  relatedComponents: string[];
  tags: string[];
  importPath: string;
  dependencies: string[];
  designTokens?: DesignToken[];
}

export interface ComponentFeature {
  icon?: string;
  title: string;
  description: string;
  supported: boolean;
}

export interface ComponentUsage {
  title: string;
  description: string;
  code: string;
  language: string;
}

export interface ComponentExample {
  id: string;
  title: string;
  description: string;
  code: string;
  preview?: boolean;
  language: string;
  category: 'basic' | 'advanced' | 'custom';
  dependencies?: string[];
  notes?: string;
}

export interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description: string;
  examples?: string[];
  deprecated?: boolean;
  since?: string;
}

export interface AccessibilityInfo {
  overview: string;
  keyboardSupport: KeyboardSupport[];
  ariaAttributes: AriaAttribute[];
  guidelines: string[];
  wcagLevel: 'A' | 'AA' | 'AAA';
  screenReaderSupport?: string;
  focusManagement?: string;
  colorContrastCompliant?: boolean;
}

export interface KeyboardSupport {
  key: string;
  action: string;
  context?: string;
}

export interface AriaAttribute {
  attribute: string;
  description: string;
  required: boolean;
  defaultValue?: string;
}

// Navigation Types
export interface NavigationBadge {
  text: string;
  variant: 'new' | 'beta' | 'updated' | 'deprecated';
}

export interface NavigationItem {
  id: string;
  title: string;
  path: string;
  icon?: string;
  description?: string;
  badge?: NavigationBadge;
  children?: NavigationItem[];
  category: string;
  searchTerms?: string[];
  isNew?: boolean;
  isUpdated?: boolean;
  priority?: number;
}

export interface NavigationSection {
  id: string;
  title: string;
  description?: string;
  items: NavigationItem[];
  collapsed?: boolean;
  priority?: number;
}

// App State Types
export interface AppState {
  theme: 'light' | 'dark' | 'high-contrast';
  sidebarOpen: boolean;
  searchQuery: string;
  activeNavItem: string | null;
  loading: boolean;
}

// Search Types
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: string;
  category: 'component' | 'page' | 'section';
  breadcrumbs?: string[];
}

export interface SearchOptions {
  includeContent: boolean;
  fuzzySearch: boolean;
  maxResults: number;
  threshold: number;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  accent: string;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  spacing: Record<string, string>;
  typography: Record<string, string>;
  breakpoints: Record<string, string>;
}

// Error Types
export interface AppError {
  message: string;
  code?: string;
  context?: Record<string, unknown>;
  timestamp: Date;
}

// Global Atomix Namespace for Vanilla JS Components
export interface AtomixGlobal {
  Card?: any;
  applyCardHoverEffect?: (_element: HTMLElement) => void;
  applyCardFocusEffect?: (_element: HTMLElement) => void;
  makeCardClickable?: (_element: HTMLElement, _onClick: () => void) => void;
  initializeAllCards?: () => void;
  applyCardElevationEffect?: (_element: HTMLElement) => void;
  applyCardFlipEffect?: (_element: HTMLElement) => void;
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ComponentStatus = ComponentDocumentation['status'];
export type BadgeVariant = NavigationBadge['variant'];
export type ThemeName = AppState['theme'];

// Extend global Window interface (if needed for future use)
// declare global {
//   interface Window {
//     Atomix: AtomixGlobal;
//   }
// }

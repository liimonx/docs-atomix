/**
 * Atomix Global Theme Configuration
 * 
 * This file configures the global theme system for the Atomix documentation site.
 * It defines all available themes, runtime settings, and build configuration.
 * 
 * @see https://atomix-docs.vercel.app/docs/guides/theming
 */

// Define types locally based on the package structure
// These types match the structure defined in @shohojdhara/atomix/theme.config.ts
export interface CSSThemeDefinition {
  type: 'css';
  name: string;
  class?: string;
  description?: string;
  author?: string;
  version?: string;
  tags?: string[];
  supportsDarkMode?: boolean;
  status?: 'stable' | 'beta' | 'experimental' | 'deprecated';
  a11y?: {
    contrastTarget?: number;
    modes?: string[];
  };
  color?: string;
  features?: string[];
  dependencies?: string[];
  cssPath?: string;
}

export interface JSThemeDefinition {
  type: 'js';
  name: string;
  class?: string;
  description?: string;
  author?: string;
  version?: string;
  tags?: string[];
  supportsDarkMode?: boolean;
  status?: 'stable' | 'beta' | 'experimental' | 'deprecated';
  a11y?: {
    contrastTarget?: number;
    modes?: string[];
  };
  color?: string;
  features?: string[];
  dependencies?: string[];
  createTheme: () => any; // Theme type from package
}

export type ThemeDefinition = CSSThemeDefinition | JSThemeDefinition;

export interface BuildConfig {
  output: {
    directory: string;
    formats: {
      expanded: string;
      compressed: string;
    };
  };
  sass: {
    style: 'expanded' | 'compressed' | 'compact' | 'nested';
    sourceMap: boolean;
    loadPaths: string[];
  };
}

export interface RuntimeConfig {
  basePath: string;
  cdnPath?: string | null;
  preload?: string[];
  lazy?: boolean;
  defaultTheme: string;
  storageKey?: string;
  dataAttribute?: string;
  enablePersistence?: boolean;
  useMinified?: boolean;
}

export interface IntegrationConfig {
  cssVariables: {
    colorMode?: string;
    [key: string]: string | undefined;
  };
  classNames: {
    theme: string;
    colorMode: string;
  };
}

export interface ThemeConfig {
  themes: Record<string, ThemeDefinition>;
  build: BuildConfig;
  runtime: RuntimeConfig;
  integration: IntegrationConfig;
  dependencies?: Record<string, string[]>;
}

import { themePresets } from './src/data/themePresets';
// Import createThemeBuilder from the main package
import { createThemeBuilder } from '@shohojdhara/atomix';

/**
 * Global theme configuration for Atomix documentation site
 * 
 * This configuration defines:
 * - Available themes (CSS and JS-based)
 * - Runtime settings (persistence, default theme)
 * - Build output settings
 * - Integration settings
 */
const config: ThemeConfig = {
  /**
   * Theme Definitions
   * 
   * Single JS-based theme created programmatically using createThemeBuilder
   */
  themes: {
    // Atomix Documentation Site Theme (programmatically created)
    'atomix-docs': {
      type: 'js',
      name: 'Atomix Documentation',
      description: 'Programmatically created theme for the Atomix documentation site',
      status: 'stable',
      supportsDarkMode: true,
      tags: ['docs', 'documentation', 'atomix'],
      a11y: {
        contrastTarget: 4.5,
        modes: ['light', 'dark'],
      },
      color: '#8b5cf6',
      createTheme: () => {
        const builder = createThemeBuilder();
        
        return builder
          .setName('Atomix Documentation')
          .setPalette({
            primary: {
              main: '#8b5cf6', // --atomix-primary
              light: '#a78bfa', // --atomix-primary-5
              dark: '#7c3aed', // --atomix-primary-7
              contrastText: '#ffffff',
            },
            secondary: {
              main: '#f8fafc', // --atomix-secondary
              light: '#ffffff',
              dark: '#e2e8f0', // --atomix-secondary-hover
              contrastText: '#334155', // --atomix-secondary-text-emphasis
            },
            success: {
              main: '#14b8a6', // --atomix-success
              light: '#5eead4',
              dark: '#0d9488',
              contrastText: '#ffffff',
            },
            error: {
              main: '#f43f5e', // --atomix-error
              light: '#fb7185',
              dark: '#e11d48',
              contrastText: '#ffffff',
            },
            warning: {
              main: '#f59e0b', // --atomix-warning
              light: '#fbbf24',
              dark: '#d97706',
              contrastText: '#000000',
            },
            info: {
              main: '#06b6d4', // --atomix-info
              light: '#22d3ee',
              dark: '#0891b2',
              contrastText: '#ffffff',
            },
            background: {
              default: '#ffffff', // --atomix-body-bg (light)
              paper: '#f8fafc', // --atomix-secondary
              subtle: '#f1f5f9', // --atomix-tertiary-bg-subtle
            },
            text: {
              primary: '#0a0a0f', // --atomix-body-color (light)
              secondary: '#6b7a8a', // --atomix-gray-6
              disabled: '#94a3b8', // --atomix-disabled-text-emphasis
            },
          })
          .setTypography({
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", "Roboto", "Helvetica Neue", Arial, sans-serif', // --atomix-font-sans-serif
            fontSize: 16, // --atomix-body-font-size (1rem = 16px)
            fontWeightLight: 300,
            fontWeightRegular: 400, // --atomix-body-font-weight
            fontWeightMedium: 500,
            fontWeightSemiBold: 600,
            fontWeightBold: 700,
            h1: {
              fontSize: '2.5rem',
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: '-0.03em', // --atomix-letter-spacing-h1
            },
            h2: {
              fontSize: '2rem', // --atomix-font-size-2xl
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: '-0.025em', // --atomix-letter-spacing-h2
            },
            h3: {
              fontSize: '1.5rem', // --atomix-font-size-xl
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: '-0.02em', // --atomix-letter-spacing-h3
            },
            h4: {
              fontSize: '1.25rem',
              fontWeight: 600,
              lineHeight: 1.4,
              letterSpacing: '-0.015em', // --atomix-letter-spacing-h4
            },
            h5: {
              fontSize: '1.125rem',
              fontWeight: 600,
              lineHeight: 1.4,
              letterSpacing: '-0.01em', // --atomix-letter-spacing-h5
            },
            h6: {
              fontSize: '1rem',
              fontWeight: 600,
              lineHeight: 1.4,
              letterSpacing: '-0.005em', // --atomix-letter-spacing-h6
            },
            body1: {
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: 1.65, // --atomix-body-line-height
            },
            body2: {
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: 1.65,
            },
          })
          .setSpacing({
            '0': 0,
            '1': 4,    // --atomix-spacing-1 (0.25rem = 4px)
            '2': 8,    // --atomix-spacing-2 (0.5rem = 8px)
            '3': 12,   // --atomix-spacing-3 (0.75rem = 12px)
            '4': 16,   // --atomix-spacing-4 (1rem = 16px)
            '6': 24,   // --atomix-spacing-6 (1.5rem = 24px)
            '8': 32,   // --atomix-spacing-8 (2rem = 32px)
            '12': 48,  // --atomix-spacing-12 (3rem = 48px)
          })
          .build();
      },
    } as JSThemeDefinition,
  },

  /**
   * Runtime Configuration
   * 
   * Controls how themes are loaded and managed at runtime
   */
  runtime: {
    /**
     * Base path for theme CSS files
     * Used when loading CSS-based themes
     */
    basePath: '/themes',

    /**
     * Optional CDN path for theme files
     */
    cdnPath: null,

    /**
     * Themes to preload on initialization
     */
    preload: ['atomix-docs'],

    /**
     * Enable lazy loading of themes
     */
    lazy: true,

    /**
     * Default theme to use on initial load
     * Can be overridden by user preference stored in localStorage
     */
    defaultTheme: 'atomix-docs',

    /**
     * localStorage key for persisting user's theme preference
     */
    storageKey: 'atomix-theme',

    /**
     * Data attribute name for theme
     */
    dataAttribute: 'data-theme',

    /**
     * Whether to persist theme selection to localStorage
     * When enabled, user's theme choice is saved and restored on next visit
     */
    enablePersistence: true,

    /**
     * Use minified CSS files in production
     */
    useMinified: process.env.NODE_ENV === 'production',
  },

  /**
   * Build Configuration
   * 
   * Controls how themes are built and output during build process
   */
  build: {
    /**
     * Output directory for generated theme CSS files
     * Relative to project root
     */
    output: {
      directory: 'public/themes',
      formats: {
        /**
         * Expanded format: Human-readable CSS with comments
         * Used for development and debugging
         */
        expanded: '.css',

        /**
         * Compressed format: Minified CSS
         * Used for production builds
         */
        compressed: '.min.css',
      },
    },

    /**
     * Sass compilation settings
     */
    sass: {
      /**
       * Output style
       */
      style: 'expanded' as const,

      /**
       * Generate source maps
       */
      sourceMap: true,

      /**
       * Additional load paths
       */
      loadPaths: ['src'],
    },
  },

  /**
   * Integration Configuration
   * 
   * Settings for integrating themes with the application
   */
  integration: {
    /**
     * CSS variables for theme integration
     */
    cssVariables: {
      /**
       * Color mode variable name
       */
      colorMode: '--atomix-color-mode',
    },

    /**
     * Attribute names used for theme and color mode
     */
    classNames: {
      /**
       * Theme attribute name
       */
      theme: 'data-theme',

      /**
       * Color mode attribute name
       */
      colorMode: 'data-atomix-color-mode',
    },
  },

  /**
   * Theme Dependencies
   * 
   * Maps theme IDs to their required dependencies
   */
  dependencies: {},
};

/**
 * Default export of theme configuration
 */
export default config;

/**
 * Helper function to get theme configuration
 * Useful for accessing config in components or utilities
 */
export function getThemeConfig(): ThemeConfig {
  return config;
}

/**
 * Helper function to get available theme IDs
 */
export function getAvailableThemes(): string[] {
  return Object.keys(config.themes);
}

/**
 * Helper function to check if a theme exists
 */
export function hasTheme(themeId: string): boolean {
  return themeId in config.themes;
}

/**
 * Helper function to get theme metadata
 */
export function getThemeMetadata(themeId: string) {
  const theme = config.themes[themeId];
  if (!theme) {
    throw new Error(`Theme "${themeId}" not found`);
  }
  return {
    id: themeId,
    name: theme.name,
    description: theme.description,
    status: theme.status,
    type: theme.type,
    supportsDarkMode: theme.supportsDarkMode,
    tags: theme.tags,
    color: theme.color,
  };
}

/**
 * Helper function to get theme preset data
 * Maps theme IDs to preset data from themePresets.ts
 */
export function getThemePreset(themeId: string) {
  const presetMap: Record<string, keyof typeof themePresets> = {
    'atomix-docs': 'atomix',
  };

  const presetKey = presetMap[themeId];
  if (!presetKey) {
    return null;
  }

  return themePresets[presetKey];
}

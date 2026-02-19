"use client";

import { FC } from "react";
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Button,
  Icon,
  Callout,
} from "@shohojdhara/atomix";
import Link from "next/link";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import styles from "@/styles/PageHero.module.scss";

// Theming Guide Page Component

const GeneralThemingGuidePage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Atomix Theme System"
        text="Complete guide to customizing Atomix with CSS-based and JavaScript-based themes. Create custom themes programmatically, switch themes at runtime, and maintain full type safety."
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Complete Theme System Guide"
          text="Version 2.1 - Last Updated: 2025-01-27. Atomix provides a powerful theme system that supports both CSS-based and JavaScript-based themes. Create custom themes programmatically, switch themes at runtime, and maintain full type safety throughout your application."
        />

        {/* Quick Start Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">Quick Start</h2>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Installation</h3>
                <EnhancedCodeBlock
                  language="bash"
                  code={`npm install @shohojdhara/atomix`}
                  showLineNumbers={false}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Basic Setup (React)
                </h3>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemeProvider, useTheme, createTheme } from '@shohojdhara/atomix/theme';

// Create a theme
const myTheme = createTheme({
  name: 'My Theme',
  palette: {
    primary: { main: '#7AFFD7' },
    secondary: { main: '#FF5733' },
  },
});

function App() {
  return (
    <ThemeProvider defaultTheme={myTheme}>
      <YourApp />
    </ThemeProvider>
  );
}

// Use theme in components
function MyComponent() {
  const { theme, setTheme, availableThemes } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark-theme')}>
        Switch Theme
      </button>
    </div>
  );
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Basic Setup (Vanilla JavaScript)
                </h3>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { ThemeManager, createTheme } from '@shohojdhara/atomix/theme';

const themeManager = new ThemeManager({
  themes: {
    'light': { name: 'Light', type: 'css' },
    'dark': { name: 'Dark', type: 'css' },
  },
  defaultTheme: 'light',
});

// Switch theme
await themeManager.setTheme('dark');`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* For External Developers Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">
                For External Developers
              </h2>
              <p className="u-text-secondary-emphasis u-mb-6">
                This section is for developers using Atomix in their own
                projects.
              </p>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  ✅ What You Should Use
                </h3>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    1. JavaScript Themes (Recommended)
                  </h4>
                  <p className="u-text-secondary-emphasis u-mb-3">
                    The easiest way to create themes - no build step required:
                  </p>
                  <EnhancedCodeBlock
                    language="tsx"
                    code={`import { createTheme, ThemeProvider } from '@shohojdhara/atomix/theme';

const myTheme = createTheme({
  name: 'My Brand Theme',
  palette: {
    primary: { main: '#7AFFD7' },
    secondary: { main: '#FF5733' },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider defaultTheme={myTheme}>
      <YourApp />
    </ThemeProvider>
  );
}`}
                    showLineNumbers={true}
                  />
                  <div className="u-mt-3">
                    <p className="u-fs-sm u-text-secondary-emphasis">
                      <strong>Why this is great:</strong>
                    </p>
                    <ul className="u-fs-sm u-ml-4">
                      <li>No build step required</li>
                      <li>Works at runtime</li>
                      <li>TypeScript autocomplete</li>
                      <li>Generates all CSS variables automatically</li>
                    </ul>
                  </div>
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    2. Quick Theme Helper
                  </h4>
                  <p className="u-text-secondary-emphasis u-mb-3">
                    Fastest way to get started:
                  </p>
                  <EnhancedCodeBlock
                    language="tsx"
                    code={`import { quickTheme, ThemeProvider } from '@shohojdhara/atomix/theme';

// Create a theme from just brand colors
const myTheme = quickTheme('My Brand', '#7AFFD7', '#FF5733');

function App() {
  return (
    <ThemeProvider defaultTheme={myTheme}>
      <YourApp />
    </ThemeProvider>
  );
}`}
                    showLineNumbers={true}
                  />
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    3. CSS Theme Loading
                  </h4>
                  <p className="u-text-secondary-emphasis u-mb-3">
                    Use your existing CSS files:
                  </p>
                  <EnhancedCodeBlock
                    language="tsx"
                    code={`import { ThemeProvider } from '@shohojdhara/atomix/theme';
import './my-custom-theme.css';

const themes = {
  'my-theme': {
    type: 'css',
    name: 'My Theme',
    class: 'my-theme-class',
  },
};

function App() {
  return (
    <ThemeProvider themes={themes} defaultTheme="my-theme">
      <YourApp />
    </ThemeProvider>
  );
}`}
                    showLineNumbers={true}
                  />
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    4. Customize Design Tokens via Config (New!)
                  </h4>
                  <p className="u-text-secondary-emphasis u-mb-3">
                    You can now customize design tokens using{" "}
                    <code>atomix.config.ts</code>:
                  </p>
                  <EnhancedCodeBlock
                    language="typescript"
                    code={`// atomix.config.ts (in your project root)
import { defineConfig } from '@shohojdhara/atomix/config';

export default defineConfig({
  prefix: 'atomix', // Optional: customize CSS variable prefix
  
  theme: {
    extend: {
      // Customize colors - generates full color scales automatically
      colors: {
        primary: { main: '#7AFFD7' }, // Generates primary-1 through primary-10
        secondary: { main: '#FF5733' },
        error: { main: '#ef4444' },
      },
      
      // Customize typography
      typography: {
        fontFamilies: {
          sans: ['Inter', 'sans-serif'],
        },
        fontSizes: {
          '2xl': '1.5rem',
        },
      },
      
      // Customize spacing
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      },
      
      // Customize border radius
      borderRadius: {
        'xl': '0.75rem',
      },
    },
  },
});`}
                    showLineNumbers={true}
                  />
                  <Callout variant="info" className="u-mt-3">
                    <p className="u-fs-sm u-mb-2">
                      <strong>After creating your config, run:</strong>
                    </p>
                    <code className="u-fs-sm">npm run sync:config</code>
                    <p className="u-fs-sm u-mt-2">
                      This generates CSS custom properties in{" "}
                      <code>src/styles/03-generic/_generated-root.css</code>{" "}
                      that you can import in your project.
                    </p>
                  </Callout>
                </div>
              </div>

              <div className="u-mb-4">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  ❌ What You Should NOT Use
                </h3>
                <ul className="u-fs-sm u-ml-4">
                  <li>
                    <strong>SCSS Theme Structure</strong> - Only needed if
                    contributing themes to Atomix.
                  </li>
                  <li>
                    <strong>Build Scripts</strong> (<code>sync:tokens</code>,{" "}
                    <code>generate:tokens</code>) - These are for library
                    development only.
                  </li>
                </ul>
              </div>

              <div className="u-mb-4">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Common Use Cases
                </h3>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">Brand Colors</h4>
                  <EnhancedCodeBlock
                    language="tsx"
                    code={`const brandTheme = createTheme({
  palette: {
    primary: { main: '#YOUR_BRAND_COLOR' },
  },
});`}
                    showLineNumbers={true}
                  />
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">Dark Mode</h4>
                  <EnhancedCodeBlock
                    language="tsx"
                    code={`const darkTheme = createTheme({
  palette: {
    background: { default: '#111827' },
    text: { primary: '#f9fafb' },
  },
});`}
                    showLineNumbers={true}
                  />
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    Multiple Themes with Switching
                  </h4>
                  <EnhancedCodeBlock
                    language="tsx"
                    code={`import { createTheme, ThemeProvider, useTheme } from '@shohojdhara/atomix/theme';

const lightTheme = createTheme({
  name: 'Light',
  palette: {
    primary: { main: '#3b82f6' },
    background: { default: '#ffffff' },
  },
});

const darkTheme = createTheme({
  name: 'Dark',
  palette: {
    primary: { main: '#60a5fa' },
    background: { default: '#111827' },
  },
});

function ThemeSwitcher() {
  const { setTheme } = useTheme();
  
  return (
    <div>
      <button onClick={() => setTheme(lightTheme)}>Light</button>
      <button onClick={() => setTheme(darkTheme)}>Dark</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme={lightTheme}>
      <ThemeSwitcher />
      <YourApp />
    </ThemeProvider>
  );
}`}
                    showLineNumbers={true}
                  />
                </div>
              </div>

              <div className="u-mb-4">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Quick Start Checklist
                </h3>
                <ul className="u-fs-sm u-ml-4">
                  <li>
                    Install: <code>npm install @shohojdhara/atomix</code>
                  </li>
                  <li>
                    Import:{" "}
                    <code>
                      import &#123; createTheme, ThemeProvider &#125; from
                      '@shohojdhara/atomix/theme'
                    </code>
                  </li>
                  <li>
                    Create theme:{" "}
                    <code>
                      const theme = createTheme(&#123; palette: &#123;...&#125;
                      &#125;)
                    </code>
                  </li>
                  <li>
                    Wrap app:{" "}
                    <code>
                      &lt;ThemeProvider defaultTheme=&#123;theme&#125;&gt;
                    </code>
                  </li>
                  <li>
                    Use CSS variables: <code>var(--atomix-primary)</code>
                  </li>
                </ul>
                <Callout variant="success" className="u-mt-3">
                  <p className="u-fs-sm u-m-0">
                    <strong>That's it!</strong> No config files needed, no build
                    steps, no complexity.
                  </p>
                </Callout>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* For Library Developers Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">
                For Library Developers
              </h2>
              <p className="u-text-secondary-emphasis u-mb-6">
                This section is for developers contributing themes to the Atomix
                library.
              </p>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Configuration File
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Create <code>atomix.config.ts</code> in the project root:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { defineConfig } from '@shohojdhara/atomix/config';

export default defineConfig({
  // CSS variable prefix
  prefix: 'atomix',
  
  theme: {
    // Extend default tokens
    extend: {
      colors: {
        primary: { main: '#7AFFD7' },
        secondary: { main: '#FF5733' },
      },
      spacing: {
        '18': '4.5rem',
      },
      typography: {
        fontFamilies: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    
    // Register themes
    themes: {
      'my-theme': {
        type: 'css',
        name: 'My Theme',
        description: 'A custom theme',
        version: '1.0.0',
        status: 'stable',
      },
    },
  },
  
  // Build configuration (internal)
  build: {
    output: {
      directory: 'themes',
      formats: {
        expanded: '.css',
        compressed: '.min.css',
      },
    },
  },
});`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Build Process</h3>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# Sync configuration
npm run sync:config

# Generate tokens
npm run sync:tokens

# Validate configuration
npm run validate:config

# Build themes
npm run build:themes`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  SCSS Theme Structure
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  For library developers creating SCSS themes:
                </p>
                <EnhancedCodeBlock
                  language="bash"
                  code={`src/themes/my-theme/
├── index.scss
├── 01-settings/
│   └── _settings.colors.scss
├── 06-components/
│   └── _components.button.scss
└── 99-utilities/`}
                  showLineNumbers={true}
                />
                <p className="u-text-secondary-emphasis u-mt-3 u-mb-2">
                  <strong>
                    Create <code>index.scss</code>:
                  </strong>
                </p>
                <EnhancedCodeBlock
                  language="scss"
                  code={`@use '01-settings/index' as *;
@use '../../styles/02-tools/index' as tools;
@use '../../styles/03-generic/index' as generic;
@use '../../styles/04-elements/index' as elements;
@use '../../styles/05-objects/index' as objects;
@use '../../styles/06-components/index' as components;
@use '../../styles/99-utilities/index' as utilities;`}
                  showLineNumbers={true}
                />
                <p className="u-text-secondary-emphasis u-mt-3 u-mb-2">
                  <strong>Override settings:</strong>
                </p>
                <EnhancedCodeBlock
                  language="scss"
                  code={`// 01-settings/_settings.colors.scss
@use '../../../styles/01-settings/settings.colors' with (
  $primary-6: #0ea5e9,
  $gray-1: #f9fafb,
);`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Theme Types Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">Theme Types</h2>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">CSS Themes</h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Themes loaded from CSS files, applied via CSS classes:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`// In atomix.config.ts (library developers)
export default defineConfig({
  theme: {
    themes: {
      'my-theme': {
        type: 'css',
        name: 'My Theme',
        class: 'my-theme-class',
        cssPath: '/themes/my-theme.css',
      },
    },
  },
});`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  JavaScript Themes
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Themes created programmatically using{" "}
                  <code>createTheme()</code>:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { createTheme } from '@shohojdhara/atomix/theme';

const theme = createTheme({
  name: 'Custom Theme',
  palette: {
    primary: { main: '#7AFFD7' },
    secondary: { main: '#FF5733' },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
  },
});`}
                  showLineNumbers={true}
                />
                <Callout variant="info" className="u-mt-3">
                  <p className="u-fs-sm u-mb-2">
                    <strong>Note:</strong> JavaScript themes automatically
                    generate all CSS variables including:
                  </p>
                  <ul className="u-fs-sm u-ml-4">
                    <li>Color scales (1-10 steps)</li>
                    <li>RGB variants for transparency</li>
                    <li>Text emphasis variants</li>
                    <li>Background and border subtle variants</li>
                    <li>Gradient tokens</li>
                    <li>Hover state colors</li>
                  </ul>
                </Callout>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* API Reference Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">API Reference</h2>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">ThemeProvider</h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  React context provider for theme state:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`<ThemeProvider
  defaultTheme="my-theme"
  themes={themes}
  basePath="/themes"
  enablePersistence={true}
  onThemeChange={(theme) => console.log('Theme changed:', theme)}
>
  {children}
</ThemeProvider>`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">useTheme Hook</h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  React hook for accessing theme context:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`const {
  theme,              // Current theme name
  activeTheme,        // Active theme object (for JS themes)
  setTheme,           // Function to change theme
  availableThemes,    // List of available themes
  isLoading,          // Loading state
  error,              // Error state
  isThemeLoaded,      // Check if theme is loaded
  preloadTheme,       // Preload a theme
} = useTheme()`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">ThemeManager</h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  High-level API for theme management (vanilla JS):
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { ThemeManager } from '@shohojdhara/atomix/theme';

const themeManager = new ThemeManager({
  themes: {
    'light': { name: 'Light', type: 'css' },
    'dark': { name: 'Dark', type: 'css' },
  },
  defaultTheme: 'light',
  basePath: '/themes',
  enablePersistence: true,
});

// Set theme
await themeManager.setTheme('dark');

// Get current theme
const currentTheme = themeManager.getTheme();

// Get available themes
const themes = themeManager.getAvailableThemes();`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">createTheme</h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Create a JavaScript theme:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { createTheme } from '@shohojdhara/atomix/theme';

const theme = createTheme({
  name: 'My Theme',
  palette: {
    primary: {
      main: '#7AFFD7',
      light: '#9AFFE7',
      dark: '#5ADFC7',
    },
    secondary: {
      main: '#FF5733',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
  },
  components: {
    Button: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Theme Composition
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Combine and extend themes:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { extendTheme, mergeTheme, composeThemes } from '@shohojdhara/atomix/theme';

// Extend an existing theme
const extendedTheme = extendTheme(baseTheme, {
  palette: {
    primary: { main: '#FF0000' },
  },
});

// Merge multiple theme options
const merged = mergeTheme(
  { palette: { primary: { main: '#000' } } },
  { typography: { fontSize: 18 } }
);

// Compose multiple themes
const composed = composeThemes(theme1, theme2, theme3);`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Theme Utilities
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Helper functions for theme management:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { 
  quickTheme,
  createDarkVariant,
  validateTheme,
  generateCSSVariables,
} from '@shohojdhara/atomix/theme';

// Quick theme from colors
const theme = quickTheme('My Theme', '#7AFFD7', '#FF5733');

// Create dark variant
const darkTheme = createDarkVariant(lightTheme);

// Validate theme
const result = validateTheme(theme);
if (!result.valid) {
  console.error('Errors:', result.errors);
}

// Generate CSS variables
const css = generateCSSVariables(theme, {
  selector: ':root',
  prefix: 'atomix',
});`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  ThemeErrorBoundary
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  React error boundary for theme errors:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemeErrorBoundary } from '@shohojdhara/atomix/theme';

<ThemeErrorBoundary
  fallback={(error, errorInfo) => <CustomErrorUI />}
  onError={(error, errorInfo) => {
    // Send to error tracking
  }}
>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</ThemeErrorBoundary>`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">RTL Support</h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Enable RTL for right-to-left languages:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { RTLManager } from '@shohojdhara/atomix/theme';

const rtlManager = new RTLManager({
  enabled: true,
  autoDetect: true,
  locale: 'ar-SA',
});

// Set direction
rtlManager.setDirection('rtl');

// Get RTL-aware values
const margin = rtlManager.getValue('margin-left', 'margin-right');`}
                  showLineNumbers={true}
                />
                <p className="u-text-secondary-emphasis u-mt-3">
                  Or with ThemeProvider:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`<ThemeProvider
  rtl={{
    enabled: true,
    autoDetect: true,
  }}
>
  <App />
</ThemeProvider>`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Configuration Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">Configuration</h2>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  atomix.config.ts
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  The central configuration file for customizing design tokens
                  and registering themes:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { defineConfig } from '@shohojdhara/atomix/config';

export default defineConfig({
  // CSS variable prefix (default: 'atomix')
  prefix: 'atomix',
  
  theme: {
    // Extend default tokens
    extend: {
      // Colors - generates full color scales (1-10) automatically
      colors: {
        primary: { main: '#3b82f6' }, // Generates:
        // --atomix-primary-1 through --atomix-primary-10
        // --atomix-primary (main color)
        // --atomix-primary-rgb (for transparency)
        // --atomix-primary-text-emphasis
        // --atomix-primary-bg-subtle
        // --atomix-primary-border-subtle
        // --atomix-primary-hover
        secondary: { main: '#10b981' },
        error: { main: '#ef4444' },
      },
      
      // Typography customization
      typography: {
        fontFamilies: {
          sans: ['Inter', 'sans-serif'],
        },
        fontSizes: {
          '2xl': '1.5rem',
        },
        fontWeights: {
          bold: 700,
        },
      },
      
      // Spacing customization
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      },
      
      // Border radius customization
      borderRadius: {
        'xl': '0.75rem',
      },
    },
    
    // Register themes
    themes: {
      'my-theme': {
        type: 'css',
        name: 'My Theme',
      },
    },
  },
});`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Configuration Options
                </h3>
                <ul className="u-fs-sm u-ml-4">
                  <li>
                    <strong>
                      <code>prefix</code>
                    </strong>
                    : CSS variable prefix (default: <code>'atomix'</code>)
                  </li>
                  <li>
                    <strong>
                      <code>theme.extend</code>
                    </strong>
                    : Extend default design tokens
                  </li>
                  <li>
                    <strong>
                      <code>theme.tokens</code>
                    </strong>
                    : Override entire token system (advanced)
                  </li>
                  <li>
                    <strong>
                      <code>theme.themes</code>
                    </strong>
                    : Register CSS or JS themes
                  </li>
                  <li>
                    <strong>
                      <code>build</code>
                    </strong>
                    : Build configuration (internal)
                  </li>
                  <li>
                    <strong>
                      <code>runtime</code>
                    </strong>
                    : Runtime configuration (internal)
                  </li>
                </ul>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Auto-Generated Files
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  From <code>atomix.config.ts</code>, these files are
                  automatically generated:
                </p>
                <ol className="u-fs-sm u-ml-4">
                  <li>
                    <strong>
                      <code>src/themes/themes.config.js</code>
                    </strong>{" "}
                    - Build-time theme configuration
                    <ul className="u-ml-4 u-mt-1">
                      <li>
                        Theme metadata (name, description, version, status,
                        etc.)
                      </li>
                      <li>
                        Build settings (output directory, formats, SASS options)
                      </li>
                      <li>
                        Runtime configuration (basePath, storage, persistence)
                      </li>
                      <li>Integration settings (CSS variables, class names)</li>
                      <li>Theme dependencies</li>
                    </ul>
                  </li>
                  <li className="u-mt-2">
                    <strong>
                      <code>src/styles/03-generic/_generated-root.css</code>
                    </strong>{" "}
                    - CSS custom properties from config
                    <ul className="u-ml-4 u-mt-1">
                      <li>
                        Generated from <code>theme.extend</code> colors,
                        typography, spacing, etc.
                      </li>
                      <li>
                        Includes full color scales (1-10 steps) from a single
                        color
                      </li>
                      <li>
                        Includes semantic tokens (text-emphasis, bg-subtle,
                        border-subtle, hover)
                      </li>
                      <li>Includes RGB variants for transparency support</li>
                      <li>Typography, spacing, and border-radius tokens</li>
                    </ul>
                  </li>
                </ol>
                <Callout variant="info" className="u-mt-3">
                  <p className="u-fs-sm">
                    <strong>Note:</strong> <code>_settings.config.scss</code> is
                    NOT auto-generated - it's standalone for SCSS builds.
                  </p>
                </Callout>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Token Generation Details
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  When you customize colors in <code>theme.extend.colors</code>,
                  the sync script automatically generates:
                </p>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>
                    For each color (e.g.,{" "}
                    <code>primary: &#123; main: '#3b82f6' &#125;</code>):
                  </strong>
                </p>
                <ul className="u-fs-sm u-ml-4 u-mb-3">
                  <li>
                    Full color scale: <code>--atomix-primary-1</code> through{" "}
                    <code>--atomix-primary-10</code>
                  </li>
                  <li>
                    Main color: <code>--atomix-primary</code> (maps to
                    primary-6)
                  </li>
                  <li>
                    RGB variant: <code>--atomix-primary-rgb</code> (for{" "}
                    <code>rgba()</code> usage)
                  </li>
                  <li>
                    Semantic tokens:
                    <ul className="u-ml-4">
                      <li>
                        <code>--atomix-primary-text-emphasis</code> (for text)
                      </li>
                      <li>
                        <code>--atomix-primary-bg-subtle</code> (for
                        backgrounds)
                      </li>
                      <li>
                        <code>--atomix-primary-border-subtle</code> (for
                        borders)
                      </li>
                      <li>
                        <code>--atomix-primary-hover</code> (for hover states)
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="u-text-secondary-emphasis u-mb-2">
                  <strong>Example Output:</strong>
                </p>
                <EnhancedCodeBlock
                  language="css"
                  code={`/* _generated-root.css */
:root {
  --atomix-primary-1: #eff6ff;
  --atomix-primary-2: #dbeafe;
  --atomix-primary-3: #bfdbfe;
  --atomix-primary-4: #93c5fd;
  --atomix-primary-5: #60a5fa;
  --atomix-primary-6: #3b82f6; /* main */
  --atomix-primary-7: #2563eb;
  --atomix-primary-8: #1d4ed8;
  --atomix-primary-9: #1e40af;
  --atomix-primary-10: #1e3a8a;
  --atomix-primary: #3b82f6;
  --atomix-primary-rgb: 59, 130, 246;
  --atomix-primary-text-emphasis: #1e40af;
  --atomix-primary-bg-subtle: rgba(59, 130, 246, 0.1);
  --atomix-primary-border-subtle: rgba(59, 130, 246, 0.2);
  --atomix-primary-hover: #2563eb;
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Sync Scripts</h3>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# Sync theme configuration (generates themes.config.js and _generated-root.css)
npm run sync:config

# Generate tokens (alternative token generation)
npm run sync:tokens

# Validate configuration sync
npm run validate:config

# Both sync and validate (runs automatically before build)
npm run prebuild`}
                  showLineNumbers={true}
                />
                <p className="u-text-secondary-emphasis u-mt-3">
                  <strong>
                    What <code>sync:config</code> does:
                  </strong>
                </p>
                <ol className="u-fs-sm u-ml-4">
                  <li>
                    Reads <code>atomix.config.ts</code>
                  </li>
                  <li>
                    Generates <code>themes.config.js</code> with theme metadata
                    and configuration
                  </li>
                  <li>
                    Generates <code>_generated-root.css</code> with CSS custom
                    properties from <code>theme.extend</code>
                  </li>
                  <li>
                    Updates package.json exports (if themes are registered)
                  </li>
                </ol>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* CSS Variables & Tokens Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">
                CSS Variables & Tokens
              </h2>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Using CSS Variables
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  The theme system generates CSS variables you can use in your
                  styles:
                </p>
                <EnhancedCodeBlock
                  language="css"
                  code={`.my-component {
  background-color: var(--atomix-primary);
  color: var(--atomix-primary-contrast-text);
  padding: var(--atomix-spacing-4);
  border-radius: var(--atomix-border-radius);
  box-shadow: var(--atomix-box-shadow-md);
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Available CSS Variables
                </h3>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">Color Tokens</h4>
                  <ul className="u-fs-sm u-ml-4">
                    <li>
                      <strong>Base Colors:</strong>{" "}
                      <code>--atomix-primary</code>,{" "}
                      <code>--atomix-secondary</code>,{" "}
                      <code>--atomix-error</code>, etc.
                    </li>
                    <li>
                      <strong>RGB Variants:</strong>{" "}
                      <code>--atomix-primary-rgb</code> (for transparency)
                    </li>
                    <li>
                      <strong>Color Scales:</strong>{" "}
                      <code>--atomix-primary-1</code> through{" "}
                      <code>--atomix-primary-10</code>
                    </li>
                    <li>
                      <strong>Text Emphasis:</strong>{" "}
                      <code>--atomix-primary-text-emphasis</code>
                    </li>
                    <li>
                      <strong>Background Subtle:</strong>{" "}
                      <code>--atomix-primary-bg-subtle</code>
                    </li>
                    <li>
                      <strong>Border Subtle:</strong>{" "}
                      <code>--atomix-primary-border-subtle</code>
                    </li>
                    <li>
                      <strong>Hover States:</strong>{" "}
                      <code>--atomix-primary-hover</code>
                    </li>
                    <li>
                      <strong>Gradients:</strong>{" "}
                      <code>--atomix-primary-gradient</code>
                    </li>
                  </ul>
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    Typography Tokens
                  </h4>
                  <ul className="u-fs-sm u-ml-4">
                    <li>
                      <strong>Font Families:</strong>{" "}
                      <code>--atomix-font-sans-serif</code>,{" "}
                      <code>--atomix-font-monospace</code>
                    </li>
                    <li>
                      <strong>Font Sizes:</strong>{" "}
                      <code>--atomix-font-size-xs</code> through{" "}
                      <code>--atomix-font-size-2xl</code>
                    </li>
                    <li>
                      <strong>Font Weights:</strong>{" "}
                      <code>--atomix-font-weight-light</code> through{" "}
                      <code>--atomix-font-weight-bold</code>
                    </li>
                    <li>
                      <strong>Line Heights:</strong>{" "}
                      <code>--atomix-line-height-base</code>,{" "}
                      <code>--atomix-line-height-sm</code>,{" "}
                      <code>--atomix-line-height-lg</code>
                    </li>
                  </ul>
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    Spacing Tokens
                  </h4>
                  <ul className="u-fs-sm u-ml-4">
                    <li>
                      <strong>Spacing Scale:</strong>{" "}
                      <code>--atomix-spacing-0</code> through{" "}
                      <code>--atomix-spacing-200</code>
                    </li>
                    <li>
                      <strong>Common Values:</strong>{" "}
                      <code>--atomix-spacing-1</code> (4px),{" "}
                      <code>--atomix-spacing-2</code> (8px),{" "}
                      <code>--atomix-spacing-4</code> (16px)
                    </li>
                  </ul>
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    Border Radius Tokens
                  </h4>
                  <ul className="u-fs-sm u-ml-4">
                    <li>
                      <code>--atomix-border-radius</code>,{" "}
                      <code>--atomix-border-radius-sm</code>,{" "}
                      <code>--atomix-border-radius-md</code>,{" "}
                      <code>--atomix-border-radius-lg</code>,{" "}
                      <code>--atomix-border-radius-xl</code>
                    </li>
                  </ul>
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    Shadow Tokens
                  </h4>
                  <ul className="u-fs-sm u-ml-4">
                    <li>
                      <code>--atomix-box-shadow</code>,{" "}
                      <code>--atomix-box-shadow-xs</code>,{" "}
                      <code>--atomix-box-shadow-sm</code>,{" "}
                      <code>--atomix-box-shadow-lg</code>,{" "}
                      <code>--atomix-box-shadow-xl</code>
                    </li>
                  </ul>
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    Border Tokens
                  </h4>
                  <ul className="u-fs-sm u-ml-4">
                    <li>
                      <strong>Border Radius:</strong>{" "}
                      <code>--atomix-border-radius</code>,{" "}
                      <code>--atomix-border-radius-sm</code>,{" "}
                      <code>--atomix-border-radius-lg</code>,{" "}
                      <code>--atomix-border-radius-xl</code>,{" "}
                      <code>--atomix-border-radius-xxl</code>,{" "}
                      <code>--atomix-border-radius-pill</code>
                    </li>
                    <li>
                      <strong>Border Colors:</strong>{" "}
                      <code>--atomix-border-color</code>,{" "}
                      <code>--atomix-border-color-translucent</code>
                    </li>
                  </ul>
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">Other Tokens</h4>
                  <ul className="u-fs-sm u-ml-4">
                    <li>
                      <strong>Transitions:</strong>{" "}
                      <code>--atomix-transition-fast</code>,{" "}
                      <code>--atomix-transition-base</code>,{" "}
                      <code>--atomix-transition-slow</code>
                    </li>
                    <li>
                      <strong>Z-Index:</strong> <code>--atomix-z-dropdown</code>
                      , <code>--atomix-z-modal</code>,{" "}
                      <code>--atomix-z-tooltip</code>, etc.
                    </li>
                    <li>
                      <strong>Breakpoints:</strong>{" "}
                      <code>--atomix-breakpoint-xs</code>,{" "}
                      <code>--atomix-breakpoint-sm</code>, etc.
                    </li>
                    <li>
                      <strong>Focus Ring:</strong>{" "}
                      <code>--atomix-focus-ring-width</code>,{" "}
                      <code>--atomix-focus-ring-offset</code>,{" "}
                      <code>--atomix-focus-ring-opacity</code>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Importing Theme CSS Files
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Individual theme CSS files can be imported separately:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`// Import a specific theme CSS file
import '@shohojdhara/atomix/themes/light';
// or minified version
import '@shohojdhara/atomix/themes/light.min';`}
                  showLineNumbers={true}
                />
                <p className="u-text-secondary-emphasis u-mt-3 u-mb-2">
                  <strong>Available Theme Imports:</strong>
                </p>
                <ul className="u-fs-sm u-ml-4">
                  <li>
                    <code>
                      @shohojdhara/atomix/themes/&#123;theme-name&#125;
                    </code>{" "}
                    - Expanded CSS
                  </li>
                  <li>
                    <code>
                      @shohojdhara/atomix/themes/&#123;theme-name&#125;.min
                    </code>{" "}
                    - Minified CSS
                  </li>
                </ul>
                <Callout variant="info" className="u-mt-3">
                  <p className="u-fs-sm">
                    <strong>Note:</strong> Theme CSS files are only available if
                    themes are registered in <code>atomix.config.ts</code> and
                    built with <code>npm run build:themes</code>.
                  </p>
                </Callout>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Using Generated Tokens
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  If you've customized tokens via <code>atomix.config.ts</code>,
                  import the generated CSS:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`// Import generated tokens
import '@shohojdhara/atomix/styles/03-generic/_generated-root.css';`}
                  showLineNumbers={true}
                />
                <p className="u-text-secondary-emphasis u-mt-3">
                  Or if using SCSS:
                </p>
                <EnhancedCodeBlock
                  language="scss"
                  code={`@import '@shohojdhara/atomix/scss/generic';`}
                  showLineNumbers={true}
                />
                <p className="u-text-secondary-emphasis u-mt-3">
                  The generated tokens will be available as CSS custom
                  properties in your application.
                </p>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Advanced Topics Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">Advanced Topics</h2>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Theme Composition
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Combine and extend themes to create variations:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { mergeTheme, extendTheme } from '@shohojdhara/atomix/theme';

// Merge two themes
const merged = mergeTheme(baseTheme, overrideTheme);

// Extend theme
const extended = extendTheme(baseTheme, {
  palette: {
    primary: { main: '#FF0000' },
  },
});`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Component Overrides
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Customize component styles per theme:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`const theme = createTheme({
  components: {
    Button: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 24px',
        },
      },
      defaultProps: {
        variant: 'primary',
        size: 'lg',
      },
    },
  },
});`}
                  showLineNumbers={true}
                />
                <Callout variant="info" className="u-mt-3">
                  <p className="u-fs-sm">
                    <strong>Note:</strong> ComponentOverrideManager as a
                    separate class is planned for a future release. For now, use{" "}
                    <code>createTheme()</code> with <code>components</code>{" "}
                    property.
                  </p>
                </Callout>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">RTL Support</h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Enable RTL for right-to-left languages:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { RTLManager } from '@shohojdhara/atomix/theme';

const rtlManager = new RTLManager({
  enabled: true,
  autoDetect: true,
  locale: 'ar-SA',
});

// Set direction
rtlManager.setDirection('rtl');`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  CSS Variable Generation
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Generate CSS variables programmatically:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { generateCSSVariables } from '@shohojdhara/atomix/theme';

const css = generateCSSVariables(myTheme, {
  selector: ':root',
  prefix: 'atomix',
});

// Inject into DOM
document.head.appendChild(
  Object.assign(document.createElement('style'), {
    textContent: css,
  })
);`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Theme Validation
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Validate themes during development:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { validateTheme } from '@shohojdhara/atomix/theme';

const result = validateTheme(myTheme);

if (!result.valid) {
  console.error('Theme validation errors:', result.errors);
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Development Tools
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Preview and inspect themes:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemePreview, ThemeInspector } from '@shohojdhara/atomix/theme';

// Preview theme
<ThemePreview
  theme={myTheme}
  showPalette={true}
  showTypography={true}
/>

// Inspect theme
<ThemeInspector
  theme={myTheme}
  showValidation={true}
  showCSSVariables={true}
/>`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Troubleshooting Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">Troubleshooting</h2>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Theme Not Loading
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Problem:</strong> Theme fails to load
                </p>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Solutions:</strong>
                </p>
                <ol className="u-fs-sm u-ml-4">
                  <li>
                    Check theme exists in registry:
                    <EnhancedCodeBlock
                      language="typescript"
                      code={`const themes = themeManager.getAvailableThemes();
console.log(themes);`}
                      showLineNumbers={true}
                    />
                  </li>
                  <li className="u-mt-2">
                    Check for errors:
                    <EnhancedCodeBlock
                      language="typescript"
                      code={`themeManager.on('themeError', (error, themeName) => {
  console.error('Theme error:', error, themeName);
});`}
                      showLineNumbers={true}
                    />
                  </li>
                  <li className="u-mt-2">Verify CSS path exists</li>
                </ol>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  CSS Variables Not Working
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Problem:</strong> CSS variables not found
                </p>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Solutions:</strong>
                </p>
                <ul className="u-fs-sm u-ml-4">
                  <li>Ensure theme is loaded (SCSS or JS)</li>
                  <li>Check prefix matches config</li>
                  <li>Verify token name follows conventions</li>
                  <li>Check browser DevTools for actual CSS variable names</li>
                  <li>
                    If using config-generated tokens, ensure{" "}
                    <code>_generated-root.css</code> is imported
                  </li>
                </ul>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Token Generation Issues
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Problem:</strong> Generated tokens don't match config
                </p>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Solutions:</strong>
                </p>
                <ul className="u-fs-sm u-ml-4">
                  <li>
                    Run <code>npm run sync:config</code> to regenerate
                  </li>
                  <li>
                    Check <code>atomix.config.ts</code> syntax is correct
                  </li>
                  <li>Verify color values are valid hex colors</li>
                  <li>
                    Check <code>src/styles/03-generic/_generated-root.css</code>{" "}
                    exists and has content
                  </li>
                  <li>
                    Ensure <code>_generated-root.css</code> is imported in your
                    styles
                  </li>
                </ul>
                <p className="u-text-secondary-emphasis u-mt-3 u-mb-2">
                  <strong>Problem:</strong> Only 1 CSS variable generated
                  instead of full scale
                </p>
                <p className="u-text-secondary-emphasis u-mb-2">
                  <strong>Solutions:</strong>
                </p>
                <ul className="u-fs-sm u-ml-4">
                  <li>
                    Ensure you're using <code>theme.extend.colors</code> (not{" "}
                    <code>theme.tokens.colors</code>)
                  </li>
                  <li>
                    Check color format:{" "}
                    <code>&#123; main: '#3b82f6' &#125;</code> (not just{" "}
                    <code>'#3b82f6'</code>)
                  </li>
                  <li>
                    Run <code>npm run sync:config</code> again
                  </li>
                  <li>Check console output for errors during sync</li>
                </ul>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Theme CSS Import Issues
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Problem:</strong> Cannot import theme CSS files
                </p>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Solutions:</strong>
                </p>
                <ul className="u-fs-sm u-ml-4">
                  <li>
                    Ensure themes are built: <code>npm run build:themes</code>
                  </li>
                  <li>
                    Check <code>dist/themes/</code> directory exists
                  </li>
                  <li>Verify package.json exports include theme paths</li>
                  <li>
                    Use correct import path:{" "}
                    <code>@shohojdhara/atomix/themes/light</code>
                  </li>
                  <li>
                    Check theme is registered in <code>atomix.config.ts</code>
                  </li>
                </ul>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  TypeScript Errors
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Problem:</strong> TypeScript errors with theme types
                </p>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Solutions:</strong>
                </p>
                <ol className="u-fs-sm u-ml-4">
                  <li>
                    Import types correctly:
                    <EnhancedCodeBlock
                      language="typescript"
                      code={`import type { Theme, ThemeMetadata } from '@shohojdhara/atomix/theme';`}
                      showLineNumbers={true}
                    />
                  </li>
                  <li className="u-mt-2">
                    Use type guards:
                    <EnhancedCodeBlock
                      language="typescript"
                      code={`if (isJSTheme(theme)) {
  // theme is now typed as Theme
}`}
                      showLineNumbers={true}
                    />
                  </li>
                </ol>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Configuration Not Syncing
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Problem:</strong> Generated files don't match{" "}
                  <code>atomix.config.ts</code>
                </p>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Solution:</strong>
                </p>
                <EnhancedCodeBlock
                  language="bash"
                  code={`npm run sync:config
npm run sync:tokens
npm run validate:config`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Prefix Not Updating
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Problem:</strong> Prefix changes in config but not in
                  generated files
                </p>
                <p className="u-text-secondary-emphasis u-mb-3">
                  <strong>Solution:</strong>
                </p>
                <ol className="u-fs-sm u-ml-4">
                  <li>
                    Check <code>atomix.config.ts</code> has <code>prefix</code>{" "}
                    field
                  </li>
                  <li>
                    Run <code>npm run sync:config && npm run sync:tokens</code>
                  </li>
                  <li>
                    Verify with <code>npm run validate:config</code>
                  </li>
                </ol>
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Browser Environment Limitations
                </h3>
                <Callout variant="warning" className="u-mb-3">
                  <p className="u-fs-sm u-mb-2">
                    <strong>Important:</strong> The{" "}
                    <code>atomix.config.ts</code> file cannot be dynamically
                    loaded in browser environments.
                  </p>
                  <p className="u-fs-sm">
                    In browser/client-side applications, themes must be
                    explicitly provided to the ThemeManager or ThemeProvider.
                  </p>
                </Callout>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`// In browser environments, provide themes directly
import { ThemeProvider } from '@shohojdhara/atomix/theme';

const themes = {
  'my-theme': {
    type: 'css',
    name: 'My Theme',
    class: 'my-theme',
  },
};

function App() {
  return (
    <ThemeProvider 
      themes={themes}
      defaultTheme="my-theme"
      basePath="/themes"
    >
      <YourApp />
    </ThemeProvider>
  );
}`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Examples Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">Examples</h2>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Complete React Example
                </h3>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import React from 'react';
import {
  ThemeProvider,
  ThemeErrorBoundary,
  useTheme,
  createTheme,
} from '@shohojdhara/atomix/theme';

const lightTheme = createTheme({
  name: 'Light',
  palette: {
    primary: { main: '#3b82f6' },
    background: { default: '#ffffff' },
  },
});

const darkTheme = createTheme({
  name: 'Dark',
  palette: {
    primary: { main: '#60a5fa' },
    background: { default: '#111827' },
  },
});

function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value={lightTheme}>Light</option>
      <option value={darkTheme}>Dark</option>
    </select>
  );
}

function App() {
  return (
    <ThemeErrorBoundary
      onError={(error, errorInfo) => {
        console.error('Theme error:', error);
      }}
    >
      <ThemeProvider
        defaultTheme={lightTheme}
        enablePersistence={true}
      >
        <ThemeSelector />
        <YourApp />
      </ThemeProvider>
    </ThemeErrorBoundary>
  );
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">
                  Next.js Integration
                </h3>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`// app/layout.tsx
import { ThemeProvider } from '@shohojdhara/atomix/theme';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Best Practices Section */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">Best Practices</h2>

              <Row className="u-mt-4">
                <GridCol md={6}>
                  <div className="u-mb-4">
                    <h4 className="u-fs-md u-fw-semibold u-mb-2">
                      1. Always Use CSS Variables
                    </h4>
                    <p className="u-fs-sm u-text-secondary-emphasis u-mb-2">
                      ✅ <strong>Good:</strong>
                    </p>
                    <EnhancedCodeBlock
                      language="scss"
                      code={`.component {
  color: var(--atomix-primary);
  padding: var(--atomix-spacing-4);
}`}
                      showLineNumbers={true}
                    />
                    <p className="u-fs-sm u-text-secondary-emphasis u-mt-2">
                      ❌ <strong>Bad:</strong> Hardcoded values like{" "}
                      <code>color: #3b82f6;</code> or{" "}
                      <code>padding: 16px;</code>
                    </p>
                  </div>

                  <div className="u-mb-4">
                    <h4 className="u-fs-md u-fw-semibold u-mb-2">
                      2. Use ThemeProvider for React Apps
                    </h4>
                    <p className="u-fs-sm u-text-secondary-emphasis">
                      Always use ThemeProvider for React applications instead of
                      direct ThemeManager usage.
                    </p>
                  </div>

                  <div className="u-mb-4">
                    <h4 className="u-fs-md u-fw-semibold u-mb-2">
                      3. Error Boundaries
                    </h4>
                    <p className="u-fs-sm u-text-secondary-emphasis">
                      Always wrap ThemeProvider with error boundary:
                    </p>
                    <EnhancedCodeBlock
                      language="tsx"
                      code={`<ThemeErrorBoundary>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</ThemeErrorBoundary>`}
                      showLineNumbers={true}
                    />
                  </div>
                </GridCol>

                <GridCol md={6}>
                  <div className="u-mb-4">
                    <h4 className="u-fs-md u-fw-semibold u-mb-2">
                      4. Type Safety
                    </h4>
                    <p className="u-fs-sm u-text-secondary-emphasis">
                      Use TypeScript types:
                    </p>
                    <EnhancedCodeBlock
                      language="typescript"
                      code={`import type { Theme, ThemeMetadata } from '@shohojdhara/atomix/theme';`}
                      showLineNumbers={true}
                    />
                  </div>

                  <div className="u-mb-4">
                    <h4 className="u-fs-md u-fw-semibold u-mb-2">
                      5. Performance
                    </h4>
                    <ul className="u-fs-sm u-ml-4">
                      <li>Enable caching (default: enabled)</li>
                      <li>Use lazy loading for themes</li>
                      <li>Preload critical themes</li>
                      <li>Use minified CSS in production</li>
                    </ul>
                  </div>

                  <div className="u-mb-4">
                    <h4 className="u-fs-md u-fw-semibold u-mb-2">
                      6. Accessibility
                    </h4>
                    <ul className="u-fs-sm u-ml-4">
                      <li>Validate themes for contrast ratios</li>
                      <li>Test with screen readers</li>
                      <li>Ensure keyboard navigation works</li>
                      <li>Check color blindness compatibility</li>
                    </ul>
                  </div>
                </GridCol>
              </Row>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-p-6 u-bg-primary-subtle u-border u-border-primary">
              <div className="u-flex u-align-items-start u-gap-3">
                <Icon
                  name="Lightbulb"
                  size={24}
                  className="u-text-primary-emphasis u-flex-shrink-0 u-mt-1"
                />
                <div>
                  <h3 className="u-fs-lg u-fw-semibold u-mb-2 u-text-primary-emphasis">
                    Interactive Theme Creation
                  </h3>
                  <p className="u-text-primary-emphasis u-mb-4">
                    Use the Theme Studio to create and preview themes
                    interactively. Visualize your theme in real-time and export
                    it for use in your application.
                  </p>
                  <Button
                    LinkComponent={Link}
                    href="/docs/guides/theme-studio"
                    variant="primary"
                    size="md"
                    className="u-flex u-align-items-center u-gap-2"
                  >
                    <Icon name="Palette" size={16} />
                    Open Theme Studio
                  </Button>
                </div>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

GeneralThemingGuidePage.displayName = "GeneralThemingGuidePage";

export default GeneralThemingGuidePage;

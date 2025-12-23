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
        title="Theming Guide"
        text="Learn how to customize Atomix to match your brand identity with the comprehensive theme system"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Atomix Theme System"
          text="Atomix provides a powerful theme system that supports both CSS-based and JavaScript-based themes. Create custom themes programmatically, switch themes at runtime, and maintain full type safety throughout your application."
        />

        <Row className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-4">
                <h3 className="u-m-0">Quick Start</h3>
                <Button
                  linkComponent={Link}
                  href="/docs/guides/theme-studio"
                  variant="primary"
                  size="sm"
                  className="u-d-flex u-align-items-center u-gap-2"
                >
                  <Icon name="Palette" size={16} />
                  Try Theme Studio
                </Button>
              </div>
              <p>
                The Atomix theme system is built on a foundation of design
                tokens and provides comprehensive theming capabilities. Get
                started by wrapping your app with ThemeProvider.
              </p>

              <div className="u-mt-4">
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemeProvider, useTheme } from '@shohojdhara/atomix/theme';

function App() {
  return (
    <ThemeProvider defaultTheme="light-theme">
      <YourApp />
    </ThemeProvider>
  );
}

function ThemeSelector() {
  const { theme, setTheme, availableThemes } = useTheme();
  
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      {availableThemes.map((t) => (
        <option key={t.id} value={t.id}>
          {t.name}
        </option>
      ))}
    </select>
  );
}`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>JavaScript Themes</h3>
              <p>
                Create themes programmatically using the{" "}
                <code>createTheme</code> function. All CSS variables are
                automatically generated for you.
              </p>

              <div className="u-mt-4">
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { createTheme } from '@shohojdhara/atomix/theme';

const customTheme = createTheme({
  name: 'My Custom Theme',
  palette: {
    primary: {
      main: '#7AFFD7',
      light: '#9AFFE7',
      dark: '#5ADFC7',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FF5733',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
      subtle: '#F5F5F5',
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280',
      disabled: '#9CA3AF',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
  },
  spacing: 8, // Base spacing unit
});

// Use the theme
const { setTheme } = useTheme();
setTheme(customTheme);`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mt-4">
                <h4 className="u-fs-md u-fw-semibold u-mb-2">
                  Auto-Generated CSS Variables
                </h4>
                <p className="u-fs-sm u-text-secondary-emphasis">
                  When you create a JavaScript theme, the system automatically
                  generates:
                </p>
                <ul className="u-fs-sm u-mt-2">
                  <li>Color scales (1-10 steps) for all colors</li>
                  <li>RGB variants for transparency support</li>
                  <li>
                    Text emphasis variants (primary, secondary, tertiary,
                    disabled)
                  </li>
                  <li>Background and border subtle variants</li>
                  <li>Gradient tokens for all colors</li>
                  <li>Hover state colors</li>
                </ul>
              </div>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>CSS Themes</h3>
              <p>
                Define themes in CSS files and load them dynamically. Perfect
                for pre-built theme packages.
              </p>

              <div className="u-mt-4">
                <EnhancedCodeBlock
                  language="typescript"
                  code={`// theme.config.ts
import type { ThemeConfig } from '@shohojdhara/atomix/theme';

const config: ThemeConfig = {
  themes: {
    'my-css-theme': {
      type: 'css',
      name: 'My CSS Theme',
      description: 'A theme loaded from CSS',
      cssPath: '/themes/my-theme.css',
      class: 'my-theme-class',
      status: 'stable',
    },
  },
  runtime: {
    basePath: '/themes',
    defaultTheme: 'my-css-theme',
    enablePersistence: true,
  },
};

export default config;`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mt-4">
                <h4 className="u-fs-md u-fw-semibold u-mb-2">
                  CSS Theme Structure
                </h4>
                <p className="u-fs-sm u-text-secondary-emphasis">
                  CSS themes use CSS custom properties and are applied via
                  classes:
                </p>
                <div className="u-mt-2">
                  <EnhancedCodeBlock
                    language="css"
                    code={`.my-theme-class {
  --atomix-primary: #7AFFD7;
  --atomix-secondary: #FF5733;
  --atomix-text-primary: #111827;
  --atomix-bg-default: #FAFAFA;
  /* ... more variables ... */
}`}
                    showLineNumbers={true}
                  />
                </div>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Theme Configuration</h3>
              <p>
                Configure your themes in a <code>theme.config.ts</code> file for
                comprehensive theme management.
              </p>

              <div className="u-mt-4">
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import type { ThemeConfig } from '@shohojdhara/atomix/theme';
import { createTheme } from '@shohojdhara/atomix/theme';

const config: ThemeConfig = {
  themes: {
    'light-theme': {
      type: 'css',
      name: 'Light Theme',
      description: 'Default light theme',
      status: 'stable',
    },
    'dark-theme': {
      type: 'css',
      name: 'Dark Theme',
      description: 'Default dark theme',
      status: 'stable',
    },
    'custom-js-theme': {
      type: 'js',
      name: 'Custom JS Theme',
      description: 'Programmatically created theme',
      status: 'experimental',
      createTheme: () => createTheme({
        name: 'Custom JS Theme',
        palette: {
          primary: { main: '#7AFFD7' },
        },
      }),
    },
  },
  runtime: {
    basePath: '/themes',
    defaultTheme: 'light-theme',
    storageKey: 'atomix-theme',
    enablePersistence: true,
  },
  build: {
    output: {
      directory: 'themes',
      formats: {
        expanded: '.css',
        compressed: '.min.css',
      },
    },
  },
};

export default config;`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Theme Composition</h3>
              <p>
                Extend and merge themes to create variations and build complex
                theme hierarchies.
              </p>

              <div className="u-mt-4">
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { extendTheme, mergeTheme } from '@shohojdhara/atomix/theme';

// Extend an existing theme
const extendedTheme = extendTheme(baseTheme, {
  palette: {
    primary: { main: '#FF0000' },
  },
});

// Merge multiple theme options
const mergedTheme = mergeTheme(
  { palette: { primary: { main: '#000' } } },
  { typography: { fontSize: 18 } }
);`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>CSS Variables</h3>
              <p>
                Use generated CSS variables in your styles for full theme
                compatibility.
              </p>

              <div className="u-mt-4">
                <EnhancedCodeBlock
                  language="css"
                  code={`.my-component {
  background-color: var(--atomix-primary);
  color: var(--atomix-primary-contrast-text);
  padding: var(--atomix-spacing-2);
  border-radius: var(--atomix-border-radius-md);
  box-shadow: var(--atomix-box-shadow-md);
}

.my-component:hover {
  background-color: var(--atomix-primary-hover);
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mt-4">
                <h4 className="u-fs-md u-fw-semibold u-mb-2">
                  Available Variables
                </h4>
                <ul className="u-fs-sm">
                  <li>
                    <code>--atomix-primary</code>,{" "}
                    <code>--atomix-secondary</code>, etc.
                  </li>
                  <li>
                    <code>--atomix-primary-rgb</code> (for transparency)
                  </li>
                  <li>
                    <code>--atomix-text-primary-emphasis</code>,{" "}
                    <code>--atomix-text-secondary-emphasis</code>
                  </li>
                  <li>
                    <code>--atomix-primary-gradient</code>,{" "}
                    <code>--atomix-secondary-gradient</code>
                  </li>
                  <li>
                    <code>--atomix-spacing-0</code> through{" "}
                    <code>--atomix-spacing-200</code>
                  </li>
                </ul>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Advanced Features</h3>

              <Row className="u-mt-4">
                <GridCol md={6}>
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    Error Handling
                  </h4>
                  <p className="u-fs-sm u-text-secondary-emphasis u-mb-3">
                    Wrap ThemeProvider with ThemeErrorBoundary for graceful
                    error handling:
                  </p>
                  <EnhancedCodeBlock
                    language="tsx"
                    code={`import { ThemeErrorBoundary, ThemeProvider } from '@shohojdhara/atomix/theme';

<ThemeErrorBoundary
  onError={(error, errorInfo) => {
    console.error('Theme error:', error);
  }}
>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</ThemeErrorBoundary>`}
                    showLineNumbers={true}
                  />
                </GridCol>

                <GridCol md={6}>
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    Theme Preloading
                  </h4>
                  <p className="u-fs-sm u-text-secondary-emphasis u-mb-3">
                    Preload themes for better performance:
                  </p>
                  <EnhancedCodeBlock
                    language="tsx"
                    code={`import { useEffect } from 'react';
import { useTheme } from '@shohojdhara/atomix/theme';

function App() {
  const { preloadTheme } = useTheme();
  
  useEffect(() => {
    // Preload dark theme in background
    preloadTheme('dark-theme');
  }, []);
  
  return <YourApp />;
}`}
                    showLineNumbers={true}
                  />
                </GridCol>
              </Row>

              <Row className="u-mt-4">
                <GridCol md={6}>
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    Theme Validation
                  </h4>
                  <p className="u-fs-sm u-text-secondary-emphasis u-mb-3">
                    Validate themes for accessibility and correctness:
                  </p>
                  <EnhancedCodeBlock
                    language="typescript"
                    code={`import { ThemeValidator } from '@shohojdhara/atomix/theme/core';

const validator = new ThemeValidator();
const result = validator.validate(myTheme);

if (!result.valid) {
  console.error('Theme validation errors:', result.errors);
}`}
                    showLineNumbers={true}
                  />
                </GridCol>

                <GridCol md={6}>
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">RTL Support</h4>
                  <p className="u-fs-sm u-text-secondary-emphasis u-mb-3">
                    Enable right-to-left language support:
                  </p>
                  <EnhancedCodeBlock
                    language="typescript"
                    code={`const themeManager = new ThemeManager({
  themes: {...},
  rtl: {
    enabled: true,
    direction: 'rtl',
    autoDetect: true,
    locale: 'ar',
  },
});`}
                    showLineNumbers={true}
                  />
                </GridCol>
              </Row>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Best Practices</h3>

              <Row className="u-mt-4">
                <GridCol md={6}>
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    1. Use ThemeProvider
                  </h4>
                  <p className="u-fs-sm u-text-secondary-emphasis">
                    Always use ThemeProvider for React applications instead of
                    direct ThemeManager usage.
                  </p>

                  <h4 className="u-fs-md u-fw-semibold u-mb-2 u-mt-4">
                    2. Error Boundaries
                  </h4>
                  <p className="u-fs-sm u-text-secondary-emphasis">
                    Wrap ThemeProvider with ThemeErrorBoundary for graceful
                    error handling.
                  </p>

                  <h4 className="u-fs-md u-fw-semibold u-mb-2 u-mt-4">
                    3. Type Safety
                  </h4>
                  <p className="u-fs-sm u-text-secondary-emphasis">
                    Use TypeScript types from the theme module for full type
                    safety.
                  </p>
                </GridCol>

                <GridCol md={6}>
                  <h4 className="u-fs-md u-fw-semibold u-mb-2">
                    4. Performance
                  </h4>
                  <p className="u-fs-sm u-text-secondary-emphasis">
                    Enable caching, use lazy loading for themes, and preload
                    critical themes.
                  </p>

                  <h4 className="u-fs-md u-fw-semibold u-mb-2 u-mt-4">
                    5. Accessibility
                  </h4>
                  <p className="u-fs-sm u-text-secondary-emphasis">
                    Validate themes for contrast ratios and ensure keyboard
                    navigation works.
                  </p>

                  <h4 className="u-fs-md u-fw-semibold u-mb-2 u-mt-4">
                    6. CSS Variables
                  </h4>
                  <p className="u-fs-sm u-text-secondary-emphasis">
                    Always use CSS variables in your styles for theme
                    compatibility.
                  </p>
                </GridCol>
              </Row>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-p-6 u-bg-primary-subtle u-border u-border-primary">
              <div className="u-d-flex u-align-items-start u-gap-3">
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
                    linkComponent={Link}
                    href="/docs/guides/theme-studio"
                    variant="primary"
                    size="md"
                    className="u-d-flex u-align-items-center u-gap-2"
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

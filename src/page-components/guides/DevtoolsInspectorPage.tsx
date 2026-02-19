"use client";

import { FC } from "react";
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Callout,
} from "@shohojdhara/atomix";
import Link from "next/link";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsInspectorPage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Theme Inspector"
        subtitle="Deep inspection and validation for theme development"
        text="Detailed inspection and debugging information for themes. Validate structure, check accessibility, and review generated CSS variables."
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Theme Inspector Component"
          text="ThemeInspector provides comprehensive analysis of your theme configuration, including validation, accessibility checks, and CSS variable generation preview."
        />

        {/* Overview */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Overview</h2>
              <p className="u-text-secondary-emphasis u-mb-4">
                The ThemeInspector component is a powerful debugging tool that
                provides detailed insights into your theme's structure,
                validates configuration, checks for accessibility issues, and
                shows how your theme will be transformed into CSS variables.
              </p>

              <Callout variant="success" className="u-mb-4">
                <p className="u-text-sm u-m-0">
                  <strong>✨ Try it now:</strong>{" "}
                  <Link
                    href="/docs/guides/devtools/inspector-example"
                    className="u-text-primary u-font-medium"
                  >
                    Interactive Inspector Example
                  </Link>{" "}
                  — Analyze and validate a sample theme directly in your
                  browser.
                </p>
              </Callout>

              <h3 className="u-text-lg u-font-semibold u-mb-3">Key Features</h3>
              <ul className="u-ml-4 u-mb-4">
                <li className="u-mb-2">
                  <strong>Theme Metadata</strong> - Display theme name, version,
                  and statistics
                </li>
                <li className="u-mb-2">
                  <strong>Validation</strong> - Comprehensive error and warning
                  reporting
                </li>
                <li className="u-mb-2">
                  <strong>Accessibility Checks</strong> - Contrast ratio
                  analysis and WCAG compliance
                </li>
                <li className="u-mb-2">
                  <strong>CSS Variables Preview</strong> - See generated CSS
                  custom properties
                </li>
                <li className="u-mb-2">
                  <strong>Structure Visualization</strong> - Interactive theme
                  structure tree
                </li>
              </ul>
            </Card>
          </GridCol>
        </Row>

        {/* Basic Usage */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Basic Usage</h2>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Simple Inspector
                </h3>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemeInspector } from '@shohojdhara/atomix/theme/devtools';
import { createTheme } from '@shohojdhara/atomix/theme';

const theme = createTheme({
  name: 'My Theme',
  palette: {
    primary: { main: '#7AFFD7' },
    secondary: { main: '#FF5733' },
  },
});

function App() {
  return (
    <ThemeInspector
      theme={theme}
      showValidation={true}
      showCSSVariables={true}
      showStructure={true}
    />
  );
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  With Custom Styling
                </h3>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`<ThemeInspector
  theme={theme}
  showValidation={true}
  className="my-inspector"
  style={{ maxWidth: '800px', margin: '0 auto' }}
/>`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Props API */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Props API</h2>

              <div className="u-overflow-x-auto">
                <table className="u-w-100">
                  <thead>
                    <tr>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Prop
                      </th>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Type
                      </th>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Default
                      </th>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="u-p-3">
                        <code>theme</code>
                      </td>
                      <td className="u-p-3">
                        <code>Theme</code>
                      </td>
                      <td className="u-p-3">Required</td>
                      <td className="u-p-3">Theme object to inspect</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>showValidation</code>
                      </td>
                      <td className="u-p-3">
                        <code>boolean</code>
                      </td>
                      <td className="u-p-3">
                        <code>false</code>
                      </td>
                      <td className="u-p-3">
                        Show validation results with errors and warnings
                      </td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>showCSSVariables</code>
                      </td>
                      <td className="u-p-3">
                        <code>boolean</code>
                      </td>
                      <td className="u-p-3">
                        <code>false</code>
                      </td>
                      <td className="u-p-3">
                        Show generated CSS custom properties
                      </td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>showStructure</code>
                      </td>
                      <td className="u-p-3">
                        <code>boolean</code>
                      </td>
                      <td className="u-p-3">
                        <code>false</code>
                      </td>
                      <td className="u-p-3">
                        Show theme structure tree visualization
                      </td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>className</code>
                      </td>
                      <td className="u-p-3">
                        <code>string</code>
                      </td>
                      <td className="u-p-3">-</td>
                      <td className="u-p-3">Custom CSS class name</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>style</code>
                      </td>
                      <td className="u-p-3">
                        <code>CSSProperties</code>
                      </td>
                      <td className="u-p-3">-</td>
                      <td className="u-p-3">Inline styles object</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Advanced Examples */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">
                Advanced Examples
              </h2>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Development Dashboard
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Integrate inspector into a development dashboard:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemeInspector } from '@shohojdhara/atomix/theme/devtools';
import { useState } from 'react';

function ThemeDevelopmentDashboard() {
  const [theme, setTheme] = useState(myTheme);
  const [activeTab, setActiveTab] = useState('validation');

  return (
    <div className="dashboard">
      <div className="tabs">
        <button onClick={() => setActiveTab('validation')}>
          Validation
        </button>
        <button onClick={() => setActiveTab('css')}>
          CSS Variables
        </button>
        <button onClick={() => setActiveTab('structure')}>
          Structure
        </button>
      </div>

      <ThemeInspector
        theme={theme}
        showValidation={activeTab === 'validation'}
        showCSSVariables={activeTab === 'css'}
        showStructure={activeTab === 'structure'}
      />
    </div>
  );
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Testing Integration
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Use inspector programmatically in tests:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemeValidator } from '@shohojdhara/atomix/theme';

describe('Theme Validation', () => {
  it('should validate theme structure', () => {
    const theme = createTheme({
      palette: { primary: { main: '#7AFFD7' } },
    });

    const validator = new ThemeValidator();
    const result = validator.validate(theme);

    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('should detect accessibility issues', () => {
    const theme = createTheme({
      palette: {
        primary: { main: '#FFFF00' }, // Poor contrast
        background: { default: '#FFFFFF' },
      },
    });

    const validator = new ThemeValidator();
    const result = validator.validate(theme);

    expect(result.warnings).toContain(
      expect.objectContaining({
        type: 'accessibility',
        message: expect.stringContaining('contrast'),
      })
    );
  });
});`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Storybook Addon
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Create a Storybook addon for theme inspection:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`// .storybook/addons/ThemeInspectorAddon.tsx
import { ThemeInspector } from '@shohojdhara/atomix/theme/devtools';
import { useGlobals } from '@storybook/manager-api';

export function ThemeInspectorAddon() {
  const [{ theme }] = useGlobals();

  return (
    <div className="storybook-addon">
      <ThemeInspector
        theme={theme}
        showValidation={true}
        showCSSVariables={true}
      />
    </div>
  );
}`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Validation Details */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">
                Validation Features
              </h2>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  What Gets Validated
                </h3>
                <ul className="u-ml-4 u-mb-4">
                  <li className="u-mb-2">
                    <strong>Required Properties</strong> - Ensures all required
                    theme properties are present
                  </li>
                  <li className="u-mb-2">
                    <strong>Type Checking</strong> - Validates property types
                    and formats
                  </li>
                  <li className="u-mb-2">
                    <strong>Color Formats</strong> - Checks for valid hex, RGB,
                    or HSL colors
                  </li>
                  <li className="u-mb-2">
                    <strong>Contrast Ratios</strong> - Analyzes text/background
                    contrast for WCAG compliance
                  </li>
                  <li className="u-mb-2">
                    <strong>Font Families</strong> - Validates font family
                    declarations
                  </li>
                  <li className="u-mb-2">
                    <strong>Spacing Values</strong> - Ensures valid spacing
                    scale values
                  </li>
                </ul>

                <Callout variant="info" className="u-mb-4">
                  <p className="u-text-sm u-m-0">
                    <strong>Tip:</strong> Validation runs once on mount and is
                    memoized for performance. Results are cached until the theme
                    object changes.
                  </p>
                </Callout>
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Error Levels
                </h3>
                <div className="u-mb-3">
                  <h4 className="u-text-md u-font-semibold u-mb-2">
                    Errors (Red)
                  </h4>
                  <p className="u-text-sm u-text-secondary-emphasis">
                    Critical issues that will prevent the theme from working
                    correctly. Must be fixed before using the theme in
                    production.
                  </p>
                </div>
                <div className="u-mb-3">
                  <h4 className="u-text-md u-font-semibold u-mb-2">
                    Warnings (Yellow)
                  </h4>
                  <p className="u-text-sm u-text-secondary-emphasis">
                    Non-critical issues that may cause problems or accessibility
                    concerns. Should be reviewed and addressed when possible.
                  </p>
                </div>
                <div>
                  <h4 className="u-text-md u-font-semibold u-mb-2">
                    Info (Blue)
                  </h4>
                  <p className="u-text-sm u-text-secondary-emphasis">
                    Suggestions for improvements or best practices. Optional but
                    recommended.
                  </p>
                </div>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Best Practices */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Best Practices</h2>

              <Callout variant="success" className="u-mb-4">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Use During Development
                </h3>
                <p className="u-text-sm u-m-0">
                  Always keep ThemeInspector open during theme development to
                  catch issues as you make changes. Enable all inspection
                  features for comprehensive feedback.
                </p>
              </Callout>

              <Callout variant="info" className="u-mb-4">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Check Accessibility
                </h3>
                <p className="u-text-sm u-m-0">
                  Pay special attention to accessibility warnings. Ensure all
                  text/background combinations meet WCAG AA standards (4.5:1 for
                  normal text, 3:1 for large text).
                </p>
              </Callout>

              <Callout variant="warning" className="u-mb-4">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Review CSS Variables
                </h3>
                <p className="u-text-sm u-m-0">
                  Use the CSS variables view to verify that your theme generates
                  the expected custom properties. This helps debug issues with
                  theme application.
                </p>
              </Callout>

              <Callout variant="error" className="u-mb-0">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Development Only
                </h3>
                <p className="u-text-sm u-m-0">
                  ThemeInspector is designed for development environments.
                  Remove it from production builds to reduce bundle size and
                  improve performance.
                </p>
              </Callout>
            </Card>
          </GridCol>
        </Row>

        {/* Related Tools */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Related Tools</h2>
              <p className="u-text-secondary-emphasis u-mb-4">
                Combine ThemeInspector with other devtools for a complete
                development workflow:
              </p>
              <div className="u-grid u-gap-3">
                <Link
                  href="/docs/guides/devtools/preview"
                  className="u-text-primary u-font-medium"
                >
                  → Theme Preview - Test themes with sample components
                </Link>
                <Link
                  href="/docs/guides/devtools/comparator"
                  className="u-text-primary u-font-medium"
                >
                  → Theme Comparator - Compare theme versions
                </Link>
                <Link
                  href="/docs/guides/devtools/live-editor"
                  className="u-text-primary u-font-medium"
                >
                  → Live Editor - Edit themes in real-time
                </Link>
                <Link
                  href="/docs/guides/devtools"
                  className="u-text-primary u-font-medium"
                >
                  ← Back to Devtools Overview
                </Link>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

DevtoolsInspectorPage.displayName = "DevtoolsInspectorPage";

export default DevtoolsInspectorPage;

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

const DevtoolsComparatorPage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Theme Comparator"
        subtitle="Side-by-side theme comparison with difference highlighting"
        text="Compare two themes to identify differences, track changes, and ensure consistency across theme versions."
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Theme Comparator Component"
          text="ThemeComparator provides detailed side-by-side comparison of two themes with difference highlighting, statistics, and filtering capabilities."
        />

        {/* Overview */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Overview</h2>
              <p className="u-text-secondary-emphasis u-mb-4">
                The ThemeComparator component analyzes two themes and displays
                their differences in an easy-to-understand format. It's
                essential for version control, A/B testing, and ensuring theme
                consistency.
              </p>

              <Callout variant="success" className="u-mb-4">
                <p className="u-text-sm u-m-0">
                  <strong>✨ Try it now:</strong>{" "}
                  <Link
                    href="/docs/guides/devtools/comparator-example"
                    className="u-text-primary u-font-medium"
                  >
                    Interactive Comparator Example
                  </Link>{" "}
                  — Compare two theme versions side-by-side.
                </p>
              </Callout>

              <h3 className="u-text-lg u-font-semibold u-mb-3">Key Features</h3>
              <ul className="u-ml-4 u-mb-4">
                <li className="u-mb-2">
                  <strong>Side-by-Side Comparison</strong> - View both themes
                  simultaneously
                </li>
                <li className="u-mb-2">
                  <strong>Difference Highlighting</strong> - Visual indicators
                  for added, removed, and changed values
                </li>
                <li className="u-mb-2">
                  <strong>Statistics Dashboard</strong> - Summary of changes and
                  differences
                </li>
                <li className="u-mb-2">
                  <strong>Detailed Value Comparison</strong> - Deep comparison
                  of all theme properties
                </li>
                <li className="u-mb-2">
                  <strong>Path-Based Tracking</strong> - Track changes by
                  property path
                </li>
                <li className="u-mb-2">
                  <strong>Filter Options</strong> - Show only differences or all
                  properties
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
                  Simple Comparison
                </h3>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemeComparator } from '@shohojdhara/atomix/theme/devtools';
import { createTheme } from '@shohojdhara/atomix/theme';

const lightTheme = createTheme({
  name: 'Light Theme',
  palette: {
    primary: { main: '#2196f3' },
    background: { default: '#ffffff' },
  },
});

const darkTheme = createTheme({
  name: 'Dark Theme',
  palette: {
    primary: { main: '#90caf9' },
    background: { default: '#121212' },
  },
});

function App() {
  return (
    <ThemeComparator
      themeA={lightTheme}
      themeB={darkTheme}
      showOnlyDifferences={false}
    />
  );
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Show Only Differences
                </h3>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`<ThemeComparator
  themeA={currentVersion}
  themeB={newVersion}
  showOnlyDifferences={true}
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
                        <code>themeA</code>
                      </td>
                      <td className="u-p-3">
                        <code>Theme</code>
                      </td>
                      <td className="u-p-3">Required</td>
                      <td className="u-p-3">First theme to compare</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>themeB</code>
                      </td>
                      <td className="u-p-3">
                        <code>Theme</code>
                      </td>
                      <td className="u-p-3">Required</td>
                      <td className="u-p-3">Second theme to compare</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>showOnlyDifferences</code>
                      </td>
                      <td className="u-p-3">
                        <code>boolean</code>
                      </td>
                      <td className="u-p-3">
                        <code>false</code>
                      </td>
                      <td className="u-p-3">
                        Show only properties that differ
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

        {/* Difference Types */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">
                Difference Types
              </h2>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Visual Indicators
                </h3>
                <div className="u-mb-3">
                  <div className="u-flex u-items-center u-gap-2 u-mb-2">
                    <span className="u-badge u-badge-success">Added</span>
                    <span className="u-text-sm u-text-secondary-emphasis">
                      Property exists in Theme B but not in Theme A
                    </span>
                  </div>
                  <div className="u-flex u-items-center u-gap-2 u-mb-2">
                    <span className="u-badge u-badge-error">Removed</span>
                    <span className="u-text-sm u-text-secondary-emphasis">
                      Property exists in Theme A but not in Theme B
                    </span>
                  </div>
                  <div className="u-flex u-items-center u-gap-2">
                    <span className="u-badge u-badge-warning">Changed</span>
                    <span className="u-text-sm u-text-secondary-emphasis">
                      Property exists in both but with different values
                    </span>
                  </div>
                </div>
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Statistics Dashboard
                </h3>
                <p className="u-text-secondary-emphasis u-mb-2">
                  The comparator displays summary statistics:
                </p>
                <ul className="u-ml-4 u-text-sm">
                  <li>Total number of properties compared</li>
                  <li>Number of added properties</li>
                  <li>Number of removed properties</li>
                  <li>Number of changed properties</li>
                  <li>Number of unchanged properties</li>
                  <li>Percentage of differences</li>
                </ul>
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
                  Version Comparison Tool
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Compare theme versions before releasing updates:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemeComparator } from '@shohojdhara/atomix/theme/devtools';
import { useState } from 'react';

function VersionComparison() {
  const [showOnlyDiffs, setShowOnlyDiffs] = useState(true);
  
  return (
    <div>
      <div className="controls">
        <h2>Theme v1.0 vs v2.0</h2>
        <label>
          <input
            type="checkbox"
            checked={showOnlyDiffs}
            onChange={(e) => setShowOnlyDiffs(e.target.checked)}
          />
          Show only differences
        </label>
      </div>

      <ThemeComparator
        themeA={themeV1}
        themeB={themeV2}
        showOnlyDifferences={showOnlyDiffs}
      />

      <div className="release-notes">
        <h3>Breaking Changes</h3>
        <p>Review removed or significantly changed properties</p>
      </div>
    </div>
  );
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  A/B Testing Dashboard
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Compare theme variants for A/B testing:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`function ABTestingDashboard() {
  const variantA = createTheme({
    name: 'Variant A',
    palette: { primary: { main: '#2196f3' } },
  });

  const variantB = createTheme({
    name: 'Variant B',
    palette: { primary: { main: '#f44336' } },
  });

  return (
    <div className="ab-testing">
      <h2>A/B Test: Primary Color Impact</h2>
      
      <ThemeComparator
        themeA={variantA}
        themeB={variantB}
        showOnlyDifferences={true}
      />

      <div className="test-results">
        <h3>Test Metrics</h3>
        <p>Track conversion rates for each variant</p>
      </div>
    </div>
  );
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Migration Helper
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Compare old and new theme structures during migration:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`function MigrationHelper() {
  return (
    <div className="migration-tool">
      <h2>Migration from v1 to v2</h2>
      
      <ThemeComparator
        themeA={legacyTheme}
        themeB={modernTheme}
        showOnlyDifferences={true}
      />

      <div className="migration-guide">
        <h3>Migration Steps</h3>
        <ol>
          <li>Review removed properties (marked in red)</li>
          <li>Update changed property values</li>
          <li>Add new required properties (marked in green)</li>
        </ol>
      </div>
    </div>
  );
}`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Use Cases */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">
                Common Use Cases
              </h2>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  1. Version Control
                </h3>
                <p className="u-text-secondary-emphasis u-mb-2">
                  Track theme changes across versions:
                </p>
                <ul className="u-ml-4 u-text-sm">
                  <li>Compare current version with previous releases</li>
                  <li>Identify breaking changes before deployment</li>
                  <li>Generate changelog from differences</li>
                </ul>
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  2. Theme Variants
                </h3>
                <p className="u-text-secondary-emphasis u-mb-2">
                  Compare different theme variants:
                </p>
                <ul className="u-ml-4 u-text-sm">
                  <li>Light vs Dark mode differences</li>
                  <li>Brand theme variations</li>
                  <li>Seasonal or promotional themes</li>
                </ul>
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  3. Quality Assurance
                </h3>
                <p className="u-text-secondary-emphasis u-mb-2">
                  Ensure theme consistency:
                </p>
                <ul className="u-ml-4 u-text-sm">
                  <li>Verify expected changes were applied</li>
                  <li>Catch unintended modifications</li>
                  <li>Validate theme structure compliance</li>
                </ul>
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
                  Compare Before Releasing
                </h3>
                <p className="u-text-sm u-m-0">
                  Always compare theme versions before releasing updates. This
                  helps identify breaking changes and ensures you document all
                  modifications.
                </p>
              </Callout>

              <Callout variant="info" className="u-mb-4">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Use Filters Effectively
                </h3>
                <p className="u-text-sm u-m-0">
                  Enable "show only differences" when reviewing large themes to
                  focus on what changed. Disable it to see the full context of
                  unchanged properties.
                </p>
              </Callout>

              <Callout variant="warning" className="u-mb-4">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Document Breaking Changes
                </h3>
                <p className="u-text-sm u-m-0">
                  Pay special attention to removed properties (marked in red).
                  These are breaking changes that require migration steps in
                  your documentation.
                </p>
              </Callout>

              <Callout variant="error" className="u-mb-0">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Performance Note
                </h3>
                <p className="u-text-sm u-m-0">
                  Differences are calculated once on mount and memoized. Even
                  large themes compare efficiently without performance impact.
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
                Combine ThemeComparator with other devtools:
              </p>
              <div className="u-grid u-gap-3">
                <Link
                  href="/docs/guides/devtools/inspector"
                  className="u-text-primary u-font-medium"
                >
                  → Theme Inspector - Validate both themes
                </Link>
                <Link
                  href="/docs/guides/devtools/preview"
                  className="u-text-primary u-font-medium"
                >
                  → Theme Preview - Preview both themes
                </Link>
                <Link
                  href="/docs/guides/devtools/cli"
                  className="u-text-primary u-font-medium"
                >
                  → CLI Tool - Compare themes from command line
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

DevtoolsComparatorPage.displayName = "DevtoolsComparatorPage";

export default DevtoolsComparatorPage;

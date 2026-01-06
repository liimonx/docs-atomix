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

const DevtoolsPreviewPage: FC = () => {
    return (
        <div>
            <Hero
                className={styles.pageHero}
                backgroundImageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
                title="Theme Preview"
                subtitle="Live preview of themes with sample components"
                text="Visualize your theme with color palettes, typography samples, and custom components. Test themes before deployment."
                alignment="center"
            />

            <Block className="u-pt-8 u-pb-8">
                <SectionIntro
                    title="Theme Preview Component"
                    text="ThemePreview provides a live preview environment for testing themes with sample components, color palettes, typography scales, and spacing visualizations."
                />

                {/* Overview */}
                <Row className="u-mt-8">
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Overview</h2>
                            <p className="u-text-secondary-emphasis u-mb-4">
                                The ThemePreview component creates a visual testing environment where you can see how your theme looks with real components. It displays color palettes, typography samples, spacing scales, and allows you to preview custom components.
                            </p>

                            <Callout variant="success" className="u-mb-4">
                                <p className="u-fs-sm u-m-0">
                                    <strong>✨ Try it now:</strong>{" "}
                                    <Link href="/docs/guides/devtools/preview-example" className="u-text-primary u-fw-medium">
                                        Interactive Preview Example
                                    </Link>
                                    {" "}— Customize colors and visualize a theme with sample components.
                                </p>
                            </Callout>

                            <h3 className="u-fs-lg u-fw-semibold u-mb-3">Key Features</h3>
                            <ul className="u-ml-4 u-mb-4">
                                <li className="u-mb-2"><strong>Theme Details</strong> - Display theme metadata and information</li>
                                <li className="u-mb-2"><strong>Color Palette</strong> - Visual representation of all theme colors</li>
                                <li className="u-mb-2"><strong>Typography Samples</strong> - Preview all font sizes, weights, and line heights</li>
                                <li className="u-mb-2"><strong>Spacing Scale</strong> - Visualize spacing tokens</li>
                                <li className="u-mb-2"><strong>Custom Components</strong> - Test theme with your actual components</li>
                                <li className="u-mb-2"><strong>Sample Rendering</strong> - Built-in sample components for quick testing</li>
                            </ul>
                        </Card>
                    </GridCol>
                </Row>

                {/* Basic Usage */}
                <Row className="u-mt-8">
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Basic Usage</h2>

                            <div className="u-mb-6">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Simple Preview</h3>
                                <EnhancedCodeBlock
                                    language="tsx"
                                    code={`import { ThemePreview } from '@shohojdhara/atomix/theme/devtools';
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
    <ThemePreview
      theme={theme}
      showDetails={true}
      showPalette={true}
      showTypography={true}
      showSpacing={false}
    />
  );
}`}
                                    showLineNumbers={true}
                                />
                            </div>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">With Custom Components</h3>
                                <EnhancedCodeBlock
                                    language="tsx"
                                    code={`import { Button, Card } from '@shohojdhara/atomix';

<ThemePreview theme={theme} showPalette={true}>
  {/* Your custom components */}
  <Button variant="primary">Test Button</Button>
  <Card className="u-p-4">
    <h3>Test Card</h3>
    <p>Testing theme with actual components</p>
  </Card>
</ThemePreview>`}
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
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Props API</h2>

                            <div className="u-overflow-x-auto">
                                <table className="u-w-100">
                                    <thead>
                                        <tr>
                                            <th className="u-text-start u-p-3 u-bg-surface-subtle">Prop</th>
                                            <th className="u-text-start u-p-3 u-bg-surface-subtle">Type</th>
                                            <th className="u-text-start u-p-3 u-bg-surface-subtle">Default</th>
                                            <th className="u-text-start u-p-3 u-bg-surface-subtle">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="u-p-3"><code>theme</code></td>
                                            <td className="u-p-3"><code>Theme</code></td>
                                            <td className="u-p-3">Required</td>
                                            <td className="u-p-3">Theme object to preview</td>
                                        </tr>
                                        <tr>
                                            <td className="u-p-3"><code>showDetails</code></td>
                                            <td className="u-p-3"><code>boolean</code></td>
                                            <td className="u-p-3"><code>true</code></td>
                                            <td className="u-p-3">Show theme metadata and details</td>
                                        </tr>
                                        <tr>
                                            <td className="u-p-3"><code>showPalette</code></td>
                                            <td className="u-p-3"><code>boolean</code></td>
                                            <td className="u-p-3"><code>true</code></td>
                                            <td className="u-p-3">Show color palette visualization</td>
                                        </tr>
                                        <tr>
                                            <td className="u-p-3"><code>showTypography</code></td>
                                            <td className="u-p-3"><code>boolean</code></td>
                                            <td className="u-p-3"><code>true</code></td>
                                            <td className="u-p-3">Show typography samples</td>
                                        </tr>
                                        <tr>
                                            <td className="u-p-3"><code>showSpacing</code></td>
                                            <td className="u-p-3"><code>boolean</code></td>
                                            <td className="u-p-3"><code>false</code></td>
                                            <td className="u-p-3">Show spacing scale visualization</td>
                                        </tr>
                                        <tr>
                                            <td className="u-p-3"><code>children</code></td>
                                            <td className="u-p-3"><code>ReactNode</code></td>
                                            <td className="u-p-3">-</td>
                                            <td className="u-p-3">Custom components to render with theme</td>
                                        </tr>
                                        <tr>
                                            <td className="u-p-3"><code>className</code></td>
                                            <td className="u-p-3"><code>string</code></td>
                                            <td className="u-p-3">-</td>
                                            <td className="u-p-3">Custom CSS class name</td>
                                        </tr>
                                        <tr>
                                            <td className="u-p-3"><code>style</code></td>
                                            <td className="u-p-3"><code>CSSProperties</code></td>
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
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Advanced Examples</h2>

                            <div className="u-mb-6">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Theme Testing Suite</h3>
                                <p className="u-text-secondary-emphasis u-mb-3">
                                    Create a comprehensive testing environment:
                                </p>
                                <EnhancedCodeBlock
                                    language="tsx"
                                    code={`import { ThemePreview } from '@shohojdhara/atomix/theme/devtools';
import { Button, Card, Input, Badge } from '@shohojdhara/atomix';

function ThemeTestingSuite({ theme }) {
  return (
    <ThemePreview
      theme={theme}
      showPalette={true}
      showTypography={true}
    >
      <div className="component-tests">
        <section>
          <h3>Buttons</h3>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </section>

        <section>
          <h3>Form Elements</h3>
          <Input placeholder="Test input" />
          <Input type="email" placeholder="Email" />
        </section>

        <section>
          <h3>Cards</h3>
          <Card className="u-p-4">
            <h4>Card Title</h4>
            <p>Card content with theme applied</p>
          </Card>
        </section>

        <section>
          <h3>Badges</h3>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
        </section>
      </div>
    </ThemePreview>
  );
}`}
                                    showLineNumbers={true}
                                />
                            </div>

                            <div className="u-mb-6">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Storybook Integration</h3>
                                <p className="u-text-secondary-emphasis u-mb-3">
                                    Add theme preview to Storybook stories:
                                </p>
                                <EnhancedCodeBlock
                                    language="tsx"
                                    code={`// .storybook/preview.tsx
import { ThemePreview } from '@shohojdhara/atomix/theme/devtools';

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    
    return (
      <ThemePreview
        theme={theme}
        showDetails={false}
        showPalette={false}
      >
        <Story />
      </ThemePreview>
    );
  },
];

// In your stories
export const WithTheme = {
  decorators: [
    (Story) => (
      <ThemePreview theme={myCustomTheme}>
        <Story />
      </ThemePreview>
    ),
  ],
};`}
                                    showLineNumbers={true}
                                />
                            </div>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Multi-Theme Comparison</h3>
                                <p className="u-text-secondary-emphasis u-mb-3">
                                    Preview multiple themes side by side:
                                </p>
                                <EnhancedCodeBlock
                                    language="tsx"
                                    code={`function MultiThemePreview() {
  const themes = [lightTheme, darkTheme, customTheme];

  return (
    <div className="theme-grid">
      {themes.map((theme) => (
        <div key={theme.name} className="theme-preview-container">
          <h3>{theme.name}</h3>
          <ThemePreview
            theme={theme}
            showPalette={true}
            showTypography={false}
          >
            <Button>Test Button</Button>
            <Card className="u-p-3">Sample Card</Card>
          </ThemePreview>
        </div>
      ))}
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
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Common Use Cases</h2>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">1. Theme Development</h3>
                                <p className="u-text-secondary-emphasis u-mb-2">
                                    Use ThemePreview during theme creation to see changes in real-time:
                                </p>
                                <ul className="u-ml-4 u-fs-sm">
                                    <li>Visualize color palette as you adjust values</li>
                                    <li>Test typography scales with actual text samples</li>
                                    <li>Preview components with new theme applied</li>
                                </ul>
                            </div>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">2. Client Presentations</h3>
                                <p className="u-text-secondary-emphasis u-mb-2">
                                    Show theme options to clients or stakeholders:
                                </p>
                                <ul className="u-ml-4 u-fs-sm">
                                    <li>Display multiple theme variations</li>
                                    <li>Preview with actual application components</li>
                                    <li>Demonstrate light/dark mode options</li>
                                </ul>
                            </div>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">3. Documentation</h3>
                                <p className="u-text-secondary-emphasis u-mb-2">
                                    Include in theme documentation:
                                </p>
                                <ul className="u-ml-4 u-fs-sm">
                                    <li>Show available theme options</li>
                                    <li>Demonstrate theme customization</li>
                                    <li>Provide interactive examples</li>
                                </ul>
                            </div>
                        </Card>
                    </GridCol>
                </Row>

                {/* Best Practices */}
                <Row className="u-mt-8">
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Best Practices</h2>

                            <Callout variant="success" className="u-mb-4">
                                <h3 className="u-fs-md u-fw-semibold u-mb-2">Test with Real Components</h3>
                                <p className="u-fs-sm u-m-0">
                                    Always preview themes with your actual application components, not just the default samples. This ensures the theme works correctly in your specific use cases.
                                </p>
                            </Callout>

                            <Callout variant="info" className="u-mb-4">
                                <h3 className="u-fs-md u-fw-semibold u-mb-2">Check All Variants</h3>
                                <p className="u-fs-sm u-m-0">
                                    Test all component variants (primary, secondary, outline, etc.) to ensure consistent theming across your entire component library.
                                </p>
                            </Callout>

                            <Callout variant="warning" className="u-mb-4">
                                <h3 className="u-fs-md u-fw-semibold u-mb-2">Verify Accessibility</h3>
                                <p className="u-fs-sm u-m-0">
                                    Use the color palette view to check contrast ratios. Ensure text is readable against all background colors in your theme.
                                </p>
                            </Callout>

                            <Callout variant="warning" className="u-mb-0">
                                <h3 className="u-fs-md u-fw-semibold u-mb-2">Performance Note</h3>
                                <p className="u-fs-sm u-m-0">
                                    CSS variables are generated once and cached for performance. The preview updates smoothly even with complex themes.
                                </p>
                            </Callout>
                        </Card>
                    </GridCol>
                </Row>

                {/* Related Tools */}
                <Row className="u-mt-8">
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Related Tools</h2>
                            <p className="u-text-secondary-emphasis u-mb-4">
                                Combine ThemePreview with other devtools:
                            </p>
                            <div className="u-grid u-gap-3">
                                <Link href="/docs/guides/devtools/inspector" className="u-text-primary u-fw-medium">
                                    → Theme Inspector - Validate and debug themes
                                </Link>
                                <Link href="/docs/guides/devtools/live-editor" className="u-text-primary u-fw-medium">
                                    → Live Editor - Edit themes in real-time
                                </Link>
                                <Link href="/docs/guides/devtools/comparator" className="u-text-primary u-fw-medium">
                                    → Theme Comparator - Compare theme versions
                                </Link>
                                <Link href="/docs/guides/devtools" className="u-text-primary u-fw-medium">
                                    ← Back to Devtools Overview
                                </Link>
                            </div>
                        </Card>
                    </GridCol>
                </Row>
            </Block>
        </div >
    );
};

DevtoolsPreviewPage.displayName = "DevtoolsPreviewPage";

export default DevtoolsPreviewPage;

"use client";

import { FC } from "react";
import {
    Hero,
    SectionIntro,
    Card,
    GridCol,
    Row,
    Block,
    Icon,
    Callout,
} from "@shohojdhara/atomix";
import Link from "next/link";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsOverviewPage: FC = () => {
    return (
        <div>
            <Hero
                className={styles.pageHero}
                backgroundImageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
                title="Atomix Devtools"
                subtitle="Powerful development tools for theme creation and debugging"
                text="A comprehensive suite of tools to inspect, preview, compare, and edit themes. Build better themes faster with real-time feedback and validation."
                alignment="center"
            />

            <Block className="u-pt-8 u-pb-8">
                <SectionIntro
                    title="Development Tools Suite"
                    text="Atomix provides a complete set of development tools to streamline theme creation, debugging, and testing. Whether you're building a new theme or debugging an existing one, these tools provide the insights you need."
                />

                {/* Quick Start */}
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

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Import Devtools</h3>
                                <EnhancedCodeBlock
                                    language="tsx"
                                    code={`import { 
  ThemeInspector, 
  ThemePreview, 
  ThemeComparator,
  ThemeLiveEditor 
} from '@shohojdhara/atomix/theme/devtools';`}
                                    showLineNumbers={false}
                                />
                            </div>
                        </Card>
                    </GridCol>
                </Row>

                {/* Tools Overview */}
                <Row className="u-mt-8">
                    <GridCol md={12}>
                        <h2 className="u-fs-2xl u-fw-bold u-mb-4">Available Tools</h2>
                    </GridCol>
                </Row>

                <Row className="u-mt-4">
                    <GridCol md={6} lg={4}>
                        <Card className="u-p-5 u-h-100">
                            <div className="u-mb-3">
                                <Icon name="MagnifyingGlass" size={32} />
                            </div>
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">Theme Inspector</h3>
                            <p className="u-text-secondary-emphasis u-mb-4">
                                Deep inspection and validation of theme structure, CSS variables, and accessibility issues.
                            </p>
                            <Link href="/docs/guides/devtools/inspector" className="u-text-primary">
                                Learn more →
                            </Link>
                        </Card>
                    </GridCol>

                    <GridCol md={6} lg={4}>
                        <Card className="u-p-5 u-h-100">
                            <div className="u-mb-3">
                                <Icon name="Eye" size={32} />
                            </div>
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">Theme Preview</h3>
                            <p className="u-text-secondary-emphasis u-mb-4">
                                Live preview of themes with sample components, color palettes, and typography scales.
                            </p>
                            <Link href="/docs/guides/devtools/preview" className="u-text-primary">
                                Learn more →
                            </Link>
                        </Card>
                    </GridCol>

                    <GridCol md={6} lg={4}>
                        <Card className="u-p-5 u-h-100">
                            <div className="u-mb-3">
                                <Icon name="GithubLogo" size={32} />
                            </div>
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">Theme Comparator</h3>
                            <p className="u-text-secondary-emphasis u-mb-4">
                                Side-by-side comparison of two themes with difference highlighting and statistics.
                            </p>
                            <Link href="/docs/guides/devtools/comparator" className="u-text-primary">
                                Learn more →
                            </Link>
                        </Card>
                    </GridCol>

                    <GridCol md={6} lg={4}>
                        <Card className="u-p-5 u-h-100">
                            <div className="u-mb-3">
                                <Icon name="PencilSimple" size={32} />
                            </div>
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">Live Editor</h3>
                            <p className="u-text-secondary-emphasis u-mb-4">
                                Real-time theme editing with visual and JSON editors, instant preview, and export capabilities.
                            </p>
                            <Link href="/docs/guides/devtools/live-editor" className="u-text-primary">
                                Learn more →
                            </Link>
                        </Card>
                    </GridCol>

                    <GridCol md={6} lg={4}>
                        <Card className="u-p-5 u-h-100">
                            <div className="u-mb-3">
                                <Icon name="Terminal" size={32} />
                            </div>
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">CLI Tool</h3>
                            <p className="u-text-secondary-emphasis u-mb-4">
                                Command-line interface for theme validation, inspection, comparison, and export.
                            </p>
                            <Link href="/docs/guides/devtools/cli" className="u-text-primary">
                                Learn more →
                            </Link>
                        </Card>
                    </GridCol>
                </Row>

                {/* Common Workflows */}
                <Row className="u-mt-8">
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Common Workflows</h2>

                            <div className="u-mb-6">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Creating a New Theme</h3>
                                <ol className="u-ml-4 u-mb-3">
                                    <li className="u-mb-2">Use <strong>Live Editor</strong> to create and customize your theme visually</li>
                                    <li className="u-mb-2">Use <strong>Inspector</strong> to validate structure and check for issues</li>
                                    <li className="u-mb-2">Use <strong>Preview</strong> to test with sample components</li>
                                    <li className="u-mb-2">Export your theme and integrate into your project</li>
                                </ol>
                            </div>

                            <div className="u-mb-6">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Debugging Theme Issues</h3>
                                <ol className="u-ml-4 u-mb-3">
                                    <li className="u-mb-2">Use <strong>Inspector</strong> to identify validation errors and warnings</li>
                                    <li className="u-mb-2">Check accessibility issues with contrast ratio analysis</li>
                                    <li className="u-mb-2">Review generated CSS variables for correctness</li>
                                    <li className="u-mb-2">Use <strong>Preview</strong> to visually verify fixes</li>
                                </ol>
                            </div>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Comparing Theme Versions</h3>
                                <ol className="u-ml-4 u-mb-3">
                                    <li className="u-mb-2">Load both theme versions into <strong>Comparator</strong></li>
                                    <li className="u-mb-2">Review differences and statistics dashboard</li>
                                    <li className="u-mb-2">Filter to show only changed values</li>
                                    <li className="u-mb-2">Document breaking changes for release notes</li>
                                </ol>
                            </div>
                        </Card>
                    </GridCol>
                </Row>

                {/* Integration Examples */}
                <Row className="u-mt-8">
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Integration Examples</h2>

                            <div className="u-mb-6">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Development Dashboard</h3>
                                <p className="u-text-secondary-emphasis u-mb-3">
                                    Create a comprehensive theme development dashboard:
                                </p>
                                <EnhancedCodeBlock
                                    language="tsx"
                                    code={`import { 
  ThemeInspector, 
  ThemePreview, 
  ThemeComparator,
  ThemeLiveEditor 
} from '@shohojdhara/atomix/theme/devtools';
import { createTheme } from '@shohojdhara/atomix/theme';
import { useState } from 'react';

function ThemeDashboard() {
  const [currentTheme, setCurrentTheme] = useState(
    createTheme({
      name: 'My Theme',
      palette: {
        primary: { main: '#7AFFD7' },
      },
    })
  );

  return (
    <div className="theme-dashboard">
      {/* Live Editor */}
      <section>
        <h2>Edit Theme</h2>
        <ThemeLiveEditor
          initialTheme={currentTheme}
          onChange={setCurrentTheme}
        />
      </section>

      {/* Inspector */}
      <section>
        <h2>Inspect Theme</h2>
        <ThemeInspector
          theme={currentTheme}
          showValidation={true}
          showCSSVariables={true}
        />
      </section>

      {/* Preview */}
      <section>
        <h2>Preview Theme</h2>
        <ThemePreview
          theme={currentTheme}
          showPalette={true}
          showTypography={true}
        />
      </section>
    </div>
  );
}`}
                                    showLineNumbers={true}
                                />
                            </div>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Storybook Integration</h3>
                                <p className="u-text-secondary-emphasis u-mb-3">
                                    Add theme preview to your Storybook:
                                </p>
                                <EnhancedCodeBlock
                                    language="tsx"
                                    code={`// .storybook/preview.tsx
import { ThemePreview } from '@shohojdhara/atomix/theme/devtools';

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    
    return (
      <ThemePreview theme={theme}>
        <Story />
      </ThemePreview>
    );
  },
];`}
                                    showLineNumbers={true}
                                />
                            </div>
                        </Card>
                    </GridCol>
                </Row>

                {/* Best Practices */}
                <Row className="u-mt-8">
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Best Practices</h2>

                            <Callout variant="info" className="u-mb-4">
                                <h3 className="u-fs-md u-fw-semibold u-mb-2">Always Validate</h3>
                                <p className="u-fs-sm u-m-0">
                                    Use ThemeInspector during development to catch issues early. Enable validation to check for accessibility problems, missing required properties, and invalid values.
                                </p>
                            </Callout>

                            <Callout variant="success" className="u-mb-4">
                                <h3 className="u-fs-md u-fw-semibold u-mb-2">Test with Real Components</h3>
                                <p className="u-fs-sm u-m-0">
                                    Use ThemePreview with your actual components, not just the default samples. This ensures your theme works correctly in your specific use cases.
                                </p>
                            </Callout>

                            <Callout variant="warning" className="u-mb-4">
                                <h3 className="u-fs-md u-fw-semibold u-mb-2">Compare Before Releasing</h3>
                                <p className="u-fs-sm u-m-0">
                                    Always use ThemeComparator to review changes between theme versions before releasing updates. This helps identify breaking changes and unexpected modifications.
                                </p>
                            </Callout>

                            <Callout variant="error" className="u-mb-0">
                                <h3 className="u-fs-md u-fw-semibold u-mb-2">Performance Considerations</h3>
                                <p className="u-fs-sm u-m-0">
                                    Devtools are designed for development environments. While they're optimized with memoization and debouncing, avoid using them in production builds.
                                </p>
                            </Callout>
                        </Card>
                    </GridCol>
                </Row>

                {/* Next Steps */}
                <Row className="u-mt-8">
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Next Steps</h2>
                            <p className="u-text-secondary-emphasis u-mb-4">
                                Explore each devtools component in detail:
                            </p>
                            <div className="u-grid u-gap-3">
                                <Callout variant="success" className="u-mb-3">
                                    <p className="u-fs-sm u-fw-bold u-mb-2">✨ Try Interactive Examples:</p>
                                    <ul className="u-mb-0 u-pl-4">
                                        <li className="u-mb-1">
                                            <Link href="/docs/guides/devtools/live-editor-example" className="u-text-primary u-fw-medium">
                                                Live Editor
                                            </Link>
                                            {" "}— Create and edit themes in real-time
                                        </li>
                                        <li className="u-mb-1">
                                            <Link href="/docs/guides/devtools/inspector-example" className="u-text-primary u-fw-medium">
                                                Inspector
                                            </Link>
                                            {" "}— Analyze and validate themes
                                        </li>
                                        <li className="u-mb-1">
                                            <Link href="/docs/guides/devtools/preview-example" className="u-text-primary u-fw-medium">
                                                Preview
                                            </Link>
                                            {" "}— Visualize themes with components
                                        </li>
                                        <li>
                                            <Link href="/docs/guides/devtools/comparator-example" className="u-text-primary u-fw-medium">
                                                Comparator
                                            </Link>
                                            {" "}— Compare theme versions
                                        </li>
                                    </ul>
                                </Callout>
                                <Link href="/docs/guides/devtools/inspector" className="u-text-primary u-fw-medium">
                                    → Theme Inspector Documentation
                                </Link>
                                <Link href="/docs/guides/devtools/preview" className="u-text-primary u-fw-medium">
                                    → Theme Preview Documentation
                                </Link>
                                <Link href="/docs/guides/devtools/comparator" className="u-text-primary u-fw-medium">
                                    → Theme Comparator Documentation
                                </Link>
                                <Link href="/docs/guides/devtools/live-editor" className="u-text-primary u-fw-medium">
                                    → Live Editor Documentation
                                </Link>
                                <Link href="/docs/guides/devtools/cli" className="u-text-primary u-fw-medium">
                                    → CLI Tool Documentation
                                </Link>
                            </div>
                        </Card>
                    </GridCol>
                </Row>
            </Block>
        </div>
    );
};

DevtoolsOverviewPage.displayName = "DevtoolsOverviewPage";

export default DevtoolsOverviewPage;

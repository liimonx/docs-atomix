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

const DevtoolsCLIPage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Atomix Theme CLI"
        subtitle="Command-line tools for theme development"
        text="Validate, inspect, compare, and export themes from the command line. Integrate theme tools into your build process and CI/CD pipeline."
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Command-Line Interface"
          text="The Atomix Theme CLI provides powerful command-line tools for theme validation, inspection, comparison, and export. Perfect for automation and CI/CD integration."
        />

        {/* Installation */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Installation</h2>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Global Installation
                </h3>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# Install globally
npm install -g @shohojdhara/atomix

# Verify installation
atomix-theme --version`}
                  showLineNumbers={false}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Project Installation
                </h3>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# Install as dev dependency
npm install --save-dev @shohojdhara/atomix

# Use with npx
npx atomix-theme --help`}
                  showLineNumbers={false}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Available Commands */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">
                Available Commands
              </h2>

              <div className="u-overflow-x-auto">
                <table className="u-w-100">
                  <thead>
                    <tr>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Command
                      </th>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Description
                      </th>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Options
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="u-p-3">
                        <code>validate</code>
                      </td>
                      <td className="u-p-3">Validate theme configuration</td>
                      <td className="u-p-3">
                        <code>--config</code>, <code>--strict</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>list</code>
                      </td>
                      <td className="u-p-3">List all available themes</td>
                      <td className="u-p-3">-</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>inspect</code>
                      </td>
                      <td className="u-p-3">Inspect a specific theme</td>
                      <td className="u-p-3">
                        <code>--theme</code>, <code>--json</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>compare</code>
                      </td>
                      <td className="u-p-3">Compare two themes</td>
                      <td className="u-p-3">
                        <code>--theme1</code>, <code>--theme2</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>export</code>
                      </td>
                      <td className="u-p-3">Export theme to JSON</td>
                      <td className="u-p-3">
                        <code>--theme</code>, <code>--output</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>help</code>
                      </td>
                      <td className="u-p-3">Show help information</td>
                      <td className="u-p-3">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Command Examples */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">
                Command Examples
              </h2>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Validate Theme
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Validate a theme configuration file:
                </p>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# Validate default config
atomix-theme validate

# Validate specific config file
atomix-theme validate --config ./my-theme.json

# Strict mode (fail on warnings)
atomix-theme validate --strict`}
                  showLineNumbers={false}
                />
                <Callout variant="info" className="u-mt-3">
                  <p className="u-text-sm u-m-0">
                    Validation checks for required properties, type correctness,
                    color formats, and accessibility issues.
                  </p>
                </Callout>
              </div>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  List Themes
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Display all available themes:
                </p>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# List all themes
atomix-theme list

# Output:
# Available themes:
#   - light (Light Theme)
#   - dark (Dark Theme)
#   - custom (Custom Theme)`}
                  showLineNumbers={false}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Inspect Theme
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Get detailed information about a theme:
                </p>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# Inspect theme (human-readable)
atomix-theme inspect --theme light

# Inspect theme (JSON output)
atomix-theme inspect --theme light --json

# Pipe to file
atomix-theme inspect --theme light --json > theme-info.json`}
                  showLineNumbers={false}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Compare Themes
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Compare two themes and show differences:
                </p>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# Compare two themes
atomix-theme compare --theme1 light --theme2 dark

# Compare theme files
atomix-theme compare --theme1 ./v1.json --theme2 ./v2.json

# Output differences only
atomix-theme compare --theme1 light --theme2 dark --diff-only`}
                  showLineNumbers={false}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Export Theme
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Export a theme to JSON file:
                </p>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# Export to default location
atomix-theme export --theme light

# Export to specific file
atomix-theme export --theme light --output ./themes/light.json

# Export with formatting
atomix-theme export --theme light --output ./light.json --pretty`}
                  showLineNumbers={false}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* CI/CD Integration */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">
                CI/CD Integration
              </h2>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  GitHub Actions
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Validate themes in your CI pipeline:
                </p>
                <EnhancedCodeBlock
                  language="yaml"
                  code={`name: Validate Themes

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Validate themes
        run: npx atomix-theme validate --strict
      
      - name: Compare with main
        if: github.event_name == 'pull_request'
        run: |
          git fetch origin main
          npx atomix-theme compare \\
            --theme1 ./themes/current.json \\
            --theme2 ./themes/new.json`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  NPM Scripts
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Add theme validation to package.json:
                </p>
                <EnhancedCodeBlock
                  language="json"
                  code={`{
  "scripts": {
    "theme:validate": "atomix-theme validate",
    "theme:validate:strict": "atomix-theme validate --strict",
    "theme:list": "atomix-theme list",
    "theme:export": "atomix-theme export --theme custom --output ./dist/theme.json",
    "pretest": "npm run theme:validate"
  }
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Pre-commit Hook
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Validate themes before committing:
                </p>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Validate theme files
npx atomix-theme validate --strict

# Exit if validation fails
if [ $? -ne 0 ]; then
  echo "Theme validation failed. Please fix errors before committing."
  exit 1
fi`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Configuration */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Configuration</h2>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Config File
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Create <code>atomix.config.ts</code> in your project root:
                </p>
                <EnhancedCodeBlock
                  language="typescript"
                  code={`import { defineConfig } from '@shohojdhara/atomix/config';

export default defineConfig({
  theme: {
    themes: {
      'my-theme': {
        type: 'css',
        name: 'My Theme',
        description: 'Custom theme',
        version: '1.0.0',
      },
    },
  },
});`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Environment Variables
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Configure CLI behavior with environment variables:
                </p>
                <EnhancedCodeBlock
                  language="bash"
                  code={`# Set config file path
export ATOMIX_CONFIG=./config/atomix.config.ts

# Set theme directory
export ATOMIX_THEME_DIR=./src/themes

# Enable debug mode
export ATOMIX_DEBUG=true`}
                  showLineNumbers={false}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Troubleshooting */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Troubleshooting</h2>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Common Issues
                </h3>

                <div className="u-mb-4">
                  <h4 className="u-text-md u-font-semibold u-mb-2">
                    Command Not Found
                  </h4>
                  <p className="u-text-sm u-text-secondary-emphasis u-mb-2">
                    If <code>atomix-theme</code> command is not found:
                  </p>
                  <EnhancedCodeBlock
                    language="bash"
                    code={`# Use npx instead
npx atomix-theme --help

# Or install globally
npm install -g @shohojdhara/atomix`}
                    showLineNumbers={false}
                  />
                </div>

                <div className="u-mb-4">
                  <h4 className="u-text-md u-font-semibold u-mb-2">
                    Config File Not Found
                  </h4>
                  <p className="u-text-sm u-text-secondary-emphasis u-mb-2">
                    Ensure <code>atomix.config.ts</code> exists in project root:
                  </p>
                  <EnhancedCodeBlock
                    language="bash"
                    code={`# Check if config exists
ls atomix.config.ts

# Specify config path
atomix-theme validate --config ./path/to/config.ts`}
                    showLineNumbers={false}
                  />
                </div>

                <div>
                  <h4 className="u-text-md u-font-semibold u-mb-2">
                    Validation Errors
                  </h4>
                  <p className="u-text-sm u-text-secondary-emphasis u-mb-2">
                    Run validation with verbose output:
                  </p>
                  <EnhancedCodeBlock
                    language="bash"
                    code={`# Verbose validation
atomix-theme validate --verbose

# Debug mode
ATOMIX_DEBUG=true atomix-theme validate`}
                    showLineNumbers={false}
                  />
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
                  Automate Validation
                </h3>
                <p className="u-text-sm u-m-0">
                  Add theme validation to your CI/CD pipeline and pre-commit
                  hooks to catch issues early.
                </p>
              </Callout>

              <Callout variant="info" className="u-mb-4">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Use Strict Mode
                </h3>
                <p className="u-text-sm u-m-0">
                  Enable strict mode in CI to fail builds on warnings, ensuring
                  high theme quality.
                </p>
              </Callout>

              <Callout variant="warning" className="u-mb-4">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Version Control Themes
                </h3>
                <p className="u-text-sm u-m-0">
                  Export themes to JSON and commit them to version control. Use
                  compare command to review changes in pull requests.
                </p>
              </Callout>

              <Callout variant="warning" className="u-mb-0">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Document Breaking Changes
                </h3>
                <p className="u-text-sm u-m-0">
                  When comparing theme versions, document any breaking changes
                  (removed or significantly changed properties) in your release
                  notes.
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
                The CLI complements the React devtools components:
              </p>
              <div className="u-grid u-gap-3">
                <Link
                  href="/docs/guides/devtools/inspector"
                  className="u-text-primary u-font-medium"
                >
                  → Theme Inspector - Visual theme inspection
                </Link>
                <Link
                  href="/docs/guides/devtools/comparator"
                  className="u-text-primary u-font-medium"
                >
                  → Theme Comparator - Visual theme comparison
                </Link>
                <Link
                  href="/docs/guides/devtools/live-editor"
                  className="u-text-primary u-font-medium"
                >
                  → Live Editor - Interactive theme editing
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

DevtoolsCLIPage.displayName = "DevtoolsCLIPage";

export default DevtoolsCLIPage;

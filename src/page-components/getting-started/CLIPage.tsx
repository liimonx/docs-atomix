"use client";

import { FC } from "react";
import Link from "next/link";
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
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import styles from "@/styles/PageHero.module.scss";

const CLIPage: FC = () => {

  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Atomix CLI Reference"
        text="Complete command-line interface documentation for Atomix design system"
        alignment="center"
        showOverlay={true}
        fullViewportHeight={false}
        contentWidth="900px"
      />

      <Block spacing="md">
        <SectionIntro
          title="Installation"
          text="The Atomix CLI is automatically available when you install the Atomix design system"
          alignment="center"
        />

        <Row className="u-mt-6">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100" appearance="outlined" elevation="lg" variant="primary">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <Icon name="Download" size={24} className="c-card__icon u-me-2" />
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Install Atomix
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Install the Atomix package to get access to the CLI
              </p>
              <EnhancedCodeBlock
                code="npm install @shohojdhara/atomix"
                language="bash"
                showLineNumbers={false}
              />
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-p-6 u-h-100" appearance="outlined" elevation="lg" variant="success">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <Icon name="Terminal" size={24} className="c-card__icon u-me-2" />
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Access CLI
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Use npx to run CLI commands without global installation
              </p>
              <EnhancedCodeBlock
                code="npx atomix --help"
                language="bash"
                showLineNumbers={false}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>

      <Block spacing="md" background="secondary">
        <SectionIntro
          title="Quick Start"
          text="Get started with common CLI commands"
          alignment="center"
        />

        <Row className="u-mt-6">
          <GridCol md={4} className="u-mb-4">
            <Card className="u-h-100" appearance="outlined" elevation="lg" variant="primary">
              <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                Initialize Project
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4 u-fs-sm u-line-height-relaxed">
                Interactive setup wizard for new projects
              </p>
              <EnhancedCodeBlock
                code="npx atomix init"
                language="bash"
                showLineNumbers={false}
              />
            </Card>
          </GridCol>

          <GridCol md={4} className="u-mb-4">
            <Card className="u-h-100" appearance="outlined" elevation="lg" variant="success">
              <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                Create Theme
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4 u-fs-sm u-line-height-relaxed">
                Create and build a custom theme
              </p>
              <EnhancedCodeBlock
                code={`npx atomix create-theme my-theme
npx atomix build-theme my-theme --watch`}
                language="bash"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>

          <GridCol md={4} className="u-mb-4">
            <Card className="u-h-100" appearance="outlined" elevation="lg" variant="warning">
              <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                Generate Component
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4 u-fs-sm u-line-height-relaxed">
                Generate a new component with boilerplate
              </p>
              <EnhancedCodeBlock
                code="npx atomix generate component Button --typescript --story"
                language="bash"
                showLineNumbers={false}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>

      <Block spacing="md">
        <SectionIntro
          title="Command Reference"
          text="Complete reference for all CLI commands"
          alignment="center"
        />

        {/* atomix init */}
        <Card className="u-mt-6"  appearance="outlined" elevation="lg">
          <div className="u-d-flex u-align-items-center u-mb-4">
            <Icon name="Rocket" size={20} className="c-card__icon u-me-2" />
            <h2 className="u-fs-2xl u-fw-bold u-m-0 u-text-primary-emphasis">
              Atomix init
            </h2>
          </div>
          <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
            Interactive setup wizard for new projects
          </p>
          <EnhancedCodeBlock
            code="npx atomix init [options]"
            language="bash"
            showLineNumbers={false}
          />
          <div className="u-mt-4">
            <h4 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
              Options
            </h4>
            <ul className="u-text-secondary-emphasis u-line-height-relaxed">
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  --skip-install
                </code>{" "}
                - Skip automatic dependency installation
              </li>
            </ul>
            <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-3 u-text-primary-emphasis">
              Features
            </h4>
            <ul className="u-text-secondary-emphasis u-line-height-relaxed">
              <li>Project type selection (React, Next.js, Vanilla)</li>
              <li>Theme configuration</li>
              <li>Feature selection (TypeScript, Storybook, Testing)</li>
              <li>Automatic file generation</li>
              <li>Package.json script setup</li>
            </ul>
          </div>
        </Card>

        {/* atomix build-theme */}
        <Card className="u-mt-6" variant="success" appearance="outlined" elevation="lg">
          <div className="u-d-flex u-align-items-center u-mb-4">
            <Icon name="Palette" size={20} className="c-card__icon u-me-2" />
            <h2 className="u-fs-2xl u-fw-bold u-m-0 u-text-primary-emphasis">
              atomix build-theme
            </h2>
          </div>
          <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
            Build custom themes from SCSS
          </p>
          <EnhancedCodeBlock
            code="npx atomix build-theme <path> [options]"
            language="bash"
            showLineNumbers={false}
          />
          <div className="u-mt-4">
            <h4 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
              Arguments
            </h4>
            <ul className="u-text-secondary-emphasis u-line-height-relaxed">
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  &lt;path&gt;
                </code>{" "}
                - Path to theme directory or SCSS file
              </li>
            </ul>
            <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-3 u-text-primary-emphasis">
              Options
            </h4>
            <ul className="u-text-secondary-emphasis u-line-height-relaxed">
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  -o, --output &lt;path&gt;
                </code>{" "}
                - Output directory (default:{" "}
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  ./dist
                </code>
                )
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  -m, --minify
                </code>{" "}
                - Generate minified version (default: true)
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  -s, --sourcemap
                </code>{" "}
                - Generate source maps (default: false)
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  -w, --watch
                </code>{" "}
                - Watch for changes and rebuild
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  --analyze
                </code>{" "}
                - Analyze bundle size
              </li>
            </ul>
            <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-3 u-text-primary-emphasis">
              Examples
            </h4>
            <EnhancedCodeBlock
              code={`# Build a theme
npx atomix build-theme themes/custom

# Build with watch mode
npx atomix build-theme themes/custom --watch

# Build with analysis
npx atomix build-theme themes/custom --analyze`}
              language="bash"
              showLineNumbers={true}
            />
          </div>
        </Card>

        {/* atomix generate */}
        <Card className="u-mt-6" variant="warning" appearance="outlined" elevation="lg">
          <div className="u-d-flex u-align-items-center u-mb-4">
            <Icon name="Code" size={20} className="c-card__icon u-me-2" />
            <h2 className="u-fs-2xl u-fw-bold u-m-0 u-text-primary-emphasis">
              atomix generate (alias: g)
            </h2>
          </div>
          <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
            Generate design system components
          </p>
          <EnhancedCodeBlock
            code="npx atomix generate <type> <name> [options]"
            language="bash"
            showLineNumbers={false}
          />
          <div className="u-mt-4">
            <h4 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
              Arguments
            </h4>
            <ul className="u-text-secondary-emphasis u-line-height-relaxed">
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  &lt;type&gt;
                </code>{" "}
                - Type to generate (
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  component
                </code>
                ,{" "}
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  token
                </code>
                )
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  &lt;name&gt;
                </code>{" "}
                - Name in PascalCase
              </li>
            </ul>
            <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-3 u-text-primary-emphasis">
              Options
            </h4>
            <ul className="u-text-secondary-emphasis u-line-height-relaxed">
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  -t, --typescript
                </code>{" "}
                - Use TypeScript (default: true)
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  -s, --story
                </code>{" "}
                - Include Storybook story (default: true)
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  --test
                </code>{" "}
                - Include test file
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  --scss-module
                </code>{" "}
                - Use SCSS modules
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  --path &lt;path&gt;
                </code>{" "}
                - Custom output path (default:{" "}
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  ./src/components
                </code>
                )
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  -f, --force
                </code>{" "}
                - Overwrite existing files
              </li>
            </ul>
            <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-3 u-text-primary-emphasis">
              Examples
            </h4>
            <EnhancedCodeBlock
              code={`# Generate a component with all files
npx atomix generate component Button --typescript --story --test

# Short version
npx atomix g c Card --scss-module

# Custom path
npx atomix g component Header --path ./src/layouts`}
              language="bash"
              showLineNumbers={true}
            />
          </div>
        </Card>

        {/* atomix migrate */}
        <Card className="u-mt-6" variant="info" appearance="outlined" elevation="lg">
          <div className="u-d-flex u-align-items-center u-mb-4">
            <div className="c-card__icon u-me-2">
              <Icon name="ArrowRight" size={20} />
            </div>
            <h2 className="u-fs-2xl u-fw-bold u-m-0 u-text-primary-emphasis">
              Atomix migrate
            </h2>
          </div>
          <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
            Migrate from other CSS frameworks
          </p>
          <EnhancedCodeBlock
            code="npx atomix migrate <from> [options]"
            language="bash"
            showLineNumbers={false}
          />
          <div className="u-mt-4">
            <h4 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
              Arguments
            </h4>
            <ul className="u-text-secondary-emphasis u-line-height-relaxed">
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  &lt;from&gt;
                </code>{" "}
                - Framework to migrate from (
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  tailwind
                </code>
                ,{" "}
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  bootstrap
                </code>
                ,{" "}
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  scss-variables
                </code>
                )
              </li>
            </ul>
            <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-3 u-text-primary-emphasis">
              Options
            </h4>
            <ul className="u-text-secondary-emphasis u-line-height-relaxed">
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  -s, --source &lt;path&gt;
                </code>{" "}
                - Source directory (default:{" "}
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  ./src
                </code>
                )
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  --dry-run
                </code>{" "}
                - Preview changes without modifying files
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  --create-backup
                </code>{" "}
                - Create backup before migration (default: true)
              </li>
            </ul>
            <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-3 u-text-primary-emphasis">
              Examples
            </h4>
            <EnhancedCodeBlock
              code={`# Migrate from Tailwind
npx atomix migrate tailwind --source ./app

# Migrate from Bootstrap (dry run)
npx atomix migrate bootstrap --dry-run

# Migrate SCSS variables
npx atomix migrate scss-variables`}
              language="bash"
              showLineNumbers={true}
            />
          </div>
        </Card>

        {/* atomix tokens */}
        <Card className="u-mt-6" variant="secondary" appearance="outlined" elevation="lg">
          <div className="u-d-flex u-align-items-center u-mb-4">
            <Icon name="GridFour" size={20} className="c-card__icon u-me-2" />
            <h2 className="u-fs-2xl u-fw-bold u-m-0 u-text-primary-emphasis">
              atomix tokens
            </h2>
          </div>
          <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
            Manage design tokens
          </p>
          <EnhancedCodeBlock
            code="npx atomix tokens <action> [options]"
            language="bash"
            showLineNumbers={false}
          />
          <div className="u-mt-4">
            <h4 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
              Actions
            </h4>
            <ul className="u-text-secondary-emphasis u-line-height-relaxed">
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  list
                </code>{" "}
                (alias:{" "}
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  ls
                </code>
                ) - List all design tokens
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  validate
                </code>{" "}
                (alias:{" "}
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  check
                </code>
                ) - Validate token files
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  export
                </code>{" "}
                - Export tokens to various formats
              </li>
              <li>
                <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                  import
                </code>{" "}
                - Import tokens from file
              </li>
            </ul>
            <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-3 u-text-primary-emphasis">
              Examples
            </h4>
            <EnhancedCodeBlock
              code={`# List all tokens
npx atomix tokens list

# List specific category
npx atomix tokens list --category colors

# Validate tokens
npx atomix tokens validate

# Export tokens
npx atomix tokens export --format json --output tokens.json
npx atomix tokens export --format css --output tokens.css`}
              language="bash"
              showLineNumbers={true}
            />
          </div>
        </Card>

        {/* Additional Commands */}
        <Row className="u-mt-6">
          <GridCol md={6} className="u-mb-4">
            <Card className="u-h-100" appearance="outlined" elevation="lg" variant="primary" hoverable>
              <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                atomix dev
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4 u-fs-sm u-line-height-relaxed">
                Development mode with hot reload
              </p>
              <EnhancedCodeBlock
                code="npx atomix dev <theme> [options]"
                language="bash"
                showLineNumbers={false}
              />
            </Card>
          </GridCol>

          <GridCol md={6} className="u-mb-4">
            <Card className="u-h-100" appearance="outlined" elevation="lg" variant="success" hoverable>
              <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                atomix validate
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4 u-fs-sm u-line-height-relaxed">
                Validate themes and design tokens
              </p>
              <EnhancedCodeBlock
                code="npx atomix validate [target] [options]"
                language="bash"
                showLineNumbers={false}
              />
            </Card>
          </GridCol>

          <GridCol md={6} className="u-mb-4">
            <Card className="u-h-100" appearance="outlined" elevation="lg" variant="error" hoverable>
              <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                atomix create-theme
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4 u-fs-sm u-line-height-relaxed">
                Create a new theme from template
              </p>
              <EnhancedCodeBlock
                code="npx atomix create-theme <name> [options]"
                language="bash"
                showLineNumbers={false}
              />
            </Card>
          </GridCol>

          <GridCol md={6} className="u-mb-4">
            <Card className="u-h-100" appearance="outlined" elevation="lg" variant="info" hoverable>
              <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                atomix doctor
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4 u-fs-sm u-line-height-relaxed">
                Diagnose common issues
              </p>
              <EnhancedCodeBlock
                code="npx atomix doctor"
                language="bash"
                showLineNumbers={false}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>

      <Block spacing="md" background="secondary">
        <SectionIntro
          title="Configuration"
          text="Configure Atomix CLI with configuration files"
          alignment="center"
        />

        <Card className="u-mt-6" appearance="outlined" elevation="lg">
          <h3 className="u-fs-xl u-fw-semibold u-mb-4 u-text-primary-emphasis">
            Configuration File
          </h3>
          <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
            Create{" "}
            <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
              .atomixrc.json
            </code>{" "}
            or{" "}
            <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
              atomix.config.js
            </code>{" "}
            in your project root:
          </p>
          <EnhancedCodeBlock
            code={`{
  "theme": {
    "name": "custom",
    "outputDir": "./dist/themes",
    "minify": true,
    "sourceMaps": false
  },
  "components": {
    "style": "scss-module",
    "typescript": true,
    "stories": true,
    "tests": false
  }
}`}
            language="json"
            showLineNumbers={true}
          />
        </Card>
      </Block>

      <Block spacing="md">
        <SectionIntro
          title="Common Workflows"
          text="Real-world workflows for using the Atomix CLI"
          alignment="center"
        />

        <Row className="u-mt-6">
          <GridCol md={6} className="u-mb-4">
            <Card className="u-h-100" appearance="outlined" elevation="lg" variant="primary">
              <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                Starting a New Project
              </h3>
              <EnhancedCodeBlock
                code={`# 1. Initialize project
npx atomix init

# 2. Create custom theme
npx atomix create-theme my-brand

# 3. Build and watch
npx atomix dev my-brand`}
                language="bash"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>

          <GridCol md={6} className="u-mb-4">
            <Card className="u-h-100" appearance="outlined" elevation="lg" variant="primary">
              <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                Component Development
              </h3>
              <EnhancedCodeBlock
                code={`# 1. Generate component
npx atomix g component Card --typescript --story

# 2. Run Storybook
npm run storybook

# 3. Validate design tokens
npx atomix tokens validate`}
                language="bash"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>

      <Block spacing="md" background="brand">
        <Row justifyContent="center">
          <GridCol lg={8}>
            <Card className="u-p-8 u-text-center" appearance="outlined" elevation="lg" variant="primary">
              <h2 className="u-fs-3xl u-fw-bold u-mb-4 u-text-primary-emphasis">
                Need Help?
              </h2>
              <p className="u-text-secondary-emphasis u-mb-6 u-line-height-relaxed">
                If you encounter any issues or have questions about the CLI,
                check out our troubleshooting guide or reach out to the
                community.
              </p>
              <div className="u-d-flex u-gap-3 u-flex-wrap u-justify-content-center">
                <Button
                  icon={<Icon name="BookOpen" size={16} />}
                  label="View Full Documentation"
                  href="/docs/getting-started/installation"
                  LinkComponent={Link}
                />
                <Button
                  variant="outline-primary"
                  icon={<Icon name="GithubLogo" size={16} />}
                  label="GitHub Issues"
                  href="https://github.com/shohojdhara/atomix/issues"
                  target="_blank"
                />
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

CLIPage.displayName = "CLIPage";

export default CLIPage;

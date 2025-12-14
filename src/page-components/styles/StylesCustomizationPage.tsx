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
  Badge,
} from "@shohojdhara/atomix";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import styles from "@/styles/PageHero.module.scss";

interface CustomizationMethodProps {
  icon: string;
  title: string;
  description: string;
  complexity: "Low" | "Medium" | "High";
  code: string;
  color: string;
}

const MethodCard: FC<CustomizationMethodProps> = ({
  icon,
  title,
  description,
  complexity,
  code,
  color,
}) => {
  const complexityColors = {
    Low: "#22c55e",
    Medium: "#eab308",
    High: "#ef4444",
  };

  return (
    <Card
      className="u-p-6 u-h-100 u-border-left"
      style={{ borderLeftWidth: "4px", borderLeftColor: color }}
    >
      <div className="u-d-flex u-align-items-center u-gap-3 u-mb-3">
        <Icon name={icon as any} size={24} style={{ color }} />
        <h3 className="u-fs-xl u-fw-semibold u-m-0">{title}</h3>
      </div>
      <Badge
        variant="secondary"
        size="sm"
        className="u-mb-3"
        label={`${complexity} Complexity`}
        style={{
          backgroundColor: `${complexityColors[complexity]}20`,
          color: complexityColors[complexity],
        }}
      />
      <p className="u-text-secondary-emphasis u-mb-4">{description}</p>
      <EnhancedCodeBlock
        code={code}
        language={
          code.includes("@use") || code.includes("$")
            ? "scss"
            : code.includes(":root")
            ? "css"
            : "scss"
        }
        showLineNumbers={false}
      />
    </Card>
  );
};

const StylesCustomizationPage: FC = () => {
  const methods: CustomizationMethodProps[] = [
    {
      icon: "Settings",
      title: "Variable Override",
      description: "Override SCSS variables before importing Atomix",
      complexity: "Low",
      code: `$primary-6: #your-brand-color;\n$font-family-base: 'Your Font';\n\n@use 'atomix/styles' as *;`,
      color: "#3b82f6",
    },
    {
      icon: "Package",
      title: "@use Configuration",
      description: "Use SCSS @use with inline configuration",
      complexity: "Low",
      code: `@use 'atomix/styles' with (\n  $primary-6: #2563eb,\n  $font-family-base: 'Inter'\n);`,
      color: "#8b5cf6",
    },
    {
      icon: "Palette",
      title: "CSS Custom Properties",
      description: "Runtime theming with CSS variables",
      complexity: "Medium",
      code: `:root[data-theme="custom"] {\n  --atomix-primary: #brand;\n  --atomix-text-primary: #333;\n}`,
      color: "#ec4899",
    },
    {
      icon: "Code",
      title: "Custom Components",
      description: "Create new components following ITCSS",
      complexity: "Medium",
      code: `.c-my-component {\n  --my-bg: var(--atomix-bg);\n  background: var(--my-bg);\n}`,
      color: "#f97316",
    },
    {
      icon: "Layers",
      title: "Extend Utilities",
      description: "Add custom utility classes to the system",
      complexity: "Medium",
      code: `$custom-utilities: (\n  'aspect-ratio': (\n    values: (square: 1/1)\n  )\n);`,
      color: "#22c55e",
    },
    {
      icon: "Boxes",
      title: "Custom Build",
      description: "Import layers selectively for optimized builds",
      complexity: "High",
      code: `@use 'atomix/styles/01-settings';\n@use 'atomix/styles/06-components';\n// Skip unused layers`,
      color: "#ef4444",
    },
  ];

  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Styles Customization"
        text="Theming, brand integration, and extending Atomix"
        alignment="center"
      />

      <Block container={{ type: "fluid" }}>
        <SectionIntro
          title="Customization Philosophy"
          text="Atomix provides multiple levels of customization while maintaining system integrity and accessibility standards."
        />

        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-start u-gap-4">
                <Icon
                  name="Lightbulb"
                  size={32}
                  className="u-text-warning-emphasis"
                />
                <div>
                  <h3 className="u-fs-xl u-fw-semibold u-mb-3">
                    Design Principles
                  </h3>
                  <div className="u-d-flex u-flex-wrap u-gap-4">
                    <div className="u-d-flex u-align-items-center u-gap-2">
                      <Icon
                        name="Shield"
                        size={20}
                        className="u-text-success-emphasis"
                      />
                      <span className="u-fs-sm">Maintain System Integrity</span>
                    </div>
                    <div className="u-d-flex u-align-items-center u-gap-2">
                      <Icon
                        name="Triangle"
                        size={20}
                        className="u-text-info-emphasis"
                      />
                      <span className="u-fs-sm">Follow ITCSS</span>
                    </div>
                    <div className="u-d-flex u-align-items-center u-gap-2">
                      <Icon
                        name="Coins"
                        size={20}
                        className="u-text-warning-emphasis"
                      />
                      <span className="u-fs-sm">Use Design Tokens</span>
                    </div>
                    <div className="u-d-flex u-align-items-center u-gap-2">
                      <Icon
                        name="TrendUp"
                        size={20}
                        className="u-text-brand-emphasis"
                      />
                      <span className="u-fs-sm">Progressive Enhancement</span>
                    </div>
                    <div className="u-d-flex u-align-items-center u-gap-2">
                      <Icon
                        name="Eye"
                        size={20}
                        className="u-text-primary-emphasis"
                      />
                      <span className="u-fs-sm">Accessibility First</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Customization Levels</h2>
            <div className="u-overflow-x-auto">
              <table className="u-w-100" style={{ borderCollapse: "collapse" }}>
                <thead className="u-bg-tertiary-subtle">
                  <tr>
                    <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold">
                      Level
                    </th>
                    <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold">
                      Scope
                    </th>
                    <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold">
                      Complexity
                    </th>
                    <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold">
                      Use Case
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="u-border-b u-border-subtle">
                    <td className="u-p-3 u-fw-semibold">Configuration</td>
                    <td className="u-p-3 u-text-secondary-emphasis">
                      Variables only
                    </td>
                    <td className="u-p-3">
                      <Badge variant="success" size="sm" label="Low" />
                    </td>
                    <td className="u-p-3 u-text-secondary-emphasis">
                      Brand colors, spacing tweaks
                    </td>
                  </tr>
                  <tr className="u-border-b u-border-subtle">
                    <td className="u-p-3 u-fw-semibold">Theming</td>
                    <td className="u-p-3 u-text-secondary-emphasis">
                      CSS custom properties
                    </td>
                    <td className="u-p-3">
                      <Badge variant="warning" size="sm" label="Medium" />
                    </td>
                    <td className="u-p-3 u-text-secondary-emphasis">
                      Runtime theme switching
                    </td>
                  </tr>
                  <tr className="u-border-b u-border-subtle">
                    <td className="u-p-3 u-fw-semibold">Extension</td>
                    <td className="u-p-3 u-text-secondary-emphasis">
                      New components/utilities
                    </td>
                    <td className="u-p-3">
                      <Badge variant="warning" size="sm" label="Medium-High" />
                    </td>
                    <td className="u-p-3 u-text-secondary-emphasis">
                      Additional functionality
                    </td>
                  </tr>
                  <tr>
                    <td className="u-p-3 u-fw-semibold">Architecture</td>
                    <td className="u-p-3 u-text-secondary-emphasis">
                      System structure
                    </td>
                    <td className="u-p-3">
                      <Badge variant="error" size="sm" label="High" />
                    </td>
                    <td className="u-p-3 u-text-secondary-emphasis">
                      Major modifications
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Configuration Methods</h2>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          {methods.map((method, idx) => (
            <GridCol key={idx} md={6} lg={4} className="u-mb-4">
              <MethodCard {...method} />
            </GridCol>
          ))}
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Brand Integration</h2>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="Palette"
                  size={24}
                  className="u-text-primary-emphasis"
                />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">Brand Colors</h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-3">
                Create brand color scales and override Atomix defaults:
              </p>
              <div className="u-bg-tertiary-subtle u-p-3 u-rounded">
                <pre
                  className="u-m-0 u-fs-sm"
                  style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                >
                  {`$brand-primary: #your-color;

@use 'atomix/styles' with (
  $primary-6: $brand-primary,
  $primary-7: shade($brand-primary, 20%)
);`}
                </pre>
              </div>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="TextT"
                  size={24}
                  className="u-text-brand-emphasis"
                />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">Typography</h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-3">
                Integrate your brand fonts and type scale:
              </p>
              <div className="u-bg-tertiary-subtle u-p-3 u-rounded">
                <pre
                  className="u-m-0 u-fs-sm"
                  style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                >
                  {`@use 'atomix/styles' with (
  $font-family-base: ('Your Font', sans-serif),
  $font-size-base: 1rem
);`}
                </pre>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-p-6 u-bg-info-subtle">
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="Lightning"
                  size={24}
                  className="u-text-info-emphasis"
                />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">
                  Runtime Theme Switching
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4">
                Switch themes dynamically without rebuilding CSS:
              </p>
              <div className="u-bg-tertiary-subtle u-p-4 u-rounded">
                <pre
                  className="u-m-0 u-fs-sm"
                  style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                >
                  {`// JavaScript theme switching
document.documentElement.setAttribute('data-theme', 'dark');

// CSS theme definition
:root[data-theme="dark"] {
  --atomix-primary: #7c3aed;
  --atomix-text-primary: #fff;
  --atomix-bg-primary: #1a1a1a;
}`}
                </pre>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

StylesCustomizationPage.displayName = "StylesCustomizationPage";

export default StylesCustomizationPage;

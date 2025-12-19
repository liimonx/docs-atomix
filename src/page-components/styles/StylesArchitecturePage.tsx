'use client';

import { FC } from 'react';
import {
  Hero,
  Card,
  Grid,
  GridCol,
  Block,
  Icon,
  Badge,
  SectionIntro,
} from "@shohojdhara/atomix";
import styles from '@/styles/PageHero.module.scss';
import pageStyles from './StylesArchitecturePage.module.scss';

interface LayerCardProps {
  number: string;
  title: string;
  description: string;
  output: string;
  specificity: string;
  examples: string[];
  color: string;
}

const LayerCard: FC<LayerCardProps> = ({
  number,
  title,
  description,
  output,
  specificity,
  examples,
  color,
}) => {
  // Map hex colors to CSS class names
  const colorToClass: Record<string, string> = {
    "#ef4444": "red",
    "#f97316": "orange",
    "#eab308": "yellow",
    "#22c55e": "green",
    "#3b82f6": "blue",
    "#8b5cf6": "purple",
    "#ec4899": "pink",
  };

  const colorClass = colorToClass[color] || "blue";

  return (
    <Card
      className={`${pageStyles.stylesArchitecturePage__layerCard} ${pageStyles[`stylesArchitecturePage__layerCard--${colorClass}`]}`}
    >
      <div className="u-d-flex u-align-items-center u-gap-3 u-mb-3">
        <div
          className={`u-d-flex u-align-items-center u-justify-content-center u-fw-bold u-fs-lg ${pageStyles.stylesArchitecturePage__layerNumberBadge} ${pageStyles[`stylesArchitecturePage__layerNumberBadge--${colorClass}`]}`}
        >
          {number}
        </div>
        <h3 className="u-fs-xl u-fw-semibold u-m-0">{title}</h3>
      </div>
      <p className="u-text-secondary-emphasis u-mb-4">{description}</p>
      <div className="u-d-flex u-flex-wrap u-gap-2 u-mb-3">
        <Badge variant="secondary" size="sm" label={`Output: ${output}`} />
        <Badge
          variant="secondary"
          size="sm"
          label={`Specificity: ${specificity}`}
        />
      </div>
      <div className="u-bg-tertiary-subtle u-p-3 u-rounded u-fs-sm">
        <p className="u-m-0 u-mb-2 u-fw-medium u-text-secondary-emphasis">
          Examples:
        </p>
        {examples.map((example, idx) => (
          <code
            key={idx}
            className={`u-d-block u-mb-1 ${pageStyles.stylesArchitecturePage__codeExample}`}
          >
            {example}
          </code>
        ))}
      </div>
    </Card>
  );
};

const StylesArchitecturePage: FC = () => {
  const layers: LayerCardProps[] = [
    {
      number: "01",
      title: "Settings",
      description:
        "Global variables, colors, and configuration. Foundation for the entire system.",
      output: "None",
      specificity: "N/A",
      examples: [
        "$primary: #7c3aed;",
        "$spacing-4: 1rem;",
        "$breakpoint-md: 768px;",
      ],
      color: "#ef4444",
    },
    {
      number: "02",
      title: "Tools",
      description:
        "Mixins, functions, and utilities for generating CSS dynamically.",
      output: "None",
      specificity: "N/A",
      examples: [
        "@mixin media-up($bp) {...}",
        "@function spacing($size) {...}",
      ],
      color: "#f97316",
    },
    {
      number: "03",
      title: "Generic",
      description:
        "Far-reaching, low-specificity styles like resets and normalize.",
      output: "CSS",
      specificity: "Very Low",
      examples: [
        "* { box-sizing: border-box; }",
        ":root { --atomix-primary: ... }",
      ],
      color: "#eab308",
    },
    {
      number: "04",
      title: "Elements",
      description: "Base styling for bare HTML elements without classes.",
      output: "CSS",
      specificity: "Low",
      examples: ["body { font-family: ... }", "h1 { font-size: 2rem; }"],
      color: "#22c55e",
    },
    {
      number: "05",
      title: "Objects",
      description: "Layout patterns and structural components (OOCSS).",
      output: "CSS",
      specificity: "Medium",
      examples: [".o-container { ... }", ".o-grid { display: grid; }"],
      color: "#3b82f6",
    },
    {
      number: "06",
      title: "Components",
      description: "Specific UI components with modifiers and variants.",
      output: "CSS",
      specificity: "High",
      examples: [".c-btn { ... }", ".c-card__header { ... }"],
      color: "#8b5cf6",
    },
    {
      number: "99",
      title: "Utilities",
      description: "Single-purpose helper classes with highest specificity.",
      output: "CSS",
      specificity: "Highest",
      examples: [
        ".u-m-4 { margin: 1rem !important; }",
        ".u-text-center { ... }",
      ],
      color: "#ec4899",
    },
  ];

  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Styles Architecture"
        text="ITCSS methodology for scalable, maintainable CSS"
        alignment="center"
      />

      <Block container={{ type: "fluid" }}>
        <Card>
          <div className="u-d-flex u-align-items-start u-gap-4">
            <Icon name="Stack" size={32} className="u-text-primary-emphasis" />
            <div>
              <h3 className="u-fs-xl u-fw-semibold u-mb-3">
                The Inverted Triangle
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                ITCSS organizes CSS in order of specificity and reach, creating
                a predictable cascade:
              </p>
              <div className="u-d-flex u-flex-wrap u-gap-3">
                <div className="u-d-flex u-align-items-center u-gap-2">
                  <Icon
                    name="TrendUp"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <span className="u-fs-sm">
                    Specificity increases downward
                  </span>
                </div>
                <div className="u-d-flex u-align-items-center u-gap-2">
                  <Icon
                    name="TrendDown"
                    size={20}
                    className="u-text-info-emphasis"
                  />
                  <span className="u-fs-sm">Reach decreases downward</span>
                </div>
                <div className="u-d-flex u-align-items-center u-gap-2">
                  <Icon
                    name="Target"
                    size={20}
                    className="u-text-warning-emphasis"
                  />
                  <span className="u-fs-sm">
                    Explicitness increases downward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <SectionIntro
          title="Layer Structure"
          text="Each layer serves a specific purpose in the architecture:"
        />

        <Grid>
          {layers.map((layer, idx) => (
            <GridCol key={idx} md={6} lg={4} className="u-mt-4">
              <LayerCard {...layer} />
            </GridCol>
          ))}
        </Grid>

        <Grid className="u-mt-8">
          <GridCol md={6}>
            <Card className={pageStyles.stylesArchitecturePage__infoCard}>
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="CheckCircle"
                  size={24}
                  className="u-text-success-emphasis"
                />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">Benefits</h3>
              </div>
              <ul className="u-list-none u-d-flex u-flex-column u-gap-3">
                <li className="u-d-flex u-gap-2">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <span className="u-text-secondary-emphasis">
                    Predictable cascade behavior
                  </span>
                </li>
                <li className="u-d-flex u-gap-2">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <span className="u-text-secondary-emphasis">
                    Reduced specificity conflicts
                  </span>
                </li>
                <li className="u-d-flex u-gap-2">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <span className="u-text-secondary-emphasis">
                    Improved code reusability
                  </span>
                </li>
                <li className="u-d-flex u-gap-2">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <span className="u-text-secondary-emphasis">
                    Scalable architecture
                  </span>
                </li>
                <li className="u-d-flex u-gap-2">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <span className="u-text-secondary-emphasis">
                    Easier maintenance
                  </span>
                </li>
              </ul>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className={pageStyles.stylesArchitecturePage__infoCard}>
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="Code"
                  size={24}
                  className="u-text-primary-emphasis"
                />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">Modern Features</h3>
              </div>
              <ul className="u-list-none u-d-flex u-flex-column u-gap-3">
                <li className="u-d-flex u-gap-2">
                  <Icon
                    name="Lightning"
                    size={20}
                    className="u-text-warning-emphasis"
                  />
                  <span className="u-text-secondary-emphasis">
                    SCSS @use and @forward
                  </span>
                </li>
                <li className="u-d-flex u-gap-2">
                  <Icon
                    name="Lightning"
                    size={20}
                    className="u-text-warning-emphasis"
                  />
                  <span className="u-text-secondary-emphasis">
                    CSS custom properties
                  </span>
                </li>
                <li className="u-d-flex u-gap-2">
                  <Icon
                    name="Lightning"
                    size={20}
                    className="u-text-warning-emphasis"
                  />
                  <span className="u-text-secondary-emphasis">
                    Runtime theming support
                  </span>
                </li>
                <li className="u-d-flex u-gap-2">
                  <Icon
                    name="Lightning"
                    size={20}
                    className="u-text-warning-emphasis"
                  />
                  <span className="u-text-secondary-emphasis">
                    Dark mode integration
                  </span>
                </li>
                <li className="u-d-flex u-gap-2">
                  <Icon
                    name="Lightning"
                    size={20}
                    className="u-text-warning-emphasis"
                  />
                  <span className="u-text-secondary-emphasis">
                    Utility API generator
                  </span>
                </li>
              </ul>
            </Card>
          </GridCol>
        </Grid>

        <Grid className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">File Organization</h2>
          </GridCol>
        </Grid>

        <Grid>
          <GridCol md={6}>
            <Card className={pageStyles.stylesArchitecturePage__infoCard}>
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="FileText"
                  size={24}
                  className="u-text-info-emphasis"
                />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">
                  Naming Conventions
                </h3>
              </div>
              <div className="u-d-flex u-flex-column u-gap-2">
                <code
                  className={`u-d-block u-p-2 u-bg-tertiary-subtle u-rounded u-fs-sm ${pageStyles.stylesArchitecturePage__codeExample}`}
                >
                  _settings.{"{feature}"}.scss
                </code>
                <code
                  className={`u-d-block u-p-2 u-bg-tertiary-subtle u-rounded u-fs-sm ${pageStyles.stylesArchitecturePage__codeExample}`}
                >
                  _tools.{"{feature}"}.scss
                </code>
                <code
                  className={`u-d-block u-p-2 u-bg-tertiary-subtle u-rounded u-fs-sm ${pageStyles.stylesArchitecturePage__codeExample}`}
                >
                  _components.{"{feature}"}.scss
                </code>
                <code
                  className={`u-d-block u-p-2 u-bg-tertiary-subtle u-rounded u-fs-sm ${pageStyles.stylesArchitecturePage__codeExample}`}
                >
                  _utilities.{"{feature}"}.scss
                </code>
              </div>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className={pageStyles.stylesArchitecturePage__infoCard}>
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="Package"
                  size={24}
                  className="u-text-brand-emphasis"
                />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">Modern SCSS</h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-3">
                Using @use and @forward for better module system:
              </p>
              <div className="u-bg-tertiary-subtle u-p-3 u-rounded">
                <pre
                  className={`u-m-0 u-fs-sm ${pageStyles.stylesArchitecturePage__codeExample}`}
                >
                  {`@use '../01-settings/colors';
@use '../02-tools/breakpoints';

@forward './settings.colors';`}
                </pre>
              </div>
            </Card>
          </GridCol>
        </Grid>

        <Grid className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Best Practices</h2>
          </GridCol>
        </Grid>

        <Grid>
          <GridCol md={6}>
            <Card
              style={{
                borderLeft: "4px solid #22c55e",
                padding: "1.5rem",
                height: "100%",
              }}
            >
              <div className="u-d-flex u-align-items-center u-gap-2 u-mb-3">
                <Icon
                  name="ThumbsUp"
                  size={20}
                  className="u-text-success-emphasis"
                />
                <h4 className="u-fs-lg u-fw-semibold u-m-0">Do</h4>
              </div>
              <ul className="u-list-none u-d-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis u-fs-sm">
                  ✓ Follow the specificity order
                </li>
                <li className="u-text-secondary-emphasis u-fs-sm">
                  ✓ Use semantic naming
                </li>
                <li className="u-text-secondary-emphasis u-fs-sm">
                  ✓ Leverage CSS custom properties
                </li>
                <li className="u-text-secondary-emphasis u-fs-sm">
                  ✓ Keep components isolated
                </li>
                <li className="u-text-secondary-emphasis u-fs-sm">
                  ✓ Limit nesting to 3 levels
                </li>
              </ul>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card
              style={{
                borderLeft: "4px solid #ef4444",
                padding: "1.5rem",
                height: "100%",
              }}
            >
              <div className="u-d-flex u-align-items-center u-gap-2 u-mb-3">
                <Icon
                  name="ThumbsDown"
                  size={20}
                  className="u-text-error-emphasis"
                />
                <h4 className="u-fs-lg u-fw-semibold u-m-0">Don't</h4>
              </div>
              <ul className="u-list-none u-d-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis u-fs-sm">
                  ✗ Break specificity order
                </li>
                <li className="u-text-secondary-emphasis u-fs-sm">
                  ✗ Use IDs in CSS
                </li>
                <li className="u-text-secondary-emphasis u-fs-sm">
                  ✗ Hard-code values
                </li>
                <li className="u-text-secondary-emphasis u-fs-sm">
                  ✗ Scatter component styles
                </li>
                <li className="u-text-secondary-emphasis u-fs-sm">
                  ✗ Deep nesting (4+ levels)
                </li>
              </ul>
            </Card>
          </GridCol>
        </Grid>

        <Grid className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-bg-primary-subtle" style={{ padding: "1.5rem" }}>
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="BookOpen"
                  size={24}
                  className="u-text-primary-emphasis"
                />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">Getting Started</h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4">
                Import Atomix styles and start building with a solid
                architectural foundation:
              </p>
              <div className="u-bg-tertiary-subtle u-p-4 u-rounded u-mb-4">
                <pre
                  className={`u-m-0 u-fs-sm ${pageStyles.stylesArchitecturePage__codeExample}`}
                >
                  {`// Import everything
@use 'atomix/styles' as *;

// Or customize variables
@use 'atomix/styles' with (
  $primary: #your-brand-color,
  $font-family-base: 'Your Font'
);

// Extend with custom components
.c-your-component {
  color: var(--atomix-text-primary);
  padding: var(--atomix-spacing-4);
}`}
                </pre>
              </div>
            </Card>
          </GridCol>
        </Grid>
      </Block>
    </div>
  );
};

StylesArchitecturePage.displayName = 'StylesArchitecturePage';

export default StylesArchitecturePage;

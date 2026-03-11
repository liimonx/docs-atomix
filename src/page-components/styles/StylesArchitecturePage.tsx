"use client";

import { FC } from "react";
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
import styles from "@/styles/PageHero.module.scss";
import pageStyles from "./StylesArchitecturePage.module.scss";

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
      glass
      className={`${pageStyles.stylesArchitecturePage__layerCard} ${
        pageStyles[`stylesArchitecturePage__layerCard--${colorClass}`]
      }`}
    >
      <div className="u-flex u-items-center u-gap-3 u-mb-3">
        <div
          className={`u-flex u-items-center u-justify-center u-font-bold u-text-lg ${
            pageStyles.stylesArchitecturePage__layerNumberBadge
          } ${
            pageStyles[
              `stylesArchitecturePage__layerNumberBadge--${colorClass}`
            ]
          }`}
        >
          {number}
        </div>
        <h3 className="u-text-xl u-font-semibold u-m-0">{title}</h3>
      </div>
      <p className="u-text-secondary-emphasis-emphasis u-mb-4">{description}</p>
      <div className="u-flex u-flex-wrap u-gap-2 u-mb-3">
        <Badge variant="secondary" size="sm" label={`Output: ${output}`} />
        <Badge
          variant="secondary"
          size="sm"
          label={`Specificity: ${specificity}`}
        />
      </div>
      <div className="u-bg-tertiary-subtle u-p-3 u-rounded u-text-sm">
        <p className="u-m-0 u-mb-2 u-font-medium u-text-secondary-emphasis-emphasis">
          Examples:
        </p>
        {examples.map((example, idx) => (
          <code
            key={idx}
            className={`u-block u-mb-1 ${pageStyles.stylesArchitecturePage__codeExample}`}
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
        title="Styles Architecture"
        text="A robust architectural foundation built upon ITCSS, OOCSS, and modern SCSS practices."
        alignment="center"
      />

      <Block>
        <SectionIntro
          title="The Inverted Triangle"
          text="Atomix follows the ITCSS (Inverted Triangle CSS) methodology to maintain a predictable cascade and minimize specificity conflicts."
        />

        <Card glass className="u-mb-8">
          <Grid>
            <GridCol md={6}>
              <div className="u-p-4">
                <h3 className="u-text-xl u-font-semibold u-mb-3">
                  Core Principles
                </h3>
                <p className="u-text-secondary-emphasis-emphasis u-mb-4 u-fs-lg">
                  By organizing CSS from far-reaching, low-specificity styles to
                  specific, high-specificity utilities, we eliminate the need
                  for `!important` and reduce regression risks.
                </p>
                <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-4">
                  <li className="u-flex u-items-start u-gap-3">
                    <div className="u-bg-success-subtle u-p-2 u-rounded">
                      <Icon
                        name="TrendUp"
                        size={24}
                        className="u-text-success"
                      />
                    </div>
                    <div>
                      <h4 className="u-text-md u-font-bold u-m-0">
                        Increasing Specificity
                      </h4>
                      <p className="u-text-sm u-text-secondary-emphasis-emphasis u-m-0">
                        Styles become more targeted as you move down the layers.
                      </p>
                    </div>
                  </li>
                  <li className="u-flex u-items-start u-gap-3">
                    <div className="u-bg-info-subtle u-p-2 u-rounded">
                      <Icon
                        name="TrendDown"
                        size={24}
                        className="u-text-info"
                      />
                    </div>
                    <div>
                      <h4 className="u-text-md u-font-bold u-m-0">
                        Decreasing Reach
                      </h4>
                      <p className="u-text-sm u-text-secondary-emphasis-emphasis u-m-0">
                        Base styles affect many elements; utilities affect only
                        one.
                      </p>
                    </div>
                  </li>
                  <li className="u-flex u-items-start u-gap-3">
                    <div className="u-bg-warning-subtle u-p-2 u-rounded">
                      <Icon
                        name="Target"
                        size={24}
                        className="u-text-warning"
                      />
                    </div>
                    <div>
                      <h4 className="u-text-md u-font-bold u-m-0">
                        Explicit Control
                      </h4>
                      <p className="u-text-sm u-text-secondary-emphasis-emphasis u-m-0">
                        Logic moves from abstract patterns to concrete
                        implementations.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </GridCol>
            <GridCol md={6} className="u-flex u-items-center u-justify-center">
              <div className="u-p-6 u-w-100 u-relative">
                {/* Premium Triangle Visualization */}
                <div className="u-flex u-flex-column u-items-center u-gap-1 u-relative u-z-1">
                  {[...layers].map((layer, i) => (
                    <div
                      key={i}
                      className={`u-p-2 u-text-center u-rounded u-font-bold u-fs-xs  ${pageStyles.stylesArchitecturePage__triangleLayer}`}
                      style={
                        {
                          width: `${100 - i * 12}%`,
                          backgroundColor: layer.color,
                          opacity: 1 - i * 0.05,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        } as React.CSSProperties
                      }
                    >
                      {layer.title}
                    </div>
                  ))}
                </div>
                {/* Decorative Triangle Background */}
                <div
                  className="u-absolute u-top-0 u-left-0 u-w-100 u-h-100 u-opacity-10"
                  style={{
                    background:
                      "linear-gradient(to bottom right, var(--atomix-primary), transparent)",
                    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                    zIndex: 0,
                  }}
                />
              </div>
            </GridCol>
          </Grid>
        </Card>

        <SectionIntro
          title="Tokens-to-Styles Workflow"
          text="How design decisions flow from abstract tokens into concrete component styles."
          className="u-mt-10"
        />

        <Card glass className="u-p-6 u-mb-8">
          <div className="u-flex u-flex-column u-flex-md-row u-items-center u-justify-between u-gap-6">
            <div className="u-text-center">
              <div
                className={`${pageStyles.stylesArchitecturePage__iconWrapper} ${pageStyles["stylesArchitecturePage__iconWrapper--primary"]} u-mx-auto`}
              >
                <Icon name="Palette" size={32} className="u-text-primary" />
              </div>
              <h4 className="u-font-bold u-m-0">1. Define</h4>
              <p className="u-text-xs u-text-secondary-emphasis-emphasis">
                Design Tokens in Figma
              </p>
            </div>
            <Icon
              name="ArrowRight"
              size={24}
              className="u-text-secondary-emphasis u-none u-block-md"
            />
            <Icon
              name="ArrowDown"
              size={24}
              className="u-text-secondary-emphasis u-block u-none-md"
            />
            <div className="u-text-center">
              <div
                className={`${pageStyles.stylesArchitecturePage__iconWrapper} ${pageStyles["stylesArchitecturePage__iconWrapper--info"]} u-mx-auto`}
              >
                <Icon name="BracketsCurly" size={32} className="u-text-info" />
              </div>
              <h4 className="u-font-bold u-m-0">2. Export</h4>
              <p className="u-text-xs u-text-secondary-emphasis-emphasis">
                Standardized JSON Data
              </p>
            </div>
            <Icon
              name="ArrowRight"
              size={24}
              className="u-text-secondary-emphasis u-none u-block-md"
            />
            <Icon
              name="ArrowDown"
              size={24}
              className="u-text-secondary-emphasis u-block u-none-md"
            />
            <div className="u-text-center">
              <div
                className={`${pageStyles.stylesArchitecturePage__iconWrapper} ${pageStyles["stylesArchitecturePage__iconWrapper--warning"]} u-mx-auto`}
              >
                <Icon name="Lightning" size={32} className="u-text-warning" />
              </div>
              <h4 className="u-font-bold u-m-0">3. Transform</h4>
              <p className="u-text-xs u-text-secondary-emphasis-emphasis">
                SCSS & CSS Variables
              </p>
            </div>
            <Icon
              name="ArrowRight"
              size={24}
              className="u-text-secondary-emphasis u-none u-block-md"
            />
            <Icon
              name="ArrowDown"
              size={24}
              className="u-text-secondary-emphasis u-block u-none-md"
            />
            <div className="u-text-center">
              <div
                className={`${pageStyles.stylesArchitecturePage__iconWrapper} ${pageStyles["stylesArchitecturePage__iconWrapper--success"]} u-mx-auto`}
              >
                <Icon name="Monitor" size={32} className="u-text-success" />
              </div>
              <h4 className="u-font-bold u-m-0">4. Apply</h4>
              <p className="u-text-xs u-text-secondary-emphasis-emphasis">
                Premium UI Components
              </p>
            </div>
          </div>
        </Card>

        <SectionIntro
          title="Layer Breakdown"
          text="Every line of CSS in Atomix belongs to one of these seven layers, ensuring a lean and maintainable codebase."
          className="u-mt-10"
        />

        <Grid>
          {layers.map((layer, idx) => (
            <GridCol key={idx} md={6} lg={4} className="u-mt-4">
              <LayerCard {...layer} />
            </GridCol>
          ))}
        </Grid>

        <SectionIntro
          title="Atomic Design Integration"
          text="How we map UI components to Atomic Design principles for better modularity."
          className="u-mt-10"
        />

        <Grid>
          <GridCol md={4}>
            <Card glass className="u-h-100">
              <div
                className={`${pageStyles.stylesArchitecturePage__iconWrapper} ${pageStyles["stylesArchitecturePage__iconWrapper--primary"]}`}
              >
                <Icon name="Atom" size={32} className="u-text-primary" />
              </div>
              <h3 className="u-text-xl u-font-bold u-mb-2">Atoms</h3>
              <p className="u-text-secondary-emphasis-emphasis">
                Basic building blocks: Buttons, Inputs, Badges, and Icons. They
                cannot be broken down further without losing functionality.
              </p>
            </Card>
          </GridCol>
          <GridCol md={4}>
            <Card glass className="u-h-100">
              <div
                className={`${pageStyles.stylesArchitecturePage__iconWrapper} ${pageStyles["stylesArchitecturePage__iconWrapper--success"]}`}
              >
                <Icon name="Tree" size={32} className="u-text-success" />
              </div>
              <h3 className="u-text-xl u-font-bold u-mb-2">Molecules</h3>
              <p className="u-text-secondary-emphasis-emphasis">
                Groups of atoms bonded together: Form groups, Search bars, and
                Card headers. They perform simple, specific tasks.
              </p>
            </Card>
          </GridCol>
          <GridCol md={4}>
            <Card glass className="u-h-100">
              <div
                className={`${pageStyles.stylesArchitecturePage__iconWrapper} ${pageStyles["stylesArchitecturePage__iconWrapper--warning"]}`}
              >
                <Icon name="Cube" size={32} className="u-text-warning" />
              </div>
              <h3 className="u-text-xl u-font-bold u-mb-2">Organisms</h3>
              <p className="u-text-secondary-emphasis-emphasis">
                Complex UI components: Navigation bars, Data tables, and Modals.
                They represent distinct sections of an interface.
              </p>
            </Card>
          </GridCol>
        </Grid>

        <Grid className="u-mt-10">
          <GridCol md={6}>
            <Card glass className={pageStyles.stylesArchitecturePage__infoCard}>
              <div className="u-flex u-items-center u-gap-3 u-mb-4">
                <Icon name="CheckCircle" size={32} className="u-text-success" />
                <h3 className="u-text-xl u-font-semibold u-m-0">
                  Technical Benefits
                </h3>
              </div>
              <ul className="u-list-none u-flex u-flex-column u-gap-4 u-p-0">
                <li className="u-flex u-gap-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success u-mt-1"
                  />
                  <div>
                    <strong className="u-block">Cascade Predictability</strong>
                    <span className="u-text-sm u-text-secondary-emphasis-emphasis">
                      Styles are applied in a logical order, reducing unexpected
                      overrides.
                    </span>
                  </div>
                </li>
                <li className="u-flex u-gap-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success u-mt-1"
                  />
                  <div>
                    <strong className="u-block">Zero Specificity Wars</strong>
                    <span className="u-text-sm u-text-secondary-emphasis-emphasis">
                      Eliminates the need for deep nesting and `!important`
                      flags.
                    </span>
                  </div>
                </li>
                <li className="u-flex u-gap-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success u-mt-1"
                  />
                  <div>
                    <strong className="u-block">Performance Optimized</strong>
                    <span className="u-text-sm u-text-secondary-emphasis-emphasis">
                      Smaller CSS payloads and faster browser rendering times.
                    </span>
                  </div>
                </li>
              </ul>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card glass className={pageStyles.stylesArchitecturePage__infoCard}>
              <div className="u-flex u-items-center u-gap-3 u-mb-4">
                <Icon name="Lightning" size={32} className="u-text-warning" />
                <h3 className="u-text-xl u-font-semibold u-m-0">
                  Modern Capabilities
                </h3>
              </div>
              <ul className="u-list-none u-flex u-flex-column u-gap-4 u-p-0">
                <li className="u-flex u-gap-3">
                  <Icon
                    name="Code"
                    size={20}
                    className="u-text-warning u-mt-1"
                  />
                  <div>
                    <strong className="u-block">SCSS Module System</strong>
                    <span className="u-text-sm u-text-secondary-emphasis-emphasis">
                      Using `@use` and `@forward` for encapsulated styling.
                    </span>
                  </div>
                </li>
                <li className="u-flex u-gap-3">
                  <Icon
                    name="Palette"
                    size={20}
                    className="u-text-warning u-mt-1"
                  />
                  <div>
                    <strong className="u-block">Dynamic Theming</strong>
                    <span className="u-text-sm u-text-secondary-emphasis-emphasis">
                      Leveraging CSS Custom Properties for runtime theme
                      switching.
                    </span>
                  </div>
                </li>
                <li className="u-flex u-gap-3">
                  <Icon
                    name="Moon"
                    size={20}
                    className="u-text-warning u-mt-1"
                  />
                  <div>
                    <strong className="u-block">Native Dark Mode</strong>
                    <span className="u-text-sm u-text-secondary-emphasis-emphasis">
                      Built-in support for light and dark color schemes.
                    </span>
                  </div>
                </li>
              </ul>
            </Card>
          </GridCol>
        </Grid>

        <SectionIntro
          title="Theming & Customization"
          text="Atomix is designed to be fully rebranded without touching the core library styles."
          className="u-mt-10"
        />

        <Grid>
          <GridCol md={7}>
            <Card glass className="u-p-6">
              <h3 className="u-text-lg u-font-bold u-mb-3">
                SCSS Customization
              </h3>
              <p className="u-text-secondary-emphasis-emphasis u-mb-4">
                Override system variables at compile-time to change colors,
                typography, or spacing globally.
              </p>
              <div className="u-bg-tertiary-subtle u-p-4 u-rounded">
                <pre
                  className={`u-m-0 u-text-sm ${pageStyles.stylesArchitecturePage__codeExample}`}
                >
                  {`// main.scss
@use 'atomix/styles' with (
  $primary: #6366f1,
  $border-radius-base: 0.5rem,
  $font-family-base: ('Inter', sans-serif)
);`}
                </pre>
              </div>
            </Card>
          </GridCol>
          <GridCol md={5}>
            <Card glass className="u-p-6">
              <h3 className="u-text-lg u-font-bold u-mb-3">
                Runtime Overrides
              </h3>
              <p className="u-text-secondary-emphasis-emphasis u-mb-4">
                Use CSS variables for dynamic changes like branding or dashboard
                colors.
              </p>
              <div className="u-bg-tertiary-subtle u-p-4 u-rounded">
                <pre
                  className={`u-m-0 u-text-sm ${pageStyles.stylesArchitecturePage__codeExample}`}
                >
                  {`:root {
  --atomix-primary: #f59e0b;
  --atomix-surface: #ffffff;
}

[data-theme='dark'] {
  --atomix-surface: #0f172a;
}`}
                </pre>
              </div>
            </Card>
          </GridCol>
        </Grid>

        <SectionIntro
          title="File Organization"
          text="Following a strict directory structure for maximum scalability."
          className="u-mt-10"
        />

        <Grid>
          <GridCol md={6}>
            <Card glass className={pageStyles.stylesArchitecturePage__infoCard}>
              <div className="u-flex u-items-center u-gap-3 u-mb-4">
                <Icon name="Folder" size={32} className="u-text-info" />
                <h3 className="u-text-xl u-font-semibold u-m-0">
                  Directory Structure
                </h3>
              </div>
              <div className="u-flex u-flex-column u-gap-2">
                {[
                  "01-settings/ (Vars, Maps)",
                  "02-tools/ (Mixins, Functions)",
                  "03-generic/ (Reset, Normalize)",
                  "04-elements/ (Base tags)",
                  "05-objects/ (Grid, Layout)",
                  "06-components/ (Component UI)",
                  "99-utilities/ (Helper classes)",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="u-flex u-items-center u-gap-2 u-p-2 u-bg-tertiary-subtle u-rounded u-text-sm"
                  >
                    <Icon
                      name="CaretRight"
                      size={14}
                      className="u-text-secondary-emphasis"
                    />
                    <code
                      className={pageStyles.stylesArchitecturePage__codeExample}
                    >
                      {item}
                    </code>
                  </div>
                ))}
              </div>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card glass className={pageStyles.stylesArchitecturePage__infoCard}>
              <div className="u-flex u-items-center u-gap-3 u-mb-4">
                <Icon name="FileCode" size={32} className="u-text-primary" />
                <h3 className="u-text-xl u-font-semibold u-m-0">
                  Naming Conventions
                </h3>
              </div>
              <p className="u-text-secondary-emphasis-emphasis u-mb-3">
                We use strict prefixes to distinguish between architectural
                layers:
              </p>
              <div className="u-flex u-flex-column u-gap-3">
                <div className="u-p-2 u-border-start u-border-primary u-border-3 u-ps-3">
                  <code className="u-block u-font-bold">.o-*</code>
                  <span className="u-text-xs u-text-secondary-emphasis-emphasis">
                    Objects (e.g., .o-container)
                  </span>
                </div>
                <div className="u-p-2 u-border-start u-border-success u-border-3 u-ps-3">
                  <code className="u-block u-font-bold">.c-*</code>
                  <span className="u-text-xs u-text-secondary-emphasis-emphasis">
                    Components (e.g., .c-button)
                  </span>
                </div>
                <div className="u-p-2 u-border-start u-border-warning u-border-3 u-ps-3">
                  <code className="u-block u-font-bold">.u-*</code>
                  <span className="u-text-xs u-text-secondary-emphasis-emphasis">
                    Utilities (e.g., .u-m-4)
                  </span>
                </div>
                <div className="u-p-2 u-border-start u-border-danger u-border-3 u-ps-3">
                  <code className="u-block u-font-bold">.is-*, .has-*</code>
                  <span className="u-text-xs u-text-secondary-emphasis-emphasis">
                    States (e.g., .is-active)
                  </span>
                </div>
              </div>
            </Card>
          </GridCol>
        </Grid>

        <SectionIntro
          title="BEM Naming Convention"
          text="We use the Block Element Modifier convention to maintain modularity and avoid side effects."
          className="u-mt-10"
        />

        <Card glass className="u-p-0 u-mb-8">
          <div className="u-p-6">
            <Grid>
              <GridCol md={6}>
                <h4 className="u-font-bold u-mb-3 u-fs-lg">The Syntax</h4>
                <div className="u-flex u-flex-column u-gap-4">
                  <div>
                    <code className="u-text-primary u-font-bold">.c-block</code>
                    <p className="u-text-sm u-text-secondary-emphasis-emphasis">
                      The standalone entity (e.g., .c-card, .c-btn).
                    </p>
                  </div>
                  <div>
                    <code className="u-text-success u-font-bold">
                      .c-block__element
                    </code>
                    <p className="u-text-sm u-text-secondary-emphasis-emphasis">
                      Parts of a block (e.g., .c-card__title, .c-btn__icon).
                    </p>
                  </div>
                  <div>
                    <code className="u-text-warning u-font-bold">
                      .c-block--modifier
                    </code>
                    <p className="u-text-sm u-text-secondary-emphasis-emphasis">
                      Variations (e.g., .c-card--glass, .c-btn--primary).
                    </p>
                  </div>
                </div>
              </GridCol>
              <GridCol md={6}>
                <h4 className="u-font-bold u-mb-3 u-fs-lg">Code Example</h4>
                <div className="u-bg-tertiary-subtle u-p-4 u-rounded">
                  <pre
                    className={`u-m-0 u-text-sm ${pageStyles.stylesArchitecturePage__codeExample}`}
                  >
                    {`<div className="c-card c-card--glass">
  <div className="c-card__header">
    <h3 className="c-card__title">Title</h3>
  </div>
  <div className="c-card__body">
    <button className="c-btn c-btn--primary">
      Action
    </button>
  </div>
</div>`}
                  </pre>
                </div>
              </GridCol>
            </Grid>
          </div>
        </Card>

        <SectionIntro
          title="Governance & Best Practices"
          text="Guidelines for contributing to the Atomix styling ecosystem."
          className="u-mt-10"
        />

        <Grid>
          <GridCol md={6}>
            <Card className="u-bg-success-subtle u-border-0 u-p-6 u-h-100">
              <div className="u-flex u-items-center u-gap-2 u-mb-4">
                <Icon name="ThumbsUp" size={24} className="u-text-success" />
                <h4 className="u-text-xl u-font-bold u-m-0">The "Do" List</h4>
              </div>
              <ul className="u-list-none u-flex u-flex-column u-gap-3 u-p-0">
                <li className="u-flex u-gap-2 u-text-secondary-emphasis-emphasis">
                  <Icon
                    name="Check"
                    size={18}
                    className="u-text-success u-mt-1"
                  />
                  <span>Always use CSS variables for colors and spacing.</span>
                </li>
                <li className="u-flex u-gap-2 u-text-secondary-emphasis-emphasis">
                  <Icon
                    name="Check"
                    size={18}
                    className="u-text-success u-mt-1"
                  />
                  <span>Prefer utility classes for one-off layouts.</span>
                </li>
                <li className="u-flex u-gap-2 u-text-secondary-emphasis-emphasis">
                  <Icon
                    name="Check"
                    size={18}
                    className="u-text-success u-mt-1"
                  />
                  <span>Follow BEM naming convention for components.</span>
                </li>
                <li className="u-flex u-gap-2 u-text-secondary-emphasis-emphasis">
                  <Icon
                    name="Check"
                    size={18}
                    className="u-text-success u-mt-1"
                  />
                  <span>Keep component files under 200 lines.</span>
                </li>
              </ul>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-bg-error-subtle u-border-0 u-p-6 u-h-100">
              <div className="u-flex u-items-center u-gap-2 u-mb-4">
                <Icon name="ThumbsDown" size={24} className="u-text-error" />
                <h4 className="u-text-xl u-font-bold u-m-0">
                  The "Avoid" List
                </h4>
              </div>
              <ul className="u-list-none u-flex u-flex-column u-gap-3 u-p-0">
                <li className="u-flex u-gap-2 u-text-secondary-emphasis-emphasis">
                  <Icon name="X" size={18} className="u-text-error u-mt-1" />
                  <span>Never use IDs for styling.</span>
                </li>
                <li className="u-flex u-gap-2 u-text-secondary-emphasis-emphasis">
                  <Icon name="X" size={18} className="u-text-error u-mt-1" />
                  <span>Avoid deep nesting (max 3 levels).</span>
                </li>
                <li className="u-flex u-gap-2 u-text-secondary-emphasis-emphasis">
                  <Icon name="X" size={18} className="u-text-error u-mt-1" />
                  <span>Do not use `!important` unless in utilities.</span>
                </li>
                <li className="u-flex u-gap-2 u-text-secondary-emphasis-emphasis">
                  <Icon name="X" size={18} className="u-text-error u-mt-1" />
                  <span>No hard-coded magic numbers for spacing.</span>
                </li>
              </ul>
            </Card>
          </GridCol>
        </Grid>
      </Block>
    </div>
  );
};

StylesArchitecturePage.displayName = "StylesArchitecturePage";

export default StylesArchitecturePage;

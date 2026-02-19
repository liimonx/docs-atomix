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
import styles from "@/styles/PageHero.module.scss";
import pageStyles from "./StylesUtilitiesPage.module.scss";

interface UtilityCategoryProps {
  icon: string;
  title: string;
  description: string;
  examples: { class: string; description: string }[];
  color: string;
}

const CategoryCard: FC<UtilityCategoryProps> = ({
  icon,
  title,
  description,
  examples,
  color,
}) => {
  // Map hex colors to CSS class names
  const colorToClass: Record<string, string> = {
    "#3b82f6": "blue",
    "#8b5cf6": "purple",
    "#ec4899": "pink",
    "#f97316": "orange",
    "#22c55e": "green",
    "#eab308": "yellow",
    "#ef4444": "red",
  };

  const colorClass = colorToClass[color] || "blue";

  return (
    <Card
      className={`u-p-6 u-h-100 u-border-left atomix-card-hover ${
        pageStyles.stylesUtilitiesPage__categoryCard
      } ${pageStyles[`stylesUtilitiesPage__categoryCard--${colorClass}`]}`}
    >
      <div className="u-flex u-align-items-center u-gap-3 u-mb-3">
        <Icon
          name={icon as any}
          size={24}
          className={
            pageStyles[`stylesUtilitiesPage__categoryIcon--${colorClass}`]
          }
        />
        <h3 className="u-text-xl u-font-semibold u-m-0">{title}</h3>
      </div>
      <p className="u-text-secondary-emphasis u-mb-4">{description}</p>
      <div className="u-flex u-flex-column u-gap-2">
        {examples.map((ex, idx) => (
          <div key={idx} className="u-flex u-align-items-center u-gap-2">
            <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
              {ex.class}
            </code>
            <span className="u-text-sm u-text-secondary-emphasis">
              {ex.description}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

const StylesUtilitiesPage: FC = () => {
  const categories: UtilityCategoryProps[] = [
    {
      icon: "Box",
      title: "Spacing",
      description:
        "Margin and padding utilities with 0.25rem increments (0-64)",
      examples: [
        { class: ".u-m-4", description: "Margin 1rem (all sides)" },
        { class: ".u-p-6", description: "Padding 1.5rem (all sides)" },
        { class: ".u-mt-8", description: "Margin-top 2rem" },
        { class: ".u-px-4", description: "Padding left & right" },
        { class: ".u-mb-0", description: "Remove bottom margin" },
      ],
      color: "var(--atomix-info)",
    },
    {
      icon: "GridFour",
      title: "Layout & Flexbox",
      description: "Display, flexbox, grid, and positioning utilities",
      examples: [
        { class: ".u-flex", description: "Display flex" },
        { class: ".u-grid", description: "Display grid" },
        { class: ".u-justify-between", description: "Space between" },
        { class: ".u-align-items-center", description: "Vertical center" },
        { class: ".u-gap-4", description: "Gap 1rem" },
      ],
      color: "var(--atomix-primary)",
    },
    {
      icon: "TextAa",
      title: "Typography",
      description: "Font size, weight, line height, and text utilities",
      examples: [
        { class: ".u-text-lg", description: "Font size large (1.125rem)" },
        { class: ".u-font-bold", description: "Font weight 700" },
        { class: ".u-text-center", description: "Center align text" },
        { class: ".u-text-uppercase", description: "Transform uppercase" },
        { class: ".u-lh-relaxed", description: "Line height 1.625" },
      ],
      color: "var(--atomix-accent)",
    },
    {
      icon: "Palette",
      title: "Colors",
      description: "Semantic color system for text, backgrounds, and borders",
      examples: [
        { class: ".u-text-primary-emphasis", description: "Primary text" },
        { class: ".u-bg-success-subtle", description: "Success background" },
        { class: ".u-border-error", description: "Error border" },
        { class: ".u-text-secondary-emphasis", description: "Secondary text" },
      ],
      color: "var(--atomix-warning)",
    },
    {
      icon: "Square",
      title: "Borders & Radius",
      description: "Border width, style, radius, and shape utilities",
      examples: [
        { class: ".u-border", description: "1px border all sides" },
        { class: ".u-border-top", description: "Top border only" },
        { class: ".u-rounded", description: "Border radius 0.25rem" },
        { class: ".u-rounded-lg", description: "Large radius 0.5rem" },
        { class: ".u-rounded-circle", description: "50% radius (circle)" },
      ],
      color: "var(--atomix-success)",
    },
    {
      icon: "Maximize",
      title: "Sizing",
      description: "Width, height, min/max dimensions, and viewport units",
      examples: [
        { class: ".u-w-100", description: "Width 100%" },
        { class: ".u-h-100", description: "Height 100%" },
        { class: ".u-min-vh-100", description: "Min height 100vh" },
        { class: ".u-max-w-lg", description: "Max width 960px" },
      ],
      color: "var(--atomix-brand)",
    },
    {
      icon: "Move",
      title: "Position",
      description: "Positioning, z-index, and placement utilities",
      examples: [
        { class: ".u-relative", description: "Relative positioning" },
        { class: ".u-absolute", description: "Absolute positioning" },
        { class: ".u-sticky", description: "Sticky positioning" },
        { class: ".u-z-index-10", description: "Z-index 10" },
      ],
      color: "var(--atomix-info)",
    },
    {
      icon: "Eye",
      title: "Visibility",
      description: "Display, opacity, overflow, and visibility controls",
      examples: [
        { class: ".u-none", description: "Display none" },
        { class: ".u-opacity-50", description: "50% opacity" },
        { class: ".u-overflow-hidden", description: "Hide overflow" },
        { class: ".u-overflow-x-auto", description: "Horizontal scroll" },
      ],
      color: "var(--atomix-secondary)",
    },
    {
      icon: "Lightning",
      title: "Interactivity",
      description: "Cursor, pointer events, and user select utilities",
      examples: [
        { class: ".u-cursor-pointer", description: "Pointer cursor" },
        {
          class: ".u-pointer-events-none",
          description: "Disable pointer events",
        },
        { class: ".u-user-select-none", description: "Prevent text selection" },
        { class: ".u-pr-auto", description: "Enable pointer events" },
      ],
      color: "var(--atomix-danger)",
    },
    {
      icon: "MagicWand",
      title: "Effects",
      description: "Shadows, opacity, blend modes, and filter utilities",
      examples: [
        { class: ".u-shadow-sm", description: "Small shadow" },
        { class: ".u-shadow-lg", description: "Large shadow" },
        { class: ".u-blur-sm", description: "Small blur effect" },
        { class: ".u-grayscale", description: "Grayscale filter" },
      ],
      color: "var(--atomix-purple)",
    },
  ];

  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Utility Classes"
        text="500+ utility classes for rapid UI development"
        alignment="center"
      />

      <Block>
        <SectionIntro
          title="Utility Classes"
          text="Atomix provides a comprehensive set of utility classes for rapid UI development. These classes follow a consistent naming convention and cover spacing, layout, typography, colors, and more."
        />

        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-flex u-align-items-start u-gap-4">
                <Icon
                  name="Code"
                  size={32}
                  className="u-text-primary-emphasis"
                />
                <div>
                  <h3 className="u-text-xl u-font-semibold u-mb-3">
                    Naming Convention
                  </h3>
                  <p className="u-text-secondary-emphasis u-mb-4">
                    Atomix utilities follow a consistent, predictable pattern:
                  </p>
                  <div className="u-bg-tertiary-subtle u-p-4 u-rounded u-mb-4">
                    <pre
                      className={`u-m-0 u-text-sm ${pageStyles.stylesUtilitiesPage__codeBlock}`}
                    >
                      {`.u-{property}-{value}
.u-{property}-{breakpoint}-{value}`}
                    </pre>
                  </div>
                  <div className="u-flex u-flex-wrap u-gap-3">
                    <Badge variant="secondary" size="sm" label="500+ Classes" />
                    <Badge variant="secondary" size="sm" label="Responsive" />
                    <Badge variant="secondary" size="sm" label="Composable" />
                    <Badge variant="secondary" size="sm" label="Consistent" />
                  </div>
                </div>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-text-2xl u-font-bold u-mb-4">
              Utility Categories
            </h2>
            <p className="u-text-secondary-emphasis u-mb-4">
              Explore our comprehensive collection of utility classes organized
              by category. Each category contains a set of related utilities
              that help you build consistent, responsive designs faster.
            </p>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          {categories.map((category, idx) => (
            <GridCol key={idx} md={6} lg={4} className="u-mb-4">
              <CategoryCard {...category} />
            </GridCol>
          ))}
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-text-2xl u-font-bold u-mb-4">
              Responsive Utilities
            </h2>
            <p className="u-text-secondary-emphasis u-mb-4">
              All utilities support responsive breakpoints, allowing you to
              create adaptive designs that work across all device sizes. Simply
              prefix any utility with a breakpoint name to apply it only at that
              breakpoint and above.
            </p>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="Monitor"
                  size={24}
                  className="u-text-info-emphasis"
                />
                <h3 className="u-text-xl u-font-semibold u-m-0">
                  Breakpoint Prefixes
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4">
                All utilities support responsive breakpoints:
              </p>
              <div className="u-overflow-x-auto">
                <table
                  className={`u-w-100 ${pageStyles.stylesUtilitiesPage__referenceTable}`}
                >
                  <thead className="u-bg-tertiary-subtle">
                    <tr>
                      <th className="u-p-3 u-text-left u-text-sm u-font-semibold">
                        Prefix
                      </th>
                      <th className="u-p-3 u-text-left u-text-sm u-font-semibold">
                        Min Width
                      </th>
                      <th className="u-p-3 u-text-left u-text-sm u-font-semibold">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3">
                        <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          (none)
                        </code>
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">0px</td>
                      <td className="u-p-3">
                        <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-flex
                        </code>
                      </td>
                    </tr>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3">
                        <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-sm-
                        </code>
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">640px</td>
                      <td className="u-p-3">
                        <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-sm-d-block
                        </code>
                      </td>
                    </tr>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3">
                        <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-md-
                        </code>
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">768px</td>
                      <td className="u-p-3">
                        <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-md-grid-cols-2
                        </code>
                      </td>
                    </tr>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3">
                        <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-lg-
                        </code>
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">
                        1024px
                      </td>
                      <td className="u-p-3">
                        <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-lg-grid-cols-3
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-xl-
                        </code>
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">
                        1280px
                      </td>
                      <td className="u-p-3">
                        <code className="u-text-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-xl-p-8
                        </code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-text-2xl u-font-bold u-mb-4">Usage Examples</h2>
            <p className="u-text-secondary-emphasis u-mb-4">
              See how to combine utility classes to create common UI patterns
              and layouts.
            </p>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={6} className="u-mb-4">
            <Card className="u-p-6 u-h-100">
              <div className="u-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="GridFour"
                  size={24}
                  className="u-text-primary-emphasis"
                />
                <h3 className="u-text-lg u-font-semibold u-m-0">
                  Responsive Grid
                </h3>
              </div>
              <div className="u-bg-tertiary-subtle u-p-4 u-rounded">
                <pre
                  className={`u-m-0 u-text-sm ${pageStyles.stylesUtilitiesPage__codeBlock}`}
                >
                  {`<div class="u-grid u-grid-cols-1 
     u-md-grid-cols-2 
     u-lg-grid-cols-3 
     u-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
                </pre>
              </div>
            </Card>
          </GridCol>

          <GridCol md={6} className="u-mb-4">
            <Card className="u-p-6 u-h-100">
              <div className="u-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="ArrowsOut"
                  size={24}
                  className="u-text-success-emphasis"
                />
                <h3 className="u-text-lg u-font-semibold u-m-0">
                  Flexbox Layout
                </h3>
              </div>
              <div className="u-bg-tertiary-subtle u-p-4 u-rounded">
                <pre
                  className={`u-m-0 u-text-sm ${pageStyles.stylesUtilitiesPage__codeBlock}`}
                >
                  {`<div class="u-flex 
     u-justify-between 
     u-align-items-center 
     u-gap-4 u-p-4">
  <span>Left</span>
  <span>Right</span>
</div>`}
                </pre>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6 u-bg-info-subtle">
              <div className="u-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="Lightbulb"
                  size={24}
                  className="u-text-info-emphasis"
                />
                <h3 className="u-text-xl u-font-semibold u-m-0">
                  Best Practices
                </h3>
              </div>
              <div className="u-flex u-flex-column u-gap-3">
                <div className="u-flex u-gap-2">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <p className="u-m-0 u-text-secondary-emphasis">
                    <strong>Compose utilities</strong> - Combine multiple
                    classes for complex layouts
                  </p>
                </div>
                <div className="u-flex u-gap-2">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <p className="u-m-0 u-text-secondary-emphasis">
                    <strong>Mobile-first</strong> - Start with base classes, add
                    breakpoint modifiers
                  </p>
                </div>
                <div className="u-flex u-gap-2">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <p className="u-m-0 u-text-secondary-emphasis">
                    <strong>Semantic colors</strong> - Use emphasis variants
                    (subtle, emphasis) for consistency
                  </p>
                </div>
                <div className="u-flex u-gap-2">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <p className="u-m-0 u-text-secondary-emphasis">
                    <strong>Spacing scale</strong> - Use consistent spacing
                    values (0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64)
                  </p>
                </div>
                <div className="u-flex u-gap-2">
                  <Icon
                    name="Check"
                    size={20}
                    className="u-text-success-emphasis"
                  />
                  <p className="u-m-0 u-text-secondary-emphasis">
                    <strong>Performance</strong> - Avoid excessive nesting and
                    redundant classes
                  </p>
                </div>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6 u-mb-8">
          <GridCol md={12}>
            <Card className="u-p-6 u-bg-warning-subtle">
              <div className="u-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="Warning"
                  size={24}
                  className="u-text-warning-emphasis"
                />
                <h3 className="u-text-xl u-font-semibold u-m-0">
                  Important Notes
                </h3>
              </div>
              <div className="u-flex u-flex-column u-gap-3">
                <div className="u-flex u-gap-2">
                  <Icon
                    name="Info"
                    size={20}
                    className="u-text-info-emphasis"
                  />
                  <p className="u-m-0 u-text-secondary-emphasis">
                    <strong>Specificity</strong> - Utility classes have high
                    specificity (0,2,0) to override component styles when needed
                  </p>
                </div>
                <div className="u-flex u-gap-2">
                  <Icon
                    name="Info"
                    size={20}
                    className="u-text-info-emphasis"
                  />
                  <p className="u-m-0 u-text-secondary-emphasis">
                    <strong>!important</strong> - Most utilities use !important
                    to ensure consistent behavior
                  </p>
                </div>
                <div className="u-flex u-gap-2">
                  <Icon
                    name="Info"
                    size={20}
                    className="u-text-info-emphasis"
                  />
                  <p className="u-m-0 u-text-secondary-emphasis">
                    <strong>Customization</strong> - Modify the utility scale in
                    your theme configuration
                  </p>
                </div>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

StylesUtilitiesPage.displayName = "StylesUtilitiesPage";

export default StylesUtilitiesPage;

'use client';

import { FC } from 'react';
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
}) => (
  <Card
    className="u-p-6 u-h-100 u-border-left"
    style={{ borderLeftWidth: "4px", borderLeftColor: color }}
  >
    <div className="u-d-flex u-align-items-center u-gap-3 u-mb-3">
      <Icon name={icon as any} size={24} style={{ color }} />
      <h3 className="u-fs-xl u-fw-semibold u-m-0">{title}</h3>
    </div>
    <p className="u-text-secondary-emphasis u-mb-4">{description}</p>
    <div className="u-d-flex u-flex-direction-column u-gap-2">
      {examples.map((ex, idx) => (
        <div key={idx} className="u-d-flex u-align-items-center u-gap-2">
          <code
            className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded"
            style={{ fontFamily: "var(--atomix-font-family-mono)" }}
          >
            {ex.class}
          </code>
          <span className="u-fs-sm u-text-secondary-emphasis">
            {ex.description}
          </span>
        </div>
      ))}
    </div>
  </Card>
);

const StylesUtilitiesPage = () => {
  const categories: UtilityCategoryProps[] = [
    {
      icon: "Box",
      title: "Spacing",
      description: "Margin and padding utilities with 0.25rem increments",
      examples: [
        { class: ".u-m-4", description: "Margin 1rem" },
        { class: ".u-p-6", description: "Padding 1.5rem" },
        { class: ".u-mt-8", description: "Margin-top 2rem" },
        { class: ".u-px-4", description: "Padding horizontal" },
      ],
      color: "#3b82f6",
    },
    {
      icon: "Layout",
      title: "Layout",
      description: "Display, flexbox, and grid utilities",
      examples: [
        { class: ".u-d-flex", description: "Display flex" },
        { class: ".u-d-grid", description: "Display grid" },
        { class: ".u-justify-content-center", description: "Center content" },
        { class: ".u-align-items-center", description: "Align center" },
      ],
      color: "#8b5cf6",
    },
    {
      icon: "Type",
      title: "Typography",
      description: "Font size, weight, and text alignment",
      examples: [
        { class: ".u-fs-lg", description: "Font size large" },
        { class: ".u-fw-bold", description: "Font weight bold" },
        { class: ".u-text-center", description: "Text align center" },
        { class: ".u-text-uppercase", description: "Uppercase text" },
      ],
      color: "#ec4899",
    },
    {
      icon: "Palette",
      title: "Colors",
      description: "Text, background, and border colors",
      examples: [
        { class: ".u-text-primary", description: "Primary text" },
        { class: ".u-bg-success", description: "Success background" },
        { class: ".u-border-error", description: "Error border" },
        { class: ".u-bg-primary-subtle", description: "Subtle variant" },
      ],
      color: "#f97316",
    },
    {
      icon: "Square",
      title: "Borders",
      description: "Border width, radius, and styles",
      examples: [
        { class: ".u-border", description: "Default border" },
        { class: ".u-border-2", description: "2px border" },
        { class: ".u-rounded-lg", description: "Large radius" },
        { class: ".u-rounded-circle", description: "Circle shape" },
      ],
      color: "#22c55e",
    },
    {
      icon: "Maximize",
      title: "Sizing",
      description: "Width, height, and dimension utilities",
      examples: [
        { class: ".u-w-100", description: "Width 100%" },
        { class: ".u-h-50", description: "Height 50%" },
        { class: ".u-min-vh-100", description: "Min height 100vh" },
        { class: ".u-max-w-lg", description: "Max width large" },
      ],
      color: "#eab308",
    },
  ];

  return (
    <>
      <Hero
        className="u-pt-32 u-pb-16"
        backgroundImageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop"
        title="Utility Classes"
        text="500+ utility classes for rapid UI development"
        alignment="center"
      />

      <Block container={{ type: "fluid" }}>
        <SectionIntro
          title="Utility Classes"
          text="Atomix provides a comprehensive set of utility classes for rapid UI development. These classes follow a consistent naming convention and cover spacing, layout, typography, colors, and more."
        />

        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-start u-gap-4">
                <Icon
                  name="Code"
                  size={32}
                  className="u-text-primary-emphasis"
                />
                <div>
                  <h3 className="u-fs-xl u-fw-semibold u-mb-3">
                    Naming Convention
                  </h3>
                  <p className="u-text-secondary-emphasis u-mb-4">
                    Atomix utilities follow a consistent, predictable pattern:
                  </p>
                  <div className="u-bg-tertiary-subtle u-p-4 u-rounded u-mb-4">
                    <pre
                      className="u-m-0 u-fs-sm"
                      style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                    >
                      {`.u-{property}-{value}
.u-{property}-{breakpoint}-{value}`}
                    </pre>
                  </div>
                  <div className="u-d-flex u-flex-wrap u-gap-3">
                    <Badge variant="secondary" size="sm" label="500+ Classes" />
                    <Badge variant="secondary" size="sm" label="Responsive" />
                    <Badge variant="secondary" size="sm" label="Composable" />
                  </div>
                </div>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Utility Categories</h2>
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
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Responsive Utilities</h2>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="Monitor"
                  size={24}
                  className="u-text-info-emphasis"
                />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">
                  Breakpoint Prefixes
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4">
                All utilities support responsive breakpoints:
              </p>
              <div className="u-overflow-x-auto">
                <table
                  className="u-w-100"
                  style={{ borderCollapse: "collapse" }}
                >
                  <thead className="u-bg-tertiary-subtle">
                    <tr>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold">
                        Prefix
                      </th>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold">
                        Min Width
                      </th>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3">
                        <code className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          (none)
                        </code>
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">0px</td>
                      <td className="u-p-3">
                        <code className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-d-flex
                        </code>
                      </td>
                    </tr>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3">
                        <code className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-sm-
                        </code>
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">640px</td>
                      <td className="u-p-3">
                        <code className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-sm-d-block
                        </code>
                      </td>
                    </tr>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3">
                        <code className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-md-
                        </code>
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">768px</td>
                      <td className="u-p-3">
                        <code className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-md-grid-cols-2
                        </code>
                      </td>
                    </tr>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3">
                        <code className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-lg-
                        </code>
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">
                        1024px
                      </td>
                      <td className="u-p-3">
                        <code className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-lg-grid-cols-3
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded">
                          .u-xl-
                        </code>
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">
                        1280px
                      </td>
                      <td className="u-p-3">
                        <code className="u-fs-sm u-bg-tertiary-subtle u-p-1 u-rounded">
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
            <Card className="u-p-6 u-bg-success-subtle">
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon
                  name="Lightning"
                  size={24}
                  className="u-text-success-emphasis"
                />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">Usage Example</h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4">
                Responsive grid with utility classes:
              </p>
              <div className="u-bg-tertiary-subtle u-p-4 u-rounded">
                <pre
                  className="u-m-0 u-fs-sm"
                  style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                >
                  {`<div class="u-d-grid u-grid-cols-1 u-md-grid-cols-2 u-lg-grid-cols-3 u-gap-4">
  <div class="c-card u-p-6">Card 1</div>
  <div class="c-card u-p-6">Card 2</div>
  <div class="c-card u-p-6">Card 3</div>
</div>`}
                </pre>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default StylesUtilitiesPage;

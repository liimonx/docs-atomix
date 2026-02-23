"use client";

import { useState, useEffect, FC } from "react";

import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Grid,
  Block,
  Icon,
  Button,
} from "@shohojdhara/atomix";
import { GlassProps } from "@/types/atomix-components";
import styles from "@/styles/PageHero.module.scss";
import pageStyles from "./LayoutsGridPage.module.scss";
import Link from "next/link";

const LayoutsGridPage: FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering glass effect on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const glass: GlassProps | undefined = isMounted
    ? {
        displacementScale: 30,
        blurAmount: 5,
        elasticity: 0,
        enableLiquidBlur: true,
        padding: "20px",
        cornerRadius: 30,
        children: null,
      }
    : undefined;

  const features = [
    {
      icon: <Icon name="GridFour" size="lg" />,
      title: "12-Column System",
      description: "Flexible column-based layouts",
      color: "primary",
    },
    {
      icon: <Icon name="Phone" size="lg" />,
      title: "Mobile-First",
      description: "Responsive design with 6 breakpoints",
      color: "success",
    },
    {
      icon: <Icon name="Code" size="lg" />,
      title: "Semantic Classes",
      description: "Clear, predictable class names",
      color: "warning",
    },
    {
      icon: <Icon name="Lightning" size="lg" />,
      title: "Flexbox & CSS Grid",
      description: "Modern CSS technologies",
      color: "secondary",
    },
    {
      icon: <Icon name="Shield" size="lg" />,
      title: "Accessible",
      description: "WCAG 2.1 AA compliant",
      color: "error",
    },
    {
      icon: <Icon name="Palette" size="lg" />,
      title: "Customizable",
      description: "CSS custom properties and SCSS variables",
      color: "primary",
    },
  ];

  return (
    <div>
      <Hero
        glass={glass}
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Grid System"
        subtitle="Flexible 12-Column Layout"
        text="A powerful, flexible, and responsive grid system built on modern CSS Grid and Flexbox technologies. Create consistent layouts across all devices with our 12-column system."
        alignment="center"
        showOverlay={true}
        fullViewportHeight={false}
        contentWidth="900px"
        actions={
          <div className={styles.pageHero__actions}>
            <Button
              glass
              icon={<Icon name="Lightning" size={16} />}
              label="View Examples"
              href="/docs/examples/common-patterns"
              LinkComponent={Link}
            />
            <Button
              glass
              variant="secondary"
              label="Customization Guide"
              icon={<Icon name="Gear" size={16} />}
              href="/docs/layouts/customization"
              LinkComponent={Link}
            />
          </div>
        }
      />

      <Block spacing="md">
        <SectionIntro
          title="Grid System Overview"
          text="The Atomix Grid System provides a powerful, flexible, and responsive layout solution built on modern CSS Grid and Flexbox technologies."
          alignment="center"
        />

        <Grid>
          <GridCol md={12}>
            <Card className="u-p-6">
              <p
                className={`u-text-secondary-emphasis u-mb-6 u-text-center u-line-height-relaxed ${pageStyles.layoutsGridPage__introText}`}
              >
                The Grid System is based on a 12-column layout with responsive
                breakpoints and flexible alignment options. It follows the ITCSS
                architecture and uses semantic class names for maximum clarity
                and maintainability.
              </p>

              <Grid>
                {features.map((feature, index) => (
                  <GridCol key={index} md={6} lg={4} className="u-mb-6">
                    <Card className="u-p-4 u-h-100">
                      <div className="u-flex u-items-center u-mb-3">
                        <div
                          className={`${
                            pageStyles.layoutsGridPage__featureIconContainer
                          } ${
                            pageStyles[
                              `layoutsGridPage__featureIconContainer--${feature.color}`
                            ]
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <h4 className="u-text-lg u-font-semibold u-m-0 u-text-primary-emphasis">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed">
                        {feature.description}
                      </p>
                    </Card>
                  </GridCol>
                ))}
              </Grid>
            </Card>
          </GridCol>
        </Grid>

        <Block spacing="md" background="secondary">
          <SectionIntro
            title="Components"
            text="Learn how to use the core grid components to build responsive layouts"
            alignment="center"
          />

          <Grid>
            <GridCol md={12}>
              <Card className="u-p-6">
                <div className="u-flex u-items-center u-mb-4">
                  <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-primary-emphasis">
                    <Icon name="Code" size="lg" />
                  </div>
                  <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                    Container
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                  The Container component provides responsive max-widths and
                  centering for your content.
                </p>
                <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden u-border u-border-subtle">
                  <div className="u-px-4 u-py-3 u-border-bottom u-bg-surface">
                    <span className="u-text-xs u-text-secondary-emphasis u-font-medium">
                      TypeScript / React
                    </span>
                  </div>
                  <pre
                    className={`u-m-0 u-p-4 u-text-sm u-text-primary-emphasis ${pageStyles.layoutsGridPage__codeBlock}`}
                  >
                    {`import { Container, Row, GridCol } from '@shohojdhara/atomix';

<Container>
  <Row>
    <GridCol md={6}>Content</GridCol>
    <GridCol md={6}>Content</GridCol>
  </Row>
</Container>`}
                  </pre>
                </div>
              </Card>
            </GridCol>
          </Grid>

          <Grid className="u-mt-6">
            <GridCol md={6} className="u-mb-6">
              <Card className="u-p-6 u-h-100">
                <div className="u-flex u-items-center u-mb-4">
                  <div className="u-w-12 u-h-12 u-bg-success-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-success-emphasis">
                    <Icon name="GridFour" size="lg" />
                  </div>
                  <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                    Row
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                  The Row component wraps columns and provides negative margins
                  to counteract column padding.
                </p>
                <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden u-border u-border-subtle">
                  <div className="u-px-4 u-py-3 u-border-bottom u-bg-surface">
                    <span className="u-text-xs u-text-secondary-emphasis u-font-medium">
                      Example
                    </span>
                  </div>
                  <pre
                    className={`u-m-0 u-p-4 u-text-sm u-text-primary-emphasis ${pageStyles.layoutsGridPage__codeBlock}`}
                  >
                    {`<Row>
  <GridCol md={4}>Content</GridCol>
  <GridCol md={4}>Content</GridCol>
  <GridCol md={4}>Content</GridCol>
</Row>`}
                  </pre>
                </div>
              </Card>
            </GridCol>

            <GridCol md={6} className="u-mb-6">
              <Card className="u-p-6 u-h-100">
                <div className="u-flex u-items-center u-mb-4">
                  <div className="u-w-12 u-h-12 u-bg-warning-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-warning-emphasis">
                    <Icon name="Code" size="lg" />
                  </div>
                  <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                    GridCol
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                  The GridCol component represents individual columns within a
                  row with responsive breakpoints.
                </p>
                <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden u-border u-border-subtle">
                  <div className="u-px-4 u-py-3 u-border-bottom u-bg-surface">
                    <span className="u-text-xs u-text-secondary-emphasis u-font-medium">
                      Responsive Example
                    </span>
                  </div>
                  <pre
                    className={`u-m-0 u-p-4 u-text-sm u-text-primary-emphasis ${pageStyles.layoutsGridPage__codeBlock}`}
                  >
                    {`<Row>
  <GridCol xs={12} sm={6} md={4} lg={3}>
    Responsive column
  </GridCol>
</Row>`}
                  </pre>
                </div>
              </Card>
            </GridCol>
          </Grid>
        </Block>

        <Block spacing="md">
          <Grid>
            <GridCol md={6} className="u-mb-6">
              <Card className="u-p-6 u-h-100">
                <div className="u-flex u-items-center u-mb-4">
                  <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-primary-emphasis">
                    <Icon name="Phone" size="lg" />
                  </div>
                  <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                    Responsive Breakpoints
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                  Atomix grid system includes 6 responsive breakpoints for
                  mobile-first design:
                </p>
                <div className="u-flex u-flex-column u-gap-2">
                  {[
                    { name: "xs", size: "Extra small (0px and up)" },
                    { name: "sm", size: "Small (576px and up)" },
                    { name: "md", size: "Medium (768px and up)" },
                    { name: "lg", size: "Large (992px and up)" },
                    { name: "xl", size: "Extra large (1200px and up)" },
                    { name: "xxl", size: "Extra extra large (1400px and up)" },
                  ].map((bp, index) => (
                    <div
                      key={index}
                      className="u-flex u-items-center u-p-3 u-bg-secondary-subtle u-rounded-md"
                    >
                      <div className="u-w-10 u-h-10 u-bg-primary-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-primary-emphasis u-font-bold">
                        {bp.name}
                      </div>
                      <span className="u-text-secondary-emphasis">
                        {bp.size}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </GridCol>

            <GridCol md={6} className="u-mb-6">
              <Card className="u-p-6 u-h-100">
                <div className="u-flex u-items-center u-mb-4">
                  <div className="u-w-12 u-h-12 u-bg-success-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-success-emphasis">
                    <Icon name="Gear" size="lg" />
                  </div>
                  <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                    Column Options
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                  Grid columns can be customized with various props for flexible
                  layouts:
                </p>
                <div className="u-flex u-flex-column u-gap-2">
                  {[
                    { prop: "span", desc: "Column span (1-12)" },
                    { prop: "offset", desc: "Column offset" },
                    { prop: "order", desc: "Column order" },
                    { prop: "align", desc: "Column alignment" },
                  ].map((option, index) => (
                    <div
                      key={index}
                      className="u-flex u-items-center u-p-3 u-bg-secondary-subtle u-rounded-md"
                    >
                      <div className="u-w-10 u-h-10 u-bg-success-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-success-emphasis u-font-bold u-text-sm">
                        {option.prop}
                      </div>
                      <span className="u-text-secondary-emphasis">
                        {option.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </GridCol>
          </Grid>
        </Block>
      </Block>
    </div>
  );
};

LayoutsGridPage.displayName = "LayoutsGridPage";

export default LayoutsGridPage;

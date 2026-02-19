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
import pageStyles from "./LayoutsMasonryGridPage.module.scss";
import Link from "next/link";

const LayoutsMasonryGridPage: FC = () => {
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
      title: "Dynamic Positioning",
      description: "Automatic optimal item placement",
      color: "primary",
    },
    {
      icon: <Icon name="Phone" size="lg" />,
      title: "Responsive Design",
      description: "Configurable columns per breakpoint",
      color: "success",
    },
    {
      icon: <Icon name="Image" size="lg" />,
      title: "Image Loading Support",
      description: "Handles image loading and layout recalculation",
      color: "warning",
    },
    {
      icon: <Icon name="Lightning" size="lg" />,
      title: "Performance Optimized",
      description: "ResizeObserver and efficient algorithms",
      color: "secondary",
    },
    {
      icon: <Icon name="Code" size="lg" />,
      title: "Smooth Animations",
      description: "Optional item transition animations",
      color: "error",
    },
    {
      icon: <Icon name="Shield" size="lg" />,
      title: "Accessible",
      description: "Maintains semantic HTML structure",
      color: "primary",
    },
  ];

  return (
    <div>
      <Hero
        glass={glass}
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Masonry Grid"
        subtitle="Pinterest-Style Dynamic Layouts"
        text="Create beautiful Pinterest-style layouts with our flexible masonry grid component. Automatically positions items of varying heights for optimal space usage."
        alignment="center"
        showOverlay={true}
        fullViewportHeight={false}
        contentWidth="900px"
        actions={
          <div className={styles.pageHero__actions}>
            <Button
              glass
              icon={<Icon name="Lightning" size="lg" />}
              label="View Examples"
              href="/docs/examples/common-patterns"
              LinkComponent={Link}
            />
            <Button
              glass
              variant="secondary"
              label="Performance Guide"
              icon={<Icon name="Lightning" size="lg" />}
              href="/docs/layouts/performance"
              LinkComponent={Link}
            />
          </div>
        }
      />

      <Block spacing="md">
        <SectionIntro
          title="Masonry Grid System"
          text="The Atomix Masonry Grid provides a dynamic, Pinterest-style layout that automatically positions items based on their height, creating an optimal grid with minimal gaps."
          alignment="center"
        />

        <Grid>
          <GridCol md={12}>
            <Card className="u-p-6">
              <p
                className={`u-text-secondary-emphasis u-mb-6 u-text-center u-line-height-relaxed ${pageStyles.layoutsMasonryGridPage__introText}`}
              >
                The Masonry Grid uses JavaScript to calculate optimal
                positioning for items of varying heights, creating a visually
                appealing layout that maximizes space usage. Items are
                positioned column by column, with each new item placed in the
                column with the shortest current height.
              </p>

              <Grid>
                {features.map((feature, index) => (
                  <GridCol key={index} md={6} lg={4} className="u-mb-6">
                    <Card className="u-p-4 u-h-100">
                      <div className="u-flex u-align-items-center u-mb-3">
                        <div
                          className={`${
                            pageStyles.layoutsMasonryGridPage__featureIconContainer
                          } ${
                            pageStyles[
                              `layoutsMasonryGridPage__featureIconContainer--${feature.color}`
                            ]
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <h4 className="u-fs-lg u-fw-semibold u-m-0 u-text-primary-emphasis">
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
            text="Learn how to use the masonry grid components to build dynamic layouts"
            alignment="center"
          />

          <Grid>
            <GridCol md={12} className="u-mb-6">
              <Card className="u-p-6">
                <div className="u-flex u-align-items-center u-mb-4">
                  <div className="u-w-12 u-h-12 u-bg-primary-subtle u-br-md u-flex u-align-items-center u-justify-center u-me-3 u-text-primary-emphasis">
                    <Icon name="GridFour" size="lg" />
                  </div>
                  <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                    MasonryGrid
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                  The main container that manages item positioning and
                  responsive behavior.
                </p>
                <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden u-border u-border-subtle">
                  <div className="u-px-4 u-py-3 u-border-bottom u-bg-surface">
                    <span className="u-fs-xs u-text-secondary-emphasis u-fw-medium">
                      TypeScript / React
                    </span>
                  </div>
                  <pre
                    className={`u-m-0 u-p-4 u-fs-sm u-text-primary-emphasis ${pageStyles.layoutsMasonryGridPage__codeBlock}`}
                  >
                    {`import { MasonryGrid, MasonryGridItem } from '@shohojdhara/atomix';

<MasonryGrid 
  columns={3}
  gap={16}
  className="my-masonry-grid"
>
  <MasonryGridItem>
    <img src="image.jpg" alt="Description" />
    <p>Item content</p>
  </MasonryGridItem>
</MasonryGrid>`}
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
                <div className="u-flex u-align-items-center u-mb-4">
                  <div className="u-w-12 u-h-12 u-bg-success-subtle u-br-md u-flex u-align-items-center u-justify-center u-me-3 u-text-success-emphasis">
                    <Icon name="Gear" size="lg" />
                  </div>
                  <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                    Props
                  </h3>
                </div>

                <div className="u-mb-4">
                  <h4 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                    MasonryGrid Props
                  </h4>
                  <div className="u-flex u-flex-column u-gap-2 u-mb-4">
                    {[
                      {
                        prop: "columns",
                        desc: "Number of columns (default: 3)",
                      },
                      {
                        prop: "gap",
                        desc: "Gap between items in pixels (default: 16)",
                      },
                      { prop: "className", desc: "Custom CSS class" },
                      { prop: "children", desc: "MasonryGridItem components" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="u-flex u-align-items-center u-p-3 u-bg-secondary-subtle u-br-md"
                      >
                        <div className="u-w-10 u-h-10 u-bg-success-subtle u-br-md u-flex u-align-items-center u-justify-center u-me-3 u-text-success-emphasis u-fw-bold u-fs-sm">
                          {item.prop}
                        </div>
                        <span className="u-text-secondary-emphasis">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h4 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                    MasonryGridItem Props
                  </h4>
                  <div className="u-flex u-flex-column u-gap-2">
                    {[
                      { prop: "className", desc: "Custom CSS class" },
                      { prop: "children", desc: "Item content" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="u-flex u-align-items-center u-p-3 u-bg-secondary-subtle u-br-md"
                      >
                        <div className="u-w-10 u-h-10 u-bg-success-subtle u-br-md u-flex u-align-items-center u-justify-center u-me-3 u-text-success-emphasis u-fw-bold u-fs-sm">
                          {item.prop}
                        </div>
                        <span className="u-text-secondary-emphasis">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </GridCol>

            <GridCol md={6} className="u-mb-6">
              <Card className="u-p-6 u-h-100">
                <div className="u-flex u-align-items-center u-mb-4">
                  <div className="u-w-12 u-h-12 u-bg-warning-subtle u-br-md u-flex u-align-items-center u-justify-center u-me-3 u-text-warning-emphasis">
                    <Icon name="Phone" size="lg" />
                  </div>
                  <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                    Responsive Configuration
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                  Configure columns for different breakpoints:
                </p>
                <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden u-border u-border-subtle u-mb-4">
                  <div className="u-px-4 u-py-3 u-border-bottom u-bg-surface">
                    <span className="u-fs-xs u-text-secondary-emphasis u-fw-medium">
                      Responsive Example
                    </span>
                  </div>
                  <pre
                    className={`u-m-0 u-p-4 u-fs-sm u-text-primary-emphasis ${pageStyles.layoutsMasonryGridPage__codeBlock}`}
                  >
                    {`<MasonryGrid 
  columns={{
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  }}
  gap={16}
>
  {/* Items */}
</MasonryGrid>`}
                  </pre>
                </div>

                <h4 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                  Performance Tips
                </h4>
                <div className="u-flex u-flex-column u-gap-2">
                  {[
                    "Use fixed aspect ratios when possible",
                    "Limit the number of items for better performance",
                    "Debounce resize events",
                    "Use virtualization for large datasets",
                  ].map((tip, index) => (
                    <div
                      key={index}
                      className="u-flex u-align-items-center u-p-3 u-bg-secondary-subtle u-br-md"
                    >
                      <div className="u-w-8 u-h-8 u-bg-warning-subtle u-br-md u-flex u-align-items-center u-justify-center u-me-3 u-text-warning-emphasis">
                        <Icon name="Lightning" size="lg" />
                      </div>
                      <span className="u-text-secondary-emphasis">{tip}</span>
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

LayoutsMasonryGridPage.displayName = "LayoutsMasonryGridPage";

export default LayoutsMasonryGridPage;

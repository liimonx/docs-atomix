"use client";

import { FC } from "react";
import Link from "next/link";
import {
  Button,
  Card,
  Hero,
  GridCol,
  Row,
  Block,
  SectionIntro,
  Icon,
} from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";
import pageStyles from "./LayoutsOverviewPage.module.scss";

const LayoutsOverviewPage: FC = () => {
  const layoutFeatures = [
    {
      icon: <Icon name="GridFour" size="lg" />,
      title: "Grid System",
      description:
        "A powerful 12-column responsive grid system for creating consistent layouts across all devices and screen sizes.",
      href: "/docs/layouts/grid",
      color: "primary",
    },
    {
      icon: <Icon name="GridFour" size="lg" />,
      title: "Masonry Grid",
      description:
        "Create Pinterest-style dynamic layouts with our flexible masonry grid component that automatically positions items.",
      href: "/docs/layouts/masonry-grid",
      color: "success",
    },
    {
      icon: <Icon name="Phone" size="lg" />,
      title: "Responsive Patterns",
      description:
        "Learn best practices and common patterns for creating responsive layouts that work beautifully on any device.",
      href: "/docs/layouts/responsive-patterns",
      color: "warning",
    },
    {
      icon: <Icon name="Lightning" size="lg" />,
      title: "Performance",
      description:
        "Optimize your layouts for maximum performance with our performance optimization guides and best practices.",
      href: "/docs/layouts/performance",
      color: "secondary",
    },
    {
      icon: <Icon name="Gear" size="lg" />,
      title: "Customization",
      description:
        "Customize and extend layout components to match your unique requirements with CSS variables and SCSS.",
      href: "/docs/layouts/customization",
      color: "error",
    },
  ];

  return (
    <div>
      <Hero
        className={styles.pageHero}
        title="Layouts System"
        subtitle="Powerful Layout Components"
        text="A comprehensive set of components for creating responsive, accessible, and performant layouts. Build beautiful interfaces with our flexible grid system, masonry layouts, and responsive patterns."
        alignment="center"
        fullViewportHeight={false}
        contentWidth="900px"
        actions={
          <div className={styles.pageHero__actions}>
            <Button
              glass
              icon={<Icon name="GridFour" />}
              label="Grid System"
              href="/docs/layouts/grid"
              LinkComponent={Link}
            />
            <Button
              glass
              variant="secondary"
              label="Masonry Grid"
              icon={<Icon name="GridFour" />}
              href="/docs/layouts/masonry-grid"
              LinkComponent={Link}
            />
          </div>
        }
      />

      <Block spacing="md">
        <SectionIntro
          title="Building Responsive Layouts"
          text="Create flexible, responsive layouts with our collection of layout components designed for modern web applications."
          alignment="center"
        />

        <Row>
          {layoutFeatures.map((feature, index) => (
            <GridCol key={index} md={6} lg={4} className="u-mb-4">
              <Link
                href={feature.href}
                className="u-text-decoration-none u-text-inherit u-block u-h-100"
              >
                <Card className="u-h-100 u-p-6 u-cursor-pointer u-transition-fast u-border u-border-subtle u-hover-transform-up">
                  <div className="u-flex u-flex-column u-h-100">
                    <div
                      className={`${
                        pageStyles.layoutsOverviewPage__featureIconContainer
                      } ${
                        pageStyles[
                          `layoutsOverviewPage__featureIconContainer--${feature.color}`
                        ]
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="u-text-xl u-font-semibold u-m-0 u-mb-3 u-text-primary-emphasis">
                      {feature.title}
                    </h3>
                    <p className="u-text-secondary-emphasis u-m-0 u-mb-4 u-flex-grow-1 u-line-height-relaxed">
                      {feature.description}
                    </p>
                    <div className="u-flex u-items-center u-text-primary-emphasis u-font-medium">
                      <span className="u-me-2">Learn more</span>
                      <Icon name="CaretRight" size="lg" />
                    </div>
                  </div>
                </Card>
              </Link>
            </GridCol>
          ))}
        </Row>
      </Block>

      <Block spacing="md" background="secondary">
        <SectionIntro
          title="Why Use Atomix Layouts?"
          text="Our layout system provides everything you need to build modern, responsive interfaces"
          alignment="center"
        />
        <Row>
          {[
            {
              title: "12-Column Grid",
              description:
                "Flexible column-based layouts with 6 responsive breakpoints",
              icon: <Icon name="GridFour" size="lg" />,
            },
            {
              title: "Mobile-First",
              description:
                "Built with mobile-first responsive design principles",
              icon: <Icon name="Phone" size="lg" />,
            },
            {
              title: "Performance Optimized",
              description:
                "Optimized for speed with efficient CSS and minimal JavaScript",
              icon: <Icon name="Lightning" size="lg" />,
            },
            {
              title: "Fully Customizable",
              description:
                "Customize with CSS variables, SCSS, or component props",
              icon: <Icon name="Gear" size="lg" />,
            },
          ].map((benefit, index) => (
            <GridCol key={index} md={6} lg={3} className="u-mb-4">
              <Card className="u-h-100 u-p-6">
                <div className="u-flex u-items-center u-mb-3">
                  <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-primary-emphasis">
                    {benefit.icon}
                  </div>
                  <h3 className="u-text-lg u-font-semibold u-m-0 u-text-primary-emphasis">
                    {benefit.title}
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </GridCol>
          ))}
        </Row>
      </Block>
    </div>
  );
};

LayoutsOverviewPage.displayName = "LayoutsOverviewPage";

export default LayoutsOverviewPage;

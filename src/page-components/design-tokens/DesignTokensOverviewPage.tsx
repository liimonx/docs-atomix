"use client";

import { FC } from "react";
import {
  Button,
  Hero,
  GridCol,
  Block,
  SectionIntro,
  Grid,
  Card,
  Icon,
  Badge,
} from "@shohojdhara/atomix";
import Link from "next/link";

const DesignTokensOverviewPage: FC = () => {
  const categories = [
    {
      title: "Colors",
      desc: "Comprehensive color system with brand, semantic, and neutral palettes. Built for WCAG 2.1 AA compliance.",
      href: "/docs/design-tokens/colors",
      icon: "Palette",
      variant: "primary",
    },
    {
      title: "Spacing",
      desc: "Atomic spacing scale based on a 4px grid system for consistent margins, padding, and layout rhythms.",
      href: "/docs/design-tokens/spacing",
      icon: "ArrowsOut",
      variant: "secondary",
    },
    {
      title: "Typography",
      desc: "Robust typography system including font families, sizes, weights, and line heights for optimal readability.",
      href: "/docs/design-tokens/typography",
      icon: "TextT",
      variant: "info",
    },
    {
      title: "Grid",
      desc: "Responsive 12-column grid system with customizable gutters and breakpoints for fluid layouts.",
      href: "/docs/design-tokens/grid",
      icon: "GridNine",
      variant: "success",
    },
    {
      title: "Elevation",
      desc: "Modern depth system using layered shadows to create visual hierarchy and focus across themes.",
      href: "/docs/design-tokens/elevation",
      icon: "Stack",
      variant: "warning",
    },
  ];

  return (
    <>
      <Hero
        title={<></>}
        alignment="left"
        className=" u-relative u-overflow-hidden"
      >
        <div className="u-absolute u-top-0 u-start-50 u-translate-x-n50 u-w-100 u-h-100 u-max-w-4xl u-bg-primary u-opacity-5 u-blur-3xl u-rounded-circle u-pointer-events-none"></div>

        <Hero.Content className="u-w-100 u-max-w-4xl u-relative u-z-1">
          <Badge
            variant="primary"
            label="Design System"
            className="u-mb-4 u-rounded-full u-px-3 u-py-1 u-font-bold u-tracking-wider"
          />
          <Hero.Title className="u-fs-5xl u-font-black u-tracking-tighter">
            Design Tokens
          </Hero.Title>
          <Hero.Text className="u-fs-xl u-text-secondary-emphasis u-leading-relaxed">
            The fundamental design atoms that power Atomix. These variables
            ensure every component remains consistent across the entire
            platform.
          </Hero.Text>
          <div className="u-flex u-gap-3 u-mt-8">
            <Link href="/docs/design-tokens/colors" className="u-block">
              <Button
                variant="primary"
                size="lg"
                label="Explore Colors"
                className="u-rounded-2xl u-shadow-primary-glow"
              />
            </Link>
            <Link href="/docs/design-tokens/grid" className="u-block">
              <Button
                variant="secondary"
                size="lg"
                label="Grid System"
                className="u-rounded-2xl  u-bg-glass"
                glass
              />
            </Link>
          </div>
        </Hero.Content>
      </Hero>

      <Block spacing="xl" className="u-pt-12">
        <div className="u-mb-16">
          <SectionIntro
            title="Design Foundations"
            text="Explore the precise values that define the visual language of our products."
            className="u-text-center u-max-w-2xl u-mx-auto"
          />
        </div>

        <Grid>
          {categories.map((item, i) => (
            <GridCol key={i} md={6} lg={4}>
              <Link
                href={item.href}
                className="u-text-decoration-none u-h-100 u-block"
              >
                <Card
                  glass={true}
                  className="u-h-100 u-p-8 u-rounded-3xl u-border  u-transition-all u-hover-translate-y-n2 u-hover-shadow-lg u-flex u-flex-column u-relative u-overflow-hidden"
                >
                  {/* Decorative background circle */}
                  <div
                    className={`u-absolute u-top-n4 u-end-n4 u-w-24 u-h-24 u-rounded-circle u-opacity-5 u-bg-${item.variant}`}
                  ></div>

                  <div
                    className={`u-w-12 u-h-12 u-rounded-2xl u-bg-${item.variant}-subtle u-text-${item.variant} u-flex u-items-center u-justify-center u-mb-6 u-shadow-sm`}
                  >
                    <Icon name={item.icon as any} size={28} weight="duotone" />
                  </div>

                  <h3 className="u-fs-2xl u-font-black u-tracking-tight u-mb-3 u-text-primary-emphasis">
                    {item.title}
                  </h3>

                  <p className="u-text-secondary-emphasis u-fs-base u-leading-relaxed u-mb-8 u-flex-grow-1">
                    {item.desc}
                  </p>

                  <div className="u-flex u-items-center u-gap-2 u-text-primary u-font-bold u-fs-sm">
                    View Tokens
                    <Icon name="ArrowRight" size={16} weight="bold" />
                  </div>
                </Card>
              </Link>
            </GridCol>
          ))}

          <GridCol md={6} lg={8}>
            <Card
              variant="primary"
              glass
              className="u-h-100 u-p-8 u-rounded-3xl u-border  u-bg-primary-subtle u-flex u-items-center u-justify-between u-relative u-overflow-hidden"
            >
              <div className="u-relative u-z-1 u-max-w-md">
                <h3 className="u-fs-2xl u-font-black u-tracking-tight u-mb-2">
                  Atomic Foundations
                </h3>
                <p className="u-text-primary-emphasis u-opacity-80 u-mb-0">
                  Every token is meticulously crafted to support multi-theme
                  systems, accessibility, and high-performance rendering.
                </p>
              </div>
              <div className="u-opacity-10 u-translate-x-4">
                <Icon name="Atom" size={120} weight="thin" />
              </div>
            </Card>
          </GridCol>
        </Grid>
      </Block>
    </>
  );
};

export default DesignTokensOverviewPage;

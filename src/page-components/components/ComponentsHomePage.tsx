"use client";

import { useMemo, useState, useEffect, FC } from "react";
import Link from "next/link";

import {
  Button,
  Card,
  Badge,
  Icon,
  GridCol,
  Hero,
  Block,
  SectionIntro,
  Grid,
} from "@shohojdhara/atomix";

import { componentMetadata } from "@/data/components";
import { BreadcrumbNavigation } from "@/components/navigation/BreadcrumbNavigation";
import { GlassProps } from "@/types/atomix-components";
import styles from "@/styles/PageHero.module.scss";

const ComponentsHomePage: FC = () => {
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

  // Get component categories
  const categories = useMemo(
    () => Array.from(new Set(componentMetadata.map((c) => c.category))),
    []
  );

  // Get featured components (stable status)
  const featuredComponents = useMemo(
    () => componentMetadata.filter((c) => c.status === "stable").slice(0, 6),
    []
  );

  // Get recently updated components
  const recentComponents = useMemo(
    () =>
      [...componentMetadata]
        .sort((b, a) => a.version.localeCompare(b.version))
        .slice(0, 6),
    []
  );

  // Stable components count
  const stableComponentsCount = useMemo(
    () => componentMetadata.filter((c) => c.status === "stable").length,
    []
  );

  return (
    <>
      <Hero
        glass={glass}
        title="Atomix Components"
        subtitle="40+ Production-Ready Components"
        text="A comprehensive library of accessible, responsive UI components built with React and TypeScript. Everything you need to build modern web applications."
        alignment="center"
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        showOverlay={true}
        fullViewportHeight={false}
        contentWidth="1100px"
        actions={
          <div className={styles.pageHero__actions}>
            <Button
              glass
              icon={<Icon name="Download" size={16} />}
              label="Get Started"
              href="/docs/getting-started/installation"
              as={Link}
            />
            <Button
              glass
              variant="secondary"
              icon={<Icon name="GridFour" size={16} />}
              label="Browse Components"
              href="/docs/components/overview"
              as={Link}
            />
          </div>
        }
      />
      <BreadcrumbNavigation />

      <Block spacing="sm" >
        <SectionIntro
          title="By the Numbers"
          text="Atomix provides a comprehensive component library for building modern interfaces"
          alignment="center"
        />
        {/* Stats Section */}
        <Grid>
          <GridCol md={4} sm={6} className="u-mb-4">
            <Card className="u-h-100 u-p-6 u-text-center u-transition-fast u-hover-transform-up">
              <div className="u-w-16 u-h-16 u-bg-primary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-mx-auto u-mb-4 u-text-primary-emphasis">
                <Icon name="Stack" size={32} />
              </div>
              <h3 className="u-fs-3xl u-fw-bold u-mb-2 u-text-primary-emphasis">
                {componentMetadata.length}
              </h3>
              <p className="u-text-secondary-emphasis u-mb-0 u-fs-lg">
                Components
              </p>
            </Card>
          </GridCol>

          <GridCol md={4} sm={6} className="u-mb-4">
            <Card className="u-h-100 u-p-6 u-text-center u-transition-fast u-hover-transform-up">
              <div className="u-w-16 u-h-16 u-bg-success-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-mx-auto u-mb-4 u-text-success-emphasis">
                <Icon name="ShieldCheck" size={32} />
              </div>
              <h3 className="u-fs-3xl u-fw-bold u-mb-2 u-text-primary-emphasis">
                {stableComponentsCount}
              </h3>
              <p className="u-text-secondary-emphasis u-mb-0 u-fs-lg">
                Stable Components
              </p>
            </Card>
          </GridCol>

          <GridCol md={4} sm={6} className="u-mb-4">
            <Card className="u-h-100 u-p-6 u-text-center u-transition-fast u-hover-transform-up">
              <div className="u-w-16 u-h-16 u-bg-warning-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-mx-auto u-mb-4 u-text-warning-emphasis">
                <Icon name="StarFour" size={32} />
              </div>
              <h3 className="u-fs-3xl u-fw-bold u-mb-2 u-text-primary-emphasis">
                {categories.length}
              </h3>
              <p className="u-text-secondary-emphasis u-mb-0 u-fs-lg">
                Categories
              </p>
            </Card>
          </GridCol>
        </Grid>
      </Block>

      <Block spacing="md" background="secondary" >
        <div className="u-d-flex u-align-items-center u-mb-6">
          <SectionIntro
            title="Categories"
            text="Browse components by category"
            alignment="center"
          />

          <Link
            href="/docs/components/overview"
            className="u-text-primary u-text-decoration-none u-fw-medium u-align-items-end u-pe-2"
          >
            View All
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>

        <Grid>
          {categories.slice(0, 6).map((category, index) => (
            <GridCol key={index} md={4} sm={6}  className="u-mb-4">
              <Link
                href="/docs/components/overview"
                className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
              >
                <Card className="u-h-100 u-p-6 u-cursor-pointer u-transition-fast u-border u-border-subtle u-hover-transform-up">
                  <div className="u-d-flex u-flex-column u-align-items-center u-text-center">
                    <div className="u-w-16 u-h-16 u-bg-primary-subtle u-text-primary-emphasis u-br-md u-d-flex u-align-items-center u-justify-content-center u-mb-4">
                      <Icon name="GridFour" size={24} />
                    </div>
                    <h3 className="u-fs-xl u-fw-semibold u-mb-2 u-text-primary-emphasis">
                      {category}
                    </h3>
                    <p className="u-text-secondary-emphasis u-mb-0 u-fs-base">
                      {
                        componentMetadata.filter((c) => c.category === category)
                          .length
                      }{" "}
                      components
                    </p>
                  </div>
                </Card>
              </Link>
            </GridCol>
          ))}
        </Grid>
      </Block>

      <Block spacing="md" >
        <SectionIntro
          title="Featured Components"
          text="Stable, production-ready components you can use right away"
          alignment="center"
        />

        <Grid>
          {featuredComponents.map((component) => (
            <GridCol key={component.id} md={6} lg={4} className="u-mb-4">
              <Link
                href={`/docs/components/${component.id}`}
                className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
              >
                <Card className="u-h-100 u-p-6 u-cursor-pointer u-transition-fast u-border u-border-subtle u-hover-transform-up">
                  <div className="u-d-flex u-flex-column u-h-100">
                    <div className="u-d-flex u-align-items-center u-mb-4">
                      <div className="u-w-12 u-h-12 u-bg-primary-subtle u-text-primary-emphasis u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3">
                        <Icon name="Lightning" size={24} />
                      </div>
                      <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                        {component.name}
                      </h3>
                    </div>

                    <p className="u-text-secondary-emphasis u-flex-grow-1 u-mb-4 u-line-height-relaxed">
                      {component.description.substring(0, 120)}...
                    </p>

                    <div className="u-d-flex u-gap-2 u-mb-4 u-flex-wrap">
                      <Badge
                        variant="primary"
                        size="sm"
                        label={component.status}
                      />
                      <Badge
                        variant="secondary"
                        size="sm"
                        label={`v${component.version}`}
                      />
                    </div>

                    <div className="u-d-flex u-align-items-center u-text-primary-emphasis u-fw-medium">
                      <span className="u-me-2">View Details</span>
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </div>
                </Card>
              </Link>
            </GridCol>
          ))}
        </Grid>
      </Block>

      <Block spacing="md" background="brand" >
        <div className="u-d-flex u-align-items-center u-mb-6">
          <SectionIntro
            title="Recently Updated"
            text="Latest component updates and improvements"
            alignment="center"
          />
          <Link
            href="/docs/components/overview"
            className="u-text-white u-text-decoration-none u-fw-medium u-align-items-end u-pe-2"
          >
            View All
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>

        <Grid>
          {recentComponents.map((component) => (
            <GridCol key={component.id} md={6} lg={4} className="u-mb-4">
              <Link
                href={`/docs/components/${component.id}`}
                className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
              >
                <Card className="u-h-100 u-p-6 u-cursor-pointer u-transition-fast u-border u-border-subtle u-hover-transform-up">
                  <div className="u-d-flex u-flex-column u-h-100">
                    <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-3">
                      <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                        {component.name}
                      </h3>
                      <Badge
                        variant="info"
                        size="sm"
                        label={`v${component.version}`}
                      />
                    </div>

                    <p className="u-text-secondary-emphasis u-mb-4 u-flex-grow-1 u-line-height-relaxed">
                      {component.description.substring(0, 120)}...
                    </p>

                    <div className="u-d-flex u-gap-2 u-flex-wrap">
                      <Badge
                        variant="primary"
                        size="sm"
                        label={component.status}
                      />
                      <Badge
                        variant="secondary"
                        size="sm"
                        label={component.category}
                      />
                    </div>
                  </div>
                </Card>
              </Link>
            </GridCol>
          ))}
        </Grid>
      </Block>
    </>
  );
};

export default ComponentsHomePage;

"use client";

import { FC } from "react";
import Link from "next/link";

import {
  Button,
  Card,
  Hero,
  Row,
  GridCol,
  Block,
  SectionIntro,
  Callout,
  Badge,
  Icon,
} from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const MigrationPage: FC = () => {
  const migrationSteps = [
    {
      step: 1,
      title: "Assess Current Usage",
      description:
        "Audit your existing components and styles to understand what needs to be migrated. Document all current implementations and dependencies.",
      icon: <Icon name="FileText" size="lg" />,
      color: "primary",
    },
    {
      step: 2,
      title: "Plan the Migration",
      description:
        "Prioritize components and create a timeline for the migration process. Identify critical paths and dependencies.",
      icon: <Icon name="Code" size="lg" />,
      color: "secondary",
    },
    {
      step: 3,
      title: "Set Up Atomix",
      description:
        "Install and configure Atomix alongside your existing system. Set up design tokens and theme configuration.",
      icon: <Icon name="Lightning" size="lg" />,
      color: "success",
    },
    {
      step: 4,
      title: "Migrate Incrementally",
      description:
        "Replace components one by one, testing as you go. Start with low-risk components and gradually move to critical ones.",
      icon: <Icon name="CaretRight" size="lg" />,
      color: "warning",
    },
    {
      step: 5,
      title: "Clean Up",
      description:
        "Remove old dependencies and unused code once migration is complete. Optimize bundle size and performance.",
      icon: <Icon name="CheckCircle" size="lg" />,
      color: "error",
    },
  ];

  const benefits = [
    {
      title: "Modern Architecture",
      description:
        "ITCSS methodology and CSS custom properties for scalable, maintainable styles",
      icon: <Icon name="Palette" size="lg" />,
      color: "primary",
    },
    {
      title: "Better Performance",
      description:
        "Smaller bundle size and optimized CSS with tree-shaking support",
      icon: <Icon name="Lightning" size="lg" />,
      color: "success",
    },
    {
      title: "Enhanced Accessibility",
      description:
        "WCAG 2.1 AA compliance built-in with comprehensive keyboard navigation",
      icon: <Icon name="Shield" size="lg" />,
      color: "warning",
    },
    {
      title: "Developer Experience",
      description:
        "Better TypeScript support, comprehensive documentation, and tooling",
      icon: <Icon name="Code" size="lg" />,
      color: "secondary",
    },
  ];

  const migrationTools = [
    {
      title: "Class Mapping Guide",
      description:
        "Comprehensive mapping from popular frameworks to Atomix utilities",
      icon: <Icon name="GitBranch" size="lg" />,
      href: "/docs/styles/utilities",
    },
    {
      title: "Component Migration",
      description:
        "Step-by-step guides for migrating common component patterns",
      icon: <Icon name="Stack" size="lg" />,
      href: "/docs/components/overview",
    },
    {
      title: "Theme Configuration",
      description:
        "Learn how to configure Atomix to match your existing design",
      icon: <Icon name="Gear" size="lg" />,
      href: "/docs/guides/theming",
    },
  ];

  return (
    <div>
      <Hero
        className={styles.pageHero}
        title="Migration Guide"
        subtitle="Migrate from other design systems to Atomix with ease"
        text="Complete migration guide with step-by-step instructions, class mappings, and automated tools to make the transition smooth."
        alignment="center"
        fullViewportHeight={false}
        contentWidth="800px"
        actions={
          <div className={styles.pageHero__actions}>
            <Button
              icon={<Icon name="Download" size="lg" />}
              label="Install Atomix"
              href="/docs/getting-started/installation"
              LinkComponent={Link}
            />
            <Button
              variant="secondary"
              label="Quick Start"
              icon={<Icon name="Lightning" size="lg" />}
              href="/docs/getting-started/quick-start"
              LinkComponent={Link}
            />
          </div>
        }
      />

      <Block spacing="md">
        <SectionIntro
          title="Why Migrate to Atomix?"
          text="Discover the benefits of transitioning to Atomix Design System"
          alignment="center"
        />

        <Row>
          {benefits.map((benefit, index) => (
            <GridCol key={index} md={6} lg={3} className="u-mb-4">
              <Card className="u-h-100 u-p-6">
                <div className="u-flex u-flex-column u-h-100">
                  <div
                    className={`u-w-16 u-h-16 u-rounded-md u-flex u-items-center u-justify-center u-mb-4`}
                    style={{
                      backgroundColor: `var(--atomix-color-${benefit.color}-subtle)`,
                      color: `var(--atomix-color-${benefit.color}-emphasis)`,
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="u-text-xl u-font-semibold u-mb-3 u-text-primary-emphasis">
                    {benefit.title}
                  </h3>
                  <p className="u-text-secondary-emphasis u-m-0 u-flex-grow-1 u-line-height-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </GridCol>
          ))}
        </Row>
      </Block>

      <Block spacing="md" background="secondary">
        <SectionIntro
          title="Migration Strategy"
          text="Follow these steps for a smooth migration process"
          alignment="center"
        />

        <Row>
          {migrationSteps.map((step, index) => (
            <GridCol key={index} md={6} lg={4} className="u-mb-6">
              <Card className="u-h-100 u-p-6 u-transition-fast u-hover-transform-up">
                <div className="u-flex u-flex-column u-h-100">
                  <div className="u-flex u-items-center u-mb-4">
                    <div
                      className={`u-w-12 u-h-12 u-rounded-md u-flex u-items-center u-justify-center u-me-4`}
                      style={{
                        backgroundColor: `var(--atomix-color-${step.color}-subtle)`,
                        color: `var(--atomix-color-${step.color}-emphasis)`,
                      }}
                    >
                      {step.icon}
                    </div>
                    <Badge
                      variant={step.color as any}
                      size="lg"
                      label={step.step.toString()}
                      className="u-mr-auto"
                    />
                  </div>
                  <h3 className="u-text-xl u-font-semibold u-mb-3 u-text-primary-emphasis">
                    {step.title}
                  </h3>
                  <p className="u-text-secondary-emphasis u-m-0 u-flex-grow-1 u-line-height-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            </GridCol>
          ))}
        </Row>
      </Block>

      <Block spacing="md">
        <SectionIntro
          title="Migration Resources"
          text="Tools and guides to help you through the migration process"
          alignment="center"
        />

        <Row>
          {migrationTools.map((tool, index) => (
            <GridCol key={index} md={4} className="u-mb-6">
              <Link
                href={tool.href}
                className="u-text-decoration-none u-text-inherit u-block u-h-100"
              >
                <Card className="u-h-100 u-cursor-pointer u-transition-fast u-border u-border-subtle u-hover-transform-up">
                  <div className="u-p-6 u-h-100 u-flex u-flex-column">
                    <div className="u-flex u-items-center u-mb-4">
                      <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-4 u-text-primary-emphasis">
                        {tool.icon}
                      </div>
                      <h3 className="u-text-lg u-font-semibold u-m-0 u-text-primary-emphasis">
                        {tool.title}
                      </h3>
                    </div>
                    <p className="u-text-secondary-emphasis u-mb-4 u-flex-grow-1 u-line-height-relaxed">
                      {tool.description}
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

      <Block spacing="md" background="brand">
        <Callout variant="info" title="Need Help?">
          <p className="u-mb-4 u-line-height-relaxed">
            If you need assistance with your migration, check out our{" "}
            <Link
              href="/docs/getting-started/installation"
              className="u-text-primary u-text-decoration-none u-font-medium"
            >
              installation guide
            </Link>{" "}
            or{" "}
            <Link
              href="/docs/components/overview"
              className="u-text-primary u-text-decoration-none u-font-medium"
            >
              browse our components
            </Link>
            . Our comprehensive documentation covers everything you need to
            know.
          </p>
          <div className="u-flex u-gap-3 u-flex-wrap">
            <Button
              variant="primary"
              href="/docs/getting-started/quick-start"
              icon={<Icon name="Lightning" size="lg" />}
            >
              View Quick Start Guide
            </Button>
            <Button
              variant="outline"
              href="/docs/getting-started/installation"
              icon={<Icon name="Download" size="lg" />}
            >
              Installation Guide
            </Button>
          </div>
        </Callout>
      </Block>
    </div>
  );
};

MigrationPage.displayName = "MigrationPage";

export default MigrationPage;

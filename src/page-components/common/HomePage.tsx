'use client';

import React from "react";
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { Button, Block, SectionIntro, Row, Card, GridCol } from '@shohojdhara/atomix';
import { Icon } from '@shohojdhara/atomix';
import CallToActionSection from '@/components/sections/CallToActionSection';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Icon name="Lightning" size="lg" />,
      title: "40+ Components",
      description:
        "Comprehensive component library from basic buttons to advanced charts and AtomixGlass effects.",
    },
    {
      icon: <Icon name="Palette" size="lg" />,
      title: "Design System Foundation",
      description:
        "Complete design tokens, ITCSS architecture, and powerful layout system with grid and masonry.",
    },
    {
      icon: <Icon name="Shield" size="lg" />,
      title: "Accessibility First",
      description:
        "WCAG 2.1 AA compliant with full keyboard navigation, screen reader support, and focus management.",
    },
    {
      icon: <Icon name="Code" size="lg" />,
      title: "Dual Implementation",
      description:
        "React components and vanilla JavaScript classes with TypeScript support and comprehensive docs.",
    },
    {
      icon: <Icon name="Sparkle" size="lg" />,
      title: "AtomixGlass Effects",
      description:
        "Advanced WebGL-powered glass morphism effects with multiple variants and performance optimization.",
    },
    {
      icon: <Icon name="Stack" size="lg" />,
      title: "Complete Theming",
      description:
        "Multiple built-in themes, CSS custom properties, and SCSS configuration for brand integration.",
    },
  ];

  const quickLinks = [
    {
      title: "Getting Started",
      description: "Installation guide and 5-minute quick start tutorial",
      path: "/docs/getting-started/installation",
      external: false,
    },
    {
      title: "Design Tokens",
      description: "Colors, spacing, typography, and elevation system",
      path: "/docs/design-tokens/colors",
      external: false,
    },
    {
      title: "Components",
      description: "40+ components with React and vanilla JS implementations",
      path: "/docs/components/overview",
      external: false,
    },
    {
      title: "Layout System",
      description: "Grid, masonry, and responsive layout patterns",
      path: "/docs/layouts/grid",
      external: false,
    },
    {
      title: "AtomixGlass",
      description: "Advanced WebGL glass morphism effects",
      path: "/docs/components/atomix-glass",
      external: false,
    },
    {
      title: "Theming Guide",
      description: "Complete customization and brand integration",
      path: "/docs/guides/theming",
      external: false,
    },
  ];

  return (
    <>
          {/* Features Section */}
          <Block spacing="sm" >
            <SectionIntro title="Why Choose Atomix?" alignment="center" />

            <Row>
              {features.map((feature, index) => (
                <GridCol key={index} md={6} lg={4} className="u-mb-8">
                  <Card>
                    <div className="u-d-inline-flex u-align-items-center u-justify-content-center u-rounded u-bg-brand-subtle u-text-brand-emphasis u-mb-4 u-p-2">
                      {feature.icon}
                    </div>
                    <h3 className="u-fs-lg u-fw-600 u-mb-2 u-text-primary-emphasis">
                      {feature.title}
                    </h3>
                    <p className="u-text-secondary-emphasis u-lh-lg">
                      {feature.description}
                    </p>
                  </Card>
                </GridCol>
              ))}
            </Row>
          </Block>

          {/* Quick Links Section */}
          <Block background="secondary" spacing="sm">
            <SectionIntro title="Quick Start" alignment="center" />
            <Row>
              {quickLinks.map((link, index) => (
                <GridCol key={index} sm={6} lg={4} className="u-mb-6">
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                    >
                      <Card className="u-p-6 u-border u-border-subtle u-cursor-pointer u-bg-primary-subtle u-transition-fast u-hover-transform-up u-h-100">
                        <LinkContent
                          title={link.title}
                          description={link.description}
                          external={link.external}
                        />
                      </Card>
                    </a>
                  ) : (
                    <Link
                      href={link.path}
                      className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                    >
                      <Card className="u-p-6 u-border u-border-subtle u-cursor-pointer u-bg-primary-subtle u-transition-fast u-hover-transform-up u-h-100">
                        <LinkContent
                          title={link.title}
                          description={link.description}
                          external={link.external}
                        />
                      </Card>
                    </Link>
                  )}
                </GridCol>
              ))}
            </Row>
          </Block>

          {/* CTA Section */}
          <CallToActionSection
            title="Ready to get started?"
            text="Install Atomix in your React project and start building amazing user interfaces today."
            primaryAction={
              <div className="u-bg-tertiary-subtle u-rounded u-p-4 u-font-mono u-fs-sm">
                <code className="u-text-primary-emphasis">npm install @shohojdhara/atomix</code>
              </div>
            }
            secondaryAction={
              <Button 
                href="/docs/getting-started/installation"
              >
                View Installation Guide
                <Icon name="ArrowRight" size={16} className="u-ms-2" />
              </Button>
            }
          />
    </>
  );
};

const LinkContent: React.FC<{
  title: string;
  description: string;
  external: boolean;
  icon?: React.ReactNode;
}> = ({ title, description, external, icon }) => (
  <div>
    <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-2">
      <div className="u-d-flex u-align-items-center">
        {icon || (
          <Icon name={"FileText" as const} size={20} className="u-me-2" />
        )}
        <h3 className="u-fs-lg u-fw-600 u-ms-2 u-m-0 u-text-primary-emphasis">
          {title}
        </h3>
      </div>
      {external && (
        <Icon name={"Link" as const} size={16} className="u-opacity-60" />
      )}
    </div>
    <p className="u-text-secondary-emphasis u-lh-lg u-m-0 u-ms-10">
      {description}
    </p>
  </div>
);

export default HomePage;
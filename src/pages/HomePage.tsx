import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  Icon,
  Hero,
  SectionIntro,
  GridCol,
  Row,
  Block,
  ColorModeToggle,
} from "@shohojdhara/atomix";

const HomePage: React.FC<{ colorModeToggle?: () => boolean }> = ({
  colorModeToggle = () => false,
}) => {
  const navigate = useNavigate();
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
    <div className="u-min-vh-100">
      <main>
        <Helmet>
          <title>
            Atomix - Comprehensive Design System & Component Library
          </title>
          <meta
            name="description"
            content="A comprehensive design system with 40+ components, layouts, design tokens, and AtomixGlass effects. Built for React and vanilla JavaScript with accessibility and performance in mind."
          />
        </Helmet>
        
        {/* Full-width Hero Section */}
        <Hero
          subtitle="A Comprehensive Design System"
          title="Build Amazing UIs with Atomix"
          text="A modern design system with 40+ components, comprehensive layouts, design tokens, and advanced effects like AtomixGlass. Built for React and vanilla JavaScript with accessibility and performance in mind."
          alignment="center"
          backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
          contentWidth="100%"
          className="u-py-20"
          showOverlay={colorModeToggle() ? false : true}
          actions={
            <>
              <Button
                glass
                variant="primary"
                icon={<Icon name="ArrowRight" size="sm" />}
                onClick={() => navigate('/docs/getting-started/installation')}
              >
                Get Started
              </Button>
              <Button
                glass
                variant="info"
                onClick={() => navigate('/docs/components/overview')}
              >
                Explore Components
              </Button>
            </>
          }
          parallax={true}
          parallaxIntensity={0.7}
          glass={{
            displacementScale: 30,
            blurAmount: 5,
            elasticity: 0,
            enableLiquidBlur: true,
            mode: "shader",
            shaderVariant: "PremiumGlass",
            padding: "32px 20px",
          } as any}
        />

        <div className="page">
          {/* Features Section */}
          <Block spacing="sm" className="features-section">
            <SectionIntro title="Why Choose Atomix?" alignment="center" />

            <Row>
              {features.map((feature, index) => (
                <GridCol key={index} md={6} lg={4} className="u-mb-8">
                  <Card className="atomix-card-enhanced">
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
                  <Card className="atomix-card-enhanced u-p-6 u-border u-border-solid u-transition u-transform u-duration-200 u-ease-in-out hover:u-translate-y--1 u-cursor-pointer u-bg-primary-subtle">
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="u-d-block u-link-none"
                      >
                        <LinkContent
                          title={link.title}
                          description={link.description}
                          external={link.external}
                        />
                      </a>
                    ) : (
                      <Link to={link.path} className="u-d-block u-link-none">
                        <LinkContent
                          title={link.title}
                          description={link.description}
                          external={link.external}
                        />
                      </Link>
                    )}
                  </Card>
                </GridCol>
              ))}
            </Row>
          </Block>

          {/* CTA Section */}
          <Block spacing="sm">
            <Row justifyContent="center">
              <GridCol lg={8}>
                <Card className="atomix-card-enhanced u-bg-brand-subtle">
                  <h2 className="u-text-primary-emphasis">
                    Ready to get started?
                  </h2>
                  <p className="u-text-secondary-emphasis u-mb-6 u-lh-lg">
                    Install Atomix and get access to 40+ components,
                    comprehensive layouts, design tokens, and advanced effects.
                    Perfect for React and vanilla JavaScript projects.
                  </p>
                  <div className="u-d-flex u-gap-4 u-flex-wrap">
                    <Card className="u-bg-tertiary-subtle">
                      <code className="u-font-mono u-fs-sm u-text-primary-emphasis">
                        npm install @shohojdhara/atomix
                      </code>
                    </Card>
                    <Link to="/docs/getting-started/installation">
                      <Button
                        label="View Installation Guide"
                        icon={<Icon name="ArrowRight" size={16} />}
                      />
                    </Link>
                  </div>
                </Card>
              </GridCol>
            </Row>
          </Block>
        </div>
      </main>
    </div>
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
        {icon || <Icon name={"FileText" as const} size={20} className="u-me-2" />}
        <h3 className="u-fs-lg u-fw-600 u-ms-2 u-m-0 u-text-primary-emphasis">
          {title}
        </h3>
      </div>
      {external && <Icon name={"Link" as const} size={16} className="u-opacity-60" />}
    </div>
    <p className="u-text-secondary-emphasis u-lh-lg u-m-0 u-ms-10">
      {description}
    </p>
  </div>
);

export default HomePage;
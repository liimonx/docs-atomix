import React from "react";
import { Link } from "react-router-dom";
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
} from "@shohojdhara/atomix";

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Icon name="Shield" size="lg" />,
      title: "Fast & Modern",
      description:
        "Built with performance in mind using modern React patterns and optimizations.",
    },
    {
      icon: <Icon name="Palette" size="lg" />,
      title: "Customizable",
      description:
        "Flexible theming system with CSS custom properties and design tokens.",
    },
    {
      icon: <Icon name="Shield" size="lg" />,
      title: "Accessible",
      description:
        "WCAG 2.1 compliant components with full keyboard and screen reader support.",
    },
    {
      icon: <Icon name="Code" size="lg" />,
      title: "Developer Friendly",
      description:
        "TypeScript-first with excellent IntelliSense and comprehensive documentation.",
    },
  ];

  const quickLinks = [
    {
      title: "Getting Started",
      description: "Learn how to install and set up Atomix in your project",
      path: "/docs/introduction",
      external: false,
    },
    {
      title: "Components",
      description: "Explore our comprehensive component library",
      path: "/docs/components/button",
      external: false,
    },
    {
      title: "Theming Guide",
      description: "Customize the look and feel of your application",
      path: "/docs/theming",
      external: false,
    },
    {
      title: "GitHub Repository",
      description: "View source code and contribute to the project",
      path: "https://github.com/shohojdhara/atomix",
      external: true,
    },
  ];

  return (
    <div className="u-min-vh-100">
      <main>
        <Helmet>
          <title>Atomix - Modern React Component Library</title>
          <meta
            name="description"
            content="A comprehensive, accessible React component library built with TypeScript. Fast, customizable, and developer-friendly."
          />
        </Helmet>

        <div className="home-page">
          {/* Hero Section */}
          <Hero
            subtitle="A Comprehensive Design system"
            title="Build Beautiful UIs with Atomix"
            text="A modern React component library that helps you build accessible, customizable, and performant user interfaces with ease."
            alignment="center"
            backgroundImageSrc="https://images.unsplash.com/photo-1760976180663-946ff68fa64c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1034"
            actions={
              <>
                <Link to="/docs/introduction">
                  <Button
                    glass
                    asChild
                    label="Get Started"
                    icon={<Icon name="ArrowRight" size="sm" />}
                  ></Button>
                </Link>
                <Link to="/docs/components/button">
                  <Button
                    glass
                    variant="secondary"
                    asChild
                    label="Explore Components"
                  />
                </Link>
              </>
            }
            contentWidth="600px"
            glass
          />

          {/* Features Section */}
          <Block spacing="sm">
            <SectionIntro
              title="Why Choose Atomix?"
              alignment="center"
            />

            <Row>
              {features.map((feature, index) => (
                <GridCol key={index} md={6} lg={3} className="u-mb-8">
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
                <GridCol key={index} sm={6} lg={3} className="u-mb-6">
                  <Card className="u-p-6 u-border u-border-solid u-transition u-transform u-duration-200 u-ease-in-out hover:u-translate-y--1 hover:u-shadow-lg u-cursor-pointer u-bg-primary-subtle">
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
                  <Card className="u-bg-brand-subtle">
                    <h2 className="u-text-primary-emphasis">
                      Ready to get started?
                    </h2>
                    <p className="u-text-secondary-emphasis u-mb-6 u-lh-lg">
                      Install Atomix in your React project and start building
                      amazing user interfaces today.
                    </p>
                    <div className="u-d-flex u-gap-4">
                      <Card className="u-bg-tertiary-subtle">
                        <code className="u-font-mono u-fs-sm u-text-primary-emphasis">
                          npm install @shohojdhara/atomix
                        </code>
                      </Card>
                      <Link to="/docs/installation">
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
        {icon || <Icon name="FileText" size={20} className="u-me-2" />}
        <h3 className="u-fs-lg u-fw-600 u-ms-2 u-m-0 u-text-primary-emphasis">
          {title}
        </h3>
      </div>
      {external && <Icon name="Link" size={16} className="u-opacity-60" />}
    </div>
    <p className="u-text-secondary-emphasis u-lh-lg u-m-0 u-ms-10">
      {description}
    </p>
  </div>
);

export default HomePage;

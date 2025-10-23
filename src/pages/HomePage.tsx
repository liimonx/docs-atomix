import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  Icon,
  Hero,
  SectionIntro,
  River,
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
    <>
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
        <SectionIntro title="Why Choose Atomix?" alignment="center" size="lg" />
        <section style={{ padding: "0 2rem 4rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {features.map((feature, index) => (
                <Card key={index}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "var(--atomix-primary-light)",
                      color: "var(--atomix-primary)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      marginBottom: "1rem",
                      color: "var(--atomix-text-primary)",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--atomix-text-secondary)",
                      lineHeight: "1.6",
                    }}
                  >
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section style={{ backgroundColor: "var(--atomix-bg-secondary)" }}>
          <SectionIntro title="Quick Start" alignment="center" size="lg" />
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 2rem 4rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {quickLinks.map((link, index) => (
                <Card
                  key={index}
                  className="p-6 border border-solid transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer bg-[var(--atomix-bg-primary)]"
                >
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                      }}
                    >
                      <LinkContent
                        title={link.title}
                        description={link.description}
                        external={link.external}
                      />
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                      }}
                    >
                      <LinkContent
                        title={link.title}
                        description={link.description}
                        external={link.external}
                      />
                    </Link>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <River
          title="Ready to get started?"
          text="Install Atomix in your React project and start building amazing user interfaces today."
          center
          actions={
            <>
              <div
                style={{
                  backgroundColor: "var(--atomix-bg-tertiary)",
                  borderRadius: "8px",
                  padding: "1rem",
                  marginBottom: "2rem",
                  fontFamily: "monospace",
                  fontSize: "0.875rem",
                }}
              >
                <code style={{ color: "var(--atomix-text-primary)" }}>
                  npm install @shohojdhara/atomix
                </code>
              </div>
              <Link to="/docs/installation">
                <Button asChild>
                  View Installation Guide
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </Link>
            </>
          }
        />
      </div>
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon || <Icon name="FileText" size={20} className="mr-2" />}
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: "600",
            margin: "0 0 0 0.5rem",
            color: "var(--atomix-text-primary)",
          }}
        >
          {title}
        </h3>
      </div>
      {external && <Icon name="ArrowRight" size={16} />}
    </div>
    <p
      style={{
        margin: "0 0 0 2.5rem",
        color: "var(--atomix-text-secondary)",
        lineHeight: "1.5",
      }}
    >
      {description}
    </p>
  </div>
);

export default HomePage;

"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Layers, Palette, Code, Sparkles } from "lucide-react";
import { HomePageLayout } from "@/components/layout/HomePageLayout";
import {
  Hero,
  Block,
  Card,
  Button,
  Badge,
  Icon,
  Row,
  GridCol,
  SectionIntro,
  AtomixGlass,
} from "@shohojdhara/atomix";
import CallToActionSection from "@/components/sections/CallToActionSection";
import { componentMetadata } from "@/data/components";

// Note: This page uses client components (HomePageLayout has interactive features)
// Metadata is handled in app/layout.tsx for the root page
export default function Page() {
  const router = useRouter();

  // Statistics data
  const quickStats = [
    { label: "Components", value: "40+", icon: <Layers size={20} /> },
    { label: "Design Tokens", value: "200+", icon: <Palette size={20} /> },
    { label: "Utility Classes", value: "500+", icon: <Code size={20} /> },
    { label: "Chart Types", value: "15+", icon: <Sparkles size={20} /> },
  ];

  // Features data
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

  // Philosophy data
  const philosophies = [
    {
      icon: <Icon name="Heart" size="lg" />,
      title: "Principled Design",
      description:
        "Every design decision stems from our core principles of clarity, consistency, and inclusivity. We believe beautiful interfaces should be accessible to everyone.",
    },
    {
      icon: <Icon name="Lightning" size="lg" />,
      title: "Performance Conscious",
      description:
        "We craft lightweight solutions that prioritize performance without sacrificing functionality. Less code, more speed, better experience.",
    },
    {
      icon: <Icon name="GitMerge" size="lg" />,
      title: "Scalable Architecture",
      description:
        "Built on ITCSS methodology, our architecture scales from small projects to enterprise applications with predictable organization.",
    },
    {
      icon: <Icon name="Globe" size="lg" />,
      title: "Universally Accessible",
      description:
        "Accessibility isn't an add-on but a foundation. Every component meets WCAG 2.1 AA standards with full keyboard navigation support.",
    },
    {
      icon: <Icon name="Gear" size="lg" />,
      title: "Developer Experience",
      description:
        "Thoughtful APIs, comprehensive documentation, and intuitive customization make development enjoyable and efficient.",
    },
    {
      icon: <Icon name="ArrowsClockwise" size="lg" />,
      title: "Future-Proof",
      description:
        "Our forward-looking approach ensures compatibility with emerging technologies while maintaining stability for production systems.",
    },
  ];

  // Quick links data
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

  // Featured components (first 6 from metadata)
  const featuredComponents = componentMetadata.slice(0, 6);

  // LinkContent component for quick links
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

  return (
    <HomePageLayout>
      {/* Hero Section */}
      <Hero
        className="u-pt-52 u-pb-40"
        subtitle={
          (
            <Badge
              // glass={{ className: "u-d-inline-block", children: <></> }}
              label="Simplicity in motion"
            />
          ) as any
        }
        title="Build Amazing UIs with Atomix"
        text="A modern design system with 40+ components, comprehensive layouts, design tokens, and advanced effects. Built for React and vanilla JavaScript with accessibility and performance in mind. Trusted by developers worldwide for creating beautiful, responsive interfaces."
        alignment="center"
        videoBackground="https://cdn.pixabay.com/video/2023/07/07/170464-843367906_large.mp4"
        glass={{
          displacementScale: 100,
          blurAmount: 1.8,
          cornerRadius: 24,
          padding: "1rem 3rem",
          elasticity: 0,
          children: <></>,
        }}
        actions={
          <div className="u-d-flex u-flex-wrap u-gap-4 u-justify-content-center">
            <Button
              iconOnly
              glass
              variant="primary"
              icon={<Icon name="Rocket" />}
              iconPosition="start"
              text="Get Started"
            />
            <Button
              iconOnly
              glass
              variant="error"
              icon={<Icon name="Code" />}
              iconPosition="start"
              text="View Components"
            />
            <Button
              iconOnly
              glass
              variant="info"
              icon={<Icon name="Sparkle" />}
              iconPosition="start"
              text="See Examples"
            />
          </div>
        }
        // backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
      />

      {/* Statistics Section */}
      <Block spacing="sm" background="secondary">
        <SectionIntro
          title="By the Numbers"
          text="Atomix provides a comprehensive set of tools and components"
          alignment="center"
        />
        <Row>
          {quickStats.map((stat, index) => (
            <GridCol key={index} sm={6} lg={3} className="u-mb-4">
              <Card title={stat.value} text={stat.label} icon={stat.icon} />
            </GridCol>
          ))}
        </Row>
      </Block>

      {/* Features Section */}
      <Block spacing="sm">
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

      {/* Philosophy Section */}
      <Block background="secondary" spacing="sm">
        <SectionIntro
          title="Our Design Philosophy"
          text="Thoughtful principles that guide our approach to creating exceptional user interfaces"
          alignment="center"
        />
        <Row>
          {philosophies.map((philosophy, index) => (
            <GridCol key={index} md={6} lg={4} className="u-mb-8">
              <Card>
                <div className="u-d-inline-flex u-align-items-center u-justify-content-center u-rounded u-bg-brand-subtle u-text-brand-emphasis u-mb-4 u-p-2">
                  {philosophy.icon}
                </div>
                <h3 className="u-fs-lg u-fw-600 u-mb-2 u-text-primary-emphasis">
                  {philosophy.title}
                </h3>
                <p className="u-text-secondary-emphasis u-lh-lg">
                  {philosophy.description}
                </p>
              </Card>
            </GridCol>
          ))}
        </Row>
      </Block>

      {/* Quick Links Section */}
      <Block spacing="sm">
        <SectionIntro title="Quick Start" alignment="center" />
        <Row>
          {quickLinks.map((link, index) => (
            <GridCol key={index} sm={6} lg={4} className="u-mb-6">
              <Card className="atomix-card-enhanced u-h-100 u-bg-brand-subtle">
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
                  <Link href={link.path} className="u-d-block u-link-none">
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

      {/* Call-to-Action Section */}
      <Block
        background="secondary"
        spacing="sm"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <CallToActionSection
          title="Ready to get started?"
          text="Install Atomix in your React project and start building amazing user interfaces today."
          glass
          primaryAction={
            <AtomixGlass elasticity={0} blurAmount={0} displacementScale={0}>
              <div className="u-d-flex u-h-100 u-px-5 u-py-3 u-align-items-center u-justify-content-center u-text-error-emphasis u-rounded">
                <Icon name="Terminal" size={24} className="u-me-2" />
                <code className="u-text-error-emphasis">
                  npm install @shohojdhara/atomix
                </code>
              </div>
            </AtomixGlass>
          }
          secondaryAction={
            <Link href="/docs/getting-started/installation">
              <Button
                asChild
                glass={{ blurAmount: 0, displacementScale: 0 }}
                variant="primary"
                icon={<Icon name="ArrowRight" size="md" />}
                label="View Installation Guide"
              />
            </Link>
          }
        />
      </Block>
    </HomePageLayout>
  );
}

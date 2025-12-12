'use client';

import React, { FC } from 'react';
import Link from "next/link";
import toast from "react-hot-toast";
import {
  Button,
  Card,
  Hero,
  GridCol,
  Row,
  Block,
  Icon,
  Callout,
  SectionIntro,
} from "@shohojdhara/atomix";
import { GlassProps } from "@/types/atomix-components";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import styles from '@/styles/PageHero.module.scss';

interface GettingStartedPageProps {
  type: "introduction" | "installation" | "quickstart" | "theming";
}

const GettingStartedPage: FC<GettingStartedPageProps> = ({ type }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const heroGlass: GlassProps = { padding: "20px" } as any;

  // Prevent hydration mismatch by only rendering glass effect on client
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      toast.custom(
        (t) => (
          <Callout
            toast
            variant="success"
            glass
            title="Code copied to clipboard!"
            icon={<Icon name="CheckCircle" size={20} />}
            className={t.visible ? "u-opacity-100" : "u-opacity-0"}
            style={{
              transition: "opacity 0.3s ease-in-out",
              minWidth: "300px",
            }}
          >
            <p className="u-m-0 u-fs-sm">
              The code has been copied to your clipboard.
            </p>
          </Callout>
        ),
        {
          duration: 3000,
          position: "bottom-right",
        }
      );
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast.custom(
        (t) => (
          <Callout
            variant="error"
            toast
            glass
            title="Failed to copy code"
            icon={<Icon name="XCircle" size={20} />}
            className={t.visible ? "u-opacity-100" : "u-opacity-0"}
            style={{
              transition: "opacity 0.3s ease-in-out",
              minWidth: "300px",
            }}
          >
            <p className="u-m-0 u-fs-sm">
              Unable to copy code to clipboard. Please try again.
            </p>
          </Callout>
        ),
        {
          duration: 4000,
          position: "bottom-right",
        }
      );
    }
  };

  const getPageContent = () => {
    switch (type) {
      case "introduction":
        const introductionGlass: GlassProps | undefined = isMounted ? {
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
          children: null,
        } : undefined;

        return {
          title: "Introduction to Atomix",
          description: "Welcome to Atomix - A modern React component library",
          content: (
            <div>
              <Hero
                glass={introductionGlass}
                className={styles.pageHero}
                title="Welcome to Atomix"
                subtitle="Comprehensive Design System"
                text="A complete design system with 40+ components, layouts, design tokens, and AtomixGlass effects. Built for React and vanilla JavaScript with accessibility and performance in mind."
                alignment="center"
                backgroundImageSrc="https://images.unsplash.com/photo-1739981760998-6d6340522cbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2532"
                showOverlay={true}
                fullViewportHeight={false}
                contentWidth="900px"
                actions={
                  <div className={styles.pageHero__actions}>
                    <Button
                      glass
                      icon={<Icon name="Download" size={16} />}
                      label="Get Started"
                      href="/docs/getting-started/installation"
                    />
                    <Button
                      glass
                      variant="secondary"
                      label="Browse Components"
                      icon={<Icon name="BookOpen" size={16} />}
                      href="/docs/components/overview"
                    />
                  </div>
                }
              />

              <Block spacing="md" container={{type: 'fluid'}}>
                <SectionIntro
                  title="What is Atomix?"
                  text="A comprehensive design system that provides everything you need to build modern web applications"
                  alignment="center"
                />
                <p
                  className="u-text-secondary-emphasis u-mb-6 u-text-center"
                  style={{ 
                    lineHeight: "var(--atomix-line-height-relaxed)",
                    maxWidth: '800px',
                    margin: '0 auto 2rem'
                  }}
                >
                  Atomix is a comprehensive design system that provides
                  everything you need to build modern web applications. With 40+
                  components, a complete layout system, design tokens, ITCSS
                  architecture, and advanced effects like AtomixGlass, it offers
                  both React components and vanilla JavaScript implementations.
                  Built with accessibility, performance, and developer
                  experience as core principles.
                </p>
                <Row>
                  {[
                    {
                      icon: <Icon name="Lightning" size={24} />,
                      title: "40+ Components",
                      description:
                        "Comprehensive component library from basic buttons to advanced charts, modals, and AtomixGlass effects.",
                      color: "primary",
                    },
                    {
                      icon: <Icon name="Palette" size={24} />,
                      title: "Complete Design System",
                      description:
                        "Design tokens, ITCSS architecture, layout system with grid and masonry, plus multiple built-in themes.",
                      color: "success",
                    },
                    {
                      icon: <Icon name="Shield" size={24} />,
                      title: "Accessibility First",
                      description:
                        "WCAG 2.1 AA compliant with full keyboard navigation, screen reader support, and focus management.",
                      color: "warning",
                    },
                    {
                      icon: <Icon name="Code" size={24} />,
                      title: "Dual Implementation",
                      description:
                        "React components and vanilla JavaScript classes with full TypeScript support and comprehensive documentation.",
                      color: "secondary",
                    },
                  ].map((feature, index) => (
                    <GridCol key={index} md={6} lg={3} className="u-mb-4">
                      <Card className="u-h-100 u-p-6 u-transition-fast u-hover-transform-up">
                        <div className="u-d-flex u-flex-column u-h-100">
                          <div 
                            className={`u-w-16 u-h-16 u-br-md u-d-flex u-align-items-center u-justify-content-center u-mb-4`}
                            style={{
                              backgroundColor: `var(--atomix-color-${feature.color}-subtle)`,
                              color: `var(--atomix-color-${feature.color}-emphasis)`
                            }}
                          >
                            {feature.icon}
                          </div>
                          <h3 className="u-fs-xl u-fw-semibold u-m-0 u-mb-3 u-text-primary-emphasis">
                            {feature.title}
                          </h3>
                          <p
                            className="u-text-secondary-emphasis u-m-0 u-flex-grow-1 u-line-height-relaxed"
                          >
                            {feature.description}
                          </p>
                        </div>
                      </Card>
                    </GridCol>
                  ))}
                </Row>
              </Block>

              <Block spacing="md" background="secondary" container={{type: 'fluid'}}>
                <SectionIntro
                  title="Key Features"
                  text="Everything you need to build modern, accessible, and performant user interfaces"
                  alignment="center"
                />
                <Row>
                  {[
                    "40+ components with React and vanilla JS implementations",
                    "Complete layout system with grid and masonry layouts",
                    "Design tokens for colors, spacing, typography, and elevation",
                    "ITCSS architecture with utilities and customization",
                    "AtomixGlass WebGL effects with performance optimization",
                    "Multiple built-in themes and complete customization",
                    "WCAG 2.1 AA accessibility compliance",
                    "TypeScript-first with comprehensive type definitions",
                    "Tree-shakable and SSR compatible",
                  ].map((feature, index) => (
                    <GridCol key={index} md={6} lg={4} className="u-mb-4">
                      <Card className="u-p-4 u-transition-fast u-hover-transform-up" icon={<Icon name="CheckCircle" size={20} className="u-text-success-emphasis" />} title={feature} row={true}>
                       
                      </Card>
                    </GridCol>
                  ))}
                </Row>
              </Block>

              <Block spacing="md" background="brand" container={{type: 'fluid'}}>
                <Row justifyContent="center">
                  <GridCol lg={8}>
                    <Card className="u-p-8 u-text-center">
                      <h2 className="u-fs-3xl u-fw-bold u-mb-4 u-text-primary-emphasis">
                        Ready to Get Started?
                      </h2>
                      <p
                        className="u-text-secondary-emphasis u-mb-6 u-line-height-relaxed"
                        style={{
                          maxWidth: '600px',
                          margin: '0 auto 2rem'
                        }}
                      >
                        Install Atomix in your React project and start
                        building amazing user interfaces today.
                      </p>
                      <div className="u-d-flex u-gap-3 u-flex-wrap u-justify-content-center">
                        <Button
                          icon={<Icon name="Download" size={16} />}
                          label="Install Atomix"
                          href="/docs/getting-started/installation"
                        />
                        <Button
                          variant="outline"
                          icon={<Icon name="Rocket" size={16} />}
                          label="Quick Start Guide"
                          href="/docs/getting-started/quick-start"
                        />
                        <Button
                          variant="outline"
                          icon={<Icon name="BookOpen" size={16} />}
                          label="Browse Components"
                          href="/docs/components/overview"
                        />
                      </div>
                    </Card>
                  </GridCol>
                </Row>
              </Block>
            </div>
          ),
        };

      case "installation":
        const installationGlass: GlassProps | undefined = isMounted ? {
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
          children: null,
        } : undefined;

        return {
          title: "Installation",
          description: "Install Atomix in your React project",
          content: (
            <div>
              <Hero
                glass={installationGlass}
                className={styles.pageHero}
                backgroundImageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
                title="Installation"
                subtitle="Get Atomix up and running in your project"
                text="Install Atomix using npm, yarn, or pnpm. Follow our simple setup guide to start building with Atomix components."
                alignment="center"
                showOverlay={true}
                fullViewportHeight={false}
                contentWidth="800px"
                actions={
                  <div className={styles.pageHero__actions}>
                    <Button
                      glass
                      icon={<Icon name="Download" size={16} />}
                      label="Quick Start"
                      href="/docs/getting-started/quick-start"
                    />
                    <Button
                      glass
                      variant="secondary"
                      label="Browse Components"
                      icon={<Icon name="BookOpen" size={16} />}
                      href="/docs/components/overview"
                    />
                  </div>
                }
              />

              <Block spacing="md" container={{type: 'fluid'}}>
                <h2 className="u-fs-3xl u-fw-bold u-mb-4 u-text-center">Prerequisites</h2>
                <p
                  className="u-text-secondary-emphasis u-mb-6 u-text-center"
                  style={{ lineHeight: "var(--atomix-line-height-relaxed)", maxWidth: '600px', margin: '0 auto 2rem' }}
                >
                  Before installing Atomix, make sure you have the following requirements met:
                </p>
                <Row>
                  {[
                    {
                      icon: <Icon name="Code" size={24} />,
                      title: "React 18.0.0+",
                      desc: "React library for building user interfaces",
                      color: "primary",
                    },
                    {
                      icon: <Icon name="Gear" size={24} />,
                      title: "Node.js 16.0.0+",
                      desc: "JavaScript runtime environment",
                      color: "success",
                    },
                    {
                      icon: <Icon name="Download" size={24} />,
                      title: "Package Manager",
                      desc: "npm, yarn, or pnpm",
                      color: "secondary",
                    },
                  ].map((item, index) => (
                    <GridCol key={index} md={4} className="u-mb-4">
                      <Card className="u-h-100 u-p-6">
                        <div className="u-d-flex u-flex-column u-h-100">
                          <div 
                            className={`u-w-16 u-h-16 u-br-md u-d-flex u-align-items-center u-justify-content-center u-mb-4`}
                            style={{
                              backgroundColor: `var(--atomix-color-${item.color}-subtle)`,
                              color: `var(--atomix-color-${item.color}-emphasis)`
                            }}
                          >
                            {item.icon}
                          </div>
                          <h3 className="u-fs-xl u-fw-semibold u-m-0 u-mb-2 u-text-primary-emphasis">
                            {item.title}
                          </h3>
                          <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </Card>
                    </GridCol>
                  ))}
                </Row>
              </Block>

              <Block spacing="md" background="secondary" container={{type: 'fluid'}}>
                <h2 className="u-fs-3xl u-fw-bold u-mb-4 u-text-center">
                  Installation Methods
                </h2>
                <p className="u-text-secondary-emphasis u-mb-6 u-text-center" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                  Choose the installation method that best fits your project setup. All methods install the same package.
                </p>
                <Row>
                  <GridCol md={4} className="u-mb-6">
                    <Card className="u-h-100 u-transition-fast u-hover-transform-up">
                      <div className="u-p-6 u-border-bottom">
                        <div className="u-d-flex u-align-items-center u-mb-3">
                          <div className="u-w-12 u-h-12 u-bg-primary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-primary-emphasis">
                            <Icon name="Download" size={24} />
                          </div>
                          <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                            npm
                          </h3>
                        </div>
                        <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed">
                          Install via npm package manager. Recommended for most projects.
                        </p>
                      </div>
                      <div className="u-p-6">
                        <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden u-border u-border-subtle">
                          <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-3 u-border-bottom u-bg-surface">
                            <span className="u-fs-xs u-text-secondary-emphasis u-fw-medium">
                              bash
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                copyToClipboard(
                                  "npm install @shohojdhara/atomix",
                                  "npm-install"
                                )
                              }
                            >
                              {copiedCode === "npm-install" ? (
                                <Icon name="CheckCircle" size={16} />
                              ) : (
                                <Icon name="Copy" size={16} />
                              )}
                            </Button>
                          </div>
                          <pre className="u-m-0 u-p-4 u-fs-sm u-text-primary-emphasis">
                            <code>npm install @shohojdhara/atomix</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                  <GridCol md={4} className="u-mb-6">
                    <Card className="u-h-100 u-transition-fast u-hover-transform-up">
                      <div className="u-p-6 u-border-bottom">
                        <div className="u-d-flex u-align-items-center u-mb-3">
                          <div className="u-w-12 u-h-12 u-bg-success-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-success-emphasis">
                            <Icon name="Download" size={24} />
                          </div>
                          <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                            yarn
                          </h3>
                        </div>
                        <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed">
                          Install via yarn package manager. Great for monorepos and workspaces.
                        </p>
                      </div>
                      <div className="u-p-6">
                        <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden u-border u-border-subtle">
                          <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-3 u-border-bottom u-bg-surface">
                            <span className="u-fs-xs u-text-secondary-emphasis u-fw-medium">
                              bash
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                copyToClipboard(
                                  "yarn add @shohojdhara/atomix",
                                  "yarn-install"
                                )
                              }
                            >
                              {copiedCode === "yarn-install" ? (
                                <Icon name="CheckCircle" size={16} />
                              ) : (
                                <Icon name="Copy" size={16} />
                              )}
                            </Button>
                          </div>
                          <pre className="u-m-0 u-p-4 u-fs-sm u-text-primary-emphasis">
                            <code>yarn add @shohojdhara/atomix</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                  <GridCol md={4} className="u-mb-6">
                    <Card className="u-h-100 u-transition-fast u-hover-transform-up">
                      <div className="u-p-6 u-border-bottom">
                        <div className="u-d-flex u-align-items-center u-mb-3">
                          <div className="u-w-12 u-h-12 u-bg-secondary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-secondary-emphasis">
                            <Icon name="Download" size={24} />
                          </div>
                          <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                            pnpm
                          </h3>
                        </div>
                        <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed">
                          Install via pnpm package manager. Fast and efficient disk space usage.
                        </p>
                      </div>
                      <div className="u-p-6">
                        <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden u-border u-border-subtle">
                          <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-3 u-border-bottom u-bg-surface">
                            <span className="u-fs-xs u-text-secondary-emphasis u-fw-medium">
                              bash
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                copyToClipboard(
                                  "pnpm add @shohojdhara/atomix",
                                  "pnpm-install"
                                )
                              }
                            >
                              {copiedCode === "pnpm-install" ? (
                                <Icon name="CheckCircle" size={16} />
                              ) : (
                                <Icon name="Copy" size={16} />
                              )}
                            </Button>
                          </div>
                          <pre className="u-m-0 u-p-4 u-fs-sm u-text-primary-emphasis">
                            <code>pnpm add @shohojdhara/atomix</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                </Row>
              </Block>

              <Block spacing="md" container={{type: 'fluid'}}>
                <h2 className="u-fs-3xl u-fw-bold u-mb-4 u-text-center">Next Steps</h2>
                <p className="u-text-secondary-emphasis u-mb-6 u-text-center" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                  Once installed, explore these resources to get the most out of Atomix
                </p>
                <Row>
                  <GridCol md={6} className="u-mb-4">
                    <Link
                      href="/docs/getting-started/quick-start"
                      className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                    >
                      <Card className="u-h-100 u-cursor-pointer u-border u-border-subtle u-transition-fast u-hover-transform-up">
                        <div className="u-p-6">
                          <div className="u-d-flex u-align-items-center u-mb-4">
                            <div className="u-w-12 u-h-12 u-bg-primary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-4 u-text-primary-emphasis">
                              <Icon name="Lightning" size={24} />
                            </div>
                            <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                              Quick Start Guide
                            </h3>
                          </div>
                          <p
                            className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed"
                          >
                            Learn how to build your first application with Atomix components in just 5 minutes
                          </p>
                          <div className="u-d-flex u-align-items-center u-text-primary-emphasis u-fw-medium">
                            <span className="u-me-2">Get Started</span>
                            <Icon name="ArrowRight" size={16} />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </GridCol>
                  <GridCol md={6} className="u-mb-4">
                    <Link
                      href="/docs/guides/theming"
                      className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                    >
                      <Card className="u-h-100 u-cursor-pointer u-border u-border-subtle u-transition-fast u-hover-transform-up">
                        <div className="u-p-6">
                          <div className="u-d-flex u-align-items-center u-mb-4">
                            <div className="u-w-12 u-h-12 u-bg-secondary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-4 u-text-secondary-emphasis">
                              <Icon name="Palette" size={24} />
                            </div>
                            <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                              Setup Theming
                            </h3>
                          </div>
                          <p
                            className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed"
                          >
                            Customize Atomix to match your brand with our comprehensive theming system
                          </p>
                          <div className="u-d-flex u-align-items-center u-text-primary-emphasis u-fw-medium">
                            <span className="u-me-2">Learn More</span>
                            <Icon name="ArrowRight" size={16} />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </GridCol>
                </Row>
              </Block>
            </div>
          ),
        };

      case "quickstart":
        return {
          title: "Quick Start Guide",
          description: "Get up and running with Atomix in 5 minutes",
          content: (
            <div>
              <Hero
                title="⚡ Quick Start Guide"
                subtitle="5-Minute Setup"
                text="Get up and running with Atomix in just a few minutes. Follow these simple steps to start building beautiful interfaces."
                alignment="center"
                backgroundImageSrc="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
                showOverlay={true}
                fullViewportHeight={false}
                contentWidth="900px"
                className="u-pt-36 u-pb-24 u-mb-lg"
                actions={
                  <>
                    <Button
                      glass
                      icon={
                        <Icon
                          name="Download"
                          size={16}
                          className="u-text-primary-emphasis"
                        />
                      }
                      label="Installation Guide"
                      href="/docs/getting-started/installation"
                    />
                    <Button
                      glass
                      variant="secondary"
                      icon={
                        <Icon
                          name="BookOpen"
                          size={16}
                          className="u-text-primary-emphasis"
                        />
                      }
                      label="Browse Components"
                      href="/docs/components/overview"
                    />
                  </>
                }
              />

              <Block spacing="sm" container={{ type: "fluid" }}>
                {/* Prerequisites */}

                <Card>
                  <div className="u-d-flex u-align-items-center u-gap-4">
                    <div className="u-flex-grow-1">
                      <h3 className="u-fs-xl u-fw-semibold u-m-0 u-mb-2 u-text-primary-emphasis">
                        Prerequisites
                      </h3>
                      <p
                        className="u-m-0 u-text-secondary-emphasis"
                        style={{
                          lineHeight: "var(--atomix-line-height-relaxed)",
                        }}
                      >
                        Make sure you have{" "}
                        <strong className="u-text-primary-emphasis">
                          React 18+
                        </strong>{" "}
                        and{" "}
                        <strong className="u-text-primary-emphasis">
                          Node.js 16+
                        </strong>{" "}
                        installed before proceeding
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Step 1: Installation */}

                <Card className="u-mt-6">
                  <div className="u-d-flex u-align-items-start u-gap-5 u-mb-6">
                    <div
                      className="u-d-flex u-align-items-center u-justify-content-center u-flex-shrink-0"
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "16px",
                        background: "rgba(var(--atomix-primary-rgb), 0.15)",
                      }}
                    >
                      <span className="u-fs-3xl u-fw-bold u-text-primary-emphasis">
                        1
                      </span>
                    </div>
                    <div className="u-flex-grow-1">
                      <h2 className="u-fs-2xl u-fw-bold u-m-0 u-mb-3 u-text-primary-emphasis">
                        Install Atomix
                      </h2>
                      <p
                        className="u-text-secondary-emphasis u-mb-0"
                        style={{
                          lineHeight: "var(--atomix-line-height-relaxed)",
                        }}
                      >
                        Choose your preferred package manager and run the
                        installation command in your project directory
                      </p>
                    </div>
                  </div>

                  <Row>
                    <GridCol md={4} className="u-mb-4">
                      <EnhancedCodeBlock
                        code="npm install @shohojdhara/atomix"
                        language="bash"
                        title="npm"
                        showLineNumbers={false}
                      />
                    </GridCol>
                    <GridCol md={4} className="u-mb-4">
                      <EnhancedCodeBlock
                        code="yarn add @shohojdhara/atomix"
                        language="bash"
                        title="yarn"
                        showLineNumbers={false}
                      />
                    </GridCol>
                    <GridCol md={4} className="u-mb-4">
                      <EnhancedCodeBlock
                        code="pnpm add @shohojdhara/atomix"
                        language="bash"
                        title="pnpm"
                        showLineNumbers={false}
                      />
                    </GridCol>
                  </Row>
                </Card>

                {/* Step 2: Import Styles */}

                <Card className="u-mt-6">
                  <div className="u-d-flex u-align-items-start u-gap-5 u-mb-6">
                    <div
                      className="u-d-flex u-align-items-center u-justify-content-center u-flex-shrink-0"
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "16px",
                        background: "rgba(var(--atomix-success-rgb), 0.15)",
                      }}
                    >
                      <span className="u-fs-3xl u-fw-bold u-text-success-emphasis">
                        2
                      </span>
                    </div>
                    <div className="u-flex-grow-1">
                      <h2 className="u-fs-2xl u-fw-bold u-m-0 u-mb-3 u-text-primary-emphasis">
                        Import CSS Styles
                      </h2>
                      <p
                        className="u-text-secondary-emphasis u-mb-0"
                        style={{
                          lineHeight: "var(--atomix-line-height-relaxed)",
                        }}
                      >
                        Import the Atomix CSS in your main entry point (e.g.,{" "}
                        <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                          main.tsx
                        </code>{" "}
                        or{" "}
                        <code className="u-bg-secondary-subtle u-px-2 u-py-1 u-rounded u-fs-sm">
                          App.tsx
                        </code>
                        )
                      </p>
                    </div>
                  </div>

                  <EnhancedCodeBlock
                    code={`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Atomix CSS
import '@shohojdhara/atomix/css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
                    language="typescript"
                    title="main.tsx"
                    showLineNumbers={true}
                  />

                  <Card className="u-p-4">
                    <div className="u-d-flex u-gap-3">
                      <Icon
                        name="BookOpen"
                        size={20}
                        className="u-text-info-emphasis u-flex-shrink-0 u-mt-1"
                      />
                      <div className="u-flex-grow-1">
                        <p className="u-m-0 u-fs-sm u-fw-semibold u-mb-2 u-text-primary-emphasis">
                          Optional: Import a specific theme
                        </p>
                        <p
                          className="u-m-0 u-fs-sm u-text-secondary-emphasis u-mb-3"
                          style={{
                            lineHeight: "var(--atomix-line-height-relaxed)",
                          }}
                        >
                          You can also import a specific theme instead of the
                          default:
                        </p>
                        <EnhancedCodeBlock
                          code="import '@shohojdhara/atomix/themes/boomdevs';"
                          language="typescript"
                          showLineNumbers={false}
                        />
                      </div>
                    </div>
                  </Card>
                </Card>

                {/* Step 3: Use Components */}

                <Card className="u-mt-6">
                  <div className="u-d-flex u-align-items-start u-gap-5 u-mb-6">
                    <div
                      className="u-d-flex u-align-items-center u-justify-content-center u-flex-shrink-0"
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "16px",
                        background: "rgba(var(--atomix-warning-rgb), 0.15)",
                      }}
                    >
                      <span className="u-fs-3xl u-fw-bold u-text-warning-emphasis">
                        3
                      </span>
                    </div>
                    <div className="u-flex-grow-1">
                      <h2 className="u-fs-2xl u-fw-bold u-m-0 u-mb-3 u-text-primary-emphasis">
                        Start Using Components
                      </h2>
                      <p
                        className="u-text-secondary-emphasis u-mb-0"
                        style={{
                          lineHeight: "var(--atomix-line-height-relaxed)",
                        }}
                      >
                        Import and use Atomix components in your React
                        application. Here's a simple example to get you started.
                      </p>
                    </div>
                  </div>

                  <EnhancedCodeBlock
                    code={`import { Button, Card, Hero } from '@shohojdhara/atomix';

function App() {
  return (
    <div>
      <Hero
        title="Welcome to Atomix"
        text="Build beautiful interfaces with ease"
      />
      
      <Card className="u-p-6">
        <h2>Hello World!</h2>
        <p>Your first Atomix component</p>
        <Button variant="primary">Get Started</Button>
      </Card>
    </div>
  );
}

export default App;`}
                    language="typescript"
                    title="App.tsx"
                    showLineNumbers={true}
                  />

                  <Card>
                    <div className="u-d-flex u-gap-3">
                      <Icon
                        name="CheckCircle"
                        size={20}
                        className="u-text-success-emphasis u-flex-shrink-0 u-mt-1"
                      />
                      <div className="u-flex-grow-1">
                        <p className="u-m-0 u-fw-semibold u-mb-2 u-text-primary-emphasis">
                          You're all set! 🎉
                        </p>
                        <p
                          className="u-m-0 u-fs-sm u-text-secondary-emphasis"
                          style={{
                            lineHeight: "var(--atomix-line-height-relaxed)",
                          }}
                        >
                          You now have Atomix installed and ready to use.
                          Explore our component library to build amazing
                          interfaces with 40+ pre-built components.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Card>

                {/* Next Steps */}

                <Card className="u-mt-6">
                  <div className="u-text-center u-mb-6">
                    <h2 className="u-fs-2xl u-fw-bold u-m-0 u-mb-3 u-text-primary-emphasis">
                      🚀 Next Steps
                    </h2>
                    <p
                      className="u-text-secondary-emphasis u-m-0"
                      style={{
                        lineHeight: "var(--atomix-line-height-relaxed)",
                      }}
                    >
                      Continue your journey with Atomix by exploring these
                      resources
                    </p>
                  </div>
                  <Row>
                    <GridCol md={4} className="u-mb-4">
                      <Link
                        href="/docs/components/overview"
                        className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                      >
                      <Card
                        className="u-h-100 u-cursor-pointer"
                      >
                        <div
                          className="u-d-flex u-align-items-center u-justify-content-center u-mb-4"
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background: "rgba(var(--atomix-primary-rgb), 0.15)",
                          }}
                        >
                          <Icon
                            name="BookOpen"
                            size={24}
                            className="u-text-primary-emphasis"
                          />
                        </div>
                        <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                          Browse Components
                        </h3>
                        <p
                          className="u-text-secondary-emphasis u-mb-4 u-fs-sm"
                          style={{
                            lineHeight: "var(--atomix-line-height-relaxed)",
                          }}
                        >
                          Explore 40+ components with live examples and
                          comprehensive documentation
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="u-w-100"
                        >
                          View Components
                          <Icon
                            name="ArrowRight"
                            size={16}
                            className="u-ms-2"
                          />
                        </Button>
                      </Card>
                      </Link>
                    </GridCol>
                    <GridCol md={4} className="u-mb-4">
                      <Link
                        href="/docs/guides/theming"
                        className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                      >
                        <Card
                          className="u-h-100 u-cursor-pointer"
                        >
                        <div
                          className="u-d-flex u-align-items-center u-justify-content-center u-mb-4"
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background: "rgba(var(--atomix-success-rgb), 0.15)",
                          }}
                        >
                          <Icon
                            name="Palette"
                            size={24}
                            className="u-text-success-emphasis"
                          />
                        </div>
                        <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                          Customize Theme
                        </h3>
                        <p
                          className="u-text-secondary-emphasis u-mb-4 u-fs-sm"
                          style={{
                            lineHeight: "var(--atomix-line-height-relaxed)",
                          }}
                        >
                          Learn how to customize colors, spacing, typography,
                          and create your own theme
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="u-w-100"
                        >
                          Theming Guide
                          <Icon
                            name="ArrowRight"
                            size={16}
                            className="u-ms-2"
                          />
                        </Button>
                      </Card>
                    </Link>
                    </GridCol>
                    <GridCol md={4} className="u-mb-4">
                      <Link
                        href="/docs/examples/common-patterns"
                        className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                      >
                        <Card
                          className="u-lh-100 u-cursor-pointer"
                        >
                        <div
                          className="u-d-flex u-align-items-center u-justify-content-center u-mb-4"
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background: "rgba(var(--atomix-warning-rgb), 0.15)",
                          }}
                        >
                          <Icon
                            name="Code"
                            size={24}
                            className="u-text-warning-emphasis"
                          />
                        </div>
                        <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-text-primary-emphasis">
                          View Examples
                        </h3>
                        <p
                          className="u-text-secondary-emphasis u-mb-4 u-fs-sm"
                          style={{
                            lineHeight: "var(--atomix-line-height-relaxed)",
                          }}
                        >
                          Check out real-world examples and common patterns to
                          accelerate your development
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="u-w-100"
                        >
                          See Examples
                          <Icon
                            name="ArrowRight"
                            size={16}
                            className="u-ms-2"
                          />
                        </Button>
                      </Card>
                    </Link>
                    </GridCol>
                  </Row>
                </Card>
              </Block>
            </div>
          ),
        };

      default:
        return {
          title: "Getting Started",
          description: "Learn how to use Atomix",
          content: (
            <div>
              <h1 className="u-fs-4xl u-fw-bold u-mb-4">Getting Started</h1>
              <p className="u-text-secondary-emphasis">
                Welcome to Atomix documentation!
              </p>
            </div>
          ),
        };
    }
  };

  const pageContent = getPageContent();

  return (
    <>
      <div>{pageContent.content}</div>
    </>
  );
};

export default GettingStartedPage;

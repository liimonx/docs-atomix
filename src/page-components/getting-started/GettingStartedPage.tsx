"use client";

import React, { FC } from "react";
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
  Badge,
} from "@shohojdhara/atomix";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import styles from "@/styles/PageHero.module.scss";

interface GettingStartedPageProps {
  type: "introduction" | "installation" | "quickstart" | "theming";
}

const GettingStartedPage: FC<GettingStartedPageProps> = ({ type }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);
  // No glass effect logic needed here

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      toast.custom(
        (t) => (
          <Callout
            isToast
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
            <p className="u-m-0 u-text-sm">
              The code has been copied to your clipboard.
            </p>
          </Callout>
        ),
        {
          duration: 3000,
          position: "bottom-right",
        },
      );
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast.custom(
        (t) => (
          <Callout
            variant="error"
            isToast
            glass
            title="Failed to copy code"
            icon={<Icon name="XCircle" size={20} />}
            className={t.visible ? "u-opacity-100" : "u-opacity-0"}
            style={{
              transition: "opacity 0.3s ease-in-out",
              minWidth: "300px",
            }}
          >
            <p className="u-m-0 u-text-sm">
              Unable to copy code to clipboard. Please try again.
            </p>
          </Callout>
        ),
        {
          duration: 4000,
          position: "bottom-right",
        },
      );
    }
  };

  const getPageContent = () => {
    switch (type) {
      case "introduction":
        return {
          title: "Introduction to Atomix",
          description: "Welcome to Atomix - A modern React component library",
          content: (
            <div>
              {/* Hero Section */}
              <Block className="u-py-20 lg:u-py-32">
                <Row className="u-items-center">
                  <GridCol lg={6}>
                    <div className="u-flex u-flex-column u-gap-6 u-items-start">
                      <Badge variant="primary" label="New Version 2.0" />

                      <h1
                        className="u-fs-5xl lg:u-fs-6xl u-font-black u-ls-tight"
                        style={{
                          lineHeight: "1.1",
                          background:
                            "linear-gradient(180deg, #fff 30%, #94a3b8 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        Build faster with{" "}
                        <span className="u-text-primary">Atomix.</span>
                      </h1>
                      <p className="u-fs-lg u-text-secondary-emphasis u-max-w-100 u-leading-relaxed">
                        The comprehensive React UI kit for modern web
                        applications. Accessible, customizable, and atomic. Stop
                        reinventing the wheel and start shipping.
                      </p>
                      <div className="u-flex u-flex-wrap u-gap-4 u-pt-2">
                        <Button
                          radius="md"
                          variant="primary"
                          icon={<Icon name="Code" size={20} />}
                          label="View Components"
                          href="/docs/components/overview"
                          LinkComponent={Link}
                        />
                      </div>
                    </div>
                  </GridCol>
                  <GridCol lg={6} className="u-relative">
                    <div
                      className="u-absolute u-w-100 u-h-100 u-bg-gradient-info u-rounded-xl u-opacity-25"
                      style={{ filter: "blur(40px)" }}
                    ></div>
                    <Card
                      variant="primary"
                      glass={{
                        enableLiquidBlur: true,
                        enableOverLightLayers: false,
                        overLight: {
                          brightness: 1,
                          contrast: 1,
                          opacity: 0,
                        },
                      }}
                      appearance="outlined"
                    >
                      <div className="u-flex u-items-center u-justify-between u-mb-4 u-pb-4 u-border-bottom u-border-primary-subtle">
                        <div className="u-flex u-gap-2">
                          <div className="u-w-3 u-h-3 u-rounded-circle u-bg-error"></div>
                          <div className="u-w-3 u-h-3 u-rounded-circle u-bg-warning"></div>
                          <div className="u-w-3 u-h-3 u-rounded-circle u-bg-success"></div>
                        </div>
                        <Badge variant="secondary" label="Bash" />
                      </div>
                      <div className="u-font-monospace u-fs-sm u-flex u-flex-column u-gap-2">
                        <div className="u-flex">
                          <span className="u-text-error-emphasis u-me-2">
                            $
                          </span>
                          <span>npm install</span>
                          <span className="u-text-primary u-ms-2">
                            @shohojdhara/atomix
                          </span>
                        </div>
                        <div className="u-flex">
                          <span className="u-text-error-emphasis u-me-2">
                            $
                          </span>
                          <span>npm install</span>
                          <span className="u-text-primary u-ms-2">
                            @shohojdhara/icons
                          </span>
                        </div>
                        <div className="u-text-secondary-emphasis u-mt-4">
                          # Ready to build!
                        </div>
                        <div className="u-flex u-opacity-50">
                          <span className="u-text-error-emphasis u-me-2">
                            $
                          </span>
                          <span className="u-animate-pulse">_</span>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                </Row>
              </Block>

              {/* Quick Actions Cards */}
              <Block>
                <Row>
                  {[
                    {
                      icon: <Icon name="Terminal" size={32} />,
                      title: "Installation",
                      description:
                        "Get up and running in under 5 minutes with our CLI tool or manual setup guide.",
                      color: "primary",
                      link: "/docs/getting-started/installation",
                    },
                    {
                      icon: <Icon name="Selection" size={32} />,
                      title: "Design Tokens",
                      description:
                        "Explore our semantic color, spacing, and typography variables for consistent UI.",
                      color: "success",
                      link: "/docs/design-tokens/colors",
                    },
                    {
                      icon: <Icon name="SquaresFour" size={32} />,
                      title: "Component Library",
                      description:
                        "Browse 50+ pre-built accessible components ready for production use.",
                      color: "warning",
                      link: "/docs/components/overview",
                    },
                  ].map((card, index) => (
                    <GridCol key={index} md={4} className="u-mb-6 md:u-mb-0">
                      <Link
                        href={card.link}
                        className="u-text-decoration-none u-h-100 u-block"
                      >
                        <Card
                          className="u-h-100"
                          icon={card.icon}
                          title={card.title}
                          text={card.description}
                        >
                          <div className="u-flex u-items-center u-gap-2 u-text-primary u-font-bold u-fs-sm u-mt-2">
                            Read Guide <Icon name="ArrowRight" size={16} />
                          </div>
                        </Card>
                      </Link>
                    </GridCol>
                  ))}
                </Row>
              </Block>

              {/* Key Features Section */}
              <Block>
                <SectionIntro
                  title="Key Features"
                  text="Everything you need to build world-class applications, baked right into the core of the system."
                  alignment="left"
                  className="u-p-1 u-pb-4"
                />
                <Row>
                  {[
                    {
                      icon: <Icon name="Wheelchair" size={24} />,
                      title: "Accessible",
                      description:
                        "WCAG 2.1 compliant out of the box with proper ARIA attributes.",
                    },
                    {
                      icon: <Icon name="Palette" size={24} />,
                      title: "Themable",
                      description:
                        "Fully customizable with CSS variables and Tailwind config.",
                    },
                    {
                      icon: <Icon name="Code" size={24} />,
                      title: "Type-Safe",
                      description:
                        "Built with TypeScript for better DX and autocomplete.",
                    },
                    {
                      icon: <Icon name="Moon" size={24} />,
                      title: "Dark Mode",
                      description:
                        "Automatic dark mode support included for all components.",
                    },
                  ].map((feature, index) => (
                    <GridCol key={index} md={6} lg={3} className="u-mb-4">
                      <Card
                        title={feature.title}
                        text={feature.description}
                        icon={feature.icon}
                        appearance="filled"
                      ></Card>
                    </GridCol>
                  ))}
                </Row>
              </Block>
            </div>
          ),
        };

      case "installation":
        // No glass effect logic needed here

        return {
          title: "Installation",
          description: "Install Atomix in your React project",
          content: (
            <div>
              <Hero
                className={styles.pageHero}
                title="Installation"
                subtitle="Get Atomix up and running in your project"
                text="Install Atomix using npm, yarn, or pnpm. Follow our simple setup guide to start building with Atomix components."
                alignment="center"
                fullViewportHeight={false}
                contentWidth="800px"
                actions={
                  <div className={styles.pageHero__actions}>
                    <Button
                      glass
                      icon={<Icon name="Download" size={16} />}
                      label="Quick Start"
                      href="/docs/getting-started/quick-start"
                      LinkComponent={Link}
                    />
                    <Button
                      glass
                      variant="secondary"
                      label="Browse Components"
                      icon={<Icon name="BookOpen" size={16} />}
                      href="/docs/components/overview"
                      LinkComponent={Link}
                    />
                  </div>
                }
              />

              <Block spacing="md">
                <h2 className="u-text-3xl u-font-bold u-mb-4 u-text-center">
                  Prerequisites
                </h2>
                <p
                  className="u-text-secondary-emphasis u-mb-6 u-text-center"
                  style={{
                    lineHeight: "var(--atomix-line-height-relaxed)",
                    maxWidth: "600px",
                    margin: "0 auto 2rem",
                  }}
                >
                  Before installing Atomix, make sure you have the following
                  requirements met:
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
                      <Card className="u-h-100 u-p-8 u-rounded-xl u-bg-dark u-border-primary-subtle u-transition-fast u-hover-border-primary">
                        <div className="u-flex u-flex-column u-h-100">
                          <div
                            className="u-w-16 u-h-16 u-rounded-lg u-flex u-items-center u-justify-center u-mb-6"
                            style={{
                              backgroundColor: `var(--atomix-color-${item.color}-subtle)`,
                              color: `var(--atomix-color-${item.color}-emphasis)`,
                            }}
                          >
                            {item.icon}
                          </div>
                          <h3 className="u-fs-xl u-font-bold u-m-0 u-mb-3 u-text-white">
                            {item.title}
                          </h3>
                          <p className="u-text-secondary-emphasis u-m-0 u-leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </Card>
                    </GridCol>
                  ))}
                </Row>
              </Block>

              <Block spacing="md" background="secondary">
                <h2 className="u-text-3xl u-font-bold u-mb-4 u-text-center">
                  Installation Methods
                </h2>
                <p
                  className="u-text-secondary-emphasis u-mb-6 u-text-center"
                  style={{ maxWidth: "600px", margin: "0 auto 2rem" }}
                >
                  Choose the installation method that best fits your project
                  setup. All methods install the same package.
                </p>
                <Row>
                  <GridCol md={4} className="u-mb-6">
                    <Card className="u-h-100 u-rounded-xl u-bg-dark u-border-primary-subtle u-transition-fast u-hover-border-primary">
                      <div className="u-p-8 u-border-bottom u-border-primary-subtle">
                        <div className="u-flex u-items-center u-mb-4">
                          <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded-lg u-flex u-items-center u-justify-center u-me-4 u-text-primary">
                            <Icon name="Download" size={24} />
                          </div>
                          <h3 className="u-fs-xl u-font-bold u-m-0 u-text-white">
                            npm
                          </h3>
                        </div>
                        <p className="u-text-secondary-emphasis u-m-0 u-leading-relaxed">
                          Install via npm package manager. Recommended for most
                          projects.
                        </p>
                      </div>
                      <div className="u-p-8">
                        <div className="u-bg-black u-rounded-lg u-overflow-hidden u-border u-border-primary-subtle">
                          <div className="u-flex u-items-center u-justify-between u-px-4 u-py-3 u-border-bottom u-border-primary-subtle u-bg-dark">
                            <span className="u-fs-xs u-text-secondary u-font-bold">
                              bash
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                copyToClipboard(
                                  "npm install @shohojdhara/atomix",
                                  "npm-install",
                                )
                              }
                            >
                              {copiedCode === "npm-install" ? (
                                <Icon
                                  name="CheckCircle"
                                  size={16}
                                  color="var(--atomix-success)"
                                />
                              ) : (
                                <Icon name="Copy" size={16} />
                              )}
                            </Button>
                          </div>
                          <pre className="u-m-0 u-p-6 u-fs-sm u-text-primary u-font-monospace">
                            <code>npm install @shohojdhara/atomix</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                  <GridCol md={4} className="u-mb-6">
                    <Card className="u-h-100 u-rounded-xl u-bg-dark u-border-primary-subtle u-transition-fast u-hover-border-primary">
                      <div className="u-p-8 u-border-bottom u-border-primary-subtle">
                        <div className="u-flex u-items-center u-mb-4">
                          <div className="u-w-12 u-h-12 u-bg-success-subtle u-rounded-lg u-flex u-items-center u-justify-center u-me-4 u-text-success">
                            <Icon name="Download" size={24} />
                          </div>
                          <h3 className="u-fs-xl u-font-bold u-m-0 u-text-white">
                            yarn
                          </h3>
                        </div>
                        <p className="u-text-secondary-emphasis u-m-0 u-leading-relaxed">
                          Install via yarn package manager. Great for monorepos
                          and workspaces.
                        </p>
                      </div>
                      <div className="u-p-8">
                        <div className="u-bg-black u-rounded-lg u-overflow-hidden u-border u-border-primary-subtle">
                          <div className="u-flex u-items-center u-justify-between u-px-4 u-py-3 u-border-bottom u-border-primary-subtle u-bg-dark">
                            <span className="u-fs-xs u-text-secondary u-font-bold">
                              bash
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                copyToClipboard(
                                  "yarn add @shohojdhara/atomix",
                                  "yarn-install",
                                )
                              }
                            >
                              {copiedCode === "yarn-install" ? (
                                <Icon
                                  name="CheckCircle"
                                  size={16}
                                  color="var(--atomix-success)"
                                />
                              ) : (
                                <Icon name="Copy" size={16} />
                              )}
                            </Button>
                          </div>
                          <pre className="u-m-0 u-p-6 u-fs-sm u-text-primary u-font-monospace">
                            <code>yarn add @shohojdhara/atomix</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                  <GridCol md={4} className="u-mb-6">
                    <Card className="u-h-100 u-rounded-xl u-bg-dark u-border-primary-subtle u-transition-fast u-hover-border-primary">
                      <div className="u-p-8 u-border-bottom u-border-primary-subtle">
                        <div className="u-flex u-items-center u-mb-4">
                          <div className="u-w-12 u-h-12 u-bg-secondary-subtle u-rounded-lg u-flex u-items-center u-justify-center u-me-4 u-text-secondary">
                            <Icon name="Download" size={24} />
                          </div>
                          <h3 className="u-fs-xl u-font-bold u-m-0 u-text-white">
                            pnpm
                          </h3>
                        </div>
                        <p className="u-text-secondary-emphasis u-m-0 u-leading-relaxed">
                          Install via pnpm package manager. Fast and efficient
                          disk space usage.
                        </p>
                      </div>
                      <div className="u-p-8">
                        <div className="u-bg-black u-rounded-lg u-overflow-hidden u-border u-border-primary-subtle">
                          <div className="u-flex u-items-center u-justify-between u-px-4 u-py-3 u-border-bottom u-border-primary-subtle u-bg-dark">
                            <span className="u-fs-xs u-text-secondary u-font-bold">
                              bash
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                copyToClipboard(
                                  "pnpm add @shohojdhara/atomix",
                                  "pnpm-install",
                                )
                              }
                            >
                              {copiedCode === "pnpm-install" ? (
                                <Icon
                                  name="CheckCircle"
                                  size={16}
                                  color="var(--atomix-success)"
                                />
                              ) : (
                                <Icon name="Copy" size={16} />
                              )}
                            </Button>
                          </div>
                          <pre className="u-m-0 u-p-6 u-fs-sm u-text-primary u-font-monospace">
                            <code>pnpm add @shohojdhara/atomix</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                </Row>
              </Block>

              <Block spacing="md">
                <h2 className="u-text-3xl u-font-bold u-mb-4 u-text-center">
                  Next Steps
                </h2>
                <p
                  className="u-text-secondary-emphasis u-mb-6 u-text-center"
                  style={{ maxWidth: "600px", margin: "0 auto 2rem" }}
                >
                  Once installed, explore these resources to get the most out of
                  Atomix
                </p>
                <Row>
                  <GridCol md={6} className="u-mb-4">
                    <Link
                      href="/docs/getting-started/quick-start"
                      className="u-text-decoration-none u-text-inherit u-block u-h-100"
                    >
                      <Card className="u-h-100 u-cursor-pointer u-border u-border-subtle u-transition-fast u-hover-transform-up">
                        <div className="u-p-6">
                          <div className="u-flex u-items-center u-mb-4">
                            <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-4 u-text-primary-emphasis">
                              <Icon name="Lightning" size={24} />
                            </div>
                            <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                              Quick Start Guide
                            </h3>
                          </div>
                          <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                            Learn how to build your first application with
                            Atomix components in just 5 minutes
                          </p>
                          <div className="u-flex u-items-center u-text-primary-emphasis u-font-medium">
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
                      className="u-text-decoration-none u-text-inherit u-block u-h-100"
                    >
                      <Card className="u-h-100 u-cursor-pointer u-border u-border-subtle u-transition-fast u-hover-transform-up">
                        <div className="u-p-6">
                          <div className="u-flex u-items-center u-mb-4">
                            <div className="u-w-12 u-h-12 u-bg-secondary-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-4 u-text-secondary-emphasis">
                              <Icon name="Palette" size={24} />
                            </div>
                            <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                              Setup Theming
                            </h3>
                          </div>
                          <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                            Customize Atomix to match your brand with our
                            comprehensive theming system
                          </p>
                          <div className="u-flex u-items-center u-text-primary-emphasis u-font-medium">
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
                      LinkComponent={Link}
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
                      LinkComponent={Link}
                    />
                  </>
                }
              />

              <Block spacing="sm">
                {/* Prerequisites */}

                <Card className="u-rounded-xl u-bg-dark u-border-primary-subtle u-p-8 u-mb-8">
                  <div className="u-flex u-items-center u-gap-6">
                    <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded-lg u-flex u-items-center u-justify-center u-text-primary">
                      <Icon name="Info" size={24} />
                    </div>
                    <div className="u-flex-grow-1">
                      <h3 className="u-fs-xl u-font-bold u-m-0 u-mb-2 u-text-white">
                        Prerequisites
                      </h3>
                      <p className="u-m-0 u-text-secondary-emphasis u-leading-relaxed">
                        Make sure you have{" "}
                        <strong className="u-text-primary">React 18+</strong>{" "}
                        and{" "}
                        <strong className="u-text-primary">Node.js 16+</strong>{" "}
                        installed before proceeding.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Step 1: Installation */}
                <Card className="u-rounded-xl u-bg-dark u-border-primary-subtle u-p-8 u-mb-12">
                  <div className="u-flex u-items-start u-gap-6 u-mb-8">
                    <div
                      className="u-flex u-items-center u-justify-center u-flex-shrink-0 u-bg-primary-subtle u-rounded-xl u-text-primary u-font-bold u-fs-2xl"
                      style={{
                        width: "64px",
                        height: "64px",
                      }}
                    >
                      1
                    </div>
                    <div className="u-flex-grow-1">
                      <h2 className="u-fs-3xl u-font-black u-m-0 u-mb-3 u-text-white">
                        Install Atomix
                      </h2>
                      <p className="u-text-secondary-emphasis u-m-0 u-leading-relaxed">
                        Choose your preferred package manager and run the
                        installation command in your project directory.
                      </p>
                    </div>
                  </div>

                  <Row className="u-gap-4">
                    <GridCol md={4} className="u-mb-4">
                      <div className="u-bg-black u-rounded-xl u-overflow-hidden u-border u-border-primary-subtle">
                        <div className="u-flex u-items-center u-justify-between u-px-4 u-py-3 u-bg-dark u-border-bottom u-border-primary-subtle">
                          <span className="u-fs-xs u-font-bold u-text-secondary">
                            npm
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                "npm install @shohojdhara/atomix",
                                "npm-quick",
                              )
                            }
                          >
                            {copiedCode === "npm-quick" ? (
                              <Icon
                                name="CheckCircle"
                                size={16}
                                color="var(--atomix-success)"
                              />
                            ) : (
                              <Icon name="Copy" size={16} />
                            )}
                          </Button>
                        </div>
                        <pre className="u-m-0 u-p-6 u-fs-sm u-text-primary u-font-monospace">
                          <code>npm install @shohojdhara/atomix</code>
                        </pre>
                      </div>
                    </GridCol>
                    <GridCol md={4} className="u-mb-4">
                      <div className="u-bg-black u-rounded-xl u-overflow-hidden u-border u-border-primary-subtle">
                        <div className="u-flex u-items-center u-justify-between u-px-4 u-py-3 u-bg-dark u-border-bottom u-border-primary-subtle">
                          <span className="u-fs-xs u-font-bold u-text-secondary">
                            yarn
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                "yarn add @shohojdhara/atomix",
                                "yarn-quick",
                              )
                            }
                          >
                            {copiedCode === "yarn-quick" ? (
                              <Icon
                                name="CheckCircle"
                                size={16}
                                color="var(--atomix-success)"
                              />
                            ) : (
                              <Icon name="Copy" size={16} />
                            )}
                          </Button>
                        </div>
                        <pre className="u-m-0 u-p-6 u-fs-sm u-text-primary u-font-monospace">
                          <code>yarn add @shohojdhara/atomix</code>
                        </pre>
                      </div>
                    </GridCol>
                    <GridCol md={4} className="u-mb-4">
                      <div className="u-bg-black u-rounded-xl u-overflow-hidden u-border u-border-primary-subtle">
                        <div className="u-flex u-items-center u-justify-between u-px-4 u-py-3 u-bg-dark u-border-bottom u-border-primary-subtle">
                          <span className="u-fs-xs u-font-bold u-text-secondary">
                            pnpm
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                "pnpm add @shohojdhara/atomix",
                                "pnpm-quick",
                              )
                            }
                          >
                            {copiedCode === "pnpm-quick" ? (
                              <Icon
                                name="CheckCircle"
                                size={16}
                                color="var(--atomix-success)"
                              />
                            ) : (
                              <Icon name="Copy" size={16} />
                            )}
                          </Button>
                        </div>
                        <pre className="u-m-0 u-p-6 u-fs-sm u-text-primary u-font-monospace">
                          <code>pnpm add @shohojdhara/atomix</code>
                        </pre>
                      </div>
                    </GridCol>
                  </Row>
                </Card>

                {/* Step 2: Import Styles */}
                <Card className="u-rounded-xl u-bg-dark u-border-primary-subtle u-p-8 u-mb-12">
                  <div className="u-flex u-items-start u-gap-6 u-mb-8">
                    <div
                      className="u-flex u-items-center u-justify-center u-flex-shrink-0 u-bg-success-subtle u-rounded-xl u-text-success u-font-bold u-fs-2xl"
                      style={{
                        width: "64px",
                        height: "64px",
                      }}
                    >
                      2
                    </div>
                    <div className="u-flex-grow-1">
                      <h2 className="u-fs-3xl u-font-black u-m-0 u-mb-3 u-text-white">
                        Import CSS Styles
                      </h2>
                      <p className="u-text-secondary-emphasis u-m-0 u-leading-relaxed">
                        Import the Atomix CSS in your main entry point (e.g.,{" "}
                        <code className="u-bg-black u-px-2 u-py-1 u-rounded u-text-primary u-fs-sm">
                          main.tsx
                        </code>{" "}
                        or{" "}
                        <code className="u-bg-black u-px-2 u-py-1 u-rounded u-text-primary u-fs-sm">
                          App.tsx
                        </code>
                        ).
                      </p>
                    </div>
                  </div>

                  <EnhancedCodeBlock
                    code={`import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\n\n// Import Atomix CSS\nimport '@shohojdhara/atomix/css';\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);`}
                    language="typescript"
                    title="main.tsx"
                    showLineNumbers={true}
                  />

                  <div className="u-mt-6 u-p-6 u-rounded-lg u-bg-black u-border u-border-primary-subtle u-flex u-gap-4">
                    <Icon
                      name="Info"
                      size={20}
                      className="u-text-primary u-mt-1"
                    />
                    <div>
                      <p className="u-m-0 u-fs-sm u-font-bold u-text-white u-mb-1">
                        Optional: Theme Customization
                      </p>
                      <p className="u-m-0 u-fs-xs u-text-secondary-emphasis">
                        You can also import specific theme files or configure
                        your own using CSS variables.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Step 3: Usage */}
                <Card className="u-rounded-xl u-bg-dark u-border-primary-subtle u-p-8">
                  <div className="u-flex u-items-start u-gap-6 u-mb-8">
                    <div
                      className="u-flex u-items-center u-justify-center u-flex-shrink-0 u-bg-warning-subtle u-rounded-xl u-text-warning u-font-bold u-fs-2xl"
                      style={{
                        width: "64px",
                        height: "64px",
                      }}
                    >
                      3
                    </div>
                    <div className="u-flex-grow-1">
                      <h2 className="u-fs-3xl u-font-black u-m-0 u-mb-3 u-text-white">
                        Start Building
                      </h2>
                      <p className="u-text-secondary-emphasis u-m-0 u-leading-relaxed">
                        Import and use components anywhere in your application.
                      </p>
                    </div>
                  </div>

                  <EnhancedCodeBlock
                    code={`import { Button, Card } from '@shohojdhara/atomix';\n\nfunction App() {\n  return (\n    <Card className="u-p-8">\n      <h1 className="u-fs-3xl u-font-bold u-mb-4">Hello Atomix!</h1>\n      <Button variant="primary">Click Me</Button>\n    </Card>\n  );\n}`}
                    language="typescript"
                    title="App.tsx"
                    showLineNumbers={true}
                  />
                </Card>

                {/* Next Steps */}
                <div className="u-mt-16 u-text-center">
                  <h2 className="u-fs-3xl u-font-black u-text-white u-mb-4">
                    Ready for more?
                  </h2>
                  <p className="u-text-secondary-emphasis u-mb-12 u-max-w-75 u-mx-auto">
                    Explore our comprehensive collection of components and
                    guides to level up your development workflow.
                  </p>

                  <Row className="u-gap-6">
                    {[
                      {
                        icon: <Icon name="BookOpen" size={24} />,
                        title: "Components",
                        desc: "Browse 40+ pre-built components",
                        link: "/docs/components/overview",
                        color: "primary",
                      },
                      {
                        icon: <Icon name="Palette" size={24} />,
                        title: "Theming",
                        desc: "Customize Atomix to your brand",
                        link: "/docs/guides/theming",
                        color: "success",
                      },
                      {
                        icon: <Icon name="Code" size={24} />,
                        title: "Examples",
                        desc: "Real-world implementation patterns",
                        link: "/docs/examples/common-patterns",
                        color: "warning",
                      },
                    ].map((step, idx) => (
                      <GridCol key={idx} md={4} className="u-mb-6">
                        <Link
                          href={step.link}
                          className="u-block u-h-100 u-text-decoration-none"
                        >
                          <Card className="u-p-8 u-h-100 u-rounded-xl u-bg-dark u-border-primary-subtle u-transition-fast u-hover-border-primary">
                            <div
                              className={`u-w-12 u-h-12 u-rounded-lg u-flex u-items-center u-justify-center u-mb-6 u-bg-${step.color}-subtle u-text-${step.color}`}
                            >
                              {step.icon}
                            </div>
                            <h3 className="u-fs-xl u-font-bold u-text-white u-mb-2">
                              {step.title}
                            </h3>
                            <p className="u-fs-sm u-text-secondary-emphasis u-mb-0">
                              {step.desc}
                            </p>
                          </Card>
                        </Link>
                      </GridCol>
                    ))}
                  </Row>
                </div>
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
              <h1 className="u-text-4xl u-font-bold u-mb-4">Getting Started</h1>
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

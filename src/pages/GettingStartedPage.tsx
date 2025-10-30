import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Copy,
  CheckCircle,
  Download,
  Zap,
  BookOpen,
  Palette,
  ArrowRight,
  Settings,
  Shield,
  Code,
} from "lucide-react";
import {
  Button,
  Card,
  Hero,
  GridCol,
  Row,
  Block,
} from "@shohojdhara/atomix";
import toast from "react-hot-toast";

interface GettingStartedPageProps {
  type: "introduction" | "installation" | "quickstart" | "theming";
}

const GettingStartedPage: React.FC<GettingStartedPageProps> = ({ type }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  const renderCodeBlock = (
    code: string,
    language: string,
    id: string,
    title?: string
  ) => (
    <div className="code-example">
      <div className="code-header">
        <span className="code-title">{title || language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(code, id)}
        >
          {copiedCode === id ? <CheckCircle size={16} /> : <Copy size={16} />}
        </Button>
      </div>
      <pre className="u-m-0 u-p-4 u-bg-tertiary-subtle u-fs-sm u-overflow-x-auto u-lh-lg">
        <code>{code}</code>
      </pre>
    </div>
  );

  const getPageContent = () => {
    switch (type) {
      case "introduction":
        return {
          title: "Introduction to Atomix",
          description: "Welcome to Atomix - A modern React component library",
          content: (
            <div className="introduction-content">
              <Hero
                title="Welcome to Atomix"
                subtitle="Comprehensive Design System"
                text="A complete design system with 40+ components, layouts, design tokens, and AtomixGlass effects. Built for React and vanilla JavaScript with accessibility and performance in mind."
                alignment="center"
                backgroundImageSrc="https://images.unsplash.com/photo-1739981760998-6d6340522cbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2532"
                showOverlay={true}
                fullViewportHeight={false}
                contentWidth="900px"
                className="u-pt-36 u-pb-24"
                glass={{
                     padding: "20px",
                  } as any}
                actions={
                  <>
                    <Link to="/docs/getting-started/installation">
                      <Button
                        glass
                        icon={<Download size={16} />}
                        label="Get Started"
                      />
                    </Link>
                    <Link to="/docs/components/overview">
                      <Button
                        glass
                        variant="secondary"
                        label="Browse Components"
                        icon={<BookOpen size={16} />}
                      />
                    </Link>
                  </>
                }
              />

              <Block spacing="sm">
                <h2 className="u-mb-6">What is Atomix?</h2>
                <p className="u-text-secondary-emphasis u-mb-6 u-lh-lg">
                  Atomix is a comprehensive design system that provides everything you need to build modern web applications. 
                  With 40+ components, a complete layout system, design tokens, ITCSS architecture, and advanced effects like 
                  AtomixGlass, it offers both React components and vanilla JavaScript implementations. Built with accessibility, 
                  performance, and developer experience as core principles.
                </p>
                  <Row>
                    {[
                      {
                        icon: <Zap size={24} />,
                        title: "40+ Components",
                        description:
                          "Comprehensive component library from basic buttons to advanced charts, modals, and AtomixGlass effects.",
                      },
                      {
                        icon: <Palette size={24} />,
                        title: "Complete Design System",
                        description:
                          "Design tokens, ITCSS architecture, layout system with grid and masonry, plus multiple built-in themes.",
                      },
                      {
                        icon: <Shield size={24} />,
                        title: "Accessibility First",
                        description:
                          "WCAG 2.1 AA compliant with full keyboard navigation, screen reader support, and focus management.",
                      },
                      {
                        icon: <Code size={24} />,
                        title: "Dual Implementation",
                        description:
                          "React components and vanilla JavaScript classes with full TypeScript support and comprehensive documentation.",
                      },
                    ].map((feature, index) => (
                      <GridCol key={index} md={6} lg={3} className="u-mb-4">
                        <Card className="u-p-6">
                          <div className="u-d-flex u-align-items-center u-mb-4">
                            <div className="u-w-12 u-h-12 u-bg-brand-subtle u-rounded u-d-flex u-align-items-center u-justify-content-center u-me-4 u-text-primary-emphasis">
                              {feature.icon}
                            </div>
                            <h3 className="u-m-0 u-text-brand-emphasis">
                              {feature.title}
                            </h3>
                          </div>
                          <p className="u-text-secondary-emphasis u-m-0 u-lh-lg">
                            {feature.description}
                          </p>
                        </Card>
                      </GridCol>
                    ))}
                  </Row>
              </Block>

              <Block spacing="sm"  background="brand">
                <h2 className="u-mb-6">Key Features</h2>
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
                        <div className="u-d-flex u-align-items-center u-gap-3 u-p-4 u-bg-secondary-subtle u-rounded">
                          <CheckCircle size={20} className="u-text-success" />
                          <span className="u-fs-sm">{feature}</span>
                        </div>
                      </GridCol>
                    ))}
                  </Row>
              </Block>

              <Block spacing="sm">
                  <Row justifyContent="center">
                    <GridCol lg={8}>
                      <Card className="u-p-8 u-text-center">
                        <h2 className="u-mb-4 u-text-brand-emphasis">Ready to Get Started?</h2>
                        <p className="u-text-secondary-emphasis u-mb-6 u-lh-lg">
                          Install Atomix in your React project and start building amazing user interfaces today.
                        </p>
                        <div className="u-d-flex u-gap-4 u-flex-wrap u-justify-content-center">
                          <Link to="/docs/installation">
                            <Button icon={<Download size={16} />} label="Install Atomix" />
                          </Link>
                          <Link to="/docs/getting-started/quick-start">
                            <Button variant="outline" icon={<Zap size={16} />} label="Quick Start Guide" />
                          </Link>
                          <Link to="/docs/components/overview">
                            <Button variant="outline" icon={<BookOpen size={16} />} label="Browse Components" />
                          </Link>
                        </div>
                      </Card>
                    </GridCol>
                  </Row>
              </Block>
            </div>
          ),
        };

      case "installation":
        return {
          title: "Installation",
          description: "Install Atomix in your React project",
          content: (
            <div className="installation-content">
              <Block>
                <h2 className="u-mb-4">Prerequisites</h2>
                <p className="u-text-secondary-emphasis u-mb-6 u-lh-lg">
                  Before installing Atomix, make sure you have the following:
                </p>
                <Row>
                  {[
                    {
                      icon: <Code size={20} />,
                      title: "React 18.0.0+",
                      desc: "React library",
                    },
                    {
                      icon: <Settings size={20} />,
                      title: "Node.js 16.0.0+",
                      desc: "JavaScript runtime",
                    },
                    {
                      icon: <Download size={20} />,
                      title: "Package Manager",
                      desc: "npm, yarn, or pnpm",
                    },
                  ].map((item, index) => (
                    <GridCol key={index} md={4} className="u-mb-4">
                      <Card className="u-p-5">
                        <div className="u-d-flex u-align-items-start u-gap-3">
                          <div className="u-w-10 u-h-10 u-bg-brand-subtle u-rounded u-d-flex u-align-items-center u-justify-content-center u-text-brand-emphasis">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="u-fs-base u-m-0 u-mb-1 u-fw-semibold">
                              {item.title}
                            </h3>
                            <p className="u-text-secondary-emphasis u-m-0 u-fs-sm">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </GridCol>
                  ))}
                </Row>

                <h2 className="u-mb-4">Installation Methods</h2>
                <p className="u-mb-6">
                  Choose the installation method that best fits your project
                  setup.
                </p>
                <Row>
                  <GridCol md={4} className="u-mb-6">
                    <Card>
                      <div className="u-p-4 u-border-bottom">
                        <h3 className="u-fs-base u-m-0 u-d-flex u-align-items-center">
                          <Download size={20} className="u-me-2" />
                          npm
                        </h3>
                      </div>
                      <div className="u-p-4">
                        <p className="u-mb-4">
                          Install via npm package manager.
                        </p>
                        <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden">
                          <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-2 u-border-bottom">
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
                                <CheckCircle size={16} />
                              ) : (
                                <Copy size={16} />
                              )}
                            </Button>
                          </div>
                          <pre className="u-m-0 u-p-4 u-fs-sm">
                            <code>npm install @shohojdhara/atomix</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                  <GridCol md={4} className="u-mb-6">
                    <Card>
                      <div className="u-p-4 u-border-bottom">
                        <h3 className="u-fs-base u-m-0 u-d-flex u-align-items-center">
                          <Download size={20} className="u-me-2" />
                          yarn
                        </h3>
                      </div>
                      <div className="u-p-4">
                        <p className="u-mb-4">
                          Install via yarn package manager.
                        </p>
                        <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden">
                          <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-2 u-border-bottom">
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
                                <CheckCircle size={16} />
                              ) : (
                                <Copy size={16} />
                              )}
                            </Button>
                          </div>
                          <pre className="u-m-0 u-p-4 u-fs-sm">
                            <code>yarn add @shohojdhara/atomix</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                  <GridCol md={4} className="u-mb-6">
                    <Card>
                      <div className="u-p-4 u-border-bottom">
                        <h3 className="u-fs-base u-m-0 u-d-flex u-align-items-center">
                          <Download size={20} className="u-me-2" />
                          pnpm
                        </h3>
                      </div>
                      <div className="u-p-4">
                        <p className="u-mb-4">
                          Install via pnpm package manager.
                        </p>
                        <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden">
                          <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-2 u-border-bottom">
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
                                <CheckCircle size={16} />
                              ) : (
                                <Copy size={16} />
                              )}
                            </Button>
                          </div>
                          <pre className="u-m-0 u-p-4 u-fs-sm">
                            <code>pnpm add @shohojdhara/atomix</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                </Row>

                <h2 className="u-mb-6">Next Steps</h2>
                <Row>
                  <GridCol md={6} className="u-mb-4">
                    <Card className="u-h-full u-transition-transform u-cursor-pointer hover:u-transform hover:u-translate-y-n1">
                      <Link
                        to="/docs/getting-started/quick-start"
                        className="u-text-decoration-none"
                      >
                        <div className="u-p-6">
                          <div className="u-d-flex u-align-items-center u-mb-4">
                            <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded u-d-flex u-align-items-center u-justify-content-center u-me-4">
                              <Zap
                                size={24}
                                className="u-text-primary-emphasis"
                              />
                            </div>
                            <h3 className="u-m-0 u-text-primary-emphasis">
                              Quick Start Guide
                            </h3>
                          </div>
                          <p className="u-text-secondary-emphasis u-mb-4 u-lh-lg">
                            Learn how to build your first application with
                            Atomix components
                          </p>
                          <div className="u-d-flex u-align-items-center u-text-primary-emphasis u-fw-medium">
                            <span className="u-me-2">Get Started</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </Link>
                    </Card>
                  </GridCol>
                  <GridCol md={6} className="u-mb-4">
                    <Card className="u-h-full u-transition-transform u-cursor-pointer hover:u-transform hover:u-translate-y-n1">
                      <Link
                        to="/docs/guides/theming"
                        className="u-text-decoration-none"
                      >
                        <div className="u-p-6">
                          <div className="u-d-flex u-align-items-center u-mb-4">
                            <div className="u-w-12 u-h-12 u-bg-secondary-subtle u-rounded u-d-flex u-align-items-center u-justify-content-center u-me-4">
                              <Palette
                                size={24}
                                className="u-text-secondary-emphasis"
                              />
                            </div>
                            <h3 className="u-m-0 u-text-primary-emphasis">
                              Setup Theming
                            </h3>
                          </div>
                          <p className="u-text-secondary-emphasis u-mb-4 u-lh-lg">
                            Customize Atomix to match your brand with our
                            theming system
                          </p>
                          <div className="u-d-flex u-align-items-center u-text-primary-emphasis u-fw-medium">
                            <span className="u-me-2">Learn More</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </Link>
                    </Card>
                  </GridCol>
                </Row>
              </Block>
            </div>
          ),
        };

      default:
        return {
          title: "Getting Started",
          description: "Learn how to use Atomix",
          content: (
            <div className="getting-started-content">
              <h1>Getting Started</h1>
              <p>Welcome to Atomix documentation!</p>
            </div>
          ),
        };
    }
  };

  const pageContent = getPageContent();

  return (
    <>
      <Helmet>
        <title>{pageContent.title} - Atomix Documentation</title>
        <meta name="description" content={pageContent.description} />
      </Helmet>

      <div className="getting-started-page">{pageContent.content}</div>
    </>
  );
};

export default GettingStartedPage;

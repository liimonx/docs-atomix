'use client';

import React from "react";
import Link from "next/link";
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
import { GlassProps } from "@/types/atomix-components";

interface GettingStartedPageProps {
  type: "introduction" | "installation" | "quickstart" | "theming";
}

const GettingStartedPage: React.FC<GettingStartedPageProps> = ({ type }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);
  const heroGlass: GlassProps = { padding: "20px" } as any;

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

  const getPageContent = () => {
    switch (type) {
      case "introduction":
        return {
          title: "Introduction to Atomix",
          description: "Welcome to Atomix - A modern React component library",
          content: (
            <div>
              <Hero
                title="Welcome to Atomix"
                subtitle="Comprehensive Design System"
                text="A complete design system with 40+ components, layouts, design tokens, and AtomixGlass effects. Built for React and vanilla JavaScript with accessibility and performance in mind."
                alignment="center"
                backgroundImageSrc="https://images.unsplash.com/photo-1739981760998-6d6340522cbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2532"
                showOverlay={true}
                fullViewportHeight={false}
                contentWidth="900px"
                className="u-pt-36 u-pb-24 u-mb-lg"
                glass={heroGlass}
                actions={
                  <>
                    <Button
                      glass
                      icon={<Download size={16} />}
                      label="Get Started"
                      onClick={() => window.location.href = '/docs/getting-started/installation'}
                    />
                    <Button
                      glass
                      variant="secondary"
                      label="Browse Components"
                      icon={<BookOpen size={16} />}
                      onClick={() => window.location.href = '/docs/components/overview'}
                    />
                  </>
                }
              />

              <Block spacing="sm">
                <h2 className="u-fs-3xl u-fw-bold u-mb-6">What is Atomix?</h2>
                <p className="u-text-secondary-emphasis u-mb-6" style={{ lineHeight: 'var(--atomix-line-height-relaxed)' }}>
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
                            <div className="u-w-12 u-h-12 u-bg-primary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-4 u-text-primary-emphasis">
                              {feature.icon}
                            </div>
                            <h3 className="u-fs-lg u-fw-semibold u-m-0 u-text-primary-emphasis">
                              {feature.title}
                            </h3>
                          </div>
                          <p className="u-text-secondary-emphasis u-m-0" style={{ lineHeight: 'var(--atomix-line-height-relaxed)' }}>
                            {feature.description}
                          </p>
                        </Card>
                      </GridCol>
                    ))}
                  </Row>
              </Block>

              <Block spacing="sm" background="secondary">
                <h2 className="u-fs-3xl u-fw-bold u-mb-6">Key Features</h2>
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
                        <div className="u-d-flex u-align-items-center u-gap-3 u-p-4 u-bg-secondary-subtle u-br-md">
                          <CheckCircle size={20} className="u-text-success u-flex-shrink-0" />
                          <span className="u-fs-sm u-text-secondary-emphasis">{feature}</span>
                        </div>
                      </GridCol>
                    ))}
                  </Row>
              </Block>

              <Block spacing="sm">
                  <Row justifyContent="center">
                    <GridCol lg={8}>
                      <Card className="u-p-8 u-text-center">
                        <h2 className="u-fs-3xl u-fw-bold u-mb-4 u-text-primary-emphasis">Ready to Get Started?</h2>
                        <p className="u-text-secondary-emphasis u-mb-6" style={{ lineHeight: 'var(--atomix-line-height-relaxed)' }}>
                          Install Atomix in your React project and start building amazing user interfaces today.
                        </p>
                        <div className="u-d-flex u-gap-4 u-flex-wrap u-justify-content-center">
                          <Button 
                            icon={<Download size={16} />} 
                            label="Install Atomix"
                            onClick={() => window.location.href = '/docs/getting-started/installation'}
                          />
                          <Button 
                            variant="outline" 
                            icon={<Zap size={16} />} 
                            label="Quick Start Guide"
                            onClick={() => window.location.href = '/docs/getting-started/quick-start'}
                          />
                          <Button 
                            variant="outline" 
                            icon={<BookOpen size={16} />} 
                            label="Browse Components"
                            onClick={() => window.location.href = '/docs/components/overview'}
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
        return {
          title: "Installation",
          description: "Install Atomix in your React project",
          content: (
            <div>
              <Block>
                <h2 className="u-fs-3xl u-fw-bold u-mb-4">Prerequisites</h2>
                <p className="u-text-secondary-emphasis u-mb-6" style={{ lineHeight: 'var(--atomix-line-height-relaxed)' }}>
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

                <h2 className="u-fs-3xl u-fw-bold u-mb-4">Installation Methods</h2>
                <p className="u-text-secondary-emphasis u-mb-6">
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

                <h2 className="u-fs-3xl u-fw-bold u-mb-6">Next Steps</h2>
                <Row>
                  <GridCol md={6} className="u-mb-4">
                    <Card 
                      className="u-h-100 u-cursor-pointer u-transition-fast u-border u-border-subtle"
                      style={{ transition: 'var(--atomix-transition-fast)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = 'var(--atomix-shadow-lg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                      onClick={() => window.location.href = '/docs/getting-started/quick-start'}
                    >
                      <div className="u-p-6">
                        <div className="u-d-flex u-align-items-center u-mb-4">
                          <div className="u-w-12 u-h-12 u-bg-primary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-4">
                            <Zap
                              size={24}
                              className="u-text-primary-emphasis"
                            />
                          </div>
                          <h3 className="u-fs-lg u-fw-semibold u-m-0 u-text-primary-emphasis">
                            Quick Start Guide
                          </h3>
                        </div>
                        <p className="u-text-secondary-emphasis u-mb-4" style={{ lineHeight: 'var(--atomix-line-height-relaxed)' }}>
                          Learn how to build your first application with
                          Atomix components
                        </p>
                        <div className="u-d-flex u-align-items-center u-text-primary-emphasis u-fw-medium">
                          <span className="u-me-2">Get Started</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                  <GridCol md={6} className="u-mb-4">
                    <Card 
                      className="u-h-100 u-cursor-pointer u-transition-fast u-border u-border-subtle"
                      style={{ transition: 'var(--atomix-transition-fast)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = 'var(--atomix-shadow-lg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.boxShadow = '';
                      }}
                      onClick={() => window.location.href = '/docs/guides/theming'}
                    >
                      <div className="u-p-6">
                        <div className="u-d-flex u-align-items-center u-mb-4">
                          <div className="u-w-12 u-h-12 u-bg-secondary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-4">
                            <Palette
                              size={24}
                              className="u-text-secondary-emphasis"
                            />
                          </div>
                          <h3 className="u-fs-lg u-fw-semibold u-m-0 u-text-primary-emphasis">
                            Setup Theming
                          </h3>
                        </div>
                        <p className="u-text-secondary-emphasis u-mb-4" style={{ lineHeight: 'var(--atomix-line-height-relaxed)' }}>
                          Customize Atomix to match your brand with our
                          theming system
                        </p>
                        <div className="u-d-flex u-align-items-center u-text-primary-emphasis u-fw-medium">
                          <span className="u-me-2">Learn More</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </Card>
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
                glass={{
                  padding: "20px",
                } as any}
              />

              <Block>
                <Row justifyContent="center" className="u-mb-8">
                  <GridCol lg={10}>
                    <Card className="u-p-6 u-bg-brand-subtle">
                      <div className="u-d-flex u-align-items-center u-gap-3">
                        <Zap size={32} className="u-text-primary-emphasis" />
                        <div>
                          <h3 className="u-m-0 u-mb-2">Prerequisites</h3>
                          <p className="u-m-0 u-text-secondary-emphasis">
                            Make sure you have <strong>React 18+</strong> and <strong>Node.js 16+</strong> installed
                          </p>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                </Row>

                {/* Step 1: Installation */}
                <Row justifyContent="center" className="u-mb-8">
                  <GridCol lg={10}>
                    <Card className="u-p-8">
                      <div className="u-d-flex u-align-items-start u-gap-4 u-mb-6">
                        <div className="u-w-16 u-h-16 u-bg-primary-subtle u-rounded-full u-d-flex u-align-items-center u-justify-content-center u-flex-shrink-0">
                          <span className="u-fs-2xl u-fw-bold u-text-primary-emphasis">1</span>
                        </div>
                        <div className="u-flex-grow-1">
                          <h2 className="u-m-0 u-mb-2">Install Atomix</h2>
                          <p className="u-text-secondary-emphasis u-mb-4">
                            Choose your preferred package manager and run the installation command
                          </p>
                        </div>
                      </div>

                      <Row>
                        <GridCol md={4} className="u-mb-4">
                          <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden">
                            <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-3 u-bg-secondary-subtle">
                              <span className="u-fs-sm u-fw-semibold">npm</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  copyToClipboard(
                                    "npm install @shohojdhara/atomix",
                                    "npm-quick"
                                  )
                                }
                              >
                                {copiedCode === "npm-quick" ? (
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
                        </GridCol>
                        <GridCol md={4} className="u-mb-4">
                          <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden">
                            <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-3 u-bg-secondary-subtle">
                              <span className="u-fs-sm u-fw-semibold">yarn</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  copyToClipboard(
                                    "yarn add @shohojdhara/atomix",
                                    "yarn-quick"
                                  )
                                }
                              >
                                {copiedCode === "yarn-quick" ? (
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
                        </GridCol>
                        <GridCol md={4} className="u-mb-4">
                          <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden">
                            <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-3 u-bg-secondary-subtle">
                              <span className="u-fs-sm u-fw-semibold">pnpm</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                  copyToClipboard(
                                    "pnpm add @shohojdhara/atomix",
                                    "pnpm-quick"
                                  )
                                }
                              >
                                {copiedCode === "pnpm-quick" ? (
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
                        </GridCol>
                      </Row>
                    </Card>
                  </GridCol>
                </Row>

                {/* Step 2: Import Styles */}
                <Row justifyContent="center" className="u-mb-8">
                  <GridCol lg={10}>
                    <Card className="u-p-8">
                      <div className="u-d-flex u-align-items-start u-gap-4 u-mb-6">
                        <div className="u-w-16 u-h-16 u-bg-success-subtle u-rounded-full u-d-flex u-align-items-center u-justify-content-center u-flex-shrink-0">
                          <span className="u-fs-2xl u-fw-bold u-text-success">2</span>
                        </div>
                        <div className="u-flex-grow-1">
                          <h2 className="u-m-0 u-mb-2">Import CSS Styles</h2>
                          <p className="u-text-secondary-emphasis u-mb-4">
                            Import the Atomix CSS in your main entry point (e.g., <code>main.tsx</code> or <code>App.tsx</code>)
                          </p>
                        </div>
                      </div>

                      <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden">
                        <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-3 u-bg-secondary-subtle">
                          <span className="u-fs-sm u-fw-semibold">main.tsx</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                "import '@shohojdhara/atomix/css';",
                                "import-css"
                              )
                            }
                          >
                            {copiedCode === "import-css" ? (
                              <CheckCircle size={16} />
                            ) : (
                              <Copy size={16} />
                            )}
                          </Button>
                        </div>
                        <pre className="u-m-0 u-p-4 u-fs-sm">
                          <code>{`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Atomix CSS
import '@shohojdhara/atomix/css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}</code>
                        </pre>
                      </div>

                      <div className="u-mt-4 u-p-4 u-bg-info-subtle u-rounded u-d-flex u-gap-3">
                        <BookOpen size={20} className="u-text-info u-flex-shrink-0 u-mt-1" />
                        <div>
                          <p className="u-m-0 u-fs-sm">
                            <strong>Optional:</strong> You can also import a specific theme:
                          </p>
                          <pre className="u-mt-2 u-mb-0 u-p-2 u-bg-white u-rounded u-fs-xs">
                            <code>import '@shohojdhara/atomix/themes/boomdevs';</code>
                          </pre>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                </Row>

                {/* Step 3: Use Components */}
                <Row justifyContent="center" className="u-mb-8">
                  <GridCol lg={10}>
                    <Card className="u-p-8">
                      <div className="u-d-flex u-align-items-start u-gap-4 u-mb-6">
                        <div className="u-w-16 u-h-16 u-bg-warning-subtle u-rounded-full u-d-flex u-align-items-center u-justify-content-center u-flex-shrink-0">
                          <span className="u-fs-2xl u-fw-bold u-text-warning">3</span>
                        </div>
                        <div className="u-flex-grow-1">
                          <h2 className="u-m-0 u-mb-2">Start Using Components</h2>
                          <p className="u-text-secondary-emphasis u-mb-4">
                            Import and use Atomix components in your React application
                          </p>
                        </div>
                      </div>

                      <div className="u-bg-tertiary-subtle u-rounded u-overflow-hidden u-mb-4">
                        <div className="u-d-flex u-align-items-center u-justify-content-between u-px-4 u-py-3 u-bg-secondary-subtle">
                          <span className="u-fs-sm u-fw-semibold">App.tsx</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                `import { Button, Card, Hero } from '@shohojdhara/atomix';

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

export default App;`,
                                "use-components"
                              )
                            }
                          >
                            {copiedCode === "use-components" ? (
                              <CheckCircle size={16} />
                            ) : (
                              <Copy size={16} />
                            )}
                          </Button>
                        </div>
                        <pre className="u-m-0 u-p-4 u-fs-sm">
                          <code>{`import { Button, Card, Hero } from '@shohojdhara/atomix';

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

export default App;`}</code>
                        </pre>
                      </div>

                      <div className="u-p-4 u-bg-success-subtle u-rounded">
                        <div className="u-d-flex u-gap-3">
                          <CheckCircle size={20} className="u-text-success u-flex-shrink-0 u-mt-1" />
                          <div>
                            <p className="u-m-0 u-fw-semibold u-mb-2">You're all set! 🎉</p>
                            <p className="u-m-0 u-fs-sm u-text-secondary-emphasis">
                              You now have Atomix installed and ready to use. Explore our component library to build amazing interfaces.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                </Row>

                {/* Next Steps */}
                <Row justifyContent="center">
                  <GridCol lg={10}>
                    <Card className="u-p-8 u-bg-gradient-primary">
                      <h2 className="u-mb-6 u-text-center">🚀 Next Steps</h2>
                      <Row>
                        <GridCol md={4} className="u-mb-4">
                          <Card className="u-p-6 u-h-full">
                            <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded u-d-flex u-align-items-center u-justify-content-center u-mb-4">
                              <BookOpen size={24} className="u-text-primary-emphasis" />
                            </div>
                            <h3 className="u-fs-lg u-fw-semibold u-mb-3">Browse Components</h3>
                            <p className="u-text-secondary-emphasis u-mb-4 u-fs-sm">
                              Explore 40+ components with live examples and documentation
                            </p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="u-w-100"
                              onClick={() => window.location.href = '/docs/components/overview'}
                            >
                              View Components
                              <ArrowRight size={16} className="u-ms-2" />
                            </Button>
                          </Card>
                        </GridCol>
                        <GridCol md={4} className="u-mb-4">
                          <Card className="u-p-6 u-h-100">
                            <div className="u-w-12 u-h-12 u-bg-success-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-mb-4">
                              <Palette size={24} className="u-text-success" />
                            </div>
                            <h3 className="u-fs-lg u-fw-semibold u-mb-3">Customize Theme</h3>
                            <p className="u-text-secondary-emphasis u-mb-4 u-fs-sm">
                              Learn how to customize colors, spacing, and typography
                            </p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="u-w-100"
                              onClick={() => window.location.href = '/docs/guides/theming'}
                            >
                              Theming Guide
                              <ArrowRight size={16} className="u-ms-2" />
                            </Button>
                          </Card>
                        </GridCol>
                        <GridCol md={4} className="u-mb-4">
                          <Card className="u-p-6 u-h-100">
                            <div className="u-w-12 u-h-12 u-bg-warning-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-mb-4">
                              <Code size={24} className="u-text-warning" />
                            </div>
                            <h3 className="u-fs-lg u-fw-semibold u-mb-3">View Examples</h3>
                            <p className="u-text-secondary-emphasis u-mb-4 u-fs-sm">
                              Check out real-world examples and common patterns
                            </p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="u-w-100"
                              onClick={() => window.location.href = '/docs/examples/common-patterns'}
                            >
                              See Examples
                              <ArrowRight size={16} className="u-ms-2" />
                            </Button>
                          </Card>
                        </GridCol>
                      </Row>
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
            <div>
              <h1 className="u-fs-4xl u-fw-bold u-mb-4">Getting Started</h1>
              <p className="u-text-secondary-emphasis">Welcome to Atomix documentation!</p>
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

'use client';

import { useState, useEffect, FC } from "react";
import Link from 'next/link';
import {
  BookOpen,
  Palette,
  Grid3X3,
  Code,
  Layers,
  Zap,
  Users,
  Map,
  ArrowRight,
  Sparkles,
  Building,

  FileText,
  Download,
} from "lucide-react";
import {
  Button,
  Card,
  Hero,
  GridCol,
  Row,
  Block,
  SectionIntro,
} from "@shohojdhara/atomix";
import { GlassProps } from "@/types/atomix-components";
import styles from '@/styles/PageHero.module.scss';
import type { ReactNode } from 'react';

const DocumentationOverviewPage: FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering glass effect on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const glass: GlassProps | undefined = isMounted ? {
    displacementScale: 30,
    blurAmount: 5,
    elasticity: 0,
    enableLiquidBlur: true,
    padding: "20px",
    cornerRadius: 30,
    children: null,
  } : undefined;
  
  const documentationSections: Array<{
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
    items: Array<{
      title: string;
      description: string;
      path: string;
    }>;
  }> = [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Everything you need to get up and running with Atomix",
      icon: <BookOpen size={24} />,
      color: "primary",
      items: [
        {
          title: "Installation",
          description: "Complete setup instructions for Atomix",
          path: "/docs/getting-started/installation",
        },
        {
          title: "Quick Start",
          description: "5-minute tutorial to get started",
          path: "/docs/getting-started/quick-start",
        },
        {
          title: "Migration Guide",
          description: "Migrate from other design systems",
          path: "/docs/getting-started/migration",
        },
      ],
    },
    {
      id: "design-tokens",
      title: "Design Tokens",
      description: "The foundation of the Atomix Design System",
      icon: <Palette size={24} />,
      color: "secondary",
      items: [
        {
          title: "Colors",
          description: "Comprehensive color system and palettes",
          path: "/docs/design-tokens/colors",
        },
        {
          title: "Spacing",
          description: "Spacing and layout system",
          path: "/docs/design-tokens/spacing",
        },
        {
          title: "Typography",
          description: "Type system and scales",
          path: "/docs/design-tokens/typography",
        },
        {
          title: "Elevation",
          description: "Shadow and depth system",
          path: "/docs/design-tokens/elevation",
        },
      ],
    },
    {
      id: "styles",
      title: "Styles System",
      description: "CSS architecture and utilities built on ITCSS",
      icon: <Building size={24} />,
      color: "tertiary",
      items: [
        {
          title: "Architecture",
          description: "ITCSS structure and organization",
          path: "/docs/styles/architecture",
        },
        {
          title: "Customization",
          description: "Theming and brand integration",
          path: "/docs/styles/customization",
        },
        {
          title: "Utilities",
          description: "Complete utility class reference",
          path: "/docs/styles/utilities",
        },
        {
          title: "API Reference",
          description: "Complete technical reference",
          path: "/docs/styles/api-reference",
        },
      ],
    },
    {
      id: "layouts",
      title: "Layouts",
      description: "Powerful layout system for responsive interfaces",
      icon: <Grid3X3 size={24} />,
      color: "brand",
      items: [
        {
          title: "Grid System",
          description: "Comprehensive 12-column responsive grid",
          path: "/docs/layouts/grid",
        },
        {
          title: "Masonry Grid",
          description: "Pinterest-style dynamic layouts",
          path: "/docs/layouts/masonry-grid",
        },
        {
          title: "Responsive Patterns",
          description: "Common responsive layout solutions",
          path: "/docs/layouts/responsive-patterns",
        },
        {
          title: "Performance",
          description: "Optimization strategies",
          path: "/docs/layouts/performance",
        },
      ],
    },
    {
      id: "components",
      title: "Components",
      description: "40+ components with React and vanilla JS",
      icon: <Layers size={24} />,
      color: "success",
      items: [
        {
          title: "Overview",
          description: "All available components",
          path: "/docs/components/overview",
        },
        {
          title: "Guidelines",
          description: "Development standards and best practices",
          path: "/docs/components/guidelines",
        },
        {
          title: "AtomixGlass",
          description: "Advanced WebGL glass morphism effects",
          path: "/docs/components/atomix-glass",
        },
        {
          title: "Charts",
          description: "15+ chart types with animations",
          path: "/docs/components/chart",
        },
      ],
    },
    {
      id: "guides",
      title: "Guides",
      description: "In-depth guides and tutorials",
      icon: <Zap size={24} />,
      color: "warning",
      items: [
        {
          title: "Theming Guide",
          description: "Advanced theming techniques",
          path: "/docs/guides/theming",
        },
        {
          title: "AtomixGlass Performance",
          description: "Optimizing AtomixGlass for performance",
          path: "/docs/guides/atomix-glass-performance",
        },
      ],
    },
  ];

  const quickStats: Array<{
    label: string;
    value: string;
    icon: ReactNode;
  }> = [
    { label: "Components", value: "40+", icon: <Layers size={20} /> },
    { label: "Design Tokens", value: "200+", icon: <Palette size={20} /> },
    { label: "Utility Classes", value: "500+", icon: <Code size={20} /> },
    { label: "Chart Types", value: "15+", icon: <Sparkles size={20} /> },
  ];

  return (
    <div>
        {/* Hero Section */}
        <Hero
          glass={glass}
          className={styles.pageHero}
          title="Atomix Documentation"
          subtitle="Comprehensive Design System"
          text="Everything you need to build amazing user interfaces with Atomix. From getting started to advanced customization, find all the resources you need."
          alignment="center"
          backgroundImageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
          showOverlay={true}
          fullViewportHeight={false}
          contentWidth="800px"
          actions={
            <div className={styles.pageHero__actions}>
              <Button
                glass
                icon={<Download size={16} />}
                label="Get Started"
                href="/docs/getting-started/installation"
              />
              <Button
                glass
                variant="secondary"
                label="Browse Components"
                icon={<Layers size={16} />}
                href="/docs/components/overview"
              />
            </div>
          }
        />

        {/* Quick Stats */}
        <Block spacing="sm" background="secondary" >
          <SectionIntro
            title="By the Numbers"
            text="Atomix provides a comprehensive set of tools and components"
            alignment="center"
          />
          <Row>
            {quickStats.map((stat, index) => (
              <GridCol key={index} sm={6} lg={3} className="u-mb-4">
                <Card className="u-text-center u-p-6">
                  <div className="u-d-inline-flex u-align-items-center u-justify-content-center u-w-16 u-h-16 u-bg-brand-subtle u-rounded-full u-mb-4 u-text-brand-emphasis">
                    {stat.icon}
                  </div>
                  <div className="u-fs-2xl u-fw-bold u-mb-2 u-text-primary-emphasis">
                    {stat.value}
                  </div>
                  <div className="u-text-secondary-emphasis">{stat.label}</div>
                </Card>
              </GridCol>
            ))}
          </Row>
        </Block>

        {/* Documentation Sections */}
        <Block spacing="lg" >
          <SectionIntro
            title="Explore the Documentation"
            text="Comprehensive guides and references for every aspect of Atomix"
            alignment="center"
          />
          
          <div className="u-space-y-12">
            {documentationSections.map((section) => (
              <div key={section.id}>
                <div className="u-d-flex u-align-items-center u-mb-6">
                  <div 
                    className={`u-w-12 u-h-12 u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-4`}
                    style={{
                      backgroundColor: `var(--atomix-${section.color}-bg-subtle)`,
                      color: `var(--atomix-${section.color}-text-emphasis)`
                    }}
                  >
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="u-fs-2xl u-fw-bold u-m-0 u-mb-1 u-text-primary-emphasis">
                      {section.title}
                    </h2>
                    <p className="u-m-0 u-text-secondary-emphasis">
                      {section.description}
                    </p>
                  </div>
                </div>
                
                <Row>
                  {section.items.map((item, itemIndex) => (
                    <GridCol key={itemIndex} md={6} lg={3} className="u-mb-4">
                      <Link
                        href={item.path}
                        className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                      >
                        <Card 
                          className="u-h-100 u-cursor-pointer u-transition-fast u-border u-border-subtle u-hover-transform-up"
                        >
                          <div className="u-p-6 u-h-100 u-d-flex u-flex-column">
                            <h3 className="u-fs-lg u-fw-semibold u-mb-2 u-text-primary-emphasis">
                              {item.title}
                            </h3>
                            <p className="u-text-secondary-emphasis u-mb-4 u-flex-grow-1 u-line-height-relaxed">
                              {item.description}
                            </p>
                            <div className="u-d-flex u-align-items-center u-text-primary-emphasis u-fw-medium">
                              <span className="u-me-2">Learn more</span>
                              <ArrowRight size={16} />
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </GridCol>
                  ))}
                </Row>
              </div>
            ))}
          </div>
        </Block>

        {/* API Reference Section */}
        <Block spacing="sm" background="brand" >
          <SectionIntro
            title="API Reference"
            text="Complete technical reference for all APIs"
            alignment="center"
          />
          <Row>
            {[
              {
                title: "React API",
                description: "React component reference and props",
                path: "/docs/api/react",
                icon: <Code size={24} />,
              },
              {
                title: "JavaScript API",
                description: "Vanilla JS class reference",
                path: "/docs/api/javascript",
                icon: <FileText size={24} />,
              },
              {
                title: "CSS API",
                description: "CSS classes and custom properties",
                path: "/docs/api/css",
                icon: <Palette size={24} />,
              },
            ].map((api, index) => (
              <GridCol key={index} md={4} className="u-mb-6">
                <Link
                  href={api.path}
                  className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                >
                  <Card 
                    className="u-h-100 u-cursor-pointer u-transition-fast u-border u-border-subtle u-hover-transform-up"
                  >
                    <div className="u-p-6 u-h-100 u-d-flex u-flex-column">
                      <div className="u-d-flex u-align-items-center u-mb-4">
                        <div className="u-w-12 u-h-12 u-bg-primary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-4 u-text-primary-emphasis">
                          {api.icon}
                        </div>
                        <h3 className="u-fs-lg u-fw-semibold u-m-0 u-text-primary-emphasis">
                          {api.title}
                        </h3>
                      </div>
                      <p className="u-text-secondary-emphasis u-mb-4 u-flex-grow-1" style={{ lineHeight: 'var(--atomix-line-height-relaxed)' }}>
                        {api.description}
                      </p>
                      <div className="u-d-flex u-align-items-center u-text-primary-emphasis u-fw-medium">
                        <span className="u-me-2">View Reference</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Card>
                </Link>
              </GridCol>
            ))}
          </Row>
        </Block>

        {/* Resources Section */}
        <Block spacing="sm" >
          <SectionIntro
            title="Resources & Community"
            text="Additional resources, roadmap, and community information"
            alignment="center"
          />
          <Row>
            {[
              {
                title: "Roadmap",
                description: "Development roadmap and future plans",
                path: "/docs/resources/roadmap",
                icon: <Map size={24} />,
              },
              {
                title: "Contributing",
                description: "How to contribute to the project",
                path: "/docs/resources/contributing",
                icon: <Users size={24} />,
              },
              {
                title: "Examples",
                description: "Real-world patterns and implementations",
                path: "/docs/examples/common-patterns",
                icon: <Sparkles size={24} />,
              },
            ].map((resource, index) => (
              <GridCol key={index} md={4} className="u-mb-6">
                <Link
                  href={resource.path}
                  className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                >
                  <Card 
                    className="u-h-100 u-cursor-pointer u-transition-fast u-border u-border-subtle u-hover-transform-up"
                  >
                    <div className="u-p-6 u-h-100 u-d-flex u-flex-column">
                      <div className="u-d-flex u-align-items-center u-mb-4">
                        <div className="u-w-12 u-h-12 u-bg-secondary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-4 u-text-secondary-emphasis">
                          {resource.icon}
                        </div>
                        <h3 className="u-fs-lg u-fw-semibold u-m-0 u-text-primary-emphasis">
                          {resource.title}
                        </h3>
                      </div>
                      <p className="u-text-secondary-emphasis u-mb-4 u-flex-grow-1" style={{ lineHeight: 'var(--atomix-line-height-relaxed)' }}>
                        {resource.description}
                      </p>
                      <div className="u-d-flex u-align-items-center u-text-primary-emphasis u-fw-medium">
                        <span className="u-me-2">Explore</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Card>
                </Link>
              </GridCol>
            ))}
          </Row>
        </Block>

        {/* CTA Section */}
        <Block spacing="sm" background="tertiary" >
          <Row justifyContent="center">
            <GridCol lg={8}>
              <Card className="u-text-center u-p-8">
                <h2 className="u-mb-4 u-text-primary-emphasis">
                  Ready to Build Something Amazing?
                </h2>
                <p className="u-text-secondary-emphasis u-mb-6 u-lh-lg">
                  Start building with Atomix today. Install the package and explore our comprehensive component library.
                </p>
                <div className="u-d-flex u-gap-4 u-flex-wrap u-justify-content-center">
                  <Button
                    icon={<Download size={16} />}
                    label="Get Started"
                    href="/docs/getting-started/installation"
                  />
                  <Button
                    variant="outline"
                    icon={<Layers size={16} />}
                    label="Browse Components"
                    href="/docs/components/overview"
                  />
                </div>
              </Card>
            </GridCol>
          </Row>
        </Block>
      </div>
  );
};

export default DocumentationOverviewPage;
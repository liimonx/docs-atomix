"use client";

import { FC } from "react";
import Link from "next/link";

import {
  Button,
  Card,
  GridCol,
  Icon,
  Grid,
  Block,
  SectionIntro,
} from "@shohojdhara/atomix";
import type { ReactNode } from "react";

const DocumentationOverviewPage: FC = () => {
  // Documentation sections data...

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
      icon: <Icon name="BookOpen" size="lg" />,
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
      icon: <Icon name="Palette" size="lg" />,
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
      icon: <Icon name="Building" size="lg" />,
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
      icon: <Icon name="GridFour" size="lg" />,
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
      icon: <Icon name="Stack" size="lg" />,
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
      icon: <Icon name="Lightning" size="lg" />,
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
    {
      label: "Components",
      value: "40+",
      icon: <Icon name="Stack" size="lg" />,
    },
    {
      label: "Design Tokens",
      value: "200+",
      icon: <Icon name="Palette" size="lg" />,
    },
    {
      label: "Utility Classes",
      value: "500+",
      icon: <Icon name="Code" size="lg" />,
    },
    {
      label: "Chart Types",
      value: "15+",
      icon: <Icon name="Sparkle" size="lg" />,
    },
  ];

  return (
    <div className="u-relative u-z-10 u-flex u-flex-column u-items-center u-min-h-100">
      {/* Hero Section */}
      <main className="u-w-100 u-pt-32 u-pb-20 u-px-4">
        <div className="u-max-w-5xl u-mx-auto u-text-center u-flex u-flex-column u-items-center u-gap-10">
          <div className="u-flex u-flex-column u-gap-4">
            <h1
              className="u-fs-5xl u-font-black u-tracking-tight u-leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
                background: "linear-gradient(180deg, #fff 30%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Atomix Documentation.
            </h1>
            <p className="u-fs-xl u-text-secondary u-max-w-2xl u-mx-auto u-leading-relaxed u-opacity-80">
              Everything you need to build amazing user interfaces with Atomix.
              High-performance filters, cinematic depth, and frosted glass
              realism.
            </p>
          </div>

          <div className="u-flex u-flex-column u-flex-md-row u-gap-4 u-mt-4 u-w-100 u-justify-center">
            <Button
              variant="primary"
              size="lg"
              iconName="ArrowRight"
              iconPosition="end"
              className="u-px-8 u-h-14 u-rounded-lg u-shadow-primary-glow u-fs-lg"
              href="/docs/getting-started/installation"
              LinkComponent={Link}
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              size="lg"
              iconName="Stack"
              className="u-px-8 u-h-14 u-rounded-lg u-bg-surface-subtle u-fs-lg"
              href="/docs/components/overview"
              LinkComponent={Link}
            >
              Browse Components
            </Button>
          </div>
        </div>
      </main>

      {/* Quick Stats */}
      <Block
        spacing="sm"
        className="u-py-20 u-border-y u-border-glass u-bg-background-subtle"
      >
        <SectionIntro
          title="By the Numbers"
          text="Atomix provides a comprehensive set of tools and components"
          alignment="center"
          className="u-mb-12"
        />
        <Grid>
          {quickStats.map((stat, index) => (
            <GridCol key={index} sm={6} lg={3} className="u-mb-6">
              <Card className="u-text-center u-p-8 u-h-100 u-rounded-2xl u-border u-border-glass u-shadow-lg">
                <div className="u-inline-flex u-items-center u-justify-center u-w-16 u-h-16 u-bg-primary-subtle u-text-primary u-rounded-2xl u-mb-6 u-shadow-sm">
                  {stat.icon}
                </div>
                <div className="u-text-3xl u-font-black u-mb-1 u-tracking-tight">
                  {stat.value}
                </div>
                <div className="u-text-secondary u-fs-sm u-font-bold u-uppercase u-tracking-widest u-opacity-60">
                  {stat.label}
                </div>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Block>

      {/* Documentation Sections */}
      <Block className="u-py-20 u-relative u-z-10">
        <SectionIntro
          title="Explore the Documentation"
          text="Comprehensive guides and references for every aspect of Atomix"
          alignment="center"
        />

        <div className="u-py-12">
          {documentationSections.map((section) => (
            <div key={section.id}>
              <div className="u-flex u-items-center u-mb-6">
                <div
                  className={`u-w-12 u-h-12 u-rounded-md u-flex u-items-center u-justify-center u-me-4`}
                  style={{
                    backgroundColor: `var(--atomix-${section.color}-bg-subtle)`,
                    color: `var(--atomix-${section.color}-text-emphasis)`,
                  }}
                >
                  {section.icon}
                </div>
                <div>
                  <h2 className="u-text-2xl u-font-bold u-m-0 u-mb-1 u-text-primary-emphasis">
                    {section.title}
                  </h2>
                  <p className="u-m-0 u-text-secondary-emphasis">
                    {section.description}
                  </p>
                </div>
              </div>

              <Grid>
                {section.items.map((item, itemIndex) => (
                  <GridCol key={itemIndex} md={6} lg={4} className="u-mb-8">
                    <Link
                      href={item.path}
                      className="u-text-decoration-none u-text-inherit u-block u-h-100"
                    >
                      <Card className="u-h-100 u-cursor-pointer u-transition-all u-hover-translate-y-n2 u-rounded-2xl u-border u-border-glass u-shadow-lg">
                        <div className="u-p-8 u-h-100 u-flex u-flex-column">
                          <h3 className="u-text-xl u-font-black u-mb-2 u-tracking-tight">
                            {item.title}
                          </h3>
                          <p className="u-text-secondary u-mb-6 u-flex-grow-1 u-leading-relaxed u-opacity-80">
                            {item.description}
                          </p>
                          <div className="u-flex u-items-center u-text-primary u-font-bold u-fs-sm">
                            <span className="u-me-2">Learn more</span>
                            <Icon name="ArrowRight" size={16} />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </GridCol>
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </Block>

      {/* API Reference Section */}
      <Block
        spacing="sm"
        className="u-py-20 u-border-y u-border-glass u-bg-background-subtle"
      >
        <SectionIntro
          title="API Reference"
          text="Complete technical reference for all APIs"
          alignment="center"
        />
        <Grid>
          {[
            {
              title: "React API",
              description: "React component reference and props",
              path: "/docs/api/react",
              icon: <Icon name="Code" size="lg" />,
            },
            {
              title: "JavaScript API",
              description: "Vanilla JS class reference",
              path: "/docs/api/javascript",
              icon: <Icon name="FileText" size="lg" />,
            },
            {
              title: "CSS API",
              description: "CSS classes and custom properties",
              path: "/docs/api/css",
              icon: <Icon name="Palette" size="lg" />,
            },
          ].map((api, index) => (
            <GridCol key={index} md={4} className="u-mb-6">
              <Link
                href={api.path}
                className="u-text-decoration-none u-text-inherit u-block u-h-100"
              >
                <Card className="u-h-100 u-cursor-pointer u-transition-all u-hover-translate-y-n2 u-rounded-2xl u-border u-border-glass u-shadow-lg">
                  <div className="u-p-8 u-h-100 u-flex u-flex-column">
                    <div className="u-flex u-items-center u-mb-6">
                      <div className="u-w-12 u-h-12 u-bg-primary-subtle u-text-primary u-rounded-xl u-flex u-items-center u-justify-center u-me-4 u-shadow-sm">
                        {api.icon}
                      </div>
                      <h3 className="u-text-xl u-font-black u-m-0 u-tracking-tight">
                        {api.title}
                      </h3>
                    </div>
                    <p className="u-text-secondary u-mb-6 u-flex-grow-1 u-leading-relaxed u-opacity-80">
                      {api.description}
                    </p>
                    <div className="u-flex u-items-center u-text-primary u-font-bold u-fs-sm">
                      <span className="u-me-2">View Reference</span>
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </div>
                </Card>
              </Link>
            </GridCol>
          ))}
        </Grid>
      </Block>

      {/* Resources Section */}
      <Block spacing="sm" className="u-py-20">
        <SectionIntro
          title="Resources & Community"
          text="Additional resources, roadmap, and community information"
          alignment="center"
          className="u-mb-12"
        />
        <Grid>
          {[
            {
              title: "Roadmap",
              description: "Development roadmap and future plans",
              path: "/docs/resources/roadmap",
              icon: <Icon name="Globe" size="lg" />,
            },
            {
              title: "Contributing",
              description: "How to contribute to the project",
              path: "/docs/resources/contributing",
              icon: <Icon name="Users" size="lg" />,
            },
            {
              title: "Examples",
              description: "Real-world patterns and implementations",
              path: "/docs/examples/common-patterns",
              icon: <Icon name="Sparkle" size="lg" />,
            },
          ].map((resource, index) => (
            <GridCol key={index} md={4} className="u-mb-6">
              <Link
                href={resource.path}
                className="u-text-decoration-none u-text-inherit u-block u-h-100"
              >
                <Card className="u-h-100 u-cursor-pointer u-transition-all u-hover-translate-y-n2 u-rounded-2xl u-border u-border-glass u-shadow-lg">
                  <div className="u-p-8 u-h-100 u-flex u-flex-column">
                    <div className="u-flex u-items-center u-mb-6">
                      <div className="u-w-12 u-h-12 u-bg-primary-subtle u-text-primary u-rounded-xl u-flex u-items-center u-justify-center u-me-4 u-shadow-sm">
                        {resource.icon}
                      </div>
                      <h3 className="u-text-xl u-font-black m-0 u-tracking-tight">
                        {resource.title}
                      </h3>
                    </div>
                    <p className="u-text-secondary u-mb-6 u-flex-grow-1 u-leading-relaxed u-opacity-80">
                      {resource.description}
                    </p>
                    <div className="u-flex u-items-center u-text-primary u-font-bold u-fs-sm">
                      <span className="u-me-2">Explore</span>
                      <Icon name="CaretRight" size={16} />
                    </div>
                  </div>
                </Card>
              </Link>
            </GridCol>
          ))}
        </Grid>
      </Block>

      {/* CTA Section */}
      <Block spacing="none" className="u-py-24 u-relative u-z-10">
        <Grid>
          <GridCol lg={8} className="u-mx-auto">
            <Card className="u-text-center u-p-12 u-rounded-3xl u-border u-border-glass u-shadow-2xl">
              <h2 className="u-fs-3xl u-font-black u-mb-4 u-tracking-tight">
                Ready to Build Something Amazing?
              </h2>
              <p className="u-fs-lg u-text-secondary u-mb-10 u-leading-relaxed u-opacity-80">
                Start building with Atomix today. Install the package and
                explore our comprehensive component library.
              </p>
              <div className="u-flex u-gap-6 u-flex-wrap u-justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="Download"
                  className="u-h-14 u-px-8 u-rounded-xl u-shadow-primary-glow"
                  href="/docs/getting-started/installation"
                  LinkComponent={Link}
                >
                  Get Started
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Stack"
                  className="u-h-14 u-px-8 u-rounded-xl u-bg-surface-subtle"
                  href="/docs/components/overview"
                  LinkComponent={Link}
                >
                  Browse Components
                </Button>
              </div>
            </Card>
          </GridCol>
        </Grid>
      </Block>
    </div>
  );
};

export default DocumentationOverviewPage;

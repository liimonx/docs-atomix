"use client";
import Link from "next/link";
import { HomePageLayout } from "@/components/layout/HomePageLayout";
import {
  Hero,
  Block,
  Card,
  Button,
  Icon,
  GridCol,
  SectionIntro,
  AtomixGlass,
  Container,
  Grid,
} from "@shohojdhara/atomix";
import CallToActionSection from "@/components/sections/CallToActionSection";

// Note: This page uses client components (HomePageLayout has interactive features)
// Metadata is handled in app/layout.tsx for the root page
export default function Page() {
  // Statistics data
  const quickStats = [
    {
      label: "Components",
      value: "40+",
      icon: "Stack" as const,
      color: "primary" as const,
      description: "Ready-to-use React components",
    },
    {
      label: "Design Tokens",
      value: "200+",
      icon: "Palette" as const,
      color: "success" as const,
      description: "Colors, spacing, typography",
    },
    {
      label: "Utility Classes",
      value: "500+",
      icon: "Code" as const,
      color: "info" as const,
      description: "Powerful CSS utilities",
    },
    {
      label: "Chart Types",
      value: "15+",
      icon: "Sparkle" as const,
      color: "warning" as const,
      description: "Advanced data visualization",
    },
  ];

  // Features data
  const features = [
    {
      icon: <Icon name="Lightning" />,
      title: "40+ Components",
      description:
        "Comprehensive component library from basic buttons to advanced charts and AtomixGlass effects.",
    },
    {
      icon: <Icon name="Palette" />,
      title: "Design System Foundation",
      description:
        "Complete design tokens, ITCSS architecture, and powerful layout system with grid and masonry.",
    },
    {
      icon: <Icon name="Shield" />,
      title: "Accessibility First",
      description:
        "WCAG 2.1 AA compliant with full keyboard navigation, screen reader support, and focus management.",
    },
    {
      icon: <Icon name="Code" />,
      title: "Dual Implementation",
      description:
        "React components and vanilla JavaScript classes with TypeScript support and comprehensive docs.",
    },
    {
      icon: <Icon name="Sparkle" />,
      title: "AtomixGlass Effects",
      description:
        "Advanced WebGL-powered glass morphism effects with multiple variants and performance optimization.",
    },
    {
      icon: <Icon name="Stack" />,
      title: "Complete Theming",
      description:
        "Multiple built-in themes, CSS custom properties, and SCSS configuration for brand integration.",
    },
  ];

  // Philosophy data
  const philosophies = [
    {
      icon: <Icon name="Heart" />,
      title: "Principled Design",
      description:
        "Every design decision stems from our core principles of clarity, consistency, and inclusivity. We believe beautiful interfaces should be accessible to everyone.",
    },
    {
      icon: <Icon name="Lightning" />,
      title: "Performance Conscious",
      description:
        "We craft lightweight solutions that prioritize performance without sacrificing functionality. Less code, more speed, better experience.",
    },
    {
      icon: <Icon name="GitMerge" />,
      title: "Scalable Architecture",
      description:
        "Built on ITCSS methodology, our architecture scales from small projects to enterprise applications with predictable organization.",
    },
    {
      icon: <Icon name="Globe" />,
      title: "Universally Accessible",
      description:
        "Accessibility isn't an add-on but a foundation. Every component meets WCAG 2.1 AA standards with full keyboard navigation support.",
    },
    {
      icon: <Icon name="Gear" />,
      title: "Developer Experience",
      description:
        "Thoughtful APIs, comprehensive documentation, and intuitive customization make development enjoyable and efficient.",
    },
    {
      icon: <Icon name="ArrowsClockwise" />,
      title: "Future-Proof",
      description:
        "Our forward-looking approach ensures compatibility with emerging technologies while maintaining stability for production systems.",
    },
  ];

  const heroSiderContent = {
    slides: [
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2024/08/20/227583_large.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2022/09/23/132253-752803366_large.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2021/01/14/62028-502737559_large.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2025/11/07/314643_large.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2023/02/25/152085-802335503_large.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2025/03/07/263086_large.mp4",
      },
    ],
    autoplay: {
      delay: 5000,
      pauseOnHover: false,
    },
    loop: true,
    transition: "fade",
    transitionDuration: 1000,
  };

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

  // LinkContent component for quick links
  const LinkContent = ({
    title,
    description,
    external,
    icon,
  }: {
    title: string;
    description: string;
    external: boolean;
    icon?: React.ReactNode;
  }) => (
    <div className="u-d-flex u-flex-column u-h-100">
      <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-3">
        <div className="u-d-flex u-align-items-center">
          {icon || (
            <Icon name={"FileText" as const} size={20} className="u-me-2" />
          )}
          <h3 className="u-fs-lg u-fw-600 u-m-0 u-text-primary-emphasis">
            {title}
          </h3>
        </div>
        {external && (
          <Icon name={"Link" as const} size={16} className="u-opacity-60" />
        )}
      </div>
      <p className="u-text-secondary-emphasis u-lh-lg u-m-0 u-flex-grow-1">
        {description}
      </p>
    </div>
  );

  return (
    <HomePageLayout>
      {/* Hero Section */}
      <Hero
        className="u-pt-52 u-pb-40"
        subtitle="Simplicity in motion"
        title="Build Amazing UIs with Atomix"
        text="A modern design system with 40+ components, comprehensive layouts, design tokens, and advanced effects. Built for React and vanilla JavaScript with accessibility and performance in mind. Trusted by developers worldwide for creating beautiful, responsive interfaces."
        alignment="center"
        backgroundSlider={heroSiderContent as any}
        // showOverlay={false}
        contentWidth="1100px"
        glass={{
          displacementScale: 190,
          blurAmount: 1.2,
          mode: "shader",
          cornerRadius: 24,
          enableLiquidBlur: true,
          padding: "1rem 2rem",
          saturation: 200,
          children: <></>,
          elasticity: 0,
        }}
        actions={
          <div className="u-d-flex u-flex-wrap u-justify-content-center u-gap-2">
            <Button
              glass={{ blurAmount: 0 }}
              variant="primary"
              icon={<Icon name="Rocket" />}
              href="/docs/getting-started/installation"
              linkComponent={Link}
            >
              Get Started
            </Button>
            <Button
              glass={{ blurAmount: 0 }}
              variant="outline-secondary"
              icon={<Icon name="Code" />}
              href="/docs/components"
              linkComponent={Link}
            >
              View Components
            </Button>
          </div>
        }
      />

      {/* Statistics Section */}
      <Block spacing="md" background="secondary" >
        <Container>
          <SectionIntro
            title="By the Numbers"
            text="Atomix provides a comprehensive set of tools and components"
            alignment="center"
            className="u-pt-0"
          />
          <Grid>
            {quickStats.map((stat, index) => (
              <GridCol key={index} sm={6} lg={3} className="u-mb-6">
                <Card
                  icon={<Icon name={stat.icon as any} />}
                  title={stat.value}
                  text={stat.label}
                  children={
                    <p className="u-text-secondary-emphasis u-fs-xs u-lh-relaxed u-m-0 u-flex-grow-1">
                      {stat.description}
                    </p>
                  }
                  row
                ></Card>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Block>

      {/* Features Section */}
      <Block spacing="md" >
        <Container>
          <SectionIntro
            title="Why Choose Atomix?"
            text="Everything you need to build modern, accessible web applications"
            alignment="center"
          />
          <Grid>
            {features.map((feature, index) => (
              <GridCol key={index} md={6} lg={4} className="u-mb-6">
                <Card className="u-h-100 u-d-flex u-flex-column">
                  <div className="u-d-inline-flex u-align-items-center u-justify-content-center u-rounded u-bg-primary-subtle u-text-primary u-mb-4 u-p-3">
                    {feature.icon}
                  </div>
                  <h3 className="u-fs-lg u-fw-600 u-mb-3 u-text-primary-emphasis">
                    {feature.title}
                  </h3>
                  <p className="u-text-secondary-emphasis u-lh-lg u-m-0 u-flex-grow-1">
                    {feature.description}
                  </p>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Block>

      {/* Philosophy Section */}
      <Block background="secondary" spacing="md" >
        <Container>
          <SectionIntro
            title="Our Design Philosophy"
            text="Thoughtful principles that guide our approach to creating exceptional user interfaces"
            alignment="center"
          />
          <Grid>
            {philosophies.map((philosophy, index) => (
              <GridCol key={index} md={6} lg={4} className="u-mb-6">
                <Card
                  row
                  icon={philosophy.icon}
                  title={philosophy.title}
                  text={philosophy.description}
                />
              </GridCol>
            ))}
          </Grid>
        </Container>
      </Block>

            {/* AtomixGlass: The New Era Section */}
            <Block 
        spacing="lg" 
         
        className="u-overflow-hidden"
        style={{ background: "var(--atomix-primary-gradient)" }}
      >
        <Container>
          <div className="u-position-relative">
            <AtomixGlass
              displacementScale={150}
              blurAmount={1.5}
              mode="shader"
              cornerRadius={32}
              enableLiquidBlur={true}
              padding="3rem 2rem"
              saturation={200}
              elasticity={0}
            >
              <div className="u-text-center">
                <div className="u-d-inline-flex u-align-items-center u-justify-content-center u-rounded u-bg-primary-subtle u-text-primary u-mb-4 u-p-3">
                  <Icon name="Sparkle" size={32} />
                </div>
                <h2 className="u-fs-2xl u-fw-700 u-mb-3 u-text-primary-emphasis">
                  AtomixGlass: The New Era of Design
                </h2>
                <p className="u-fs-lg u-text-secondary-emphasis u-lh-relaxed u-mb-4 u-max-w-2xl u-mx-auto">
                  Experience the future of interface design with hardware-accelerated glass morphism. 
                  Where beauty meets performance, and interaction becomes liquid.
                </p>
                <div className="u-d-flex u-flex-wrap u-justify-content-center u-gap-3 u-mt-5">
                  <Button
                    glass={{ blurAmount: 0 }}
                    variant="primary"
                    icon={<Icon name="Rocket" />}
                    href="/docs/components/atomix-glass"
                    linkComponent={Link}
                  >
                    Discover AtomixGlass
                  </Button>
                  <Button
                    glass={{ blurAmount: 0 }}
                    variant="outline-secondary"
                    icon={<Icon name="ArrowRight" />}
                    href="/docs/components/atomix-glass"
                    linkComponent={Link}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </AtomixGlass>
          </div>
        </Container>
      </Block>


      {/* Quick Links Section */}
      <Block spacing="md" >
        <Container>
          <SectionIntro
            title="Quick Start"
            text="Get up and running with Atomix in minutes"
            alignment="center"
          />
          <Grid>
            {quickLinks.map((link, index) => (
              <GridCol key={index} sm={6} lg={4} className="u-mb-6">
                <Card className="u-h-100 u-transition-all u-cursor-pointer u-hover-lift">
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="u-d-block u-link-none u-h-100"
                      aria-label={`${link.title} (opens in new tab)`}
                    >
                      <LinkContent
                        title={link.title}
                        description={link.description}
                        external={link.external}
                      />
                    </a>
                  ) : (
                    <Link
                      href={link.path}
                      className="u-d-block u-link-none u-h-100"
                      aria-label={link.title}
                    >
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
          </Grid>
        </Container>
      </Block>

      {/* Call-to-Action Section */}
      <Block
        background="secondary"
        spacing="md"
        className="u-overflow-hidden"
        
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <Container className="u-position-relative">
          <CallToActionSection
            title="Ready to get started?"
            text="Install Atomix in your React project and start building amazing user interfaces today."
            glass
            primaryAction={
              <AtomixGlass
                elasticity={0}
                blurAmount={0}
                displacementScale={0}
                mode="standard"
              >
                <div className="u-d-flex u-align-items-center u-justify-content-center u-px-5 u-py-3 u-bg-surface u-rounded u-border u-border-border">
                  <Icon
                    name="Terminal"
                    size={24}
                    className="u-me-2 u-text-primary-emphasis"
                  />
                  <code className="u-text-primary-emphasis u-fs-md u-fw-500">
                    npm install @shohojdhara/atomix
                  </code>
                </div>
              </AtomixGlass>
            }
            secondaryAction={
              <Button
                glass={{ blurAmount: 0, displacementScale: 0 }}
                variant="error"
                icon={<Icon name="ArrowRight" />}
              >
                <Link
                  href="/docs/getting-started/installation"
                  style={{ color: "inherit" }}
                >
                  View Installation Guide
                </Link>
              </Button>
            }
          />
        </Container>
      </Block>
    </HomePageLayout>
  );
}

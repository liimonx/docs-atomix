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
  Grid,
} from "@shohojdhara/atomix";
import CallToActionSection from "@/components/sections/CallToActionSection";

// Note: This page uses client components (HomePageLayout has interactive features)
// Metadata is handled in app/layout.tsx for the root page
export default function Page() {
  // Statistics data - Updated with more compelling metrics
  const quickStats = [
    {
      label: "Components",
      value: "50+",
      icon: "Stack" as const,
      color: "primary" as const,
      description: "Production-ready React & vanilla JS components",
    },
    {
      label: "Design Tokens",
      value: "300+",
      icon: "Palette" as const,
      color: "success" as const,
      description: "Comprehensive design system tokens",
    },
    {
      label: "Utility Classes",
      value: "600+",
      icon: "Code" as const,
      color: "info" as const,
      description: "Powerful CSS utility classes",
    },
    {
      label: "Chart Types",
      value: "20+",
      icon: "Sparkle" as const,
      color: "warning" as const,
      description: "Advanced data visualization charts",
    },
  ];

  // Features data - Enhanced with more compelling descriptions
  const features = [
    {
      icon: <Icon name="Lightning" />,
      title: "50+ Production Components",
      description:
        "A comprehensive library of battle-tested components, from essential UI elements to advanced data visualizations and cutting-edge AtomixGlass effects. Every component is optimized for performance and accessibility.",
    },
    {
      icon: <Icon name="Palette" />,
      title: "Complete Design System",
      description:
        "Built on a solid foundation of 300+ design tokens, ITCSS architecture, and a powerful responsive layout system. Create consistent, scalable interfaces with our grid and masonry layouts.",
    },
    {
      icon: <Icon name="Shield" />,
      title: "Accessibility Built-In",
      description:
        "WCAG 2.1 AA compliant by default. Every component includes full keyboard navigation, comprehensive screen reader support, and intelligent focus management out of the box.",
    },
    {
      icon: <Icon name="Code" />,
      title: "Framework Agnostic",
      description:
        "Choose your stack. Full React component library with TypeScript support, plus vanilla JavaScript implementations. Comprehensive documentation and examples for both approaches.",
    },
    {
      icon: <Icon name="Sparkle" />,
      title: "AtomixGlass Technology",
      description:
        "Revolutionary WebGL-powered glass morphism effects with multiple variants, hardware acceleration, and intelligent performance optimization. Create stunning interfaces that feel alive.",
    },
    {
      icon: <Icon name="Stack" />,
      title: "Flexible Theming",
      description:
        "Multiple built-in themes, CSS custom properties, and SCSS configuration options. Seamlessly integrate with your brand identity while maintaining design system consistency.",
    },
  ];

  // Philosophy data - Refreshed with more impactful messaging
  const philosophies = [
    {
      icon: <Icon name="Heart" />,
      title: "Design with Purpose",
      description:
        "Every pixel serves a purpose. Our design decisions are driven by clarity, consistency, and inclusivity. We believe exceptional interfaces should be accessible to everyone, regardless of ability.",
    },
    {
      icon: <Icon name="Lightning" />,
      title: "Performance by Design",
      description:
        "Speed isn't an afterthought—it's fundamental. We engineer lightweight solutions that deliver exceptional performance without compromising on functionality or visual quality.",
    },
    {
      icon: <Icon name="GitMerge" />,
      title: "Architecture That Scales",
      description:
        "Built on proven ITCSS methodology, our architecture grows with your project. From startup MVPs to enterprise applications, maintain predictable organization and structure.",
    },
    {
      icon: <Icon name="Globe" />,
      title: "Accessibility First",
      description:
        "Inclusivity is non-negotiable. Every component meets WCAG 2.1 AA standards with comprehensive keyboard navigation, screen reader optimization, and thoughtful focus management.",
    },
    {
      icon: <Icon name="Gear" />,
      title: "Developer Delight",
      description:
        "Thoughtful APIs, comprehensive documentation, and intuitive customization make development a joy. Spend less time configuring, more time building amazing experiences.",
    },
    {
      icon: <Icon name="ArrowsClockwise" />,
      title: "Built for Tomorrow",
      description:
        "Future-proof by design. Our forward-looking approach ensures compatibility with emerging technologies while maintaining rock-solid stability for production environments.",
    },
  ];

  // Enhanced hero slider with curated video selection
  const heroSiderContent = {
    slides: [
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2022/09/23/132253-752803366_large.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2025/11/07/314643_large.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2025/03/07/263086_large.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2021/01/25/62852-505080400_large.mp4",
      },
    ],
    autoplay: {
      delay: 1500,
      pauseOnHover: false,
    },
    loop: true,
    transition: "fade",
    transitionDuration: 1500,
  };

  // Quick links data - Enhanced with better descriptions and icons
  const quickLinks = [
    {
      title: "Getting Started",
      description: "Get up and running in 5 minutes with our comprehensive installation guide and quick start tutorial",
      path: "/docs/getting-started/installation",
      external: false,
      icon: "Rocket" as const,
    },
    {
      title: "Design Tokens",
      description: "Explore our complete design system foundation with colors, spacing, typography, and elevation",
      path: "/docs/design-tokens/colors",
      external: false,
      icon: "Palette" as const,
    },
    {
      title: "Components",
      description: "Browse 50+ production-ready components with React and vanilla JavaScript implementations",
      path: "/docs/components/overview",
      external: false,
      icon: "Stack" as const,
    },
    {
      title: "Layout System",
      description: "Master responsive layouts with our powerful grid system and masonry layouts",
      path: "/docs/layouts/grid",
      external: false,
      icon: "GridFour" as const,
    },
    {
      title: "AtomixGlass",
      description: "Discover next-generation WebGL-powered glass morphism effects and advanced visual effects",
      path: "/docs/components/atomix-glass",
      external: false,
      icon: "Sparkle" as const,
    }
  ];

  return (
    <HomePageLayout>
      {/* Hero Section - Enhanced */}
      <Hero
        className="u-pt-52 u-pb-40"
        subtitle="The Modern Design System"
        title="Build Exceptional Interfaces with Atomix"
        text="A comprehensive design system with 50+ production-ready components, 300+ design tokens, and revolutionary AtomixGlass effects. Built for React and vanilla JavaScript with accessibility and performance at its core. Trusted by developers worldwide to create beautiful, responsive, and accessible interfaces."
        alignment="center"
        backgroundSlider={heroSiderContent as any}
        contentWidth="1200px"
        glass={{
          displacementScale: 320,
          blurAmount: 10,
          mode: "shader",
          shaderVariant: 'premiumGlass',
          cornerRadius: 16,
          enableLiquidBlur: false,
          padding: "1.5rem 2.5rem",
          saturation: 250,
          children: <></>,
          elasticity: 0,
        }}
        actions={
          <div className="u-d-flex u-flex-wrap u-justify-content-center u-gap-3">
            <Button
              variant="primary"
              icon={<Icon name="Rocket" />}
              href="/docs/getting-started/installation"
              LinkComponent={Link}
            >
              Get Started
            </Button>
            <Button
              variant="outline-primary"
              icon={<Icon name="Code" />}
              href="/docs/components/overview"
              LinkComponent={Link}
            >
              Explore Components
            </Button>
          </div>
        }
      />

      {/* Statistics Section - Enhanced */}
      <Block >
          <SectionIntro
            title="By the Numbers"
            text="Everything you need to build world-class interfaces, all in one place"
            alignment="center"
            className="u-pt-0"
          />
          <Grid>
            {quickStats.map((stat, index) => (
              <GridCol key={index} sm={6} lg={3} className="u-mb-6">
                <Card title={stat.value} text={stat.label} icon={<Icon name={stat.icon as any} size={24} />} className="u-h-100" row> 
                </Card>
              </GridCol>
            ))}
          </Grid>
      </Block>

      {/* Features Section - Enhanced */}
      <Block >
          <SectionIntro
            title="Why Choose Atomix?"
            text="A complete design system that empowers you to build exceptional, accessible web applications faster"
            alignment="center"
          />
          <Grid>
            {features.map((feature, index) => (
              <GridCol key={index} md={6} lg={4} className="u-mb-6">
                <Card title={feature.title} text={feature.description} icon={feature.icon} className="u-h-100">
                </Card>
              </GridCol>
            ))}
          </Grid>
      </Block>

      {/* Philosophy Section - Enhanced */}
      <Block   >
          <SectionIntro
            title="Our Design Philosophy"
            text="The core principles that guide every decision we make, ensuring Atomix delivers exceptional value to developers and end users alike"
            alignment="center"
          />
          <Grid>
            {philosophies.map((philosophy, index) => (
              <GridCol key={index} md={6} lg={4} className="u-mb-6">
                <Card title={philosophy.title} text={philosophy.description} icon={philosophy.icon} className="u-h-100"></Card>
              </GridCol>
            ))}
          </Grid>
      </Block>

      {/* AtomixGlass: The New Era Section - Enhanced */}
      <Block
        className="u-overflow-hidden"
        style={{ background: "var(--atomix-primary-gradient)" }}
      >
            <AtomixGlass
              displacementScale={150}
              blurAmount={1.5}
              mode="shader"
              shaderVariant="premiumGlass"
              cornerRadius={32}
              enableLiquidBlur={true}
              padding="4rem 3rem"
              saturation={200}
              elasticity={0}
            >
              <div className="u-text-center">
                <div className="u-d-inline-flex u-align-items-center u-justify-content-center u-rounded-full u-bg-primary-subtle u-text-primary u-mb-5 u-p-4 u-transition-transform u-hover-scale-110">
                  <Icon name="Sparkle" size={40} />
                </div>
                <h2 className="u-fs-3xl u-fw-700 u-mb-4 u-text-primary-emphasis">
                  AtomixGlass: The Future of Interface Design
                </h2>
                <p className="u-fs-xl u-text-secondary-emphasis u-lh-relaxed u-mb-5 u-max-w-3xl u-mx-auto">
                  Experience the next generation of interface design with hardware-accelerated glass morphism effects.
                  Where stunning visuals meet exceptional performance, and every interaction feels fluid and responsive.
                </p>
                <div className="u-d-flex u-flex-wrap u-justify-content-center u-gap-3 u-mt-6">
                  <Button
                    glass={{ blurAmount: 0 }}
                    variant="primary"
                    icon={<Icon name="Rocket" />}
                    href="/docs/components/atomix-glass"
                  >
                    Discover AtomixGlass
                  </Button>
                  <Button
                    glass={{ blurAmount: 0 }}
                    variant="outline-secondary"
                    icon={<Icon name="BookOpen" />}
                    href="/docs/guides/atomix-glass-performance"
                    as = {Link}
                  >
                    Performance Guide
                  </Button>
                </div>
            </div>
          </AtomixGlass>
      </Block>


      {/* Quick Links Section - Enhanced */}
      <Block>
          <SectionIntro
            title="Quick Start"
            text="Everything you need to get started with Atomix, from installation to advanced customization"
            alignment="center"
          />
          <Grid>
            {quickLinks.map((link, index) => (
              <GridCol key={index} sm={6} lg={4} className="u-mb-6">
                <Card title={link.title} text={link.description} icon={<Icon name={link.icon as any} size={24} />} actions={<Icon name="Link" size={16} className="u-opacity-60" />} className="u-h-100" href={link.path} role="link"/>
              </GridCol>
            ))}
          </Grid>
      </Block>

      {/* Call-to-Action Section - Enhanced */}
      <Block
        background="secondary"
        className="u-overflow-hidden"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
          <CallToActionSection
            title="Ready to Build Something Amazing?"
            text="Join thousands of developers using Atomix to create beautiful, accessible, and performant interfaces. Get started in minutes with our comprehensive installation guide."
            glass
            primaryAction={
              <AtomixGlass
                elasticity={0}
                blurAmount={0}
                displacementScale={0}
                mode="standard"
              >
                <div className="u-d-flex u-align-items-center u-justify-content-center u-px-6 u-py-4 u-bg-surface u-rounded u-border u-border-border u-transition-all u-hover-border-primary">
                  <Icon
                    name="Terminal"
                    size={24}
                    className="u-me-3 u-text-primary-emphasis"
                  />
                  <code className="u-text-primary-emphasis u-fs-lg u-fw-500 u-font-monospace">
                    npm install @shohojdhara/atomix
                  </code>
                </div>
              </AtomixGlass>
            }
            secondaryAction={
              <Button
                glass={{ blurAmount: 0, displacementScale: 0 }}
                variant="primary"
                LinkComponent={Link}
                href="/docs/getting-started/installation"
                icon={<Icon name="BookOpen" />}
              >
                  View Installation Guide
              </Button>
            }
          />
      </Block>
    </HomePageLayout>
  );
}

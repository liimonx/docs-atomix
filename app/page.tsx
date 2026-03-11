"use client";

import { useRef } from "react";

import Link from "next/link";
import toast from "react-hot-toast";
import { HomePageLayout } from "@/components/layout/HomePageLayout";
import {
  Hero,
  Block,
  Card,
  Button,
  Icon,
  GridCol,
  SectionIntro,
  Grid,
  Input,
  Toggle,
  Avatar,
  Callout,
  Badge,
  Checkbox,
  Progress,
  Steps,
  Select,
} from "@shohojdhara/atomix";

import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { HeroHeadlineSlider } from "@/components/ui/HeroHeadlineSlider";
import styles from "./page.module.scss";

export default function Page() {
  const container = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  const copyInstallCommand = async () => {
    try {
      await navigator.clipboard.writeText("npm install @shohojdhara/atomix");
      toast.success("Install command copied to clipboard!", {
        duration: 3000,
        position: "bottom-right",
        style: {
          background: "var(--atomix-color-success-subtle)",
          color: "var(--atomix-color-success-emphasis)",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
    } catch (err) {
      toast.error("Failed to copy command. Please try again.", {
        duration: 4000,
        position: "bottom-right",
      });
    }
  };

  // Architecture pillars
  const architecturePillars = [
    {
      icon: "ProjectorScreenChart",
      title: "Design Tokens",
      description:
        "A robust theming engine that scales with your app. Define blur strengths, opacity levels, and noise textures as simple CSS variables.",
      color: "primary" as const,
    },
    {
      icon: "ShieldCheck",
      title: "Accessibility First",
      description:
        "Glassmorphism often fails WCAG standards. Atomix automatically adjusts text contrast based on the calculated background luminosity beneath the blur.",
      color: "primary" as const,
    },
    {
      icon: "Lightning",
      title: "High Performance",
      description:
        "Zero-runtime overhead. Our compiler extracts static glass styles to optimized CSS, preventing expensive browser repaints on scroll.",
      color: "success" as const,
    },
  ];

  // Trusted companies section removed - requires real testimonials

  return (
    <HomePageLayout>
      {/* Ambient Background Effects */}
      <AmbientBackground />

      {/* Hero sections */}
      <Hero title={<></>} contentWidth="90%">
        <Hero.Content className="u-w-100 u-mx-auto u-text-center u-flex u-flex-column u-items-center">
          <Badge label="v0.4.7 is now live" />

          {/* Headline Slider */}
          <HeroHeadlineSlider />

          {/* CTAs */}
          <Hero.Actions>
            <Button
              variant="outline-primary"
              size="lg"
              glass
              icon={<Icon name="ArrowRight" weight="duotone" />}
              iconPosition="end"
              className="u-h-14 u-rounded-lg u-shadow-primary-subtle u-fs-lg"
              href="/docs/getting-started/installation"
              LinkComponent={Link}
            >
              Start Building
            </Button>
            <Button
              variant="outline-error"
              size="lg"
              icon={<Icon name="TerminalWindow" weight="duotone" />}
              className="u-h-14 u-rounded-lg u-fs-lg"
              onClick={copyInstallCommand}
              glass
            >
              npm install @shohojdhara/atomix
            </Button>
          </Hero.Actions>
        </Hero.Content>

        {/* Hero Visual / Interactive Playground Mockup */}
        <div
          ref={container}
          className={`${styles.heroVisualContainer} o-container-xl`}
        >
          {/* Background glow for the mockup */}
          <div ref={glow} className={styles.heroVisualMockupGlow} />

          <div className={styles.mockupWrapper}>
            <Card
              className="u-relative u-p-1 u-p-md-2 u-overflow-hidden u-rounded-3xl u-shadow-2xl"
              glass
              appearance="ghost"
            >
              {/* Fake Browser Header */}
              <div className="u-flex u-items-center u-gap-3 u-px-6 u-py-4 u-border-b">
                <div className="u-flex u-gap-2">
                  <div className="u-w-3 u-h-3 u-rounded-circle u-bg-error u-opacity-80"></div>
                  <div className="u-w-3 u-h-3 u-rounded-circle u-bg-warning u-opacity-80"></div>
                  <div className="u-w-3 u-h-3 u-rounded-circle u-bg-success u-opacity-80"></div>
                </div>
                <div className="u-mx-auto u-px-5 u-py-1-5 u-rounded-full u-fs-xs u-text-secondary-emphasis u-font-mono u-border">
                  atomix-dashboard.tsx
                </div>
                <div className="u-flex u-gap-2">
                  <div className="u-w-4 u-h-4 u-rounded-sm"></div>
                  <div className="u-w-4 u-h-4 u-rounded-sm"></div>
                </div>
              </div>

              {/* Layout Content */}
              <Grid className="u-p-6">
                {/* Sidebar */}
                <GridCol md={3} className={styles.sidebarColumn}>
                  <div className="u-h-10 u-w-100 u-bg-primary u-opacity-20 u-rounded-lg u-animate-pulse"></div>
                  <div className="u-flex u-flex-column u-gap-4 u-mt-2">
                    <div className="u-flex u-items-center u-gap-3">
                      <div className="u-w-6 u-h-6 u-rounded-md"></div>
                      <div className="u-h-3 u-w-60 u-rounded u-opacity-50"></div>
                    </div>
                    <div className="u-flex u-items-center u-gap-3">
                      <div className="u-w-6 u-h-6 u-rounded-md"></div>
                      <div className="u-h-3 u-w-40 u-rounded u-opacity-50"></div>
                    </div>
                    <div className="u-flex u-items-center u-gap-3">
                      <div className="u-w-6 u-h-6 u-rounded-md"></div>
                      <div className="u-h-3 u-w-75 u-rounded u-opacity-50"></div>
                    </div>
                  </div>
                  <div className="u-mt-auto u-p-4 u-rounded-xl u-bg-primary-subtle u-border u-border-primary-subtle">
                    <div className="u-h-3 u-w-100 u-bg-primary u-opacity-20 u-rounded u-mb-2"></div>
                    <div className="u-h-2 u-w-75 u-bg-primary u-opacity-20 u-rounded"></div>
                  </div>
                </GridCol>

                {/* Main Content */}
                <GridCol
                  md={9}
                  className="u-flex u-flex-column u-gap-8 u-ps-md-8"
                >
                  {/* Stats Row */}
                  <Grid>
                    <GridCol sm={4} className="u-mb-4 u-mb-sm-0">
                      <div className="u-glass-panel u-p-6 u-rounded-2xl u-hover-bg-surface-subtle u-transition-all u-text-start u-border">
                        <div className="u-flex u-justify-between u-items-start u-mb-4">
                          <div className="u-p-2-5 u-bg-primary-subtle u-text-primary u-rounded-xl u-shadow-sm">
                            <Icon name="Pulse" size={20} weight="duotone" />
                          </div>
                          <span className="u-fs-xs u-text-success u-font-bold u-bg-success-subtle u-px-2 u-py-0-5 u-rounded-full">
                            +12%
                          </span>
                        </div>
                        <h3 className="u-fs-2xl u-font-bold u-text-primary-emphasis u-mb-1">
                          24.5k
                        </h3>
                        <p className="u-fs-sm u-text-secondary-emphasis u-font-medium">
                          Total Visits
                        </p>
                      </div>
                    </GridCol>
                    <GridCol sm={4} className="u-mb-4 u-mb-sm-0">
                      <div className="u-glass-panel u-p-6 u-rounded-2xl u-hover-bg-surface-subtle u-transition-all u-text-start u-border">
                        <div className="u-flex u-justify-between u-items-start u-mb-4">
                          <div className="u-p-2-5 u-bg-primary-subtle u-text-primary u-rounded-xl u-shadow-sm">
                            <Icon name="Users" size={20} weight="duotone" />
                          </div>
                          <span className="u-fs-xs u-text-success u-font-bold u-bg-success-subtle u-px-2 u-py-0-5 u-rounded-full">
                            +5%
                          </span>
                        </div>
                        <h3 className="u-fs-2xl u-font-bold u-text-primary-emphasis u-mb-1">
                          1,204
                        </h3>
                        <p className="u-fs-sm u-text-secondary-emphasis u-font-medium">
                          Active Users
                        </p>
                      </div>
                    </GridCol>
                    <GridCol sm={4}>
                      <div className="u-glass-panel u-p-6 u-rounded-2xl u-hover-bg-surface-subtle u-transition-all u-text-start u-border">
                        <div className="u-flex u-justify-between u-items-start u-mb-4">
                          <div className="u-p-2-5 u-bg-success-subtle u-text-success u-rounded-xl u-shadow-sm">
                            <Icon
                              name="CurrencyDollar"
                              size={20}
                              weight="duotone"
                            />
                          </div>
                          <span className="u-fs-xs u-text-success u-font-bold u-bg-success-subtle u-px-2 u-py-0-5 u-rounded-full">
                            +18%
                          </span>
                        </div>
                        <h3 className="u-fs-2xl u-font-bold u-text-primary-emphasis u-mb-1">
                          $89k
                        </h3>
                        <p className="u-fs-sm u-text-secondary-emphasis u-font-medium">
                          Revenue
                        </p>
                      </div>
                    </GridCol>
                  </Grid>

                  {/* Chart Area Placeholder */}
                  <div
                    className={`u-glass-panel u-p-8 u-rounded-2xl u-h-72 u-flex u-items-end u-justify-between u-gap-3 u-relative u-overflow-hidden u-border  ${styles.chartAreaPlaceholder}`}
                  >
                    {[45, 65, 35, 90, 55, 80, 50, 70, 40, 60, 85, 45].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="u-w-100 u-bg-primary u-opacity-30 u-rounded-t-lg u-transition-all u-hover-opacity-60 u-cursor-pointer"
                          style={{ height: `${h}%` }}
                        ></div>
                      ),
                    )}
                    <div className="u-absolute u-top-6 u-start-6 u-flex u-items-center u-gap-2">
                      <div className="u-w-3 u-h-3 u-rounded-circle u-bg-primary"></div>
                      <span className="u-fs-xs u-font-bold u-text-secondary-emphasis">
                        Network Traffic (Normalized)
                      </span>
                    </div>
                  </div>
                </GridCol>
              </Grid>
            </Card>
          </div>
        </div>
      </Hero>

      {/* Architecture Section */}
      <Block>
        <SectionIntro
          title="The Architecture of Glass"
          text="Our system relies on three fundamental pillars to ensure your application is beautiful, accessible, and fast—without compromising on the glass aesthetic."
          alignment="center"
        />
        <Grid>
          {architecturePillars.map((pillar, index) => (
            <GridCol key={index} md={4} className="u-mb-8">
              <Card
                title={pillar.title}
                text={pillar.description}
                icon={
                  <Icon
                    name={
                      pillar.icon as
                        | "ProjectorScreenChart"
                        | "ShieldCheck"
                        | "Lightning"
                    }
                    weight="duotone"
                  />
                }
                className="u-h-100 u-rounded-2xl u-shadow-lg u-transition-transform u-hover-translate-y-n2"
                variant={pillar.color as "primary" | "success"}
                hoverable
              />
            </GridCol>
          ))}
        </Grid>
      </Block>

      {/* Use Cases Section */}
      <Block>
        <SectionIntro
          title="Built for Modern Applications"
          text="Atomix is versatile enough to build any type of application with a premium glassmorphic aesthetic."
          alignment="center"
        />
        <Grid>
          <GridCol md={6} lg={3} className="u-mb-8">
            <Card>
              <div className="u-w-12 u-h-12 u-bg-primary-subtle u-text-primary u-rounded-xl u-flex u-items-center u-justify-center u-mb-4">
                <Icon name="ChartPieSlice" weight="duotone" size={24} />
              </div>
              <h4 className="u-fs-lg u-font-bold u-mb-2">Dashboards</h4>
              <p className="u-fs-sm u-text-secondary-emphasis">
                Build analytics dashboards with data visualizations, real-time
                metrics, and interactive controls.
              </p>
            </Card>
          </GridCol>
          <GridCol md={6} lg={3} className="u-mb-8">
            <Card>
              <div className="u-w-12 u-h-12 u-bg-success-subtle u-text-success u-rounded-xl u-flex u-items-center u-justify-center u-mb-4">
                <Icon name="Storefront" weight="duotone" size={24} />
              </div>
              <h4 className="u-fs-lg u-font-bold u-mb-2">E-Commerce</h4>
              <p className="u-fs-sm u-text-secondary-emphasis">
                Create stunning product catalogs, shopping carts, and checkout
                flows that convert.
              </p>
            </Card>
          </GridCol>
          <GridCol md={6} lg={3} className="u-mb-8">
            <Card>
              <div className="u-w-12 u-h-12 u-bg-error-subtle u-text-error u-rounded-xl u-flex u-items-center u-justify-center u-mb-4">
                <Icon name="Briefcase" weight="duotone" size={24} />
              </div>
              <h4 className="u-fs-lg u-font-bold u-mb-2">SaaS Platforms</h4>
              <p className="u-fs-sm u-text-secondary-emphasis">
                Develop productivity tools, CRMs, and collaboration software
                with professional UI patterns.
              </p>
            </Card>
          </GridCol>
          <GridCol md={6} lg={3} className="u-mb-8">
            <Card>
              <div className="u-w-12 u-h-12 u-bg-warning-subtle u-text-warning u-rounded-xl u-flex u-items-center u-justify-center u-mb-4">
                <Icon name="PaintBrush" weight="duotone" size={24} />
              </div>
              <h4 className="u-fs-lg u-font-bold u-mb-2">Portfolios</h4>
              <p className="u-fs-sm u-text-secondary-emphasis">
                Showcase creative work with immersive, visually striking
                portfolio sites and landing pages.
              </p>
            </Card>
          </GridCol>
        </Grid>
      </Block>

      {/* Interactive Components Section */}
      <Block>
        <div className="u-flex u-flex-column u-flex-md-row u-justify-between u-items-md-end u-mb-16 u-gap-6">
          <div className="u-max-w-2xl">
            <h2 className="u-fs-5xl u-font-black u-mb-4 u-tracking-tighter">
              Interactive & Polished
            </h2>
            <p className="u-fs-xl u-text-secondary-emphasis u-leading-relaxed">
              Pre-built, accessible React components ready for production.
              Designed with cinematic depth to look stunning on any background.
            </p>
          </div>
          <Link
            href="/docs/components/overview"
            className="u-text-primary u-flex u-items-center u-gap-2 u-font-bold u-hover-text-primary-emphasis u-transition-all u-fs-lg"
          >
            View all 80+ components <Icon name="ArrowRight" size={20} />
          </Link>
        </div>

        {/* Bento Grid for Interactive Components */}
        <Grid>
          {/* Left Column: Auth & Status */}
          <GridCol lg={4} md={6} className="u-mb-8">
            <div className="u-flex u-flex-column u-gap-6 u-h-100">
              {/* Component 1: Advanced Auth Card */}
              <div className="">
                <div className={styles.authCardGradientBg}></div>

                <Card>
                  <div className="u-text-center u-mb-6">
                    <div className="u-w-12 u-h-12 u-bg-primary-subtle u-text-primary u-rounded-xl u-flex u-items-center u-justify-center u-mx-auto u-mb-3 u-shadow-sm">
                      <Icon name="LockKey" size={28} weight="duotone" />
                    </div>
                    <h4 className="u-fs-2xl u-font-black u-tracking-tight">
                      Secure Access
                    </h4>
                    <p className="u-fs-sm u-text-secondary-emphasis u-mt-1 u-opacity-70">
                      Welcome back to the dashboard
                    </p>
                  </div>

                  <div className="u-flex u-flex-column u-gap-5">
                    <div className="u-flex u-flex-column u-gap-1-5">
                      <Input
                        placeholder="name@company.com"
                        type="text"
                        size="md"
                      />
                    </div>
                    <div className="u-flex u-flex-column u-gap-1-5">
                      <Input type="password" placeholder="••••••••" size="md" />
                    </div>

                    <div className="u-flex u-justify-between u-items-center">
                      <Checkbox
                        label="Remember device"
                        checked={true}
                        onChange={() => {}}
                      />
                      <Link
                        href="#"
                        className="u-fs-xs u-text-primary u-font-bold u-hover-underline"
                      >
                        Forgot?
                      </Link>
                    </div>

                    <Button
                      variant="primary"
                      fullWidth
                      size="lg"
                      className="u-h-12 u-font-bold u-rounded-xl u-shadow-primary-glow"
                    >
                      Authorize Session
                    </Button>

                    <div className="u-relative u-flex u-items-center u-justify-center u-my-2">
                      <div className="u-absolute u-w-100 u-h-px u-bg-border u-opacity-30"></div>
                      <span className="u-relative u-bg-white u-px-3 u-fs-xs u-text-secondary-emphasis u-font-bold u-uppercase u-tracking-widest u-opacity-50">
                        or
                      </span>
                    </div>

                    <div className="u-flex u-gap-3">
                      <Button
                        variant="secondary"
                        fullWidth
                        size="md"
                        icon={<Icon name="GithubLogo" weight="duotone" />}
                        glass
                      />
                      <Button
                        variant="secondary"
                        fullWidth
                        size="md"
                        icon={<Icon name="GoogleLogo" weight="duotone" />}
                        glass
                      />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Component 1.5: Environment Status Card */}
              <Card className="u-p-6 u-rounded-3xl u-shadow-lg u-border u-flex-1">
                <div className="u-flex u-justify-between u-items-center u-mb-4">
                  <h5 className="u-fs-sm u-font-black u-uppercase u-tracking-widest u-opacity-50">
                    System Health
                  </h5>
                  <Badge label="Operational" variant="success" size="sm" />
                </div>

                <div className="u-flex u-flex-column u-gap-4">
                  <div className="u-flex u-items-center u-justify-between">
                    <div className="u-flex u-items-center u-gap-3">
                      <div className="u-w-8 u-h-8 u-rounded-lg u-bg-primary-subtle u-text-primary u-flex u-items-center u-justify-center">
                        <Icon name="Globe" weight="duotone" />
                      </div>
                      <div>
                        <div className="u-fs-xs u-font-bold">Edge Nodes</div>
                        <div className="u-fs-xxs u-text-secondary-emphasis">
                          24 active regions
                        </div>
                      </div>
                    </div>
                    <span className="u-fs-xs u-font-mono u-text-success">
                      99.9%
                    </span>
                  </div>

                  <div className="u-flex u-items-center u-justify-between">
                    <div className="u-flex u-items-center u-gap-3">
                      <div className="u-w-8 u-h-8 u-rounded-lg u-bg-secondary-subtle u-text-secondary-emphasis u-flex u-items-center u-justify-center">
                        <Icon name="Pulse" weight="duotone" />
                      </div>
                      <div>
                        <div className="u-fs-xs u-font-bold">Latency</div>
                        <div className="u-fs-xxs u-text-secondary-emphasis">
                          Global average
                        </div>
                      </div>
                    </div>
                    <span className="u-fs-xs u-font-mono u-text-primary">
                      12ms
                    </span>
                  </div>

                  <div className="u-mt-2">
                    <Progress value={92} variant="primary" size="sm" />
                    <div className="u-flex u-justify-between u-mt-1">
                      <span className="u-fs-xxs u-text-secondary-emphasis">
                        Resource Usage
                      </span>
                      <span className="u-fs-xxs u-font-bold">92%</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </GridCol>

          {/* Right Column components - Bento Layout */}
          <GridCol lg={8} md={6}>
            <Grid>
              {/* Component 2: Project Management / Analytics */}
              <GridCol sm={12} className="u-mb-6">
                <Card className="u-shadow-lg u-border u-relative u-overflow-hidden">
                  <div className="u-flex u-flex-column u-flex-md-row u-justify-between u-items-start u-gap-6 u-mb-8">
                    <div>
                      <div className="u-flex u-items-center u-gap-3 u-mb-2">
                        <Badge
                          label="Active Project"
                          variant="success"
                          glass
                          size="sm"
                        />
                        <span className="u-fs-xs u-text-secondary-emphasis u-font-mono u-opacity-60">
                          ID: ATX-2024
                        </span>
                      </div>
                      <h4 className="u-fs-2xl u-font-black u-tracking-tight">
                        Atmospheric Dashboard
                      </h4>
                    </div>

                    <div className="u-flex u-items-center u-gap-n3 u-ps-2">
                      <Avatar
                        src="https://i.pravatar.cc/150?u=1"
                        size="md"
                        className="u-border-2 u-border-white"
                      />
                      <Avatar
                        src="https://i.pravatar.cc/150?u=2"
                        size="md"
                        className="u-border-2 u-border-white"
                      />
                      <Avatar
                        src="https://i.pravatar.cc/150?u=3"
                        size="md"
                        className="u-border-2 u-border-white"
                      />
                      <div className="u-w-10 u-h-10 u-rounded-circle u-flex u-items-center u-justify-center u-fs-xs u-font-bold u-border-2 u-border-white">
                        +5
                      </div>
                    </div>
                  </div>

                  <div className="u-flex u-flex-column u-gap-8">
                    <div className="u-flex u-flex-column u-gap-3">
                      <div className="u-flex u-justify-between u-items-end">
                        <span className="u-fs-sm u-font-bold u-text-secondary-emphasis">
                          Development Progress
                        </span>
                        <span className="u-fs-lg u-font-black u-text-primary">
                          78%
                        </span>
                      </div>
                      <Progress
                        value={78}
                        variant="primary"
                        size="md"
                        className="u-rounded-full"
                      />
                    </div>

                    <Steps
                      items={[
                        { number: 1, text: "Discovery" },
                        { number: 2, text: "Design" },
                        { number: 3, text: "Building" },
                      ]}
                      activeIndex={2}
                    />
                  </div>
                </Card>
              </GridCol>

              {/* Component 3: Data Entry / Select Preview */}
              <GridCol sm={6} className="u-mb-6 u-mb-sm-0">
                <Card>
                  <h5 className="u-fs-lg u-font-black u-tracking-tight u-mb-6">
                    Data Architecture
                  </h5>

                  <div className="u-flex u-flex-column u-gap-5">
                    <div className="u-flex u-flex-column u-gap-1-5">
                      <label className="u-fs-xs u-text-secondary-emphasis u-uppercase u-font-black u-tracking-widest u-opacity-50 u-mb-2">
                        Storage Region
                      </label>
                      <Select
                        options={[
                          {
                            label: "US East (N. Virginia)",
                            value: "us-east-1",
                          },
                          {
                            label: "Europe (Frankfurt)",
                            value: "eu-central-1",
                          },
                        ]}
                        value="eu-central-1"
                      />
                    </div>

                    <div className="u-flex u-flex-column u-gap-1-5">
                      <label className="u-fs-xs u-text-secondary-emphasis u-uppercase u-font-black u-tracking-widest u-opacity-50">
                        API Throughput
                      </label>
                      <Progress value={65} variant="primary" size="sm" />
                      <div className="u-flex u-justify-between u-fs-xs u-text-secondary-emphasis u-font-mono u-opacity-60">
                        <span>Low</span>
                        <span>Balanced</span>
                        <span>High</span>
                      </div>
                    </div>

                    <div className="u-flex u-justify-between u-items-center u-pt-2">
                      <div className="u-flex u-items-center u-gap-3">
                        <div className="u-p-2 u-text-secondary-emphasis u-rounded-lg">
                          <Icon name="Monitor" size={18} weight="duotone" />
                        </div>
                        <span className="u-fs-sm u-font-bold">
                          Real-time Sync
                        </span>
                      </div>
                      <Toggle checked={true} onChange={() => {}} />
                    </div>
                  </div>
                </Card>
              </GridCol>

              {/* Component 4: System Alerts / Dynamic Items */}
              <GridCol sm={6}>
                <div className="u-flex u-flex-column u-gap-4 u-h-100">
                  <Callout
                    variant="info"
                    title="Optimization Required"
                    icon={<Icon name="Info" weight="duotone" size={20} />}
                    className="u-rounded-2xl u-shadow-lg u-flex-1"
                  >
                    <p className="u-fs-sm u-opacity-80">
                      Background blur rendering can be optimized by adjusting
                      the noise texture scale.
                    </p>
                  </Callout>

                  <Card className="u-p-5 u-rounded-2xl u-shadow-lg u-border">
                    <div className="u-flex u-items-center u-justify-between u-mb-3">
                      <div className="u-flex u-items-center u-gap-3">
                        <div className="u-w-2 u-h-2 u-rounded-circle u-bg-success u-animate-pulse"></div>
                        <span className="u-fs-xs u-font-bold u-uppercase u-tracking-wider">
                          Network Status
                        </span>
                      </div>
                      <Badge
                        label="Operational"
                        variant="success"
                        size="sm"
                        className="u-fs-xxs"
                      />
                    </div>
                    <div className="u-flex u-gap-1 u-items-end u-h-10">
                      {[
                        30, 45, 25, 60, 80, 40, 55, 30, 90, 40, 20, 50, 65, 35,
                      ].map((h, i) => (
                        <div
                          key={i}
                          className="u-flex-1 u-bg-primary u-opacity-30 u-rounded-t"
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </Card>

                  <Button
                    variant="primary"
                    fullWidth
                    icon={<Icon name="RocketLaunch" weight="duotone" />}
                    className="u-h-12 u-font-bold"
                  >
                    Deploy Dashboard
                  </Button>
                </div>
              </GridCol>
            </Grid>
          </GridCol>
        </Grid>
      </Block>

      {/* Features at a Glance */}
      <Block>
        <SectionIntro
          title="Everything You Need"
          text="From form controls to complex data displays, Atomix provides all the building blocks for modern glassmorphic applications."
          alignment="center"
        />
        <Grid>
          <GridCol md={4} className="u-mb-8">
            <Card className="u-text-center u-h-100">
              <div className="u-w-14 u-h-14 u-bg-primary-subtle u-text-primary u-rounded-2xl u-flex u-items-center u-justify-center u-mx-auto u-mb-6 u-shadow-lg">
                <Icon name="ToggleLeft" weight="duotone" size={28} />
              </div>
              <h4 className="u-fs-xl u-font-bold u-mb-3">Form Controls</h4>
              <p className="u-fs-sm u-text-secondary-emphasis">
                Inputs, selects, toggles, checkboxes, and radios with built-in
                validation states and accessibility.
              </p>
            </Card>
          </GridCol>
          <GridCol md={4} className="u-mb-8">
            <Card className="u-text-center u-h-100">
              <div className="u-w-14 u-h-14 u-bg-success-subtle u-text-success u-rounded-2xl u-flex u-items-center u-justify-center u-mx-auto u-mb-6 u-shadow-lg">
                <Icon name="ChartLineUp" weight="duotone" size={28} />
              </div>
              <h4 className="u-fs-xl u-font-bold u-mb-3">Data Display</h4>
              <p className="u-fs-sm u-text-secondary-emphasis">
                Tables, charts, progress bars, and statistics components for
                visualizing complex data.
              </p>
            </Card>
          </GridCol>
          <GridCol md={4} className="u-mb-8">
            <Card className="u-text-center u-h-100">
              <div className="u-w-14 u-h-14 u-bg-error-subtle u-text-error u-rounded-2xl u-flex u-items-center u-justify-center u-mx-auto u-mb-6 u-shadow-lg">
                <Icon name="Compass" weight="duotone" size={28} />
              </div>
              <h4 className="u-fs-xl u-font-bold u-mb-3">Navigation</h4>
              <p className="u-fs-sm u-text-secondary-emphasis">
                Sidebars, tabs, breadcrumbs, and pagination components for
                intuitive user flows.
              </p>
            </Card>
          </GridCol>
          <GridCol md={4} className="u-mb-8">
            <Card className="u-text-center u-h-100">
              <div className="u-w-14 u-h-14 u-bg-warning-subtle u-text-warning u-rounded-2xl u-flex u-items-center u-justify-center u-mx-auto u-mb-6 u-shadow-lg">
                <Icon name="Bell" weight="duotone" size={28} />
              </div>
              <h4 className="u-fs-xl u-font-bold u-mb-3">Feedback</h4>
              <p className="u-fs-sm u-text-secondary-emphasis">
                Toast notifications, alerts, modals, and dialogs for engaging
                user communication.
              </p>
            </Card>
          </GridCol>
          <GridCol md={4} className="u-mb-8">
            <Card className="u-text-center u-h-100">
              <div className="u-w-14 u-h-14 u-bg-info-subtle u-text-info u-rounded-2xl u-flex u-items-center u-justify-center u-mx-auto u-mb-6 u-shadow-lg">
                <Icon name="Users" weight="duotone" size={28} />
              </div>
              <h4 className="u-fs-xl u-font-bold u-mb-3">Social</h4>
              <p className="u-fs-sm u-text-secondary-emphasis">
                Avatars, badges, and user profile components for personalization
                and social features.
              </p>
            </Card>
          </GridCol>
          <GridCol md={4} className="u-mb-8">
            <Card className="u-text-center u-h-100">
              <div className="u-w-14 u-h-14 u-bg-primary-subtle u-text-primary u-rounded-2xl u-flex u-items-center u-justify-center u-mx-auto u-mb-6 u-shadow-lg">
                <Icon name="Layout" weight="duotone" size={28} />
              </div>
              <h4 className="u-fs-xl u-font-bold u-mb-3">Layout</h4>
              <p className="u-fs-sm u-text-secondary-emphasis">
                Grids, containers, and responsive utilities for flexible,
                adaptive designs.
              </p>
            </Card>
          </GridCol>
        </Grid>
      </Block>

      {/* Why Choose Atomix */}
      <Block>
        <Grid>
          <GridCol md={6} className="u-order-2 u-order-md-1">
            <Badge label="Platform Advantages" variant="primary" />
            <h2 className="u-fs-4xl u-fs-md-5xl u-font-black u-mb-6 u-tracking-tighter u-leading-tight">
              Why Choose Atomix?
            </h2>
            <p className="u-fs-xl u-text-secondary-emphasis u-mb-8 u-leading-relaxed">
              Unlike other component libraries, Atomix is specifically designed
              for the modern glassmorphic aesthetic while maintaining
              accessibility and performance.
            </p>

            <div className="u-flex u-flex-column u-gap-5">
              <Card glass variant="light">
                <div className="u-flex u-gap-5 u-items-start">
                  <div className="u-w-12 u-h-12 u-bg-primary u-text-white u-rounded-xl u-flex u-items-center u-justify-center u-flex-shrink-0 u-shadow-primary-glow">
                    <Icon name="MagicWand" weight="duotone" size={24} />
                  </div>
                  <div>
                    <h4 className="u-fs-lg u-font-black u-mb-2">
                      Glassmorphism Native
                    </h4>
                    <p className="u-fs-sm u-text-secondary-emphasis u-leading-relaxed u-mb-0">
                      Every component is built with glass effects in mind. No
                      awkward overlays or CSS hacks needed.
                    </p>
                  </div>
                </div>
              </Card>
              <Card glass variant="success">
                <div className="u-flex u-gap-5 u-items-start">
                  <div className="u-w-12 u-h-12 u-bg-success u-text-white u-rounded-xl u-flex u-items-center u-justify-center u-flex-shrink-0 u-shadow-success-glow">
                    <Icon name="Eye" weight="duotone" size={24} />
                  </div>
                  <div>
                    <h4 className="u-fs-lg u-font-black u-mb-2">
                      Accessibility Baked In
                    </h4>
                    <p className="u-fs-sm u-text-secondary-emphasis u-leading-relaxed u-mb-0">
                      Automatic contrast calculation guarantees WCAG compliance,
                      even atop blurred backgrounds.
                    </p>
                  </div>
                </div>
              </Card>
              <Card glass variant="error">
                <div className="u-flex u-gap-5 u-items-start">
                  <div className="u-w-12 u-h-12 u-bg-error u-text-white u-rounded-xl u-flex u-items-center u-justify-center u-flex-shrink-0 u-shadow-error-glow">
                    <Icon name="Gauge" weight="duotone" size={24} />
                  </div>
                  <div>
                    <h4 className="u-fs-lg u-font-black u-mb-2">
                      Zero Runtime Overhead
                    </h4>
                    <p className="u-fs-sm u-text-secondary-emphasis u-leading-relaxed u-mb-0">
                      Styles are compiled to static CSS via our plugin. No
                      expensive browser repaints or JS injections.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </GridCol>
          <GridCol md={6} className="u-order-1 u-order-md-2 u-mb-10 u-mb-md-0">
            <Grid className="u-mt-44">
              <GridCol sm={6}>
                <Card glass variant="primary">
                  <div className="u-fs-5xl u-font-black u-text-primary u-mb-3 u-tracking-tighter">
                    80+
                  </div>
                  <div className="u-fs-xs u-text-secondary-emphasis u-uppercase u-font-bold u-tracking-widest">
                    Components
                  </div>
                </Card>
              </GridCol>
              <GridCol sm={6}>
                <Card glass variant="success">
                  <div className="u-fs-5xl u-font-black u-text-success u-mb-3 u-tracking-tighter">
                    0KB
                  </div>
                  <div className="u-fs-xs u-text-secondary-emphasis u-uppercase u-font-bold u-tracking-widest">
                    Runtime
                  </div>
                </Card>
              </GridCol>
              <GridCol sm={6} className="u-mt-4">
                <Card glass variant="error">
                  <div className="u-fs-5xl u-font-black u-text-error u-mb-3 u-tracking-tighter">
                    100%
                  </div>
                  <div className="u-fs-xs u-text-secondary-emphasis u-uppercase u-font-bold u-tracking-widest">
                    Accessible
                  </div>
                </Card>
              </GridCol>
              <GridCol sm={6} className="u-mt-4">
                <Card glass variant="warning">
                  <div className="u-fs-5xl u-font-black u-text-warning u-mb-3 u-tracking-tighter">
                    50+
                  </div>
                  <div className="u-fs-xs u-text-secondary-emphasis u-uppercase u-font-bold u-tracking-widest">
                    Design Tokens
                  </div>
                </Card>
              </GridCol>
            </Grid>
          </GridCol>
        </Grid>
      </Block>

      {/* Developer Experience */}
      <Block>
        <Grid className="u-items-center">
          <GridCol md={6} lg={5} className="u-mb-10 u-mb-md-0">
            <div className="u-relative u-pe-md-8">
              <div className="u-absolute u-inset-0 u-bg-primary-subtle u-opacity-30 u-blur-3xl u-rounded-circle u-z-0"></div>

              <div className="u-bg-dark u-rounded-3xl u-overflow-hidden u-shadow-2xl u-border u-border-secondary-subtle u-relative u-z-1">
                <div className="u-flex u-items-center u-gap-3 u-px-5 u-py-4 u-bg-dark-subtle u-border-b u-border-secondary-subtle">
                  <div className="u-flex u-gap-2">
                    <div className="u-w-3 u-h-3 u-rounded-circle u-bg-error"></div>
                    <div className="u-w-3 u-h-3 u-rounded-circle u-bg-warning"></div>
                    <div className="u-w-3 u-h-3 u-rounded-circle u-bg-success"></div>
                  </div>
                  <div className="u-mx-auto u-fs-xs u-font-mono u-text-secondary-emphasis u-opacity-70">
                    page.tsx
                  </div>
                </div>
                <div className="u-p-6 u-font-mono u-fs-sm u-lh-xl">
                  <div className="u-mb-4">
                    <span className="u-text-primary">import</span> {"{"} Button,
                    Card, Input {"}"}{" "}
                    <span className="u-text-primary">from</span>{" "}
                    <span className="u-text-warning">
                      '@shohojdhara/atomix'
                    </span>
                    ;
                  </div>
                  <div className="u-mb-4">
                    <span className="u-text-secondary-emphasis">
                      {"// Create a premium glass card instantly"}
                    </span>
                  </div>
                  <div className="u-mb-1">
                    <span className="u-text-info">&lt;Card</span>{" "}
                    <span className="u-text-error">glass</span>{" "}
                    <span className="u-text-error">appearance</span>=
                    <span className="u-text-warning">"ghost"</span>
                    <span className="u-text-info">&gt;</span>
                  </div>
                  <div className="u-ps-4 u-mb-1">
                    <span className="u-text-info">&lt;Input</span>{" "}
                    <span className="u-text-error">placeholder</span>=
                    <span className="u-text-warning">"Email"</span>{" "}
                    <span className="u-text-info">/&gt;</span>
                  </div>
                  <div className="u-ps-4 u-mb-1">
                    <span className="u-text-info">&lt;Button</span>{" "}
                    <span className="u-text-error">variant</span>=
                    <span className="u-text-warning">"primary"</span>
                    <span className="u-text-info">&gt;</span>
                  </div>
                  <div className="u-ps-8 u-text-white u-opacity-90">
                    Submit Credentials
                  </div>
                  <div className="u-ps-4 u-mb-1">
                    <span className="u-text-info">&lt;/Button&gt;</span>
                  </div>
                  <div>
                    <span className="u-text-info">&lt;/Card&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </GridCol>
          <GridCol md={6} lg={7} className="u-ps-md-8">
            <div className="u-max-w-lg u-ms-auto">
              <Badge label="DX Focused" variant="success" className="u-mb-4" />
              <h2 className="u-fs-4xl u-fs-md-5xl u-font-black u-mb-6 u-tracking-tighter u-leading-tight">
                Developer Experience First
              </h2>
              <p className="u-fs-xl u-text-secondary-emphasis u-mb-8 u-leading-relaxed">
                We designed Atomix backwards from the developer experience.
                Clean APIs, rich TypeScript constraints, and sensible defaults
                mean you spend less time fighting CSS and more time shipping.
              </p>

              <div className="u-flex u-flex-column u-gap-4">
                <Card
                  glass
                  appearance="ghost"
                  className="u-p-5 u-rounded-2xl u-border u-hover-bg-surface-subtle u-transition-colors"
                >
                  <div className="u-flex u-items-center u-gap-5">
                    <div className="u-w-12 u-h-12 u-bg-info-subtle u-text-info u-rounded-xl u-flex u-items-center u-justify-center u-flex-shrink-0 u-shadow-sm">
                      <Icon name="Code" weight="duotone" size={24} />
                    </div>
                    <div>
                      <h4 className="u-fs-lg u-font-black u-mb-1">
                        TypeScript Built-in
                      </h4>
                      <p className="u-fs-sm u-text-secondary-emphasis u-mb-0">
                        Strict prop types and autocomplete. No extra @types
                        packages.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card
                  glass
                  appearance="ghost"
                  className="u-p-5 u-rounded-2xl u-border u-hover-bg-surface-subtle u-transition-colors"
                >
                  <div className="u-flex u-items-center u-gap-5">
                    <div className="u-w-12 u-h-12 u-bg-warning-subtle u-text-warning u-rounded-xl u-flex u-items-center u-justify-center u-flex-shrink-0 u-shadow-sm">
                      <Icon name="TreeStructure" weight="duotone" size={24} />
                    </div>
                    <div>
                      <h4 className="u-fs-lg u-font-black u-mb-1">
                        Tree Shakeable
                      </h4>
                      <p className="u-fs-sm u-text-secondary-emphasis u-mb-0">
                        Import exactly what you need. Zero bloat in your end
                        bundles.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card
                  glass
                  appearance="ghost"
                  className="u-p-5 u-rounded-2xl u-border u-hover-bg-surface-subtle u-transition-colors"
                >
                  <div className="u-flex u-items-center u-gap-5">
                    <div className="u-w-12 u-h-12 u-bg-primary-subtle u-text-primary u-rounded-xl u-flex u-items-center u-justify-center u-flex-shrink-0 u-shadow-sm">
                      <Icon name="PuzzlePiece" weight="duotone" size={24} />
                    </div>
                    <div>
                      <h4 className="u-fs-lg u-font-black u-mb-1">
                        High Composability
                      </h4>
                      <p className="u-fs-sm u-text-secondary-emphasis u-mb-0">
                        Polymorphic components via 'as' props let you mold the
                        UI.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </GridCol>
        </Grid>
      </Block>

      {/* Getting Started Steps */}
      <Block>
        <SectionIntro
          title="Get Started in Minutes"
          text="Start building beautiful glassmorphic interfaces in just three simple steps."
          alignment="center"
        />
        <div className="u-max-w-6xl u-mx-auto">
          <Grid>
            {/* Step 1: Install */}
            <GridCol md={4} className="u-mb-6 u-mb-md-0">
              <Card
                glass
                appearance="ghost"
                className="u-h-100 u-p-6 u-rounded-3xl u-border u-hover-bg-surface-subtle u-transition-colors"
              >
                <div className="u-flex u-items-center u-justify-between u-mb-6">
                  <div className="u-w-12 u-h-12 u-bg-dark-subtle u-border u-border-secondary-subtle u-rounded-xl u-flex u-items-center u-justify-center">
                    <Icon
                      name="DownloadSimple"
                      weight="duotone"
                      size={24}
                      className="u-text-primary"
                    />
                  </div>
                  <span className="u-fs-5xl u-font-black u-opacity-10 u-tracking-tighter u-leading-none">
                    01
                  </span>
                </div>
                <h4 className="u-fs-xl u-font-black u-mb-3 u-text-white">
                  Install
                </h4>
                <p className="u-fs-sm u-text-secondary-emphasis u-mb-6">
                  Add Atomix to your React or Next.js project using your
                  favorite package manager.
                </p>
                <div className="u-bg-dark u-border u-border-secondary-subtle u-rounded-xl u-px-4 u-py-3 u-flex u-items-center u-justify-between u-mt-auto">
                  <code className="u-fs-xs u-font-mono u-text-primary u-opacity-90">
                    npm i @shohojdhara/atomix
                  </code>
                  <Icon
                    name="Copy"
                    weight="duotone"
                    size={16}
                    className="u-text-secondary-emphasis u-opacity-50"
                  />
                </div>
              </Card>
            </GridCol>

            {/* Step 2: Import */}
            <GridCol md={4} className="u-mb-6 u-mb-md-0">
              <Card
                glass
                appearance="ghost"
                className="u-h-100 u-p-6 u-rounded-3xl u-border u-hover-bg-surface-subtle u-transition-colors"
              >
                <div className="u-flex u-items-center u-justify-between u-mb-6">
                  <div className="u-w-12 u-h-12 u-bg-dark-subtle u-border u-border-secondary-subtle u-rounded-xl u-flex u-items-center u-justify-center">
                    <Icon
                      name="CodesandboxLogo"
                      weight="duotone"
                      size={24}
                      className="u-text-success"
                    />
                  </div>
                  <span className="u-fs-5xl u-font-black u-opacity-10 u-tracking-tighter u-leading-none">
                    02
                  </span>
                </div>
                <h4 className="u-fs-xl u-font-black u-mb-3 u-text-white">
                  Import
                </h4>
                <p className="u-fs-sm u-text-secondary-emphasis u-mb-6">
                  Import cleanly designed, tree-shakeable components directly
                  where you need them.
                </p>
                <div className="u-bg-dark u-border u-border-secondary-subtle u-rounded-xl u-px-4 u-py-3 u-flex u-items-center u-justify-between u-mt-auto">
                  <code className="u-fs-xs u-font-mono u-text-success u-opacity-90">
                    import {"{"} Card {"}"} from 'atomix'
                  </code>
                  <Icon
                    name="Copy"
                    weight="duotone"
                    size={16}
                    className="u-text-secondary-emphasis u-opacity-50"
                  />
                </div>
              </Card>
            </GridCol>

            {/* Step 3: Build */}
            <GridCol md={4}>
              <Card
                glass
                appearance="ghost"
                className="u-h-100 u-p-6 u-rounded-3xl u-border u-hover-bg-surface-subtle u-transition-colors"
              >
                <div className="u-flex u-items-center u-justify-between u-mb-6">
                  <div className="u-w-12 u-h-12 u-bg-dark-subtle u-border u-border-secondary-subtle u-rounded-xl u-flex u-items-center u-justify-center">
                    <Icon
                      name="Sparkle"
                      weight="duotone"
                      size={24}
                      className="u-text-warning"
                    />
                  </div>
                  <span className="u-fs-5xl u-font-black u-opacity-10 u-tracking-tighter u-leading-none">
                    03
                  </span>
                </div>
                <h4 className="u-fs-xl u-font-black u-mb-3 u-text-white">
                  Build
                </h4>
                <p className="u-fs-sm u-text-secondary-emphasis u-mb-6">
                  Compose interfaces rapidly utilizing primitive CSS utility
                  tokens and boolean props.
                </p>
                <div className="u-bg-dark u-border u-border-secondary-subtle u-rounded-xl u-px-4 u-py-3 u-flex u-items-center u-justify-between u-mt-auto">
                  <code className="u-fs-xs u-font-mono u-text-warning u-opacity-90">
                    &lt;Card glass variant="ghost" /&gt;
                  </code>
                  <Icon
                    name="Copy"
                    weight="duotone"
                    size={16}
                    className="u-text-secondary-emphasis u-opacity-50"
                  />
                </div>
              </Card>
            </GridCol>
          </Grid>
        </div>
        <div className="u-text-center u-mt-12">
          <Button
            variant="primary"
            size="lg"
            icon={<Icon name="ArrowRight" weight="duotone" />}
            iconPosition="end"
            href="/docs/getting-started/installation"
            LinkComponent={Link}
            className="u-shadow-primary-glow"
          >
            Read the Full Guide
          </Button>
        </div>
      </Block>

      {/* Final CTA Section */}
      <Block>
        <div className="u-text-center u-max-w-4xl u-mx-auto u-py-8 u-py-md-16">
          <h2 className="u-fs-5xl u-fs-md-6xl u-font-black u-mb-6 u-tracking-tighter u-text-white">
            Ready to crystallize your vision?
          </h2>
          <p className="u-fs-lg u-text-secondary-emphasis u-mb-10 u-leading-relaxed u-opacity-80 u-max-w-2xl u-mx-auto">
            Join thousands of developers using Atomix to create beautiful,
            accessible, and performant interfaces.
          </p>

          <div className="u-flex u-flex-wrap u-justify-center u-gap-4 u-mb-16">
            <Button
              variant="primary"
              size="lg"
              icon={<Icon name="RocketLaunch" weight="duotone" />}
              href="/docs/getting-started/installation"
              LinkComponent={Link}
              className="u-px-8 u-h-14 u-rounded-xl u-fs-base u-font-bold u-shadow-none"
            >
              Get Started Free
            </Button>
            <Button
              variant="secondary"
              size="lg"
              glass
              icon={<Icon name="GithubLogo" weight="duotone" />}
              href="https://github.com/shohojdhara/atomix"
              as="a"
              target="_blank"
              className="u-px-8 u-h-14 u-rounded-xl u-fs-base u-font-bold u-border u-border-secondary-subtle u-hover-bg-surface-subtle u-transition-colors"
            >
              Star on GitHub
            </Button>
          </div>

          {/* Key Features Summary */}
          <div className="u-flex u-flex-column u-flex-md-row u-justify-center u-gap-6 u-mb-16">
            <div className="u-flex u-items-center u-gap-4 u-bg-dark-subtle u-px-6 u-py-4 u-rounded-2xl u-border u-border-secondary-subtle">
              <Icon
                name="Timer"
                weight="duotone"
                size={28}
                className="u-text-primary"
              />
              <div className="u-text-start">
                <div className="u-fs-base u-font-bold u-text-white">
                  5 min setup
                </div>
                <div className="u-fs-xs u-text-secondary-emphasis">
                  Zero config required
                </div>
              </div>
            </div>
            <div className="u-flex u-items-center u-gap-4 u-bg-dark-subtle u-px-6 u-py-4 u-rounded-2xl u-border u-border-secondary-subtle">
              <Icon
                name="Cube"
                weight="duotone"
                size={28}
                className="u-text-success"
              />
              <div className="u-text-start">
                <div className="u-fs-base u-font-bold u-text-white">
                  80+ Components
                </div>
                <div className="u-fs-xs u-text-secondary-emphasis">
                  Fully customizable
                </div>
              </div>
            </div>
            <div className="u-flex u-items-center u-gap-4 u-bg-dark-subtle u-px-6 u-py-4 u-rounded-2xl u-border u-border-secondary-subtle">
              <Icon
                name="ShieldCheck"
                weight="duotone"
                size={28}
                className="u-text-error"
              />
              <div className="u-text-start">
                <div className="u-fs-base u-font-bold u-text-white">
                  100% Accessible
                </div>
                <div className="u-fs-xs u-text-secondary-emphasis">
                  WCAG 2.1 compliant
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="u-pt-10 u-border-t u-border-secondary-subtle">
            <p className="u-fs-xs u-text-secondary-emphasis u-uppercase u-tracking-widest u-font-bold u-mb-6">
              Built with modern technologies
            </p>
            <div className="u-flex u-flex-wrap u-justify-center u-items-center u-gap-8 u-fs-sm u-text-secondary-emphasis u-opacity-60">
              <span className="u-flex u-items-center u-gap-2 u-font-medium">
                <Icon name="Code" weight="duotone" size={20} />
                TypeScript
              </span>
              <span className="u-flex u-items-center u-gap-2 u-font-medium">
                <Icon name="Atom" weight="duotone" size={20} />
                React 18
              </span>
              <span className="u-flex u-items-center u-gap-2 u-font-medium">
                <Icon name="Palette" weight="duotone" size={20} />
                CSS Tokens
              </span>
              <span className="u-flex u-items-center u-gap-2 u-font-medium">
                <Icon name="Lightning" weight="duotone" size={20} />
                Zero Runtime
              </span>
            </div>
          </div>
        </div>
      </Block>
    </HomePageLayout>
  );
}

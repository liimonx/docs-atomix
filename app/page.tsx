"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  const mockup = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Subtle entry for the mockup
      gsap.fromTo(
        mockup.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.5 },
      );
    },
    { scope: container },
  );

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

  // Trusted by companies
  const trustedCompanies = [
    { name: "Acme Corp", icon: "Diamond" },
    { name: "StarShip", icon: "RocketLaunch" },
    { name: "Hydra", icon: "WaterDrop" },
    { name: "Voltic", icon: "Bolt" },
    { name: "Hexagon", icon: "Hive" },
  ];

  return (
    <HomePageLayout>
      {/* Ambient Background Effects */}
      <AmbientBackground />

      {/* Hero sections */}
      <Hero title={<></>} contentWidth="90%">
        <Hero.Content className="u-w-100 u-mx-auto u-text-center u-flex u-flex-column u-items-center">
          <Badge label="v0.5.0 is now live" />

          {/* Headline Slider */}
          <HeroHeadlineSlider />

          {/* CTAs */}
          <Hero.Actions>
            <Button
              variant="outline-primary"
              size="lg"
              icon={<Icon name="ArrowRight" weight="duotone" />}
              iconPosition="end"
              className="u-px-8 u-h-14 u-rounded-lg u-shadow-primary-glow u-fs-lg"
              href="/docs/getting-started/installation"
              LinkComponent={Link}
            >
              Start Building
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<Icon name="TerminalWindow" weight="duotone" />}
              className="u-px-8 u-h-14 u-rounded-lg u-bg-surface-subtle u-fs-lg"
              onClick={() =>
                navigator.clipboard.writeText("npm install @shohojdhara/atomix")
              }
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

          <div ref={mockup} className={styles.mockupWrapper}>
            <Card className="u-relative u-p-1 u-p-md-2 u-overflow-hidden u-rounded-3xl u-shadow-2xl">
              {/* Fake Browser Header */}
              <div className="u-flex u-items-center u-gap-3 u-px-6 u-py-4 u-border-b u-border-glass">
                <div className="u-flex u-gap-2">
                  <div className="u-w-3 u-h-3 u-rounded-circle u-bg-error u-opacity-80"></div>
                  <div className="u-w-3 u-h-3 u-rounded-circle u-bg-warning u-opacity-80"></div>
                  <div className="u-w-3 u-h-3 u-rounded-circle u-bg-success u-opacity-80"></div>
                </div>
                <div className="u-mx-auto u-bg-surface-subtle u-px-5 u-py-1-5 u-rounded-full u-fs-xs u-text-secondary u-font-mono u-border u-border-glass">
                  atomix-dashboard.tsx
                </div>
                <div className="u-flex u-gap-2">
                  <div className="u-w-4 u-h-4 u-rounded-sm u-bg-surface-subtle"></div>
                  <div className="u-w-4 u-h-4 u-rounded-sm u-bg-surface-subtle"></div>
                </div>
              </div>

              {/* Layout Content */}
              <Grid className="u-p-6">
                {/* Sidebar */}
                <GridCol md={3} className={styles.sidebarColumn}>
                  <div className="u-h-10 u-w-100 u-bg-primary u-opacity-20 u-rounded-lg u-animate-pulse"></div>
                  <div className="u-flex u-flex-column u-gap-4 u-mt-2">
                    <div className="u-flex u-items-center u-gap-3">
                      <div className="u-w-6 u-h-6 u-rounded-md u-bg-surface-subtle"></div>
                      <div className="u-h-3 u-w-60 u-bg-surface-subtle u-rounded u-opacity-50"></div>
                    </div>
                    <div className="u-flex u-items-center u-gap-3">
                      <div className="u-w-6 u-h-6 u-rounded-md u-bg-surface-subtle"></div>
                      <div className="u-h-3 u-w-40 u-bg-surface-subtle u-rounded u-opacity-50"></div>
                    </div>
                    <div className="u-flex u-items-center u-gap-3">
                      <div className="u-w-6 u-h-6 u-rounded-md u-bg-surface-subtle"></div>
                      <div className="u-h-3 u-w-75 u-bg-surface-subtle u-rounded u-opacity-50"></div>
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
                      <div className="u-glass-panel u-p-6 u-rounded-2xl u-hover-bg-surface-subtle u-transition-all u-text-start u-border u-border-glass">
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
                        <p className="u-fs-sm u-text-secondary u-font-medium">
                          Total Visits
                        </p>
                      </div>
                    </GridCol>
                    <GridCol sm={4} className="u-mb-4 u-mb-sm-0">
                      <div className="u-glass-panel u-p-6 u-rounded-2xl u-hover-bg-surface-subtle u-transition-all u-text-start u-border u-border-glass">
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
                        <p className="u-fs-sm u-text-secondary u-font-medium">
                          Active Users
                        </p>
                      </div>
                    </GridCol>
                    <GridCol sm={4}>
                      <div className="u-glass-panel u-p-6 u-rounded-2xl u-hover-bg-surface-subtle u-transition-all u-text-start u-border u-border-glass">
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
                        <p className="u-fs-sm u-text-secondary u-font-medium">
                          Revenue
                        </p>
                      </div>
                    </GridCol>
                  </Grid>

                  {/* Chart Area Placeholder */}
                  <div
                    className={`u-glass-panel u-p-8 u-rounded-2xl u-h-72 u-flex u-items-end u-justify-between u-gap-3 u-relative u-overflow-hidden u-border u-border-glass ${styles.chartAreaPlaceholder}`}
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
                      <span className="u-fs-xs u-font-bold u-text-secondary">
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
          className="u-mb-20"
        />
        <Grid>
          {architecturePillars.map((pillar, index) => (
            <GridCol key={index} md={4} className="u-mb-8">
              <Card
                title={pillar.title}
                text={pillar.description}
                icon={<Icon name={pillar.icon as any} weight="duotone" />}
                className="u-h-100 u-rounded-2xl u-shadow-lg u-transition-transform u-hover-translate-y-n2"
                variant={pillar.color as any}
                hoverable
              />
            </GridCol>
          ))}
        </Grid>
      </Block>

      {/* Interactive Components Section */}
      <Block>
        <div className="u-flex u-flex-column u-flex-md-row u-justify-between u-items-md-end u-mb-16 u-gap-6">
          <div className="u-max-w-2xl">
            <h2 className="u-fs-5xl u-font-black u-mb-4 u-tracking-tighter">
              Interactive & Polished
            </h2>
            <p className="u-fs-xl u-text-secondary u-leading-relaxed">
              Pre-built, accessible React components ready for production.
              Designed with cinematic depth to look stunning on any background.
            </p>
          </div>
          <Link
            href="/docs/components/overview"
            className="u-text-primary u-flex u-items-center u-gap-2 u-font-bold u-hover-text-primary-emphasis u-transition-all u-fs-lg"
          >
            View all 40+ components <Icon name="ArrowRight" size={20} />
          </Link>
        </div>

        {/* Bento Grid for Interactive Components */}
        <Grid>
          {/* Left Column: Auth & Status */}
          <GridCol lg={4} md={6} className="u-mb-8">
            <div className="u-flex u-flex-column u-gap-6 u-h-100">
              {/* Component 1: Advanced Auth Card */}
              <div className="">
                <div className={styles.authCardImageBg}></div>
                <div className={styles.authCardGradientBg}></div>

                <Card>
                  <div className="u-text-center u-mb-6">
                    <div className="u-w-12 u-h-12 u-bg-primary-subtle u-text-primary u-rounded-xl u-flex u-items-center u-justify-center u-mx-auto u-mb-3 u-shadow-sm">
                      <Icon name="LockKey" size={28} weight="duotone" />
                    </div>
                    <h4 className="u-fs-2xl u-font-black u-tracking-tight">
                      Secure Access
                    </h4>
                    <p className="u-fs-sm u-text-secondary u-mt-1 u-opacity-70">
                      Welcome back to the dashboard
                    </p>
                  </div>

                  <div className="u-flex u-flex-column u-gap-5">
                    <div className="u-flex u-flex-column u-gap-1-5">
                      <Input
                        placeholder="name@company.com"
                        {...({
                          icon: <Icon name="Envelope" weight="duotone" />,
                        } as any)}
                      />
                    </div>
                    <div className="u-flex u-flex-column u-gap-1-5">
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...({
                          icon: <Icon name="Key" weight="duotone" />,
                        } as any)}
                      />
                    </div>

                    <div className="u-flex u-justify-between u-items-center">
                      <Checkbox
                        {...({
                          label: "Remember device",
                          checked: true,
                        } as any)}
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
                      <span className="u-relative u-bg-white u-px-3 u-fs-xs u-text-secondary u-font-bold u-uppercase u-tracking-widest u-opacity-50">
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
              <Card className="u-p-6 u-rounded-3xl u-shadow-lg u-border u-border-glass u-flex-1">
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
                        <Icon name={"Globe" as any} weight="duotone" />
                      </div>
                      <div>
                        <div className="u-fs-xs u-font-bold">Edge Nodes</div>
                        <div className="u-fs-xxs u-text-secondary">
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
                      <div className="u-w-8 u-h-8 u-rounded-lg u-bg-secondary-subtle u-text-secondary u-flex u-items-center u-justify-center">
                        <Icon name={"Activity" as any} weight="duotone" />
                      </div>
                      <div>
                        <div className="u-fs-xs u-font-bold">Latency</div>
                        <div className="u-fs-xxs u-text-secondary">
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
                      <span className="u-fs-xxs u-text-secondary">
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
                <Card className="u-p-8 u-rounded-3xl u-shadow-lg u-border u-border-glass u-relative u-overflow-hidden">
                  <div className="u-flex u-flex-column u-flex-md-row u-justify-between u-items-start u-gap-6 u-mb-8">
                    <div>
                      <div className="u-flex u-items-center u-gap-3 u-mb-2">
                        <Badge
                          label="Active Project"
                          variant="success"
                          glass
                          size="sm"
                        />
                        <span className="u-fs-xs u-text-secondary u-font-mono u-opacity-60">
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
                      <div className="u-w-10 u-h-10 u-rounded-circle u-bg-surface-subtle u-flex u-items-center u-justify-center u-fs-xs u-font-bold u-border-2 u-border-white">
                        +5
                      </div>
                    </div>
                  </div>

                  <div className="u-flex u-flex-column u-gap-8">
                    <div className="u-flex u-flex-column u-gap-3">
                      <div className="u-flex u-justify-between u-items-end">
                        <span className="u-fs-sm u-font-bold u-text-secondary">
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
                      <label className="u-fs-xs u-text-secondary u-uppercase u-font-black u-tracking-widest u-opacity-50 u-mb-2">
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
                        {...({ value: "eu-central-1" } as any)}
                      />
                    </div>

                    <div className="u-flex u-flex-column u-gap-1-5">
                      <label className="u-fs-xs u-text-secondary u-uppercase u-font-black u-tracking-widest u-opacity-50">
                        API Throughput
                      </label>
                      <Progress value={65} variant="primary" size="sm" />
                      <div className="u-flex u-justify-between u-fs-xs u-text-secondary u-font-mono u-opacity-60">
                        <span>Low</span>
                        <span>Balanced</span>
                        <span>High</span>
                      </div>
                    </div>

                    <div className="u-flex u-justify-between u-items-center u-pt-2">
                      <div className="u-flex u-items-center u-gap-3">
                        <div className="u-p-2 u-bg-surface-subtle u-text-secondary u-rounded-lg">
                          <Icon name="Monitor" size={18} weight="duotone" />
                        </div>
                        <span className="u-fs-sm u-font-bold">
                          Real-time Sync
                        </span>
                      </div>
                      <Toggle checked />
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
                    className="u-rounded-2xl u-shadow-lg u-border-glass u-flex-1"
                  >
                    <p className="u-fs-sm u-opacity-80">
                      Background blur rendering can be optimized by adjusting
                      the noise texture scale.
                    </p>
                  </Callout>

                  <Card className="u-p-5 u-rounded-2xl u-shadow-lg u-border u-border-glass">
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

      {/* Trusted By Section */}
      <Block>
        <div className="u-text-center">
          <p className="u-text-secondary u-fs-xs u-font-black u-uppercase u-tracking-widest u-mb-10 u-opacity-60">
            Pioneered by global engineering teams
          </p>
          <div className="u-flex u-flex-wrap u-justify-center u-gap-14 u-items-center u-opacity-40 u-hover-opacity-90 u-transition-all">
            {trustedCompanies.map((company, index) => (
              <div
                key={index}
                className="u-flex u-items-center u-gap-3 u-fs-xl u-font-black u-tracking-tighter"
              >
                <Icon name={company.icon as any} weight="duotone" size={28} />
                <span>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Block>

      {/* Final CTA Section */}
      <Block>
        <div className="u-text-center u-max-w-4xl u-mx-auto">
          <h2 className="u-fs-5xl u-font-black u-mb-6 u-tracking-tighter">
            Ready to crystallize your vision?
          </h2>
          <p className="u-fs-xl u-text-secondary u-mb-12 u-leading-relaxed u-opacity-80">
            Join thousands of developers using Atomix to create beautiful,
            accessible, and performant interfaces.
          </p>
          <div className="u-flex u-flex-wrap u-justify-center u-gap-6">
            <Button
              variant="primary"
              size="lg"
              iconName="RocketLaunch"
              href="/docs/getting-started/installation"
              LinkComponent={Link}
              className="u-shadow-primary-glow u-px-10 u-h-16 u-rounded-xl u-fs-lg u-font-bold"
            >
              Get Started Free
            </Button>
            <Button
              variant="secondary"
              size="lg"
              iconName="GithubLogo"
              href="https://github.com/shohojdhara/atomix"
              as="a"
              target="_blank"
              className="u-px-10 u-h-16 u-rounded-xl u-fs-lg u-font-bold"
            >
              Star on GitHub
            </Button>
          </div>
        </div>
      </Block>
    </HomePageLayout>
  );
}

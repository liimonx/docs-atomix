"use client";

import Link from "next/link";
import { HomePageLayout } from "@/components/layout/HomePageLayout";
import {
  Block,
  Card,
  Button,
  Icon,
  GridCol,
  SectionIntro,
  Grid,
  Input,
  Toggle,
  Slider,
  Avatar,
  Callout,
} from "@shohojdhara/atomix";

import { AmbientBackground } from "@/components/ui/AmbientBackground";

export default function Page() {
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

      <main className="u-relative u-z-10 u-flex u-flex-column u-items-center u-pt-40 u-pb-20 u-px-4 u-min-h-100">
        <div className="u-max-w-5xl u-mx-auto u-text-center u-flex u-flex-column u-items-center u-gap-10">
          {/* Badge */}
          <div className="u-inline-flex u-items-center u-gap-2 u-px-4 u-py-1-5 u-rounded-full u-border u-border-primary-subtle u-bg-primary-subtle u-text-primary u-fs-xs u-font-bold u-tracking-wide u-uppercase u-shadow-sm">
            <span className="u-relative u-flex u-h-2 u-w-2">
              <span className="u-animate-ping u-absolute u-inline-flex u-h-100 u-w-100 u-rounded-circle u-bg-primary u-opacity-75"></span>
              <span className="u-relative u-inline-flex u-rounded-circle u-h-2 u-w-2 u-bg-primary"></span>
            </span>
            v2.0 is now live
          </div>

          {/* Headline */}
          <div className="u-flex u-flex-column u-gap-4">
            <h1
              className="u-fs-5xl u-font-black u-tracking-tight u-leading-tight"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 5.5rem)",
                background: "linear-gradient(180deg, #fff 30%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The Glass-First System
              <br />
              for Scalable Frontend.
            </h1>

            {/* Subheadline */}
            <p className="u-fs-xl u-text-secondary u-max-w-2xl u-mx-auto u-leading-relaxed u-opacity-80">
              Atomix provides a react-ready engine to build distinct,
              high-performance interfaces with cinematic depth and frosted glass
              realism.
            </p>
          </div>

          {/* CTAs */}
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
              Start Building
            </Button>
            <Button
              variant="secondary"
              size="lg"
              iconName="TerminalWindow"
              className="u-px-8 u-h-14 u-rounded-lg u-bg-surface-subtle u-fs-lg"
              onClick={() =>
                navigator.clipboard.writeText("npm install @shohojdhara/atomix")
              }
            >
              npm install @shohojdhara/atomix
            </Button>
          </div>

          {/* Hero Visual / Interactive Playground Mockup */}
          <div className="u-mt-24 u-w-100 u-relative group">
            {/* Background glow for the mockup */}
            <div
              className="u-absolute u-rounded-3xl u-opacity-30 u-blur-3xl"
              style={{
                inset: "-2.5rem",
                background: "linear-gradient(135deg, #13a4ec, #9333ea)",
              }}
            ></div>

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
                <GridCol
                  md={3}
                  className="u-hidden u-flex-md u-flex-column u-gap-6 u-text-start u-border-e u-border-glass u-pe-6"
                >
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
                            <Icon name="Activity" size={20} />
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
                            <Icon name="Users" size={20} />
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
                            <Icon name="CurrencyDollar" size={20} />
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
                    className="u-glass-panel u-p-8 u-rounded-2xl u-h-72 u-flex u-items-end u-justify-between u-gap-3 u-relative u-overflow-hidden u-border u-border-glass"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(19, 164, 236, 0.08), transparent)",
                    }}
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
      </main>

      {/* Architecture Section */}
      <Block className="u-py-24 u-border-t u-border-glass u-bg-background-subtle u-relative u-z-10">
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
                icon={<Icon name={pillar.icon as any} />}
                className="u-h-100 u-rounded-2xl u-shadow-lg u-transition-transform u-hover-translate-y-n2"
                variant={pillar.color as any}
                hoverable
              />
            </GridCol>
          ))}
        </Grid>
      </Block>

      {/* Interactive Components Section */}
      <Block className="u-py-24 u-relative u-z-10 u-glass-clean-root">
        <div className="u-flex u-flex-column u-flex-md-row u-justify-between u-items-md-end u-mb-16 u-gap-6">
          <div className="u-max-w-2xl">
            <h2 className="u-fs-4xl u-font-black u-mb-3 u-tracking-tight">
              Interactive Components
            </h2>
            <p className="u-fs-lg u-text-secondary u-leading-relaxed">
              Pre-built, accessible React components ready for production.
              Designed to look stunning on any background.
            </p>
          </div>
          <Link
            href="/docs/components/overview"
            className="u-text-primary u-flex u-items-center u-gap-2 u-font-bold u-hover-text-primary-emphasis u-transition-all"
          >
            View all components <Icon name="ArrowRight" size={18} />
          </Link>
        </div>

        {/* Asymmetric Grid for Interactive Components */}
        <Grid>
          {/* Component 1: Login Form - Large */}
          <GridCol md={7} className="u-mb-8 u-mb-md-0">
            <div className="u-relative u-overflow-hidden u-rounded-3xl u-min-h-100 u-flex u-flex-column u-justify-center u-items-center u-border u-border-glass u-shadow-2xl">
              <div
                className="u-absolute u-inset-0 u-opacity-40 u-blur-md"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                className="u-absolute u-inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(19, 164, 236, 0.15) 0%, transparent 70%)",
                }}
              ></div>

              <Card className="u-w-100 u-max-w-sm u-relative u-z-10 u-p-10 u-rounded-3xl u-shadow-2xl">
                <div className="u-text-center u-mb-10">
                  <div className="u-w-16 u-h-16 u-bg-primary-subtle u-text-primary u-rounded-2xl u-flex u-items-center u-justify-center u-mx-auto u-mb-4 u-shadow-sm">
                    <Icon name="LockKey" size={32} weight="bold" />
                  </div>
                  <h4 className="u-fs-2xl u-font-black u-tracking-tight">
                    Secure Access
                  </h4>
                  <p className="u-fs-sm u-text-secondary u-mt-1">
                    Enter your credentials to continue
                  </p>
                </div>
                <div className="u-flex u-flex-column u-gap-6">
                  <div className="u-flex u-flex-column u-gap-1-5">
                    <label className="u-fs-xs u-text-secondary u-uppercase u-font-black u-tracking-widest u-opacity-60">
                      Email address
                    </label>
                    <Input
                      placeholder="name@company.com"
                      {...({
                        icon: <Icon name="Envelope" />,
                      } as any)}
                    />
                  </div>
                  <div className="u-flex u-flex-column u-gap-1-5">
                    <label className="u-fs-xs u-text-secondary u-uppercase u-font-black u-tracking-widest u-opacity-60">
                      Password
                    </label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      {...({ icon: <Icon name="Key" /> } as any)}
                    />
                  </div>
                  <Button
                    variant="primary"
                    fullWidth
                    size="lg"
                    className="u-mt-2 u-h-14 u-font-bold u-rounded-xl u-shadow-primary-glow"
                  >
                    Authorize Session
                  </Button>
                  <p className="u-text-center u-fs-xs u-text-secondary u-opacity-60">
                    Protected by Atomix Guard
                  </p>
                </div>
              </Card>
            </div>
          </GridCol>

          {/* Right Column components */}
          <GridCol md={5} className="u-flex u-flex-column u-gap-6">
            {/* Component 2: Media Player */}
            <Card className="u-p-8 u-rounded-3xl u-shadow-lg u-border u-border-glass">
              <div className="u-flex u-items-center u-gap-6">
                <Avatar
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop"
                  size="xl"
                  className="u-shadow-2xl"
                />
                <div className="u-flex-1 u-min-w-0">
                  <div className="u-flex u-justify-between u-items-center u-mb-1">
                    <h4 className="u-font-black u-fs-xl u-truncate u-tracking-tight">
                      Midnight City
                    </h4>
                    <Icon
                      name="Heart"
                      weight="fill"
                      className="u-text-error"
                      size={20}
                    />
                  </div>
                  <p className="u-text-secondary u-fs-sm u-truncate u-font-bold u-opacity-70">
                    M83 • Hurry Up, We're Dreaming
                  </p>
                </div>
              </div>

              <div className="u-mt-8">
                <Slider {...({ glass: true, defaultValue: 65 } as any)} />
                <div className="u-flex u-justify-between u-mt-2 u-fs-xs u-text-secondary u-font-mono">
                  <span>2:45</span>
                  <span>4:03</span>
                </div>
              </div>

              <div className="u-flex u-justify-center u-items-center u-gap-8 u-mt-6">
                <Button variant="ghost" size="sm" iconName="SkipBack" />
                <Button
                  variant="primary"
                  size="lg"
                  iconName="Play"
                  className="u-w-14 u-h-14 u-rounded-circle u-shadow-primary-glow"
                />
                <Button variant="ghost" size="sm" iconName="SkipForward" />
              </div>
            </Card>

            {/* Component 3: Toggle / Settings */}
            <Card className="u-p-8 u-rounded-3xl u-shadow-lg u-flex u-flex-column u-gap-6 u-border u-border-glass">
              <h5 className="u-fs-lg u-font-black u-tracking-tight u-mb-2">
                Preferences
              </h5>
              <div className="u-flex u-justify-between u-items-center">
                <div className="u-flex u-items-center u-gap-4">
                  <div className="u-p-2 u-bg-primary-subtle u-text-primary u-rounded-lg">
                    <Icon name="BellRinging" weight="bold" />
                  </div>
                  <div>
                    <span className="u-block u-font-bold u-fs-sm">
                      Notifications
                    </span>
                    <span className="u-fs-xs u-text-secondary">
                      Activity alerts
                    </span>
                  </div>
                </div>
                <Toggle checked glass />
              </div>
              <div className="u-flex u-justify-between u-items-center">
                <div className="u-flex u-items-center u-gap-4">
                  <div className="u-p-2 u-bg-surface-subtle u-text-secondary u-rounded-lg">
                    <Icon name="Moon" weight="bold" />
                  </div>
                  <div>
                    <span className="u-block u-font-bold u-fs-sm">
                      Dark Mode
                    </span>
                    <span className="u-fs-xs u-text-secondary">
                      Auto-detect system
                    </span>
                  </div>
                </div>
                <Toggle glass />
              </div>
            </Card>

            {/* Component 4: Notification */}
            <Callout
              variant="success"
              title="System Optimized"
              icon={<Icon name="CheckCircle" weight="fill" size={24} />}
              className="u-rounded-3xl u-shadow-2xl u-border-glass"
            >
              <p className="u-fs-sm u-opacity-80">
                Memory buffers cleared. Smooth rendering active for cinematic
                depth.
              </p>
            </Callout>
          </GridCol>
        </Grid>
      </Block>

      {/* Trusted By Section */}
      <Block className="u-py-20 u-border-y u-border-glass u-bg-background-subtle">
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
      <Block className="u-py-32 u-relative u-z-10">
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

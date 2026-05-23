import { useRef } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  Hero,
  Card,
  Button,
  Icon,
  GridCol,
  Grid,
  Badge,
} from "@shohojdhara/atomix";

import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { HeroHeadlineSlider } from "@/components/ui/HeroHeadlineSlider";
import styles from "./Home.module.scss";

export const HeroSection = () => {
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
    } catch {
      toast.error("Failed to copy command. Please try again.", {
        duration: 4000,
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      {/* Ambient Background Effects */}
      <AmbientBackground />

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
              linkComponent={Link}
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
              glass={{
                blurAmount: 3,
                displacementScale: 100,
                aberrationIntensity: 20,
                shaderVariant: "plasma",
                mode: "shader",
              }}
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
                      )
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
    </>
  );
};

import Link from "next/link";
import {
  Block,
  Grid,
  GridCol,
  Card,
  Icon,
  Input,
  Checkbox,
  Button,
  Badge,
  Progress,
  Steps,
  Select,
  Toggle,
  Callout,
  Avatar,
} from "@shohojdhara/atomix";
import styles from "./Home.module.scss";

export const BentoShowcaseSection = () => {
  return (
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
                    <Input placeholder="name@company.com" type="text" size="md" />
                  </div>
                  <div className="u-flex u-flex-column u-gap-1-5">
                    <Input type="password" placeholder="••••••••" size="md" />
                  </div>

                  <div className="u-flex u-justify-between u-items-center">
                    <Checkbox label="Remember device" checked={true} onChange={() => {}} />
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
            <Card>
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
              <Card>
                <div className="u-flex u-flex-column u-flex-md-row u-justify-between u-items-start u-gap-6 u-mb-8">
                  <div>
                    <div className="u-flex u-items-center u-gap-3">
                      <Badge label="Active Project" variant="success" />
                      ID: ATX-2024
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

                <Card>
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
  );
};

import { Block, SectionIntro, Grid, GridCol, Card, Icon } from "@shohojdhara/atomix";

export const CoreFeaturesSection = () => {
  const architecturePillars = [
    {
      icon: "MagicWand",
      title: "Glassmorphism Native",
      description:
        "Every component is built with glass effects in mind. No awkward overlays or CSS hacks needed.",
      color: "primary" as const,
    },
    {
      icon: "ShieldCheck",
      title: "Accessibility Baked In",
      description:
        "Automatic contrast calculation guarantees WCAG compliance, even atop blurred backgrounds.",
      color: "success" as const,
    },
    {
      icon: "Lightning",
      title: "Zero Runtime Overhead",
      description:
        "Styles are compiled to static CSS via our plugin. No expensive browser repaints or JS injections.",
      color: "error" as const,
    },
    {
      icon: "ProjectorScreenChart",
      title: "Design Tokens",
      description:
        "A robust theming engine that scales with your app. Define blur strengths, opacity levels, and noise textures as simple CSS variables.",
      color: "warning" as const,
    },
  ];

  return (
    <Block>
      <SectionIntro
        title="Engineered for Glassmorphism"
        text="Unlike other component libraries, Atomix is specifically designed for the modern glassmorphic aesthetic while maintaining accessibility and performance."
        alignment="center"
      />
      <Grid>
        {architecturePillars.map((pillar, index) => (
          <GridCol key={index} md={6} lg={3} className="u-mb-8">
            <Card
              title={pillar.title}
              text={pillar.description}
              icon={<Icon name={pillar.icon as any} weight="duotone" />}
              className="u-h-100 u-rounded-2xl u-shadow-lg u-transition-transform u-hover-translate-y-n2"
              variant={pillar.color}
              hoverable
            />
          </GridCol>
        ))}
      </Grid>
      
      {/* Stats row below */}
      <Grid className="u-mt-4">
        <GridCol sm={6} lg={3} className="u-mb-4">
          <Card glass variant="primary">
            <div className="u-fs-5xl u-font-black u-text-primary u-mb-3 u-tracking-tighter">
              80+
            </div>
            <div className="u-fs-xs u-text-secondary-emphasis u-uppercase u-font-bold u-tracking-widest">
              Components
            </div>
          </Card>
        </GridCol>
        <GridCol sm={6} lg={3} className="u-mb-4">
          <Card glass variant="success">
            <div className="u-fs-5xl u-font-black u-text-success u-mb-3 u-tracking-tighter">
              0KB
            </div>
            <div className="u-fs-xs u-text-secondary-emphasis u-uppercase u-font-bold u-tracking-widest">
              Runtime
            </div>
          </Card>
        </GridCol>
        <GridCol sm={6} lg={3} className="u-mb-4">
          <Card glass variant="error">
            <div className="u-fs-5xl u-font-black u-text-error u-mb-3 u-tracking-tighter">
              100%
            </div>
            <div className="u-fs-xs u-text-secondary-emphasis u-uppercase u-font-bold u-tracking-widest">
              Accessible
            </div>
          </Card>
        </GridCol>
        <GridCol sm={6} lg={3} className="u-mb-4">
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
    </Block>
  );
};

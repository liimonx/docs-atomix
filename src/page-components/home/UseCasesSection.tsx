import { Block, SectionIntro, Grid, GridCol, Card, Icon } from "@shohojdhara/atomix";

export const UseCasesSection = () => {
  return (
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
  );
};

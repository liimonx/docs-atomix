import { Block, SectionIntro, Grid, GridCol, Card, Icon } from "@shohojdhara/atomix";

export const ComponentShowcaseSection = () => {
  return (
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
  );
};

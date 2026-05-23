import Link from "next/link";
import { Block, SectionIntro, Grid, GridCol, Card, Icon, Button } from "@shohojdhara/atomix";

export const GettingStartedSection = () => {
  return (
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
          linkComponent={Link}
          className="u-shadow-primary-glow"
        >
          Read the Full Guide
        </Button>
      </div>
    </Block>
  );
};

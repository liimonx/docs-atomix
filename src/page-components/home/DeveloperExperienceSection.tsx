import { Block, Grid, GridCol, Card, Icon, Badge } from "@shohojdhara/atomix";

export const DeveloperExperienceSection = () => {
  return (
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
              <Card glass>
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
              <Card glass>
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
              <Card glass>
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
  );
};

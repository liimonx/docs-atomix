"use client";

import { useMemo, FC } from "react";
import Link from "next/link";

import { 
  Button, 
  Card, 
  Badge, 
  Icon, 
  GridCol, 
  Hero, 
  Block, 
  SectionIntro,
  Grid
} from "@shohojdhara/atomix";

import { componentMetadata } from "@/data/components";
import { BreadcrumbNavigation } from "@/components/navigation/BreadcrumbNavigation";

const ComponentsHomePage: FC = () => {
  // Get component categories
  const categories = useMemo(() => 
    Array.from(new Set(componentMetadata.map((c) => c.category))), 
  []);

  // Get featured components (stable status)
  const featuredComponents = useMemo(() => 
    componentMetadata
      .filter((c) => c.status === "stable")
      .slice(0, 6),
    []
  );

  // Get recently updated components
  const recentComponents = useMemo(() => 
    [...componentMetadata]
      .sort((b, a) => a.version.localeCompare(b.version))
      .slice(0, 6),
    []
  );

  // Stable components count
  const stableComponentsCount = useMemo(() => 
    componentMetadata.filter((c) => c.status === "stable").length,
  []);

  return (
    <>
      <BreadcrumbNavigation />

      <Hero
        title="Atomix Components"
        text="A comprehensive library of accessible, responsive UI components built with React and TypeScript."
        alignment="center"
        className="u-pt-36 u-pb-20"
        actions={
          <>
            <Button 
              variant="primary" 
              size="lg"
              icon={<Icon name="Download" />}
              href="/docs/getting-started/installation"
            >
              Get Started
            </Button>
            <Button 
              variant="outline-primary" 
              size="lg"
              icon={<Icon name="BookOpen" />}
              href="/docs/components/overview"
            >
              Browse Components
            </Button>
          </>
        }
      />

      <Block spacing="md" container={{type: 'fluid'}}>
          {/* Stats Section */}
          <Grid>
            <GridCol md={4} sm={6}>
              <Card className="u-h-100 u-text-center">
                <div className="u-d-flex u-justify-content-center u-mb-4">
                  <Icon size={32} className="u-text-primary" name="GridFour" />
                </div>
                <h3 className="u-fs-2xl u-fw-bold u-mb-2">{componentMetadata.length}</h3>
                <p className="u-text-secondary-emphasis u-mb-0">Components</p>
              </Card>
            </GridCol>

            <GridCol md={4} sm={6}>
              <Card className=" u-h-100 u-text-center">
                <div className="u-d-flex u-justify-content-center u-mb-4">
                  <Icon size={32} className="u-text-success" name="Shield" />
                </div>
                <h3 className="u-fs-2xl u-fw-bold u-mb-2">
                  {stableComponentsCount}
                </h3>
                <p className="u-text-secondary-emphasis u-mb-0">Stable Components</p>
              </Card>
            </GridCol>

            <GridCol md={4} sm={6}>
              <Card className="u-h-100 u-text-center">
                <div className="u-d-flex u-justify-content-center u-mb-4">
                  <Icon size={32} className="u-text-warning" name="Star" />
                </div>
                <h3 className="u-fs-2xl u-fw-bold u-mb-2">{categories.length}</h3>
                <p className="u-text-secondary-emphasis u-mb-0">Categories</p>
              </Card>
            </GridCol>
          </Grid>
      </Block>

      <Block spacing="md" background="secondary" container={{type: 'fluid'}}>
          <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-6">
            <SectionIntro
              title="Categories"
              alignment="left"
            />
            <Link
              href="/docs/components/overview"
              className="u-text-primary u-text-decoration-none u-fw-medium"
            >
              View All
            </Link>
          </div>

          <Grid>
            {categories.slice(0, 6).map((category, index) => (
              <GridCol key={index} md={4} sm={6}>
                <Card className="u-h-100 u-text-center">
                  <div className="u-d-flex u-align-items-center u-justify-content-center u-gap-2">
                    <div className="u-bg-primary-subtle u-text-primary-emphasis u-rounded-md u-p-2">
                      <Icon name="GridFour" size={20} />
                    </div>
                    <div>
                      <h3 className="u-fs-lg u-fw-semibold u-mb-1">{category}</h3>
                      <p className="u-text-secondary-emphasis u-mb-0 u-fs-sm">
                        {
                          componentMetadata.filter((c) => c.category === category)
                            .length
                        }{" "}
                        components
                      </p>
                    </div>
                  </div>
                </Card>
              </GridCol>
            ))}
          </Grid>
      </Block>

      <Block spacing="md" container={{type: 'fluid'}}>
          <SectionIntro
            title="Featured Components"
            text="Stable, production-ready components"
            alignment="left"
          />

          <Grid>
            {featuredComponents.map((component) => (
              <GridCol key={component.id} md={6} lg={4} className="u-mb-4">
                <Card className="u-h-100 u-text-center">
                  <div className="u-d-flex u-flex-column u-h-100">
                    <div className="u-d-flex u-align-items-center u-mb-4 u-gap-2">
                      <div className="u-bg-secondary-subtle u-text-secondary-emphasis u-rounded-md u-p-2">
                        <Icon name="Lightning" size={20} />
                      </div>
                      <h3 className="u-fs-lg u-fw-semibold u-mb-0">{component.name}</h3>
                    </div>

                    <p className="u-text-secondary-emphasis u-flex-grow-1 u-mb-4">
                      {component.description.substring(0, 100)}...
                    </p>

                    <div className="u-d-flex u-gap-2 u-mb-4">
                      <Badge variant="primary" size="sm" label={component.status}/>
                      <Badge
                        variant="secondary"
                        size="sm"
                        label={`v${component.version}`}
                      />
                    </div>

                    <div>
                      <Button
                        variant="primary"
                        size="sm"
                        className="u-w-100"
                        href={`/docs/components/${component.id}`}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </GridCol>
            ))}
            </Grid>
      </Block>

      <Block spacing="md" background="secondary" container={{type: 'fluid'}}>
          <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-6">
            <SectionIntro
              title="Recently Updated"
              alignment="left"
            />
            <Link
              href="/docs/components/overview"
              className="u-text-primary u-text-decoration-none u-fw-medium"
            >
              View All
            </Link>
          </div>

          <Grid>
            {recentComponents.map((component) => (
              <GridCol key={component.id} md={6} lg={4} className="u-mb-4">
                <Card className="u-h-100 u-text-center">
                  <div className="u-d-flex u-flex-column u-h-100">
                    <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-3">
                      <h3 className="u-fs-lg u-fw-semibold u-mb-0">{component.name}</h3>
                      <Badge
                        variant="info"
                        size="sm"
                        label={`v${component.version}`}
                      />
                    </div>

                    <p className="u-text-secondary-emphasis u-mb-4 u-flex-grow-1">
                      {component.description.substring(0, 100)}...
                    </p>

                    <div className="u-d-flex u-gap-2">
                      <Badge
                        variant="primary"
                        size="sm"
                        label={component.status}
                      />
                      <Badge
                        variant="secondary"
                        size="sm"
                        label={component.category}
                      />
                    </div>
                  </div>
                </Card>
              </GridCol>
            ))}
          </Grid>
      </Block>
    </>
  );
};

export default ComponentsHomePage;

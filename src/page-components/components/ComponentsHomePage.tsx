"use client";

import React from "react";
import Link from "next/link";

import { Button, Card, Badge, Icon, Row, GridCol } from "@shohojdhara/atomix";
import { Download, BookOpen, Grid, Zap } from "lucide-react";

import { componentMetadata } from "@/data/components";
import { BreadcrumbNavigation } from "@/components/navigation/BreadcrumbNavigation";

const ComponentsHomePage: React.FC = () => {
  // Get component categories
  const categories = Array.from(
    new Set(componentMetadata.map((c) => c.category))
  );

  // Get featured components (stable status)
  const featuredComponents = componentMetadata
    .filter((c) => c.status === "stable")
    .slice(0, 6);

  // Get recently updated components
  const recentComponents = [...componentMetadata]
    .sort((b, a) => a.version.localeCompare(b.version))
    .slice(0, 6);

  return (
    <div>
      <BreadcrumbNavigation />

      {/* Hero Section */}
      <section className="u-text-center u-py-12 u-mb-12">
        <div className="u-container u-mx-auto u-px-4">
          <h1 className="u-fs-4xl u-fw-bold u-mb-4">Atomix Components</h1>
          <p className="u-text-secondary-emphasis u-mb-6 u-mx-auto u-max-w-600">
            A comprehensive library of accessible, responsive UI components
            built with React and TypeScript.
          </p>

          <div className="u-d-flex u-justify-content-center u-gap-3 u-flex-wrap">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/docs/getting-started/installation'}
            >
              <Download size={20} className="u-mr-2" />
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/docs/components/overview'}
            >
              <BookOpen size={20} className="u-mr-2" />
              Browse Components
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="u-mb-12">
        <div className="u-container u-mx-auto u-px-4">
          <Row>
            <GridCol md={4} sm={6}>
              <Card className="u-text-center">
                <div className="u-d-flex u-justify-content-center u-mb-4">
                  <Grid size={32} className="u-text-primary" />
                </div>
                <h3 className="u-fs-2xl u-fw-bold u-mb-2">{componentMetadata.length}</h3>
                <p className="u-text-secondary-emphasis u-mb-0">Components</p>
              </Card>
            </GridCol>

            <GridCol md={4} sm={6}>
              <Card className="u-text-center">
                <div className="u-d-flex u-justify-content-center u-mb-4">
                  <Icon size={32} className="u-text-success" name="Shield" />
                </div>
                <h3 className="u-fs-2xl u-fw-bold u-mb-2">
                  {componentMetadata.filter((c) => c.status === "stable").length}
                </h3>
                <p className="u-text-secondary-emphasis u-mb-0">Stable Components</p>
              </Card>
            </GridCol>

            <GridCol md={4} sm={6}>
              <Card className="u-text-center">
                <div className="u-d-flex u-justify-content-center u-mb-4">
                  <Icon size={32} className="u-text-warning" name="Star" />
                </div>
                <h3 className="u-fs-2xl u-fw-bold u-mb-2">{categories.length}</h3>
                <p className="u-text-secondary-emphasis u-mb-0">Categories</p>
              </Card>
            </GridCol>
          </Row>
        </div>
      </section>

      {/* Categories Section */}
      <section className="u-mb-12">
        <div className="u-container u-mx-auto u-px-4">
          <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-6">
            <h2 className="u-fs-3xl u-fw-bold u-mb-0">Categories</h2>
            <Link
              href="/docs/components/overview"
              className="u-text-primary u-text-decoration-none u-fw-medium"
            >
              View All
            </Link>
          </div>

          <Row>
            {categories.slice(0, 6).map((category, index) => (
              <GridCol key={index} md={4} sm={6}>
                <Card>
                  <div className="u-d-flex u-align-items-center">
                    <div className="u-bg-primary-subtle u-text-primary-emphasis u-br-md u-p-2 u-mr-3">
                      <Grid size={20} />
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
          </Row>
        </div>
      </section>

      {/* Featured Components */}
      <section className="u-mb-12">
        <div className="u-container u-mx-auto u-px-4">
          <h2 className="u-fs-3xl u-fw-bold u-mb-6">Featured Components</h2>

          <Row>
            {featuredComponents.map((component) => (
              <GridCol key={component.id} md={6} lg={4}>
                <Card className="u-h-100">
                  <div className="u-d-flex u-flex-direction-column u-h-100">
                    <div className="u-d-flex u-align-items-center u-mb-4">
                      <div className="u-bg-secondary-subtle u-text-secondary-emphasis u-br-md u-p-2 u-mr-3">
                        <Zap size={20} />
                      </div>
                      <h3 className="u-fs-lg u-fw-semibold u-mb-0">{component.name}</h3>
                    </div>

                    <p className="u-text-secondary-emphasis u-flex-grow-1 u-mb-4">
                      {component.description.substring(0, 100)}...
                    </p>

                    <div className="u-d-flex u-gap-2 u-flex-wrap u-mb-4">
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
                        onClick={() => window.location.href = `/docs/components/${component.id}`}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </GridCol>
            ))}
          </Row>
        </div>
      </section>

      {/* Recently Updated */}
      <section>
        <div className="u-container u-mx-auto u-px-4">
          <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-6">
            <h2 className="u-fs-3xl u-fw-bold u-mb-0">Recently Updated</h2>
            <Link
              href="/docs/components/overview"
              className="u-text-primary u-text-decoration-none u-fw-medium"
            >
              View All
            </Link>
          </div>

          <Row>
            {recentComponents.map((component) => (
              <GridCol key={component.id} md={6} lg={4}>
                <Card className="u-h-100">
                  <div className="u-d-flex u-flex-direction-column u-h-100">
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
          </Row>
        </div>
      </section>
    </div>
  );
};

export default ComponentsHomePage;

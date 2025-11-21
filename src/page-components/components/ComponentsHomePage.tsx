"use client";

import React from "react";
import Link from "next/link";

import { Button, Card, Badge, Icon } from "@shohojdhara/atomix";
import { Download, BookOpen, Grid, Zap } from "lucide-react";

import { componentMetadata } from "@/data/components";
import { BreadcrumbNavigation } from "@/components/navigation/BreadcrumbNavigation";
import styles from "./ComponentsHomePage.module.scss";

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
    <div className="components-home-page">
      <BreadcrumbNavigation />

      {/* Hero Section */}
      <section className="hero-section u-text-center u-py-12 u-mb-12">
        <div className="container">
          <h1 className="u-mb-4">Atomix Components</h1>
          <p
            className={`u-text-muted u-mb-6 u-mx-auto ${styles.componentsHomePage__heroDescription}`}
          >
            A comprehensive library of accessible, responsive UI components
            built with React and TypeScript.
          </p>

          <div className="u-d-flex u-justify-content-center u-gap-3 u-flex-wrap">
            <Button asChild variant="primary" size="lg">
              <Link href="/docs/getting-started/installation">
                <Download size={20} className="u-mr-2" />
                Get Started
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/docs/components/overview">
                <BookOpen size={20} className="u-mr-2" />
                Browse Components
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section u-mb-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 u-gap-6">
            <Card className="u-text-center u-p-6">
              <div className="u-d-flex u-justify-content-center u-mb-4">
                <Grid size={32} className="u-text-primary" />
              </div>
              <h3 className="u-mb-2">{componentMetadata.length}</h3>
              <p className="u-text-muted u-mb-0">Components</p>
            </Card>

            <Card className="u-text-center u-p-6">
              <div className="u-d-flex u-justify-content-center u-mb-4">
                <Icon size={32} className="u-text-success" name="Shield" />
              </div>
              <h3 className="u-mb-2">
                {componentMetadata.filter((c) => c.status === "stable").length}
              </h3>
              <p className="u-text-muted u-mb-0">Stable Components</p>
            </Card>

            <Card className="u-text-center u-p-6">
              <div className="u-d-flex u-justify-content-center u-mb-4">
                <Icon size={32} className="u-text-warning" name="Star" />
              </div>
              <h3 className="u-mb-2">{categories.length}</h3>
              <p className="u-text-muted u-mb-0">Categories</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section u-mb-12">
        <div className="container">
          <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-6">
            <h2 className="u-mb-0">Categories</h2>
            <Link
              href="/docs/components/overview"
              className="u-text-decoration-none"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 u-gap-4">
            {categories.slice(0, 6).map((category, index) => (
              <Card key={index} className="u-p-4">
                <div className="u-d-flex u-align-items-center">
                  <div className="u-bg-primary-subtle u-text-primary-emphasis u-rounded u-p-2 u-mr-3">
                    <Grid size={20} />
                  </div>
                  <div>
                    <h3 className="u-mb-1">{category}</h3>
                    <p className="u-text-muted u-mb-0 u-fs-sm">
                      {
                        componentMetadata.filter((c) => c.category === category)
                          .length
                      }{" "}
                      components
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="featured-section u-mb-12">
        <div className="container">
          <h2 className="u-mb-6">Featured Components</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 u-gap-6">
            {featuredComponents.map((component) => (
              <Card key={component.id} className="u-h-100">
                <div className="card-body u-d-flex u-flex-direction-column">
                  <div className="u-d-flex u-align-items-center u-mb-4">
                    <div className="u-bg-secondary-subtle u-text-secondary-emphasis u-rounded u-p-2 u-mr-3">
                      <Zap size={20} />
                    </div>
                    <h3 className="u-mb-0">{component.name}</h3>
                  </div>

                  <p className="u-text-muted u-flex-grow-1 u-mb-4">
                    {component.description.substring(0, 100)}...
                  </p>

                  <div className="u-d-flex u-gap-2 u-flex-wrap">
                    <Badge variant="primary" size="sm" label= {component.status}/>
                    <Badge
                      variant="secondary"
                      size="sm"
                      label={` v${component.version}`}
                    />
                  </div>

                  <div className="u-mt-4">
                    <Button
                      asChild
                      variant="primary"
                      size="sm"
                      className="u-w-100"
                    >
                      <Link href={`/docs/components/${component.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Updated */}
      <section className="recent-section">
        <div className="container">
          <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-6">
            <h2 className="u-mb-0">Recently Updated</h2>
            <Link
              href="/docs/components/overview"
              className="u-text-decoration-none"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 u-gap-6">
            {recentComponents.map((component) => (
              <Card key={component.id} className="u-h-100">
                <div className="card-body">
                  <div className="u-d-flex u-align-items-center u-mb-3">
                    <h3 className="u-mb-0">{component.name}</h3>
                    <Badge
                      variant="info"
                      size="sm"
                      className="u-ml-auto"
                      label={` v${component.version}`}
                    />
                  </div>

                  <p className="u-text-muted u-mb-4">
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentsHomePage;

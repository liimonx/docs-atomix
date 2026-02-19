"use client";

import { FC } from "react";
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Button,
} from "@shohojdhara/atomix";
import { GlassProps } from "@/types/atomix-components";
import styles from "@/styles/PageHero.module.scss";

const ResourcesContributingPage: FC = () => {
  return (
    <div>
      <Hero
        glass={
          {
            displacementScale: 30,
            blurAmount: 5,
            elasticity: 0,
            enableLiquidBlur: true,
            padding: "20px",
            cornerRadius: 30,
          } as GlassProps
        }
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Resources - Contributing"
        text="Learn how to contribute to the Atomix project and community"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Contributing to Atomix"
          text="Atomix is an open-source project and welcomes contributions from the community."
        />

        <Row className="u-mt-8">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-text-xl u-font-semibold u-mb-3">
                Getting Started
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                How to get started with contributing to Atomix.
              </p>
              <Button variant="primary" className="u-mt-4">
                View Guide
              </Button>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-text-xl u-font-semibold u-mb-3">
                Coding Standards
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                Coding standards and best practices for Atomix contributions.
              </p>
              <Button variant="primary" className="u-mt-4">
                View Standards
              </Button>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-text-xl u-font-semibold u-mb-3">
                Development Setup
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                Setting up your development environment for Atomix.
              </p>
              <Button variant="primary" className="u-mt-4">
                View Setup
              </Button>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-text-xl u-font-semibold u-mb-3">
                Reporting Issues
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                How to report bugs and request features for Atomix.
              </p>
              <Button variant="primary" className="u-mt-4">
                View Guidelines
              </Button>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

ResourcesContributingPage.displayName = "ResourcesContributingPage";

export default ResourcesContributingPage;

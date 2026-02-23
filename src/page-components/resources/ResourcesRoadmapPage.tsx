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
import styles from "@/styles/PageHero.module.scss";

const ResourcesRoadmapPage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
        title="Resources - Roadmap"
        text="Atomix project roadmap and upcoming features"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Project Roadmap"
          text="Stay up to date with upcoming features, improvements, and releases in the Atomix project."
        />

        <Row className="u-mt-8">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-text-xl u-font-semibold u-mb-3">
                Upcoming Features
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                Features planned for future releases of Atomix.
              </p>
              <Button variant="primary" className="u-mt-4">
                View Features
              </Button>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-text-xl u-font-semibold u-mb-3">
                Release Schedule
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                Planned release dates and versioning roadmap.
              </p>
              <Button variant="primary" className="u-mt-4">
                View Schedule
              </Button>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-text-xl u-font-semibold u-mb-3">
                Completed Work
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                Recently completed features and improvements.
              </p>
              <Button variant="primary" className="u-mt-4">
                View Changelog
              </Button>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-text-xl u-font-semibold u-mb-3">
                Community Feedback
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                How community feedback influences the Atomix roadmap.
              </p>
              <Button variant="primary" className="u-mt-4">
                View Feedback
              </Button>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

ResourcesRoadmapPage.displayName = "ResourcesRoadmapPage";

export default ResourcesRoadmapPage;

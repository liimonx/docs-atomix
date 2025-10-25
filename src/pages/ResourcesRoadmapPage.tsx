import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Button,
} from '@shohojdhara/atomix';

const ResourcesRoadmapPage = () => {
  return (
    <>
      <Helmet>
        <title>Resources - Roadmap - Atomix Design System</title>
        <meta
          name="description"
          content="Atomix project roadmap and upcoming features."
        />
      </Helmet>

      <Hero
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
              <h3>Upcoming Features</h3>
              <p>Features planned for future releases of Atomix.</p>
              <Button variant="primary" className="u-mt-4">
                View Features
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Release Schedule</h3>
              <p>Planned release dates and versioning roadmap.</p>
              <Button variant="primary" className="u-mt-4">
                View Schedule
              </Button>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Completed Work</h3>
              <p>Recently completed features and improvements.</p>
              <Button variant="primary" className="u-mt-4">
                View Changelog
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Community Feedback</h3>
              <p>How community feedback influences the Atomix roadmap.</p>
              <Button variant="primary" className="u-mt-4">
                View Feedback
              </Button>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default ResourcesRoadmapPage;
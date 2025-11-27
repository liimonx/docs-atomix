'use client';

import React from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Button,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';

const ResourcesRoadmapPage = () => {
  return (
    <>

      <Hero
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as GlassProps}
        className="u-pt-32 u-pb-16"
        backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
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
              <h3 className="u-fs-xl u-fw-semibold u-mb-3">Upcoming Features</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Features planned for future releases of Atomix.</p>
              <Button variant="primary" className="u-mt-4">
                View Features
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-3">Release Schedule</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Planned release dates and versioning roadmap.</p>
              <Button variant="primary" className="u-mt-4">
                View Schedule
              </Button>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-3">Completed Work</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Recently completed features and improvements.</p>
              <Button variant="primary" className="u-mt-4">
                View Changelog
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-3">Community Feedback</h3>
              <p className="u-text-secondary-emphasis u-mb-4">How community feedback influences the Atomix roadmap.</p>
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
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

const ResourcesContributingPage = () => {
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
              <h3>Getting Started</h3>
              <p>How to get started with contributing to Atomix.</p>
              <Button variant="primary" className="u-mt-4">
                View Guide
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Coding Standards</h3>
              <p>Coding standards and best practices for Atomix contributions.</p>
              <Button variant="primary" className="u-mt-4">
                View Standards
              </Button>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Development Setup</h3>
              <p>Setting up your development environment for Atomix.</p>
              <Button variant="primary" className="u-mt-4">
                View Setup
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Reporting Issues</h3>
              <p>How to report bugs and request features for Atomix.</p>
              <Button variant="primary" className="u-mt-4">
                View Guidelines
              </Button>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default ResourcesContributingPage;
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

const ResourcesContributingPage = () => {
  return (
    <>
      <Helmet>
        <title>Resources - Contributing - Atomix Design System</title>
        <meta
          name="description"
          content="Learn how to contribute to the Atomix project and community."
        />
      </Helmet>

      <Hero
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
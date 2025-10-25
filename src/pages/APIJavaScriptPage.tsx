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

const APIJavaScriptPage = () => {
  return (
    <>
      <Helmet>
        <title>API Reference - JavaScript - Atomix Design System</title>
        <meta
          name="description"
          content="Complete API reference for Atomix JavaScript classes and functions."
        />
      </Helmet>

      <Hero
        title="API Reference - JavaScript"
        text="Complete API reference for Atomix JavaScript classes and functions"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="JavaScript API Reference"
          text="Comprehensive documentation for all Atomix JavaScript classes, functions, and utilities."
        />
        
        <Row className="u-mt-8">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Core Classes</h3>
              <p>Documentation for core JavaScript classes in the Atomix library.</p>
              <Button variant="primary" className="u-mt-4">
                View Classes
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Utility Functions</h3>
              <p>Reference for utility functions provided by Atomix.</p>
              <Button variant="primary" className="u-mt-4">
                View Functions
              </Button>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Event System</h3>
              <p>Documentation for the Atomix event system and custom events.</p>
              <Button variant="primary" className="u-mt-4">
                View Events
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Configuration</h3>
              <p>Options and methods for configuring Atomix JavaScript components.</p>
              <Button variant="primary" className="u-mt-4">
                View Configuration
              </Button>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default APIJavaScriptPage;
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
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as any}
        className="u-pt-32 u-pb-16"
        backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
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
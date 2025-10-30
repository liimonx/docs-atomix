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

const APICSSPage = () => {
  return (
    <>
      <Helmet>
        <title>API Reference - CSS - Atomix Design System</title>
        <meta
          name="description"
          content="Complete API reference for Atomix CSS classes and custom properties."
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
        title="API Reference - CSS"
        text="Complete API reference for Atomix CSS classes and custom properties"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="CSS API Reference"
          text="Comprehensive documentation for all Atomix CSS classes, custom properties, and mixins."
        />
        
        <Row className="u-mt-8">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>CSS Classes</h3>
              <p>Complete reference for all CSS classes available in Atomix.</p>
              <Button variant="primary" className="u-mt-4">
                View Classes
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Custom Properties</h3>
              <p>Reference for all CSS custom properties (CSS variables) used in Atomix.</p>
              <Button variant="primary" className="u-mt-4">
                View Variables
              </Button>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Mixins & Functions</h3>
              <p>SCSS mixins and functions available for extending Atomix styles.</p>
              <Button variant="primary" className="u-mt-4">
                View Mixins
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Media Queries</h3>
              <p>Breakpoints and responsive utilities for creating adaptive designs.</p>
              <Button variant="primary" className="u-mt-4">
                View Breakpoints
              </Button>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default APICSSPage;
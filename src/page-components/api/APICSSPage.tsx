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

const APICSSPage = () => {
  return (
    <>

      <Hero
        className="u-pt-32 u-pb-16"
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
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

const ExamplesCommonPatternsPage = () => {
  return (
    <>
      <Helmet>
        <title>Examples - Common Patterns - Atomix Design System</title>
        <meta
          name="description"
          content="Common design patterns and implementation examples with Atomix components."
        />
      </Helmet>

      <Hero
        title="Examples - Common Patterns"
        text="Common design patterns and implementation examples with Atomix components"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Common Design Patterns"
          text="A collection of common design patterns implemented with Atomix components for reference and inspiration."
        />
        
        <Row className="u-mt-8">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Navigation Patterns</h3>
              <p>Common navigation patterns implemented with Atomix components.</p>
              <Button variant="primary" className="u-mt-4">
                View Examples
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Form Patterns</h3>
              <p>Best practices for form design and implementation with Atomix.</p>
              <Button variant="primary" className="u-mt-4">
                View Examples
              </Button>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Card Layouts</h3>
              <p>Different card layout patterns for various content types.</p>
              <Button variant="primary" className="u-mt-4">
                View Examples
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Dashboard Layouts</h3>
              <p>Dashboard layout patterns with data visualization components.</p>
              <Button variant="primary" className="u-mt-4">
                View Examples
              </Button>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default ExamplesCommonPatternsPage;
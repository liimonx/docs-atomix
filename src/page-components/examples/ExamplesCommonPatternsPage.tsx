'use client';

import { FC } from 'react';
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
import styles from '@/styles/PageHero.module.scss';

const ExamplesCommonPatternsPage: FC = () => {
  return (
    <div>

      <Hero
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as GlassProps}
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Examples - Common Patterns"
        text="Common design patterns and implementation examples with Atomix components"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8" container={{type: 'fluid'}}>
        <SectionIntro
          title="Common Design Patterns"
          text="A collection of common design patterns implemented with Atomix components for reference and inspiration."
        />
        
        <Row className="u-mt-8">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-3">Navigation Patterns</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Common navigation patterns implemented with Atomix components.</p>
              <Button variant="primary" className="u-mt-4">
                View Examples
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-3">Form Patterns</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Best practices for form design and implementation with Atomix.</p>
              <Button variant="primary" className="u-mt-4">
                View Examples
              </Button>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-3">Card Layouts</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Different card layout patterns for various content types.</p>
              <Button variant="primary" className="u-mt-4">
                View Examples
              </Button>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-3">Dashboard Layouts</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Dashboard layout patterns with data visualization components.</p>
              <Button variant="primary" className="u-mt-4">
                View Examples
              </Button>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

ExamplesCommonPatternsPage.displayName = 'ExamplesCommonPatternsPage';

export default ExamplesCommonPatternsPage;
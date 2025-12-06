'use client';

import { useState, useEffect } from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';

const LayoutsGridPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering glass effect on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Hero
        glass={isMounted ? {
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as GlassProps : undefined}
        className="u-pt-32 u-pb-16"
        backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
        title="Layouts Grid"
        text="Flexible and responsive grid system for creating adaptive layouts"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Grid System"
          text="The Atomix Grid System provides a powerful, flexible, and responsive layout solution built on modern CSS Grid and Flexbox technologies."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Overview</h3>
              <p className="u-text-secondary-emphasis u-mb-4">The Grid System is based on a 12-column layout with responsive breakpoints and flexible alignment options. It follows the ITCSS architecture and uses semantic class names for maximum clarity and maintainability.</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Key Features</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-3">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">📐 12-Column System</strong> - Flexible column-based layouts</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">📱 Mobile-First</strong> - Responsive design with 6 breakpoints</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">🎯 Semantic Classes</strong> - Clear, predictable class names</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">⚡ Flexbox & CSS Grid</strong> - Modern CSS technologies</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">♿ Accessible</strong> - WCAG 2.1 AA compliant</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">🎨 Customizable</strong> - CSS custom properties and SCSS variables</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Components</h3>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Container</h4>
              <p className="u-text-secondary-emphasis u-mb-2">The Container component provides responsive max-widths and centering for your content.</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`import { Container } from '@shohojdhara/atomix';

<Container>
  <Row>
    <GridCol md={6}>Content</GridCol>
    <GridCol md={6}>Content</GridCol>
  </Row>
</Container>`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Row</h4>
              <p className="u-text-secondary-emphasis u-mb-2">The Row component wraps columns and provides negative margins to counteract column padding.</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`import { Row } from '@shohojdhara/atomix';

<Row>
  <GridCol md={4}>Content</GridCol>
  <GridCol md={4}>Content</GridCol>
  <GridCol md={4}>Content</GridCol>
</Row>`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">GridCol</h4>
              <p className="u-text-secondary-emphasis u-mb-2">The GridCol component represents individual columns within a row.</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`import { GridCol } from '@shohojdhara/atomix';

<Row>
  <GridCol xs={12} sm={6} md={4} lg={3}>
    Responsive column
  </GridCol>
</Row>`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Responsive Breakpoints</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Atomix grid system includes 6 responsive breakpoints:</p>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">xs</strong> - Extra small (0px and up)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">sm</strong> - Small (576px and up)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">md</strong> - Medium (768px and up)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">lg</strong> - Large (992px and up)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">xl</strong> - Extra large (1200px and up)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">xxl</strong> - Extra extra large (1400px and up)</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Column Options</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Grid columns can be customized with various props:</p>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">span</strong> - Column span (1-12)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">offset</strong> - Column offset</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">order</strong> - Column order</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">align</strong> - Column alignment</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default LayoutsGridPage;
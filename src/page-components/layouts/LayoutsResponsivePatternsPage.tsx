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

const LayoutsResponsivePatternsPage = () => {
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
        title="Layouts Responsive Patterns"
        text="Responsive design patterns and techniques for adaptive layouts"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8" container={{type: 'fluid'}}>
        <SectionIntro
          title="Responsive Design Patterns"
          text="This guide covers common responsive design patterns and best practices using the Atomix Layout system. Learn how to create flexible, accessible layouts that work beautifully across all devices and screen sizes."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Overview</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Responsive design patterns are reusable solutions for common layout challenges. These patterns have been tested across devices and proven to provide excellent user experiences while maintaining accessibility and performance.</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Key Principles</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-3">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">📱 Mobile-First</strong> - Start with mobile and enhance for larger screens</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">🎯 Progressive Enhancement</strong> - Layer features based on device capabilities</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">⚖️ Flexible Grids</strong> - Use relative units and flexible layouts</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">🖼️ Responsive Media</strong> - Images and media that adapt to containers</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">🎨 Consistent Spacing</strong> - Maintain visual hierarchy across breakpoints</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Common Layout Patterns</h3>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">1. Sidebar Layout</h4>
              <p className="u-text-secondary-emphasis u-mb-2">Perfect for blogs, documentation, and admin dashboards.</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`function SidebarLayout({ children, sidebar }) {
  return (
    <Container>
      <Grid>
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <GridCol xs={12} lg={3} className="d-none d-lg-block">
          <aside className="sidebar">
            {sidebar}
          </aside>
        </GridCol>
        
        {/* Main content */}
        <GridCol xs={12} lg={9}>
          <main className="main-content">
            {children}
          </main>
        </GridCol>
      </Grid>
    </Container>
  );
}`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">2. Card Grid Layout</h4>
              <p className="u-text-secondary-emphasis u-mb-2">Ideal for dashboards, galleries, and product listings.</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`function CardGridLayout({ cards }) {
  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <GridCol xs={12} sm={6} md={4} key={index}>
            <Card>
              {card.content}
            </Card>
          </GridCol>
        ))}
      </Row>
    </Container>
  );
}`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Breakpoint Strategy</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Atomix uses a mobile-first approach with 6 breakpoints:</p>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2 u-mb-4">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">xs</strong> - Extra small (0px and up)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">sm</strong> - Small (576px and up)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">md</strong> - Medium (768px and up)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">lg</strong> - Large (992px and up)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">xl</strong> - Extra large (1200px and up)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">xxl</strong> - Extra extra large (1400px and up)</li>
              </ul>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Usage Example</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`<GridCol xs={12} sm={6} md={4} lg={3}>
  Responsive column
</GridCol>`}
              </pre>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Responsive Media</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Ensure images and media adapt to their containers:</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Images</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`<img 
  src="image.jpg" 
  alt="Description"
  className="u-w-100 u-h-auto"
/>`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Videos</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`<div className="u-ratio u-ratio-16x9">
  <iframe 
    src="video.mp4"
    className="u-ratio-item"
  />
</div>`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Typography</h4>
              <p className="u-text-secondary-emphasis u-mb-2">Use responsive font sizes:</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`.u-font-size-responsive {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}`}
              </pre>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default LayoutsResponsivePatternsPage;
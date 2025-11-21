'use client';

import React from 'react';
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
        title="Layouts Responsive Patterns"
        text="Responsive design patterns and techniques for adaptive layouts"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Responsive Design Patterns"
          text="This guide covers common responsive design patterns and best practices using the Atomix Layout system. Learn how to create flexible, accessible layouts that work beautifully across all devices and screen sizes."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Overview</h3>
              <p>Responsive design patterns are reusable solutions for common layout challenges. These patterns have been tested across devices and proven to provide excellent user experiences while maintaining accessibility and performance.</p>
              
              <h4 className="u-mt-3">Key Principles</h4>
              <ul>
                <li><strong>📱 Mobile-First</strong> - Start with mobile and enhance for larger screens</li>
                <li><strong>🎯 Progressive Enhancement</strong> - Layer features based on device capabilities</li>
                <li><strong>⚖️ Flexible Grids</strong> - Use relative units and flexible layouts</li>
                <li><strong>🖼️ Responsive Media</strong> - Images and media that adapt to containers</li>
                <li><strong>🎨 Consistent Spacing</strong> - Maintain visual hierarchy across breakpoints</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Common Layout Patterns</h3>
              
              <h4 className="u-mt-3">1. Sidebar Layout</h4>
              <p>Perfect for blogs, documentation, and admin dashboards.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
              
              <h4 className="u-mt-3">2. Card Grid Layout</h4>
              <p>Ideal for dashboards, galleries, and product listings.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
              <h3>Breakpoint Strategy</h3>
              <p>Atomix uses a mobile-first approach with 6 breakpoints:</p>
              <ul>
                <li><strong>xs</strong> - Extra small (0px and up)</li>
                <li><strong>sm</strong> - Small (576px and up)</li>
                <li><strong>md</strong> - Medium (768px and up)</li>
                <li><strong>lg</strong> - Large (992px and up)</li>
                <li><strong>xl</strong> - Extra large (1200px and up)</li>
                <li><strong>xxl</strong> - Extra extra large (1400px and up)</li>
              </ul>
              
              <h4 className="u-mt-3">Usage Example</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`<GridCol xs={12} sm={6} md={4} lg={3}>
  Responsive column
</GridCol>`}
              </pre>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Responsive Media</h3>
              <p>Ensure images and media adapt to their containers:</p>
              
              <h4 className="u-mt-3">Images</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`<img 
  src="image.jpg" 
  alt="Description"
  className="u-w-100 u-h-auto"
/>`}
              </pre>
              
              <h4 className="u-mt-3">Videos</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`<div className="u-ratio u-ratio-16x9">
  <iframe 
    src="video.mp4"
    className="u-ratio-item"
  />
</div>`}
              </pre>
              
              <h4 className="u-mt-3">Typography</h4>
              <p>Use responsive font sizes:</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';

const StylesAPIReferencePage = () => {
  return (
    <>
      <Helmet>
        <title>Styles API Reference - Atomix Design System</title>
        <meta
          name="description"
          content="Complete technical reference for the Atomix CSS API and class names."
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
        title="Styles API Reference"
        text="Complete technical reference for Atomix CSS classes and custom properties"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="API Documentation"
          text="Comprehensive reference for all CSS classes, custom properties, and mixins available in Atomix."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>SCSS Variables</h3>
              <p>Atomix provides a comprehensive set of SCSS variables for customization:</p>
              
              <h4 className="u-mt-3">Color Variables</h4>
              <p>Primary color scale:</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`$primary-1: #f2e8fd;   // Lightest tint
$primary-2: #e4d0fa;   // Very light
$primary-3: #d0b2f5;   // Light
$primary-4: #b88cef;   // Light-medium
$primary-5: #9c63e9;   // Medium-light
$primary-6: #7c3aed;   // Base primary
$primary-7: #6425ca;   // Medium-dark
$primary-8: #501ba6;   // Dark
$primary-9: #3c1583;   // Very dark
$primary-10: #2a0e60;  // Darkest shade`}
              </pre>
              
              <h4 className="u-mt-3">Semantic Color Scales</h4>
              <p>Additional color scales for different purposes:</p>
              <ul>
                <li><code>$red-1</code> through <code>$red-10</code></li>
                <li><code>$green-1</code> through <code>$green-10</code></li>
                <li><code>$yellow-1</code> through <code>$yellow-10</code></li>
                <li><code>$blue-1</code> through <code>$blue-10</code></li>
                <li><code>$gray-1</code> through <code>$gray-10</code></li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>SCSS Mixins</h3>
              <p>Reusable mixins for common styling patterns:</p>
              
              <h4 className="u-mt-3">Responsive Breakpoints</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`@include media-breakpoint-up(sm) {
  // Styles for small and up
}

@include media-breakpoint-between(md, lg) {
  // Styles for medium to large
}`}
              </pre>
              
              <h4 className="u-mt-3">Focus Styles</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`@include focus-ring();`}
              </pre>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>SCSS Functions</h3>
              <p>Utility functions for working with design tokens:</p>
              
              <h4 className="u-mt-3">Color Functions</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`color('primary', 6);     // Get primary color
color('gray', 8);        // Get gray color

tint('primary', 20%);    // Lighten color
shade('primary', 20%);   // Darken color`}
              </pre>
              
              <h4 className="u-mt-3">Spacing Functions</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`space(4);  // Get 1rem (4 * 0.25rem)
space(8);  // Get 2rem (8 * 0.25rem)`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>CSS Custom Properties</h3>
              <p>Runtime theming with CSS custom properties:</p>
              
              <h4 className="u-mt-3">Color Properties</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`:root {
  --atomix-primary: #7c3aed;
  --atomix-primary-6: #7c3aed;
  --atomix-primary-9: #3c1583;
  
  --atomix-success: #10b981;
  --atomix-warning: #f59e0b;
  --atomix-error: #ef4444;
}`}
              </pre>
              
              <h4 className="u-mt-3">Theming</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`// Switch themes with JavaScript
document.documentElement.setAttribute('data-theme', 'dark');`}
              </pre>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default StylesAPIReferencePage;
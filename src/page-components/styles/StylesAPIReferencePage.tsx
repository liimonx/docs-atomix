'use client';

import React, { useState, useEffect } from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';

const StylesAPIReferencePage = () => {
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
          children: null,
        } as GlassProps : undefined}
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
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">SCSS Variables</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Atomix provides a comprehensive set of SCSS variables for customization:</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Color Variables</h4>
              <p className="u-text-secondary-emphasis u-mb-2">Primary color scale:</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
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
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Semantic Color Scales</h4>
              <p className="u-text-secondary-emphasis u-mb-2">Additional color scales for different purposes:</p>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">$red-1</code> through <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">$red-10</code></li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">$green-1</code> through <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">$green-10</code></li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">$yellow-1</code> through <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">$yellow-10</code></li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">$blue-1</code> through <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">$blue-10</code></li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">$gray-1</code> through <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">$gray-10</code></li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">SCSS Mixins</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Reusable mixins for common styling patterns:</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Responsive Breakpoints</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
{`@include media-breakpoint-up(sm) {
  // Styles for small and up
}

@include media-breakpoint-between(md, lg) {
  // Styles for medium to large
}`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Focus Styles</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
{`@include focus-ring();`}
              </pre>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">SCSS Functions</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Utility functions for working with design tokens:</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Color Functions</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
{`color('primary', 6);     // Get primary color
color('gray', 8);        // Get gray color

tint('primary', 20%);    // Lighten color
shade('primary', 20%);   // Darken color`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Spacing Functions</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
{`space(4);  // Get 1rem (4 * 0.25rem)
space(8);  // Get 2rem (8 * 0.25rem)`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">CSS Custom Properties</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Runtime theming with CSS custom properties:</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Color Properties</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
{`:root {
  --atomix-primary: #7c3aed;
  --atomix-primary-6: #7c3aed;
  --atomix-primary-9: #3c1583;
  
  --atomix-success: #10b981;
  --atomix-warning: #f59e0b;
  --atomix-error: #ef4444;
}`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Theming</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
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

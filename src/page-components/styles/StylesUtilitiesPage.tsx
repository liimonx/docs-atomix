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

const StylesUtilitiesPage = () => {
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
        title="Styles Utilities"
        text="Complete utility class reference for the Atomix CSS framework"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Utility Classes"
          text="Atomix provides a comprehensive set of utility classes for rapid UI development. These classes follow a consistent naming convention and cover spacing, layout, typography, colors, and more."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Naming Convention</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Atomix utilities follow a consistent pattern:</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`u-{property}-{value}
u-{property}-{breakpoint}-{value}`}
              </pre>
              
              <p className="u-text-secondary-emphasis u-mt-3 u-mb-2">Examples:</p>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-m-4</code> - Margin 1rem (4 * 0.25rem)</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-p-8</code> - Padding 2rem (8 * 0.25rem)</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-text-center</code> - Center text alignment</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-d-flex</code> - Display flex</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-justify-content-center</code> - Justify content center</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Spacing Utilities</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Margin and padding utilities with a consistent scale (0.25rem increments):</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Margin Classes</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`.u-m-0      /* 0 */
.u-m-1      /* 0.25rem */
.u-m-2      /* 0.5rem */
.u-m-3      /* 0.75rem */
.u-m-4      /* 1rem */
.u-m-5      /* 1.25rem */
.u-m-6      /* 1.5rem */
.u-m-8      /* 2rem */
.u-m-10     /* 2.5rem */
.u-m-12     /* 3rem */`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Specific Sides</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-mt-4</code> - margin-top</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-me-6</code> - margin-end (right in LTR)</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-mb-2</code> - margin-bottom</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-ms-8</code> - margin-start (left in LTR)</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Layout Utilities</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Display and flexbox utilities:</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Display</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2 u-mb-4">
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-d-none</code> - Display none</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-d-block</code> - Display block</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-d-inline</code> - Display inline</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-d-inline-block</code> - Display inline-block</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-d-flex</code> - Display flex</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-d-grid</code> - Display grid</li>
              </ul>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Flexbox</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-d-flex</code> - Display flex</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-flex-direction-column</code> - Flex direction column</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-justify-content-center</code> - Justify content center</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-align-items-center</code> - Align items center</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-flex-wrap</code> - Flex wrap</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Typography Utilities</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Text styling utilities:</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Font Size</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2 u-mb-4">
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-font-size-xs</code> - Extra small text</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-font-size-sm</code> - Small text</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-font-size-base</code> - Base text size</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-font-size-lg</code> - Large text</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-font-size-xl</code> - Extra large text</li>
              </ul>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Text Alignment</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-text-left</code> - Left align text</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-text-center</code> - Center align text</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-text-right</code> - Right align text</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-text-justify</code> - Justify text</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Color Utilities</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Text and background color utilities:</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Text Colors</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2 u-mb-4">
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-text-primary</code> - Primary text color</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-text-secondary</code> - Secondary text color</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-text-success</code> - Success text color</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-text-warning</code> - Warning text color</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-text-error</code> - Error text color</li>
              </ul>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Background Colors</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-bg-primary</code> - Primary background color</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-bg-secondary</code> - Secondary background color</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-bg-success</code> - Success background color</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-bg-warning</code> - Warning background color</li>
                <li className="u-text-secondary-emphasis"><code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">.u-bg-error</code> - Error background color</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default StylesUtilitiesPage;
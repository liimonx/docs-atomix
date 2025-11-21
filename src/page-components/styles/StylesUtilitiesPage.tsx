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

const StylesUtilitiesPage = () => {
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
              <h3>Naming Convention</h3>
              <p>Atomix utilities follow a consistent pattern:</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`u-{property}-{value}
u-{property}-{breakpoint}-{value}`}
              </pre>
              
              <p className="u-mt-3">Examples:</p>
              <ul>
                <li><code>.u-m-4</code> - Margin 1rem (4 * 0.25rem)</li>
                <li><code>.u-p-8</code> - Padding 2rem (8 * 0.25rem)</li>
                <li><code>.u-text-center</code> - Center text alignment</li>
                <li><code>.u-d-flex</code> - Display flex</li>
                <li><code>.u-justify-content-center</code> - Justify content center</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Spacing Utilities</h3>
              <p>Margin and padding utilities with a consistent scale (0.25rem increments):</p>
              
              <h4 className="u-mt-3">Margin Classes</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
              
              <h4 className="u-mt-3">Specific Sides</h4>
              <ul>
                <li><code>.u-mt-4</code> - margin-top</li>
                <li><code>.u-me-6</code> - margin-end (right in LTR)</li>
                <li><code>.u-mb-2</code> - margin-bottom</li>
                <li><code>.u-ms-8</code> - margin-start (left in LTR)</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Layout Utilities</h3>
              <p>Display and flexbox utilities:</p>
              
              <h4 className="u-mt-3">Display</h4>
              <ul>
                <li><code>.u-d-none</code> - Display none</li>
                <li><code>.u-d-block</code> - Display block</li>
                <li><code>.u-d-inline</code> - Display inline</li>
                <li><code>.u-d-inline-block</code> - Display inline-block</li>
                <li><code>.u-d-flex</code> - Display flex</li>
                <li><code>.u-d-grid</code> - Display grid</li>
              </ul>
              
              <h4 className="u-mt-3">Flexbox</h4>
              <ul>
                <li><code>.u-d-flex</code> - Display flex</li>
                <li><code>.u-flex-direction-column</code> - Flex direction column</li>
                <li><code>.u-justify-content-center</code> - Justify content center</li>
                <li><code>.u-align-items-center</code> - Align items center</li>
                <li><code>.u-flex-wrap</code> - Flex wrap</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Typography Utilities</h3>
              <p>Text styling utilities:</p>
              
              <h4 className="u-mt-3">Font Size</h4>
              <ul>
                <li><code>.u-font-size-xs</code> - Extra small text</li>
                <li><code>.u-font-size-sm</code> - Small text</li>
                <li><code>.u-font-size-base</code> - Base text size</li>
                <li><code>.u-font-size-lg</code> - Large text</li>
                <li><code>.u-font-size-xl</code> - Extra large text</li>
              </ul>
              
              <h4 className="u-mt-3">Text Alignment</h4>
              <ul>
                <li><code>.u-text-left</code> - Left align text</li>
                <li><code>.u-text-center</code> - Center align text</li>
                <li><code>.u-text-right</code> - Right align text</li>
                <li><code>.u-text-justify</code> - Justify text</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Color Utilities</h3>
              <p>Text and background color utilities:</p>
              
              <h4 className="u-mt-3">Text Colors</h4>
              <ul>
                <li><code>.u-text-primary</code> - Primary text color</li>
                <li><code>.u-text-secondary</code> - Secondary text color</li>
                <li><code>.u-text-success</code> - Success text color</li>
                <li><code>.u-text-warning</code> - Warning text color</li>
                <li><code>.u-text-error</code> - Error text color</li>
              </ul>
              
              <h4 className="u-mt-3">Background Colors</h4>
              <ul>
                <li><code>.u-bg-primary</code> - Primary background color</li>
                <li><code>.u-bg-secondary</code> - Secondary background color</li>
                <li><code>.u-bg-success</code> - Success background color</li>
                <li><code>.u-bg-warning</code> - Warning background color</li>
                <li><code>.u-bg-error</code> - Error background color</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default StylesUtilitiesPage;
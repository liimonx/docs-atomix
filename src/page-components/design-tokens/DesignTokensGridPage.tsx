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

const DesignTokensGridPage = () => {
  return (
    <>

      <Hero
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          padding: "20px",
          cornerRadius: 30,
        } as GlassProps}
        className="u-pt-32 u-pb-16"
        backgroundImageSrc="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Grid System"
        text="Responsive grid design tokens for flexible layouts"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Grid System Design Tokens"
          text="Atomix uses a flexible 12-column grid system with responsive breakpoints and customizable gutters. These design tokens provide the foundation for creating consistent, responsive layouts across your application."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Grid Breakpoints</h3>
              <p>The grid system uses the following breakpoints for responsive design:</p>
              
              <div className="u-mt-4">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--atomix-border)' }}>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Breakpoint</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Token</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Value</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}>Extra Small</td>
                      <td style={{ padding: '12px' }}><code>--grid-breakpoint-xs</code></td>
                      <td style={{ padding: '12px' }}><code>0px</code></td>
                      <td style={{ padding: '12px' }}>Mobile devices</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}>Small</td>
                      <td style={{ padding: '12px' }}><code>--grid-breakpoint-sm</code></td>
                      <td style={{ padding: '12px' }}><code>576px</code></td>
                      <td style={{ padding: '12px' }}>Small tablets</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}>Medium</td>
                      <td style={{ padding: '12px' }}><code>--grid-breakpoint-md</code></td>
                      <td style={{ padding: '12px' }}><code>768px</code></td>
                      <td style={{ padding: '12px' }}>Tablets</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}>Large</td>
                      <td style={{ padding: '12px' }}><code>--grid-breakpoint-lg</code></td>
                      <td style={{ padding: '12px' }}><code>992px</code></td>
                      <td style={{ padding: '12px' }}>Desktops</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}>Extra Large</td>
                      <td style={{ padding: '12px' }}><code>--grid-breakpoint-xl</code></td>
                      <td style={{ padding: '12px' }}><code>1200px</code></td>
                      <td style={{ padding: '12px' }}>Large desktops</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px' }}>Extra Extra Large</td>
                      <td style={{ padding: '12px' }}><code>--grid-breakpoint-xxl</code></td>
                      <td style={{ padding: '12px' }}><code>1400px</code></td>
                      <td style={{ padding: '12px' }}>Extra large screens</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Grid Columns</h3>
              <p>The grid system uses 12 columns by default:</p>
              
              <div className="u-mt-3">
                <code style={{ display: 'block', padding: '12px', background: 'var(--atomix-bg-secondary)', borderRadius: '4px' }}>
                  --grid-columns: 12;
                </code>
              </div>
              
              <p className="u-mt-3">Each column spans a fraction of the container width:</p>
              <ul>
                <li>1 column = 8.333% width</li>
                <li>6 columns = 50% width</li>
                <li>12 columns = 100% width</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Grid Gutters</h3>
              <p>Gutters define the spacing between columns:</p>
              
              <div className="u-mt-3">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--atomix-border)' }}>
                      <th style={{ padding: '8px', textAlign: 'left' }}>Token</th>
                      <th style={{ padding: '8px', textAlign: 'left' }}>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '8px' }}><code>--grid-gutter-xs</code></td>
                      <td style={{ padding: '8px' }}><code>8px</code></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '8px' }}><code>--grid-gutter-sm</code></td>
                      <td style={{ padding: '8px' }}><code>12px</code></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '8px' }}><code>--grid-gutter-md</code></td>
                      <td style={{ padding: '8px' }}><code>16px</code></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '8px' }}><code>--grid-gutter-lg</code></td>
                      <td style={{ padding: '8px' }}><code>24px</code></td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px' }}><code>--grid-gutter-xl</code></td>
                      <td style={{ padding: '8px' }}><code>32px</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Container Widths</h3>
              <p>Maximum container widths at each breakpoint:</p>
              
              <div className="u-mt-4">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--atomix-border)' }}>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Token</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Value</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}><code>--container-max-width-sm</code></td>
                      <td style={{ padding: '12px' }}><code>540px</code></td>
                      <td style={{ padding: '12px' }}>Small devices</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}><code>--container-max-width-md</code></td>
                      <td style={{ padding: '12px' }}><code>720px</code></td>
                      <td style={{ padding: '12px' }}>Medium devices</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}><code>--container-max-width-lg</code></td>
                      <td style={{ padding: '12px' }}><code>960px</code></td>
                      <td style={{ padding: '12px' }}>Large devices</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}><code>--container-max-width-xl</code></td>
                      <td style={{ padding: '12px' }}><code>1140px</code></td>
                      <td style={{ padding: '12px' }}>Extra large devices</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px' }}><code>--container-max-width-xxl</code></td>
                      <td style={{ padding: '12px' }}><code>1320px</code></td>
                      <td style={{ padding: '12px' }}>Extra extra large devices</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Usage Example</h3>
              <p>Using grid tokens in your custom CSS:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`/* Custom responsive layout */
.my-container {
  max-width: var(--container-max-width-lg);
  margin: 0 auto;
  padding: 0 var(--grid-gutter-md);
}

/* Responsive columns */
@media (min-width: var(--grid-breakpoint-md)) {
  .my-column {
    width: calc(100% / var(--grid-columns) * 6);
    padding: 0 var(--grid-gutter-md);
  }
}

@media (min-width: var(--grid-breakpoint-lg)) {
  .my-column {
    width: calc(100% / var(--grid-columns) * 4);
    padding: 0 var(--grid-gutter-lg);
  }
}`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Visual Example</h3>
              <p className="u-mb-4">Here's a live example of the 12-column grid system:</p>
              
              <div style={{ border: '1px solid var(--atomix-border)', padding: '16px', borderRadius: '8px' }}>
                <Row>
                  {[...Array(12)].map((_, i) => (
                    <GridCol key={i} xs={1}>
                      <div style={{ 
                        background: 'var(--atomix-brand-bg-subtle)', 
                        padding: '8px', 
                        textAlign: 'center',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}>
                        {i + 1}
                      </div>
                    </GridCol>
                  ))}
                </Row>
                
                <Row className="u-mt-3">
                  <GridCol xs={6}>
                    <div style={{ 
                      background: 'var(--atomix-brand-bg-subtle)', 
                      padding: '16px', 
                      textAlign: 'center',
                      borderRadius: '4px'
                    }}>
                      6 columns
                    </div>
                  </GridCol>
                  <GridCol xs={6}>
                    <div style={{ 
                      background: 'var(--atomix-brand-bg-subtle)', 
                      padding: '16px', 
                      textAlign: 'center',
                      borderRadius: '4px'
                    }}>
                      6 columns
                    </div>
                  </GridCol>
                </Row>
                
                <Row className="u-mt-3">
                  <GridCol xs={4}>
                    <div style={{ 
                      background: 'var(--atomix-brand-bg-subtle)', 
                      padding: '16px', 
                      textAlign: 'center',
                      borderRadius: '4px'
                    }}>
                      4 columns
                    </div>
                  </GridCol>
                  <GridCol xs={4}>
                    <div style={{ 
                      background: 'var(--atomix-brand-bg-subtle)', 
                      padding: '16px', 
                      textAlign: 'center',
                      borderRadius: '4px'
                    }}>
                      4 columns
                    </div>
                  </GridCol>
                  <GridCol xs={4}>
                    <div style={{ 
                      background: 'var(--atomix-brand-bg-subtle)', 
                      padding: '16px', 
                      textAlign: 'center',
                      borderRadius: '4px'
                    }}>
                      4 columns
                    </div>
                  </GridCol>
                </Row>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default DesignTokensGridPage;


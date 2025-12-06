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

const LayoutsPerformancePage = () => {
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
        title="Layouts Performance"
        text="Optimizing layout performance and rendering efficiency"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Performance Optimization"
          text="This guide covers performance optimization strategies for Atomix Layout components, from basic optimization techniques to advanced performance monitoring and troubleshooting."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Overview</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Layout performance is crucial for user experience. Poor layout performance can cause:</p>
              
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-3 u-mb-4">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Layout Shifts (CLS)</strong> - Visual instability as content moves</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Slow Rendering</strong> - Delayed paint and layout operations</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Janky Animations</strong> - Inconsistent frame rates</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Memory Leaks</strong> - Accumulating DOM nodes and event listeners</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Bundle Bloat</strong> - Unnecessary CSS and JavaScript</li>
              </ul>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Key Metrics</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Cumulative Layout Shift (CLS)</strong> - Visual stability score</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">First Contentful Paint (FCP)</strong> - Time to first rendered content</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Largest Contentful Paint (LCP)</strong> - Time to largest content element</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Time to Interactive (TTI)</strong> - Time until page is fully interactive</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Grid System Performance</h3>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Efficient Column Calculations</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`// ❌ Avoid: Expensive calculations on every render
function SlowGrid({ items }) {
  const getColumnSize = (index) => {
    // Complex calculation on every render
    return Math.floor(12 / Math.sqrt(items.length)) || 1;
  };

  return (
    <Grid>
      {items.map((item, index) => (
        <GridCol key={item.id} md={getColumnSize(index)}>
          {item.content}
        </GridCol>
      ))}
    </Grid>
  );
}

// ✅ Better: Memoized calculations
function OptimizedGrid({ items }) {
  const columnSize = useMemo(() => {
    return Math.floor(12 / Math.sqrt(items.length)) || 1;
  }, [items.length]);

  return (
    <Grid>
      {items.map((item) => (
        <GridCol key={item.id} md={columnSize}>
          {item.content}
        </GridCol>
      ))}
    </Grid>
  );
}`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Minimizing Layout Shifts</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Strategies to reduce Cumulative Layout Shift (CLS):</p>
              
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2 u-mb-4">
                <li className="u-text-secondary-emphasis">• Set explicit dimensions on images and media</li>
                <li className="u-text-secondary-emphasis">• Reserve space for dynamic content</li>
                <li className="u-text-secondary-emphasis">• Avoid inserting content above existing content</li>
                <li className="u-text-secondary-emphasis">• Use CSS aspect ratio for responsive media</li>
                <li className="u-text-secondary-emphasis">• Preload critical fonts</li>
              </ul>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Example: Image with Aspect Ratio</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`<div className="u-ratio u-ratio-16x9">
  <img 
    src="image.jpg" 
    alt="Description"
    className="u-ratio-item"
    loading="lazy"
  />
</div>`}
              </pre>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Virtualization</h3>
              <p className="u-text-secondary-emphasis u-mb-4">For large datasets, use virtualization to render only visible items:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`import { VirtualizedGrid } from '@shohojdhara/atomix';

<VirtualizedGrid
  items={largeDataset}
  itemHeight={200}
  renderItem={(item) => (
    <GridCol md={4}>
      <Card>{item.content}</Card>
    </GridCol>
  )}
/>`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Benefits</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis">• Reduced DOM nodes</li>
                <li className="u-text-secondary-emphasis">• Lower memory usage</li>
                <li className="u-text-secondary-emphasis">• Faster initial render</li>
                <li className="u-text-secondary-emphasis">• Improved scrolling performance</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">CSS Optimization</h3>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Critical CSS</h4>
              <p className="u-text-secondary-emphasis u-mb-2">Inline critical CSS for above-the-fold content:</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`<style>
  /* Inline critical layout styles */
  .container { max-width: 1200px; margin: 0 auto; }
  .row { display: flex; flex-wrap: wrap; }
  .col { flex: 1; padding: 0.75rem; }
</style>`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">CSS Containment</h4>
              <p className="u-text-secondary-emphasis u-mb-2">Use CSS containment to isolate expensive layout calculations:</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`.expensive-component {
  contain: layout style paint;
}`}
              </pre>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default LayoutsPerformancePage;
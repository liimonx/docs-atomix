import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';

const LayoutsPerformancePage = () => {
  return (
    <>
      <Helmet>
        <title>Layouts Performance - Atomix Design System</title>
        <meta
          name="description"
          content="Optimizing layout performance with Atomix components and best practices."
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
              <h3>Overview</h3>
              <p>Layout performance is crucial for user experience. Poor layout performance can cause:</p>
              
              <ul>
                <li><strong>Layout Shifts (CLS)</strong> - Visual instability as content moves</li>
                <li><strong>Slow Rendering</strong> - Delayed paint and layout operations</li>
                <li><strong>Janky Animations</strong> - Inconsistent frame rates</li>
                <li><strong>Memory Leaks</strong> - Accumulating DOM nodes and event listeners</li>
                <li><strong>Bundle Bloat</strong> - Unnecessary CSS and JavaScript</li>
              </ul>
              
              <h4 className="u-mt-3">Key Metrics</h4>
              <ul>
                <li><strong>Cumulative Layout Shift (CLS)</strong> - Visual stability score</li>
                <li><strong>First Contentful Paint (FCP)</strong> - Time to first rendered content</li>
                <li><strong>Largest Contentful Paint (LCP)</strong> - Time to largest content element</li>
                <li><strong>Time to Interactive (TTI)</strong> - Time until page is fully interactive</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Grid System Performance</h3>
              
              <h4 className="u-mt-3">Efficient Column Calculations</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
              <h3>Minimizing Layout Shifts</h3>
              <p>Strategies to reduce Cumulative Layout Shift (CLS):</p>
              
              <ul>
                <li>Set explicit dimensions on images and media</li>
                <li>Reserve space for dynamic content</li>
                <li>Avoid inserting content above existing content</li>
                <li>Use CSS aspect ratio for responsive media</li>
                <li>Preload critical fonts</li>
              </ul>
              
              <h4 className="u-mt-3">Example: Image with Aspect Ratio</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
              <h3>Virtualization</h3>
              <p>For large datasets, use virtualization to render only visible items:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
              
              <h4 className="u-mt-3">Benefits</h4>
              <ul>
                <li>Reduced DOM nodes</li>
                <li>Lower memory usage</li>
                <li>Faster initial render</li>
                <li>Improved scrolling performance</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>CSS Optimization</h3>
              
              <h4 className="u-mt-3">Critical CSS</h4>
              <p>Inline critical CSS for above-the-fold content:</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`<style>
  /* Inline critical layout styles */
  .container { max-width: 1200px; margin: 0 auto; }
  .row { display: flex; flex-wrap: wrap; }
  .col { flex: 1; padding: 0.75rem; }
</style>`}
              </pre>
              
              <h4 className="u-mt-3">CSS Containment</h4>
              <p>Use CSS containment to isolate expensive layout calculations:</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
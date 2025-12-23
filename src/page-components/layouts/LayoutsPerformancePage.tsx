'use client';

import { useState, useEffect, FC } from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Icon,
  Button,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';
import styles from '@/styles/PageHero.module.scss';
import pageStyles from './LayoutsPerformancePage.module.scss';
import Link from 'next/link';
import { EnhancedCodeBlock } from '@/components/showcase/EnhancedCodeBlock';

const LayoutsPerformancePage: FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering glass effect on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const glass: GlassProps | undefined = isMounted ? {
    displacementScale: 30,
    blurAmount: 5,
    elasticity: 0,
    enableLiquidBlur: true,
    padding: "20px",
    cornerRadius: 30,
    children: null,
  } : undefined;

  const performanceIssues = [
    {
      icon: <Icon name="WaveTriangle" size="lg" />,
      title: "Layout Shifts (CLS)",
      description: "Visual instability as content moves",
      color: "error",
    },
    {
      icon: <Icon name="Gauge" size="lg" />,
      title: "Slow Rendering",
      description: "Delayed paint and layout operations",
      color: "warning",
    },
    {
      icon: <Icon name="ChartLine" size="lg" />,
      title: "Janky Animations",
      description: "Inconsistent frame rates",
      color: "secondary",
    },
    {
      icon: <Icon name="Cpu" size="lg" />,
      title: "Memory Leaks",
      description: "Accumulating DOM nodes and event listeners",
      color: "error",
    },
    {
      icon: <Icon name="Stack" size="lg" />,
      title: "Bundle Bloat",
      description: "Unnecessary CSS and JavaScript",
      color: "warning",
    },
  ];

  const performanceMetrics = [
    {
      icon: <Icon name="Target" size="lg" />,
      title: "Cumulative Layout Shift (CLS)",
      description: "Visual stability score",
      color: "primary",
    },
    {
      icon: <Icon name="ChartLine" size="lg" />,
      title: "First Contentful Paint (FCP)",
      description: "Time to first rendered content",
      color: "success",
    },
    {
      icon: <Icon name="ChartLine" size="lg" />,
      title: "Largest Contentful Paint (LCP)",
      description: "Time to largest content element",
      color: "warning",
    },
    {
      icon: <Icon name="Clock" size="lg" />,
      title: "Time to Interactive (TTI)",
      description: "Time until page is fully interactive",
      color: "secondary",
    },
  ];

  return (
    <div>
      <Hero
        glass={glass}
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Layouts Performance"
        subtitle="Optimization Strategies"
        text="Learn how to optimize Atomix layout components for maximum performance. From basic optimization techniques to advanced performance monitoring and troubleshooting."
        alignment="center"
        showOverlay={true}
        fullViewportHeight={false}
        contentWidth="900px"
        actions={
          <div className={styles.pageHero__actions}>
            <Button
              glass
              icon={<Icon name="GridFour" />}
              label="Grid System"
              href="/docs/layouts/grid"
              linkComponent={Link}
            />
            <Button
              glass
              variant="secondary"
              label="Customization"
              icon={<Icon name="Gear" />}
              href="/docs/layouts/customization"
              linkComponent={Link}
            />
          </div>
        }
      />

      <Block spacing="md">
        <SectionIntro
          title="Performance Optimization"
          text="This guide covers performance optimization strategies for Atomix Layout components, from basic optimization techniques to advanced performance monitoring and troubleshooting."
          alignment="center"
        />

        <Row>
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-primary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-primary-emphasis">
                  <Icon name="Gauge" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Performance Issues
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Layout performance is crucial for user experience. Poor layout performance can cause several issues:
              </p>
              
              <Row>
                {performanceIssues.map((issue, index) => (
                  <GridCol key={index} md={6} lg={4} className="u-mb-4">
                    <Card className="u-p-4 u-h-100">
                      <div className="u-d-flex u-align-items-center u-mb-3">
                        <div
                          className={`${pageStyles.layoutsPerformancePage__issueIconContainer} ${pageStyles[`layoutsPerformancePage__iconContainer--${issue.color}`]}`}
                        >
                          {issue.icon}
                        </div>
                        <h4 className="u-fs-lg u-fw-semibold u-m-0 u-text-primary-emphasis">
                          {issue.title}
                        </h4>
                      </div>
                      <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed">
                        {issue.description}
                      </p>
                    </Card>
                  </GridCol>
                ))}
              </Row>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-success-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-success-emphasis">
                    <Icon name="ChartLine" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Key Performance Metrics
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Monitor these Core Web Vitals to measure and improve layout performance:
              </p>
              
              <Row>
                {performanceMetrics.map((metric, index) => (
                  <GridCol key={index} md={6} lg={3} className="u-mb-4">
                    <Card className="u-p-4 u-h-100">
                      <div className="u-d-flex u-flex-column u-h-100">
                        <div
                          className={`${pageStyles.layoutsPerformancePage__metricIconContainer} ${pageStyles[`layoutsPerformancePage__iconContainer--${metric.color}`]}`}
                        >
                          {metric.icon}
                        </div>
                        <h4 className="u-fs-lg u-fw-semibold u-m-0 u-mb-2 u-text-primary-emphasis">
                          {metric.title}
                        </h4>
                        <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed u-flex-grow-1">
                          {metric.description}
                        </p>
                      </div>
                    </Card>
                  </GridCol>
                ))}
              </Row>
            </Card>
          </GridCol>
        </Row>
      </Block>
        
      <Block spacing="md" background="secondary">
        <SectionIntro
          title="Grid System Performance"
          text="Optimize grid calculations and rendering for better performance"
          alignment="center"
        />

        <Row>
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-warning-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-warning-emphasis">
                  <Icon name="Code" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Efficient Column Calculations
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Avoid expensive calculations on every render. Use memoization to optimize column size calculations.
              </p>
              
              <EnhancedCodeBlock
                code={`// ❌ Avoid: Expensive calculations on every render
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
import { useMemo } from 'react';

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
                language="tsx"
                title="Column Calculation Optimization"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>
        
      <Block spacing="md">
        <SectionIntro
          title="Optimization Techniques"
          text="Practical strategies to improve layout performance and user experience"
          alignment="center"
        />

        <Row>
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-primary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-primary-emphasis">
                  <Icon name="Target" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Minimizing Layout Shifts
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Strategies to reduce Cumulative Layout Shift (CLS):
              </p>
              
              <ul className="u-list-none u-d-flex u-flex-column u-gap-2 u-mb-4">
                {[
                  "Set explicit dimensions on images and media",
                  "Reserve space for dynamic content",
                  "Avoid inserting content above existing content",
                  "Use CSS aspect ratio for responsive media",
                  "Preload critical fonts",
                ].map((strategy, index) => (
                  <li key={index} className="u-d-flex u-align-items-center u-text-secondary-emphasis">
                    <span className="u-me-2 u-text-primary-emphasis">✓</span>
                    {strategy}
                  </li>
                ))}
              </ul>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2 u-text-primary-emphasis">
                Example: Image with Aspect Ratio
              </h4>
              <EnhancedCodeBlock
                code={`<div className="u-ratio u-ratio-16x9">
  <img 
    src="image.jpg" 
    alt="Description"
    className="u-ratio-item"
    loading="lazy"
  />
</div>`}
                language="tsx"
                title="Aspect Ratio Example"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-success-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-success-emphasis">
                  <Icon name="Lightning" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Virtualization
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                For large datasets, use virtualization to render only visible items:
              </p>
              
              <EnhancedCodeBlock
                code={`import { VirtualizedGrid } from '@shohojdhara/atomix';

<VirtualizedGrid
  items={largeDataset}
  itemHeight={200}
  renderItem={(item) => (
    <GridCol md={4}>
      <Card>{item.content}</Card>
    </GridCol>
  )}
/>`}
                language="tsx"
                title="Virtualization Example"
                showLineNumbers={true}
              />
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-3 u-text-primary-emphasis">
                Benefits
              </h4>
              <ul className="u-list-none u-d-flex u-flex-column u-gap-2">
                {[
                  "Reduced DOM nodes",
                  "Lower memory usage",
                  "Faster initial render",
                  "Improved scrolling performance",
                ].map((benefit, index) => (
                  <li key={index} className="u-d-flex u-align-items-center u-text-secondary-emphasis">
                    <span className="u-me-2 u-text-success-emphasis">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          </GridCol>
        </Row>
      </Block>
        
      <Block spacing="md" background="secondary">
        <SectionIntro
          title="CSS Optimization"
          text="Optimize CSS delivery and rendering for better performance"
          alignment="center"
        />

        <Row>
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-warning-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-warning-emphasis">
                  <Icon name="Clock" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Critical CSS
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Inline critical CSS for above-the-fold content to improve First Contentful Paint (FCP):
              </p>
              
              <EnhancedCodeBlock
                code={`<style>
  /* Inline critical layout styles */
  .container { 
    max-width: 1200px; 
    margin: 0 auto; 
  }
  .row { 
    display: flex; 
    flex-wrap: wrap; 
  }
  .col { 
    flex: 1; 
    padding: 0.75rem; 
  }
</style>`}
                language="css"
                title="Critical CSS Inline"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-secondary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-secondary-emphasis">
                  <Icon name="Stack" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  CSS Containment
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Use CSS containment to isolate expensive layout calculations and improve rendering performance:
              </p>
              
              <EnhancedCodeBlock
                code={`.expensive-component {
  contain: layout style paint;
}

/* Benefits:
 * - Isolates layout calculations
 * - Prevents style recalculation
 * - Improves paint performance
 * - Reduces layout thrashing
 */`}
                language="css"
                title="CSS Containment"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>

      <Block spacing="md">
        <SectionIntro
          title="Best Practices"
          text="Follow these guidelines to ensure optimal layout performance"
          alignment="center"
        />

        <Row>
          {[
            {
              title: "Use Memoization",
              description: "Memoize expensive calculations and component renders to avoid unnecessary recalculations.",
              icon: <Icon name="Cpu" size="lg" />,
              color: "primary",
            },
            {
              title: "Optimize Images",
              description: "Use proper image formats, lazy loading, and aspect ratios to prevent layout shifts.",
              icon: <Icon name="Stack" size="lg" />,
              color: "success",
            },
            {
              title: "Virtualize Lists",
              description: "For large datasets, use virtualization to render only visible items.",
              icon: <Icon name="Lightning" size="lg" />,
              color: "warning",
            },
            {
              title: "Monitor Metrics",
              description: "Regularly monitor Core Web Vitals to identify and fix performance issues.",
              icon: <Icon name="ChartLine" size="lg" />,
              color: "secondary",
            },
          ].map((practice, index) => (
            <GridCol key={index} md={6} lg={3} className="u-mb-4">
              <Card className="u-h-100 u-p-6">
                <div className="u-d-flex u-align-items-center u-mb-3">
                  <div
                    className={`${pageStyles.layoutsPerformancePage__practiceIconContainer} ${pageStyles[`layoutsPerformancePage__iconContainer--${practice.color}`]}`}
                  >
                    {practice.icon}
                  </div>
                  <h3 className="u-fs-lg u-fw-semibold u-m-0 u-text-primary-emphasis">
                    {practice.title}
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed">
                  {practice.description}
                </p>
              </Card>
            </GridCol>
          ))}
        </Row>
      </Block>
    </div>
  );
};

LayoutsPerformancePage.displayName = 'LayoutsPerformancePage';

export default LayoutsPerformancePage;
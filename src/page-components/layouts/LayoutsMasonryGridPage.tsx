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

const LayoutsMasonryGridPage = () => {
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
        title="Layouts Masonry Grid"
        text="Creating Pinterest-style masonry layouts with Atomix components"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Masonry Grid System"
          text="The Atomix Masonry Grid provides a dynamic, Pinterest-style layout that automatically positions items based on their height, creating an optimal grid with minimal gaps."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Overview</h3>
              <p className="u-text-secondary-emphasis u-mb-4">The Masonry Grid uses JavaScript to calculate optimal positioning for items of varying heights, creating a visually appealing layout that maximizes space usage. Items are positioned column by column, with each new item placed in the column with the shortest current height.</p>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Key Features</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-3">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">📐 Dynamic Positioning</strong> - Automatic optimal item placement</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">📱 Responsive Design</strong> - Configurable columns per breakpoint</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">🖼️ Image Loading Support</strong> - Handles image loading and layout recalculation</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">⚡ Performance Optimized</strong> - ResizeObserver and efficient algorithms</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">🎨 Smooth Animations</strong> - Optional item transition animations</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">♿ Accessible</strong> - Maintains semantic HTML structure</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Components</h3>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">MasonryGrid</h4>
              <p className="u-text-secondary-emphasis u-mb-2">The main container that manages item positioning and responsive behavior.</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`import { MasonryGrid } from '@shohojdhara/atomix';

<MasonryGrid 
  columns={3}
  gap={16}
  className="my-masonry-grid"
>
  {/* MasonryGridItem components */}
</MasonryGrid>`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">MasonryGridItem</h4>
              <p className="u-text-secondary-emphasis u-mb-2">Individual items within the masonry grid.</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`import { MasonryGridItem } from '@shohojdhara/atomix';

<MasonryGridItem className="my-masonry-item">
  <img src="image.jpg" alt="Description" />
  <p>Item content</p>
</MasonryGridItem>`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Props</h3>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">MasonryGrid Props</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2 u-mb-4">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">columns</strong> - Number of columns (default: 3)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">gap</strong> - Gap between items in pixels (default: 16)</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">className</strong> - Custom CSS class</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">children</strong> - MasonryGridItem components</li>
              </ul>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">MasonryGridItem Props</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">className</strong> - Custom CSS class</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">children</strong> - Item content</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Responsive Configuration</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Configure columns for different breakpoints:</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`<MasonryGrid 
  columns={{
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  }}
  gap={16}
>
  {/* Items */}
</MasonryGrid>`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Performance Tips</h4>
              <ul className="u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis">• Use fixed aspect ratios when possible</li>
                <li className="u-text-secondary-emphasis">• Limit the number of items for better performance</li>
                <li className="u-text-secondary-emphasis">• Debounce resize events</li>
                <li className="u-text-secondary-emphasis">• Use virtualization for large datasets</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default LayoutsMasonryGridPage;
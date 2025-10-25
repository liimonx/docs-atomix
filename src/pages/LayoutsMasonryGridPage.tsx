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

const LayoutsMasonryGridPage = () => {
  return (
    <>
      <Helmet>
        <title>Layouts Masonry Grid - Atomix Design System</title>
        <meta
          name="description"
          content="Learn how to implement masonry grid layouts with Atomix components."
        />
      </Helmet>

      <Hero
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
              <h3>Overview</h3>
              <p>The Masonry Grid uses JavaScript to calculate optimal positioning for items of varying heights, creating a visually appealing layout that maximizes space usage. Items are positioned column by column, with each new item placed in the column with the shortest current height.</p>
              
              <h4 className="u-mt-3">Key Features</h4>
              <ul>
                <li><strong>📐 Dynamic Positioning</strong> - Automatic optimal item placement</li>
                <li><strong>📱 Responsive Design</strong> - Configurable columns per breakpoint</li>
                <li><strong>🖼️ Image Loading Support</strong> - Handles image loading and layout recalculation</li>
                <li><strong>⚡ Performance Optimized</strong> - ResizeObserver and efficient algorithms</li>
                <li><strong>🎨 Smooth Animations</strong> - Optional item transition animations</li>
                <li><strong>♿ Accessible</strong> - Maintains semantic HTML structure</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Components</h3>
              
              <h4 className="u-mt-3">MasonryGrid</h4>
              <p>The main container that manages item positioning and responsive behavior.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`import { MasonryGrid } from '@shohojdhara/atomix';

<MasonryGrid 
  columns={3}
  gap={16}
  className="my-masonry-grid"
>
  {/* MasonryGridItem components */}
</MasonryGrid>`}
              </pre>
              
              <h4 className="u-mt-3">MasonryGridItem</h4>
              <p>Individual items within the masonry grid.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
              <h3>Props</h3>
              
              <h4 className="u-mt-3">MasonryGrid Props</h4>
              <ul>
                <li><strong>columns</strong> - Number of columns (default: 3)</li>
                <li><strong>gap</strong> - Gap between items in pixels (default: 16)</li>
                <li><strong>className</strong> - Custom CSS class</li>
                <li><strong>children</strong> - MasonryGridItem components</li>
              </ul>
              
              <h4 className="u-mt-3">MasonryGridItem Props</h4>
              <ul>
                <li><strong>className</strong> - Custom CSS class</li>
                <li><strong>children</strong> - Item content</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Responsive Configuration</h3>
              <p>Configure columns for different breakpoints:</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
              
              <h4 className="u-mt-3">Performance Tips</h4>
              <ul>
                <li>Use fixed aspect ratios when possible</li>
                <li>Limit the number of items for better performance</li>
                <li>Debounce resize events</li>
                <li>Use virtualization for large datasets</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default LayoutsMasonryGridPage;
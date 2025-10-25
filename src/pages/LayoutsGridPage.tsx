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

const LayoutsGridPage = () => {
  return (
    <>
      <Helmet>
        <title>Layouts Grid - Atomix Design System</title>
        <meta
          name="description"
          content="Learn how to use the flexible grid system in Atomix for creating responsive layouts."
        />
      </Helmet>

      <Hero
        title="Layouts Grid"
        text="Flexible and responsive grid system for creating adaptive layouts"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Grid System"
          text="The Atomix Grid System provides a powerful, flexible, and responsive layout solution built on modern CSS Grid and Flexbox technologies."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Overview</h3>
              <p>The Grid System is based on a 12-column layout with responsive breakpoints and flexible alignment options. It follows the ITCSS architecture and uses semantic class names for maximum clarity and maintainability.</p>
              
              <h4 className="u-mt-3">Key Features</h4>
              <ul>
                <li><strong>📐 12-Column System</strong> - Flexible column-based layouts</li>
                <li><strong>📱 Mobile-First</strong> - Responsive design with 6 breakpoints</li>
                <li><strong>🎯 Semantic Classes</strong> - Clear, predictable class names</li>
                <li><strong>⚡ Flexbox & CSS Grid</strong> - Modern CSS technologies</li>
                <li><strong>♿ Accessible</strong> - WCAG 2.1 AA compliant</li>
                <li><strong>🎨 Customizable</strong> - CSS custom properties and SCSS variables</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Components</h3>
              
              <h4 className="u-mt-3">Container</h4>
              <p>The Container component provides responsive max-widths and centering for your content.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`import { Container } from '@shohojdhara/atomix';

<Container>
  <Row>
    <GridCol md={6}>Content</GridCol>
    <GridCol md={6}>Content</GridCol>
  </Row>
</Container>`}
              </pre>
              
              <h4 className="u-mt-3">Row</h4>
              <p>The Row component wraps columns and provides negative margins to counteract column padding.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`import { Row } from '@shohojdhara/atomix';

<Row>
  <GridCol md={4}>Content</GridCol>
  <GridCol md={4}>Content</GridCol>
  <GridCol md={4}>Content</GridCol>
</Row>`}
              </pre>
              
              <h4 className="u-mt-3">GridCol</h4>
              <p>The GridCol component represents individual columns within a row.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`import { GridCol } from '@shohojdhara/atomix';

<Row>
  <GridCol xs={12} sm={6} md={4} lg={3}>
    Responsive column
  </GridCol>
</Row>`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Responsive Breakpoints</h3>
              <p>Atomix grid system includes 6 responsive breakpoints:</p>
              <ul>
                <li><strong>xs</strong> - Extra small (0px and up)</li>
                <li><strong>sm</strong> - Small (576px and up)</li>
                <li><strong>md</strong> - Medium (768px and up)</li>
                <li><strong>lg</strong> - Large (992px and up)</li>
                <li><strong>xl</strong> - Extra large (1200px and up)</li>
                <li><strong>xxl</strong> - Extra extra large (1400px and up)</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Column Options</h3>
              <p>Grid columns can be customized with various props:</p>
              <ul>
                <li><strong>span</strong> - Column span (1-12)</li>
                <li><strong>offset</strong> - Column offset</li>
                <li><strong>order</strong> - Column order</li>
                <li><strong>align</strong> - Column alignment</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default LayoutsGridPage;
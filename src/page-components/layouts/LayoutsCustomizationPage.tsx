'use client';

import { useState, useEffect, FC } from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';
import styles from '@/styles/PageHero.module.scss';

const LayoutsCustomizationPage: FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering glass effect on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <Hero
        glass={isMounted ? {
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as GlassProps : undefined}
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Layouts Customization"
        text="Customizing and extending layout components for unique requirements"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8" >
        <SectionIntro
          title="Layout Customization"
          text="Atomix Layouts are built with customization in mind, offering multiple levels of configuration from basic theming with CSS custom properties to advanced SCSS configuration and creating completely custom layout patterns."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Customization Levels</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Atomix Layouts offer multiple levels of configuration:</p>
              
              <ul className="u-list-none u-d-flex u-flex-column u-gap-3">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">🎨 CSS Custom Properties</strong> - Runtime theming and quick adjustments</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">⚙️ SCSS Variables</strong> - Build-time configuration and deep customization</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">🎛️ Component Props</strong> - Dynamic behavior and styling</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">🧩 Custom Components</strong> - Extending and creating new layout patterns</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">CSS Custom Properties</h3>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Grid System Properties</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`:root {
  /* Container widths */
  --atomix-container-sm: 540px;
  --atomix-container-md: 720px;
  --atomix-container-lg: 960px;
  --atomix-container-xl: 1140px;
  --atomix-container-xxl: 1320px;
  
  /* Container padding */
  --atomix-container-padding-x: 0.75rem;
  --atomix-container-padding-x-sm: 1rem;
  --atomix-container-padding-x-md: 1.5rem;
  
  /* Grid gutters */
  --atomix-grid-gutter-width: 1.5rem;
  --atomix-grid-gutter-width-sm: 1rem;
  --atomix-grid-gutter-width-lg: 2rem;
  
  /* Grid columns */
  --atomix-grid-columns: 12;
}`}
              </pre>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Masonry Grid Properties</h4>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`:root {
  /* Masonry gaps */
  --atomix-masonry-gap: 1rem;
  --atomix-masonry-gap-sm: 0.75rem;
  --atomix-masonry-gap-lg: 1.5rem;
  
  /* Masonry animations */
  --atomix-masonry-transition: transform 0.3s ease;
}`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">SCSS Variables</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Customize layout at build time using SCSS variables:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`// Override before importing Atomix
$grid-columns: 16;
$grid-gutter-width: 2rem;
$container-max-widths: (
  sm: 540px,
  md: 740px,
  lg: 980px,
  xl: 1180px,
  xxl: 1360px
);

// Import Atomix with your customizations
@use 'atomix/styles' as *;`}
              </pre>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Component Props</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Customize individual components with props:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`<Container 
  fluid={false} 
  maxWidth="lg"
  className="custom-container"
>
  <Row 
    gutter={24}
    justify="center"
    align="middle"
  >
    <GridCol span={6}>
      Custom column
    </GridCol>
  </Row>
</Container>`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Custom Components</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Create custom layout components by extending Atomix components:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`import styled from 'styled-components';
import { Container, Row, GridCol } from '@shohojdhara/atomix';

const CustomLayout = styled(Container)\`
  max-width: 1400px;
  padding: 0 2rem;
  
  \${Row} {
    margin: 0 -1.5rem;
  }
  
  \${GridCol} {
    padding: 0 1.5rem;
  }
\`;`}
              </pre>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

LayoutsCustomizationPage.displayName = 'LayoutsCustomizationPage';

export default LayoutsCustomizationPage;
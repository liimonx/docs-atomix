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
import pageStyles from './LayoutsCustomizationPage.module.scss';
import Link from 'next/link';
import { EnhancedCodeBlock } from '@/components/showcase/EnhancedCodeBlock';

const LayoutsCustomizationPage: FC = () => {
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

  const customizationLevels = [
    {
      icon: <Icon name="Palette" size="lg" />,
      title: "CSS Custom Properties",
      description: "Runtime theming and quick adjustments without rebuilding",
      color: "primary",
      features: [
        "No build step required",
        "Dynamic theme switching",
        "Browser DevTools support",
        "Override at component level",
      ],
    },
    {
      icon: <Icon name="Gear" size="lg" />,
      title: "SCSS Variables",
      description: "Build-time configuration for deep customization",
      color: "success",
      features: [
        "Compile-time optimization",
        "Full system customization",
        "Generate custom themes",
        "Performance optimized",
      ],
    },
    {
      icon: <Icon name="Code" size="lg" />,
      title: "Component Props",
      description: "Dynamic behavior and styling per component instance",
      color: "warning",
      features: [
        "Per-instance customization",
        "Type-safe configuration",
        "Runtime flexibility",
        "Component-level control",
      ],
    },
    {
      icon: <Icon name="Stack" size="lg" />,
      title: "Custom Components",
      description: "Extend and create new layout patterns",
      color: "secondary",
      features: [
        "Full component extension",
        "Create new patterns",
        "Reuse Atomix foundation",
        "Complete flexibility",
      ],
    },
  ];

  return (
    <div>
      <Hero
        glass={glass}
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Layouts Customization"
        subtitle="Flexible Customization Options"
        text="Customize and extend Atomix layout components to match your unique requirements. From quick CSS variable tweaks to complete custom implementations, we provide multiple levels of customization."
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
              as={Link}
            />
            <Button
              glass
              variant="secondary"
              label="Masonry Grid"
              icon={<Icon name="GridFour" />}
              href="/docs/layouts/masonry-grid"
              as={Link}
            />
          </div>
        }
      />

      <Block spacing="md">
        <SectionIntro
          title="Customization Levels"
          text="Atomix Layouts are built with customization in mind, offering multiple levels of configuration from basic theming with CSS custom properties to advanced SCSS configuration and creating completely custom layout patterns."
          alignment="center"
        />

        <Row>
          {customizationLevels.map((level, index) => (
            <GridCol key={index} md={6} lg={3} className="u-mb-4">
              <Card className="u-h-100 u-p-6 u-border u-border-subtle">
                <div className="u-d-flex u-flex-column u-h-100">
                  <div
                    className={`${pageStyles.layoutsCustomizationPage__iconContainer} ${pageStyles[`layoutsCustomizationPage__iconContainer--${level.color}`]}`}
                  >
                    {level.icon}
                  </div>
                  <h3 className="u-fs-xl u-fw-semibold u-m-0 u-mb-3 u-text-primary-emphasis">
                    {level.title}
                  </h3>
                  <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                    {level.description}
                  </p>
                  <ul className="u-list-none u-d-flex u-flex-column u-gap-2 u-mt-auto">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="u-d-flex u-align-items-center u-text-secondary-emphasis u-fs-sm">
                        <span className="u-me-2 u-text-primary-emphasis">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </GridCol>
          ))}
        </Row>
      </Block>

      <Block spacing="md" background="secondary">
        <SectionIntro
          title="CSS Custom Properties"
          text="Use CSS custom properties for runtime theming and quick adjustments. These properties can be overridden at any level in your component tree."
          alignment="center"
        />

        <Row>
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-primary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-primary-emphasis">
                  <Icon name="Palette" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Grid System Properties
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Customize the grid system using CSS custom properties. These can be set globally or scoped to specific components.
              </p>
              
              <EnhancedCodeBlock
                code={`:root {
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
                language="css"
                title="Grid System CSS Variables"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-success-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-success-emphasis">
                  <Icon name="Stack" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Masonry Grid Properties
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Customize masonry grid spacing and animations using CSS custom properties.
              </p>
              
              <EnhancedCodeBlock
                code={`:root {
  /* Masonry gaps */
  --atomix-masonry-gap: 1rem;
  --atomix-masonry-gap-sm: 0.75rem;
  --atomix-masonry-gap-lg: 1.5rem;
  
  /* Masonry animations */
  --atomix-masonry-transition: transform 0.3s ease;
}`}
                language="css"
                title="Masonry Grid CSS Variables"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>

      <Block spacing="md">
        <SectionIntro
          title="SCSS Variables"
          text="For build-time customization, use SCSS variables to configure the entire layout system before compilation."
          alignment="center"
        />

        <Row>
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-success-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-success-emphasis">
                  <Icon name="Gear" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Build-Time Configuration
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Override SCSS variables before importing Atomix to customize the entire system at build time. This approach provides maximum performance and allows for complete system customization.
              </p>
              
              <EnhancedCodeBlock
                code={`// Override before importing Atomix
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
                language="scss"
                title="SCSS Variable Override"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>

      <Block spacing="md" background="secondary">
        <SectionIntro
          title="Component Props"
          text="Customize individual components dynamically using props. This approach provides per-instance control and type safety."
          alignment="center"
        />

        <Row>
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-warning-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-warning-emphasis">
                  <Icon name="Code" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Container & Row
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Customize container and row components with props for dynamic behavior.
              </p>
              
              <EnhancedCodeBlock
                code={`import { Container, Row, GridCol } from '@shohojdhara/atomix';

<Container 
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
                language="tsx"
                title="Container & Row Props"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-secondary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-secondary-emphasis">
                  <Icon name="Lightning" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  GridCol Options
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                GridCol supports responsive breakpoints, offsets, ordering, and alignment.
              </p>
              
              <EnhancedCodeBlock
                code={`import { Row, GridCol } from '@shohojdhara/atomix';

<Row>
  <GridCol 
    xs={12} 
    sm={6} 
    md={4} 
    lg={3}
    offset={2}
    order={1}
    align="center"
  >
    Responsive column with options
  </GridCol>
</Row>`}
                language="tsx"
                title="GridCol Props"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>

      <Block spacing="md">
        <SectionIntro
          title="Custom Components"
          text="Extend Atomix components or create completely custom layout patterns while leveraging the Atomix foundation."
          alignment="center"
        />

        <Row>
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-secondary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-secondary-emphasis">
                  <Icon name="Sparkle" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  Extending Components
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Create custom layout components by extending Atomix components. This approach allows you to build on top of Atomix while maintaining full control over styling and behavior.
              </p>
              
              <EnhancedCodeBlock
                code={`import styled from 'styled-components';
import { Container, Row, GridCol } from '@shohojdhara/atomix';

// Extend Container with custom styling
const CustomLayout = styled(Container)\`
  max-width: 1400px;
  padding: 0 2rem;
  
  \${Row} {
    margin: 0 -1.5rem;
  }
  
  \${GridCol} {
    padding: 0 1.5rem;
  }
\`;

// Usage
function MyPage() {
  return (
    <CustomLayout>
      <Row>
        <GridCol md={6}>Content</GridCol>
        <GridCol md={6}>Content</GridCol>
      </Row>
    </CustomLayout>
  );
}`}
                language="tsx"
                title="Custom Component Extension"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-primary-subtle u-br-md u-d-flex u-align-items-center u-justify-content-center u-me-3 u-text-primary-emphasis">
                  <Icon name="Stack" size="lg" />
                </div>
                <h3 className="u-fs-xl u-fw-semibold u-m-0 u-text-primary-emphasis">
                  CSS Modules Approach
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Alternatively, use CSS Modules to style Atomix components with custom classes.
              </p>
              
              <EnhancedCodeBlock
                code={`import { Container, Row, GridCol } from '@shohojdhara/atomix';
import styles from './CustomLayout.module.scss';

function CustomLayout() {
  return (
    <Container className={styles.customContainer}>
      <Row className={styles.customRow}>
        <GridCol md={6} className={styles.customCol}>
          Content
        </GridCol>
        <GridCol md={6} className={styles.customCol}>
          Content
        </GridCol>
      </Row>
    </Container>
  );
}

// CustomLayout.module.scss
.customContainer {
  max-width: 1400px;
  padding: 0 2rem;
}

.customRow {
  margin: 0 -1.5rem;
}

.customCol {
  padding: 0 1.5rem;
}`}
                language="tsx"
                title="CSS Modules Customization"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>

      <Block spacing="md" background="secondary">
        <SectionIntro
          title="Best Practices"
          text="Follow these guidelines to get the most out of Atomix layout customization"
          alignment="center"
        />

        <Row>
          {[
            {
              title: "Start with CSS Variables",
              description: "Use CSS custom properties for quick adjustments and runtime theming. They're the easiest way to customize without rebuilding.",
              icon: <Icon name="Palette" size="lg" />,
              color: "primary",
            },
            {
              title: "Use SCSS for System-Wide Changes",
              description: "When you need to change the entire system (like column count or breakpoints), use SCSS variables at build time.",
              icon: <Icon name="Gear" size="lg" />,
              color: "success",
            },
            {
              title: "Props for Instance-Level Control",
              description: "Use component props when you need different configurations for different instances of the same component.",
              icon: <Icon name="Code" size="lg" />,
              color: "warning",
            },
            {
              title: "Extend for Complex Patterns",
              description: "Create custom components when you need completely new layout patterns or complex styling requirements.",
              icon: <Icon name="Sparkle" size="lg" />,
              color: "secondary",
            },
          ].map((practice, index) => (
            <GridCol key={index} md={6} lg={3} className="u-mb-4">
              <Card className="u-h-100 u-p-6">
                <div className="u-d-flex u-align-items-center u-mb-3">
                  <div
                    className={`${pageStyles.layoutsCustomizationPage__practiceIconContainer} ${pageStyles[`layoutsCustomizationPage__practiceIconContainer--${practice.color}`]}`}
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

LayoutsCustomizationPage.displayName = 'LayoutsCustomizationPage';

export default LayoutsCustomizationPage;
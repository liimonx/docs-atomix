"use client";

import { useState, useEffect, FC } from "react";

import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Grid,
  Block,
  Icon,
  Button,
} from "@shohojdhara/atomix";
import { GlassProps } from "@/types/atomix-components";
import styles from "@/styles/PageHero.module.scss";
import pageStyles from "./LayoutsResponsivePatternsPage.module.scss";
import Link from "next/link";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";

const LayoutsResponsivePatternsPage: FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering glass effect on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const glass: GlassProps | undefined = isMounted
    ? {
        displacementScale: 30,
        blurAmount: 5,
        elasticity: 0,
        enableLiquidBlur: true,
        padding: "20px",
        cornerRadius: 30,
        children: null,
      }
    : undefined;

  const responsivePrinciples = [
    {
      icon: <Icon name="Phone" size="lg" />,
      title: "Mobile-First",
      description: "Start with mobile and enhance for larger screens",
      color: "primary",
    },
    {
      icon: <Icon name="Target" size="lg" />,
      title: "Progressive Enhancement",
      description: "Layer features based on device capabilities",
      color: "success",
    },
    {
      icon: <Icon name="GridFour" size="lg" />,
      title: "Flexible Grids",
      description: "Use relative units and flexible layouts",
      color: "warning",
    },
    {
      icon: <Icon name="Image" size="lg" />,
      title: "Responsive Media",
      description: "Images and media that adapt to containers",
      color: "secondary",
    },
    {
      icon: <Icon name="Stack" size="lg" />,
      title: "Consistent Spacing",
      description: "Maintain visual hierarchy across breakpoints",
      color: "primary",
    },
  ];

  const layoutPatterns = [
    {
      title: "Sidebar Layout",
      description: "Perfect for blogs, documentation, and admin dashboards",
      icon: <Icon name="GridFour" size="lg" />,
      color: "primary",
    },
    {
      title: "Card Grid Layout",
      description: "Ideal for dashboards, galleries, and product listings",
      icon: <Icon name="Monitor" size="lg" />,
      color: "success",
    },
    {
      title: "Masonry Layout",
      description: "Pinterest-style layouts for varying content heights",
      icon: <Icon name="Stack" size="lg" />,
      color: "warning",
    },
    {
      title: "Full-Width Hero",
      description: "Large hero sections with responsive content below",
      icon: <Icon name="Lightning" size="lg" />,
      color: "secondary",
    },
  ];

  return (
    <div>
      <Hero
        className={styles.pageHero}
        title="Layouts Responsive Patterns"
        subtitle="Adaptive Design Solutions"
        text="Learn common responsive design patterns and best practices using the Atomix Layout system. Create flexible, accessible layouts that work beautifully across all devices and screen sizes."
        alignment="center"
        fullViewportHeight={false}
        contentWidth="900px"
        actions={
          <div className={styles.pageHero__actions}>
            <Button
              glass
              icon={<Icon name="GridFour" />}
              label="Grid System"
              href="/docs/layouts/grid"
              LinkComponent={Link}
            />
            <Button
              glass
              variant="secondary"
              label="Masonry Grid"
              icon={<Icon name="GridFour" />}
              href="/docs/layouts/masonry-grid"
              LinkComponent={Link}
            />
          </div>
        }
      />

      <Block spacing="md">
        <SectionIntro
          title="Responsive Design Principles"
          text="Responsive design patterns are reusable solutions for common layout challenges. These patterns have been tested across devices and proven to provide excellent user experiences while maintaining accessibility and performance."
          alignment="center"
        />

        <Grid>
          {responsivePrinciples.map((principle, index) => (
            <GridCol key={index} md={6} lg={4} className="u-mb-6">
              <Card className="u-p-6 u-h-100">
                <div className="u-flex u-flex-column u-h-100">
                  <div
                    className={`${
                      pageStyles.layoutsResponsivePatternsPage__principleIconContainer
                    } ${
                      pageStyles[
                        `layoutsResponsivePatternsPage__iconContainer--${principle.color}`
                      ]
                    }`}
                  >
                    {principle.icon}
                  </div>
                  <h3 className="u-text-xl u-font-semibold u-m-0 u-mb-3 u-text-primary-emphasis">
                    {principle.title}
                  </h3>
                  <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed u-flex-grow-1">
                    {principle.description}
                  </p>
                </div>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Block>

      <Block spacing="md" background="secondary">
        <SectionIntro
          title="Common Layout Patterns"
          text="Reusable layout patterns that work across all devices and screen sizes"
          alignment="center"
        />

        <Grid>
          {layoutPatterns.map((pattern, index) => (
            <GridCol key={index} md={6} lg={3} className="u-mb-6">
              <Card className="u-p-6 u-h-100">
                <div className="u-flex u-flex-column u-h-100">
                  <div
                    className={`${
                      pageStyles.layoutsResponsivePatternsPage__patternIconContainer
                    } ${
                      pageStyles[
                        `layoutsResponsivePatternsPage__iconContainer--${pattern.color}`
                      ]
                    }`}
                  >
                    {pattern.icon}
                  </div>
                  <h3 className="u-text-xl u-font-semibold u-m-0 u-mb-3 u-text-primary-emphasis">
                    {pattern.title}
                  </h3>
                  <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed u-flex-grow-1">
                    {pattern.description}
                  </p>
                </div>
              </Card>
            </GridCol>
          ))}
        </Grid>

        <Grid className="u-mt-6">
          <GridCol md={12} className="u-mb-6">
            <Card className="u-p-6">
              <div className="u-flex u-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-primary-emphasis">
                  <Icon name="Code" size="lg" />
                </div>
                <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                  Sidebar Layout Pattern
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Perfect for blogs, documentation, and admin dashboards. The
                sidebar is hidden on mobile and visible on desktop.
              </p>

              <EnhancedCodeBlock
                code={`import { Container, Row, GridCol } from '@shohojdhara/atomix';

function SidebarLayout({ children, sidebar }) {
  return (
    <Container>
      <Row>
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <GridCol xs={12} lg={3} className="d-none d-lg-block">
          <aside className="sidebar">
            {sidebar}
          </aside>
        </GridCol>
        
        {/* Main content */}
        <GridCol xs={12} lg={9}>
          <main className="main-content">
            {children}
          </main>
        </GridCol>
      </Row>
    </Container>
  );
}`}
                language="tsx"
                title="Sidebar Layout Example"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Grid>

        <Grid className="u-mt-6">
          <GridCol md={12} className="u-mb-6">
            <Card className="u-p-6">
              <div className="u-flex u-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-success-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-success-emphasis">
                  <Icon name="GridFour" size="lg" />
                </div>
                <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                  Card Grid Layout Pattern
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Ideal for dashboards, galleries, and product listings. Cards
                automatically adjust based on screen size.
              </p>

              <EnhancedCodeBlock
                code={`import { Container, Row, GridCol, Card } from '@shohojdhara/atomix';

function CardGridLayout({ cards }) {
  return (
    <Container>
      <Row>
        {cards.map((card, index) => (
          <GridCol xs={12} sm={6} md={4} key={index}>
            <Card>
              {card.content}
            </Card>
          </GridCol>
        ))}
      </Row>
    </Container>
  );
}`}
                language="tsx"
                title="Card Grid Layout Example"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Grid>
      </Block>

      <Block spacing="md">
        <SectionIntro
          title="Breakpoints & Media"
          text="Understanding breakpoints and responsive media handling"
          alignment="center"
        />

        <Grid>
          <GridCol md={6} className="u-mb-6">
            <Card className="u-p-6 u-h-100">
              <div className="u-flex u-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-primary-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-primary-emphasis">
                  <Icon name="Phone" size="lg" />
                </div>
                <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                  Breakpoint Strategy
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Atomix uses a mobile-first approach with 6 breakpoints:
              </p>
              <div className="u-flex u-flex-column u-gap-2 u-mb-4">
                {[
                  { name: "xs", size: "Extra small (0px and up)" },
                  { name: "sm", size: "Small (576px and up)" },
                  { name: "md", size: "Medium (768px and up)" },
                  { name: "lg", size: "Large (992px and up)" },
                  { name: "xl", size: "Extra large (1200px and up)" },
                  { name: "xxl", size: "Extra extra large (1400px and up)" },
                ].map((bp, index) => (
                  <div
                    key={index}
                    className="u-flex u-items-center u-p-3 u-bg-secondary-subtle u-rounded-md"
                  >
                    <div className="u-w-10 u-h-10 u-bg-primary-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-primary-emphasis u-font-bold">
                      {bp.name}
                    </div>
                    <span className="u-text-secondary-emphasis">{bp.size}</span>
                  </div>
                ))}
              </div>

              <h4 className="u-text-lg u-font-semibold u-mt-3 u-mb-2 u-text-primary-emphasis">
                Usage Example
              </h4>
              <EnhancedCodeBlock
                code={`<GridCol xs={12} sm={6} md={4} lg={3}>
  Responsive column
</GridCol>`}
                language="tsx"
                title="Responsive Column"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>

          <GridCol md={6} className="u-mb-6">
            <Card className="u-p-6 u-h-100">
              <div className="u-flex u-items-center u-mb-4">
                <div className="u-w-12 u-h-12 u-bg-success-subtle u-rounded-md u-flex u-items-center u-justify-center u-me-3 u-text-success-emphasis">
                  <Icon name="Image" size="lg" />
                </div>
                <h3 className="u-text-xl u-font-semibold u-m-0 u-text-primary-emphasis">
                  Responsive Media
                </h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4 u-line-height-relaxed">
                Ensure images and media adapt to their containers:
              </p>

              <h4 className="u-text-lg u-font-semibold u-mt-3 u-mb-2 u-text-primary-emphasis">
                Images
              </h4>
              <EnhancedCodeBlock
                code={`<img 
  src="image.jpg" 
  alt="Description"
  className="u-w-100 u-h-auto"
  loading="lazy"
/>`}
                language="tsx"
                title="Responsive Image"
                showLineNumbers={true}
              />

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-2 u-text-primary-emphasis">
                Videos
              </h4>
              <EnhancedCodeBlock
                code={`<div className="u-ratio u-ratio-16x9">
  <iframe 
    src="video.mp4"
    className="u-ratio-item"
    title="Video"
  />
</div>`}
                language="tsx"
                title="Responsive Video"
                showLineNumbers={true}
              />

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-2 u-text-primary-emphasis">
                Typography
              </h4>
              <p className="u-text-secondary-emphasis u-mb-2">
                Use responsive font sizes:
              </p>
              <EnhancedCodeBlock
                code={`.u-font-size-responsive {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}`}
                language="css"
                title="Responsive Typography"
                showLineNumbers={true}
              />
            </Card>
          </GridCol>
        </Grid>
      </Block>

      <Block spacing="md" background="secondary">
        <SectionIntro
          title="Best Practices"
          text="Follow these guidelines for creating effective responsive layouts"
          alignment="center"
        />

        <Grid>
          {[
            {
              title: "Start Mobile-First",
              description:
                "Design for mobile devices first, then enhance for larger screens. This ensures a solid foundation.",
              icon: <Icon name="Phone" size="lg" />,
              color: "primary",
            },
            {
              title: "Use Relative Units",
              description:
                "Prefer rem, em, and percentages over fixed pixel values for better scalability.",
              icon: <Icon name="Target" size="lg" />,
              color: "success",
            },
            {
              title: "Test All Breakpoints",
              description:
                "Test your layouts at all breakpoints to ensure consistent behavior across devices.",
              icon: <Icon name="Monitor" size="lg" />,
              color: "warning",
            },
            {
              title: "Optimize Images",
              description:
                "Use appropriate image formats, lazy loading, and proper sizing for performance.",
              icon: <Icon name="Image" size="lg" />,
              color: "secondary",
            },
          ].map((practice, index) => (
            <GridCol key={index} md={6} lg={3} className="u-mb-6">
              <Card className="u-h-100 u-p-6">
                <div className="u-flex u-items-center u-mb-3">
                  <div
                    className={`${
                      pageStyles.layoutsResponsivePatternsPage__practiceIconContainer
                    } ${
                      pageStyles[
                        `layoutsResponsivePatternsPage__iconContainer--${practice.color}`
                      ]
                    }`}
                  >
                    {practice.icon}
                  </div>
                  <h3 className="u-text-lg u-font-semibold u-m-0 u-text-primary-emphasis">
                    {practice.title}
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-m-0 u-line-height-relaxed">
                  {practice.description}
                </p>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Block>
    </div>
  );
};

LayoutsResponsivePatternsPage.displayName = "LayoutsResponsivePatternsPage";

export default LayoutsResponsivePatternsPage;

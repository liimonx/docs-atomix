import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  Hero,
  GridCol,
  Row,
  Block,
  SectionIntro,
} from "@shohojdhara/atomix";
import { Link } from "react-router-dom";

const DesignTokensOverviewPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Design Tokens - Atomix Documentation</title>
        <meta name="description" content="Learn about the Atomix Design Tokens - the foundational elements of the design system" />
      </Helmet>

      <div className="design-tokens-overview-page">
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
          title="Design Tokens"
          subtitle="Atomix Design System Foundation"
          text="The foundational elements that define the visual properties creating consistent, cohesive user interfaces."
          alignment="center"
          showOverlay={false}
          fullViewportHeight={false}
          contentWidth="900px"
          actions={
            <>
              <Link to="/docs/design-tokens/colors">
                <Button label="Colors" />
              </Link>
              <Link to="/docs/design-tokens/spacing">
                <Button variant="secondary" label="Spacing" />
              </Link>
            </>
          }
        />

        <Block spacing="sm">
          <SectionIntro 
            title="Design System Foundations"
            text="Explore the fundamental design values that power the Atomix design system."
          />
          
          <Row>
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Colors</h3>
                <p className="u-mb-4">Explore our color palette, including primary, secondary, and semantic colors.</p>
                <Link to="/docs/design-tokens/colors">
                  <Button variant="outline" label="Color Tokens" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Spacing</h3>
                <p className="u-mb-4">Learn about our spacing scale based on an 8px grid system for consistent layouts.</p>
                <Link to="/docs/design-tokens/spacing">
                  <Button variant="outline" label="Spacing Tokens" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Typography</h3>
                <p className="u-mb-4">Explore our typography system including font families, sizes, and weights.</p>
                <Link to="/docs/design-tokens/typography">
                  <Button variant="outline" label="Typography Tokens" size="sm" />
                </Link>
              </Card>
            </GridCol>
          </Row>
        </Block>
      </div>
    </>
  );
};

export default DesignTokensOverviewPage;
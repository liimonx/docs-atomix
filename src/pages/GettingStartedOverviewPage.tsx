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

const GettingStartedOverviewPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Getting Started - Atomix Documentation</title>
        <meta name="description" content="Learn how to get started with Atomix - installation, quick start guide, and basic usage" />
      </Helmet>

      <div className="getting-started-overview-page">
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
          title="Getting Started"
          subtitle="Begin your journey with Atomix"
          text="Everything you need to know to start using Atomix in your projects, from installation to your first components."
          alignment="center"
          showOverlay={false}
          fullViewportHeight={false}
          contentWidth="900px"
          actions={
            <>
              <Link to="/docs/getting-started/installation">
                <Button label="Installation" />
              </Link>
              <Link to="/docs/getting-started/quick-start">
                <Button variant="secondary" label="Quick Start" />
              </Link>
            </>
          }
        />

        <Block spacing="sm">
          <SectionIntro 
            title="Your First Steps with Atomix"
            text="Follow our comprehensive guides to integrate Atomix into your project and start building modern, accessible user interfaces."
          />
          
          <Row>
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Installation</h3>
                <p className="u-mb-4">Learn how to install Atomix in your project using npm, yarn, or other package managers.</p>
                <Link to="/docs/getting-started/installation">
                  <Button variant="outline" label="Installation Guide" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Quick Start</h3>
                <p className="u-mb-4">Get up and running quickly with our step-by-step quick start tutorial.</p>
                <Link to="/docs/getting-started/quick-start">
                  <Button variant="outline" label="Quick Start Guide" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Migration</h3>
                <p className="u-mb-4">Migrating from an older version? Follow our migration guide for a smooth transition.</p>
                <Link to="/docs/getting-started/migration">
                  <Button variant="outline" label="Migration Guide" size="sm" />
                </Link>
              </Card>
            </GridCol>
          </Row>
        </Block>
      </div>
    </>
  );
};

export default GettingStartedOverviewPage;
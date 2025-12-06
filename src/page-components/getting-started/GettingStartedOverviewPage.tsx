'use client';

import { FC } from 'react';



import {
  Button,
  Card,
  Hero,
  GridCol,
  Block,
  SectionIntro,
  Grid,
} from "@shohojdhara/atomix";
import { GlassProps } from "@/types/atomix-components";
import { Link } from "lucide-react";

const GettingStartedOverviewPage: FC = () => {
  return (
    <>

      <div>
        <Hero
          glass={{
            displacementScale: 30,
            blurAmount: 5,
            elasticity: 0,
            enableLiquidBlur: true,
            padding: "20px",
            cornerRadius: 30,
          } as GlassProps}
          className="u-pt-32 u-pb-16 u-mb-lg"
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
              <Button 
                label="Installation"
                href="/docs/getting-started/installation"
              />
              <Button 
                variant="secondary" 
                label="Quick Start"
                href="/docs/getting-started/quick-start"
              />
            </>
          }
        />

        <Block spacing="sm">
          <SectionIntro 
            title="Your First Steps with Atomix"
            text="Follow our comprehensive guides to integrate Atomix into your project and start building modern, accessible user interfaces."
          />
          
          <Grid>
            <GridCol md={6} lg={4}>
              <Card className="u-h-100">
                <h3 className="u-fs-xl u-fw-semibold u-mb-3">Installation</h3>
                <p className="u-text-secondary-emphasis u-mb-4">Learn how to install Atomix in your project using npm, yarn, or other package managers.</p>
                <Button 
                  variant="primary-outline" 
                  label="Installation Guide" 
                  size="sm"
                  as={Link}
                  href="/docs/getting-started/installation"
                />
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-h-100">
                <h3 className="u-fs-xl u-fw-semibold u-mb-3">Quick Start</h3>
                <p className="u-text-secondary-emphasis u-mb-4">Get up and running quickly with our step-by-step quick start tutorial.</p>
                <Button 
                  variant="primary-outline" 
                  label="Quick Start Guide" 
                  size="sm"
                  href="/docs/getting-started/quick-start"
                />
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-h-100">
                <h3 className="u-fs-xl u-fw-semibold u-mb-3">Migration</h3>
                <p className="u-text-secondary-emphasis u-mb-4">Migrating from an older version? Follow our migration guide for a smooth transition.</p>
                <Button 
                  variant="primary-outline" 
                  label="Migration Guide" 
                  size="sm"
                  href="/docs/getting-started/migration"
                />
              </Card>
            </GridCol>
              </Grid>
        </Block>
      </div>
    </>
  );
};

export default GettingStartedOverviewPage;
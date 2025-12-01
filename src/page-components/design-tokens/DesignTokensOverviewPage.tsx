'use client';

import React from "react";
import {
  Button,
  Card,
  Hero,
  GridCol,
  Block,
  SectionIntro,
  Grid,
} from "@shohojdhara/atomix";
import Link from "next/link";
import { GlassProps } from "@/types/atomix-components";

const DesignTokensOverviewPage: React.FC = () => {
  return (
    <>

      <div className="design-tokens-overview-page">
        <Hero
          glass={{
            displacementScale: 30,
            blurAmount: 5,
            elasticity: 0,
            enableLiquidBlur: true,
            padding: "20px",
            cornerRadius: 30,
          } as GlassProps}
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
              <Link href="/docs/design-tokens/colors">
                <Button label="Colors" />
              </Link>
              <Link href="/docs/design-tokens/spacing">
                <Button variant="secondary" label="Spacing" />
              </Link>
              <Link href="/docs/design-tokens/typography">
                <Button variant="secondary" label="Typography" />
              </Link>
            </>
          }
        />

        <Block spacing="sm">
          <SectionIntro 
            title="Design System Foundations"
            text="Explore the fundamental design values that power the Atomix design system."
          />
          
          <Grid>
            <GridCol md={6} lg={4} className="u-mt-4">
              <Card className="u-h-100" variant="tertiary">
                <h3 className="u-mb-3">Colors</h3>
                <p className="u-mb-4">Explore our comprehensive color system with brand colors, semantic colors, and neutral palettes. Includes 10-step color scales and WCAG 2.1 AA compliance.</p>
                <Link href="/docs/design-tokens/colors">
                    <Button variant="outline-primary" label="Color Tokens" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4} className="u-mt-4">
              <Card className="u-h-100" variant="tertiary">
                <h3 className="u-mb-3">Spacing</h3>
                <p className="u-mb-4">Learn about our spacing scale based on a 4px grid system for consistent layouts. Includes margins, padding, and layout spacing tokens.</p>
                <Link href="/docs/design-tokens/spacing">
                  <Button variant="outline-primary" label="Spacing Tokens" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4} className="u-mt-4">
              <Card className="u-h-100" variant="tertiary">
                <h3 className="u-mb-3">Typography</h3>
                <p className="u-mb-4">Explore our typography system including font families, sizes, weights, and line heights. Built for readability and accessibility.</p>
                <Link href="/docs/design-tokens/typography">
                  <Button variant="outline-primary" label="Typography Tokens" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4} className="u-mt-4">
              <Card className="u-h-100" variant="tertiary">
                <h3 className="u-mb-3">Grid</h3>
                <p className="u-mb-4">Responsive grid system with 12 columns, customizable gutters, and breakpoints. Create flexible, consistent layouts across all devices.</p>
                <Link href="/docs/design-tokens/grid">
                  <Button variant="outline-primary" label="Grid Tokens" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4} className="u-mt-4">
              <Card className="u-h-100" variant="tertiary">
                <h3 className="u-mb-3">Elevation</h3>
                <p className="u-mb-4">Shadow and depth system for creating visual hierarchy. Multiple elevation levels with consistent shadow progression for light and dark themes.</p>
                <Link href="/docs/design-tokens/elevation">
                  <Button variant="outline-primary" label="Elevation Tokens" size="sm" />
                </Link>
              </Card>
            </GridCol>
          </Grid>
        </Block>
      </div>
    </>
  );
};

export default DesignTokensOverviewPage;
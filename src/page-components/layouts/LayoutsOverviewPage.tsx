'use client';

import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Hero,
  GridCol,
  Row,
  Block,
  SectionIntro,
} from "@shohojdhara/atomix";
import { GlassProps } from "@/types/atomix-components";

const LayoutsOverviewPage: React.FC = () => {
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
        title="Layouts System"
        subtitle="Atomix Layout Components"
        text="A comprehensive set of components for creating responsive, accessible, and performant layouts."
        alignment="center"
        showOverlay={false}
        fullViewportHeight={false}
        contentWidth="900px"
        actions={
          <>
            <Button 
              label="Grid System"
              onClick={() => window.location.href = '/docs/layouts/grid'}
            />
            <Button 
              variant="secondary" 
              label="Masonry Grid"
              onClick={() => window.location.href = '/docs/layouts/masonry-grid'}
            />
          </>
        }
      />

        <Block spacing="sm">
          <SectionIntro 
            title="Building Responsive Layouts"
            text="Create flexible, responsive layouts with our collection of layout components designed for modern web applications."
          />
          
          <Row>
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100 atomix-card-hover">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Grid System</h3>
                <p className="u-text-secondary-emphasis u-mb-4">A powerful 12-column responsive grid system for creating consistent layouts across devices.</p>
                <Button 
                  variant="outline" 
                  label="Grid Documentation" 
                  size="sm"
                  onClick={() => window.location.href = '/docs/layouts/grid'}
                />
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100 atomix-card-hover">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Masonry Grid</h3>
                <p className="u-text-secondary-emphasis u-mb-4">Create Pinterest-style layouts with our flexible masonry grid component.</p>
                <Button 
                  variant="outline" 
                  label="Masonry Grid" 
                  size="sm"
                  onClick={() => window.location.href = '/docs/layouts/masonry-grid'}
                />
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100 atomix-card-hover">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Responsive Patterns</h3>
                <p className="u-text-secondary-emphasis u-mb-4">Learn best practices for creating responsive layouts with our design patterns.</p>
                <Button 
                  variant="outline" 
                  label="Responsive Patterns" 
                  size="sm"
                  onClick={() => window.location.href = '/docs/layouts/responsive-patterns'}
                />
              </Card>
            </GridCol>
          </Row>
        </Block>
    </>
  );
};

export default LayoutsOverviewPage;
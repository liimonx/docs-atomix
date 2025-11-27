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

const StylesOverviewPage: React.FC = () => {
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
        title="Styles System"
        subtitle="Atomix CSS Architecture"
        text="A comprehensive, scalable CSS architecture built on modern web standards and the ITCSS methodology."
        alignment="center"
        showOverlay={false}
        fullViewportHeight={false}
        contentWidth="900px"
        actions={
          <>
            <Button 
              label="Architecture Guide"
              onClick={() => window.location.href = '/docs/styles/architecture'}
            />
            <Button 
              variant="secondary" 
              label="Utility Classes"
              onClick={() => window.location.href = '/docs/styles/utilities'}
            />
          </>
        }
      />

        <Block spacing="sm">
          <SectionIntro 
            title="Modern CSS Architecture"
            text="Explore our CSS architecture designed for scalability, maintainability, and performance."
          />
          
          <Row>
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Architecture</h3>
                <p className="u-mb-4">Learn about our CSS architecture based on ITCSS methodology for scalable styling.</p>
                <Button 
                  variant="outline" 
                  label="Architecture Guide" 
                  size="sm"
                  onClick={() => window.location.href = '/docs/styles/architecture'}
                />
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Utility Classes</h3>
                <p className="u-text-secondary-emphasis u-mb-4">Explore our extensive collection of utility classes for rapid UI development.</p>
                <Button 
                  variant="outline" 
                  label="Utility Classes" 
                  size="sm"
                  onClick={() => window.location.href = '/docs/styles/utilities'}
                />
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Customization</h3>
                <p className="u-text-secondary-emphasis u-mb-4">Learn how to customize the Atomix design system to match your brand.</p>
                <Button 
                  variant="outline" 
                  label="Customization Guide" 
                  size="sm"
                  onClick={() => window.location.href = '/docs/styles/customization'}
                />
              </Card>
            </GridCol>
          </Row>
        </Block>
    </>
  );
};

export default StylesOverviewPage;
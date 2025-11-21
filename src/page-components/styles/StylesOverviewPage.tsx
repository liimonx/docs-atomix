'use client';

import React from "react";
import {
  Button,
  Card,
  Hero,
  GridCol,
  Row,
  Block,
  SectionIntro,
} from "@shohojdhara/atomix";
import Link from "next/link";
import { GlassProps } from "@/types/atomix-components";

const StylesOverviewPage: React.FC = () => {
  return (
    <>

      <div className="styles-overview-page">
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
          title="Styles System"
          subtitle="Atomix CSS Architecture"
          text="A comprehensive, scalable CSS architecture built on modern web standards and the ITCSS methodology."
          alignment="center"
          showOverlay={false}
          fullViewportHeight={false}
          contentWidth="900px"
          actions={
            <>
              <Link href="/docs/styles/architecture">
                <Button label="Architecture Guide" />
              </Link>
              <Link href="/docs/styles/utilities">
                <Button variant="secondary" label="Utility Classes" />
              </Link>
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
                <Link href="/docs/styles/architecture">
                  <Button variant="outline" label="Architecture Guide" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Utility Classes</h3>
                <p className="u-mb-4">Explore our extensive collection of utility classes for rapid UI development.</p>
                <Link href="/docs/styles/utilities">
                  <Button variant="outline" label="Utility Classes" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Customization</h3>
                <p className="u-mb-4">Learn how to customize the Atomix design system to match your brand.</p>
                <Link href="/docs/styles/customization">
                  <Button variant="outline" label="Customization Guide" size="sm" />
                </Link>
              </Card>
            </GridCol>
          </Row>
        </Block>
      </div>
    </>
  );
};

export default StylesOverviewPage;
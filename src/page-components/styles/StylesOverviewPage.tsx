'use client';

import { FC } from 'react';
import Link from 'next/link';

import { useState, useEffect } from "react";
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
import styles from '@/styles/PageHero.module.scss';

const StylesOverviewPage: FC = () => {
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
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Styles System"
        subtitle="Atomix CSS Architecture"
        text="A comprehensive, scalable CSS architecture built on modern web standards and the ITCSS methodology."
        alignment="center"
        showOverlay={false}
        fullViewportHeight={false}
        contentWidth="900px"
        actions={
          <div className={styles.pageHero__actions}>
            <Button 
              label="Architecture Guide"
              href="/docs/styles/architecture"
              as={Link}
            />
            <Button 
              variant="secondary" 
              label="Utility Classes"
              href="/docs/styles/utilities"
              as={Link}
            />
          </div>
        }
      />

      <Block container={{ type: "fluid" }}>
          <SectionIntro 
            title="Modern CSS Architecture"
            text="Explore our CSS architecture designed for scalability, maintainability, and performance."
          />
          
          <Row>
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100 atomix-card-hover">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Architecture</h3>
                <p className="u-text-secondary-emphasis u-mb-4">Learn about our CSS architecture based on ITCSS methodology for scalable styling.</p>
                <Button 
                  variant="outline" 
                  label="Architecture Guide" 
                  size="sm"
                  href="/docs/styles/architecture"
                  as={Link}
                />
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100 atomix-card-hover">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Utility Classes</h3>
                <p className="u-text-secondary-emphasis u-mb-4">Explore our extensive collection of utility classes for rapid UI development.</p>
                <Button 
                  variant="outline" 
                  label="Utility Classes" 
                  size="sm"
                  href="/docs/styles/utilities"
                  as={Link}
                />
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100 atomix-card-hover">
                <h3 className="u-fs-lg u-fw-semibold u-mb-3">Customization</h3>
                <p className="u-text-secondary-emphasis u-mb-4">Learn how to customize the Atomix design system to match your brand.</p>
                <Button 
                  variant="outline" 
                  label="Customization Guide" 
                  size="sm"
                  href="/docs/styles/customization"
                  as={Link}
                />
              </Card>
            </GridCol>
          </Row>
        </Block>
    </>
  );
};

export default StylesOverviewPage;
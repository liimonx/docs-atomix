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
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              padding: '20px'
            }}>
              <Link href="/docs/design-tokens/colors">
                <Button 
                  label="Colors" 
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
                    padding: '12px 24px',
                    borderRadius: '8px'
                  }}
                />
              </Link>
              <Link href="/docs/design-tokens/spacing">
                <Button 
                  variant="secondary" 
                  label="Spacing" 
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                    boxShadow: '0 4px 15px rgba(124, 58, 237, 0.1)',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    color: '#4c1d95'
                  }}
                />
              </Link>
              <Link href="/docs/design-tokens/typography">
                <Button 
                  variant="secondary" 
                  label="Typography" 
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(124, 58, 237, 0.3)',
                    boxShadow: '0 4px 15px rgba(124, 58, 237, 0.1)',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    color: '#4c1d95'
                  }}
                />
              </Link>
            </div>
          }
        />

        <Block spacing="sm">
          <SectionIntro 
            title="Design System Foundations"
            text="Explore the fundamental design values that power the Atomix design system."
            className="u-text-center"
            style={{
              marginBottom: '40px'
            }}
          />
          
          <Grid>
            <GridCol md={6} lg={4} className="u-mt-4">
              <Card 
                className="u-h-100" 
                variant="tertiary"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(124, 58, 237, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #7c3aed, #d8b4fe)',
                }} />
                <h3 className="u-mb-3" style={{
                  background: 'linear-gradient(90deg, #7c3aed, #6d28d9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700',
                  fontSize: '1.5rem'
                }}>Colors</h3>
                <p className="u-mb-4" style={{
                  color: '#4b5563',
                  lineHeight: '1.6'
                }}>Explore our comprehensive color system with brand colors, semantic colors, and neutral palettes. Includes 10-step color scales and WCAG 2.1 AA compliance.</p>
                <Link href="/docs/design-tokens/colors">
                    <Button 
                      variant="outline-primary" 
                      label="Color Tokens" 
                      size="sm" 
                      style={{
                        background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                        border: 'none',
                        color: 'white',
                        fontWeight: '600',
                        borderRadius: '6px'
                      }}
                    />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4} className="u-mt-4">
              <Card 
                className="u-h-100" 
                variant="tertiary"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(124, 58, 237, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #f3f4f6, #d1d5db)',
                }} />
                <h3 className="u-mb-3" style={{
                  background: 'linear-gradient(90deg, #6b7280, #374151)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700',
                  fontSize: '1.5rem'
                }}>Spacing</h3>
                <p className="u-mb-4" style={{
                  color: '#4b5563',
                  lineHeight: '1.6'
                }}>Learn about our spacing scale based on a 4px grid system for consistent layouts. Includes margins, padding, and layout spacing tokens.</p>
                <Link href="/docs/design-tokens/spacing">
                  <Button 
                    variant="outline-primary" 
                    label="Spacing Tokens" 
                    size="sm" 
                    style={{
                      background: 'linear-gradient(135deg, #6b7280, #374151)',
                      border: 'none',
                      color: 'white',
                      fontWeight: '600',
                      borderRadius: '6px'
                    }}
                  />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4} className="u-mt-4">
              <Card 
                className="u-h-100" 
                variant="tertiary"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(124, 58, 237, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                }} />
                <h3 className="u-mb-3" style={{
                  background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700',
                  fontSize: '1.5rem'
                }}>Typography</h3>
                <p className="u-mb-4" style={{
                  color: '#4b5563',
                  lineHeight: '1.6'
                }}>Explore our typography system including font families, sizes, weights, and line heights. Built for readability and accessibility.</p>
                <Link href="/docs/design-tokens/typography">
                  <Button 
                    variant="outline-primary" 
                    label="Typography Tokens" 
                    size="sm" 
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      border: 'none',
                      color: 'white',
                      fontWeight: '600',
                      borderRadius: '6px'
                    }}
                  />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4} className="u-mt-4">
              <Card 
                className="u-h-100" 
                variant="tertiary"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(124, 58, 237, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #10b981, #34d399)',
                }} />
                <h3 className="u-mb-3" style={{
                  background: 'linear-gradient(90deg, #10b981, #047857)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700',
                  fontSize: '1.5rem'
                }}>Grid</h3>
                <p className="u-mb-4" style={{
                  color: '#4b5563',
                  lineHeight: '1.6'
                }}>Responsive grid system with 12 columns, customizable gutters, and breakpoints. Create flexible, consistent layouts across all devices.</p>
                <Link href="/docs/design-tokens/grid">
                  <Button 
                    variant="outline-primary" 
                    label="Grid Tokens" 
                    size="sm" 
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #047857)',
                      border: 'none',
                      color: 'white',
                      fontWeight: '600',
                      borderRadius: '6px'
                    }}
                  />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4} className="u-mt-4">
              <Card 
                className="u-h-100" 
                variant="tertiary"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(124, 58, 237, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                }} />
                <h3 className="u-mb-3" style={{
                  background: 'linear-gradient(90deg, #f59e0b, #92400e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700',
                  fontSize: '1.5rem'
                }}>Elevation</h3>
                <p className="u-mb-4" style={{
                  color: '#4b5563',
                  lineHeight: '1.6'
                }}>Shadow and depth system for creating visual hierarchy. Multiple elevation levels with consistent shadow progression for light and dark themes.</p>
                <Link href="/docs/design-tokens/elevation">
                  <Button 
                    variant="outline-primary" 
                    label="Elevation Tokens" 
                    size="sm" 
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b, #92400e)',
                      border: 'none',
                      color: 'white',
                      fontWeight: '600',
                      borderRadius: '6px'
                    }}
                  />
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
'use client';

import { FC } from 'react';
import {
  Button,
  Hero,
  GridCol,
  Block,
  SectionIntro,
  Grid,
} from "@shohojdhara/atomix";
import Link from "next/link";
import { GlassProps } from "@/types/atomix-components";

const DesignTokensOverviewPage: FC = () => {
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
                    background: 'linear-gradient(135deg, var(--atomix-primary), var(--atomix-primary-7))',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
                    padding: 'var(--atomix-spacing-3) var(--atomix-spacing-6)',
                    borderRadius: 'var(--atomix-border-radius-lg)',
                    fontWeight: 'var(--atomix-font-weight-semibold)',
                    transition: 'all 0.2s ease'
                  }}
                />
              </Link>
              <Link href="/docs/design-tokens/spacing">
                <Button 
                  variant="secondary" 
                  label="Spacing" 
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(124, 58, 237, 0.25)',
                    boxShadow: '0 4px 20px rgba(124, 58, 237, 0.15)',
                    padding: 'var(--atomix-spacing-3) var(--atomix-spacing-6)',
                    borderRadius: 'var(--atomix-border-radius-lg)',
                    color: 'var(--atomix-primary-8)',
                    fontWeight: 'var(--atomix-font-weight-semibold)',
                    transition: 'all 0.2s ease'
                  }}
                />
              </Link>
              <Link href="/docs/design-tokens/typography">
                <Button 
                  variant="secondary" 
                  label="Typography" 
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(124, 58, 237, 0.25)',
                    boxShadow: '0 4px 20px rgba(124, 58, 237, 0.15)',
                    padding: 'var(--atomix-spacing-3) var(--atomix-spacing-6)',
                    borderRadius: 'var(--atomix-border-radius-lg)',
                    color: 'var(--atomix-primary-8)',
                    fontWeight: 'var(--atomix-font-weight-semibold)',
                    transition: 'all 0.2s ease'
                  }}
                />
              </Link>
            </div>
          }
        />

        <Block spacing="sm" container={{type: 'fluid'}}>
          <SectionIntro 
            title="Design System Foundations"
            text="Explore the fundamental design values that power the Atomix design system."
            className="u-text-center"
            style={{
              marginBottom: '40px'
            }}
          />
          
          <Grid>
            {[{title:'Colors',desc:'Explore our comprehensive color system with brand colors, semantic colors, and neutral palettes. Includes 10-step color scales and WCAG 2.1 AA compliance.',href:'/docs/design-tokens/colors',grad1:'var(--atomix-primary)',grad2:'var(--atomix-primary-3)',grad3:'var(--atomix-primary-7)'},{title:'Spacing',desc:'Learn about our spacing scale based on a 4px grid system for consistent layouts. Includes margins, padding, and layout spacing tokens.',href:'/docs/design-tokens/spacing',grad1:'var(--atomix-gray-6)',grad2:'var(--atomix-gray-4)',grad3:'var(--atomix-gray-8)'},{title:'Typography',desc:'Explore our typography system including font families, sizes, weights, and line heights. Built for readability and accessibility.',href:'/docs/design-tokens/typography',grad1:'var(--atomix-info)',grad2:'var(--atomix-info-bg-subtle)',grad3:'var(--atomix-info-hover)'},{title:'Grid',desc:'Responsive grid system with 12 columns, customizable gutters, and breakpoints. Create flexible, consistent layouts across all devices.',href:'/docs/design-tokens/grid',grad1:'var(--atomix-success)',grad2:'var(--atomix-success-bg-subtle)',grad3:'var(--atomix-success-hover)'},{title:'Elevation',desc:'Shadow and depth system for creating visual hierarchy. Multiple elevation levels with consistent shadow progression for light and dark themes.',href:'/docs/design-tokens/elevation',grad1:'var(--atomix-warning)',grad2:'var(--atomix-warning-bg-subtle)',grad3:'var(--atomix-warning-hover)'}].map((item,i)=>(
            <GridCol key={i} md={6} lg={4} className="u-mt-4">
              <div 
                className="u-h-100" 
                style={{
                  background:'rgba(255,255,255,0.95)',
                  backdropFilter:'blur(20px)',
                  border:'1px solid rgba(124,58,237,0.15)',
                  borderRadius:'var(--atomix-border-radius-xl)',
                  transition:'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                  overflow:'hidden',
                  position:'relative',
                  padding:'var(--atomix-spacing-6)',
                  boxShadow:'0 4px 16px rgba(0,0,0,0.04)'
                }} 
                onMouseEnter={(e)=>{
                  e.currentTarget.style.transform='translateY(-8px)';
                  e.currentTarget.style.boxShadow='0 12px 32px rgba(124,58,237,0.12)';
                  e.currentTarget.style.borderColor='rgba(124,58,237,0.25)';
                }} 
                onMouseLeave={(e)=>{
                  e.currentTarget.style.transform='translateY(0)';
                  e.currentTarget.style.boxShadow='0 4px 16px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor='rgba(124,58,237,0.15)';
                }}
              >
                <div style={{
                  position:'absolute',
                  top:0,
                  left:0,
                  right:0,
                  height:'4px',
                  background:`linear-gradient(90deg,${item.grad1},${item.grad2})`
                }}/>
                <h3 
                  className="u-mb-3" 
                  style={{
                    background:`linear-gradient(135deg,${item.grad1},${item.grad3})`,
                    WebkitBackgroundClip:'text',
                    WebkitTextFillColor:'transparent',
                    backgroundClip:'text',
                    fontWeight:'var(--atomix-font-weight-bold)',
                    fontSize:'var(--atomix-font-size-2xl)',
                    marginBottom:'var(--atomix-spacing-3)'
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="u-mb-4" 
                  style={{
                    color:'var(--atomix-secondary-text-emphasis)',
                    lineHeight:'var(--atomix-line-height-lg)',
                    fontSize:'var(--atomix-font-size-md)',
                    marginBottom:'var(--atomix-spacing-4)'
                  }}
                >
                  {item.desc}
                </p>
                <Link href={item.href}>
                  <Button 
                    variant="outline-primary" 
                    label={`${item.title} Tokens`} 
                    size="sm" 
                    style={{
                      background:`linear-gradient(135deg,${item.grad1},${item.grad3})`,
                      border:'none',
                      color:'white',
                      fontWeight:'var(--atomix-font-weight-semibold)',
                      borderRadius:'var(--atomix-border-radius-md)',
                      boxShadow:'0 4px 12px rgba(0,0,0,0.15)',
                      transition:'all 0.2s ease'
                    }}
                  />
                </Link>
              </div>
            </GridCol>
            ))}
          </Grid>
        </Block>
      </div>
    </>
  );
};

export default DesignTokensOverviewPage;
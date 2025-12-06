'use client';

import React from "react";
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
            {[{title:'Colors',desc:'Explore our comprehensive color system with brand colors, semantic colors, and neutral palettes. Includes 10-step color scales and WCAG 2.1 AA compliance.',href:'/docs/design-tokens/colors',grad1:'#7c3aed',grad2:'#d8b4fe',grad3:'#6d28d9'},{title:'Spacing',desc:'Learn about our spacing scale based on a 4px grid system for consistent layouts. Includes margins, padding, and layout spacing tokens.',href:'/docs/design-tokens/spacing',grad1:'#f3f4f6',grad2:'#d1d5db',grad3:'#374151'},{title:'Typography',desc:'Explore our typography system including font families, sizes, weights, and line heights. Built for readability and accessibility.',href:'/docs/design-tokens/typography',grad1:'#3b82f6',grad2:'#60a5fa',grad3:'#1d4ed8'},{title:'Grid',desc:'Responsive grid system with 12 columns, customizable gutters, and breakpoints. Create flexible, consistent layouts across all devices.',href:'/docs/design-tokens/grid',grad1:'#10b981',grad2:'#34d399',grad3:'#047857'},{title:'Elevation',desc:'Shadow and depth system for creating visual hierarchy. Multiple elevation levels with consistent shadow progression for light and dark themes.',href:'/docs/design-tokens/elevation',grad1:'#f59e0b',grad2:'#fbbf24',grad3:'#92400e'}].map((item,i)=>(
            <GridCol key={i} md={6} lg={4} className="u-mt-4">
              <div className="u-h-100" style={{background:'rgba(255,255,255,0.7)',backdropFilter:'blur(10px)',border:'1px solid rgba(124,58,237,0.2)',borderRadius:'12px',transition:'transform 0.3s ease, box-shadow 0.3s ease',overflow:'hidden',position:'relative',padding:'24px'}} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-8px)';e.currentTarget.style.boxShadow='0 12px 24px rgba(124,58,237,0.2)';}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 12px rgba(0,0,0,0.05)';}}>                <div style={{position:'absolute',top:0,left:0,right:0,height:'4px',background:`linear-gradient(90deg,${item.grad1},${item.grad2})`}}/>
                <h3 className="u-mb-3" style={{background:`linear-gradient(90deg,${item.grad1},${item.grad3})`,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',fontWeight:'700',fontSize:'1.5rem'}}>{item.title}</h3>
                <p className="u-mb-4" style={{color:'#4b5563',lineHeight:'1.6'}}>{item.desc}</p>
                <Link href={item.href}>
                  <Button variant="outline-primary" label={`${item.title} Tokens`} size="sm" style={{background:`linear-gradient(135deg,${item.grad1},${item.grad3})`,border:'none',color:'white',fontWeight:'600',borderRadius:'6px'}}/>
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
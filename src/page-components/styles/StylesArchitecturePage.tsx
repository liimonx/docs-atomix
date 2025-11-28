'use client';

import React, { useState, useEffect } from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';

const StylesArchitecturePage = () => {
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
        title="Styles Architecture"
        text="ITCSS structure and organization of the Atomix CSS framework"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="ITCSS Architecture"
          text="Atomix styles are organized in a hierarchical structure that moves from generic, far-reaching styles to specific, localized styles. This creates a natural cascade that minimizes specificity conflicts and promotes reusability."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
              <Card className="u-p-6">
                <h3 className="u-fs-xl u-fw-semibold u-mb-4">Architecture Overview</h3>
                <pre className="u-mt-4 u-p-4 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`src/styles/
├── 01-settings/     # Variables, colors, configuration
├── 02-tools/        # Mixins, functions, utilities
├── 03-generic/      # Reset, normalize, box-sizing
├── 04-elements/     # Base HTML element styles
├── 05-objects/      # Layout patterns (OOCSS)
├── 06-components/   # UI components
└── 99-utilities/    # Utility classes`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">ITCSS Methodology</h3>
              <p className="u-text-secondary-emphasis u-mb-4">ITCSS organizes CSS in order of specificity and reach:</p>
              <ul className="u-mt-4 u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis">• Specificity increases as you go down</li>
                <li className="u-text-secondary-emphasis">• Reach decreases as you go down</li>
                <li className="u-text-secondary-emphasis">• Explicitness increases as you go down</li>
                <li className="u-text-secondary-emphasis">• No output in the first two layers</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Key Principles</h3>
              <p className="u-text-secondary-emphasis u-mb-4">The ITCSS methodology is based on these principles:</p>
              <ul className="u-mt-4 u-list-none u-d-flex u-flex-direction-column u-gap-2">
                <li className="u-text-secondary-emphasis">• Predictable cascade behavior</li>
                <li className="u-text-secondary-emphasis">• Reduced specificity conflicts</li>
                <li className="u-text-secondary-emphasis">• Improved code reusability</li>
                <li className="u-text-secondary-emphasis">• Scalable architecture</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Layer Structure</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Each layer in the ITCSS architecture serves a specific purpose:</p>
              
              <div className="u-mt-4">
                <h4 className="u-fs-lg u-fw-semibold u-mb-2">Settings</h4>
                <p className="u-text-secondary-emphasis u-mb-4">Global variables, colors, configuration - no CSS output</p>
                
                <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Tools</h4>
                <p className="u-text-secondary-emphasis u-mb-4">Mixins, functions, utilities - no CSS output</p>
                
                <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Generic</h4>
                <p className="u-text-secondary-emphasis u-mb-4">Reset, normalize, box-sizing - broad reach, low specificity</p>
                
                <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Elements</h4>
                <p className="u-text-secondary-emphasis u-mb-4">Base HTML element styles - broad reach, low specificity</p>
                
                <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Objects</h4>
                <p className="u-text-secondary-emphasis u-mb-4">Layout patterns (OOCSS) - medium reach, medium specificity</p>
                
                <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Components</h4>
                <p className="u-text-secondary-emphasis u-mb-4">UI components - narrow reach, high specificity</p>
                
                <h4 className="u-fs-lg u-fw-semibold u-mt-3 u-mb-2">Utilities</h4>
                <p className="u-text-secondary-emphasis">Helper classes - narrow reach, highest specificity</p>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default StylesArchitecturePage;
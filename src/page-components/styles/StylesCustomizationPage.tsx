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

const StylesCustomizationPage = () => {
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
        title="Styles Customization"
        text="Theming and brand integration with Atomix CSS framework"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Customization Options"
          text="Atomix provides multiple levels of customization to match your brand identity and create unique user experiences."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Customization Philosophy</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Atomix follows a principled approach to customization:</p>
              
              <ul className="u-mt-4 u-list-none u-d-flex u-flex-direction-column u-gap-3">
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Maintain System Integrity</strong> - Customizations should enhance, not break the system</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Follow ITCSS</strong> - Respect the inverted triangle architecture</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Use Design Tokens</strong> - Leverage the token system for consistency</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Progressive Enhancement</strong> - Start with defaults, then customize</li>
                <li className="u-text-secondary-emphasis"><strong className="u-text-primary-emphasis">Accessibility First</strong> - Ensure customizations meet accessibility standards</li>
              </ul>
              
              <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-3">Customization Levels</h4>
              <div className="u-mt-3 u-overflow-x-auto">
                <table className="u-w-100" style={{ borderCollapse: 'collapse' }}>
                  <thead className="u-bg-tertiary">
                    <tr>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">Level</th>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">Scope</th>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">Complexity</th>
                      <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3 u-fw-semibold u-text-primary-emphasis">Configuration</td>
                      <td className="u-p-3 u-text-secondary-emphasis">Variables only</td>
                      <td className="u-p-3 u-text-secondary-emphasis">Low</td>
                      <td className="u-p-3 u-text-secondary-emphasis">Brand colors, spacing tweaks</td>
                    </tr>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3 u-fw-semibold u-text-primary-emphasis">Theming</td>
                      <td className="u-p-3 u-text-secondary-emphasis">CSS custom properties</td>
                      <td className="u-p-3 u-text-secondary-emphasis">Medium</td>
                      <td className="u-p-3 u-text-secondary-emphasis">Runtime theme switching</td>
                    </tr>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3 u-fw-semibold u-text-primary-emphasis">Extension</td>
                      <td className="u-p-3 u-text-secondary-emphasis">New components/utilities</td>
                      <td className="u-p-3 u-text-secondary-emphasis">Medium-High</td>
                      <td className="u-p-3 u-text-secondary-emphasis">Additional functionality</td>
                    </tr>
                    <tr>
                      <td className="u-p-3 u-fw-semibold u-text-primary-emphasis">Architecture</td>
                      <td className="u-p-3 u-text-secondary-emphasis">System structure</td>
                      <td className="u-p-3 u-text-secondary-emphasis">High</td>
                      <td className="u-p-3 u-text-secondary-emphasis">Major modifications</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">SCSS Variable Override</h3>
              <p className="u-text-secondary-emphasis u-mb-4">The simplest way to customize Atomix is by overriding SCSS variables:</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
{`// Override before importing Atomix
$primary-6: #your-brand-color;
$font-family-base: 'Your Font', sans-serif;
$border-radius: 0.5rem;

// Import Atomix with your customizations
@use 'atomix/styles' as *;`}
              </pre>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">@use with Configuration</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Import Atomix with configuration options:</p>
              <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
{`@use 'atomix/styles' with (
  $primary-6: #your-brand-color,
  $font-family-base: 'Your Font', sans-serif
);`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-fs-xl u-fw-semibold u-mb-4">Theming System</h3>
              <p className="u-text-secondary-emphasis u-mb-4">Atomix provides a powerful theming system based on CSS custom properties:</p>
              
              <div className="u-mt-4">
                <h4 className="u-fs-lg u-fw-semibold u-mb-2">Runtime Theme Switching</h4>
                <p className="u-text-secondary-emphasis u-mb-2">Switch themes dynamically with JavaScript:</p>
                <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
{`// Switch to dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Switch to light theme
document.documentElement.setAttribute('data-theme', 'light');`}
                </pre>
                
                <h4 className="u-fs-lg u-fw-semibold u-mt-4 u-mb-2">Creating Custom Themes</h4>
                <p className="u-text-secondary-emphasis u-mb-2">Define your own themes with CSS custom properties:</p>
                <pre className="u-mt-3 u-p-3 u-bg-tertiary u-br-md u-overflow-x-auto u-fs-sm" style={{ fontFamily: 'monospace' }}>
{`:root[data-theme="brand"] {
  --atomix-primary: #your-brand-color;
  --atomix-primary-6: #your-brand-color;
  --atomix-primary-9: #your-brand-color;
}`}
                </pre>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default StylesCustomizationPage;
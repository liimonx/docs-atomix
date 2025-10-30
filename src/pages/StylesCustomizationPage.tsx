import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';

const StylesCustomizationPage = () => {
  return (
    <>
      <Helmet>
        <title>Styles Customization - Atomix Design System</title>
        <meta
          name="description"
          content="Learn how to customize and theme Atomix styles to match your brand identity."
        />
      </Helmet>

      <Hero
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as any}
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
              <h3>Customization Philosophy</h3>
              <p>Atomix follows a principled approach to customization:</p>
              
              <ul className="u-mt-4">
                <li><strong>Maintain System Integrity</strong> - Customizations should enhance, not break the system</li>
                <li><strong>Follow ITCSS</strong> - Respect the inverted triangle architecture</li>
                <li><strong>Use Design Tokens</strong> - Leverage the token system for consistency</li>
                <li><strong>Progressive Enhancement</strong> - Start with defaults, then customize</li>
                <li><strong>Accessibility First</strong> - Ensure customizations meet accessibility standards</li>
              </ul>
              
              <h4 className="u-mt-4">Customization Levels</h4>
              <div className="u-mt-3">
                <table className="u-w-100">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Scope</th>
                      <th>Complexity</th>
                      <th>Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Configuration</strong></td>
                      <td>Variables only</td>
                      <td>Low</td>
                      <td>Brand colors, spacing tweaks</td>
                    </tr>
                    <tr>
                      <td><strong>Theming</strong></td>
                      <td>CSS custom properties</td>
                      <td>Medium</td>
                      <td>Runtime theme switching</td>
                    </tr>
                    <tr>
                      <td><strong>Extension</strong></td>
                      <td>New components/utilities</td>
                      <td>Medium-High</td>
                      <td>Additional functionality</td>
                    </tr>
                    <tr>
                      <td><strong>Architecture</strong></td>
                      <td>System structure</td>
                      <td>High</td>
                      <td>Major modifications</td>
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
              <h3>SCSS Variable Override</h3>
              <p>The simplest way to customize Atomix is by overriding SCSS variables:</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
              <h3>@use with Configuration</h3>
              <p>Import Atomix with configuration options:</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
              <h3>Theming System</h3>
              <p>Atomix provides a powerful theming system based on CSS custom properties:</p>
              
              <div className="u-mt-4">
                <h4>Runtime Theme Switching</h4>
                <p>Switch themes dynamically with JavaScript:</p>
                <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`// Switch to dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Switch to light theme
document.documentElement.setAttribute('data-theme', 'light');`}
                </pre>
                
                <h4 className="u-mt-4">Creating Custom Themes</h4>
                <p>Define your own themes with CSS custom properties:</p>
                <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
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
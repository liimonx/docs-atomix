'use client';

import React from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';

const GuidesAtomixGlassThemingPage = () => {
  return (
    <>

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
        backgroundImageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Guides - Atomix Glass Theming"
        text="Customize glass morphism effects to match your brand identity"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Atomix Glass Theming"
          text="AtomixGlass is highly customizable, allowing you to create unique glass morphism effects that align with your brand. This guide covers theming options, custom configurations, and advanced techniques for creating stunning visual effects."
        />
        
        <Row className="u-mt-8">
                      <GridCol md={12}>
                        <Card className="u-p-6">
              <h3>Basic Theming</h3>
              <p>AtomixGlass provides several props for basic customization:</p>
              
              <h4 className="u-mt-4">Core Visual Properties</h4>
              <div className="u-mt-3">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--atomix-border)' }}>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Property</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Type</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Default</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}><code>displacementScale</code></td>
                      <td style={{ padding: '12px' }}>number</td>
                      <td style={{ padding: '12px' }}>20</td>
                      <td style={{ padding: '12px' }}>Distortion effect strength</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}><code>blurAmount</code></td>
                      <td style={{ padding: '12px' }}>number</td>
                      <td style={{ padding: '12px' }}>1</td>
                      <td style={{ padding: '12px' }}>Backdrop blur intensity</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}><code>saturation</code></td>
                      <td style={{ padding: '12px' }}>number</td>
                      <td style={{ padding: '12px' }}>140</td>
                      <td style={{ padding: '12px' }}>Color saturation percentage</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}><code>aberrationIntensity</code></td>
                      <td style={{ padding: '12px' }}>number</td>
                      <td style={{ padding: '12px' }}>2.5</td>
                      <td style={{ padding: '12px' }}>Chromatic aberration amount</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}><code>elasticity</code></td>
                      <td style={{ padding: '12px' }}>number</td>
                      <td style={{ padding: '12px' }}>0.05</td>
                      <td style={{ padding: '12px' }}>Interactive elasticity (0-1)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px' }}><code>cornerRadius</code></td>
                      <td style={{ padding: '12px' }}>number</td>
                      <td style={{ padding: '12px' }}>16</td>
                      <td style={{ padding: '12px' }}>Border radius in pixels</td>
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
              <h3>Preset Themes</h3>
              <p>AtomixGlass includes several preset themes:</p>
              
              <h4 className="u-mt-3">Subtle Theme</h4>
              <pre className="u-mt-2 u-p-3 u-bg-gray-100 u-br-4">
{`<AtomixGlass
  displacementScale={10}
  blurAmount={0.5}
  saturation={120}
  aberrationIntensity={1.5}
  elasticity={0.02}
  cornerRadius={12}
>
  Subtle glass effect
</AtomixGlass>`}
              </pre>
              
              <h4 className="u-mt-3">Bold Theme</h4>
              <pre className="u-mt-2 u-p-3 u-bg-gray-100 u-br-4">
{`<AtomixGlass
  displacementScale={30}
  blurAmount={2}
  saturation={160}
  aberrationIntensity={3.5}
  elasticity={0.1}
  cornerRadius={20}
>
  Bold glass effect
</AtomixGlass>`}
              </pre>
                        </Card>
                      </GridCol>

                      <GridCol md={6}>
                        <Card className="u-p-6 u-h-100">
              <h3>Color Customization</h3>
              <p>Customize glass colors using CSS custom properties:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`.my-glass {
  --glass-bg-color: rgba(255, 255, 255, 0.1);
  --glass-border-color: rgba(255, 255, 255, 0.2);
  --glass-shadow-color: rgba(0, 0, 0, 0.1);
}

/* Dark theme */
.my-glass.dark {
  --glass-bg-color: rgba(0, 0, 0, 0.3);
  --glass-border-color: rgba(255, 255, 255, 0.1);
  --glass-shadow-color: rgba(0, 0, 0, 0.3);
}`}
              </pre>
              
              <p className="u-mt-3">Apply custom class:</p>
              <pre className="u-mt-2 u-p-3 u-bg-gray-100 u-br-4">
{`<AtomixGlass className="my-glass">
  Custom colored glass
</AtomixGlass>`}
              </pre>
                        </Card>
                      </GridCol>
                    </Row>

                    <Row className="u-mt-4">
                      <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Advanced Theming with Shader Mode</h3>
              <p>Shader mode enables advanced WebGL effects for premium experiences. Choose from multiple shader variants:</p>
              
              <h4 className="u-mt-3">Available Shader Variants</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`// Liquid Glass (default) - Smooth liquid-like distortion
    <AtomixGlass
      mode="shader"
  shaderVariant="liquidGlass"
  displacementScale={20}
  blurAmount={1}
>
  Liquid glass effect
</AtomixGlass>

// Apple Fluid - Apple-inspired fluid animations
<AtomixGlass
  mode="shader"
  shaderVariant="appleFluid"
  displacementScale={25}
>
  Apple-style fluid glass
</AtomixGlass>

// Premium Glass - Refined luxury effect
<AtomixGlass
  mode="shader"
  shaderVariant="premiumGlass"
  displacementScale={22}
>
  Premium glass effect
</AtomixGlass>

// Liquid Metal - Metallic liquid effect
<AtomixGlass
  mode="shader"
  shaderVariant="liquidMetal"
  displacementScale={18}
>
  Liquid metal effect
</AtomixGlass>`}
              </pre>
            </Card>
                      </GridCol>
                    </Row>

                    <Row className="u-mt-4">
                      <GridCol md={6}>
                        <Card className="u-p-6 u-h-100">
              <h3>Brand Integration</h3>
              <p>Create a reusable branded glass component:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`// BrandGlass.tsx
import { AtomixGlass } from '@shohojdhara/atomix';

const BrandGlass = ({ children, ...props }) => {
  return (
    <AtomixGlass
      displacementScale={18}
      blurAmount={1.2}
      saturation={145}
      aberrationIntensity={2.8}
      elasticity={0.06}
      cornerRadius={16}
      className="brand-glass"
      {...props}
    >
      {children}
    </AtomixGlass>
  );
};

export default BrandGlass;`}
              </pre>
            </Card>
                      </GridCol>

                      <GridCol md={6}>
                        <Card className="u-p-6 u-h-100">
              <h3>Theme Switching</h3>
              <p>Implement dynamic theme switching:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`const [theme, setTheme] = useState('light');

const glassConfig = {
  light: {
    displacementScale: 20,
    blurAmount: 1,
    saturation: 140,
    aberrationIntensity: 2.5,
    overLight: false,
  },
  dark: {
    displacementScale: 25,
    blurAmount: 1.5,
    saturation: 150,
    aberrationIntensity: 3,
    overLight: true,
  }
};

<AtomixGlass {...glassConfig[theme]}>
  Theme-aware glass
</AtomixGlass>`}
              </pre>
                        </Card>
                      </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Responsive Theming</h3>
              <p>Adjust glass effects based on screen size:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`import { useMediaQuery } from 'react-responsive';

function ResponsiveGlass({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <AtomixGlass
      displacementScale={isMobile ? 10 : 20}
      blurAmount={isMobile ? 0.5 : 1}
      saturation={isMobile ? 120 : 140}
      mode={isMobile ? 'standard' : 'shader'}
      elasticity={isMobile ? 0 : 0.05}
      enableLiquidBlur={!isMobile}
    >
      {children}
    </AtomixGlass>
  );
}`}
              </pre>
                        </Card>
                      </GridCol>
                    </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Best Practices</h3>
              
              <h4 className="u-mt-3">1. Consistency</h4>
              <ul>
                      <li>Use consistent glass settings across similar UI elements</li>
                      <li>Create reusable themed components</li>
                      <li>Document your glass theme configuration</li>
                    </ul>
              
              <h4 className="u-mt-3">2. Accessibility</h4>
              <ul>
                <li>Ensure sufficient contrast for text over glass</li>
                <li>Test with different background images</li>
                <li>Provide fallbacks for browsers without support</li>
                    </ul>
              
              <h4 className="u-mt-3">3. Performance</h4>
              <ul>
                      <li>Use lighter effects on mobile devices</li>
                <li>Limit the number of glass elements per page</li>
                      <li>Consider disabling shader mode on low-end devices</li>
                    </ul>
              
              <h4 className="u-mt-3">4. Brand Alignment</h4>
              <ul>
                      <li>Match glass colors to your brand palette</li>
                      <li>Adjust intensity to match your design language</li>
                      <li>Create variants for different contexts (hero, cards, modals)</li>
                    </ul>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default GuidesAtomixGlassThemingPage;


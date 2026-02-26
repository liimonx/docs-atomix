"use client";

import { FC } from "react";
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const GuidesAtomixGlassThemingPage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
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
                <table className="c-data-table c-data-table--bordered c-data-table--striped c-data-table--dense">
                  <thead className="c-data-table__header u-text-sm">
                    <tr className="c-data-table__header-row">
                      <th className="c-data-table__header-cell">Property</th>
                      <th className="c-data-table__header-cell">Type</th>
                      <th className="c-data-table__header-cell">Default</th>
                      <th className="c-data-table__header-cell">Description</th>
                    </tr>
                  </thead>
                  <tbody className="c-data-table__body u-text-sm">
                    <tr className="c-data-table__row">
                      <td className="c-data-table__cell">
                        <code>displacementScale</code>
                      </td>
                      <td className="c-data-table__cell">number</td>
                      <td className="c-data-table__cell">20</td>
                      <td className="c-data-table__cell">
                        Distortion effect strength
                      </td>
                    </tr>
                    <tr className="c-data-table__row">
                      <td className="c-data-table__cell">
                        <code>blurAmount</code>
                      </td>
                      <td className="c-data-table__cell">number</td>
                      <td className="c-data-table__cell">1</td>
                      <td className="c-data-table__cell">
                        Backdrop blur intensity
                      </td>
                    </tr>
                    <tr className="c-data-table__row">
                      <td className="c-data-table__cell">
                        <code>saturation</code>
                      </td>
                      <td className="c-data-table__cell">number</td>
                      <td className="c-data-table__cell">140</td>
                      <td className="c-data-table__cell">
                        Color saturation percentage
                      </td>
                    </tr>
                    <tr className="c-data-table__row">
                      <td className="c-data-table__cell">
                        <code>aberrationIntensity</code>
                      </td>
                      <td className="c-data-table__cell">number</td>
                      <td className="c-data-table__cell">2.5</td>
                      <td className="c-data-table__cell">
                        Chromatic aberration amount
                      </td>
                    </tr>
                    <tr className="c-data-table__row">
                      <td className="c-data-table__cell">
                        <code>elasticity</code>
                      </td>
                      <td className="c-data-table__cell">number</td>
                      <td className="c-data-table__cell">0.05</td>
                      <td className="c-data-table__cell">
                        Interactive elasticity (0-1)
                      </td>
                    </tr>
                    <tr className="c-data-table__row">
                      <td className="c-data-table__cell">
                        <code>borderRadius</code>
                      </td>
                      <td className="c-data-table__cell">number</td>
                      <td className="c-data-table__cell">16</td>
                      <td className="c-data-table__cell">
                        Border radius in pixels
                      </td>
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
              <pre className="u-mt-2 u-p-3 u-bg-gray-100 u-rounded-4">
                {`<AtomixGlass
  displacementScale={10}
  blurAmount={0.5}
  saturation={120}
  aberrationIntensity={1.5}
  elasticity={0.02}
  borderRadius={12}
>
  Subtle glass effect
</AtomixGlass>`}
              </pre>

              <h4 className="u-mt-3">Bold Theme</h4>
              <pre className="u-mt-2 u-p-3 u-bg-gray-100 u-rounded-4">
                {`<AtomixGlass
  displacementScale={30}
  blurAmount={2}
  saturation={160}
  aberrationIntensity={3.5}
  elasticity={0.1}
  borderRadius={20}
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

              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-rounded-4">
                {`.my-glass {
  --glass-bg-color: rgba(var(--atomix-light-rgb), 0.1);
  --glass-border-color: rgba(var(--atomix-light-rgb), 0.2);
  --glass-shadow-color: rgba(var(--atomix-dark-rgb), 0.1);
}

/* Dark theme */
.my-glass.dark {
  --glass-bg-color: rgba(var(--atomix-dark-rgb), 0.3);
  --glass-border-color: rgba(var(--atomix-light-rgb), 0.1);
  --glass-shadow-color: rgba(var(--atomix-dark-rgb), 0.3);
}`}
              </pre>

              <p className="u-mt-3">Apply custom class:</p>
              <pre className="u-mt-2 u-p-3 u-bg-gray-100 u-rounded-4">
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
              <p>
                Shader mode enables advanced WebGL effects for premium
                experiences. Choose from multiple shader variants:
              </p>

              <h4 className="u-mt-3">Available Shader Variants</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-rounded-4">
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

              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-rounded-4">
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
      borderRadius={16}
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

              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-rounded-4">
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

              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-rounded-4">
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
      withLiquidBlur={!isMobile}
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
              <ul className="u-ms-6 u-text-sm">
                <li className="u-mb-1">
                  Use consistent glass settings across similar UI elements
                </li>
                <li className="u-mb-1">Create reusable themed components</li>
                <li className="u-mb-1">
                  Document your glass theme configuration
                </li>
              </ul>

              <h4 className="u-mt-3">2. Accessibility</h4>
              <ul className="u-ms-6 u-text-sm">
                <li className="u-mb-1">
                  Ensure sufficient contrast for text over glass
                </li>
                <li className="u-mb-1">
                  Test with different background images
                </li>
                <li className="u-mb-1">
                  Provide fallbacks for browsers without support
                </li>
              </ul>

              <h4 className="u-mt-3">3. Performance</h4>
              <ul className="u-ms-6 u-text-sm">
                <li className="u-mb-1">
                  Use lighter effects on mobile devices
                </li>
                <li className="u-mb-1">
                  Limit the number of glass elements per page
                </li>
                <li className="u-mb-1">
                  Consider disabling shader mode on low-end devices
                </li>
              </ul>

              <h4 className="u-mt-3">4. Brand Alignment</h4>
              <ul className="u-ms-6 u-text-sm">
                <li className="u-mb-1">
                  Match glass colors to your brand palette
                </li>
                <li className="u-mb-1">
                  Adjust intensity to match your design language
                </li>
                <li className="u-mb-1">
                  Create variants for different contexts (hero, cards, modals)
                </li>
              </ul>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

GuidesAtomixGlassThemingPage.displayName = "GuidesAtomixGlassThemingPage";

export default GuidesAtomixGlassThemingPage;

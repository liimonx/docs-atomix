'use client';


import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';
import { CodeBlockWithCopy } from '@/components/documentation/CodeBlockWithCopy';

const GeneralThemingGuidePage = () => {
  return (
    <>
      <Hero
        className="u-pt-32 u-pb-16"
        title="Theming Guide"
        text="Learn how to customize Atomix to match your brand identity with comprehensive theming options"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8" container={{type: 'fluid'}}>
        <SectionIntro
          title="Customizing Atomix"
          text="Atomix provides flexible theming capabilities that allow you to customize colors, typography, spacing, and other design tokens to match your brand identity."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Theme Customization</h3>
              <p>Atomix theming is based on CSS custom properties (CSS variables) which makes it easy to customize the design system to match your brand.</p>
              
              <h4 className="u-mt-4">Creating a Custom Theme</h4>
              <p>To create a custom theme, override the default CSS variables in your stylesheet:</p>
              
              <div className="u-mt-3">
                <CodeBlockWithCopy 
                  language="css"
                  code={`:root {
  --atomix-color-primary: #0070f3;
  --atomix-color-primary-hover: #0051d4;
  --atomix-font-family-base: 'Inter', sans-serif;
  --atomix-border-radius-base: 6px;
}`}
                />
              </div>
              
              <h4 className="u-mt-4">Theme Variables</h4>
              <p>Atomix exposes a comprehensive set of CSS variables for theming:</p>
              
              <div className="u-mt-3">
                <ul>
                  <li><b>Color System</b> - Primary, secondary, and semantic colors</li>
                  <li><b>Typography</b> - Font families, sizes, and weights</li>
                  <li><b>Spacing</b> - Consistent spacing scale</li>
                  <li><b>Border Radius</b> - Corner rounding values</li>
                  <li><b>Shadows</b> - Elevation and depth effects</li>
                </ul>
              </div>
              
              <h4 className="u-mt-4">Runtime Theme Switching</h4>
              <p>For dynamic theme switching, update CSS variables using JavaScript:</p>
              
              <div className="u-mt-3">
                <CodeBlockWithCopy 
                  language="javascript"
                  code={`// Switch to dark theme
document.documentElement.style.setProperty('--atomix-color-bg', '#1a1a1a');
document.documentElement.style.setProperty('--atomix-color-text', '#ffffff');`}
                />
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default GeneralThemingGuidePage;
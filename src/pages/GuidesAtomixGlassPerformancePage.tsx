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

const GuidesAtomixGlassPerformancePage = () => {
  return (
    <>
      <Helmet>
        <title>Guides - Atomix Glass Performance - Atomix Design System</title>
        <meta
          name="description"
          content="Learn how to optimize performance when using Atomix Glass effects."
        />
      </Helmet>

      <Hero
        title="Guides - Atomix Glass Performance"
        text="Optimizing performance with Atomix Glass effects and best practices"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Atomix Glass Performance"
          text="The AtomixGlass component creates beautiful glass morphism effects but can be performance-intensive due to its use of CSS filters, backdrop filters, and shader effects. This guide provides best practices for optimizing performance when using AtomixGlass components in your application."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Performance Considerations</h3>
              
              <h4 className="u-mt-3">Hardware Acceleration</h4>
              <p>AtomixGlass automatically uses hardware acceleration through CSS transforms and will-change properties. However, overusing these properties can cause memory issues on some devices.</p>
              
              <p><strong>Recommendations:</strong></p>
              <ul>
                <li>Limit the number of AtomixGlass components visible on screen at once (ideally under 5-7)</li>
                <li>Use simpler glass effects for less important UI elements</li>
              </ul>
              
              <h4 className="u-mt-3">Effect Intensity</h4>
              <p>Higher values for displacement, blur, and aberration effects require more processing power.</p>
              
              <p><strong>Recommendations:</strong></p>
              <ul>
                <li>For performance-critical applications, use lower values:
                  <ul>
                    <li><code>displacementScale</code>: 10-15 (instead of 20+)</li>
                    <li><code>blurAmount</code>: 5-8 (instead of 10+)</li>
                    <li><code>aberrationIntensity</code>: 0.5-1 (instead of 1.5+)</li>
                  </ul>
                </li>
              </ul>
              
              <h4 className="u-mt-3">Shader Mode Considerations</h4>
              <p>The 'shader' mode uses WebGL for advanced effects and is the most performance-intensive option.</p>
              
              <p><strong>Recommendations:</strong></p>
              <ul>
                <li>Reserve shader mode for hero elements or special interactions</li>
                <li>Consider using standard mode for most UI elements</li>
                <li>Disable shader mode on low-end devices (see Device Detection section)</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Device Detection and Adaptive Loading</h3>
              <p>Implement adaptive loading to provide appropriate experiences based on device capabilities:</p>
              
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`import { useEffect, useState } from 'react';
import AtomixGlass from 'path/to/AtomixGlass';

function AdaptiveGlassComponent() {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  
  useEffect(() => {
    // Simple heuristic for detecting low-end devices
    const isLowEnd = (
      navigator.hardwareConcurrency <= 4 ||
      /Android|iPhone|iPod|iPad/.test(navigator.userAgent)
    );
    
    setIsLowEndDevice(isLowEnd);
  }, []);
  
  return (
    <AtomixGlass
      mode={isLowEndDevice ? 'standard' : 'shader'}
      blurAmount={isLowEndDevice ? 5 : 10}
      displacementScale={isLowEndDevice ? 10 : 20}
    >
      Content
    </AtomixGlass>
  );
}`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Performance Monitoring</h3>
              <p>Monitor performance using browser dev tools:</p>
              
              <ul>
                <li>Use Chrome DevTools Performance tab to identify bottlenecks</li>
                <li>Monitor FPS in the Rendering tab</li>
                <li>Check for layout thrashing in the Performance tab</li>
                <li>Use the Memory tab to detect leaks</li>
              </ul>
              
              <h4 className="u-mt-3">Web Vitals</h4>
              <p>Pay attention to Core Web Vitals:</p>
              <ul>
                <li>Cumulative Layout Shift (CLS)</li>
                <li>Largest Contentful Paint (LCP)</li>
                <li>First Input Delay (FID)</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Optimization Techniques</h3>
              
              <h4 className="u-mt-3">Conditional Rendering</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`{isVisible && (
  <AtomixGlass>
    Expensive content
  </AtomixGlass>
)}`}
              </pre>
              
              <h4 className="u-mt-3">Reduced Motion</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<AtomixGlass
  animationDuration={prefersReducedMotion ? 0 : 300}
>
  Content
</AtomixGlass>`}
              </pre>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default GuidesAtomixGlassPerformancePage;
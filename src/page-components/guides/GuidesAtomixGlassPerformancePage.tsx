'use client';

import React, { useState } from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Button,
  Badge,
  Callout,
  Tabs
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';
import {
  Zap,
  TrendingDown,
  Cpu,
  Monitor,
  Copy,
  CheckCircle,
  AlertTriangle,
  Info,
  Lightbulb
} from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './GuidesAtomixGlassPerformancePage.module.scss';

const GuidesAtomixGlassPerformancePage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  const renderCodeBlock = (code: string, language: string, id: string, title?: string) => (
    <div className={styles.guidePage__codeBlock}>
      <div className={styles.guidePage__codeHeader}>
        <span className={styles.guidePage__codeTitle}>{title || language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(code, id)}
        >
          {copiedCode === id ? <CheckCircle size={16} /> : <Copy size={16} />}
        </Button>
      </div>
      <div className={styles.guidePage__codeContent}>
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );

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
        backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
        title="⚡ AtomixGlass Performance"
        text="Optimize glass morphism effects for smooth, performant user experiences"
        alignment="center"
      />

      <Block className={`u-pt-8 u-pb-8 ${styles.guidePage}`}>
        <SectionIntro
          title="Performance Optimization Guide"
          text="The AtomixGlass component creates stunning glass morphism effects but can be performance-intensive. This guide provides best practices, optimization techniques, and monitoring strategies to ensure smooth, performant experiences across all devices."
        />
        
        {/* Performance Metrics */}
        <Row className="u-mt-8">
          <GridCol md={3} sm={6}>
            <Card className={`u-p-6 ${styles.guidePage__metricCard}`}>
              <div className={styles.guidePage__metricValue}>5-7</div>
              <div className={styles.guidePage__metricLabel}>Max Components</div>
              <Badge variant="success" size="sm" label="Recommended" className="u-mt-3" />
            </Card>
          </GridCol>
          <GridCol md={3} sm={6}>
            <Card className={`u-p-6 ${styles.guidePage__metricCard}`}>
              <div className={styles.guidePage__metricValue}>60fps</div>
              <div className={styles.guidePage__metricLabel}>Target Frame Rate</div>
              <Badge variant="primary" size="sm" label="Goal" className="u-mt-3" />
            </Card>
          </GridCol>
          <GridCol md={3} sm={6}>
            <Card className={`u-p-6 ${styles.guidePage__metricCard}`}>
              <div className={styles.guidePage__metricValue}>≤100ms</div>
              <div className={styles.guidePage__metricLabel}>First Input Delay</div>
              <Badge variant="warning" size="sm" label="Web Vital" className="u-mt-3" />
            </Card>
          </GridCol>
          <GridCol md={3} sm={6}>
            <Card className={`u-p-6 ${styles.guidePage__metricCard}`}>
              <div className={styles.guidePage__metricValue}>≤0.1</div>
              <div className={styles.guidePage__metricLabel}>Layout Shift Score</div>
              <Badge variant="info" size="sm" label="CLS Target" className="u-mt-3" />
            </Card>
          </GridCol>
        </Row>
        
        <Callout
          variant="info"
          title="Performance Impact"
          className="u-mt-6"
        >
          AtomixGlass uses CSS filters, backdrop filters, and WebGL shaders. While these create beautiful effects, they can impact performance on lower-end devices. Follow this guide to optimize for all users.
        </Callout>

        {/* Main Content Tabs */}
        <div className="u-mt-8">
          <Tabs
            items={[
              {
                label: 'Best Practices',
                content: (
                  <div>
                    {/* Hardware Acceleration */}
                    <Row className="u-mt-6">
                      <GridCol md={12}>
                        <Card className={`u-p-6 ${styles.guidePage__recommendationCard}`}>
                          <div className="u-flex u-items-start u-gap-4">
                            <div className={styles.guidePage__recommendationIcon}>
                              <Cpu size={20} />
                            </div>
                            <div className="u-flex-1">
                              <h3 className="u-flex u-items-center u-gap-2">
                                Hardware Acceleration
                                <Badge variant="primary" size="sm" label="Critical" />
                              </h3>
                              <p className="u-mt-2 u-text-secondary">
                                AtomixGlass automatically uses hardware acceleration through CSS transforms and will-change properties. However, overusing these can cause memory issues.
                              </p>
                              <div className="u-mt-4">
                                <h4 className="u-text-sm u-font-semibold u-mb-2">✅ Do:</h4>
                                <ul className="u-list-disc u-ml-6 u-space-y-1">
                                  <li>Limit to 5-7 AtomixGlass components visible at once</li>
                                  <li>Use simpler effects for less important UI elements</li>
                                  <li>Remove will-change after animations complete</li>
                                  <li>Monitor GPU memory usage in DevTools</li>
                                </ul>
                              </div>
                              <div className="u-mt-3">
                                <h4 className="u-text-sm u-font-semibold u-mb-2">❌ Don't:</h4>
                                <ul className="u-list-disc u-ml-6 u-space-y-1">
                                  <li>Apply glass effects to large scrollable areas</li>
                                  <li>Nest multiple AtomixGlass components</li>
                                  <li>Use maximum effect values everywhere</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </GridCol>
                    </Row>

                    {/* Effect Intensity */}
                    <Row className="u-mt-4">
                      <GridCol md={12}>
                        <Card className={`u-p-6 ${styles.guidePage__recommendationCard}`}>
                          <div className="u-flex u-items-start u-gap-4">
                            <div className={styles.guidePage__recommendationIcon}>
                              <TrendingDown size={20} />
                            </div>
                            <div className="u-flex-1">
                              <h3 className="u-flex u-items-center u-gap-2">
                                Effect Intensity Optimization
                                <Badge variant="warning" size="sm" label="Important" />
                              </h3>
                              <p className="u-mt-2 u-text-secondary">
                                Higher values for displacement, blur, and aberration require more processing power. Balance visual appeal with performance.
                              </p>
                              <div className="u-mt-4">
                                <table className={styles.guidePage__comparisonTable}>
                                  <thead>
                                    <tr>
                                      <th>Property</th>
                                      <th>Standard</th>
                                      <th>Performance</th>
                                      <th>Impact</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><code>displacementScale</code></td>
                                      <td>20 (default)</td>
                                      <td>10-15</td>
                                      <td><Badge variant="error" size="sm" label="High" /></td>
                                    </tr>
                                    <tr>
                                      <td><code>blurAmount</code></td>
                                      <td>1 (default)</td>
                                      <td>0.5-0.8</td>
                                      <td><Badge variant="warning" size="sm" label="Medium" /></td>
                                    </tr>
                                    <tr>
                                      <td><code>saturation</code></td>
                                      <td>140 (default)</td>
                                      <td>120-130</td>
                                      <td><Badge variant="success" size="sm" label="Low" /></td>
                                    </tr>
                                    <tr>
                                      <td><code>aberrationIntensity</code></td>
                                      <td>2.5 (default)</td>
                                      <td>1.5-2</td>
                                      <td><Badge variant="warning" size="sm" label="Medium" /></td>
                                    </tr>
                                    <tr>
                                      <td><code>elasticity</code></td>
                                      <td>0.05 (default)</td>
                                      <td>0-0.02</td>
                                      <td><Badge variant="info" size="sm" label="Variable" /></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </GridCol>
                    </Row>

                    {/* Shader Mode */}
        <Row className="u-mt-4">
                      <GridCol md={12}>
                        <Card className={`u-p-6 ${styles.guidePage__recommendationCard}`}>
                          <div className="u-flex u-items-start u-gap-4">
                            <div className={styles.guidePage__recommendationIcon}>
                              <Zap size={20} />
                            </div>
                            <div className="u-flex-1">
                              <h3 className="u-flex u-items-center u-gap-2">
                                Shader Mode Considerations
                                <Badge variant="error" size="sm" label="High Impact" />
                              </h3>
                              <p className="u-mt-2 u-text-secondary">
                                The 'shader' mode uses WebGL for advanced effects and is the most performance-intensive option. Use strategically.
                              </p>
                              <Callout variant="warning" title="Performance Warning" className="u-mt-4">
                                Shader mode can reduce frame rates by 30-50% on low-end devices. Always provide fallbacks.
                              </Callout>
                              <div className="u-mt-4">
                                <h4 className="u-text-sm u-font-semibold u-mb-2">When to use shader mode:</h4>
                                <ul className="u-list-disc u-ml-6 u-space-y-1">
                                  <li>Hero sections and landing page headers</li>
                                  <li>Special interactive elements (on hover/click)</li>
                                  <li>Marketing pages with high-end target audience</li>
                                  <li>Desktop-first applications</li>
                                </ul>
                              </div>
                              <div className="u-mt-3">
                                <h4 className="u-text-sm u-font-semibold u-mb-2">When to use standard mode:</h4>
                                <ul className="u-list-disc u-ml-6 u-space-y-1">
                                  <li>Mobile applications</li>
                                  <li>Dashboard and admin interfaces</li>
                                  <li>Repeated UI elements (cards, modals)</li>
                                  <li>Low-end device support required</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </GridCol>
                    </Row>
                  </div>
                ),
              },
              {
                label: 'Device Detection',
                content: (
                  <div>
                    <Row className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-p-6">
                          <div className="u-flex u-items-start u-gap-4">
                            <div className={styles.guidePage__recommendationIcon}>
                              <Monitor size={20} />
                            </div>
                            <div className="u-flex-1">
                              <h3>Adaptive Loading Strategy</h3>
                              <p className="u-mt-2 u-text-secondary">
                                Implement adaptive loading to provide appropriate experiences based on device capabilities. This ensures optimal performance across all devices.
                              </p>
                            </div>
                          </div>
                        </Card>
                      </GridCol>
                    </Row>

                    <Row className="u-mt-4">
                      <GridCol md={12}>
                        <h4 className="u-mb-3">Basic Device Detection</h4>
                        {renderCodeBlock(
`import { useEffect, useState } from 'react';
import { AtomixGlass } from '@shohojdhara/atomix';

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
      displacementScale={isLowEndDevice ? 10 : 20}
      blurAmount={isLowEndDevice ? 0.5 : 1}
      saturation={isLowEndDevice ? 120 : 140}
      aberrationIntensity={isLowEndDevice ? 1.5 : 2.5}
      elasticity={isLowEndDevice ? 0 : 0.05}
      enableLiquidBlur={!isLowEndDevice}
      disableEffects={isLowEndDevice}
    >
      Content
    </AtomixGlass>
  );
}`,
                          'typescript',
                          'device-detection-basic',
                          'AdaptiveGlassComponent.tsx'
                        )}
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
                      <GridCol md={12}>
                        <h4 className="u-mb-3">Advanced Device Detection Hook</h4>
                        {renderCodeBlock(
`import { useEffect, useState } from 'react';

interface DeviceCapabilities {
  isLowEnd: boolean;
  isMobile: boolean;
  hasGoodGPU: boolean;
  prefersReducedMotion: boolean;
}

export function useDeviceCapabilities(): DeviceCapabilities {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isLowEnd: false,
    isMobile: false,
    hasGoodGPU: true,
    prefersReducedMotion: false,
  });

  useEffect(() => {
    // Check CPU cores
    const cores = navigator.hardwareConcurrency || 2;
    
    // Check device type
    const isMobile = /Android|iPhone|iPod|iPad/.test(navigator.userAgent);
    
    // Check GPU (basic heuristic)
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    const debugInfo = gl?.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo ? gl?.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
    const hasGoodGPU = !renderer.toLowerCase().includes('intel');
    
    // Check reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
    
    // Determine if low-end
    const isLowEnd = cores <= 4 || isMobile || !hasGoodGPU;

    setCapabilities({
      isLowEnd,
      isMobile,
      hasGoodGPU,
      prefersReducedMotion,
    });
  }, []);

  return capabilities;
}

// Usage
function OptimizedGlassComponent() {
  const { isLowEnd, prefersReducedMotion } = useDeviceCapabilities();
  
  return (
    <AtomixGlass
      mode={isLowEnd ? 'standard' : 'shader'}
      displacementScale={isLowEnd ? 10 : 20}
      blurAmount={isLowEnd ? 0.5 : 1}
      saturation={isLowEnd ? 120 : 140}
      aberrationIntensity={isLowEnd ? 1.5 : 2.5}
      elasticity={prefersReducedMotion ? 0 : 0.05}
      reducedMotion={prefersReducedMotion}
      enableLiquidBlur={!isLowEnd}
    >
      Content
    </AtomixGlass>
  );
}`,
                          'typescript',
                          'device-detection-advanced',
                          'useDeviceCapabilities.ts'
                        )}
                      </GridCol>
                    </Row>

                    <Callout variant="info" title="Pro Tip" className="u-mt-4">
                      Consider storing device capabilities in a context provider to avoid recalculating on every component mount.
                    </Callout>
                  </div>
                ),
              },
              {
                label: 'Monitoring',
                content: (
                  <div>
                    <Row className="u-mt-6">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
                          <div className="u-flex u-items-start u-gap-3 u-mb-4">
                            <Monitor size={24} className="u-text-primary" />
                            <div>
                              <h3>Browser DevTools</h3>
                              <p className="u-text-sm u-text-secondary u-mt-1">
                                Essential tools for performance monitoring
                              </p>
                            </div>
                          </div>
                          
                          <h4 className="u-text-sm u-font-semibold u-mb-2">Performance Tab</h4>
                          <ul className="u-list-disc u-ml-6 u-space-y-1 u-text-sm u-mb-4">
                            <li>Record and analyze frame rates</li>
                            <li>Identify bottlenecks and long tasks</li>
                            <li>Check for layout thrashing</li>
                            <li>Monitor paint and composite times</li>
                          </ul>
                          
                          <h4 className="u-text-sm u-font-semibold u-mb-2">Rendering Tab</h4>
                          <ul className="u-list-disc u-ml-6 u-space-y-1 u-text-sm u-mb-4">
                            <li>Enable FPS meter</li>
                            <li>Show paint flashing</li>
                            <li>Highlight layout shift regions</li>
                            <li>Emulate vision deficiencies</li>
              </ul>
              
                          <h4 className="u-text-sm u-font-semibold u-mb-2">Memory Tab</h4>
                          <ul className="u-list-disc u-ml-6 u-space-y-1 u-text-sm">
                            <li>Take heap snapshots</li>
                            <li>Detect memory leaks</li>
                            <li>Monitor allocation timeline</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
                          <div className="u-flex u-items-start u-gap-3 u-mb-4">
                            <Zap size={24} className="u-text-warning" />
                            <div>
                              <h3>Core Web Vitals</h3>
                              <p className="u-text-sm u-text-secondary u-mt-1">
                                Key metrics for user experience
                              </p>
                            </div>
                          </div>
                          
                          <div className="u-space-y-4">
                            <div>
                              <div className="u-flex u-items-center u-justify-between u-mb-1">
                                <h4 className="u-text-sm u-font-semibold">Largest Contentful Paint (LCP)</h4>
                                <Badge variant="success" size="sm" label="≤2.5s" />
                              </div>
                              <p className="u-text-xs u-text-secondary">
                                Time until largest content element is rendered. AtomixGlass can delay LCP if used in hero sections.
                              </p>
                            </div>
                            
                            <div>
                              <div className="u-flex u-items-center u-justify-between u-mb-1">
                                <h4 className="u-text-sm u-font-semibold">First Input Delay (FID)</h4>
                                <Badge variant="success" size="sm" label="≤100ms" />
                              </div>
                              <p className="u-text-xs u-text-secondary">
                                Time from first interaction to browser response. Heavy shader effects can increase FID.
                              </p>
                            </div>
                            
                            <div>
                              <div className="u-flex u-items-center u-justify-between u-mb-1">
                                <h4 className="u-text-sm u-font-semibold">Cumulative Layout Shift (CLS)</h4>
                                <Badge variant="success" size="sm" label="≤0.1" />
                              </div>
                              <p className="u-text-xs u-text-secondary">
                                Visual stability score. Always set explicit dimensions for AtomixGlass containers.
                              </p>
                            </div>
                            
                            <div>
                              <div className="u-flex u-items-center u-justify-between u-mb-1">
                                <h4 className="u-text-sm u-font-semibold">Interaction to Next Paint (INP)</h4>
                                <Badge variant="warning" size="sm" label="≤200ms" />
                              </div>
                              <p className="u-text-xs u-text-secondary">
                                Responsiveness metric. Debounce interactive glass effects to maintain good INP.
                              </p>
                            </div>
                          </div>
                        </Card>
                      </GridCol>
                    </Row>

                    <Row className="u-mt-4">
                      <GridCol md={12}>
                        <h4 className="u-mb-3">Performance Monitoring Hook</h4>
                        {renderCodeBlock(
`import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fps: number;
  renderTime: number;
  memoryUsage: number;
}

export function usePerformanceMonitor(
  onMetrics: (metrics: PerformanceMetrics) => void,
  interval: number = 1000
) {
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const rafIdRef = useRef<number>();

  useEffect(() => {
    const measureFrame = () => {
      frameCountRef.current++;
      rafIdRef.current = requestAnimationFrame(measureFrame);
    };

    const intervalId = setInterval(() => {
      const now = performance.now();
      const elapsed = now - lastTimeRef.current;
      const fps = Math.round((frameCountRef.current * 1000) / elapsed);
      
      // Get memory usage (if available)
      const memory = (performance as any).memory;
      const memoryUsage = memory
        ? Math.round(memory.usedJSHeapSize / 1048576) // Convert to MB
        : 0;
      
      // Get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      const renderTime = paintEntries.length > 0
        ? Math.round(paintEntries[paintEntries.length - 1].startTime)
        : 0;

      onMetrics({ fps, renderTime, memoryUsage });

      // Reset counters
      frameCountRef.current = 0;
      lastTimeRef.current = now;
    }, interval);

    rafIdRef.current = requestAnimationFrame(measureFrame);

    return () => {
      clearInterval(intervalId);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [interval, onMetrics]);
}

// Usage
function MonitoredGlassComponent() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  
  usePerformanceMonitor((m) => {
    setMetrics(m);
    
    // Log warning if FPS drops below 30
    if (m.fps < 30) {
      console.warn('Low FPS detected:', m.fps);
    }
  });

  return (
    <div>
      {metrics && (
        <div className="performance-overlay">
          <div>FPS: {metrics.fps}</div>
          <div>Memory: {metrics.memoryUsage}MB</div>
        </div>
      )}
      <AtomixGlass>Content</AtomixGlass>
    </div>
  );
}`,
                          'typescript',
                          'performance-monitor',
                          'usePerformanceMonitor.ts'
                        )}
                      </GridCol>
                    </Row>

                    <Callout variant="warning" title="Production Warning" className="u-mt-4">
                      Remove or disable performance monitoring in production builds as it can itself impact performance.
                    </Callout>
                  </div>
                ),
              },
              {
                label: 'Optimization Tips',
                content: (
                  <div>
                    <Row className="u-mt-6">
                      <GridCol md={6}>
                        <Card className="u-p-6 u-h-100">
                          <div className="u-flex u-items-start u-gap-3 u-mb-4">
                            <Lightbulb size={24} className="u-text-success" />
                            <div>
                              <h3>Conditional Rendering</h3>
                              <Badge variant="success" size="sm" label="Easy Win" className="u-mt-1" />
                            </div>
                          </div>
                          <p className="u-text-sm u-text-secondary u-mb-4">
                            Only render AtomixGlass components when they're visible in the viewport. This dramatically reduces GPU load.
                          </p>
                          {renderCodeBlock(
`import { useInView } from 'react-intersection-observer';

function LazyGlassComponent() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  return (
    <div ref={ref}>
      {inView ? (
  <AtomixGlass>
    Expensive content
  </AtomixGlass>
      ) : (
        <div className="placeholder">
          Loading...
        </div>
      )}
    </div>
  );
}`,
                            'typescript',
                            'conditional-rendering',
                            'LazyGlassComponent.tsx'
                          )}
                        </Card>
                      </GridCol>
                      
                      <GridCol md={6}>
                        <Card className="u-p-6 u-h-100">
                          <div className="u-flex u-items-start u-gap-3 u-mb-4">
                            <AlertTriangle size={24} className="u-text-warning" />
                            <div>
                              <h3>Reduced Motion Support</h3>
                              <Badge variant="warning" size="sm" label="Accessibility" className="u-mt-1" />
                            </div>
                          </div>
                          <p className="u-text-sm u-text-secondary u-mb-4">
                            Respect user preferences for reduced motion. This also improves performance on low-end devices.
                          </p>
                          {renderCodeBlock(
`const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

function AccessibleGlassComponent() {
  return (
<AtomixGlass
  animationDuration={prefersReducedMotion ? 0 : 300}
      elasticity={prefersReducedMotion ? 0 : 0.5}
      displacementScale={prefersReducedMotion ? 0 : 20}
>
  Content
    </AtomixGlass>
  );
}`,
                            'typescript',
                            'reduced-motion',
                            'AccessibleGlassComponent.tsx'
                          )}
                        </Card>
                      </GridCol>
                    </Row>

                    <Row className="u-mt-4">
                      <GridCol md={6}>
                        <Card className="u-p-6 u-h-100">
                          <div className="u-flex u-items-start u-gap-3 u-mb-4">
                            <Info size={24} className="u-text-info" />
                            <div>
                              <h3>Debounce Interactions</h3>
                              <Badge variant="info" size="sm" label="Performance" className="u-mt-1" />
                            </div>
                          </div>
                          <p className="u-text-sm u-text-secondary u-mb-4">
                            Debounce mouse/touch events to reduce the frequency of expensive shader updates.
                          </p>
                          {renderCodeBlock(
`import { useMemo } from 'react';
import { debounce } from 'lodash';

function DebouncedGlassComponent() {
  const handleMouseMove = useMemo(
    () => debounce((e: MouseEvent) => {
      // Handle mouse move
    }, 16), // ~60fps
    []
  );
  
  return (
    <AtomixGlass
      onMouseMove={handleMouseMove}
      elasticity={0.5}
    >
      Interactive content
    </AtomixGlass>
  );
}`,
                            'typescript',
                            'debounce-interactions',
                            'DebouncedGlassComponent.tsx'
                          )}
                        </Card>
                      </GridCol>
                      
                      <GridCol md={6}>
                        <Card className="u-p-6 u-h-100">
                          <div className="u-flex u-items-start u-gap-3 u-mb-4">
                            <Cpu size={24} className="u-text-primary" />
                            <div>
                              <h3>Memoization</h3>
                              <Badge variant="primary" size="sm" label="React" className="u-mt-1" />
                            </div>
                          </div>
                          <p className="u-text-sm u-text-secondary u-mb-4">
                            Memoize AtomixGlass components to prevent unnecessary re-renders and shader recompilation.
                          </p>
                          {renderCodeBlock(
`import { memo } from 'react';

const MemoizedGlassCard = memo(({ title, content }) => {
  return (
    <AtomixGlass
      mode="shader"
      displacementScale={20}
      blurAmount={1}
      saturation={140}
      aberrationIntensity={2.5}
      elasticity={0.05}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </AtomixGlass>
  );
}, (prevProps, nextProps) => {
  // Custom comparison - only re-render if props change
  return (
    prevProps.title === nextProps.title &&
    prevProps.content === nextProps.content
  );
});`,
                            'typescript',
                            'memoization',
                            'MemoizedGlassCard.tsx'
                          )}
            </Card>
          </GridCol>
        </Row>

                    <Callout variant="success" title="Quick Wins Summary" className="u-mt-6">
                      <ul className="u-list-disc u-ml-6 u-space-y-1 u-mt-2">
                        <li>Use intersection observer for lazy loading</li>
                        <li>Respect prefers-reduced-motion</li>
                        <li>Debounce interactive events</li>
                        <li>Memoize components with React.memo</li>
                        <li>Limit concurrent glass effects to 5-7</li>
                        <li>Use lower effect values on mobile</li>
                      </ul>
                    </Callout>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </Block>
    </>
  );
};

export default GuidesAtomixGlassPerformancePage;
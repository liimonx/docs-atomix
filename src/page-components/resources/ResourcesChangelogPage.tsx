'use client';

import React from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Badge,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';

const ResourcesChangelogPage = () => {
  return (
    <>

      <Hero
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          padding: "20px",
          cornerRadius: 30,
        } as GlassProps}
        className="u-pt-32 u-pb-16"
        backgroundImageSrc="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Changelog"
        text="Release notes and version history"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Version History"
          text="Track the evolution of Atomix Design System with detailed release notes, new features, improvements, and bug fixes."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <h3 style={{ margin: 0 }}>v2.1.0</h3>
                <Badge variant="success" label="Latest" />
                <span style={{ color: 'var(--atomix-text-secondary)', fontSize: '14px' }}>
                  November 11, 2025
                </span>
              </div>
              
              <h4 className="u-mt-4">✨ New Features</h4>
              <ul>
                <li><strong>AtomixGlass Component:</strong> Advanced glass morphism effects with WebGL shader support</li>
                <li><strong>Dark Mode Support:</strong> Built-in dark mode with automatic theme switching</li>
                <li><strong>New Components:</strong> Added PhotoViewer, VideoPlayer, and River components</li>
                <li><strong>Design Tokens:</strong> Comprehensive design token system for colors, spacing, and typography</li>
              </ul>
              
              <h4 className="u-mt-4">🚀 Improvements</h4>
              <ul>
                <li>Enhanced accessibility across all components</li>
                <li>Improved performance for grid and masonry layouts</li>
                <li>Better TypeScript support with comprehensive type definitions</li>
                <li>Updated documentation with interactive examples</li>
              </ul>
              
              <h4 className="u-mt-4">🐛 Bug Fixes</h4>
              <ul>
                <li>Fixed modal backdrop click handling on mobile devices</li>
                <li>Resolved tooltip positioning issues in scrollable containers</li>
                <li>Fixed form validation state styling inconsistencies</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <h3 style={{ margin: 0 }}>v2.0.0</h3>
                <Badge variant="primary" label="Major Release" />
                <span style={{ color: 'var(--atomix-text-secondary)', fontSize: '14px' }}>
                  October 1, 2025
                </span>
              </div>
              
              <h4 className="u-mt-4">🎉 Major Changes</h4>
              <ul>
                <li><strong>Complete Redesign:</strong> New visual language with modern aesthetics</li>
                <li><strong>Component Library Overhaul:</strong> Rebuilt all components from the ground up</li>
                <li><strong>ITCSS Architecture:</strong> Adopted ITCSS for better CSS organization</li>
                <li><strong>React 18 Support:</strong> Full compatibility with React 18 features</li>
              </ul>
              
              <h4 className="u-mt-4">⚠️ Breaking Changes</h4>
              <ul>
                <li>Renamed several component props for consistency</li>
                <li>Updated color token naming convention</li>
                <li>Changed default spacing scale</li>
                <li>Removed deprecated utility classes</li>
              </ul>
              
              <h4 className="u-mt-4">📚 Documentation</h4>
              <ul>
                <li>New documentation site with improved navigation</li>
                <li>Added migration guide from v1.x</li>
                <li>Interactive component playground</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <h3 style={{ margin: 0 }}>v1.8.5</h3>
                <span style={{ color: 'var(--atomix-text-secondary)', fontSize: '14px' }}>
                  August 15, 2025
                </span>
              </div>
              
              <h4 className="u-mt-4">🐛 Bug Fixes</h4>
              <ul>
                <li>Fixed dropdown menu positioning in RTL layouts</li>
                <li>Resolved date picker calendar navigation issues</li>
                <li>Fixed accordion animation glitches on Safari</li>
              </ul>
              
              <h4 className="u-mt-4">🚀 Improvements</h4>
              <ul>
                <li>Optimized bundle size (reduced by 15%)</li>
                <li>Improved tree-shaking support</li>
                <li>Enhanced SSR compatibility</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <h3 style={{ margin: 0 }}>v1.8.0</h3>
                <span style={{ color: 'var(--atomix-text-secondary)', fontSize: '14px' }}>
                  July 1, 2025
                </span>
              </div>
              
              <h4 className="u-mt-4">✨ New Features</h4>
              <ul>
                <li><strong>DataTable Component:</strong> Advanced table with sorting, filtering, and pagination</li>
                <li><strong>Chart Component:</strong> Integrated charting library with multiple chart types</li>
                <li><strong>Upload Component:</strong> Drag-and-drop file upload with preview</li>
              </ul>
              
              <h4 className="u-mt-4">🚀 Improvements</h4>
              <ul>
                <li>Added keyboard navigation to all interactive components</li>
                <li>Improved screen reader support</li>
                <li>Enhanced mobile touch interactions</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <h3 style={{ margin: 0 }}>v1.7.0</h3>
                <span style={{ color: 'var(--atomix-text-secondary)', fontSize: '14px' }}>
                  May 15, 2025
                </span>
              </div>
              
              <h4 className="u-mt-4">✨ New Features</h4>
              <ul>
                <li><strong>Masonry Grid Layout:</strong> Pinterest-style dynamic grid system</li>
                <li><strong>Testimonial Component:</strong> Customer testimonial display with multiple layouts</li>
                <li><strong>Rating Component:</strong> Star rating with half-star support</li>
              </ul>
              
              <h4 className="u-mt-4">🐛 Bug Fixes</h4>
              <ul>
                <li>Fixed modal scroll lock on iOS</li>
                <li>Resolved tab component focus management</li>
                <li>Fixed form input autofill styling</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Earlier Versions</h3>
              <p className="u-mt-3">
                For release notes from earlier versions (v1.0.0 - v1.6.x), please visit our{' '}
                <a 
                  href="https://github.com/shohojdhara/atomix/releases" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--atomix-brand-primary)' }}
                >
                  GitHub Releases page
                </a>.
              </p>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Version Support</h3>
              
              <div className="u-mt-4">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--atomix-border)' }}>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Version</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Support Until</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}>v2.x</td>
                      <td style={{ padding: '12px' }}>
                        <Badge variant="success" label="Active" />
                      </td>
                      <td style={{ padding: '12px' }}>Current</td>
                      <td style={{ padding: '12px' }}>Latest stable release</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--atomix-border)' }}>
                      <td style={{ padding: '12px' }}>v1.8.x</td>
                      <td style={{ padding: '12px' }}>
                        <Badge variant="warning" label="Maintenance" />
                      </td>
                      <td style={{ padding: '12px' }}>June 2026</td>
                      <td style={{ padding: '12px' }}>Security fixes only</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px' }}>v1.7.x and earlier</td>
                      <td style={{ padding: '12px' }}>
                        <Badge variant="error" label="Unsupported" />
                      </td>
                      <td style={{ padding: '12px' }}>-</td>
                      <td style={{ padding: '12px' }}>Please upgrade to v2.x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default ResourcesChangelogPage;


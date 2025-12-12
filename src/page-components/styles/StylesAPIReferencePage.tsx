'use client';

import { FC } from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Icon,
  Badge,
} from '@shohojdhara/atomix';
import styles from '@/styles/PageHero.module.scss';

interface APISection {
  icon: string;
  title: string;
  description: string;
  code: string;
  color: string;
}

const APICard: FC<APISection> = ({ icon, title, description, code, color }) => (
  <Card className="u-p-6 u-h-100 u-border-left" style={{ borderLeftWidth: '4px', borderLeftColor: color }}>
    <div className="u-d-flex u-align-items-center u-gap-3 u-mb-3">
      <Icon name={icon as any} size={24} style={{ color }} />
      <h3 className="u-fs-xl u-fw-semibold u-m-0">{title}</h3>
    </div>
    <p className="u-text-secondary-emphasis u-mb-4">{description}</p>
    <div className="u-bg-tertiary-subtle u-p-3 u-rounded">
      <pre className="u-m-0 u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
        <code>{code}</code>
      </pre>
    </div>
  </Card>
);

const StylesAPIReferencePage: FC = () => {
  const mixins: APISection[] = [
    {
      icon: 'Monitor',
      title: 'Responsive Breakpoints',
      description: 'Media query mixins for responsive design',
      code: `@include media-breakpoint-up(md) {
  // Styles for medium and up
}`,
      color: 'var(--atomix-info)'
    },
    {
      icon: 'Focus',
      title: 'Focus Ring',
      description: 'Accessible focus styles',
      code: `@include focus-ring();
@include focus-ring-primary();`,
      color: 'var(--atomix-primary)'
    },
    {
      icon: 'Zap',
      title: 'Utility Generator',
      description: 'Generate custom utility classes',
      code: `@include generate-utility($utility);`,
      color: 'var(--atomix-accent)'
    },
  ];

  const functions: APISection[] = [
    {
      icon: 'Palette',
      title: 'Color Functions',
      description: 'Access and manipulate colors',
      code: `color('primary', 6);\ntint($primary, 20%);\nshade($primary, 20%);`,
      color: 'var(--atomix-warning)',
    },
    {
      icon: 'Box',
      title: 'Spacing Functions',
      description: 'Calculate spacing values',
      code: `space(4);  // 1rem\nspace(8);  // 2rem`,
      color: 'var(--atomix-success)',
    },
    {
      icon: 'Maximize',
      title: 'Breakpoint Functions',
      description: 'Get breakpoint values',
      code: `breakpoint-min('md');\nbreakpoint-max('lg');`,
      color: 'var(--atomix-warning)',
    },
  ];

  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="API Reference"
        text="Complete technical reference for SCSS variables, mixins, and functions"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8" >
        <SectionIntro
          title="API Documentation"
          text="Comprehensive reference for all CSS classes, custom properties, and mixins available in Atomix."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-d-flex u-align-items-start u-gap-4">
                <Icon name="Code" size={32} className="u-text-primary-emphasis" />
                <div className="u-w-100">
                  <h3 className="u-fs-xl u-fw-semibold u-mb-3">SCSS Variables</h3>
                  <p className="u-text-secondary-emphasis u-mb-4">Comprehensive set of SCSS variables for customization</p>
                  <div className="u-d-flex u-flex-wrap u-gap-2 u-mb-4">
                    <Badge variant="secondary" size="sm" label="Colors" />
                    <Badge variant="secondary" size="sm" label="Spacing" />
                    <Badge variant="secondary" size="sm" label="Typography" />
                    <Badge variant="secondary" size="sm" label="Breakpoints" />
                  </div>
                  <div className="u-bg-tertiary-subtle u-p-4 u-rounded">
                    <pre className="u-m-0 u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`// Color scales (1-10)
$primary-6: #7c3aed;  // Base
$red-6: #ef4444;
$green-6: #22c55e;
$blue-6: #3b82f6;
$gray-6: #6b7280;

// Spacing
$spacer: 0.25rem;
$spacing-4: 1rem;

// Typography
$font-family-base: sans-serif;
$font-size-base: 1rem;`}
                    </pre>
                  </div>
                </div>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">SCSS Mixins</h2>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          {mixins.map((mixin, idx) => (
            <GridCol key={idx} md={6} lg={4} className="u-mb-4">
              <APICard {...mixin} />
            </GridCol>
          ))}
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">SCSS Functions</h2>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          {functions.map((func, idx) => (
            <GridCol key={idx} md={6} lg={4} className="u-mb-4">
              <APICard {...func} />
            </GridCol>
          ))}
        </Row>
        
        <Row className="u-mt-6">
          <GridCol md={12}>
            <h2 className="u-fs-2xl u-fw-bold u-mb-4">CSS Custom Properties</h2>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon name="Palette" size={24} className="u-text-primary-emphasis" />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">Color Properties</h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4">Runtime color customization</p>
              <div className="u-bg-tertiary-subtle u-p-3 u-rounded">
                <pre className="u-m-0 u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`:root {
  --atomix-primary: #7c3aed;
  --atomix-success: #22c55e;
  --atomix-error: #ef4444;
}`}
                </pre>
              </div>
            </Card>
          </GridCol>

          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon name="Moon" size={24} className="u-text-brand-emphasis" />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">Theme Switching</h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4">Dynamic theme changes</p>
              <div className="u-bg-tertiary-subtle u-p-3 u-rounded">
                <pre className="u-m-0 u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`// JavaScript
document.documentElement
  .setAttribute('data-theme', 'dark');`}
                </pre>
              </div>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-p-6 u-bg-primary-subtle">
              <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                <Icon name="BookOpen" size={24} className="u-text-primary-emphasis" />
                <h3 className="u-fs-xl u-fw-semibold u-m-0">Usage Example</h3>
              </div>
              <p className="u-text-secondary-emphasis u-mb-4">Combining SCSS and CSS custom properties:</p>
              <div className="u-bg-tertiary-subtle u-p-4 u-rounded">
                <pre className="u-m-0 u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
{`// SCSS
.c-button {
  --btn-bg: #{$primary-6};
  background: var(--btn-bg);
  
  @include media-breakpoint-up(md) {
    padding: space(6);
  }
}`}
                </pre>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

StylesAPIReferencePage.displayName = 'StylesAPIReferencePage';

export default StylesAPIReferencePage;

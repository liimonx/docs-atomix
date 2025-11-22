'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code,
  CheckCircle,
  FileText,
  Layers,
  Palette,
  Shield,
  ArrowRight,
} from 'lucide-react';
import {
  Button,
  Card,
  Hero,
  Row,
  GridCol,
  Block,
  SectionIntro,
  Callout,
} from '@shohojdhara/atomix';

const ComponentGuidelinesPage: React.FC = () => {
  const guidelines = [
    {
      title: 'Component Structure',
      description: 'Follow the standard directory structure and file organization',
      icon: <Layers size={24} />,
      items: [
        'Create dedicated directory under src/components/[ComponentName]/',
        'Implement React component with JSDoc comments',
        'Create Storybook examples for all variants',
        'Include TypeScript definitions',
      ],
    },
    {
      title: 'Naming Conventions',
      description: 'Use consistent naming patterns across all components',
      icon: <Code size={24} />,
      items: [
        'Use PascalCase for component names',
        'Use kebab-case for file names',
        'Follow BEM methodology for CSS classes',
        'Use descriptive prop names',
      ],
    },
    {
      title: 'Accessibility',
      description: 'Ensure all components meet WCAG 2.1 AA standards',
      icon: <Shield size={24} />,
      items: [
        'Include ARIA attributes where needed',
        'Support keyboard navigation',
        'Provide screen reader support',
        'Ensure proper focus management',
      ],
    },
    {
      title: 'Documentation',
      description: 'Comprehensive documentation for all components',
      icon: <FileText size={24} />,
      items: [
        'Include JSDoc comments',
        'Document all props and their types',
        'Provide usage examples',
        'Include accessibility notes',
      ],
    },
    {
      title: 'Styling',
      description: 'Follow design system styling guidelines',
      icon: <Palette size={24} />,
      items: [
        'Use design tokens for colors and spacing',
        'Follow ITCSS architecture',
        'Support theming and customization',
        'Ensure responsive design',
      ],
    },
    {
      title: 'Testing',
      description: 'Comprehensive testing for quality assurance',
      icon: <CheckCircle size={24} />,
      items: [
        'Write unit tests for components',
        'Test accessibility features',
        'Test responsive behavior',
        'Test with different themes',
      ],
    },
  ];

  return (
    <div className="component-guidelines-page">
      <Hero
        title="Component Guidelines"
        subtitle="Development standards and best practices"
      >
        <p>Learn about component structure, naming conventions, accessibility requirements, and coding standards for the Atomix design system.</p>
      </Hero>

      <Block spacing="md">
        <SectionIntro
          title="Development Standards"
          text="Follow these guidelines to ensure consistency and quality across all components"
        />

        <Row>
          {guidelines.map((guideline, index) => (
            <GridCol key={index} md={6} lg={4} className="u-mb-6">
              <Card className="u-h-100">
                <div className="u-d-flex u-align-items-center u-mb-3">
                  <div className="u-text-primary-emphasis u-me-3">
                    {guideline.icon}
                  </div>
                  <h3 className="u-fs-lg u-fw-600 u-m-0">{guideline.title}</h3>
                </div>
                <p className="u-text-secondary-emphasis u-mb-4">
                  {guideline.description}
                </p>
                <ul className="u-list-unstyled u-m-0">
                  {guideline.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="u-mb-2 u-d-flex u-align-items-start">
                      <CheckCircle
                        size={16}
                        className="u-me-2 u-mt-1 u-text-success"
                      />
                      <span className="u-text-secondary-emphasis">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </GridCol>
          ))}
        </Row>
      </Block>

      <Block spacing="md" background="secondary">
        <Callout variant="info" title="Getting Started">
          <p className="u-mb-3">
            New to component development? Start with our{' '}
            <Link
              href="/docs/getting-started/installation"
              className="u-text-primary u-text-decoration-none"
            >
              installation guide
            </Link>{' '}
            and{' '}
            <Link
              href="/docs/components/overview"
              className="u-text-primary u-text-decoration-none"
            >
              browse existing components
            </Link>{' '}
            to see these guidelines in action.
          </p>
          <div className="u-d-flex u-gap-3">
            <Button variant="primary" >
              <Link href="/docs/components/overview">
                Browse Components
                <ArrowRight size={16} className="u-ms-2" />
              </Link>
            </Button>
            <Button variant="outline" >
              <Link href="/docs/getting-started/quick-start">
                Quick Start Guide
              </Link>
            </Button>
          </div>
        </Callout>
      </Block>
    </div>
  );
};

export default ComponentGuidelinesPage;


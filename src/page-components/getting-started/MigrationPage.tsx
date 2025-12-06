'use client';

import { FC } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Code,
  FileText,
  Palette,
  Zap,
  Shield,
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
  Badge,
} from '@shohojdhara/atomix';

const MigrationPage: FC = () => {
  const migrationSteps = [
    {
      step: 1,
      title: 'Assess Current Usage',
      description: 'Audit your existing components and styles to understand what needs to be migrated.',
      icon: <FileText size={24} />,
    },
    {
      step: 2,
      title: 'Plan the Migration',
      description: 'Prioritize components and create a timeline for the migration process.',
      icon: <Code size={24} />,
    },
    {
      step: 3,
      title: 'Set Up Atomix',
      description: 'Install and configure Atomix alongside your existing system.',
      icon: <Zap size={24} />,
    },
    {
      step: 4,
      title: 'Migrate Incrementally',
      description: 'Replace components one by one, testing as you go.',
      icon: <ArrowRight size={24} />,
    },
    {
      step: 5,
      title: 'Clean Up',
      description: 'Remove old dependencies and unused code once migration is complete.',
      icon: <CheckCircle size={24} />,
    },
  ];

  const benefits = [
    {
      title: 'Modern Architecture',
      description: 'ITCSS methodology and CSS custom properties',
      icon: <Palette size={20} />,
    },
    {
      title: 'Better Performance',
      description: 'Smaller bundle size and optimized CSS',
      icon: <Zap size={20} />,
    },
    {
      title: 'Enhanced Accessibility',
      description: 'WCAG 2.1 AA compliance built-in',
      icon: <Shield size={20} />,
    },
    {
      title: 'Developer Experience',
      description: 'Better TypeScript support and documentation',
      icon: <Code size={20} />,
    },
  ];

  return (
    <div>
      <Hero
        title="Migration Guide"
        subtitle="Migrate from other design systems to Atomix with ease"
        className="u-mb-lg"
      >
        <p className="u-text-secondary-emphasis">Complete migration guide with step-by-step instructions, class mappings, and automated tools to make the transition smooth.</p>
      </Hero>

      <Block spacing="md">
        <SectionIntro
          title="Why Migrate to Atomix?"
          text="Discover the benefits of transitioning to Atomix Design System"
        />

        <Row>
          {benefits.map((benefit, index) => (
            <GridCol key={index} md={6} lg={3} className="u-mb-4">
              <Card className="u-h-100">
                <div className="u-d-flex u-align-items-center u-mb-3">
                  <div className="u-me-3 u-text-primary-emphasis">
                    {benefit.icon}
                  </div>
                  <h3 className="u-fs-lg u-fw-600 u-m-0">
                    {benefit.title}
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-m-0">
                  {benefit.description}
                </p>
              </Card>
            </GridCol>
          ))}
        </Row>
      </Block>

      <Block spacing="md" background="secondary">
        <SectionIntro
          title="Migration Strategy"
          text="Follow these steps for a smooth migration process"
        />

        <Row>
          {migrationSteps.map((step, index) => (
            <GridCol key={index} md={6} lg={4} className="u-mb-6">
              <Card className="u-h-100">
                <div className="u-d-flex u-align-items-center u-mb-3">
                  <Badge
                    variant="primary"
                    size="lg"
                    label={step.step.toString()}
                    className="u-me-3"
                  />
                  <div className="u-text-primary-emphasis u-me-3">
                    {step.icon}
                  </div>
                  <h3 className="u-fs-lg u-fw-600 u-m-0">{step.title}</h3>
                </div>
                <p className="u-text-secondary-emphasis u-m-0">
                  {step.description}
                </p>
              </Card>
            </GridCol>
          ))}
        </Row>
      </Block>

      <Block spacing="md">
        <Callout variant="info" title="Need Help?">
          <p className="u-mb-3">
            If you need assistance with your migration, check out our{' '}
            <Link
              href="/docs/getting-started/installation"
              className="u-text-primary u-text-decoration-none"
            >
              installation guide
            </Link>{' '}
            or{' '}
            <Link
              href="/docs/components/overview"
              className="u-text-primary u-text-decoration-none"
            >
              browse our components
            </Link>
            .
          </p>
          <Button 
            variant="outline"
            href="/docs/getting-started/quick-start"
          >
            View Quick Start Guide
            <ArrowRight size={16} className="u-ms-2" />
          </Button>
        </Callout>
      </Block>
    </div>
  );
};

export default MigrationPage;


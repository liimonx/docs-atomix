'use client';

import React from 'react';
import { Button, Hero, Icon } from '@shohojdhara/atomix';
import { useRouter } from 'next/navigation';

export const HeroSection: React.FC = () => {
  const router = useRouter();

  return (
    <Hero
      title="Atomix Design System"
      subtitle="A comprehensive React component library for building modern, accessible web applications"
      backgroundImageSrc="/assets/images/hero-background.jpg"
      className="docs-hero"
    >
      <div className="hero-content">
        <p className="hero-description">
          40+ professionally designed components with full TypeScript support, 
          WCAG 2.1 AA accessibility compliance, and extensive customization options.
        </p>
        
        <div className="hero-actions">
          <Button
            size="lg"
            onClick={() => router.push('/docs/getting-started/installation')}
          >
            <Icon name="Rocket" size="sm" />
            Get Started
          </Button>
          
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => router.push('/docs/components/overview')}
          >
            <Icon name="Stack" size="sm" />
            Browse Components
          </Button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <Icon name="Stack" size="sm" />
            <span>40+ Components</span>
          </div>
          <div className="stat-item">
            <Icon name="Palette" size="sm" />
            <span>Design Tokens</span>
          </div>
          <div className="stat-item">
            <Icon name="Wheelchair" size="sm" />
            <span>WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </Hero>
  );
};
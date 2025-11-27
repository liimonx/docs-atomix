'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Card, Icon } from '@shohojdhara/atomix';

const NotFoundPage: React.FC = () => {
  const popularLinks = [
    {
      title: 'Getting Started',
      description: 'Learn how to install and set up Atomix',
      path: '/docs/introduction'
    },
    {
      title: 'Components',
      description: 'Browse our component library',
      path: '/docs/components/button'
    },
    {
      title: 'Installation Guide',
      description: 'Install Atomix in your project',
      path: '/docs/getting-started/installation'
    },
    {
      title: 'Quick Start',
      description: 'Get up and running in minutes',
      path: '/docs/getting-started/quick-start'
    }
  ];

  return (
    <div className="u-min-h-screen u-d-flex u-flex-direction-column u-align-items-center u-justify-content-center u-p-6 u-text-center">
        {/* Error Icon */}
        <div className="u-mb-6">
          <Icon name="WarningCircle" size="xl" className="u-text-warning" />
        </div>

        {/* Error Message */}
        <h1 className="u-fs-6xl u-fw-extrabold u-mb-4" style={{ 
          background: 'var(--atomix-color-primary-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          404
        </h1>

        <h2 className="u-fs-3xl u-fw-bold u-mb-4">
          Page Not Found
        </h2>

        <p className="u-text-secondary-emphasis u-mb-8 u-fs-lg" style={{ maxWidth: '600px' }}>
          The page you're looking for doesn't exist or has been moved.
          Don't worry, you can find what you're looking for using the links below.
        </p>

        {/* Action Buttons */}
        <div className="u-d-flex u-gap-3 u-mb-12 u-flex-wrap u-justify-content-center">
          <Button size="lg" onClick={() => window.location.href = '/'}>
            <Icon name="House" size="sm" className="u-mr-2" />
            Go Home
          </Button>

          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <Icon name="ArrowLeft" size="sm" className="u-mr-2" />
            Go Back
          </Button>
        </div>

        {/* Popular Links */}
        <section className="u-mb-12 u-w-100" style={{ maxWidth: '1200px' }}>
          <h3 className="u-fs-2xl u-fw-bold u-mb-6">
            Popular Pages
          </h3>

          <div className="u-d-grid u-gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
            {popularLinks.map((link, index) => (
              <Card
                key={index}
                className="u-cursor-pointer u-transition-fast u-border u-border-subtle"
                style={{ transition: 'var(--atomix-transition-fast)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--atomix-shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
                onClick={() => window.location.href = link.path}
              >
                <div className="u-p-6">
                  <h4 className="u-fs-lg u-fw-semibold u-mb-2 u-text-primary-emphasis">
                    {link.title}
                  </h4>
                  <p className="u-text-secondary-emphasis u-m-0">
                    {link.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className="u-w-100" style={{ maxWidth: '800px' }}>
          <div className="u-d-flex u-flex-direction-column u-align-items-center u-text-center">
            <Icon name="MagnifyingGlass" size="xl" className="u-mb-4 u-text-secondary-emphasis" />
            <h3 className="u-fs-xl u-fw-semibold u-mb-3">
              Still can't find what you're looking for?
            </h3>
            <p className="u-text-secondary-emphasis u-mb-6">
              Try using the search bar in the sidebar or check out our comprehensive documentation.
            </p>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/docs/introduction'}
            >
              Browse Documentation
            </Button>
          </div>
        </section>
      </div>
  );
};

export default NotFoundPage;

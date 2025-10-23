import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
      path: '/docs/installation'
    },
    {
      title: 'Quick Start',
      description: 'Get up and running in minutes',
      path: '/docs/quickstart'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found - Atomix Documentation</title>
        <meta name="description" content="The page you're looking for could not be found." />
      </Helmet>

      <div className="not-found-page u-container u-px-8 u-pb-16 u-text-center">
        {/* Error Icon */}
        <div className="u-mb-8 u-text-secondary-emphasis" style={{ fontSize: '80px' }}>
            <Icon name="WarningCircle" size="xl" className="mb-4" />
          </div>

        {/* Error Message */}
        <h1 className="u-fs-3xl u-fw-700 u-mb-4 u-text-primary-emphasis">
          404
        </h1>

        <h2 className="u-fs-xl u-fw-600 u-mb-4 u-text-primary-emphasis">
          Page Not Found
        </h2>

        <p className="u-fs-lg u-text-secondary-emphasis u-lh-lg u-mb-12 u-mx-auto" style={{ maxWidth: '600px' }}>
          The page you're looking for doesn't exist or has been moved.
          Don't worry, you can find what you're looking for using the links below.
        </p>

        {/* Action Buttons */}
        <div className="u-d-flex u-gap-4 u-justify-content-center u-flex-wrap u-mb-16">
          <Button asChild size="lg">
            <Link to="/">
              <Icon name="House" size="sm" className="u-me-2" />
              Go Home
            </Link>
          </Button>

          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <Icon name="ArrowLeft" size="sm" className="u-me-2" />
            Go Back
          </Button>
        </div>

        {/* Popular Links */}
        <section>
          <h3 className="u-fs-lg u-fw-600 u-mb-6 u-text-primary-emphasis">
            Popular Pages
          </h3>

          <div className="u-d-grid u-grid-auto-fit-280 u-gap-4 u-text-start">
            {popularLinks.map((link, index) => (
              <Card
                key={index}
                className="hover:transform hover:shadow-md u-bg-primary-subtle"
              >
                <Link
                  to={link.path}
                  className="u-link-none u-d-block"
                >
                  <h4 className="u-fs-base u-fw-600 u-mb-2 u-text-primary-emphasis">
                    {link.title}
                  </h4>
                  <p className="u-m-0 u-text-secondary-emphasis u-fs-sm u-lh-lg">
                    {link.description}
                  </p>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className="u-mt-16">
          <div className="u-bg-tertiary-subtle u-rounded u-p-8 u-border u-border-solid">
            <Icon name="MagnifyingGlass" size="xl" className="u-mb-4" />
            <h3 className="u-fs-lg u-fw-600 u-mb-2 u-text-primary-emphasis">
              Still can't find what you're looking for?
            </h3>
            <p className="u-text-secondary-emphasis u-fs-sm u-lh-lg u-mb-6">
              Try using the search bar in the sidebar or check out our comprehensive documentation.
            </p>
            <Button variant="outline" asChild>
              <Link to="/docs/introduction">
                Browse Documentation
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFoundPage;

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

      <div className="not-found-page" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        {/* Error Icon */}
        <div style={{ marginBottom: '2rem', color: 'var(--atomix-text-secondary)', fontSize: '80px' }}>
            <Icon name="WarningCircle" size="xl" className="mb-4" />
          </div>

        {/* Error Message */}
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          margin: '0 0 1rem 0',
          color: 'var(--atomix-text-primary)'
        }}>
          404
        </h1>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          margin: '0 0 1rem 0',
          color: 'var(--atomix-text-primary)'
        }}>
          Page Not Found
        </h2>

        <p style={{
          fontSize: '1.125rem',
          color: 'var(--atomix-text-secondary)',
          lineHeight: '1.6',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          The page you're looking for doesn't exist or has been moved.
          Don't worry, you can find what you're looking for using the links below.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '4rem'
        }}>
          <Button asChild size="lg">
            <Link to="/">
              <Icon name="House" size="sm" className="mr-2" />
              Go Home
            </Link>
          </Button>

          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <Icon name="ArrowLeft" size="sm" className="mr-2" />
            Go Back
          </Button>
        </div>

        {/* Popular Links */}
        <section>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: 'var(--atomix-text-primary)'
          }}>
            Popular Pages
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            textAlign: 'left'
          }}>
            {popularLinks.map((link, index) => (
              <Card
                key={index}
                className="hover:transform hover:shadow-md"
              >
                <Link
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }}
                >
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    margin: '0 0 0.5rem 0',
                    color: 'var(--atomix-primary)'
                  }}>
                    {link.title}
                  </h4>
                  <p style={{
                    margin: 0,
                    color: 'var(--atomix-text-secondary)',
                    fontSize: '0.875rem',
                    lineHeight: '1.5'
                  }}>
                    {link.description}
                  </p>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section style={{ marginTop: '4rem' }}>
          <div style={{
            backgroundColor: 'var(--atomix-bg-tertiary)',
            borderRadius: '8px',
            padding: '2rem',
            border: '1px solid var(--atomix-border)'
          }}>
            <Icon name="MagnifyingGlass" size="xl" className="mb-4" />
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: 'var(--atomix-text-primary)'
            }}>
              Still can't find what you're looking for?
            </h3>
            <p style={{
              color: 'var(--atomix-text-secondary)',
              fontSize: '0.925rem',
              lineHeight: '1.5',
              marginBottom: '1.5rem'
            }}>
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

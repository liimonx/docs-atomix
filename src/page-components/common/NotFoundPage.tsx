'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Card, Icon } from '@shohojdhara/atomix';
import styles from './NotFoundPage.module.scss';

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
    <div className={styles.notFoundPage}>
        {/* Error Icon */}
        <div className={styles.notFoundPage__iconContainer}>
          <Icon name="WarningCircle" size="xl" className="mb-4" />
        </div>

        {/* Error Message */}
        <h1 className={styles.notFoundPage__errorCode}>
          404
        </h1>

        <h2 className={styles.notFoundPage__title}>
          Page Not Found
        </h2>

        <p className={styles.notFoundPage__description}>
          The page you're looking for doesn't exist or has been moved.
          Don't worry, you can find what you're looking for using the links below.
        </p>

        {/* Action Buttons */}
        <div className={styles.notFoundPage__actions}>
          <Button  size="lg">
            <Link href="/">
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
        <section className={styles.notFoundPage__section}>
          <h3 className={styles.notFoundPage__sectionTitle}>
            Popular Pages
          </h3>

          <div className={styles.notFoundPage__linksGrid}>
            {popularLinks.map((link, index) => (
              <Card
                key={index}
                className="hover:transform hover:shadow-md"
              >
                <Link
                  href={link.path}
                  className={styles.notFoundPage__linkCard}
                >
                  <h4 className={styles.notFoundPage__linkTitle}>
                    {link.title}
                  </h4>
                  <p className={styles.notFoundPage__linkDescription}>
                    {link.description}
                  </p>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Help Section */}
        <section className={styles.notFoundPage__section}>
          <div className={styles.notFoundPage__helpSection}>
            <Icon name="MagnifyingGlass" size="xl" className="mb-4" />
            <h3 className={styles.notFoundPage__helpTitle}>
              Still can't find what you're looking for?
            </h3>
            <p className={styles.notFoundPage__helpText}>
              Try using the search bar in the sidebar or check out our comprehensive documentation.
            </p>
            <Button variant="outline" >
              <Link href="/docs/introduction">
                Browse Documentation
              </Link>
            </Button>
          </div>
        </section>
      </div>
  );
};

export default NotFoundPage;

'use client';

// Error Boundary for Dynamic Documentation Routes
// =============================================================================

import { useEffect } from 'react';
import Link from 'next/link';
import { Button, Callout, Icon, Card, Row, GridCol } from '@shohojdhara/atomix';
import styles from './error.module.scss';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DynamicDocsError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to error reporting service
    // eslint-disable-next-line no-console
    console.error('Dynamic docs route error:', error);
    
    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error);
    }
  }, [error]);

  return (
    <div className={`container ${styles.documentationError}`}>
      <Row justifyContent="center">
        <GridCol xs={12} md={8}>
          <Card className={styles.documentationError__card}>
            <Callout
              variant="error"
              title="Failed to load page"
              icon={<Icon name="WarningCircle" />}
            >
              <p className="u-mb-4">
                We encountered an error while loading this documentation page.
                This might be due to a temporary issue or a problem with the page content.
              </p>
              
              {error.message && (
                <details className="u-mb-4">
                  <summary className="u-cursor-pointer u-font-weight-bold u-mb-2">
                    Error Details
                  </summary>
                  <pre className="u-p-3 u-bg-tertiary-subtle u-border-radius-md u-overflow-x-auto u-fs-sm">
                    {error.message}
                    {error.digest && (
                      <>
                        {'\n\n'}
                        Error ID: {error.digest}
                      </>
                    )}
                  </pre>
                </details>
              )}

              <div className={styles.documentationError__actions}>
                <Button
                  variant="primary"
                  onClick={reset}
                  icon={<Icon name="ArrowCounterClockwise" />}
                >
                  Try Again
                </Button>
                <Link href="/docs">
                  <Button variant="outline" icon={<Icon name="House" />}>Go to Documentation</Button>
                </Link>
                <Link href="/docs">
                  <Button variant="ghost" icon={<Icon name="BookOpen" />}>Browse All Docs</Button>
                </Link>
              </div>
            </Callout>
          </Card>
        </GridCol>
      </Row>
    </div>
  );
}


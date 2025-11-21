'use client';

import React, { useEffect } from 'react';
import { Button, Callout, Icon } from '@shohojdhara/atomix';
import styles from './error.module.scss';

export default function ComponentError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    // eslint-disable-next-line no-console
    console.error('Component page error:', error);
  }, [error]);

  return (
    <div className={styles.container}>
      <Callout
        variant="error"
        title="Failed to load component"
        icon={<Icon name="WarningCircle" />}
      >
        <p>
          We encountered an error while loading this component page.
          {error.message && (
            <details>
              <summary>
                Error Details
              </summary>
              <pre>
                {error.message}
              </pre>
            </details>
          )}
        </p>
        <div className={styles.actions}>
          <Button
            variant="primary"
            onClick={reset}
            icon={<Icon name="ArrowCounterClockwise" />}
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = '/docs/components/overview'}
            icon={<Icon name="ArrowLeft" />}
          >
            Back to Components
          </Button>
        </div>
      </Callout>
    </div>
  );
}


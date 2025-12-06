'use client';

import { useEffect } from 'react';
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
    <div className={styles.componentError}>
      <Callout
        variant="error"
        title="Failed to load component"
        icon={<Icon name="WarningCircle" />}
      >
        <div>
          <p>
            We encountered an error while loading this component page.
          </p>
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
        </div>
        <div className={styles.componentError__actions}>
          <Button
            variant="primary"
            onClick={reset}
            icon={<Icon name="ArrowCounterClockwise" />}
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            href="/docs/components/overview"
            icon={<Icon name="ArrowLeft" />}
          >
            Back to Components
          </Button>
        </div>
      </Callout>
    </div>
  );
}


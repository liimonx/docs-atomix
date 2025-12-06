'use client';

import { Component, ReactNode } from 'react';
import { Button, Callout } from '@shohojdhara/atomix';
import { Icon } from '@shohojdhara/atomix';
import styles from './ErrorBoundary.module.scss';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary component to catch and handle React errors gracefully
 * Provides user-friendly error messages and recovery options
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch() {
    // Log error to error reporting service
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className={styles.errorBoundary}>
          <Callout
            variant="error"
            title="Something went wrong"
            icon={<Icon name="WarningCircle" />}
          >
            <div>
              <p>
                We encountered an unexpected error while rendering this page.
              </p>
              {this.state.error && (
                <details 
                  className={styles.errorBoundary__details}
                  aria-label="Error details"
                >
                  <summary className={styles.errorBoundary__summary}>
                    Error Details
                  </summary>
                  <pre 
                    className={styles.errorBoundary__pre}
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
            <div className={styles.errorBoundary__actions}>
              <Button
                variant="primary"
                onClick={this.handleReset}
                icon={<Icon name="ArrowClockwise" />}
              >
                Try Again
              </Button>
              <Button
                variant="outline"
                href="/"
                icon={<Icon name="House" />}
              >
                Go Home
              </Button>
            </div>
          </Callout>
        </div>
      );
    }

    return this.props.children;
  }
}

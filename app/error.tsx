"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Button,
  Callout,
  Icon,
  Card,
  Container,
  Grid,
  GridCol,
} from "@shohojdhara/atomix";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to error reporting service
    console.error("Application error:", error);

    // In production, send to error tracking service
    if (process.env.NODE_ENV === "production") {
      // Example: Sentry.captureException(error);
    }
  }, [error]);

  return (
    <div className="u-min-h-screen u-flex u-align-items-center u-justify-center u-p-6">
      <Container>
        <Grid>
          <GridCol xs={12} md={8} className="u-mx-auto">
            <Card className="u-p-6">
              <Callout
                variant="error"
                title="Application Error"
                icon={<Icon name="WarningCircle" />}
              >
                <p className="u-mb-4">
                  We encountered an error while loading the page. This might be
                  due to a temporary issue.
                </p>

                {error.message && (
                  <details className="u-mb-4">
                    <summary className="u-cursor-pointer u-font-weight-bold u-mb-2">
                      Error Details
                    </summary>
                    <pre className="u-p-3 u-bg-tertiary-subtle u-border-radius-md u-overflow-x-auto u-text-sm">
                      {error.message}
                      {error.digest && (
                        <>
                          {"\n\n"}
                          Error ID: {error.digest}
                        </>
                      )}
                    </pre>
                  </details>
                )}

                <div className="u-flex u-gap-3 u-flex-wrap">
                  <Button
                    variant="primary"
                    onClick={reset}
                    icon={<Icon name="ArrowCounterClockwise" />}
                  >
                    Try Again
                  </Button>
                  <Link href="/">
                    <Button variant="outline" icon={<Icon name="House" />}>
                      Go Home
                    </Button>
                  </Link>
                  <Link href="/docs">
                    <Button variant="ghost" icon={<Icon name="BookOpen" />}>
                      Browse Docs
                    </Button>
                  </Link>
                </div>
              </Callout>
            </Card>
          </GridCol>
        </Grid>
      </Container>
    </div>
  );
}

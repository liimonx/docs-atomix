"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="u-flex u-flex-column u-align-items-center u-justify-center u-min-h-50vh u-text-center u-p-4">
      <h2 className="u-text-2xl u-font-bold u-mb-4 u-color-text-primary">Something went wrong!</h2>
      <button
        className="u-bg-primary u-color-white u-px-4 u-py-2 u-rounded-md hover:u-bg-primary-dark u-transition-colors"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

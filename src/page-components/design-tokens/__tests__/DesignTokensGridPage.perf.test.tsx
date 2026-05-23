import { describe, it, expect } from 'vitest';

// For this performance test, we'll isolate the exact logic from the component
// The issue is inside the component, but we can benchmark the logic directly
// instead of rendering the entire React tree since it fails due to deep dependencies.

const generateTokens = (count: number) => {
  const tokens = [];
  for (let i = 0; i < count; i++) {
    tokens.push({
      name: `Spacing ${i % 20}${i % 3 === 0 ? ' PX' : ''}`,
      value: `${i}px`,
      description: `Spacing ${i}px`,
      category: 'spacing',
      cssVariable: `--spacing-${i}`,
    });
  }
  return tokens;
};

describe('Performance Baseline', () => {
  it('measures array.filter and array.some logic', () => {
    const tokens = generateTokens(10000);
    const gutterSpacings = ["2", "3", "4", "6", "8"];

    const start = performance.now();

    // Original logic
    const result = tokens.filter((token) =>
      gutterSpacings.some(
        (spacing) =>
          token.name.includes(`Spacing ${spacing}`) &&
          !token.name.includes("PX"),
      )
    );

    const end = performance.now();
    const duration = end - start;

    console.log(`Original logic time: ${duration.toFixed(2)}ms`);
    expect(result.length).toBeGreaterThan(0);
  });

  it('measures regex optimization logic', () => {
    const tokens = generateTokens(10000);

    const start = performance.now();

    // Optimized logic
    const regex = /Spacing (2|3|4|6|8)(?!.*PX)/;
    const result = tokens.filter((token) => regex.test(token.name));

    const end = performance.now();
    const duration = end - start;

    console.log(`Optimized logic time: ${duration.toFixed(2)}ms`);
    expect(result.length).toBeGreaterThan(0);
  });
});

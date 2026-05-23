import { describe, it, expect } from 'vitest';
import { exportAsTailwindConfig } from '../themeTokenUtils';

describe('Performance - exportAsTailwindConfig', () => {
  it('should measure execution time of exportAsTailwindConfig', () => {
    const tokens: Record<string, string> = {};
    for (let i = 0; i < 50000; i++) {
      tokens[`--atomix-color-${i}`] = '#ffffff';
      tokens[`--atomix-space-${i}`] = '16px';
      tokens[`--atomix-font-size-${i}`] = '14px';
      tokens[`--atomix-radius-${i}`] = '4px';
    }

    const start = performance.now();
    const result = exportAsTailwindConfig(tokens);
    const end = performance.now();
    const duration = end - start;

    console.log(`exportAsTailwindConfig baseline took ${duration.toFixed(2)}ms`);

    expect(result).toBeTypeOf('string');
    expect(result.length).toBeGreaterThan(0);
  });
});

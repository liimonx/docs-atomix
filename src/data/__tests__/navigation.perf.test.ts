import { describe, it, expect } from 'vitest';
import { searchNavigation } from '../navigation';

describe('searchNavigation Performance', () => {
  it('measures search performance', () => {
    const queries = ['button', 'grid', 'theme', 'color', 'layout', 'api', 'react', 'css'];

    const iterations = 10000;

    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
      for (const query of queries) {
        searchNavigation(query);
      }
    }
    const end = performance.now();

    const duration = end - start;
    console.log(`[PERF] searchNavigation: ${duration.toFixed(2)}ms for ${iterations * queries.length} queries`);

    expect(duration).toBeGreaterThan(0);
  });
});

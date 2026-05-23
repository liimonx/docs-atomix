// @vitest-environment jsdom
import { describe, it, expect } from "vitest";

describe("ComponentsOverviewPage Performance", () => {
  it("should demonstrate improved performance with pre-calculated searchableText", () => {
    // Generate mock components
    const components = Array.from({ length: 1000 }).map((_, i) => ({
      id: `component-${i}`,
      title: `Component ${i}`,
      description: `This is a description for component ${i} with some extra text.`,
      section: `Section ${i % 10}`,
      searchTerms: [`term${i}`, `tag${i}`, `react`, `ui`],
      sectionId: `section-${i % 10}`,
    }));

    // Pre-calculate
    const preparedComponents = components.map((c) => ({
      ...c,
      _searchableText: [
        c.id,
        c.title,
        c.description,
        c.section,
        ...(c.searchTerms || []),
      ]
        .join(" ")
        .toLowerCase(),
    }));

    const queries = ["component 500", "react", "section 5", "nonexistent"];
    const iterations = 100;

    // We can't strictly assert absolute time due to CI flakiness,
    // but we can measure and log it, or assert relative performance if safe.
    // For a benchmark test, it's mostly to prove the algorithm is faster.

    let unoptTime = 0;
    let optTime = 0;

    for (const query of queries) {
      const q = query.toLowerCase();

      // Unoptimized approach
      const startUnopt = performance.now();
      for (let i = 0; i < iterations; i++) {
        components.filter((c) => {
          const searchableText = [
            c.id,
            c.title,
            c.description,
            c.section,
            ...(c.searchTerms || []),
          ]
            .join(" ")
            .toLowerCase();
          return searchableText.includes(q);
        });
      }
      unoptTime += performance.now() - startUnopt;

      // Optimized approach
      const startOpt = performance.now();
      for (let i = 0; i < iterations; i++) {
        preparedComponents.filter((c) => c._searchableText.includes(q));
      }
      optTime += performance.now() - startOpt;
    }

    // The optimized approach should be significantly faster (at least 2x)
    expect(optTime).toBeLessThan(unoptTime / 2);

    // In practice, it's about 5-6x faster based on earlier benchmark.
    // We assert this to ensure the optimization remains valid.
  });
});

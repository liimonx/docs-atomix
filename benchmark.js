const { performance } = require('perf_hooks');

const components = Array.from({ length: 100 }).map((_, i) => ({
  id: `component-${i}`,
  title: `Component ${i}`,
  description: `This is a description for component ${i} with some extra text to make it longer and more realistic for a UI component documentation site.`,
  section: `Section ${i % 10}`,
  searchTerms: [`term${i}`, `tag${i}`, `react`, `ui`],
  sectionId: `section-${i % 10}`
}));

function unoptimizedFilter(components, query) {
  const q = query.toLowerCase();
  return components.filter(c => {
    const searchableText = [
      c.id,
      c.title,
      c.description,
      c.section,
      ...(c.searchTerms || []),
    ].join(" ").toLowerCase();
    return searchableText.includes(q);
  });
}

const preparedComponents = components.map(c => ({
  ...c,
  _searchableText: [
    c.id,
    c.title,
    c.description,
    c.section,
    ...(c.searchTerms || []),
  ].join(" ").toLowerCase()
}));

function optimizedFilter(components, query) {
  const q = query.toLowerCase();
  return components.filter(c => c._searchableText.includes(q));
}

const iterations = 10000;
const queries = ["component 50", "react", "section 5", "nonexistent"];

for (const query of queries) {
  const startUnopt = performance.now();
  for (let i = 0; i < iterations; i++) {
    unoptimizedFilter(components, query);
  }
  const endUnopt = performance.now();

  const startOpt = performance.now();
  for (let i = 0; i < iterations; i++) {
    optimizedFilter(preparedComponents, query);
  }
  const endOpt = performance.now();

  console.log(`Query "${query}": Unoptimized ${endUnopt - startUnopt}ms, Optimized ${endOpt - startOpt}ms`);
}

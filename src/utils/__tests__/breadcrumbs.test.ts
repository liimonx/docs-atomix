import { describe, it, expect } from 'vitest';
import { generateBreadcrumbs } from '../breadcrumbs';

describe('breadcrumbs', () => {
  it('generates breadcrumbs for known path', () => {
    const steps = generateBreadcrumbs('/docs/components/button');
    expect(steps[0].label).toBe('Home');
    expect(steps[1].path).toBe('/docs');
    expect(steps[steps.length - 1].isActive).toBe(true);
  });

  it('fallbacks for unknown path', () => {
    const steps = generateBreadcrumbs('/docs/unknown/route');
    expect(steps.length).toBeGreaterThan(2);
    expect(steps[steps.length - 1].isActive).toBe(true);
  });
});
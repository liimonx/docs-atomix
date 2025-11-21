import { describe, it, expect } from 'vitest';
import { 
  pathToSlug,
  slugToPath,
  resolveRoute,
  getAllRoutePaths,
  findNavigationItemByPath,
} from '../routeMapper';

describe('routeMapper', () => {
  it('converts path to slug and back', () => {
    const path = '/docs/getting-started/installation';
    const slug = pathToSlug(path);
    expect(slug).toEqual(['getting-started', 'installation']);
    expect(slugToPath(slug)).toEqual(path);
  });

  it('resolves valid routes', () => {
    const paths = getAllRoutePaths();
    const sample = paths.find(p => p.startsWith('/docs/'))!;
    const resolution = resolveRoute(pathToSlug(sample));
    expect(resolution.isValid).toBe(true);
    expect(resolution.navigationItem?.path).toEqual(sample);
  });

  it('flags invalid route', () => {
    const resolution = resolveRoute(['unknown', 'route']);
    expect(resolution.isValid).toBe(false);
  });

  it('finds navigation item by path', () => {
    const item = findNavigationItemByPath('/docs/components/button');
    expect(item?.id).toBe('button');
  });
});
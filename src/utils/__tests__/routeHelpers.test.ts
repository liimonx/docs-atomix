import { describe, it, expect } from 'vitest';
import {
  isRouteActive,
  isRouteParent,
  getActiveNavigationItem,
  getSiblingRoutes,
  getNextRoute,
  getPreviousRoute,
  getRouteHierarchy,
  getRoutesByCategory,
  getSectionForRoute
} from '../routeHelpers';

const INSTALLATION_PATH = '/docs/getting-started/installation';
const CLI_PATH = '/docs/getting-started/cli';

describe('routeHelpers', () => {
  describe('isRouteActive', () => {
    it('returns true for exact match', () => {
      expect(isRouteActive('/docs/components/button', '/docs/components/button')).toBe(true);
    });

    it('returns false for partial match', () => {
      expect(isRouteActive('/docs/components/button-group', '/docs/components/button')).toBe(false);
    });
  });

  describe('isRouteParent', () => {
    it('returns true when currentPath is a sub-path of targetPath', () => {
      expect(isRouteParent('/docs/components/button', '/docs/components')).toBe(true);
    });

    it('returns false for exact match', () => {
      expect(isRouteParent('/docs/components', '/docs/components')).toBe(false);
    });

    it('returns false for unrelated paths', () => {
      expect(isRouteParent('/docs/getting-started', '/docs/components')).toBe(false);
    });
  });

  describe('getActiveNavigationItem', () => {
    it('returns the navigation item for a known path', () => {
      const item = getActiveNavigationItem(INSTALLATION_PATH);
      expect(item).not.toBeNull();
      expect(item?.id).toBe('installation');
      expect(item?.path).toBe(INSTALLATION_PATH);
    });

    it('returns null for an unknown path', () => {
      const item = getActiveNavigationItem('/docs/unknown/path');
      expect(item).toBeNull();
    });
  });

  describe('getSiblingRoutes', () => {
    it('returns sibling routes excluding the current item', () => {
      const item = getActiveNavigationItem(INSTALLATION_PATH);
      expect(item).not.toBeNull();

      const siblings = getSiblingRoutes(item!);
      expect(siblings.length).toBeGreaterThan(0);
      expect(siblings.find(s => s.id === item!.id)).toBeUndefined();
      expect(siblings.some(s => s.id === 'cli')).toBe(true);
    });

    it('returns empty array if item is not found in navigationData', () => {
      const siblings = getSiblingRoutes({ id: 'unknown', title: 'unknown', path: '/unknown', category: 'unknown' });
      expect(siblings).toEqual([]);
    });
  });

  describe('getNextRoute', () => {
    it('returns the next route in sequence', () => {
      const item = getActiveNavigationItem(INSTALLATION_PATH);
      expect(item).not.toBeNull();

      const next = getNextRoute(item!);
      expect(next).not.toBeNull();
      expect(next!.id).toBe('quick-start');
    });

    it('returns null if there is no next route', () => {
      const item = getActiveNavigationItem(CLI_PATH);
      expect(item).not.toBeNull();

      const next = getNextRoute(item!);
      expect(next).toBeNull();
    });

    it('returns null for unknown item', () => {
      const next = getNextRoute({ id: 'unknown', title: 'unknown', path: '/unknown', category: 'unknown' });
      expect(next).toBeNull();
    });
  });

  describe('getPreviousRoute', () => {
    it('returns the previous route in sequence', () => {
      const item = getActiveNavigationItem(CLI_PATH);
      expect(item).not.toBeNull();

      const prev = getPreviousRoute(item!);
      expect(prev).not.toBeNull();
      expect(prev!.id).toBe('migration');
    });

    it('returns null if there is no previous route', () => {
      const firstItem = getActiveNavigationItem('/docs/introduction');
      if (firstItem) {
        const prev = getPreviousRoute(firstItem);
        expect(prev).toBeNull();
      }
    });

    it('returns null for unknown item', () => {
      const prev = getPreviousRoute({ id: 'unknown', title: 'unknown', path: '/unknown', category: 'unknown' });
      expect(prev).toBeNull();
    });
  });

  describe('getRouteHierarchy', () => {
    it('returns section and item for a valid path', () => {
      const hierarchy = getRouteHierarchy(INSTALLATION_PATH);
      expect(hierarchy.item).not.toBeNull();
      expect(hierarchy.section).not.toBeNull();
      expect(hierarchy.item?.id).toBe('installation');
      expect(hierarchy.section?.id).toBe('getting-started');
    });

    it('returns nulls for an invalid path', () => {
      const hierarchy = getRouteHierarchy('/docs/invalid/path');
      expect(hierarchy.item).toBeNull();
      expect(hierarchy.section).toBeNull();
    });
  });

  describe('getRoutesByCategory', () => {
    it('returns routes for a valid category', () => {
      const routes = getRoutesByCategory('getting-started');
      expect(routes.length).toBeGreaterThan(0);
      expect(routes.every(r => r.category === 'getting-started')).toBe(true);
    });

    it('returns an empty array for an invalid category', () => {
      const routes = getRoutesByCategory('invalid-category');
      expect(routes).toEqual([]);
    });
  });

  describe('getSectionForRoute', () => {
    it('returns section info for a valid path', () => {
      const section = getSectionForRoute(INSTALLATION_PATH);
      expect(section).not.toBeNull();
      expect(section?.id).toBe('getting-started');
      expect(section?.title).toBe('Getting Started');
    });

    it('returns null for an invalid path', () => {
      const section = getSectionForRoute('/docs/invalid/path');
      expect(section).toBeNull();
    });
  });
});

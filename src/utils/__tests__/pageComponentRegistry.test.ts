import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  pageComponentRegistry,
  getPageComponent,
  getPageEntry,
  getPageComponentByPath,
} from '../pageComponentRegistry';

// Mock components
const MockComponentA = () => null;
const MockComponentB = () => null;
const MockComponentC = () => null;

describe('PageComponentRegistry', () => {
  beforeEach(() => {
    // We can't easily clear the maps since they are private and the registry is a singleton,
    // so we use unique categories/ids for tests to avoid collisions.
  });

  describe('Category and ID mappings', () => {
    it('registers and retrieves component by category', () => {
      pageComponentRegistry.registerByCategory('testCategory', MockComponentA, { test: 'props' });

      expect(pageComponentRegistry.hasComponentByCategory('testCategory')).toBe(true);

      const entry = pageComponentRegistry.getEntryByCategory('testCategory');
      expect(entry).toEqual({
        component: MockComponentA,
        defaultProps: { test: 'props' },
      });
    });

    it('registers and retrieves component by ID (with category)', () => {
      pageComponentRegistry.registerById('testCat', 'testId', MockComponentB, { isId: true });

      expect(pageComponentRegistry.hasComponentById('testCat', 'testId')).toBe(true);

      const entry = pageComponentRegistry.getEntryById('testCat', 'testId');
      expect(entry).toEqual({
        component: MockComponentB,
        defaultProps: { isId: true },
      });
    });

    it('returns null for unknown categories or IDs', () => {
      expect(pageComponentRegistry.hasComponentByCategory('unknownCat')).toBe(false);
      expect(pageComponentRegistry.getEntryByCategory('unknownCat')).toBeNull();

      expect(pageComponentRegistry.hasComponentById('unknownCat', 'unknownId')).toBe(false);
      expect(pageComponentRegistry.getEntryById('unknownCat', 'unknownId')).toBeNull();
    });
  });

  describe('getEntry resolution', () => {
    it('resolves using ID-based mapping first (if no mapper overrides)', () => {
      pageComponentRegistry.registerByCategory('resCat', MockComponentA);
      pageComponentRegistry.registerById('resCat', 'resId', MockComponentB);

      const entry = pageComponentRegistry.getEntry(
        { category: 'resCat', id: 'resId', title: 'Test', path: '/test' },
        ['resCat', 'resId']
      );

      expect(entry?.component).toBe(MockComponentB);
    });

    it('falls back to category-based mapping if ID is not found', () => {
      pageComponentRegistry.registerByCategory('fallbackCat', MockComponentA);
      // Not registering by ID for fallbackId

      const entry = pageComponentRegistry.getEntry(
        { category: 'fallbackCat', id: 'fallbackId', title: 'Test', path: '/test' },
        ['fallbackCat', 'fallbackId']
      );

      expect(entry?.component).toBe(MockComponentA);
    });

    it('returns null if neither mapper, ID, nor category matches', () => {
      const entry = pageComponentRegistry.getEntry(
        { category: 'noneCat', id: 'noneId', title: 'Test', path: '/test' },
        ['noneCat', 'noneId']
      );

      expect(entry).toBeNull();
    });
  });

  describe('Custom Mappers', () => {
    it('registers a mapper and uses it over ID and Category mapping', () => {
      pageComponentRegistry.registerByCategory('mapperCat', MockComponentA);
      pageComponentRegistry.registerById('mapperCat', 'mapperId', MockComponentB);

      const mapper = vi.fn((navItem, _slugParts) => {
        if (navItem.id === 'mapperId') {
          return MockComponentC;
        }
        return null;
      });

      pageComponentRegistry.registerMapper(mapper);

      const entry = pageComponentRegistry.getEntry(
        { category: 'mapperCat', id: 'mapperId', title: 'Test', path: '/test' },
        ['mapperCat', 'mapperId']
      );

      expect(entry?.component).toBe(MockComponentC);
      expect(mapper).toHaveBeenCalled();
    });
  });

  describe('Deprecated getComponent', () => {
    it('returns the component directly', () => {
      pageComponentRegistry.registerById('depCat', 'depId', MockComponentA);

      const component = pageComponentRegistry.getComponent(
        { category: 'depCat', id: 'depId', title: 'Test', path: '/test' },
        ['depCat', 'depId']
      );

      expect(component).toBe(MockComponentA);
    });

    it('returns null if not found', () => {
      const component = pageComponentRegistry.getComponent(
        { category: 'depCatNone', id: 'depIdNone', title: 'Test', path: '/test' },
        ['depCatNone', 'depIdNone']
      );

      expect(component).toBeNull();
    });
  });
});

// Mock routeMapper to avoid full path mappings logic
vi.mock('../routeMapper', () => ({
  findNavigationItemByPath: vi.fn(),
  pathToSlug: vi.fn(),
}));

import * as routeMapper from '../routeMapper';

describe('Exported Helper Functions', () => {
  describe('getPageEntry', () => {
    it('returns entry for standard navigation item and slug', () => {
      pageComponentRegistry.registerById('helperCat', 'helperId', MockComponentA, { prop: 1 });

      const entry = getPageEntry(
        { category: 'helperCat', id: 'helperId', title: 'Test', path: '/test' },
        ['helperCat', 'helperId']
      );

      expect(entry).toEqual({
        component: MockComponentA,
        defaultProps: { prop: 1 }
      });
    });

    it('handles special case: /docs/components without an item', () => {
      // It expects the category 'components' and id 'index' to be registered.
      // Register it directly for the test
      pageComponentRegistry.registerById('components', 'index', MockComponentB, { isIndex: true });

      const entry = getPageEntry(null, ['components']);

      expect(entry).toEqual({
        component: MockComponentB,
        defaultProps: { isIndex: true }
      });
    });

    it('returns null if item is null and not special case', () => {
      const entry = getPageEntry(null, ['some-other-path']);
      expect(entry).toBeNull();
    });
  });

  describe('getPageComponent', () => {
    it('extracts and returns component from getPageEntry', () => {
      pageComponentRegistry.registerById('compCat', 'compId', MockComponentC);

      const component = getPageComponent(
        { category: 'compCat', id: 'compId', title: 'Test', path: '/test' },
        ['compCat', 'compId']
      );

      expect(component).toBe(MockComponentC);
    });

    it('returns null if getPageEntry returns null', () => {
      const component = getPageComponent(null, ['invalid-slug']);
      expect(component).toBeNull();
    });
  });

  describe('getPageComponentByPath', () => {
    it('returns component by path using routeMapper functions', async () => {
      pageComponentRegistry.registerById('pathCat', 'pathId', MockComponentA);

      vi.mocked(routeMapper.findNavigationItemByPath).mockReturnValue({
        category: 'pathCat',
        id: 'pathId',
        title: 'Path',
        path: '/docs/path'
      });
      vi.mocked(routeMapper.pathToSlug).mockReturnValue(['pathCat', 'pathId']);

      const component = await getPageComponentByPath('/docs/path');

      expect(component).toBe(MockComponentA);
      expect(routeMapper.findNavigationItemByPath).toHaveBeenCalledWith('/docs/path');
      expect(routeMapper.pathToSlug).toHaveBeenCalledWith('/docs/path');
    });

    it('returns null if findNavigationItemByPath returns null', async () => {
      vi.mocked(routeMapper.findNavigationItemByPath).mockReturnValue(null);

      const component = await getPageComponentByPath('/docs/invalid');
      expect(component).toBeNull();
    });
  });
});

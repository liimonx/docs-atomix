import { describe, it, expect, vi } from 'vitest';
import {
  isValidRoute,
  isComponentRoute,
  getComponentId,
  isValidComponent
} from '../routeValidation';
import * as routeMapper from '../routeMapper';

// Mock findNavigationItemByPath to avoid needing the full navigation data structure
vi.mock('../routeMapper', () => ({
  findNavigationItemByPath: vi.fn(),
}));

describe('routeValidation', () => {
  describe('isValidRoute', () => {
    it('returns true for special case /docs', () => {
      expect(isValidRoute('/docs')).toBe(true);
    });

    it('returns true for special case /docs/components', () => {
      expect(isValidRoute('/docs/components')).toBe(true);
    });

    it('returns true when findNavigationItemByPath finds an item', () => {
      vi.mocked(routeMapper.findNavigationItemByPath).mockReturnValue({ id: 'test', title: 'Test', path: '/docs/test', category: 'General' });
      expect(isValidRoute('/docs/test')).toBe(true);
      expect(routeMapper.findNavigationItemByPath).toHaveBeenCalledWith('/docs/test');
    });

    it('returns false when findNavigationItemByPath returns null', () => {
      vi.mocked(routeMapper.findNavigationItemByPath).mockReturnValue(null);
      expect(isValidRoute('/invalid/path')).toBe(false);
      expect(routeMapper.findNavigationItemByPath).toHaveBeenCalledWith('/invalid/path');
    });
  });

  describe('isComponentRoute', () => {
    it('returns true for a valid component detail page', () => {
      expect(isComponentRoute('/docs/components/button')).toBe(true);
    });

    it('returns false for the components index page', () => {
      expect(isComponentRoute('/docs/components')).toBe(false);
    });

    it('returns false for the components overview page', () => {
      expect(isComponentRoute('/docs/components/overview')).toBe(false);
    });

    it('returns false for the components guidelines page', () => {
      expect(isComponentRoute('/docs/components/guidelines')).toBe(false);
    });

    it('returns false for non-component routes', () => {
      expect(isComponentRoute('/docs/getting-started')).toBe(false);
    });
  });

  describe('getComponentId', () => {
    it('extracts the component ID from a valid component route', () => {
      expect(getComponentId('/docs/components/button')).toBe('button');
      expect(getComponentId('/docs/components/slider')).toBe('slider');
    });

    it('returns null for non-component routes', () => {
      expect(getComponentId('/docs/getting-started')).toBeNull();
      expect(getComponentId('/docs/components')).toBeNull();
      expect(getComponentId('/docs/components/overview')).toBeNull();
      expect(getComponentId('/docs/components/guidelines')).toBeNull();
    });
  });

  describe('isValidComponent', () => {
    it('returns true when the constructed route is valid', () => {
      vi.mocked(routeMapper.findNavigationItemByPath).mockReturnValue({ id: 'button', title: 'Button', path: '/docs/components/button', category: 'components' });
      expect(isValidComponent('button')).toBe(true);
      expect(routeMapper.findNavigationItemByPath).toHaveBeenCalledWith('/docs/components/button');
    });

    it('returns false when the constructed route is invalid', () => {
      vi.mocked(routeMapper.findNavigationItemByPath).mockReturnValue(null);
      expect(isValidComponent('invalid-component')).toBe(false);
      expect(routeMapper.findNavigationItemByPath).toHaveBeenCalledWith('/docs/components/invalid-component');
    });
  });
});

import { describe, it, expect, vi, afterEach } from 'vitest';
import { isClient, isServer } from '../performance';

describe('performance utils', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('isClient', () => {
    it('returns true when window is defined', () => {
      vi.stubGlobal('window', {});
      expect(isClient()).toBe(true);
    });

    it('returns false when window is undefined', () => {
      vi.stubGlobal('window', undefined);
      expect(isClient()).toBe(false);
    });
  });

  describe('isServer', () => {
    it('returns false when window is defined', () => {
      vi.stubGlobal('window', {});
      expect(isServer()).toBe(false);
    });

    it('returns true when window is undefined', () => {
      vi.stubGlobal('window', undefined);
      expect(isServer()).toBe(true);
    });
  });
});

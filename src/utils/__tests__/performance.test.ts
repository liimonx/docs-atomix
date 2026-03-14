import { describe, it, expect, afterEach } from 'vitest';
import { isClient, isServer } from '../performance';

describe('Performance Utilities - Environment Checks', () => {
  const originalWindow = global.window;

  afterEach(() => {
    // Restore the original window object after each test
    global.window = originalWindow;
  });

  describe('isClient', () => {
    it('should return true when window is defined', () => {
      // Simulate client environment
      global.window = {} as any;
      expect(isClient()).toBe(true);
    });

    it('should return false when window is undefined', () => {
      // Simulate server environment
      delete (global as any).window;
      expect(isClient()).toBe(false);
    });
  });

  describe('isServer', () => {
    it('should return false when window is defined', () => {
      // Simulate client environment
      global.window = {} as any;
      expect(isServer()).toBe(false);
    });

    it('should return true when window is undefined', () => {
      // Simulate server environment
      delete (global as any).window;
      expect(isServer()).toBe(true);
    });
  });
});

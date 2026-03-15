import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { isClient, isServer } from '../performance';

describe('Performance Utils - isClient / isServer', () => {
  const originalWindow = global.window;

  afterEach(() => {
    if (originalWindow === undefined) {
      // @ts-ignore
      delete global.window;
    } else {
      global.window = originalWindow;
    }
  });

  it('should detect server environment', () => {
    // @ts-ignore
    delete global.window;
    expect(isClient()).toBe(false);
    expect(isServer()).toBe(true);
  });

  it('should detect client environment', () => {
    global.window = {} as any;
    expect(isClient()).toBe(true);
    expect(isServer()).toBe(false);
  });
});

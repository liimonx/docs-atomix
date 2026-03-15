import { describe, it, expect, vi, afterEach } from 'vitest';
import { isClient, isServer } from '../performance';

describe('Performance Utils - isClient / isServer', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should detect server environment', () => {
    vi.stubGlobal('window', undefined);
    expect(isClient()).toBe(false);
    expect(isServer()).toBe(true);
  });

  it('should detect client environment', () => {
    vi.stubGlobal('window', {});
    expect(isClient()).toBe(true);
    expect(isServer()).toBe(false);
  });
});

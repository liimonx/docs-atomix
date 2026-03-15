import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { debounce, throttle } from '../performance';

describe('Performance Utilities', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  describe('debounce', () => {
    it('should call the original function after the specified wait time', () => {
      const func = vi.fn();
      const debouncedFunc = debounce(func, 100);

      debouncedFunc();
      expect(func).not.toHaveBeenCalled();

      vi.advanceTimersByTime(50);
      expect(func).not.toHaveBeenCalled();

      vi.advanceTimersByTime(50);
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should reset the timer if called again before the wait time', () => {
      const func = vi.fn();
      const debouncedFunc = debounce(func, 100);

      debouncedFunc();
      vi.advanceTimersByTime(50);
      expect(func).not.toHaveBeenCalled();

      debouncedFunc(); // resets timer
      vi.advanceTimersByTime(50);
      expect(func).not.toHaveBeenCalled(); // 100ms hasn't passed since the *last* call

      vi.advanceTimersByTime(50);
      expect(func).toHaveBeenCalledTimes(1); // 100ms has passed since the *last* call
    });

    it('should pass the correct arguments to the original function', () => {
      const func = vi.fn();
      const debouncedFunc = debounce(func, 100);

      debouncedFunc('arg1', 2);
      vi.advanceTimersByTime(100);

      expect(func).toHaveBeenCalledWith('arg1', 2);
    });
  });

  describe('throttle', () => {
    it('should call the original function immediately the first time', () => {
      const func = vi.fn();
      const throttledFunc = throttle(func, 100);

      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);
    });

    it('should not call the original function again if called multiple times within the limit', () => {
      const func = vi.fn();
      const throttledFunc = throttle(func, 100);

      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);

      throttledFunc();
      throttledFunc();
      vi.advanceTimersByTime(50);
      throttledFunc();

      expect(func).toHaveBeenCalledTimes(1); // still 1
    });

    it('should allow calling the original function again after the limit has passed', () => {
      const func = vi.fn();
      const throttledFunc = throttle(func, 100);

      throttledFunc();
      expect(func).toHaveBeenCalledTimes(1);

      vi.advanceTimersByTime(100); // Wait for throttle limit to pass

      throttledFunc();
      expect(func).toHaveBeenCalledTimes(2);
    });

    it('should pass the correct arguments to the original function', () => {
      const func = vi.fn();
      const throttledFunc = throttle(func, 100);

      throttledFunc('arg1', 2);
      expect(func).toHaveBeenCalledWith('arg1', 2);
    });
  });
});

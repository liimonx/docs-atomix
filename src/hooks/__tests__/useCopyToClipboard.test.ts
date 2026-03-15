// @vitest-environment jsdom
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useCopyToClipboard } from '../useCopyToClipboard';

describe('useCopyToClipboard', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Mock navigator.clipboard.writeText
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(),
      },
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('should handle successful copy', async () => {
    (navigator.clipboard.writeText as any).mockResolvedValueOnce(undefined);

    const { result } = renderHook(() => useCopyToClipboard());

    // Initial state
    expect(result.current[0]).toBe(false);

    let success: boolean;
    await act(async () => {
      success = await result.current[1]('test string');
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test string');
    expect(success!).toBe(true);
    expect(result.current[0]).toBe(true);

    // Advance timers to trigger the setTimeout callback
    act(() => {
      vi.advanceTimersByTime(2000);
    });

    // Should reset back to false after 2000ms
    expect(result.current[0]).toBe(false);
  });

  it('should handle error when copying fails', async () => {
    // Mock writeText to throw an error
    const testError = new Error('Clipboard error');
    (navigator.clipboard.writeText as any).mockRejectedValueOnce(testError);

    const { result } = renderHook(() => useCopyToClipboard());

    // Initial state
    expect(result.current[0]).toBe(false);

    let success: boolean;
    await act(async () => {
      success = await result.current[1]('test string');
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test string');
    expect(success!).toBe(false);
    expect(result.current[0]).toBe(false);
  });
});

// @vitest-environment jsdom
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useCopyToClipboard } from '../useCopyToClipboard';

describe('useCopyToClipboard', () => {
  const originalClipboard = navigator.clipboard;

  beforeEach(() => {
    vi.useFakeTimers();
    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn(),
      },
    });
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
    Object.assign(navigator, {
      clipboard: originalClipboard,
    });
  });

  it('should return initial state as false', () => {
    const { result } = renderHook(() => useCopyToClipboard());
    expect(result.current[0]).toBe(false);
    expect(typeof result.current[1]).toBe('function');
  });

  it('should copy text to clipboard successfully and set isCopied to true', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    const { result } = renderHook(() => useCopyToClipboard());
    const [, copy] = result.current;

    let success = false;
    await act(async () => {
      success = await copy('test text');
    });

    expect(writeTextMock).toHaveBeenCalledWith('test text');
    expect(success).toBe(true);
    expect(result.current[0]).toBe(true);
  });

  it('should reset isCopied to false after 2000ms', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    const { result } = renderHook(() => useCopyToClipboard());
    const [, copy] = result.current;

    await act(async () => {
      await copy('test text');
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      vi.advanceTimersByTime(1999);
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(result.current[0]).toBe(false);
  });

  it('should handle error when copying to clipboard fails', async () => {
    const writeTextMock = vi.fn().mockRejectedValue(new Error('Clipboard error'));
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    const { result } = renderHook(() => useCopyToClipboard());
    const [, copy] = result.current;

    let success = true;
    await act(async () => {
      success = await copy('test text');
    });

    expect(writeTextMock).toHaveBeenCalledWith('test text');
    expect(success).toBe(false);
    expect(result.current[0]).toBe(false);
  });
});

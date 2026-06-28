// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import DesignTokensGridPage from "../DesignTokensGridPage";
import { vi, describe, it } from "vitest";

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver
window.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock hook to bypass state updates/async work
vi.mock('@/hooks/useCopyToClipboard', () => {
  return {
    default: () => {
      return [false, vi.fn().mockResolvedValue(true)];
    }
  }
});

describe("DesignTokensGridPage Performance", () => {
  it("measures copy button click performance", () => {
    const { container } = render(<DesignTokensGridPage />);

    // Find all copy buttons
    const buttons = container.querySelectorAll('button');
    const copyButtons = Array.from(buttons).filter(
      (b) =>
        b instanceof HTMLButtonElement &&
        (b.innerHTML.includes("Copy") || b.querySelector("svg")),
    );

    if (copyButtons.length === 0) {
      console.warn("No copy buttons found, skipping benchmark");
      return;
    }

    const t0 = performance.now();

    for (let i = 0; i < 500; i++) {
      for (const btn of copyButtons) {
        fireEvent.click(btn);
      }
    }

    const t1 = performance.now();
    console.log(`Time taken for 500 iterations of all clicks: ${t1 - t0} milliseconds.`);
  }, 10000);
});

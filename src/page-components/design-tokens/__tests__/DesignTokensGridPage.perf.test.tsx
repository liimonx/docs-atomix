// @vitest-environment jsdom
import { render, fireEvent, screen } from "@testing-library/react";
import DesignTokensGridPage from "../DesignTokensGridPage";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";

// Mock copy to clipboard
vi.mock("@/hooks/useCopyToClipboard", () => ({
  default: () => [false, vi.fn().mockResolvedValue(true)],
}));

// Mock Atomix components to simplify rendering and avoid icon issues
vi.mock("@shohojdhara/atomix", () => ({
  Hero: () => <div>Hero</div>,
  SectionIntro: () => <div>SectionIntro</div>,
  Card: ({ children }: any) => <div>{children}</div>,
  GridCol: ({ children }: any) => <div>{children}</div>,
  Block: ({ children }: any) => <div>{children}</div>,
  Grid: ({ children }: any) => <div>{children}</div>,
  DataTable: ({ data, columns }: any) => {
    return (
      <table>
        <tbody>
          {data.map((row: any, i: number) => (
            <tr key={i}>
              {columns.map((col: any, j: number) => (
                <td key={j}>{col.render(row[col.key], row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
  Button: ({ onClick }: any) => <button data-testid="copy-button" onClick={onClick}>Copy</button>,
  Icon: () => <span>Icon</span>,
  Badge: () => <span>Badge</span>,
}));

// Generate a large number of tokens to make the performance difference measurable
const generateTokens = (count: number, prefix: string) => {
  return Array.from({ length: count }, (_, i) => ({
    name: `${prefix} ${i}`,
    value: `${i}px`,
    description: `Spacing (${i}px)`,
    cssVariable: `--${prefix.toLowerCase()}-${i}`,
  }));
};

const mockTokens = generateTokens(10000, "Spacing");

vi.mock("@/data/design-tokens", () => ({
  getTokensByCategory: (category: string) => {
    if (category === "breakpoints") {
      return { tokens: generateTokens(10000, "Breakpoint") };
    }
    if (category === "spacing") {
      return { tokens: mockTokens };
    }
    return { tokens: [] };
  },
}));

describe("DesignTokensGridPage Performance", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("measures time to click copy buttons", () => {
    const { container } = render(<DesignTokensGridPage />);
    const buttons = screen.getAllByTestId("copy-button");

    // We expect some buttons to be rendered
    expect(buttons.length).toBeGreaterThan(0);

    const testButtons = buttons.slice(0, 1000);

    const startTime = performance.now();
    // Simulate clicking all buttons to trigger the find operation multiple times
    for (const button of testButtons) {
      fireEvent.click(button);
    }
    const endTime = performance.now();

    console.log(`Time taken for ${testButtons.length} clicks: ${endTime - startTime}ms`);
    // Assert that it takes less than some reasonable time, mainly we are just recording this.
    expect(endTime - startTime).toBeLessThan(1000);
  }, 10000);
});

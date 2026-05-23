// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { EnhancedCodeBlock } from "../EnhancedCodeBlock";
import { vi, describe, it, expect } from "vitest";

vi.mock("react-syntax-highlighter", () => ({
  Prism: ({ children }: any) => <div data-testid="syntax-highlighter">{children}</div>,
}));

describe("EnhancedCodeBlock Performance", () => {
  it("should process large code blocks efficiently", () => {
    // Generate a very large code block
    const numLines = 100000;
    const lines = [];
    for (let i = 0; i < numLines; i++) {
      if (i % 10 === 0) {
        lines.push(""); // empty line
      } else if (i % 5 === 0) {
        lines.push("        const nested = true;");
      } else {
        lines.push("    const a = 1;");
      }
    }
    const largeCode = lines.join("\n");

    const start = performance.now();
    render(<EnhancedCodeBlock code={largeCode} />);
    const end = performance.now();

    const renderTime = end - start;
    console.log(`Render time for ${numLines} lines: ${renderTime}ms`);

    expect(renderTime).toBeLessThan(5000);
  });
});

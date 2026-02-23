// @vitest-environment jsdom
import { render, waitFor } from "@testing-library/react";
import MarkdownPage from "./MarkdownPage";
import { vi, describe, it, expect, beforeEach } from "vitest";

// Mock ReactMarkdown
const mockReactMarkdown = vi.fn((_props: any) => <div>Markdown Content</div>);

vi.mock("react-markdown", () => ({
  default: (props: any) => mockReactMarkdown(props),
}));

// Mock Hero and Block to avoid rendering issues if they have complex dependencies
vi.mock("@shohojdhara/atomix", () => ({
  Hero: () => <div>Hero</div>,
  Block: ({ children }: any) => <div>{children}</div>,
}));

// Mock EnhancedCodeBlock
vi.mock("@/components/showcase/EnhancedCodeBlock", () => ({
  EnhancedCodeBlock: () => <div>CodeBlock</div>,
}));

describe("MarkdownPage Performance", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve("Some markdown content"),
      })
    ) as any;
  });

  it("should pass the stable components object to ReactMarkdown on re-renders", async () => {
    const { rerender } = render(
      <MarkdownPage
        title="Test"
        description="Desc"
        markdownPath="/path/to/doc.md"
      />
    );

    // Wait for loading to finish and ReactMarkdown to be rendered
    await waitFor(() => {
      expect(mockReactMarkdown).toHaveBeenCalled();
    });

    // Capture the first components prop
    const firstCallProps = mockReactMarkdown.mock.calls[mockReactMarkdown.mock.calls.length - 1][0];
    const firstComponents = firstCallProps.components;

    // Force a re-render by changing a prop that triggers update
    rerender(
      <MarkdownPage
        title="Test Updated"
        description="Desc"
        markdownPath="/path/to/doc.md"
      />
    );

    // Wait for potential re-render
    await waitFor(() => {
       expect(mockReactMarkdown.mock.calls.length).toBeGreaterThan(1);
    });

    // Capture the latest components prop
    const secondCallProps = mockReactMarkdown.mock.calls[mockReactMarkdown.mock.calls.length - 1][0];
    const secondComponents = secondCallProps.components;

    // Check if the components object is the same reference
    expect(secondComponents).toBe(firstComponents);
  });
});

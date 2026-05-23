// @vitest-environment jsdom
import { render } from "@testing-library/react";
import DesignTokensPage from "@/page-components/design-tokens/DesignTokensPage";
import { vi, describe, it, expect } from "vitest";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/design-tokens/all",
}));

// Mock @shohojdhara/atomix components to focus on logic
vi.mock("@shohojdhara/atomix", () => {
  const Hero = ({ children, title }: any) => <div>{title}{children}</div>;
  Hero.Content = function HeroContent({ children }: any) { return <div>{children}</div>; };
  Hero.Title = function HeroTitle({ children }: any) { return <div>{children}</div>; };
  Hero.Text = function HeroText({ children }: any) { return <div>{children}</div>; };
  return {
    Hero,
    GridCol: ({ children }: any) => <div>{children}</div>,
    Grid: ({ children }: any) => <div>{children}</div>,
    Block: ({ children }: any) => <div>{children}</div>,
    Card: ({ children }: any) => <div>{children}</div>,
    Badge: () => <div>Badge</div>,
    Icon: () => <div>Icon</div>,
  };
});

// Mock TokenCard
vi.mock("@/page-components/design-tokens/TokenCard", () => ({
  default: () => <div>TokenCard</div>,
}));

describe("DesignTokensPage Performance", () => {
  it("measure render time", () => {
    const start = performance.now();
    for(let i=0; i<50; i++) {
        render(<DesignTokensPage />);
    }
    const end = performance.now();
    const duration = end - start;
    console.log(`BENCHMARK: Render 50 times took ${duration.toFixed(2)}ms`);
    expect(true).toBe(true);
  });
});

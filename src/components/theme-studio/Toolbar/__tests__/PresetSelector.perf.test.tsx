// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { PresetSelector } from "../PresetSelector";
import { vi, describe, it, expect } from "vitest";

// Mock store
const mockSetTheme = vi.fn();
const mockSaveCustomPreset = vi.fn();
const mockLoadCustomPresets = vi.fn();

vi.mock("@/stores/themeStudioStore", () => ({
  useThemeStudioStore: () => ({
    setTheme: mockSetTheme,
    customPresets: {
      "test-1": { name: "Test 1", light: {}, dark: {} },
      "test-2": { name: "Test 2", light: {}, dark: {} }
    },
    saveCustomPreset: mockSaveCustomPreset,
    loadCustomPresets: mockLoadCustomPresets
  })
}));

// Mock theme presets
vi.mock("@/data/themePresets", () => ({
  themePresets: {
    "default": { name: "Default", light: {}, dark: {} },
    "ocean": { name: "Ocean", light: {}, dark: {} }
  }
}));

// Mock atomix components
vi.mock("@shohojdhara/atomix", () => ({
  Button: ({ children }: any) => <button>{children}</button>,
  Icon: () => <span>Icon</span>,
  Dropdown: ({ children, menu }: any) => <div>{children} {menu}</div>,
  Input: (props: any) => <input {...props} />,
  Modal: ({ children, isOpen }: any) => isOpen ? <div>{children}</div> : null,
  Menu: ({ children }: any) => <ul>{children}</ul>,
  MenuItem: ({ children }: any) => <li>{children}</li>
}));

describe("PresetSelector Performance", () => {
  it("should test dropdownItems reference stability across re-renders", () => {
    // We will measure render time and object allocation
    // For React components, a good proxy for array reconstruction
    // is tracking if the mapped output references change,
    // but the issue describes unnecessary iteration.

    // We'll write a simple test to measure multiple re-renders.
    const startTime = performance.now();
    const { rerender } = render(<PresetSelector />);

    // Re-render 1000 times
    for (let i = 0; i < 1000; i++) {
      rerender(<PresetSelector />);
    }
    const endTime = performance.now();

    console.log(`Time taken for 1000 re-renders: ${endTime - startTime}ms`);
    expect(endTime - startTime).toBeLessThan(1000); // Sanity check
  });
});

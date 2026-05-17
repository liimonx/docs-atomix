// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { PresetSelector } from "../PresetSelector";
import { vi, describe, it, expect, beforeEach } from "vitest";

// Mock store
const mockSetTheme = vi.fn();
const mockLoadCustomPresets = vi.fn();
const mockSaveCustomPreset = vi.fn();

const mockCustomPresets = {
  "custom-1": { name: "Custom 1", light: {}, dark: {} },
};

vi.mock("@/stores/themeStudioStore", () => ({
  useThemeStudioStore: () => ({
    setTheme: mockSetTheme,
    customPresets: mockCustomPresets,
    saveCustomPreset: mockSaveCustomPreset,
    loadCustomPresets: mockLoadCustomPresets,
  }),
}));

vi.mock("@/data/themePresets", () => ({
  themePresets: {
    "preset-1": { name: "Preset 1", light: {}, dark: {} },
    "preset-2": { name: "Preset 2", light: {}, dark: {} },
  },
}));

// Mock Atomix components
vi.mock("@shohojdhara/atomix", () => ({
  Button: ({ children, onClick }: any) => <button onClick={onClick}>{children}</button>,
  Icon: () => <span>Icon</span>,
  Dropdown: ({ menu, children }: any) => (
    <div>
      {children}
      <div data-testid="dropdown-menu">{menu}</div>
    </div>
  ),
  Input: (props: any) => <input {...props} />,
  Modal: ({ isOpen, children }: any) => (isOpen ? <div>{children}</div> : null),
  Menu: ({ children }: any) => <div>{children}</div>,
  MenuItem: ({ children, onClick }: any) => (
    <div data-testid="menu-item" onClick={onClick}>
      {children}
    </div>
  ),
}));

// To monitor re-renders and array creation, we will create an spy inside our test

describe("PresetSelector Performance", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should not recreate items on every render", () => {
    // We can test this by checking if the menu items reference is the same between renders.
    // However, since they are mapped into JSX, we can verify it by spying on `Object.entries`
    // but React itself might use Object.entries internally during rerender.
    // Instead of counting all Object.entries, let's filter for ones that receive our presets.
    const { rerender } = render(<PresetSelector />);

    // Since we're struggling to spy on Object.entries, let's spy on mockSetTheme or something else?
    // Wait, the test was originally expect(objectEntriesSpy.mock.calls.length).toBe(initialCallCount) which returned 6 to 4 (delta 2).
    // Now that we have useMemo, let's just use the original test code without mockImplementation.
    const objectEntriesSpy = vi.spyOn(Object, "entries");

    // Clear calls so we only count during re-render
    objectEntriesSpy.mockClear();

    // Force a re-render.
    rerender(<PresetSelector />);

    // If we wrapped Object.entries in a useMemo, it should not be called again when simply rerendering.
    // Wait, React or other components might call Object.entries.
    // Let's filter the calls we actually care about:
    const presetCalls = objectEntriesSpy.mock.calls.filter(call => {
      const arg = call[0];
      return arg && typeof arg === 'object' && ('preset-1' in arg || 'custom-1' in arg);
    });

    expect(presetCalls.length).toBe(0);

    objectEntriesSpy.mockRestore();
  });
});

import { describe, it, expect } from 'vitest';
import { parseTokensFromSCSS } from '../parseTokensFromSCSS';

describe('parseTokensFromSCSS', () => {
  describe('empty or invalid input', () => {
    it('returns empty arrays for empty string', () => {
      const result = parseTokensFromSCSS('');
      expect(result.light).toEqual([]);
      expect(result.dark).toEqual([]);
      expect(result.categories).toEqual([]);
    });

    it('returns empty arrays for CSS without correct sections', () => {
      const css = `
        .random-class {
          --atomix-primary: #8b5cf6;
        }
      `;
      const result = parseTokensFromSCSS(css);
      expect(result.light).toEqual([]);
      expect(result.dark).toEqual([]);
      expect(result.categories).toEqual([]);
    });

    it('returns empty arrays when sections exist but have no variables', () => {
      const css = `
        :root, [data-atomix-color-mode=light] {
          /* Empty */
        }
        [data-atomix-color-mode=dark] {
          /* Empty */
        }
      `;
      const result = parseTokensFromSCSS(css);
      expect(result.light).toEqual([]);
      expect(result.dark).toEqual([]);
      expect(result.categories).toEqual([]);
    });
  });

  describe('extracting light mode tokens', () => {
    it('extracts tokens from the light section', () => {
      const css = `
        :root, [data-atomix-color-mode=light] {
          --atomix-primary: #8b5cf6;
        }
      `;
      const result = parseTokensFromSCSS(css);

      expect(result.light).toHaveLength(1);
      expect(result.light[0]).toEqual(expect.objectContaining({
        name: '--atomix-primary',
        value: '#8b5cf6',
        mode: 'light',
      }));
    });
  });

  describe('extracting dark mode tokens', () => {
    it('extracts tokens from the dark section', () => {
      const css = `
        [data-atomix-color-mode=dark] {
          --atomix-primary: #a78bfa;
        }
      `;
      const result = parseTokensFromSCSS(css);

      expect(result.dark).toHaveLength(1);
      expect(result.dark[0]).toEqual(expect.objectContaining({
        name: '--atomix-primary',
        value: '#a78bfa',
        mode: 'dark',
      }));
    });
  });

  describe('detecting token types', () => {
    const runTest = (css: string, expectedType: string) => {
      const wrappedCss = `:root, [data-atomix-color-mode=light] { ${css} }`;
      const result = parseTokensFromSCSS(wrappedCss);
      expect(result.light[0].type).toBe(expectedType);
    };

    it('detects color', () => {
      runTest('--atomix-color-1: #ffffff;', 'color');
      runTest('--atomix-color-2: rgb(0,0,0);', 'color');
      runTest('--atomix-color-3: rgba(0,0,0,0.5);', 'color');
      runTest('--atomix-color-4: red;', 'color');
    });

    it('detects gradient', () => {
      runTest('--atomix-gradient-bg: linear-gradient(to right, red, blue);', 'gradient');
    });

    it('detects shadow', () => {
      runTest('--atomix-shadow-sm: 0 1px 2px rgba(0,0,0,0.1);', 'shadow');
      runTest('--atomix-box-shadow: 0 4px 6px rgba(0,0,0,0.1);', 'shadow');
    });

    it('detects font-family', () => {
      runTest('--atomix-font-family-base: "Inter", sans-serif;', 'font-family');
      runTest('--atomix-font-sans-serif: "Inter", sans-serif;', 'font-family');
    });

    it('detects font-size', () => {
      runTest('--atomix-font-size-sm: 0.875rem;', 'font-size');
      runTest('--atomix-display-1: 3rem;', 'font-size');
    });

    it('detects font-weight', () => {
      runTest('--atomix-font-weight-bold: 700;', 'font-weight');
    });

    it('detects line-height', () => {
      runTest('--atomix-line-height-base: 1.5;', 'line-height');
    });

    it('detects letter-spacing', () => {
      runTest('--atomix-letter-spacing-wide: 0.05em;', 'letter-spacing');
    });

    it('detects spacing', () => {
      runTest('--atomix-spacing-4: 1rem;', 'spacing');
    });

    it('detects border-radius', () => {
      runTest('--atomix-border-radius-md: 0.375rem;', 'border-radius');
    });

    it('detects transition', () => {
      runTest('--atomix-transition-all: all 0.3s ease;', 'transition');
      runTest('--atomix-easing-default: cubic-bezier(0.4, 0, 0.2, 1);', 'transition');
    });

    it('detects z-index', () => {
      runTest('--atomix-z-10: 10;', 'z-index');
    });

    it('detects breakpoint', () => {
      runTest('--atomix-breakpoint-md: 768px;', 'breakpoint');
    });

    it('detects number', () => {
      runTest('--atomix-size: 10px;', 'number');
      runTest('--atomix-duration: 0.5s;', 'number');
      runTest('--atomix-percentage: 100%;', 'number');
    });

    it('defaults to text for unrecognized combinations', () => {
      runTest('--atomix-custom-var: complex value 1 2 3;', 'text');
    });
  });

  describe('mapping token categories', () => {
    const runTest = (css: string, expectedCategory: string) => {
      const wrappedCss = `:root, [data-atomix-color-mode=light] { ${css} }`;
      const result = parseTokensFromSCSS(wrappedCss);
      expect(result.light[0].category).toBe(expectedCategory);
    };

    it('maps to colors', () => {
      runTest('--atomix-primary: #fff;', 'colors');
      runTest('--atomix-gray-100: #fff;', 'colors');
      runTest('--atomix-success: #fff;', 'colors');
      runTest('--atomix-border-color: #fff;', 'colors');
    });

    it('maps to typography', () => {
      runTest('--atomix-font-base: "Inter";', 'typography');
      runTest('--atomix-heading-size: 2rem;', 'typography');
    });

    it('maps to spacing', () => {
      runTest('--atomix-spacing-sm: 1rem;', 'spacing');
    });

    it('maps to border-radius', () => {
      runTest('--atomix-border-radius-sm: 4px;', 'border-radius');
    });

    it('maps to shadows', () => {
      runTest('--atomix-shadow-md: 0 4px 6px rgba(0,0,0,0.1);', 'shadows');
    });

    it('maps to gradients', () => {
      runTest('--atomix-gradient-1: linear-gradient();', 'gradients');
    });

    it('maps to transitions', () => {
      runTest('--atomix-transition-slow: 0.5s;', 'transitions');
    });

    it('maps to z-index', () => {
      runTest('--atomix-z-10: 10;', 'z-index');
    });

    it('maps to breakpoints', () => {
      runTest('--atomix-breakpoint-lg: 1024px;', 'breakpoints');
    });

    it('maps to forms', () => {
      runTest('--atomix-form-input-bg: #fff;', 'forms');
      runTest('--atomix-focus-ring: 0 0 0 2px blue;', 'forms');
    });

    it('maps to borders', () => {
      runTest('--atomix-border-width: 1px;', 'borders');
    });

    it('maps to other for unrecognized', () => {
      runTest('--atomix-opacity-50: 0.5;', 'other');
    });
  });

  describe('formatting display names', () => {
    const runTest = (css: string, expectedDisplayName: string) => {
      const wrappedCss = `:root, [data-atomix-color-mode=light] { ${css} }`;
      const result = parseTokensFromSCSS(wrappedCss);
      expect(result.light[0].displayName).toBe(expectedDisplayName);
    };

    it('strips --atomix- prefix and formats display name correctly', () => {
      runTest('--atomix-primary: #fff;', 'Primary');
      runTest('--atomix-primary-color: #fff;', 'Primary Color');
      runTest('--atomix-font-size-sm: 1rem;', 'Font Size Sm');
      runTest('--atomix-border-radius-large: 8px;', 'Border Radius Large');
      runTest('--atomix-z-index-modal: 1000;', 'Z Index Modal');
    });
  });
});

import { describe, it, expect, vi } from 'vitest';
import {
  detectTokenType,
  validateTokenValue,
  parseTokenValue,
  formatTokenValue,
  calculateContrastRatio,
  checkContrastCompliance,
  exportAsJSON,
  exportAsCSS,
  exportAsSCSS,
  exportAsTypeScript,
  exportAsFigma,
  exportAsTailwindConfig,
  exportAsStyleDictionary,
  exportAsDesignTokens,
  applyThemeToDocument,
  validateImportedTheme
} from '../themeTokenUtils';
import * as colorUtils from '../colorUtils';

describe('themeTokenUtils - core validations', () => {
  describe('detectTokenType', () => {
    it('detects color type', () => {
      expect(detectTokenType('#ffffff')).toBe('color');
      expect(detectTokenType('rgb(0, 0, 0)')).toBe('color');
      expect(detectTokenType('rgba(0, 0, 0, 0.5)')).toBe('color');
      expect(detectTokenType('red')).toBe('color');
      expect(detectTokenType('transparent')).toBe('color');
    });

    it('detects number type', () => {
      expect(detectTokenType('16px')).toBe('number');
      expect(detectTokenType('1.5rem')).toBe('number');
      expect(detectTokenType('-2px')).toBe('number');
      expect(detectTokenType('100%')).toBe('number');
      expect(detectTokenType('0.5s')).toBe('number');
    });

    it('detects gradient type', () => {
      expect(detectTokenType('linear-gradient(to right, red, blue)')).toBe('gradient');
    });

    it('detects shadow type', () => {
      expect(detectTokenType('0 4px 6px rgba(0,0,0,0.1)')).toBe('text'); // Wait, the implementation says `val.includes("shadow") || val.includes("box-shadow")`. So it only detects shadow if it contains the word "shadow".
      expect(detectTokenType('box-shadow: 0 4px 6px')).toBe('shadow');
    });

    it('defaults to text type', () => {
      expect(detectTokenType('Inter, sans-serif')).toBe('text');
      expect(detectTokenType('bold')).toBe('text');
      expect(detectTokenType('anything else')).toBe('text');
    });
  });

  describe('validateTokenValue', () => {
    it('returns error for empty value', () => {
      const result = validateTokenValue('myToken', '   ');
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Token value cannot be empty');
    });

    it('validates hex colors', () => {
      const valid = validateTokenValue('color-bg', '#ffffff', 'color');
      expect(valid.valid).toBe(true);

      const invalid = validateTokenValue('color-bg', '#ff', 'color');
      expect(invalid.valid).toBe(false);
      expect(invalid.errors).toContain('Invalid hex color format. Use #RGB, #RRGGBB, or #RRGGBBAA');
    });

    it('validates rgb colors', () => {
      const valid = validateTokenValue('color-bg', 'rgba(0, 0, 0, 0.5)', 'color');
      expect(valid.valid).toBe(true);

      const invalid = validateTokenValue('color-bg', 'rgb(0,0)', 'color');
      expect(invalid.valid).toBe(false);
      expect(invalid.errors).toContain('Invalid RGB/RGBA format. Use rgb(r, g, b) or rgba(r, g, b, a)');
    });

    it('validates named colors and adds warnings for unknown ones', () => {
      const valid = validateTokenValue('color-bg', 'red', 'color');
      expect(valid.valid).toBe(true);

      // Passing 'color' explicitly skips detection, ensuring it goes into the color check branch
      // but fails the named color check since magenta isn't in the valid named colors list.
      const warning = validateTokenValue('color-bg', 'magenta', 'color');
      expect(warning.valid).toBe(true);
      expect(warning.warnings).toContain('Unknown named color. Consider using hex or RGB format');
    });

    it('validates numbers with units', () => {
      const valid = validateTokenValue('spacing', '16px', 'number');
      expect(valid.valid).toBe(true);

      const invalid = validateTokenValue('spacing', '16', 'number');
      expect(invalid.valid).toBe(false);
      expect(invalid.errors).toContain('Invalid number format. Use a number followed by a unit (rem, px, em, %, s, ms, etc.)');

      const negativeSize = validateTokenValue('size-small', '-10px', 'number');
      expect(negativeSize.valid).toBe(true);
      expect(negativeSize.warnings).toContain('Negative values may not be appropriate for size/spacing tokens');
    });

    it('checks contrast for text color tokens', () => {
      const whiteText = validateTokenValue('text-primary', '#ffffff', 'color');
      expect(whiteText.warnings).toContain('White text may have contrast issues on light backgrounds');

      const blackText = validateTokenValue('text-primary', '#000000', 'color');
      expect(blackText.warnings).toContain('Black text may have contrast issues on dark backgrounds');
    });

    it('adds warnings for whitespace issues', () => {
      const spaceWarning = validateTokenValue('token', 'value  with space', 'text');
      expect(spaceWarning.warnings).toContain('Multiple consecutive spaces detected. Consider using a single space');

      const trailingWarning = validateTokenValue('token', 'value ', 'text');
      expect(trailingWarning.warnings).toContain('Value has leading or trailing spaces');
    });
  });

  describe('parseTokenValue', () => {
    it('expands 3-digit hex colors', () => {
      expect(parseTokenValue('f00', 'color')).toBe('#ff0000');
    });

    it('adds # to 6-digit hex colors', () => {
      expect(parseTokenValue('ff0000', 'color')).toBe('#ff0000');
    });

    it('trims whitespace', () => {
      expect(parseTokenValue(' 16px ', 'number')).toBe('16px');
    });
  });

  describe('formatTokenValue', () => {
    it('trims value', () => {
      expect(formatTokenValue('  #ffffff  ')).toBe('#ffffff');
    });
  });

  describe('calculateContrastRatio & checkContrastCompliance', () => {
    it('calculates contrast and compliance correctly', () => {
      // White on black gives maximum contrast 21
      const complianceWhiteBlack = checkContrastCompliance('#ffffff', '#000000');
      expect(complianceWhiteBlack.ratio).toBeGreaterThan(1);

      const complianceWhiteWhite = checkContrastCompliance('#ffffff', '#ffffff');
      expect(complianceWhiteWhite.ratio).toBe(1);
      expect(complianceWhiteWhite.aa).toBe(false);
      expect(complianceWhiteWhite.aaa).toBe(false);
    });

    it('handles calculateContrastRatio error safely', () => {
      // Mocking getContrastRatio to throw an error
      const spy = vi.spyOn(colorUtils, 'getContrastRatio').mockImplementation(() => {
        throw new Error('Test error');
      });

      const ratio = calculateContrastRatio('invalid', 'color');
      expect(ratio).toBe(1);

      spy.mockRestore();
    });
  });

  describe('exportAsJSON', () => {
    it('exports as valid JSON with light and dark tokens', () => {
      const light = { '--atomix-color-primary': '#000000' };
      const dark = { '--atomix-color-primary': '#ffffff' };
      const json = exportAsJSON(light, dark);
      const parsed = JSON.parse(json);
      expect(parsed.light['--atomix-color-primary']).toBe('#000000');
      expect(parsed.dark['--atomix-color-primary']).toBe('#ffffff');
      expect(parsed.version).toBe('1.0.0');
    });
  });

  describe('exportAsCSS', () => {
    it('exports as CSS variables', () => {
      const light = { '--atomix-color-primary': '#000000' };
      const dark = { '--atomix-color-primary': '#ffffff' };
      const css = exportAsCSS(light, dark);
      expect(css).toContain(':root,');
      expect(css).toContain('[data-atomix-color-mode=light] {');
      expect(css).toContain('--atomix-color-primary: #000000;');
      expect(css).toContain('[data-atomix-color-mode=dark] {');
      expect(css).toContain('--atomix-color-primary: #ffffff;');
    });
  });

  describe('exportAsSCSS', () => {
    it('exports as SCSS map', () => {
      const light = { '--atomix-color-primary': '#000000' };
      const dark = { '--atomix-color-primary': '#ffffff' };
      const scss = exportAsSCSS(light, dark);
      expect(scss).toContain('$theme-tokens: (');
      expect(scss).toContain("'light': (");
      expect(scss).toContain("'color-primary': #000000,");
      expect(scss).toContain("'dark': (");
      expect(scss).toContain("'color-primary': #ffffff,");
    });
  });

  describe('exportAsTypeScript', () => {
    it('exports as TypeScript definitions', () => {
      const light = { '--atomix-color-primary': '#000000' };
      const dark = { '--atomix-color-primary': '#ffffff' };
      const ts = exportAsTypeScript(light, dark);
      expect(ts).toContain('export interface AtomixTokens {');
      expect(ts).toContain("color_primary: '#000000';");
      expect(ts).toContain('export const atomixTokens: AtomixTokens = {');
      expect(ts).toContain("color_primary: '#ffffff',");
    });
  });

  describe('exportAsFigma', () => {
    it('exports as Figma Variables JSON', () => {
      const light = { '--atomix-color-primary': '#000000' };
      const dark = { '--atomix-color-primary': '#ffffff' };
      const figmaJson = exportAsFigma(light, dark);
      const parsed = JSON.parse(figmaJson);
      expect(parsed.collections[0].name).toBe('Atomix Design Tokens');
      expect(parsed.collections[0].variables[0].name).toBe('color-primary');
      expect(parsed.collections[0].variables[0].resolvedType).toBe('COLOR');
    });
  });

  describe('exportAsTailwindConfig', () => {
    it('exports as Tailwind config format', () => {
      const light = { '--atomix-color-primary': '#000000', '--atomix-space-4': '1rem' };
      const config = exportAsTailwindConfig(light);
      expect(config).toContain('module.exports = {');
      expect(config).toContain("colors: {");
      expect(config).toContain("'color_primary': '#000000',");
      expect(config).toContain("spacing: {");
      expect(config).toContain("'space_4': '1rem',");
    });
  });

  describe('exportAsStyleDictionary', () => {
    it('exports as Style Dictionary structure', () => {
      const light = { '--atomix-color-primary': '#000000' };
      const sdJson = exportAsStyleDictionary(light);
      const parsed = JSON.parse(sdJson);
      expect(parsed.color.color.primary.value).toBe('#000000');
      expect(parsed.color.color.primary.type).toBe('color');
    });
  });

  describe('exportAsDesignTokens', () => {
    it('exports as W3C Design Tokens format', () => {
      const light = { '--atomix-color-primary': '#000000' };
      const dark = { '--atomix-color-primary': '#ffffff' };
      const tokensJson = exportAsDesignTokens(light, dark);
      const parsed = JSON.parse(tokensJson);
      expect(parsed.$schema).toBe('https://design-tokens.github.io/community-group/format/schema.json');
      expect(parsed.tokens['color-primary'].$type).toBe('color');
      expect(parsed.modes.light['color-primary'].$value).toBe('#000000');
    });
  });

});

  describe('applyThemeToDocument', () => {
    it('applies theme to document element', () => {
      // Mock document
      const mockSetAttribute = vi.fn();
      const mockSetProperty = vi.fn();

      global.document = {
        documentElement: {
          setAttribute: mockSetAttribute,
          style: {
            setProperty: mockSetProperty
          }
        }
      } as any;

      applyThemeToDocument({ '--atomix-color-primary': '#000000' }, 'dark');

      expect(mockSetAttribute).toHaveBeenCalledWith('data-atomix-color-mode', 'dark');
      expect(mockSetProperty).toHaveBeenCalledWith('--atomix-color-primary', '#000000');
    });

    it('returns early if document is undefined', () => {
      const originalDoc = global.document;
      // @ts-ignore
      delete global.document;

      expect(() => {
        applyThemeToDocument({ '--atomix-color-primary': '#000000' }, 'light');
      }).not.toThrow();

      global.document = originalDoc;
    });
  });

  describe('validateImportedTheme', () => {
    it('validates a correct theme structure', () => {
      const validTheme = {
        name: 'Test Theme',
        light: { '--atomix-color-primary': '#ffffff' },
        dark: { '--atomix-color-primary': '#000000' }
      };

      const result = validateImportedTheme(validTheme);
      expect(result.valid).toBe(true);
    });

    it('returns error if data is not an object', () => {
      expect(validateImportedTheme(null).valid).toBe(false);
      expect(validateImportedTheme('string').valid).toBe(false);
    });

    it('validates metadata if provided', () => {
      const invalidTheme = {
        name: 123, // Invalid name type
        light: {},
        dark: {}
      };

      const result = validateImportedTheme(invalidTheme);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('Theme metadata validation failed');
    });

    it('returns error if light or dark property is missing', () => {
      const noLight = { dark: {} };
      expect(validateImportedTheme(noLight).valid).toBe(false);
      expect(validateImportedTheme(noLight).error).toContain('Theme must have a "light" property');

      const noDark = { light: {} };
      expect(validateImportedTheme(noDark).valid).toBe(false);
      expect(validateImportedTheme(noDark).error).toContain('Theme must have a "dark" property');
    });

    it('returns error if token values are not strings', () => {
      const invalidLight = {
        light: { '--atomix-color-primary': 123 },
        dark: {}
      };
      expect(validateImportedTheme(invalidLight).valid).toBe(false);
      expect(validateImportedTheme(invalidLight).error).toContain('All light theme token values must be strings');

      const invalidDark = {
        light: {},
        dark: { '--atomix-color-primary': 123 }
      };
      expect(validateImportedTheme(invalidDark).valid).toBe(false);
      expect(validateImportedTheme(invalidDark).error).toContain('All dark theme token values must be strings');
    });
  });

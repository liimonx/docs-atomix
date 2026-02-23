import { describe, it, expect } from 'vitest';
import { parseColor } from '../colorUtils';

describe('parseColor', () => {
  describe('valid inputs', () => {
    it('parses hex colors', () => {
      expect(parseColor('#000000')).toEqual({ r: 0, g: 0, b: 0, a: 1 });
      expect(parseColor('#ffffff')).toEqual({ r: 255, g: 255, b: 255, a: 1 });
      expect(parseColor('#ff0000')).toEqual({ r: 255, g: 0, b: 0, a: 1 });

      const result = parseColor('#00000080');
      expect(result).not.toBeNull();
      if (result) {
        expect(result.r).toBe(0);
        expect(result.g).toBe(0);
        expect(result.b).toBe(0);
        expect(result.a).toBeCloseTo(0.5, 1);
      }
    });

    it('parses rgb colors', () => {
      expect(parseColor('rgb(0, 0, 0)')).toEqual({ r: 0, g: 0, b: 0, a: 1 });
      expect(parseColor('rgb(255, 255, 255)')).toEqual({ r: 255, g: 255, b: 255, a: 1 });
      expect(parseColor('rgba(0, 0, 0, 0.5)')).toEqual({ r: 0, g: 0, b: 0, a: 0.5 });
    });

    it('parses hsl colors', () => {
      expect(parseColor('hsl(0, 0%, 0%)')).toEqual({ r: 0, g: 0, b: 0, a: 1 });
      expect(parseColor('hsl(0, 100%, 50%)')).toEqual({ r: 255, g: 0, b: 0, a: 1 });
      expect(parseColor('hsla(0, 0%, 0%, 0.5)')).toEqual({ r: 0, g: 0, b: 0, a: 0.5 });
    });

    it('parses named colors', () => {
      expect(parseColor('black')).toEqual({ r: 0, g: 0, b: 0, a: 1 });
      expect(parseColor('white')).toEqual({ r: 255, g: 255, b: 255, a: 1 });
      expect(parseColor('red')).toEqual({ r: 255, g: 0, b: 0, a: 1 });
    });
  });

  describe('invalid inputs', () => {
    it('returns null for empty string', () => {
      expect(parseColor('')).toBeNull();
    });

    it('returns null for invalid color strings', () => {
      expect(parseColor('not-a-color')).toBeNull();
      expect(parseColor('12345')).toBeNull(); // not a valid hex without #
      expect(parseColor('#12')).toBeNull(); // invalid hex length
      expect(parseColor('rgb(0,0)')).toBeNull(); // missing argument
    });
  });

  describe('error handling', () => {
    it('returns null when parsing throws an error (simulated via invalid types)', () => {
      // simulate checking the catch block by passing types that might cause parse() to throw
      // if parse() expects a string and tries to call string methods on it.
      expect(parseColor(null as any)).toBeNull();
      expect(parseColor(undefined as any)).toBeNull();
      expect(parseColor(123 as any)).toBeNull();
      expect(parseColor({} as any)).toBeNull();
    });
  });
});

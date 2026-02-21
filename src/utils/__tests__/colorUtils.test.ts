import { describe, it, expect } from 'vitest';
import { rgbToHex } from '../colorUtils';

describe('rgbToHex', () => {
  it('converts basic colors correctly', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
    expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
    expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
    expect(rgbToHex(0, 0, 255)).toBe('#0000ff');
  });

  it('handles alpha channel correctly', () => {
    // Alpha 1 should be omitted
    expect(rgbToHex(0, 0, 0, 1)).toBe('#000000');

    // Alpha 0 should be 00
    expect(rgbToHex(255, 255, 255, 0)).toBe('#ffffff00');

    // Alpha 0.5 (approx 128/255 -> 80)
    expect(rgbToHex(0, 0, 0, 0.5)).toBe('#00000080');
  });

  it('handles values out of standard 0-255 range by clamping', () => {
    // 300 -> clamped to 255 -> #ff0000
    expect(rgbToHex(300, 0, 0)).toBe('#ff0000');
    // -50 -> clamped to 0 -> #000000
    expect(rgbToHex(-50, 0, 0)).toBe('#000000');
  });
});

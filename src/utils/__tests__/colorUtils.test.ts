import { describe, it, expect } from 'vitest';
import { checkContrast } from '../colorUtils';

describe('checkContrast', () => {
  it('identifies high contrast (AAA) correctly', () => {
    // Black on White: Ratio 21
    const result = checkContrast('#000000', '#FFFFFF');
    expect(result.ratio).toBe(21);
    expect(result.level).toBe('AAA');
    expect(result.aaa.normal).toBe(true);
    expect(result.aaa.large).toBe(true);
    expect(result.aa.normal).toBe(true);
    expect(result.aa.large).toBe(true);
  });

  it('identifies medium contrast (AA Normal / AAA Large) correctly', () => {
    // #767676 on White: Ratio ~4.54
    const result = checkContrast('#767676', '#FFFFFF');
    expect(result.ratio).toBeGreaterThanOrEqual(4.5);
    expect(result.level).toBe('AAA'); // Because AAA Large passes
    expect(result.aaa.normal).toBe(false);
    expect(result.aaa.large).toBe(true);
    expect(result.aa.normal).toBe(true);
    expect(result.aa.large).toBe(true);
  });

  it('identifies low contrast (AA Large only) correctly', () => {
    // #949494 on White: Ratio ~3.08
    const result = checkContrast('#949494', '#FFFFFF');
    expect(result.ratio).toBeGreaterThanOrEqual(3);
    expect(result.ratio).toBeLessThan(4.5);
    expect(result.level).toBe('AA');
    expect(result.aaa.normal).toBe(false);
    expect(result.aaa.large).toBe(false);
    expect(result.aa.normal).toBe(false);
    expect(result.aa.large).toBe(true);
  });

  it('identifies failure contrast correctly', () => {
    // #CCCCCC on White: Ratio ~1.6
    const result = checkContrast('#CCCCCC', '#FFFFFF');
    expect(result.ratio).toBeLessThan(3);
    expect(result.level).toBe('FAIL');
    expect(result.aaa.normal).toBe(false);
    expect(result.aaa.large).toBe(false);
    expect(result.aa.normal).toBe(false);
    expect(result.aa.large).toBe(false);
  });

  it('handles invalid colors gracefully', () => {
    const result = checkContrast('invalid', '#FFFFFF');
    // implementation of checkContrast calls getContrastRatio which returns 0 if invalid
    expect(result.ratio).toBe(0);
    expect(result.level).toBe('FAIL');
  });
});

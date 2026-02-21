import * as culori from 'culori';

const { formatHex, parse, hsl, rgb } = culori;

/**
 * Color utility functions for Theme Studio
 */

export interface ColorRGB {
  r: number;
  g: number;
  b: number;
  a?: number;
}

export interface ColorHSL {
  h: number;
  s: number;
  l: number;
  a?: number;
}

export interface ContrastResult {
  ratio: number;
  aa: {
    normal: boolean;
    large: boolean;
  };
  aaa: {
    normal: boolean;
    large: boolean;
  };
  level: 'AAA' | 'AA' | 'FAIL';
}

/**
 * Parse a color string to RGB
 */
export function parseColor(color: string): ColorRGB | null {
  try {
    const parsed = parse(color);
    if (!parsed) return null;
    
    const rgbColor = rgb(parsed);
    if (!rgbColor) return null;
    
    return {
      r: Math.round(rgbColor.r * 255),
      g: Math.round(rgbColor.g * 255),
      b: Math.round(rgbColor.b * 255),
      a: rgbColor.alpha !== undefined ? rgbColor.alpha : 1,
    };
  } catch {
    return null;
  }
}

/**
 * Convert RGB to hex
 */
export function rgbToHex(r: number, g: number, b: number, a?: number): string {
  const toHex = (n: number) => {
    const hex = Math.round(n).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const rHex = toHex(Math.max(0, Math.min(255, r)));
  const gHex = toHex(Math.max(0, Math.min(255, g)));
  const bHex = toHex(Math.max(0, Math.min(255, b)));

  if (a !== undefined && a < 1) {
    const alpha = Math.max(0, Math.min(1, a));
    const aHex = toHex(alpha * 255);
    return `#${rHex}${gHex}${bHex}${aHex}`;
  }

  return `#${rHex}${gHex}${bHex}`;
}

/**
 * Convert hex to RGB
 */
export function hexToRgb(hex: string): ColorRGB | null {
  return parseColor(hex);
}

/**
 * Convert RGB to HSL
 */
export function rgbToHsl(r: number, g: number, b: number, a?: number): ColorHSL {
  const hslColor = hsl({ mode: 'rgb', r: r / 255, g: g / 255, b: b / 255, alpha: a });
  if (!hslColor) {
    return { h: 0, s: 0, l: 0, a };
  }
  return {
    h: hslColor.h || 0,
    s: (hslColor.s || 0) * 100,
    l: (hslColor.l || 0) * 100,
    a: hslColor.alpha,
  };
}

/**
 * Convert HSL to RGB
 */
export function hslToRgb(h: number, s: number, l: number, a?: number): ColorRGB {
  const rgbColor = rgb({ mode: 'hsl', h, s: s / 100, l: l / 100, alpha: a });
  if (!rgbColor) {
    return { r: 0, g: 0, b: 0, a };
  }
  return {
    r: Math.round((rgbColor.r || 0) * 255),
    g: Math.round((rgbColor.g || 0) * 255),
    b: Math.round((rgbColor.b || 0) * 255),
    a: rgbColor.alpha,
  };
}

/**
 * Calculate relative luminance (WCAG)
 */
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((val) => {
    const v = val / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(color1: string, color2: string): number {
  const c1 = parseColor(color1);
  const c2 = parseColor(color2);
  
  if (!c1 || !c2) return 0;
  
  const l1 = getLuminance(c1.r, c1.g, c1.b);
  const l2 = getLuminance(c2.r, c2.g, c2.b);
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check WCAG contrast compliance
 */
export function checkContrast(
  foreground: string,
  background: string
): ContrastResult {
  const ratio = getContrastRatio(foreground, background);
  
  const aaNormal = ratio >= 4.5;
  const aaLarge = ratio >= 3;
  const aaaNormal = ratio >= 7;
  const aaaLarge = ratio >= 4.5;
  
  let level: 'AAA' | 'AA' | 'FAIL' = 'FAIL';
  if (aaaNormal || aaaLarge) {
    level = 'AAA';
  } else if (aaNormal || aaLarge) {
    level = 'AA';
  }
  
  return {
    ratio: Math.round(ratio * 100) / 100,
    aa: {
      normal: aaNormal,
      large: aaLarge,
    },
    aaa: {
      normal: aaaNormal,
      large: aaaLarge,
    },
    level,
  };
}

/**
 * Generate color scale from base color
 */
export function generateColorScale(baseColor: string, steps: number = 10): string[] {
  const parsed = parseColor(baseColor);
  if (!parsed) return [];
  
  const hslColor = rgbToHsl(parsed.r, parsed.g, parsed.b, parsed.a);
  const scale: string[] = [];
  
  for (let i = 0; i < steps; i++) {
    const lightness = (i / (steps - 1)) * 100;
    const rgbColor = hslToRgb(hslColor.h, hslColor.s, lightness, hslColor.a);
    scale.push(rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b, rgbColor.a));
  }
  
  return scale;
}

/**
 * Generate tints and shades
 */
export function generateTintsAndShades(baseColor: string): {
  tints: string[];
  shades: string[];
} {
  const parsed = parseColor(baseColor);
  if (!parsed) return { tints: [], shades: [] };
  
  const hslColor = rgbToHsl(parsed.r, parsed.g, parsed.b, parsed.a);
  const tints: string[] = [];
  const shades: string[] = [];
  
  // Generate tints (lighter)
  for (let i = 1; i <= 5; i++) {
    const lightness = Math.min(100, hslColor.l + i * 10);
    const rgbColor = hslToRgb(hslColor.h, hslColor.s, lightness, hslColor.a);
    tints.push(rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b, rgbColor.a));
  }
  
  // Generate shades (darker)
  for (let i = 1; i <= 5; i++) {
    const lightness = Math.max(0, hslColor.l - i * 10);
    const rgbColor = hslToRgb(hslColor.h, hslColor.s, lightness, hslColor.a);
    shades.push(rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b, rgbColor.a));
  }
  
  return { tints, shades };
}

/**
 * Get complementary color
 */
export function getComplementary(color: string): string {
  const parsed = parseColor(color);
  if (!parsed) return color;
  
  const hslColor = rgbToHsl(parsed.r, parsed.g, parsed.b, parsed.a);
  const complementaryH = (hslColor.h + 180) % 360;
  const rgbColor = hslToRgb(complementaryH, hslColor.s, hslColor.l, hslColor.a);
  
  return rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b, rgbColor.a);
}

/**
 * Get analogous colors (colors next to each other on color wheel)
 */
export function getAnalogous(color: string, count: number = 3): string[] {
  const parsed = parseColor(color);
  if (!parsed) return [color];
  
  const hslColor = rgbToHsl(parsed.r, parsed.g, parsed.b, parsed.a);
  const colors: string[] = [];
  const step = 30; // 30 degrees apart
  
  for (let i = -Math.floor(count / 2); i <= Math.floor(count / 2); i++) {
    const h = (hslColor.h + i * step + 360) % 360;
    const rgbColor = hslToRgb(h, hslColor.s, hslColor.l, hslColor.a);
    colors.push(rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b, rgbColor.a));
  }
  
  return colors;
}

/**
 * Get triadic colors (three colors evenly spaced)
 */
export function getTriadic(color: string): string[] {
  const parsed = parseColor(color);
  if (!parsed) return [color, color, color];
  
  const hslColor = rgbToHsl(parsed.r, parsed.g, parsed.b, parsed.a);
  const colors: string[] = [];
  
  for (let i = 0; i < 3; i++) {
    const h = (hslColor.h + i * 120) % 360;
    const rgbColor = hslToRgb(h, hslColor.s, hslColor.l, hslColor.a);
    colors.push(rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b, rgbColor.a));
  }
  
  return colors;
}

/**
 * Get tetradic colors (four colors evenly spaced)
 */
export function getTetradic(color: string): string[] {
  const parsed = parseColor(color);
  if (!parsed) return [color, color, color, color];
  
  const hslColor = rgbToHsl(parsed.r, parsed.g, parsed.b, parsed.a);
  const colors: string[] = [];
  
  for (let i = 0; i < 4; i++) {
    const h = (hslColor.h + i * 90) % 360;
    const rgbColor = hslToRgb(h, hslColor.s, hslColor.l, hslColor.a);
    colors.push(rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b, rgbColor.a));
  }
  
  return colors;
}

/**
 * Lighten a color
 */
export function lighten(color: string, amount: number): string {
  const parsed = parseColor(color);
  if (!parsed) return color;
  
  const hslColor = rgbToHsl(parsed.r, parsed.g, parsed.b, parsed.a);
  const newLightness = Math.min(100, hslColor.l + amount);
  const rgbColor = hslToRgb(hslColor.h, hslColor.s, newLightness, hslColor.a);
  
  return rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b, rgbColor.a);
}

/**
 * Darken a color
 */
export function darken(color: string, amount: number): string {
  const parsed = parseColor(color);
  if (!parsed) return color;
  
  const hslColor = rgbToHsl(parsed.r, parsed.g, parsed.b, parsed.a);
  const newLightness = Math.max(0, hslColor.l - amount);
  const rgbColor = hslToRgb(hslColor.h, hslColor.s, newLightness, hslColor.a);
  
  return rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b, rgbColor.a);
}

/**
 * Adjust saturation
 */
export function saturate(color: string, amount: number): string {
  const parsed = parseColor(color);
  if (!parsed) return color;
  
  const hslColor = rgbToHsl(parsed.r, parsed.g, parsed.b, parsed.a);
  const newSaturation = Math.max(0, Math.min(100, hslColor.s + amount));
  const rgbColor = hslToRgb(hslColor.h, newSaturation, hslColor.l, hslColor.a);
  
  return rgbToHex(rgbColor.r, rgbColor.g, rgbColor.b, rgbColor.a);
}

/**
 * Adjust opacity
 */
export function adjustOpacity(color: string, opacity: number): string {
  const parsed = parseColor(color);
  if (!parsed) return color;
  
  const newAlpha = Math.max(0, Math.min(1, opacity));
  return rgbToHex(parsed.r, parsed.g, parsed.b, newAlpha);
}


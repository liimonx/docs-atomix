/**
 * Theme Token Utilities
 * Functions for applying themes, exporting formats, and validating imports
 */

export interface ThemeTokens {
  light: Record<string, string>;
  dark: Record<string, string>;
}

/**
 * Validation result interface
 */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Detect token type from value
 */
export function detectTokenType(value: string): string {
  const val = value.trim().toLowerCase();

  // Colors
  if (
    val.startsWith("#") ||
    val.startsWith("rgb(") ||
    val.startsWith("rgba(") ||
    (/^[a-z]+$/.test(val) &&
      [
        "red",
        "blue",
        "green",
        "yellow",
        "white",
        "black",
        "transparent",
      ].includes(val))
  ) {
    return "color";
  }

  // Numbers with units
  if (/^-?\d+(\.\d+)?(rem|px|em|%|s|ms)$/.test(val)) {
    return "number";
  }

  // Gradients
  if (val.includes("gradient")) {
    return "gradient";
  }

  // Shadows
  if (val.includes("shadow") || val.includes("box-shadow")) {
    return "shadow";
  }

  return "text";
}

/**
 * Validate token value
 */
export function validateTokenValue(
  tokenName: string,
  value: string,
  tokenType?: string
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const trimmedValue = value.trim();

  // Empty value check
  if (!trimmedValue) {
    errors.push("Token value cannot be empty");
    return { valid: false, errors, warnings };
  }

  const detectedType = tokenType || detectTokenType(trimmedValue);

  // Type-specific validation
  if (detectedType === "color") {
    // Validate hex colors
    if (trimmedValue.startsWith("#")) {
      const hexPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
      if (!hexPattern.test(trimmedValue)) {
        errors.push("Invalid hex color format. Use #RGB, #RRGGBB, or #RRGGBBAA");
      }
    }
    // Validate RGB/RGBA
    else if (trimmedValue.startsWith("rgb")) {
      const rgbPattern = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/;
      if (!rgbPattern.test(trimmedValue)) {
        errors.push("Invalid RGB/RGBA format. Use rgb(r, g, b) or rgba(r, g, b, a)");
      }
    }
    // Validate named colors
    else if (!/^[a-z]+$/.test(trimmedValue.toLowerCase())) {
      const validNamedColors = [
        "red", "blue", "green", "yellow", "white", "black", "transparent",
        "currentcolor", "inherit", "initial", "unset"
      ];
      if (!validNamedColors.includes(trimmedValue.toLowerCase())) {
        warnings.push("Unknown named color. Consider using hex or RGB format");
      }
    }
  } else if (detectedType === "number") {
    const numberPattern = /^-?\d+(\.\d+)?(rem|px|em|%|s|ms|vh|vw|ch|ex|vmin|vmax)$/;
    if (!numberPattern.test(trimmedValue)) {
      errors.push("Invalid number format. Use a number followed by a unit (rem, px, em, %, s, ms, etc.)");
    } else {
      // Check for negative values where they might not make sense
      if (trimmedValue.startsWith("-") && (tokenName.includes("size") || tokenName.includes("spacing"))) {
        warnings.push("Negative values may not be appropriate for size/spacing tokens");
      }
    }
  } else if (detectedType === "shadow") {
    // Basic shadow validation - should contain numbers and color
    if (!trimmedValue.includes("px") && !trimmedValue.includes("rem")) {
      warnings.push("Shadow values typically include offset values in px or rem");
    }
  } else if (detectedType === "gradient") {
    if (!trimmedValue.includes("linear-gradient") && !trimmedValue.includes("radial-gradient") && !trimmedValue.includes("conic-gradient")) {
      warnings.push("Gradient should use linear-gradient, radial-gradient, or conic-gradient");
    }
  }

  // Accessibility checks for color tokens
  if (detectedType === "color" && tokenName.includes("text")) {
    // This is a text color - check if it's likely to have contrast issues
    if (trimmedValue.toLowerCase() === "white" || trimmedValue === "#ffffff" || trimmedValue === "#fff") {
      warnings.push("White text may have contrast issues on light backgrounds");
    }
    if (trimmedValue.toLowerCase() === "black" || trimmedValue === "#000000" || trimmedValue === "#000") {
      warnings.push("Black text may have contrast issues on dark backgrounds");
    }
  }

  // Check for common mistakes
  if (trimmedValue.includes("  ")) {
    warnings.push("Multiple consecutive spaces detected. Consider using a single space");
  }

  if (trimmedValue.endsWith(" ") || trimmedValue.startsWith(" ")) {
    warnings.push("Value has leading or trailing spaces");
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Calculate contrast ratio between two colors
 */
export function calculateContrastRatio(color1: string, color2: string): number {
  // Simplified contrast calculation - would need a proper color library for accurate results
  // This is a placeholder that returns a basic ratio
  try {
    const getLuminance = (color: string): number => {
      // Convert color to RGB
      let r = 0, g = 0, b = 0;
      
      if (color.startsWith("#")) {
        const hex = color.slice(1);
        r = parseInt(hex.slice(0, 2), 16) / 255;
        g = parseInt(hex.slice(2, 4), 16) / 255;
        b = parseInt(hex.slice(4, 6), 16) / 255;
      } else if (color.startsWith("rgb")) {
        const matches = color.match(/\d+/g);
        if (matches && matches.length >= 3) {
          r = parseInt(matches[0]) / 255;
          g = parseInt(matches[1]) / 255;
          b = parseInt(matches[2]) / 255;
        }
      }
      
      // Calculate relative luminance
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        return c;
      });
      
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };
    
    const l1 = getLuminance(color1);
    const l2 = getLuminance(color2);
    
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    
    return (lighter + 0.05) / (darker + 0.05);
  } catch {
    return 1; // Default to minimum contrast if calculation fails
  }
}

/**
 * Check if contrast ratio meets WCAG standards
 */
export function checkContrastCompliance(
  foreground: string,
  background: string
): { aa: boolean; aaa: boolean; ratio: number } {
  const ratio = calculateContrastRatio(foreground, background);
  
  return {
    ratio,
    aa: ratio >= 4.5, // WCAG AA standard for normal text
    aaa: ratio >= 7, // WCAG AAA standard for normal text
  };
}

/**
 * Format token value for display
 */
export function formatTokenValue(value: string): string {
  return value.trim();
}

/**
 * Parse input to valid CSS value
 */
export function parseTokenValue(value: string, type: string): string {
  const trimmed = value.trim();

  // For colors, ensure valid format
  if (type === "color") {
    // If it's a hex without #, add it
    if (/^[0-9a-fA-F]{6}$/.test(trimmed)) {
      return `#${trimmed}`;
    }
    // If it's a 3-digit hex, expand it
    if (/^[0-9a-fA-F]{3}$/.test(trimmed)) {
      return `#${trimmed
        .split("")
        .map((c) => c + c)
        .join("")}`;
    }
  }

  return trimmed;
}

/**
 * Apply theme tokens to document.documentElement
 * This is used by ThemeStudio for live preview
 */
export function applyThemeToDocument(
  tokens: Record<string, string>,
  mode: "light" | "dark"
): void {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  // Set color mode attribute
  root.setAttribute("data-atomix-color-mode", mode);

  // Apply all tokens as CSS variables
  Object.entries(tokens).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });
}

/**
 * Export theme as JSON
 */
export function exportAsJSON(
  lightTokens: Record<string, string>,
  darkTokens: Record<string, string>
): string {
  return JSON.stringify(
    {
      light: lightTokens,
      dark: darkTokens,
      version: "1.0.0",
      generated: new Date().toISOString(),
    },
    null,
    2
  );
}

/**
 * Export theme as CSS variables
 * Supports both data-atomix-color-mode (for mode switching) and data-theme (for ThemeManager)
 */
export function exportAsCSS(
  lightTokens: Record<string, string>,
  darkTokens: Record<string, string>
): string {
  let css = ":root,\n[data-atomix-color-mode=light] {\n";

  Object.entries(lightTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      css += `  ${name}: ${value};\n`;
    });

  css += "}\n\n[data-atomix-color-mode=dark] {\n";

  Object.entries(darkTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      css += `  ${name}: ${value};\n`;
    });

  css += "}\n";

  return css;
}

/**
 * Export theme as SCSS map
 */
export function exportAsSCSS(
  lightTokens: Record<string, string>,
  darkTokens: Record<string, string>
): string {
  let scss = "$theme-tokens: (\n";
  scss += "  'light': (\n";

  Object.entries(lightTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      // Remove --atomix- prefix for SCSS map keys
      const key = name.replace(/^--atomix-/, "");
      // Escape quotes in value if needed
      const escapedValue = value.replace(/'/g, "\\'");
      scss += `    '${key}': ${escapedValue},\n`;
    });

  scss += "  ),\n";
  scss += "  'dark': (\n";

  Object.entries(darkTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      const key = name.replace(/^--atomix-/, "");
      const escapedValue = value.replace(/'/g, "\\'");
      scss += `    '${key}': ${escapedValue},\n`;
    });

  scss += "  ),\n";
  scss += ");\n";

  return scss;
}

/**
 * Validate imported theme structure
 */
export function validateImportedTheme(data: any): {
  valid: boolean;
  error?: string;
} {
  if (!data || typeof data !== "object") {
    return { valid: false, error: "Theme data must be an object" };
  }

  if (!data.light || typeof data.light !== "object") {
    return {
      valid: false,
      error: 'Theme must have a "light" property with token values',
    };
  }

  if (!data.dark || typeof data.dark !== "object") {
    return {
      valid: false,
      error: 'Theme must have a "dark" property with token values',
    };
  }

  // Check that all values are strings
  const lightValues = Object.values(data.light);
  const darkValues = Object.values(data.dark);

  if (lightValues.some((v) => typeof v !== "string")) {
    return {
      valid: false,
      error: "All light theme token values must be strings",
    };
  }

  if (darkValues.some((v) => typeof v !== "string")) {
    return {
      valid: false,
      error: "All dark theme token values must be strings",
    };
  }

  return { valid: true };
}

/**
 * Export theme as TypeScript definitions
 */
export function exportAsTypeScript(lightTokens: Record<string, string>, darkTokens: Record<string, string>): string {
  let ts = '/**\n';
  ts += ' * Atomix Design System Theme Tokens\n';
  ts += ' * Generated: ' + new Date().toISOString() + '\n';
  ts += ' */\n\n';
  ts += 'export interface AtomixTokens {\n';
  ts += '  light: {\n';
  
  Object.entries(lightTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      const key = name.replace(/^--atomix-/, '').replace(/-/g, '_');
      ts += `    ${key}: '${value.replace(/'/g, "\\'")}';\n`;
    });
  
  ts += '  };\n';
  ts += '  dark: {\n';
  
  Object.entries(darkTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      const key = name.replace(/^--atomix-/, '').replace(/-/g, '_');
      ts += `    ${key}: '${value.replace(/'/g, "\\'")}';\n`;
    });
  
  ts += '  };\n';
  ts += '}\n\n';
  ts += 'export const atomixTokens: AtomixTokens = {\n';
  ts += '  light: {\n';
  
  Object.entries(lightTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      const key = name.replace(/^--atomix-/, '').replace(/-/g, '_');
      ts += `    ${key}: '${value.replace(/'/g, "\\'")}',\n`;
    });
  
  ts += '  },\n';
  ts += '  dark: {\n';
  
  Object.entries(darkTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      const key = name.replace(/^--atomix-/, '').replace(/-/g, '_');
      ts += `    ${key}: '${value.replace(/'/g, "\\'")}',\n`;
    });
  
  ts += '  },\n';
  ts += '};\n';
  
  return ts;
}

/**
 * Export theme as Figma Variables JSON
 */
export function exportAsFigma(lightTokens: Record<string, string>, darkTokens: Record<string, string>): string {
  const variables: any[] = [];
  const modes = [
    { name: 'Light', id: 'light', tokens: lightTokens },
    { name: 'Dark', id: 'dark', tokens: darkTokens },
  ];
  
  // Collect all unique token names
  const allTokenNames = new Set([
    ...Object.keys(lightTokens),
    ...Object.keys(darkTokens),
  ]);
  
  allTokenNames.forEach((tokenName) => {
    const lightValue = lightTokens[tokenName] || '';
    const darkValue = darkTokens[tokenName] || '';
    
    // Determine variable type
    let variableType = 'STRING';
    const tokenType = detectTokenType(lightValue || darkValue);
    
    if (tokenType === 'color') {
      variableType = 'COLOR';
    } else if (tokenType === 'number') {
      variableType = 'FLOAT';
    }
    
    // Create variable
    const variable: any = {
      name: tokenName.replace(/^--atomix-/, ''),
      id: tokenName.replace(/[^a-zA-Z0-9]/g, '_'),
      variableCollectionId: 'atomix_tokens',
      resolvedType: variableType,
      valuesByMode: {},
    };
    
    // Add values for each mode
    modes.forEach((mode) => {
      const value = mode.tokens[tokenName] || '';
      if (variableType === 'COLOR') {
        // Convert hex to RGB for Figma
        const rgb = hexToRgbForFigma(value);
        if (rgb) {
          variable.valuesByMode[mode.id] = rgb;
        }
      } else if (variableType === 'FLOAT') {
        // Extract number from value
        const match = value.match(/^(-?\d+(?:\.\d+)?)/);
        if (match) {
          variable.valuesByMode[mode.id] = parseFloat(match[1]);
        }
      } else {
        variable.valuesByMode[mode.id] = value;
      }
    });
    
    variables.push(variable);
  });
  
  const figmaExport = {
    version: '1.0.0',
    collections: [
      {
        id: 'atomix_tokens',
        name: 'Atomix Design Tokens',
        modes: modes.map((m) => ({ id: m.id, name: m.name })),
        variables: variables,
      },
    ],
    generated: new Date().toISOString(),
  };
  
  return JSON.stringify(figmaExport, null, 2);
}

/**
 * Convert hex color to Figma RGB format
 */
function hexToRgbForFigma(hex: string): { r: number; g: number; b: number } | null {
  if (!hex || !hex.startsWith('#')) return null;
  
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;
  
  return {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255,
  };
}

/**
 * Export theme as Tailwind CSS config
 */
export function exportAsTailwindConfig(
  lightTokens: Record<string, string>
): string {
  let config = `/** @type {import('tailwindcss').Config} */\n`;
  config += `module.exports = {\n`;
  config += `  theme: {\n`;
  config += `    extend: {\n`;
  config += `      colors: {\n`;
  
  // Extract color tokens
  const colorTokens: Record<string, string> = {};
  Object.entries(lightTokens).forEach(([name, value]) => {
    if (name.includes('color') || name.includes('bg') || name.includes('border') || name.includes('text')) {
      const key = name.replace(/^--atomix-/, '').replace(/-/g, '_');
      colorTokens[key] = value;
    }
  });
  
  Object.entries(colorTokens).forEach(([key, value]) => {
    config += `        '${key}': '${value}',\n`;
  });
  
  config += `      },\n`;
  config += `      spacing: {\n`;
  
  // Extract spacing tokens
  Object.entries(lightTokens).forEach(([name, value]) => {
    if (name.includes('space') || name.includes('padding') || name.includes('margin')) {
      const key = name.replace(/^--atomix-/, '').replace(/-/g, '_');
      config += `        '${key}': '${value}',\n`;
    }
  });
  
  config += `      },\n`;
  config += `      fontSize: {\n`;
  
  // Extract font size tokens
  Object.entries(lightTokens).forEach(([name, value]) => {
    if (name.includes('font-size')) {
      const key = name.replace(/^--atomix-/, '').replace(/-/g, '_');
      config += `        '${key}': '${value}',\n`;
    }
  });
  
  config += `      },\n`;
  config += `      borderRadius: {\n`;
  
  // Extract border radius tokens
  Object.entries(lightTokens).forEach(([name, value]) => {
    if (name.includes('radius') || name.includes('rounded')) {
      const key = name.replace(/^--atomix-/, '').replace(/-/g, '_');
      config += `        '${key}': '${value}',\n`;
    }
  });
  
  config += `      },\n`;
  config += `    },\n`;
  config += `  },\n`;
  config += `  plugins: [],\n`;
  config += `}\n`;
  
  return config;
}

/**
 * Export theme as Style Dictionary format
 */
export function exportAsStyleDictionary(
  lightTokens: Record<string, string>
): string {
  const styleDictionary: any = {
    color: {},
    size: {},
    font: {},
  };
  
  // Process light tokens
  Object.entries(lightTokens).forEach(([name, value]) => {
    const cleanName = name.replace(/^--atomix-/, '');
    const parts = cleanName.split('-');
    
    if (name.includes('color') || name.includes('bg') || name.includes('border') || name.includes('text')) {
      let current = styleDictionary.color;
      parts.forEach((part, index) => {
        if (index === parts.length - 1) {
          current[part] = { value, type: 'color' };
        } else {
          current[part] = current[part] || {};
          current = current[part];
        }
      });
    } else if (name.includes('space') || name.includes('padding') || name.includes('margin') || name.includes('radius')) {
      let current = styleDictionary.size;
      parts.forEach((part, index) => {
        if (index === parts.length - 1) {
          current[part] = { value, type: 'dimension' };
        } else {
          current[part] = current[part] || {};
          current = current[part];
        }
      });
    } else if (name.includes('font')) {
      let current = styleDictionary.font;
      parts.forEach((part, index) => {
        if (index === parts.length - 1) {
          current[part] = { value, type: name.includes('size') ? 'dimension' : 'string' };
        } else {
          current[part] = current[part] || {};
          current = current[part];
        }
      });
    }
  });
  
  return JSON.stringify(styleDictionary, null, 2);
}

/**
 * Export theme as W3C Design Tokens format
 */
export function exportAsDesignTokens(
  lightTokens: Record<string, string>,
  darkTokens: Record<string, string>
): string {
  const tokens: any = {};
  
  // Process light tokens
  Object.entries(lightTokens).forEach(([name, value]) => {
    const cleanName = name.replace(/^--atomix-/, '');
    const tokenType = detectTokenType(value);
    
    tokens[cleanName] = {
      $value: value,
      $type: tokenType === 'color' ? 'color' : 
             tokenType === 'number' ? 'dimension' : 
             tokenType === 'shadow' ? 'shadow' : 
             'string',
      $description: `Token for ${cleanName}`,
    };
  });
  
  const w3cFormat: any = {
    $schema: 'https://design-tokens.github.io/community-group/format/schema.json',
    $version: '1.0.0',
    $description: 'Atomix Design System Tokens',
    tokens,
    modes: {
      light: {} as Record<string, any>,
      dark: {} as Record<string, any>,
    },
  };
  
  // Add mode-specific values
  Object.entries(lightTokens).forEach(([name, value]) => {
    const cleanName = name.replace(/^--atomix-/, '');
    w3cFormat.modes.light[cleanName] = { $value: value } as Record<string, any>;
  });
  
  Object.entries(darkTokens).forEach(([name, value]) => {
    const cleanName = name.replace(/^--atomix-/, '');
    w3cFormat.modes.dark[cleanName] = { $value: value };
  });
  
  return JSON.stringify(w3cFormat, null, 2);
}

/**
 * Download file with given content and filename
 */
export function downloadFile(
  content: string,
  filename: string,
  mimeType: string = "text/plain"
): void {
  if (typeof window === "undefined") {
    return;
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Theme Token Utilities
 * Functions for applying themes, exporting formats, and validating imports
 */

export interface ThemeTokens {
  light: Record<string, string>;
  dark: Record<string, string>;
}

/**
 * Detect token type from value
 */
export function detectTokenType(value: string): string {
  const val = value.trim().toLowerCase();

  // Colors
  if (
    val.startsWith('#') ||
    val.startsWith('rgb(') ||
    val.startsWith('rgba(') ||
    /^[a-z]+$/.test(val) && ['red', 'blue', 'green', 'yellow', 'white', 'black', 'transparent'].includes(val)
  ) {
    return 'color';
  }

  // Numbers with units
  if (/^-?\d+(\.\d+)?(rem|px|em|%|s|ms)$/.test(val)) {
    return 'number';
  }

  // Gradients
  if (val.includes('gradient')) {
    return 'gradient';
  }

  // Shadows
  if (val.includes('shadow') || val.includes('box-shadow')) {
    return 'shadow';
  }

  return 'text';
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
  if (type === 'color') {
    // If it's a hex without #, add it
    if (/^[0-9a-fA-F]{6}$/.test(trimmed)) {
      return `#${trimmed}`;
    }
    // If it's a 3-digit hex, expand it
    if (/^[0-9a-fA-F]{3}$/.test(trimmed)) {
      return `#${trimmed.split('').map(c => c + c).join('')}`;
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
  mode: 'light' | 'dark'
): void {
  if (typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;

  // Set color mode attribute for Atomix components
  root.setAttribute('data-atomix-color-mode', mode);
  
  // Optionally set data-theme attribute for ThemeManager compatibility
  // This allows the exported theme to work with ThemeManager
  if (!root.hasAttribute('data-theme')) {
    root.setAttribute('data-theme', 'theme-studio-preview');
  }

  // Apply all tokens as CSS variables
  Object.entries(tokens).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });
}

/**
 * Export theme as JSON
 */
export function exportAsJSON(lightTokens: Record<string, string>, darkTokens: Record<string, string>): string {
  return JSON.stringify(
    {
      light: lightTokens,
      dark: darkTokens,
      version: '1.0.0',
      generated: new Date().toISOString()
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
  darkTokens: Record<string, string>,
  themeName?: string
): string {
  // Use theme name if provided, otherwise use color-mode attribute
  const lightSelector = themeName 
    ? `:root[data-theme="${themeName}"],\n[data-theme="${themeName}"][data-atomix-color-mode=light]`
    : ':root,\n[data-atomix-color-mode=light]';
  
  const darkSelector = themeName
    ? `[data-theme="${themeName}"][data-atomix-color-mode=dark]`
    : '[data-atomix-color-mode=dark]';
  
  let css = `${lightSelector} {\n`;
  
  Object.entries(lightTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      css += `  ${name}: ${value};\n`;
    });
  
  css += '}\n\n';
  
  if (darkTokens && Object.keys(darkTokens).length > 0) {
    css += `${darkSelector} {\n`;
    
    Object.entries(darkTokens)
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([name, value]) => {
        css += `  ${name}: ${value};\n`;
      });
    
    css += '}\n';
  }
  
  return css;
}

/**
 * Export theme as SCSS map
 */
export function exportAsSCSS(lightTokens: Record<string, string>, darkTokens: Record<string, string>): string {
  let scss = '$theme-tokens: (\n';
  scss += "  'light': (\n";
  
  Object.entries(lightTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      // Remove --atomix- prefix for SCSS map keys
      const key = name.replace(/^--atomix-/, '');
      // Escape quotes in value if needed
      const escapedValue = value.replace(/'/g, "\\'");
      scss += `    '${key}': ${escapedValue},\n`;
    });
  
  scss += '  ),\n';
  scss += "  'dark': (\n";
  
  Object.entries(darkTokens)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([name, value]) => {
      const key = name.replace(/^--atomix-/, '');
      const escapedValue = value.replace(/'/g, "\\'");
      scss += `    '${key}': ${escapedValue},\n`;
    });
  
  scss += '  ),\n';
  scss += ');\n';
  
  return scss;
}

/**
 * Validate imported theme structure
 */
export function validateImportedTheme(data: any): { valid: boolean; error?: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Theme data must be an object' };
  }

  if (!data.light || typeof data.light !== 'object') {
    return { valid: false, error: 'Theme must have a "light" property with token values' };
  }

  if (!data.dark || typeof data.dark !== 'object') {
    return { valid: false, error: 'Theme must have a "dark" property with token values' };
  }

  // Check that all values are strings
  const lightValues = Object.values(data.light);
  const darkValues = Object.values(data.dark);

  if (lightValues.some(v => typeof v !== 'string')) {
    return { valid: false, error: 'All light theme token values must be strings' };
  }

  if (darkValues.some(v => typeof v !== 'string')) {
    return { valid: false, error: 'All dark theme token values must be strings' };
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
 * Download file with given content and filename
 */
export function downloadFile(content: string, filename: string, mimeType: string = 'text/plain'): void {
  if (typeof window === 'undefined') {
    return;
  }

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}


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

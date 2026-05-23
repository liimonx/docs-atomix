export interface Token {
  name: string; // --atomix-primary
  displayName: string; // Primary
  value: string; // #8b5cf6
  type: 'color' | 'number' | 'font-size' | 'spacing' | 'text' | 'gradient' | 'shadow' | 'font-family' | 'font-weight' | 'line-height' | 'letter-spacing' | 'transition' | 'z-index' | 'breakpoint' | 'border-radius';
  category: string;
  mode: 'light' | 'dark' | 'both';
}

export interface Category {
  id: string;
  title: string;
  description: string;
}

export interface ParsedTokens {
  light: Token[];
  dark: Token[];
  categories: Category[];
}

/**
 * Detect token type from variable name and value
 */
function detectTokenType(varName: string, value: string): Token['type'] {
  const name = varName.toLowerCase();
  const val = value.trim().toLowerCase();

  // Gradients
  if (name.includes('gradient')) {
    return 'gradient';
  }

  // Shadows
  if (name.includes('shadow') || name.includes('box-shadow')) {
    return 'shadow';
  }

  // Font families
  if (name.includes('font-family') || name.includes('font-sans-serif') || name.includes('font-monospace') || name.includes('font-display') || name.includes('body-font-family')) {
    return 'font-family';
  }

  // Font sizes
  if (name.includes('font-size') || name.includes('display-')) {
    return 'font-size';
  }

  // Font weights
  if (name.includes('font-weight')) {
    return 'font-weight';
  }

  // Line heights
  if (name.includes('line-height')) {
    return 'line-height';
  }

  // Letter spacing
  if (name.includes('letter-spacing')) {
    return 'letter-spacing';
  }

  // Spacing
  if (name.includes('spacing-')) {
    return 'spacing';
  }

  // Border radius
  if (name.includes('border-radius')) {
    return 'border-radius';
  }

  // Transitions
  if (name.includes('transition') || name.includes('easing')) {
    return 'transition';
  }

  // Z-index
  if (name.startsWith('z-')) {
    return 'z-index';
  }

  // Breakpoints
  if (name.includes('breakpoint')) {
    return 'breakpoint';
  }

  // Colors - check value patterns
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

  // Default to text for complex values
  return 'text';
}

/**
 * Get category from variable name
 */
function getCategory(varName: string): string {
  const name = varName.toLowerCase();

  // Colors
  if (
    name.includes('primary') || name.includes('secondary') || name.includes('success') ||
    name.includes('error') || name.includes('warning') || name.includes('info') ||
    name.includes('light') || name.includes('dark') || name.includes('gray-') ||
    name.includes('-rgb') || name.includes('-text-emphasis') || name.includes('-bg-subtle') ||
    name.includes('-border-subtle') || name.includes('-hover') || name.includes('red-') ||
    name.includes('green-') || name.includes('blue-') || name.includes('yellow-') ||
    name.includes('accent') || name.includes('body-color') || name.includes('heading-color') ||
    name.includes('link-color') || name.includes('highlight-bg') || name.includes('border-color') ||
    name.includes('code-color')
  ) {
    return 'colors';
  }

  // Typography
  if (
    name.includes('font-') || name.includes('body-') || name.includes('heading-') ||
    name.includes('link-') || name.includes('line-height') || name.includes('letter-spacing')
  ) {
    return 'typography';
  }

  // Spacing
  if (name.includes('spacing-')) {
    return 'spacing';
  }

  // Border Radius
  if (name.includes('border-radius')) {
    return 'border-radius';
  }

  // Shadows
  if (name.includes('shadow') || name.includes('box-shadow')) {
    return 'shadows';
  }

  // Gradients
  if (name.includes('gradient')) {
    return 'gradients';
  }

  // Transitions
  if (name.includes('transition') || name.includes('easing')) {
    return 'transitions';
  }

  // Z-Index
  if (name.startsWith('z-')) {
    return 'z-index';
  }

  // Breakpoints
  if (name.includes('breakpoint')) {
    return 'breakpoints';
  }

  // Forms
  if (name.includes('form-') || name.includes('focus-')) {
    return 'forms';
  }

  // Borders
  if (name.includes('border-') && !name.includes('border-radius')) {
    return 'borders';
  }

  return 'other';
}

/**
 * Generate display name from variable name
 */
function getDisplayName(varName: string): string {
  // Remove --atomix- prefix
  let name = varName.replace(/^--atomix-/, '');
  
  // Replace hyphens with spaces and capitalize
  name = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return name;
}

/**
 * Parse CSS variables from SCSS file content
 */
export function parseTokensFromSCSS(content: string): ParsedTokens {
  const lightTokens: Token[] = [];
  const darkTokens: Token[] = [];
  
  // Regex to match CSS variable declarations
  const varRegex = /--atomix-([^:]+):\s*([^;]+);/g;
  
  // Split content into light and dark sections
  const lightSectionMatch = content.match(/:root,\s*\[data-atomix-color-mode=light\]\s*\{([^}]+)\}/s);
  const darkSectionMatch = content.match(/\[data-atomix-color-mode=dark\]\s*\{([^}]+)\}/s);
  
  const lightContent = lightSectionMatch ? lightSectionMatch[1] : '';
  const darkContent = darkSectionMatch ? darkSectionMatch[1] : '';
  
  // Parse light mode tokens
  let match;
  const lightVars = new Set<string>();
  
  while ((match = varRegex.exec(lightContent)) !== null) {
    const varName = `--atomix-${match[1].trim()}`;
    const value = match[2].trim();
    
    if (!lightVars.has(varName)) {
      lightVars.add(varName);
      lightTokens.push({
        name: varName,
        displayName: getDisplayName(varName),
        value: value,
        type: detectTokenType(varName, value),
        category: getCategory(varName),
        mode: 'light'
      });
    }
  }
  
  // Parse dark mode tokens
  varRegex.lastIndex = 0; // Reset regex
  const darkVars = new Set<string>();
  
  while ((match = varRegex.exec(darkContent)) !== null) {
    const varName = `--atomix-${match[1].trim()}`;
    const value = match[2].trim();
    
    if (!darkVars.has(varName)) {
      darkVars.add(varName);
      darkTokens.push({
        name: varName,
        displayName: getDisplayName(varName),
        value: value,
        type: detectTokenType(varName, value),
        category: getCategory(varName),
        mode: 'dark'
      });
    }
  }
  
  // Create categories
  const categoryMap = new Map<string, { title: string; description: string }>();
  
  categoryMap.set('colors', { title: 'Colors', description: 'Color tokens including primary, secondary, semantic colors, and color scales' });
  categoryMap.set('typography', { title: 'Typography', description: 'Font families, sizes, weights, line heights, and letter spacing' });
  categoryMap.set('spacing', { title: 'Spacing', description: 'Spacing scale tokens for consistent layout spacing' });
  categoryMap.set('border-radius', { title: 'Border Radius', description: 'Border radius tokens for rounded corners' });
  categoryMap.set('shadows', { title: 'Shadows', description: 'Box shadow tokens for elevation and depth' });
  categoryMap.set('gradients', { title: 'Gradients', description: 'Gradient definitions for visual effects' });
  categoryMap.set('transitions', { title: 'Transitions', description: 'Transition duration and easing tokens' });
  categoryMap.set('z-index', { title: 'Z-Index', description: 'Z-index layers for stacking context' });
  categoryMap.set('breakpoints', { title: 'Breakpoints', description: 'Responsive breakpoint tokens' });
  categoryMap.set('forms', { title: 'Forms', description: 'Form validation and focus state tokens' });
  categoryMap.set('borders', { title: 'Borders', description: 'Border width, style, and color tokens' });
  categoryMap.set('other', { title: 'Other', description: 'Other design tokens' });
  
  // Get unique categories from tokens
  const allCategories = new Set<string>();
  [...lightTokens, ...darkTokens].forEach(token => {
    allCategories.add(token.category);
  });
  
  const categories: Category[] = Array.from(allCategories)
    .sort()
    .map(id => ({
      id,
      title: categoryMap.get(id)?.title || id,
      description: categoryMap.get(id)?.description || ''
    }));
  
  return {
    light: lightTokens.sort((a, b) => a.name.localeCompare(b.name)),
    dark: darkTokens.sort((a, b) => a.name.localeCompare(b.name)),
    categories
  };
}



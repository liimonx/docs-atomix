export interface DesignToken {
  name: string;
  value: string;
  description: string;
  category: string;
  usage?: string[];
  cssVariable?: string;
}

export interface TokenCategory {
  id: string;
  title: string;
  description: string;
  tokens: DesignToken[];
}

export const designTokens: TokenCategory[] = [
  {
    id: 'colors',
    title: 'Colors',
    description: 'Comprehensive color system with semantic naming and accessibility considerations',
    tokens: [
      {
        name: 'Primary',
        value: '#2563eb',
        description: 'Primary brand color used for main actions and emphasis',
        category: 'brand',
        usage: ['buttons', 'links', 'focus states'],
        cssVariable: '--atomix-primary'
      },
      {
        name: 'Secondary',
        value: '#64748b',
        description: 'Secondary color for supporting elements',
        category: 'brand',
        usage: ['secondary buttons', 'borders', 'subtle text'],
        cssVariable: '--atomix-secondary'
      },
      {
        name: 'Success',
        value: '#10b981',
        description: 'Success state color for positive feedback',
        category: 'semantic',
        usage: ['success messages', 'valid states', 'positive indicators'],
        cssVariable: '--atomix-success'
      },
      {
        name: 'Warning',
        value: '#f59e0b',
        description: 'Warning state color for cautionary feedback',
        category: 'semantic',
        usage: ['warning messages', 'caution states', 'attention indicators'],
        cssVariable: '--atomix-warning'
      },
      {
        name: 'Error',
        value: '#ef4444',
        description: 'Error state color for negative feedback',
        category: 'semantic',
        usage: ['error messages', 'invalid states', 'destructive actions'],
        cssVariable: '--atomix-error'
      },
      {
        name: 'Gray 50',
        value: '#f8fafc',
        description: 'Lightest gray for backgrounds and subtle elements',
        category: 'neutral',
        usage: ['page backgrounds', 'card backgrounds', 'subtle borders'],
        cssVariable: '--atomix-gray-50'
      },
      {
        name: 'Gray 900',
        value: '#0f172a',
        description: 'Darkest gray for primary text and high contrast elements',
        category: 'neutral',
        usage: ['headings', 'primary text', 'high contrast elements'],
        cssVariable: '--atomix-gray-900'
      }
    ]
  },
  {
    id: 'spacing',
    title: 'Spacing',
    description: 'Consistent spacing scale based on 4px grid system',
    tokens: [
      {
        name: 'XS',
        value: '0.25rem (4px)',
        description: 'Extra small spacing for tight layouts',
        category: 'spacing',
        usage: ['icon gaps', 'tight padding', 'fine adjustments'],
        cssVariable: '--atomix-space-xs'
      },
      {
        name: 'SM',
        value: '0.5rem (8px)',
        description: 'Small spacing for compact elements',
        category: 'spacing',
        usage: ['button padding', 'form field gaps', 'compact layouts'],
        cssVariable: '--atomix-space-sm'
      },
      {
        name: 'MD',
        value: '1rem (16px)',
        description: 'Medium spacing for standard layouts',
        category: 'spacing',
        usage: ['default padding', 'standard margins', 'content spacing'],
        cssVariable: '--atomix-space-md'
      },
      {
        name: 'LG',
        value: '1.5rem (24px)',
        description: 'Large spacing for generous layouts',
        category: 'spacing',
        usage: ['section padding', 'card spacing', 'generous margins'],
        cssVariable: '--atomix-space-lg'
      },
      {
        name: 'XL',
        value: '2rem (32px)',
        description: 'Extra large spacing for major sections',
        category: 'spacing',
        usage: ['page sections', 'major components', 'hero spacing'],
        cssVariable: '--atomix-space-xl'
      },
      {
        name: '2XL',
        value: '3rem (48px)',
        description: 'Double extra large spacing for significant separation',
        category: 'spacing',
        usage: ['page headers', 'major sections', 'hero elements'],
        cssVariable: '--atomix-space-2xl'
      }
    ]
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Type scale and font system for consistent text hierarchy',
    tokens: [
      {
        name: 'Font Family Base',
        value: 'Inter, system-ui, sans-serif',
        description: 'Primary font family for body text and UI elements',
        category: 'font-family',
        usage: ['body text', 'UI elements', 'general content'],
        cssVariable: '--atomix-font-family-base'
      },
      {
        name: 'Font Family Heading',
        value: 'Inter, system-ui, sans-serif',
        description: 'Font family for headings and display text',
        category: 'font-family',
        usage: ['headings', 'display text', 'emphasis'],
        cssVariable: '--atomix-font-family-heading'
      },
      {
        name: 'Font Family Mono',
        value: 'JetBrains Mono, Consolas, monospace',
        description: 'Monospace font for code and technical content',
        category: 'font-family',
        usage: ['code blocks', 'technical text', 'data display'],
        cssVariable: '--atomix-font-family-mono'
      },
      {
        name: 'Text XS',
        value: '0.75rem (12px)',
        description: 'Extra small text for captions and fine print',
        category: 'font-size',
        usage: ['captions', 'fine print', 'metadata'],
        cssVariable: '--atomix-text-xs'
      },
      {
        name: 'Text SM',
        value: '0.875rem (14px)',
        description: 'Small text for secondary content',
        category: 'font-size',
        usage: ['secondary text', 'form labels', 'helper text'],
        cssVariable: '--atomix-text-sm'
      },
      {
        name: 'Text Base',
        value: '1rem (16px)',
        description: 'Base text size for body content',
        category: 'font-size',
        usage: ['body text', 'paragraphs', 'default content'],
        cssVariable: '--atomix-text-base'
      },
      {
        name: 'Text LG',
        value: '1.125rem (18px)',
        description: 'Large text for emphasis and lead content',
        category: 'font-size',
        usage: ['lead text', 'emphasis', 'large content'],
        cssVariable: '--atomix-text-lg'
      },
      {
        name: 'Text XL',
        value: '1.25rem (20px)',
        description: 'Extra large text for small headings',
        category: 'font-size',
        usage: ['small headings', 'subheadings', 'emphasis'],
        cssVariable: '--atomix-text-xl'
      },
      {
        name: 'Text 2XL',
        value: '1.5rem (24px)',
        description: 'Double extra large text for medium headings',
        category: 'font-size',
        usage: ['medium headings', 'section titles'],
        cssVariable: '--atomix-text-2xl'
      },
      {
        name: 'Text 3XL',
        value: '1.875rem (30px)',
        description: 'Triple extra large text for large headings',
        category: 'font-size',
        usage: ['large headings', 'page titles'],
        cssVariable: '--atomix-text-3xl'
      },
      {
        name: 'Text 4XL',
        value: '2.25rem (36px)',
        description: 'Quadruple extra large text for display headings',
        category: 'font-size',
        usage: ['display headings', 'hero titles'],
        cssVariable: '--atomix-text-4xl'
      }
    ]
  },
  {
    id: 'elevation',
    title: 'Elevation',
    description: 'Shadow system for creating depth and hierarchy',
    tokens: [
      {
        name: 'Shadow None',
        value: 'none',
        description: 'No shadow for flat elements',
        category: 'shadow',
        usage: ['flat buttons', 'inline elements', 'no elevation'],
        cssVariable: '--atomix-shadow-none'
      },
      {
        name: 'Shadow SM',
        value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        description: 'Small shadow for subtle elevation',
        category: 'shadow',
        usage: ['cards', 'form fields', 'subtle elevation'],
        cssVariable: '--atomix-shadow-sm'
      },
      {
        name: 'Shadow MD',
        value: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        description: 'Medium shadow for standard elevation',
        category: 'shadow',
        usage: ['buttons', 'dropdowns', 'standard elevation'],
        cssVariable: '--atomix-shadow-md'
      },
      {
        name: 'Shadow LG',
        value: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        description: 'Large shadow for prominent elevation',
        category: 'shadow',
        usage: ['modals', 'popovers', 'prominent elements'],
        cssVariable: '--atomix-shadow-lg'
      },
      {
        name: 'Shadow XL',
        value: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        description: 'Extra large shadow for high elevation',
        category: 'shadow',
        usage: ['overlays', 'floating elements', 'high elevation'],
        cssVariable: '--atomix-shadow-xl'
      },
      {
        name: 'Shadow 2XL',
        value: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        description: 'Double extra large shadow for maximum elevation',
        category: 'shadow',
        usage: ['hero elements', 'maximum elevation', 'dramatic effect'],
        cssVariable: '--atomix-shadow-2xl'
      }
    ]
  },
  {
    id: 'border-radius',
    title: 'Border Radius',
    description: 'Consistent border radius scale for rounded corners',
    tokens: [
      {
        name: 'Radius None',
        value: '0',
        description: 'No border radius for sharp corners',
        category: 'border-radius',
        usage: ['sharp elements', 'no rounding', 'geometric shapes'],
        cssVariable: '--atomix-radius-none'
      },
      {
        name: 'Radius SM',
        value: '0.125rem (2px)',
        description: 'Small border radius for subtle rounding',
        category: 'border-radius',
        usage: ['form fields', 'subtle rounding', 'small elements'],
        cssVariable: '--atomix-radius-sm'
      },
      {
        name: 'Radius MD',
        value: '0.375rem (6px)',
        description: 'Medium border radius for standard rounding',
        category: 'border-radius',
        usage: ['buttons', 'cards', 'standard elements'],
        cssVariable: '--atomix-radius-md'
      },
      {
        name: 'Radius LG',
        value: '0.5rem (8px)',
        description: 'Large border radius for generous rounding',
        category: 'border-radius',
        usage: ['large buttons', 'prominent cards', 'generous rounding'],
        cssVariable: '--atomix-radius-lg'
      },
      {
        name: 'Radius XL',
        value: '0.75rem (12px)',
        description: 'Extra large border radius for significant rounding',
        category: 'border-radius',
        usage: ['hero elements', 'significant rounding', 'modern look'],
        cssVariable: '--atomix-radius-xl'
      },
      {
        name: 'Radius Full',
        value: '9999px',
        description: 'Full border radius for circular elements',
        category: 'border-radius',
        usage: ['avatars', 'badges', 'circular buttons'],
        cssVariable: '--atomix-radius-full'
      }
    ]
  }
];

export const getTokensByCategory = (categoryId: string) => {
  return designTokens.find(category => category.id === categoryId);
};

export const getAllTokens = () => {
  return designTokens.flatMap(category => category.tokens);
};

export const searchTokens = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return getAllTokens().filter(token =>
    token.name.toLowerCase().includes(lowercaseQuery) ||
    token.description.toLowerCase().includes(lowercaseQuery) ||
    token.category.toLowerCase().includes(lowercaseQuery) ||
    token.usage?.some(usage => usage.toLowerCase().includes(lowercaseQuery))
  );
};
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
      // Brand Colors
      {
        name: 'Primary',
        value: '#7c3aed',
        description: 'Primary brand color used for main actions and emphasis',
        category: 'brand',
        usage: ['buttons', 'links', 'focus states'],
        cssVariable: 'var(--atomix-primary)'
      },
      {
        name: 'Secondary',
        value: '#f3f4f6',
        description: 'Secondary color for supporting elements',
        category: 'brand',
        usage: ['secondary buttons', 'borders', 'subtle text'],
        cssVariable: 'var(--atomix-secondary)'
      },
      {
        name: 'Light',
        value: '#f9fafb',
        description: 'Light color variant',
        category: 'brand',
        usage: ['light backgrounds', 'subtle elements'],
        cssVariable: 'var(--atomix-light)'
      },
      {
        name: 'Dark',
        value: '#1f2937',
        description: 'Dark color variant',
        category: 'brand',
        usage: ['dark backgrounds', 'high contrast elements'],
        cssVariable: 'var(--atomix-dark)'
      },
      // Semantic Colors
      {
        name: 'Success',
        value: '#22c55e',
        description: 'Success state color for positive feedback',
        category: 'semantic',
        usage: ['success messages', 'valid states', 'positive indicators'],
        cssVariable: 'var(--atomix-success)'
      },
      {
        name: 'Info',
        value: '#3b82f6',
        description: 'Info state color for informational feedback',
        category: 'semantic',
        usage: ['info messages', 'informational states', 'info indicators'],
        cssVariable: 'var(--atomix-info)'
      },
      {
        name: 'Warning',
        value: '#eab308',
        description: 'Warning state color for cautionary feedback',
        category: 'semantic',
        usage: ['warning messages', 'caution states', 'attention indicators'],
        cssVariable: 'var(--atomix-warning)'
      },
      {
        name: 'Error',
        value: '#ef4444',
        description: 'Error state color for negative feedback',
        category: 'semantic',
        usage: ['error messages', 'invalid states', 'destructive actions'],
        cssVariable: 'var(--atomix-error)'
      },
      // Gray Scale
      {
        name: 'Gray 1',
        value: '#f9fafb',
        description: 'Lightest gray for backgrounds and subtle elements',
        category: 'neutral',
        usage: ['page backgrounds', 'card backgrounds', 'subtle borders'],
        cssVariable: 'var(--atomix-gray-1)'
      },
      {
        name: 'Gray 2',
        value: '#f3f4f6',
        description: 'Very light gray for secondary backgrounds',
        category: 'neutral',
        usage: ['secondary backgrounds', 'subtle dividers'],
        cssVariable: 'var(--atomix-gray-2)'
      },
      {
        name: 'Gray 3',
        value: '#e5e7eb',
        description: 'Light gray for borders and dividers',
        category: 'neutral',
        usage: ['borders', 'dividers', 'subtle separators'],
        cssVariable: 'var(--atomix-gray-3)'
      },
      {
        name: 'Gray 4',
        value: '#d1d5db',
        description: 'Medium-light gray for disabled states',
        category: 'neutral',
        usage: ['disabled elements', 'placeholder text'],
        cssVariable: 'var(--atomix-gray-4)'
      },
      {
        name: 'Gray 5',
        value: '#9ca3af',
        description: 'Medium gray for secondary text',
        category: 'neutral',
        usage: ['secondary text', 'helper text'],
        cssVariable: 'var(--atomix-gray-5)'
      },
      {
        name: 'Gray 6',
        value: '#6b7280',
        description: 'Medium-dark gray for tertiary text',
        category: 'neutral',
        usage: ['tertiary text', 'subtle labels'],
        cssVariable: 'var(--atomix-gray-6)'
      },
      {
        name: 'Gray 7',
        value: '#4b5563',
        description: 'Dark gray for secondary headings',
        category: 'neutral',
        usage: ['secondary headings', 'emphasis'],
        cssVariable: 'var(--atomix-gray-7)'
      },
      {
        name: 'Gray 8',
        value: '#374151',
        description: 'Very dark gray for primary text',
        category: 'neutral',
        usage: ['primary text', 'body content'],
        cssVariable: 'var(--atomix-gray-8)'
      },
      {
        name: 'Gray 9',
        value: '#1f2937',
        description: 'Nearly black for high contrast text',
        category: 'neutral',
        usage: ['headings', 'high contrast text'],
        cssVariable: 'var(--atomix-gray-9)'
      },
      {
        name: 'Gray 10',
        value: '#111827',
        description: 'Darkest gray for maximum contrast',
        category: 'neutral',
        usage: ['maximum contrast', 'dark mode text'],
        cssVariable: 'var(--atomix-gray-10)'
      },
      // Primary Color Scale
      {
        name: 'Primary 1',
        value: '#f2e8fd',
        description: 'Lightest primary color for subtle backgrounds',
        category: 'primary-scale',
        usage: ['subtle primary backgrounds', 'light accents'],
        cssVariable: 'var(--atomix-primary-1)'
      },
      {
        name: 'Primary 2',
        value: '#e4d0fa',
        description: 'Very light primary color',
        category: 'primary-scale',
        usage: ['light primary backgrounds'],
        cssVariable: 'var(--atomix-primary-2)'
      },
      {
        name: 'Primary 3',
        value: '#d0b2f5',
        description: 'Light primary color',
        category: 'primary-scale',
        usage: ['light primary elements'],
        cssVariable: 'var(--atomix-primary-3)'
      },
      {
        name: 'Primary 4',
        value: '#b88cef',
        description: 'Medium-light primary color',
        category: 'primary-scale',
        usage: ['medium-light primary elements'],
        cssVariable: 'var(--atomix-primary-4)'
      },
      {
        name: 'Primary 5',
        value: '#9c63e9',
        description: 'Medium primary color',
        category: 'primary-scale',
        usage: ['medium primary elements'],
        cssVariable: 'var(--atomix-primary-5)'
      },
      {
        name: 'Primary 6',
        value: '#7c3aed',
        description: 'Base primary color (main brand color)',
        category: 'primary-scale',
        usage: ['primary buttons', 'brand elements', 'main actions'],
        cssVariable: 'var(--atomix-primary-6)'
      },
      {
        name: 'Primary 7',
        value: '#6425ca',
        description: 'Medium-dark primary color',
        category: 'primary-scale',
        usage: ['hover states', 'active states'],
        cssVariable: 'var(--atomix-primary-7)'
      },
      {
        name: 'Primary 8',
        value: '#501ba6',
        description: 'Dark primary color',
        category: 'primary-scale',
        usage: ['pressed states', 'dark variants'],
        cssVariable: 'var(--atomix-primary-8)'
      },
      {
        name: 'Primary 9',
        value: '#3c1583',
        description: 'Very dark primary color',
        category: 'primary-scale',
        usage: ['deep accents', 'dark themes'],
        cssVariable: 'var(--atomix-primary-9)'
      },
      {
        name: 'Primary 10',
        value: '#2a0e60',
        description: 'Darkest primary color',
        category: 'primary-scale',
        usage: ['maximum contrast', 'deepest accents'],
        cssVariable: 'var(--atomix-primary-10)'
      },
    ]
  },
  {
    id: 'text-colors',
    title: 'Text Colors',
    description: 'Text color tokens for semantic text styling',
    tokens: [
      {
        name: 'Primary Text Emphasis',
        value: '#111827',
        description: 'Primary text color for main content',
        category: 'text',
        usage: ['headings', 'primary text', 'body content'],
        cssVariable: 'var(--atomix-primary-text-emphasis)'
      },
      {
        name: 'Secondary Text Emphasis',
        value: '#374151',
        description: 'Secondary text color for supporting content',
        category: 'text',
        usage: ['secondary text', 'descriptions'],
        cssVariable: 'var(--atomix-secondary-text-emphasis)'
      },
      {
        name: 'Tertiary Text Emphasis',
        value: '#6b7280',
        description: 'Tertiary text color for subtle content',
        category: 'text',
        usage: ['helper text', 'captions', 'metadata'],
        cssVariable: 'var(--atomix-tertiary-text-emphasis)'
      },
      {
        name: 'Disabled Text Emphasis',
        value: '#9ca3af',
        description: 'Text color for disabled elements',
        category: 'text',
        usage: ['disabled buttons', 'inactive text'],
        cssVariable: 'var(--atomix-disabled-text-emphasis)'
      },
      {
        name: 'Brand Text Emphasis',
        value: '#7c3aed',
        description: 'Brand color for text emphasis',
        category: 'text',
        usage: ['brand links', 'brand text'],
        cssVariable: 'var(--atomix-brand-text-emphasis)'
      },
      {
        name: 'Error Text Emphasis',
        value: '#ef4444',
        description: 'Error color for text',
        category: 'text',
        usage: ['error messages', 'invalid text'],
        cssVariable: 'var(--atomix-error-text-emphasis)'
      },
      {
        name: 'Success Text Emphasis',
        value: '#22c55e',
        description: 'Success color for text',
        category: 'text',
        usage: ['success messages', 'valid text'],
        cssVariable: 'var(--atomix-success-text-emphasis)'
      },
      {
        name: 'Warning Text Emphasis',
        value: '#eab308',
        description: 'Warning color for text',
        category: 'text',
        usage: ['warning messages', 'caution text'],
        cssVariable: 'var(--atomix-warning-text-emphasis)'
      },
      {
        name: 'Info Text Emphasis',
        value: '#3b82f6',
        description: 'Info color for text',
        category: 'text',
        usage: ['info messages', 'informational text'],
        cssVariable: 'var(--atomix-info-text-emphasis)'
      },
    ]
  },
  {
    id: 'background-colors',
    title: 'Background Colors',
    description: 'Background color tokens for semantic background styling',
    tokens: [
      {
        name: 'Primary Background Subtle',
        value: '#ffffff',
        description: 'Primary background color',
        category: 'background',
        usage: ['page backgrounds', 'card backgrounds'],
        cssVariable: 'var(--atomix-primary-bg-subtle)'
      },
      {
        name: 'Secondary Background Subtle',
        value: '#e5e7eb',
        description: 'Secondary background color',
        category: 'background',
        usage: ['secondary sections', 'alternating rows'],
        cssVariable: 'var(--atomix-secondary-bg-subtle)'
      },
      {
        name: 'Tertiary Background Subtle',
        value: '#d1d5db',
        description: 'Tertiary background color',
        category: 'background',
        usage: ['subtle backgrounds', 'dividers'],
        cssVariable: 'var(--atomix-tertiary-bg-subtle)'
      },
      {
        name: 'Brand Background Subtle',
        value: '#e4d0fa',
        description: 'Brand background color',
        category: 'background',
        usage: ['brand sections', 'highlighted areas'],
        cssVariable: 'var(--atomix-brand-bg-subtle)'
      },
      {
        name: 'Error Background Subtle',
        value: '#fee2e2',
        description: 'Error background color',
        category: 'background',
        usage: ['error states', 'invalid sections'],
        cssVariable: 'var(--atomix-error-bg-subtle)'
      },
      {
        name: 'Success Background Subtle',
        value: '#dcfce7',
        description: 'Success background color',
        category: 'background',
        usage: ['success states', 'valid sections'],
        cssVariable: 'var(--atomix-success-bg-subtle)'
      },
      {
        name: 'Warning Background Subtle',
        value: '#fef9c3',
        description: 'Warning background color',
        category: 'background',
        usage: ['warning states', 'caution sections'],
        cssVariable: 'var(--atomix-warning-bg-subtle)'
      },
      {
        name: 'Info Background Subtle',
        value: '#dbeafe',
        description: 'Info background color',
        category: 'background',
        usage: ['info states', 'informational sections'],
        cssVariable: 'var(--atomix-info-bg-subtle)'
      },
      {
        name: 'Light Background Subtle',
        value: '#f3f4f6',
        description: 'Light background color',
        category: 'background',
        usage: ['light sections', 'subtle backgrounds'],
        cssVariable: 'var(--atomix-light-bg-subtle)'
      },
      {
        name: 'Dark Background Subtle',
        value: '#1f2937',
        description: 'Dark background color',
        category: 'background',
        usage: ['dark sections', 'dark mode backgrounds'],
        cssVariable: 'var(--atomix-dark-bg-subtle)'
      },
    ]
  },
  {
    id: 'hover-colors',
    title: 'Hover Colors',
    description: 'Color tokens for interactive hover states',
    tokens: [
      {
        name: 'Primary Hover',
        value: '#7c3aed',
        description: 'Primary color for hover states',
        category: 'hover',
        usage: ['primary button hover', 'link hover'],
        cssVariable: 'var(--atomix-primary-hover)'
      },
      {
        name: 'Secondary Hover',
        value: '#e5e7eb',
        description: 'Secondary color for hover states',
        category: 'hover',
        usage: ['secondary button hover'],
        cssVariable: 'var(--atomix-secondary-hover)'
      },
      {
        name: 'Error Hover',
        value: '#b91c1c',
        description: 'Error color for hover states',
        category: 'hover',
        usage: ['error button hover', 'destructive hover'],
        cssVariable: 'var(--atomix-error-hover)'
      },
      {
        name: 'Success Hover',
        value: '#15803d',
        description: 'Success color for hover states',
        category: 'hover',
        usage: ['success button hover'],
        cssVariable: 'var(--atomix-success-hover)'
      },
      {
        name: 'Warning Hover',
        value: '#a16207',
        description: 'Warning color for hover states',
        category: 'hover',
        usage: ['warning button hover'],
        cssVariable: 'var(--atomix-warning-hover)'
      },
      {
        name: 'Info Hover',
        value: '#1d4ed8',
        description: 'Info color for hover states',
        category: 'hover',
        usage: ['info button hover'],
        cssVariable: 'var(--atomix-info-hover)'
      },
    ]
  },
  {
    id: 'gradients',
    title: 'Gradients',
    description: 'Gradient definitions for visual effects',
    tokens: [
      {
        name: 'Primary Gradient',
        value: 'linear-gradient(135deg, #e4d0fa, #d0b2f5, #b88cef)',
        description: 'Primary brand gradient',
        category: 'gradient',
        usage: ['hero sections', 'brand backgrounds'],
        cssVariable: 'var(--atomix-primary-gradient)'
      },
      {
        name: 'Secondary Gradient',
        value: 'linear-gradient(135deg, #f3f4f6, #e5e7eb, #d1d5db)',
        description: 'Secondary gradient',
        category: 'gradient',
        usage: ['subtle backgrounds', 'secondary sections'],
        cssVariable: 'var(--atomix-secondary-gradient)'
      },
      {
        name: 'Success Gradient',
        value: 'linear-gradient(135deg, #dcfce7, #86efac, #4ade80)',
        description: 'Success gradient',
        category: 'gradient',
        usage: ['success sections', 'positive feedback'],
        cssVariable: 'var(--atomix-success-gradient)'
      },
      {
        name: 'Info Gradient',
        value: 'linear-gradient(135deg, #dbeafe, #bfdbfe, #60a5fa)',
        description: 'Info gradient',
        category: 'gradient',
        usage: ['info sections', 'informational areas'],
        cssVariable: 'var(--atomix-info-gradient)'
      },
      {
        name: 'Warning Gradient',
        value: 'linear-gradient(135deg, #fef9c3, #fef08a, #facc15)',
        description: 'Warning gradient',
        category: 'gradient',
        usage: ['warning sections', 'caution areas'],
        cssVariable: 'var(--atomix-warning-gradient)'
      },
      {
        name: 'Error Gradient',
        value: 'linear-gradient(135deg, #fef2f2, #fee2e2, #fecaca)',
        description: 'Error gradient',
        category: 'gradient',
        usage: ['error sections', 'alert areas'],
        cssVariable: 'var(--atomix-error-gradient)'
      },
    ]
  },
  {
    id: 'spacing',
    title: 'Spacing',
    description: 'Consistent spacing scale based on 4px grid system',
    tokens: [
      {
        name: 'Spacing 0',
        value: '0',
        description: 'No spacing',
        category: 'spacing',
        usage: ['reset margins', 'no gaps'],
        cssVariable: 'var(--atomix-spacing-0)'
      },
      {
        name: 'Spacing XXS',
        value: '0.25rem (4px)',
        description: 'Extra extra small spacing for tight layouts',
        category: 'spacing',
        usage: ['icon gaps', 'tight padding', 'fine adjustments'],
        cssVariable: 'var(--atomix-spacing-xxs)'
      },
      {
        name: 'Spacing XS',
        value: '0.5rem (8px)',
        description: 'Extra small spacing for compact elements',
        category: 'spacing',
        usage: ['button padding', 'form field gaps', 'compact layouts'],
        cssVariable: 'var(--atomix-spacing-xs)'
      },
      {
        name: 'Spacing SM',
        value: '0.75rem (12px)',
        description: 'Small spacing for compact layouts',
        category: 'spacing',
        usage: ['compact padding', 'small gaps'],
        cssVariable: 'var(--atomix-spacing-sm)'
      },
      {
        name: 'Spacing MD',
        value: '1rem (16px)',
        description: 'Medium spacing for standard layouts',
        category: 'spacing',
        usage: ['default padding', 'standard margins', 'content spacing'],
        cssVariable: 'var(--atomix-spacing-md)'
      },
      {
        name: 'Spacing LG',
        value: '1.5rem (24px)',
        description: 'Large spacing for generous layouts',
        category: 'spacing',
        usage: ['section padding', 'card spacing', 'generous margins'],
        cssVariable: 'var(--atomix-spacing-lg)'
      },
      {
        name: 'Spacing XL',
        value: '2rem (32px)',
        description: 'Extra large spacing for major sections',
        category: 'spacing',
        usage: ['page sections', 'major components', 'hero spacing'],
        cssVariable: 'var(--atomix-spacing-xl)'
      },
      {
        name: 'Spacing 2XL',
        value: '3rem (48px)',
        description: 'Double extra large spacing for significant separation',
        category: 'spacing',
        usage: ['page headers', 'major sections', 'hero elements'],
        cssVariable: 'var(--atomix-spacing-2xl)'
      },
      {
        name: 'Spacing 3XL',
        value: '4rem (64px)',
        description: 'Triple extra large spacing',
        category: 'spacing',
        usage: ['large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-3xl)'
      },
      {
        name: 'Spacing 4XL',
        value: '6rem (96px)',
        description: 'Quadruple extra large spacing',
        category: 'spacing',
        usage: ['maximum spacing', 'hero sections'],
        cssVariable: 'var(--atomix-spacing-4xl)'
      },
    ]
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Type scale and font system for consistent text hierarchy',
    tokens: [
      {
        name: 'Font Sans Serif',
        value: '"Roboto", sans-serif',
        description: 'Primary sans-serif font family',
        category: 'font-family',
        usage: ['body text', 'UI elements', 'general content'],
        cssVariable: 'var(--atomix-font-sans-serif)'
      },
      {
        name: 'Font Monospace',
        value: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        description: 'Monospace font for code and technical content',
        category: 'font-family',
        usage: ['code blocks', 'technical text', 'data display'],
        cssVariable: 'var(--atomix-font-monospace)'
      },
      {
        name: 'Body Font Family',
        value: '"Roboto", sans-serif',
        description: 'Font family for body text',
        category: 'font-family',
        usage: ['body text', 'paragraphs'],
        cssVariable: 'var(--atomix-body-font-family)'
      },
      {
        name: 'Body Font Size',
        value: '1rem (16px)',
        description: 'Base font size for body content',
        category: 'font-size',
        usage: ['body text', 'paragraphs', 'default content'],
        cssVariable: 'var(--atomix-body-font-size)'
      },
      {
        name: 'Body Font Weight',
        value: '400',
        description: 'Base font weight',
        category: 'font-weight',
        usage: ['body text', 'normal weight'],
        cssVariable: 'var(--atomix-body-font-weight)'
      },
      {
        name: 'Body Line Height',
        value: '1.2',
        description: 'Base line height',
        category: 'line-height',
        usage: ['body text', 'default line height'],
        cssVariable: 'var(--atomix-body-line-height)'
      },
      {
        name: 'Font Size XS',
        value: '0.75rem (12px)',
        description: 'Extra small text for captions and fine print',
        category: 'font-size',
        usage: ['captions', 'fine print', 'metadata'],
        cssVariable: 'var(--atomix-font-size-xs)'
      },
      {
        name: 'Font Size SM',
        value: '0.875rem (14px)',
        description: 'Small text for secondary content',
        category: 'font-size',
        usage: ['secondary text', 'form labels', 'helper text'],
        cssVariable: 'var(--atomix-font-size-sm)'
      },
      {
        name: 'Font Size MD',
        value: '1rem (16px)',
        description: 'Medium text size (base)',
        category: 'font-size',
        usage: ['body text', 'paragraphs', 'default content'],
        cssVariable: 'var(--atomix-font-size-md)'
      },
      {
        name: 'Font Size LG',
        value: '1.125rem (18px)',
        description: 'Large text for emphasis and lead content',
        category: 'font-size',
        usage: ['lead text', 'emphasis', 'large content'],
        cssVariable: 'var(--atomix-font-size-lg)'
      },
      {
        name: 'Font Size XL',
        value: '1.25rem (20px)',
        description: 'Extra large text for small headings',
        category: 'font-size',
        usage: ['small headings', 'subheadings', 'emphasis'],
        cssVariable: 'var(--atomix-font-size-xl)'
      },
      {
        name: 'Font Size 2XL',
        value: '1.5rem (24px)',
        description: 'Double extra large text for medium headings',
        category: 'font-size',
        usage: ['medium headings', 'section titles'],
        cssVariable: 'var(--atomix-font-size-2xl)'
      },
      {
        name: 'Font Size 3XL',
        value: '1.875rem (30px)',
        description: 'Triple extra large text for large headings',
        category: 'font-size',
        usage: ['large headings', 'page titles'],
        cssVariable: 'var(--atomix-font-size-3xl)'
      },
      {
        name: 'Font Size 4XL',
        value: '2.25rem (36px)',
        description: 'Quadruple extra large text for display headings',
        category: 'font-size',
        usage: ['display headings', 'hero titles'],
        cssVariable: 'var(--atomix-font-size-4xl)'
      },
      {
        name: 'Font Size 5XL',
        value: '3rem (48px)',
        description: 'Quintuple extra large text for large display headings',
        category: 'font-size',
        usage: ['large display headings', 'hero titles'],
        cssVariable: 'var(--atomix-font-size-5xl)'
      },
      {
        name: 'Font Weight Normal',
        value: '400',
        description: 'Normal font weight',
        category: 'font-weight',
        usage: ['body text', 'normal emphasis'],
        cssVariable: 'var(--atomix-font-weight-normal)'
      },
      {
        name: 'Font Weight Medium',
        value: '500',
        description: 'Medium font weight',
        category: 'font-weight',
        usage: ['medium emphasis', 'subheadings'],
        cssVariable: 'var(--atomix-font-weight-medium)'
      },
      {
        name: 'Font Weight Semibold',
        value: '600',
        description: 'Semibold font weight',
        category: 'font-weight',
        usage: ['headings', 'strong emphasis'],
        cssVariable: 'var(--atomix-font-weight-semibold)'
      },
      {
        name: 'Font Weight Bold',
        value: '700',
        description: 'Bold font weight',
        category: 'font-weight',
        usage: ['bold headings', 'maximum emphasis'],
        cssVariable: 'var(--atomix-font-weight-bold)'
      },
      {
        name: 'Line Height Tight',
        value: '1.2',
        description: 'Tight line height for headings',
        category: 'line-height',
        usage: ['headings', 'compact text'],
        cssVariable: 'var(--atomix-line-height-tight)'
      },
      {
        name: 'Line Height Normal',
        value: '1.4',
        description: 'Normal line height for body text',
        category: 'line-height',
        usage: ['body text', 'paragraphs'],
        cssVariable: 'var(--atomix-line-height-normal)'
      },
      {
        name: 'Line Height Relaxed',
        value: '1.6',
        description: 'Relaxed line height for comfortable reading',
        category: 'line-height',
        usage: ['long form content', 'articles'],
        cssVariable: 'var(--atomix-line-height-relaxed)'
      },
      {
        name: 'Line Height Loose',
        value: '1.8',
        description: 'Loose line height for maximum readability',
        category: 'line-height',
        usage: ['accessibility', 'large text'],
        cssVariable: 'var(--atomix-line-height-loose)'
      },
    ]
  },
  {
    id: 'border-radius',
    title: 'Border Radius',
    description: 'Consistent border radius scale for rounded corners',
    tokens: [
      {
        name: 'Border Radius None',
        value: '0',
        description: 'No border radius for sharp corners',
        category: 'border-radius',
        usage: ['sharp elements', 'no rounding', 'geometric shapes'],
        cssVariable: 'var(--atomix-radius-none)'
      },
      {
        name: 'Border Radius SM',
        value: '0.25rem (4px)',
        description: 'Small border radius for subtle rounding',
        category: 'border-radius',
        usage: ['form fields', 'subtle rounding', 'small elements'],
        cssVariable: 'var(--atomix-border-radius-sm)'
      },
      {
        name: 'Border Radius',
        value: '0.5rem (8px)',
        description: 'Default border radius for standard rounding',
        category: 'border-radius',
        usage: ['buttons', 'cards', 'standard elements'],
        cssVariable: 'var(--atomix-border-radius)'
      },
      {
        name: 'Border Radius LG',
        value: '0.625rem (10px)',
        description: 'Large border radius for generous rounding',
        category: 'border-radius',
        usage: ['large buttons', 'prominent cards', 'generous rounding'],
        cssVariable: 'var(--atomix-border-radius-lg)'
      },
      {
        name: 'Border Radius XL',
        value: '0.75rem (12px)',
        description: 'Extra large border radius for significant rounding',
        category: 'border-radius',
        usage: ['hero elements', 'significant rounding', 'modern look'],
        cssVariable: 'var(--atomix-border-radius-xl)'
      },
      {
        name: 'Border Radius XXL',
        value: '1rem (16px)',
        description: 'Extra extra large border radius',
        category: 'border-radius',
        usage: ['large cards', 'prominent elements'],
        cssVariable: 'var(--atomix-border-radius-xxl)'
      },
      {
        name: 'Border Radius 3XL',
        value: '1.5rem (24px)',
        description: 'Triple extra large border radius',
        category: 'border-radius',
        usage: ['very large elements', 'hero sections'],
        cssVariable: 'var(--atomix-border-radius-3xl)'
      },
      {
        name: 'Border Radius 4XL',
        value: '2rem (32px)',
        description: 'Quadruple extra large border radius',
        category: 'border-radius',
        usage: ['maximum rounding', 'large hero elements'],
        cssVariable: 'var(--atomix-border-radius-4xl)'
      },
      {
        name: 'Border Radius Pill',
        value: '50rem',
        description: 'Full border radius for circular/pill elements',
        category: 'border-radius',
        usage: ['avatars', 'badges', 'circular buttons', 'pills'],
        cssVariable: 'var(--atomix-border-radius-pill)'
      },
    ]
  },
  {
    id: 'elevation',
    title: 'Elevation',
    description: 'Shadow system for creating depth and hierarchy',
    tokens: [
      {
        name: 'Box Shadow None',
        value: 'none',
        description: 'No shadow for flat elements',
        category: 'shadow',
        usage: ['flat buttons', 'inline elements', 'no elevation'],
        cssVariable: 'var(--atomix-box-shadow)'
      },
      {
        name: 'Box Shadow XS',
        value: '0px 1px 2px 0px rgba(45, 54, 67, 0.04), 0px 2px 4px 0px rgba(45, 54, 67, 0.08)',
        description: 'Extra small shadow for minimal elevation',
        category: 'shadow',
        usage: ['subtle elevation', 'minimal depth'],
        cssVariable: 'var(--atomix-box-shadow-xs)'
      },
      {
        name: 'Box Shadow SM',
        value: '0 2px 4px rgba(0, 0, 0, 0.075)',
        description: 'Small shadow for subtle elevation',
        category: 'shadow',
        usage: ['cards', 'form fields', 'subtle elevation'],
        cssVariable: 'var(--atomix-box-shadow-sm)'
      },
      {
        name: 'Box Shadow',
        value: '0 8px 16px rgba(0, 0, 0, 0.15)',
        description: 'Default shadow for standard elevation',
        category: 'shadow',
        usage: ['buttons', 'dropdowns', 'standard elevation'],
        cssVariable: 'var(--atomix-box-shadow)'
      },
      {
        name: 'Box Shadow LG',
        value: '0 16px 48px rgba(0, 0, 0, 0.175)',
        description: 'Large shadow for prominent elevation',
        category: 'shadow',
        usage: ['modals', 'popovers', 'prominent elements'],
        cssVariable: 'var(--atomix-box-shadow-lg)'
      },
      {
        name: 'Box Shadow XL',
        value: '0px 16px 64px -8px rgba(45, 54, 67, 0.14)',
        description: 'Extra large shadow for high elevation',
        category: 'shadow',
        usage: ['overlays', 'floating elements', 'high elevation'],
        cssVariable: 'var(--atomix-box-shadow-xl)'
      },
      {
        name: 'Box Shadow Inset',
        value: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
        description: 'Inset shadow for pressed/depressed states',
        category: 'shadow',
        usage: ['pressed buttons', 'input fields', 'inset elements'],
        cssVariable: 'var(--atomix-box-shadow-inset)'
      },
    ]
  },
  {
    id: 'form-states',
    title: 'Form States',
    description: 'Color tokens for form validation and focus states',
    tokens: [
      {
        name: 'Focus Border Color',
        value: '#9c63e9',
        description: 'Border color for focused form elements',
        category: 'form',
        usage: ['input focus', 'select focus', 'textarea focus'],
        cssVariable: 'var(--atomix-focus-border-color)'
      },
      {
        name: 'Form Valid Color',
        value: '#22c55e',
        description: 'Color for valid form states',
        category: 'form',
        usage: ['valid inputs', 'success indicators'],
        cssVariable: 'var(--atomix-form-valid-color)'
      },
      {
        name: 'Form Valid Border Color',
        value: '#22c55e',
        description: 'Border color for valid form elements',
        category: 'form',
        usage: ['valid input borders', 'success borders'],
        cssVariable: 'var(--atomix-form-valid-border-color)'
      },
      {
        name: 'Form Invalid Color',
        value: '#ef4444',
        description: 'Color for invalid form states',
        category: 'form',
        usage: ['invalid inputs', 'error indicators'],
        cssVariable: 'var(--atomix-form-invalid-color)'
      },
      {
        name: 'Form Invalid Border Color',
        value: '#ef4444',
        description: 'Border color for invalid form elements',
        category: 'form',
        usage: ['invalid input borders', 'error borders'],
        cssVariable: 'var(--atomix-form-invalid-border-color)'
      },
    ]
  },
  {
    id: 'z-index',
    title: 'Z-Index',
    description: 'Z-index layers for proper stacking context',
    tokens: [
      {
        name: 'Z-Index Base',
        value: '0',
        description: 'Base z-index layer',
        category: 'z-index',
        usage: ['default elements', 'base layer'],
        cssVariable: 'var(--atomix-z-base)'
      },
      {
        name: 'Z-Index Dropdown',
        value: '1000',
        description: 'Z-index for dropdown menus',
        category: 'z-index',
        usage: ['dropdowns', 'select menus'],
        cssVariable: 'var(--atomix-z-dropdown)'
      },
      {
        name: 'Z-Index Sticky',
        value: '1020',
        description: 'Z-index for sticky elements',
        category: 'z-index',
        usage: ['sticky headers', 'sticky navigation'],
        cssVariable: 'var(--atomix-z-sticky)'
      },
      {
        name: 'Z-Index Fixed',
        value: '1030',
        description: 'Z-index for fixed elements',
        category: 'z-index',
        usage: ['fixed headers', 'fixed navigation'],
        cssVariable: 'var(--atomix-z-fixed)'
      },
      {
        name: 'Z-Index Modal Backdrop',
        value: '1040',
        description: 'Z-index for modal backdrops',
        category: 'z-index',
        usage: ['modal overlays', 'backdrop layers'],
        cssVariable: 'var(--atomix-z-modal-backdrop)'
      },
      {
        name: 'Z-Index Modal',
        value: '1050',
        description: 'Z-index for modal dialogs',
        category: 'z-index',
        usage: ['modals', 'dialogs'],
        cssVariable: 'var(--atomix-z-modal)'
      },
      {
        name: 'Z-Index Popover',
        value: '1060',
        description: 'Z-index for popover elements',
        category: 'z-index',
        usage: ['popovers', 'tooltips'],
        cssVariable: 'var(--atomix-z-popover)'
      },
      {
        name: 'Z-Index Tooltip',
        value: '1070',
        description: 'Z-index for tooltip elements',
        category: 'z-index',
        usage: ['tooltips', 'highest layer'],
        cssVariable: 'var(--atomix-z-tooltip)'
      },
    ]
  },
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

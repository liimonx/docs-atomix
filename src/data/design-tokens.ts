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
        value: '#5b21b6',
        description: 'Primary brand color used for main actions and emphasis',
        category: 'brand',
        usage: ['buttons', 'links', 'focus states'],
        cssVariable: 'var(--atomix-primary)'
      },
      {
        name: 'Secondary',
        value: '#f8fafc',
        description: 'Secondary color for supporting elements',
        category: 'brand',
        usage: ['secondary buttons', 'borders', 'subtle text'],
        cssVariable: 'var(--atomix-secondary)'
      },
      {
        name: 'Success',
        value: '#15803d',
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
      // Red Color Scale
      {
        name: 'Red 1',
        value: '#fef2f2',
        description: 'Lightest red for subtle backgrounds',
        category: 'red-scale',
        usage: ['error backgrounds', 'subtle error states'],
        cssVariable: 'var(--atomix-red-1)'
      },
      {
        name: 'Red 2',
        value: '#fee2e2',
        description: 'Very light red',
        category: 'red-scale',
        usage: ['light error backgrounds'],
        cssVariable: 'var(--atomix-red-2)'
      },
      {
        name: 'Red 3',
        value: '#fecaca',
        description: 'Light red',
        category: 'red-scale',
        usage: ['light error elements'],
        cssVariable: 'var(--atomix-red-3)'
      },
      {
        name: 'Red 4',
        value: '#fca5a5',
        description: 'Medium-light red',
        category: 'red-scale',
        usage: ['medium-light error elements'],
        cssVariable: 'var(--atomix-red-4)'
      },
      {
        name: 'Red 5',
        value: '#f87171',
        description: 'Medium red',
        category: 'red-scale',
        usage: ['medium error elements'],
        cssVariable: 'var(--atomix-red-5)'
      },
      {
        name: 'Red 6',
        value: '#ef4444',
        description: 'Base red color',
        category: 'red-scale',
        usage: ['error buttons', 'error elements', 'destructive actions'],
        cssVariable: 'var(--atomix-red-6)'
      },
      {
        name: 'Red 7',
        value: '#dc2626',
        description: 'Medium-dark red',
        category: 'red-scale',
        usage: ['hover states', 'active error states'],
        cssVariable: 'var(--atomix-red-7)'
      },
      {
        name: 'Red 8',
        value: '#b91c1c',
        description: 'Dark red',
        category: 'red-scale',
        usage: ['pressed states', 'dark error variants'],
        cssVariable: 'var(--atomix-red-8)'
      },
      {
        name: 'Red 9',
        value: '#991b1b',
        description: 'Very dark red',
        category: 'red-scale',
        usage: ['deep error accents', 'dark themes'],
        cssVariable: 'var(--atomix-red-9)'
      },
      {
        name: 'Red 10',
        value: '#7f1d1d',
        description: 'Darkest red',
        category: 'red-scale',
        usage: ['maximum contrast', 'deepest error accents'],
        cssVariable: 'var(--atomix-red-10)'
      },
      // Green Color Scale
      {
        name: 'Green 1',
        value: '#f0fdf4',
        description: 'Lightest green for subtle backgrounds',
        category: 'green-scale',
        usage: ['success backgrounds', 'subtle success states'],
        cssVariable: 'var(--atomix-green-1)'
      },
      {
        name: 'Green 2',
        value: '#dcfce7',
        description: 'Very light green',
        category: 'green-scale',
        usage: ['light success backgrounds'],
        cssVariable: 'var(--atomix-green-2)'
      },
      {
        name: 'Green 3',
        value: '#bbf7d0',
        description: 'Light green',
        category: 'green-scale',
        usage: ['light success elements'],
        cssVariable: 'var(--atomix-green-3)'
      },
      {
        name: 'Green 4',
        value: '#86efac',
        description: 'Medium-light green',
        category: 'green-scale',
        usage: ['medium-light success elements'],
        cssVariable: 'var(--atomix-green-4)'
      },
      {
        name: 'Green 5',
        value: '#4ade80',
        description: 'Medium green',
        category: 'green-scale',
        usage: ['medium success elements'],
        cssVariable: 'var(--atomix-green-5)'
      },
      {
        name: 'Green 6',
        value: '#22c55e',
        description: 'Base green color',
        category: 'green-scale',
        usage: ['success buttons', 'success elements', 'positive actions'],
        cssVariable: 'var(--atomix-green-6)'
      },
      {
        name: 'Green 7',
        value: '#16a34a',
        description: 'Medium-dark green',
        category: 'green-scale',
        usage: ['hover states', 'active success states'],
        cssVariable: 'var(--atomix-green-7)'
      },
      {
        name: 'Green 8',
        value: '#15803d',
        description: 'Dark green',
        category: 'green-scale',
        usage: ['pressed states', 'dark success variants'],
        cssVariable: 'var(--atomix-green-8)'
      },
      {
        name: 'Green 9',
        value: '#166534',
        description: 'Very dark green',
        category: 'green-scale',
        usage: ['deep success accents', 'dark themes'],
        cssVariable: 'var(--atomix-green-9)'
      },
      {
        name: 'Green 10',
        value: '#14532d',
        description: 'Darkest green',
        category: 'green-scale',
        usage: ['maximum contrast', 'deepest success accents'],
        cssVariable: 'var(--atomix-green-10)'
      },
      // Blue Color Scale
      {
        name: 'Blue 1',
        value: '#eff6ff',
        description: 'Lightest blue for subtle backgrounds',
        category: 'blue-scale',
        usage: ['info backgrounds', 'subtle info states'],
        cssVariable: 'var(--atomix-blue-1)'
      },
      {
        name: 'Blue 2',
        value: '#dbeafe',
        description: 'Very light blue',
        category: 'blue-scale',
        usage: ['light info backgrounds'],
        cssVariable: 'var(--atomix-blue-2)'
      },
      {
        name: 'Blue 3',
        value: '#bfdbfe',
        description: 'Light blue',
        category: 'blue-scale',
        usage: ['light info elements'],
        cssVariable: 'var(--atomix-blue-3)'
      },
      {
        name: 'Blue 4',
        value: '#93c5fd',
        description: 'Medium-light blue',
        category: 'blue-scale',
        usage: ['medium-light info elements'],
        cssVariable: 'var(--atomix-blue-4)'
      },
      {
        name: 'Blue 5',
        value: '#60a5fa',
        description: 'Medium blue',
        category: 'blue-scale',
        usage: ['medium info elements'],
        cssVariable: 'var(--atomix-blue-5)'
      },
      {
        name: 'Blue 6',
        value: '#3b82f6',
        description: 'Base blue color',
        category: 'blue-scale',
        usage: ['info buttons', 'info elements', 'informational actions'],
        cssVariable: 'var(--atomix-blue-6)'
      },
      {
        name: 'Blue 7',
        value: '#2563eb',
        description: 'Medium-dark blue',
        category: 'blue-scale',
        usage: ['hover states', 'active info states'],
        cssVariable: 'var(--atomix-blue-7)'
      },
      {
        name: 'Blue 8',
        value: '#1d4ed8',
        description: 'Dark blue',
        category: 'blue-scale',
        usage: ['pressed states', 'dark info variants'],
        cssVariable: 'var(--atomix-blue-8)'
      },
      {
        name: 'Blue 9',
        value: '#1e40af',
        description: 'Very dark blue',
        category: 'blue-scale',
        usage: ['deep info accents', 'dark themes'],
        cssVariable: 'var(--atomix-blue-9)'
      },
      {
        name: 'Blue 10',
        value: '#1e3a8a',
        description: 'Darkest blue',
        category: 'blue-scale',
        usage: ['maximum contrast', 'deepest info accents'],
        cssVariable: 'var(--atomix-blue-10)'
      },
      // Yellow Color Scale
      {
        name: 'Yellow 1',
        value: '#fefce8',
        description: 'Lightest yellow for subtle backgrounds',
        category: 'yellow-scale',
        usage: ['warning backgrounds', 'subtle warning states'],
        cssVariable: 'var(--atomix-yellow-1)'
      },
      {
        name: 'Yellow 2',
        value: '#fef9c3',
        description: 'Very light yellow',
        category: 'yellow-scale',
        usage: ['light warning backgrounds'],
        cssVariable: 'var(--atomix-yellow-2)'
      },
      {
        name: 'Yellow 3',
        value: '#fef08a',
        description: 'Light yellow',
        category: 'yellow-scale',
        usage: ['light warning elements'],
        cssVariable: 'var(--atomix-yellow-3)'
      },
      {
        name: 'Yellow 4',
        value: '#fde047',
        description: 'Medium-light yellow',
        category: 'yellow-scale',
        usage: ['medium-light warning elements'],
        cssVariable: 'var(--atomix-yellow-4)'
      },
      {
        name: 'Yellow 5',
        value: '#facc15',
        description: 'Medium yellow',
        category: 'yellow-scale',
        usage: ['medium warning elements'],
        cssVariable: 'var(--atomix-yellow-5)'
      },
      {
        name: 'Yellow 6',
        value: '#eab308',
        description: 'Base yellow color',
        category: 'yellow-scale',
        usage: ['warning buttons', 'warning elements', 'caution actions'],
        cssVariable: 'var(--atomix-yellow-6)'
      },
      {
        name: 'Yellow 7',
        value: '#ca8a04',
        description: 'Medium-dark yellow',
        category: 'yellow-scale',
        usage: ['hover states', 'active warning states'],
        cssVariable: 'var(--atomix-yellow-7)'
      },
      {
        name: 'Yellow 8',
        value: '#a16207',
        description: 'Dark yellow',
        category: 'yellow-scale',
        usage: ['pressed states', 'dark warning variants'],
        cssVariable: 'var(--atomix-yellow-8)'
      },
      {
        name: 'Yellow 9',
        value: '#854d0e',
        description: 'Very dark yellow',
        category: 'yellow-scale',
        usage: ['deep warning accents', 'dark themes'],
        cssVariable: 'var(--atomix-yellow-9)'
      },
      {
        name: 'Yellow 10',
        value: '#713f12',
        description: 'Darkest yellow',
        category: 'yellow-scale',
        usage: ['maximum contrast', 'deepest warning accents'],
        cssVariable: 'var(--atomix-yellow-10)'
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
        name: 'Invert Text Emphasis',
        value: '#111827',
        description: 'Inverted text color for dark backgrounds',
        category: 'text',
        usage: ['dark backgrounds', 'inverted text'],
        cssVariable: 'var(--atomix-invert-text-emphasis)'
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
      {
        name: 'Light Text Emphasis',
        value: '#f9fafb',
        description: 'Light color for text',
        category: 'text',
        usage: ['light text', 'subtle text'],
        cssVariable: 'var(--atomix-light-text-emphasis)'
      },
      {
        name: 'Dark Text Emphasis',
        value: '#1f2937',
        description: 'Dark color for text',
        category: 'text',
        usage: ['dark text', 'high contrast text'],
        cssVariable: 'var(--atomix-dark-text-emphasis)'
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
        value: '#fff',
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
        name: 'Invert Background Subtle',
        value: '#111827',
        description: 'Inverted background color',
        category: 'background',
        usage: ['dark sections', 'inverted backgrounds'],
        cssVariable: 'var(--atomix-invert-bg-subtle)'
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
    id: 'border-colors',
    title: 'Border Colors',
    description: 'Border color tokens for semantic border styling',
    tokens: [
      {
        name: 'Primary Border Subtle',
        value: '#e5e7eb',
        description: 'Primary border color',
        category: 'border',
        usage: ['default borders', 'standard borders'],
        cssVariable: 'var(--atomix-primary-border-subtle)'
      },
      {
        name: 'Secondary Border Subtle',
        value: '#111827',
        description: 'Secondary border color',
        category: 'border',
        usage: ['secondary borders', 'dark borders'],
        cssVariable: 'var(--atomix-secondary-border-subtle)'
      },
      {
        name: 'Success Border Subtle',
        value: '#22c55e',
        description: 'Success border color',
        category: 'border',
        usage: ['success states', 'valid borders'],
        cssVariable: 'var(--atomix-success-border-subtle)'
      },
      {
        name: 'Error Border Subtle',
        value: '#ef4444',
        description: 'Error border color',
        category: 'border',
        usage: ['error states', 'invalid borders'],
        cssVariable: 'var(--atomix-error-border-subtle)'
      },
      {
        name: 'Warning Border Subtle',
        value: '#eab308',
        description: 'Warning border color',
        category: 'border',
        usage: ['warning states', 'caution borders'],
        cssVariable: 'var(--atomix-warning-border-subtle)'
      },
      {
        name: 'Info Border Subtle',
        value: '#3b82f6',
        description: 'Info border color',
        category: 'border',
        usage: ['info states', 'informational borders'],
        cssVariable: 'var(--atomix-info-border-subtle)'
      },
      {
        name: 'Brand Border Subtle',
        value: '#7c3aed',
        description: 'Brand border color',
        category: 'border',
        usage: ['brand elements', 'primary borders'],
        cssVariable: 'var(--atomix-brand-border-subtle)'
      },
      {
        name: 'Light Border Subtle',
        value: '#f9fafb',
        description: 'Light border color',
        category: 'border',
        usage: ['light borders', 'subtle borders'],
        cssVariable: 'var(--atomix-light-border-subtle)'
      },
      {
        name: 'Dark Border Subtle',
        value: '#1f2937',
        description: 'Dark border color',
        category: 'border',
        usage: ['dark borders', 'high contrast borders'],
        cssVariable: 'var(--atomix-dark-border-subtle)'
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
        name: 'Light Hover',
        value: '#f3f4f6',
        description: 'Light color for hover states',
        category: 'hover',
        usage: ['light button hover'],
        cssVariable: 'var(--atomix-light-hover)'
      },
      {
        name: 'Dark Hover',
        value: '#4b5563',
        description: 'Dark color for hover states',
        category: 'hover',
        usage: ['dark button hover'],
        cssVariable: 'var(--atomix-dark-hover)'
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
        name: 'Light Gradient',
        value: 'linear-gradient(135deg, #f9fafb, #f3f4f6, #e5e7eb)',
        description: 'Light gradient',
        category: 'gradient',
        usage: ['light backgrounds', 'subtle sections'],
        cssVariable: 'var(--atomix-light-gradient)'
      },
      {
        name: 'Dark Gradient',
        value: 'linear-gradient(135deg, #4b5563, #1f2937, #000)',
        description: 'Dark gradient',
        category: 'gradient',
        usage: ['dark backgrounds', 'dark sections'],
        cssVariable: 'var(--atomix-dark-gradient)'
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
      {
        name: 'Gradient',
        value: 'linear-gradient(135deg, #f9fafb, #f3f4f6, #e5e7eb)',
        description: 'Default gradient',
        category: 'gradient',
        usage: ['default backgrounds', 'general sections'],
        cssVariable: 'var(--atomix-gradient)'
      },
    ]
  },
  {
    id: 'spacing',
    title: 'Spacing',
    description: 'Consistent spacing scale based on rem units',
    tokens: [
      {
        name: 'Spacing 0',
        value: '0rem',
        description: 'No spacing',
        category: 'spacing',
        usage: ['reset margins', 'no gaps'],
        cssVariable: 'var(--atomix-spacing-0)'
      },
      {
        name: 'Spacing 1',
        value: '0.25rem',
        description: 'Extra small spacing (4px)',
        category: 'spacing',
        usage: ['icon gaps', 'tight padding', 'fine adjustments'],
        cssVariable: 'var(--atomix-spacing-1)'
      },
      {
        name: 'Spacing PX 6',
        value: '0.375rem',
        description: 'Pixel-based spacing (6px)',
        category: 'spacing',
        usage: ['precise spacing', 'fine adjustments'],
        cssVariable: 'var(--atomix-spacing-px-6)'
      },
      {
        name: 'Spacing 2',
        value: '0.5rem',
        description: 'Small spacing (8px)',
        category: 'spacing',
        usage: ['button padding', 'form field gaps', 'compact layouts'],
        cssVariable: 'var(--atomix-spacing-2)'
      },
      {
        name: 'Spacing PX 10',
        value: '0.625rem',
        description: 'Pixel-based spacing (10px)',
        category: 'spacing',
        usage: ['precise spacing', 'fine adjustments'],
        cssVariable: 'var(--atomix-spacing-px-10)'
      },
      {
        name: 'Spacing 3',
        value: '0.75rem',
        description: 'Medium-small spacing (12px)',
        category: 'spacing',
        usage: ['compact padding', 'small gaps'],
        cssVariable: 'var(--atomix-spacing-3)'
      },
      {
        name: 'Spacing PX 14',
        value: '0.875rem',
        description: 'Pixel-based spacing (14px)',
        category: 'spacing',
        usage: ['precise spacing', 'fine adjustments'],
        cssVariable: 'var(--atomix-spacing-px-14)'
      },
      {
        name: 'Spacing 4',
        value: '1rem',
        description: 'Medium spacing (16px)',
        category: 'spacing',
        usage: ['default padding', 'standard margins', 'content spacing'],
        cssVariable: 'var(--atomix-spacing-4)'
      },
      {
        name: 'Spacing 5',
        value: '1.25rem',
        description: 'Medium-large spacing (20px)',
        category: 'spacing',
        usage: ['generous padding', 'medium margins'],
        cssVariable: 'var(--atomix-spacing-5)'
      },
      {
        name: 'Spacing PX 22',
        value: '1.375rem',
        description: 'Pixel-based spacing (22px)',
        category: 'spacing',
        usage: ['precise spacing', 'fine adjustments'],
        cssVariable: 'var(--atomix-spacing-px-22)'
      },
      {
        name: 'Spacing 6',
        value: '1.5rem',
        description: 'Large spacing (24px)',
        category: 'spacing',
        usage: ['section padding', 'card spacing', 'generous margins'],
        cssVariable: 'var(--atomix-spacing-6)'
      },
      {
        name: 'Spacing 7',
        value: '1.75rem',
        description: 'Extra large spacing (28px)',
        category: 'spacing',
        usage: ['large padding', 'generous margins'],
        cssVariable: 'var(--atomix-spacing-7)'
      },
      {
        name: 'Spacing PX 30',
        value: '1.875rem',
        description: 'Pixel-based spacing (30px)',
        category: 'spacing',
        usage: ['precise spacing', 'fine adjustments'],
        cssVariable: 'var(--atomix-spacing-px-30)'
      },
      {
        name: 'Spacing 8',
        value: '2rem',
        description: 'Extra large spacing (32px)',
        category: 'spacing',
        usage: ['page sections', 'major components', 'hero spacing'],
        cssVariable: 'var(--atomix-spacing-8)'
      },
      {
        name: 'Spacing 9',
        value: '2.25rem',
        description: 'Double extra large spacing (36px)',
        category: 'spacing',
        usage: ['large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-9)'
      },
      {
        name: 'Spacing 10',
        value: '2.5rem',
        description: 'Triple extra large spacing (40px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-10)'
      },
      {
        name: 'Spacing 11',
        value: '2.75rem',
        description: 'Quadruple extra large spacing (44px)',
        category: 'spacing',
        usage: ['maximum spacing', 'hero sections'],
        cssVariable: 'var(--atomix-spacing-11)'
      },
      {
        name: 'Spacing 12',
        value: '3rem',
        description: 'Quintuple extra large spacing (48px)',
        category: 'spacing',
        usage: ['maximum spacing', 'hero sections'],
        cssVariable: 'var(--atomix-spacing-12)'
      },
      {
        name: 'Spacing 14',
        value: '3.5rem',
        description: 'Extra large spacing (56px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-14)'
      },
      {
        name: 'Spacing 16',
        value: '4rem',
        description: 'Extra large spacing (64px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-16)'
      },
      {
        name: 'Spacing 20',
        value: '5rem',
        description: 'Extra large spacing (80px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-20)'
      },
      {
        name: 'Spacing 24',
        value: '6rem',
        description: 'Extra large spacing (96px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-24)'
      },
      {
        name: 'Spacing 28',
        value: '7rem',
        description: 'Extra large spacing (112px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-28)'
      },
      {
        name: 'Spacing 32',
        value: '8rem',
        description: 'Extra large spacing (128px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-32)'
      },
      {
        name: 'Spacing 36',
        value: '9rem',
        description: 'Extra large spacing (144px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-36)'
      },
      {
        name: 'Spacing 40',
        value: '10rem',
        description: 'Extra large spacing (160px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-40)'
      },
      {
        name: 'Spacing 44',
        value: '11rem',
        description: 'Extra large spacing (176px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-44)'
      },
      {
        name: 'Spacing 48',
        value: '12rem',
        description: 'Extra large spacing (192px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-48)'
      },
      {
        name: 'Spacing 52',
        value: '13rem',
        description: 'Extra large spacing (208px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-52)'
      },
      {
        name: 'Spacing 56',
        value: '14rem',
        description: 'Extra large spacing (224px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-56)'
      },
      {
        name: 'Spacing 60',
        value: '15rem',
        description: 'Extra large spacing (240px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-60)'
      },
      {
        name: 'Spacing 64',
        value: '16rem',
        description: 'Extra large spacing (256px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-64)'
      },
      {
        name: 'Spacing 72',
        value: '18rem',
        description: 'Extra large spacing (288px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-72)'
      },
      {
        name: 'Spacing 80',
        value: '20rem',
        description: 'Extra large spacing (320px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-80)'
      },
      {
        name: 'Spacing 90',
        value: '22.5rem',
        description: 'Extra large spacing (360px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-90)'
      },
      {
        name: 'Spacing 200',
        value: '50rem',
        description: 'Extra large spacing (800px)',
        category: 'spacing',
        usage: ['very large sections', 'major separations'],
        cssVariable: 'var(--atomix-spacing-200)'
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
        value: '1rem',
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
        name: 'Body Color',
        value: '#111827',
        description: 'Base body text color',
        category: 'text',
        usage: ['body text', 'default text'],
        cssVariable: 'var(--atomix-body-color)'
      },
      {
        name: 'Body Background',
        value: '#fff',
        description: 'Base body background color',
        category: 'background',
        usage: ['page background', 'default background'],
        cssVariable: 'var(--atomix-body-bg)'
      },
      {
        name: 'Heading Color',
        value: '#111827',
        description: 'Base heading text color',
        category: 'text',
        usage: ['headings', 'titles'],
        cssVariable: 'var(--atomix-heading-color)'
      },
      {
        name: 'Link Color',
        value: '#7c3aed',
        description: 'Base link color',
        category: 'text',
        usage: ['links', 'anchors'],
        cssVariable: 'var(--atomix-link-color)'
      },
      {
        name: 'Link Hover Color',
        value: '#5512c8',
        description: 'Link hover color',
        category: 'text',
        usage: ['link hover states'],
        cssVariable: 'var(--atomix-link-hover-color)'
      },
      {
        name: 'Link Decoration',
        value: 'none',
        description: 'Link text decoration',
        category: 'text',
        usage: ['link styling'],
        cssVariable: 'var(--atomix-link-decoration)'
      },
      {
        name: 'Highlight Background',
        value: '#fef08a',
        description: 'Text highlight background color',
        category: 'background',
        usage: ['text highlights', 'mark elements'],
        cssVariable: 'var(--atomix-highlight-bg)'
      },
      {
        name: 'Font Size XL',
        value: '1.5rem',
        description: 'Extra large text for headings',
        category: 'font-size',
        usage: ['large headings', 'section titles'],
        cssVariable: 'var(--atomix-font-size-xl)'
      },
      {
        name: 'Font Size 2XL',
        value: '2rem',
        description: 'Double extra large text for display headings',
        category: 'font-size',
        usage: ['display headings', 'hero titles'],
        cssVariable: 'var(--atomix-font-size-2xl)'
      },
      {
        name: 'Display 1',
        value: '4rem',
        description: 'Display size for large headings',
        category: 'font-size',
        usage: ['hero headings', 'large display text'],
        cssVariable: 'var(--atomix-display-1)'
      },
      {
        name: 'Font Weight Light',
        value: '300',
        description: 'Light font weight',
        category: 'font-weight',
        usage: ['light text', 'subtle emphasis'],
        cssVariable: 'var(--atomix-font-weight-light)'
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
        name: 'Font Weight Heavy',
        value: '800',
        description: 'Heavy font weight',
        category: 'font-weight',
        usage: ['heavy headings', 'strong emphasis'],
        cssVariable: 'var(--atomix-font-weight-heavy)'
      },
      {
        name: 'Font Weight Black',
        value: '900',
        description: 'Black font weight',
        category: 'font-weight',
        usage: ['black headings', 'maximum emphasis'],
        cssVariable: 'var(--atomix-font-weight-black)'
      },
      {
        name: 'Line Height Base',
        value: '1.2',
        description: 'Base line height',
        category: 'line-height',
        usage: ['body text', 'default line height'],
        cssVariable: 'var(--atomix-line-height-base)'
      },
      {
        name: 'Line Height SM',
        value: '1.43',
        description: 'Small line height',
        category: 'line-height',
        usage: ['compact text', 'tight spacing'],
        cssVariable: 'var(--atomix-line-height-sm)'
      },
      {
        name: 'Line Height LG',
        value: '1.56',
        description: 'Large line height',
        category: 'line-height',
        usage: ['comfortable reading', 'relaxed spacing'],
        cssVariable: 'var(--atomix-line-height-lg)'
      },
      {
        name: 'Letter Spacing H1',
        value: '-1px',
        description: 'Letter spacing for H1 headings',
        category: 'letter-spacing',
        usage: ['H1 headings', 'large titles'],
        cssVariable: 'var(--atomix-letter-spacing-h1)'
      },
      {
        name: 'Letter Spacing H2',
        value: '-1px',
        description: 'Letter spacing for H2 headings',
        category: 'letter-spacing',
        usage: ['H2 headings', 'section titles'],
        cssVariable: 'var(--atomix-letter-spacing-h2)'
      },
      {
        name: 'Letter Spacing H3',
        value: '-1px',
        description: 'Letter spacing for H3 headings',
        category: 'letter-spacing',
        usage: ['H3 headings', 'subsection titles'],
        cssVariable: 'var(--atomix-letter-spacing-h3)'
      },
      {
        name: 'Letter Spacing H4',
        value: '-0.5px',
        description: 'Letter spacing for H4 headings',
        category: 'letter-spacing',
        usage: ['H4 headings', 'small titles'],
        cssVariable: 'var(--atomix-letter-spacing-h4)'
      },
      {
        name: 'Letter Spacing H5',
        value: '-0.5px',
        description: 'Letter spacing for H5 headings',
        category: 'letter-spacing',
        usage: ['H5 headings', 'small titles'],
        cssVariable: 'var(--atomix-letter-spacing-h5)'
      },
      {
        name: 'Letter Spacing H6',
        value: '-0.5px',
        description: 'Letter spacing for H6 headings',
        category: 'letter-spacing',
        usage: ['H6 headings', 'small titles'],
        cssVariable: 'var(--atomix-letter-spacing-h6)'
      },
    ]
  },
  {
    id: 'border-radius',
    title: 'Border Radius',
    description: 'Consistent border radius scale for rounded corners',
    tokens: [
      {
        name: 'Border Radius SM',
        value: '0.25rem',
        description: 'Small border radius for subtle rounding',
        category: 'border-radius',
        usage: ['form fields', 'subtle rounding', 'small elements'],
        cssVariable: 'var(--atomix-border-radius-sm)'
      },
      {
        name: 'Border Radius',
        value: '0.5rem',
        description: 'Default border radius for standard rounding',
        category: 'border-radius',
        usage: ['buttons', 'cards', 'standard elements'],
        cssVariable: 'var(--atomix-border-radius)'
      },
      {
        name: 'Border Radius LG',
        value: '0.625rem',
        description: 'Large border radius for generous rounding',
        category: 'border-radius',
        usage: ['large buttons', 'prominent cards', 'generous rounding'],
        cssVariable: 'var(--atomix-border-radius-lg)'
      },
      {
        name: 'Border Radius XL',
        value: '0.75rem',
        description: 'Extra large border radius for significant rounding',
        category: 'border-radius',
        usage: ['hero elements', 'significant rounding', 'modern look'],
        cssVariable: 'var(--atomix-border-radius-xl)'
      },
      {
        name: 'Border Radius XXL',
        value: '1rem',
        description: 'Extra extra large border radius',
        category: 'border-radius',
        usage: ['large cards', 'prominent elements'],
        cssVariable: 'var(--atomix-border-radius-xxl)'
      },
      {
        name: 'Border Radius 2XL',
        value: '1rem',
        description: 'Double extra large border radius (alias for XXL)',
        category: 'border-radius',
        usage: ['large cards', 'prominent elements'],
        cssVariable: 'var(--atomix-border-radius-2xl)'
      },
      {
        name: 'Border Radius 3XL',
        value: '1.5rem',
        description: 'Triple extra large border radius',
        category: 'border-radius',
        usage: ['very large elements', 'hero sections'],
        cssVariable: 'var(--atomix-border-radius-3xl)'
      },
      {
        name: 'Border Radius 4XL',
        value: '2rem',
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
        name: 'Box Shadow',
        value: '0 8px 16px rgba(0, 0, 0, 0.15)',
        description: 'Default shadow for standard elevation',
        category: 'shadow',
        usage: ['buttons', 'dropdowns', 'standard elevation'],
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
    id: 'borders',
    title: 'Borders',
    description: 'Border width, style, and color tokens',
    tokens: [
      {
        name: 'Border Width',
        value: '1px',
        description: 'Default border width',
        category: 'border',
        usage: ['default borders', 'standard borders'],
        cssVariable: 'var(--atomix-border-width)'
      },
      {
        name: 'Border Style',
        value: 'solid',
        description: 'Default border style',
        category: 'border',
        usage: ['default borders', 'standard borders'],
        cssVariable: 'var(--atomix-border-style)'
      },
      {
        name: 'Border Color',
        value: '#e5e7eb',
        description: 'Default border color',
        category: 'border',
        usage: ['default borders', 'standard borders'],
        cssVariable: 'var(--atomix-border-color)'
      },
      {
        name: 'Border Color Translucent',
        value: '#e5e7eb2d',
        description: 'Translucent border color',
        category: 'border',
        usage: ['translucent borders', 'subtle borders'],
        cssVariable: 'var(--atomix-border-color-translucent)'
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
      {
        name: 'Focus Ring Width',
        value: '3px',
        description: 'Width of focus ring',
        category: 'form',
        usage: ['focus states', 'accessibility'],
        cssVariable: 'var(--atomix-focus-ring-width)'
      },
      {
        name: 'Focus Ring Offset',
        value: '2px',
        description: 'Offset of focus ring',
        category: 'form',
        usage: ['focus states', 'accessibility'],
        cssVariable: 'var(--atomix-focus-ring-offset)'
      },
      {
        name: 'Focus Ring Opacity',
        value: '0.25',
        description: 'Opacity of focus ring',
        category: 'form',
        usage: ['focus states', 'accessibility'],
        cssVariable: 'var(--atomix-focus-ring-opacity)'
      },
    ]
  },
  {
    id: 'z-index',
    title: 'Z-Index',
    description: 'Z-index layers for proper stacking context',
    tokens: [
      {
        name: 'Z-Index N1',
        value: '-1',
        description: 'Negative z-index layer',
        category: 'z-index',
        usage: ['background elements', 'negative layer'],
        cssVariable: 'var(--atomix-z-n1)'
      },
      {
        name: 'Z-Index 0',
        value: '0',
        description: 'Base z-index layer',
        category: 'z-index',
        usage: ['default elements', 'base layer'],
        cssVariable: 'var(--atomix-z-0)'
      },
      {
        name: 'Z-Index 1',
        value: '1',
        description: 'First elevated layer',
        category: 'z-index',
        usage: ['slightly elevated elements'],
        cssVariable: 'var(--atomix-z-1)'
      },
      {
        name: 'Z-Index 2',
        value: '2',
        description: 'Second elevated layer',
        category: 'z-index',
        usage: ['elevated elements'],
        cssVariable: 'var(--atomix-z-2)'
      },
      {
        name: 'Z-Index 3',
        value: '3',
        description: 'Third elevated layer',
        category: 'z-index',
        usage: ['more elevated elements'],
        cssVariable: 'var(--atomix-z-3)'
      },
      {
        name: 'Z-Index 4',
        value: '4',
        description: 'Fourth elevated layer',
        category: 'z-index',
        usage: ['highly elevated elements'],
        cssVariable: 'var(--atomix-z-4)'
      },
      {
        name: 'Z-Index 5',
        value: '5',
        description: 'Fifth elevated layer',
        category: 'z-index',
        usage: ['very highly elevated elements'],
        cssVariable: 'var(--atomix-z-5)'
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
        name: 'Z-Index Modal',
        value: '1040',
        description: 'Z-index for modal dialogs',
        category: 'z-index',
        usage: ['modals', 'dialogs'],
        cssVariable: 'var(--atomix-z-modal)'
      },
      {
        name: 'Z-Index Popover',
        value: '1050',
        description: 'Z-index for popover elements',
        category: 'z-index',
        usage: ['popovers', 'tooltips'],
        cssVariable: 'var(--atomix-z-popover)'
      },
      {
        name: 'Z-Index Tooltip',
        value: '1060',
        description: 'Z-index for tooltip elements',
        category: 'z-index',
        usage: ['tooltips', 'highest layer'],
        cssVariable: 'var(--atomix-z-tooltip)'
      },
      {
        name: 'Z-Index Drawer',
        value: '1070',
        description: 'Z-index for drawer elements',
        category: 'z-index',
        usage: ['drawers', 'sidebars', 'highest layer'],
        cssVariable: 'var(--atomix-z-drawer)'
      },
    ]
  },
  {
    id: 'breakpoints',
    title: 'Breakpoints',
    description: 'Responsive breakpoint tokens for media queries',
    tokens: [
      {
        name: 'Breakpoint XS',
        value: '0',
        description: 'Extra small breakpoint (mobile)',
        category: 'breakpoint',
        usage: ['mobile devices', 'small screens'],
        cssVariable: 'var(--atomix-breakpoint-xs)'
      },
      {
        name: 'Breakpoint SM',
        value: '576px',
        description: 'Small breakpoint (large mobile)',
        category: 'breakpoint',
        usage: ['large mobile devices', 'small tablets'],
        cssVariable: 'var(--atomix-breakpoint-sm)'
      },
      {
        name: 'Breakpoint MD',
        value: '768px',
        description: 'Medium breakpoint (tablet)',
        category: 'breakpoint',
        usage: ['tablets', 'small laptops'],
        cssVariable: 'var(--atomix-breakpoint-md)'
      },
      {
        name: 'Breakpoint LG',
        value: '992px',
        description: 'Large breakpoint (desktop)',
        category: 'breakpoint',
        usage: ['desktops', 'large tablets'],
        cssVariable: 'var(--atomix-breakpoint-lg)'
      },
      {
        name: 'Breakpoint XL',
        value: '1200px',
        description: 'Extra large breakpoint (large desktop)',
        category: 'breakpoint',
        usage: ['large desktops', 'wide screens'],
        cssVariable: 'var(--atomix-breakpoint-xl)'
      },
      {
        name: 'Breakpoint XXL',
        value: '1440px',
        description: 'Extra extra large breakpoint (ultra wide)',
        category: 'breakpoint',
        usage: ['ultra wide screens', 'large displays'],
        cssVariable: 'var(--atomix-breakpoint-xxl)'
      },
    ]
  },
  {
    id: 'transitions',
    title: 'Transitions',
    description: 'Transition duration and easing tokens for animations',
    tokens: [
      {
        name: 'Transition Duration Fast',
        value: '0.15s',
        description: 'Fast transition duration',
        category: 'transition',
        usage: ['quick animations', 'hover effects'],
        cssVariable: 'var(--atomix-transition-duration-fast)'
      },
      {
        name: 'Transition Duration Base',
        value: '0.3s',
        description: 'Base transition duration',
        category: 'transition',
        usage: ['standard animations', 'default transitions'],
        cssVariable: 'var(--atomix-transition-duration-base)'
      },
      {
        name: 'Transition Duration Slow',
        value: '0.5s',
        description: 'Slow transition duration',
        category: 'transition',
        usage: ['slow animations', 'smooth transitions'],
        cssVariable: 'var(--atomix-transition-duration-slow)'
      },
      {
        name: 'Transition Duration Slower',
        value: '0.7s',
        description: 'Slower transition duration',
        category: 'transition',
        usage: ['very slow animations', 'extended transitions'],
        cssVariable: 'var(--atomix-transition-duration-slower)'
      },
      {
        name: 'Easing Base',
        value: 'cubic-bezier(0.23, 1, 0.32, 1)',
        description: 'Base easing function',
        category: 'transition',
        usage: ['standard animations', 'default easing'],
        cssVariable: 'var(--atomix-easing-base)'
      },
      {
        name: 'Easing Ease In Out',
        value: 'cubic-bezier(0.4, 0, 0.2, 1)',
        description: 'Ease in-out easing function',
        category: 'transition',
        usage: ['smooth animations', 'ease in-out transitions'],
        cssVariable: 'var(--atomix-easing-ease-in-out)'
      },
      {
        name: 'Easing Ease Out',
        value: 'cubic-bezier(0, 0, 0.2, 1)',
        description: 'Ease out easing function',
        category: 'transition',
        usage: ['ease out animations', 'smooth endings'],
        cssVariable: 'var(--atomix-easing-ease-out)'
      },
      {
        name: 'Easing Ease In',
        value: 'cubic-bezier(0.4, 0, 1, 1)',
        description: 'Ease in easing function',
        category: 'transition',
        usage: ['ease in animations', 'smooth starts'],
        cssVariable: 'var(--atomix-easing-ease-in)'
      },
      {
        name: 'Easing Ease Linear',
        value: 'linear',
        description: 'Linear easing function',
        category: 'transition',
        usage: ['linear animations', 'constant speed'],
        cssVariable: 'var(--atomix-easing-ease-linear)'
      },
      {
        name: 'Transition Fast',
        value: 'all 0.15s cubic-bezier(0.23, 1, 0.32, 1)',
        description: 'Fast transition shorthand',
        category: 'transition',
        usage: ['quick transitions', 'hover effects'],
        cssVariable: 'var(--atomix-transition-fast)'
      },
      {
        name: 'Transition Base',
        value: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
        description: 'Base transition shorthand',
        category: 'transition',
        usage: ['standard transitions', 'default animations'],
        cssVariable: 'var(--atomix-transition-base)'
      },
      {
        name: 'Transition Slow',
        value: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        description: 'Slow transition shorthand',
        category: 'transition',
        usage: ['slow transitions', 'smooth animations'],
        cssVariable: 'var(--atomix-transition-slow)'
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

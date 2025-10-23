export interface DesignToken {
  name: string;
  value: string;
  description: string;
  category: string;
  type: 'color' | 'spacing' | 'typography' | 'border' | 'shadow' | 'breakpoint';
}

export const designTokens: DesignToken[] = [
  // Primary Colors
  { name: '$primary-6', value: '#7c3aed', description: 'Balanced primary purple', category: 'colors', type: 'color' },
  { name: '$primary-5', value: '#9c63e9', description: 'Primary purple light', category: 'colors', type: 'color' },
  { name: '$primary-4', value: '#b88cef', description: 'Primary purple lighter', category: 'colors', type: 'color' },
  { name: '$primary-7', value: '#6425ca', description: 'Primary purple dark', category: 'colors', type: 'color' },
  { name: '$primary-8', value: '#501ba6', description: 'Primary purple darker', category: 'colors', type: 'color' },
  
  // Semantic Colors
  { name: '$success', value: '#22c55e', description: 'Success state color', category: 'colors', type: 'color' },
  { name: '$error', value: '#ef4444', description: 'Error state color', category: 'colors', type: 'color' },
  { name: '$warning', value: '#eab308', description: 'Warning state color', category: 'colors', type: 'color' },
  { name: '$info', value: '#3b82f6', description: 'Info state color', category: 'colors', type: 'color' },
  
  // Gray Scale
  { name: '$gray-1', value: '#f9fafb', description: 'Lightest gray', category: 'colors', type: 'color' },
  { name: '$gray-2', value: '#f3f4f6', description: 'Very light gray', category: 'colors', type: 'color' },
  { name: '$gray-3', value: '#e5e7eb', description: 'Light gray', category: 'colors', type: 'color' },
  { name: '$gray-5', value: '#9ca3af', description: 'Medium gray', category: 'colors', type: 'color' },
  { name: '$gray-6', value: '#6b7280', description: 'Dark gray', category: 'colors', type: 'color' },
  { name: '$gray-8', value: '#374151', description: 'Darker gray', category: 'colors', type: 'color' },
  { name: '$gray-9', value: '#1f2937', description: 'Very dark gray', category: 'colors', type: 'color' },
  { name: '$gray-10', value: '#111827', description: 'Darkest gray', category: 'colors', type: 'color' },
  
  // Text Colors
  { name: '$primary-text', value: '#111827', description: 'Primary text color', category: 'colors', type: 'color' },
  { name: '$secondary-text', value: '#374151', description: 'Secondary text color', category: 'colors', type: 'color' },
  { name: '$tertiary-text', value: '#6b7280', description: 'Tertiary text color', category: 'colors', type: 'color' },
  { name: '$disabled-text', value: '#9ca3af', description: 'Disabled text color', category: 'colors', type: 'color' },
  
  // Background Colors
  { name: '$primary-bg', value: '#ffffff', description: 'Primary background', category: 'colors', type: 'color' },
  { name: '$secondary-bg', value: '#e5e7eb', description: 'Secondary background', category: 'colors', type: 'color' },
  { name: '$tertiary-bg', value: '#d1d5db', description: 'Tertiary background', category: 'colors', type: 'color' },
  
  // Spacing Scale
  { name: 'spacing-0', value: '0rem', description: 'No spacing (0px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-1', value: '0.25rem', description: 'Tiny spacing (4px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-2', value: '0.5rem', description: 'Extra small spacing (8px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-3', value: '0.75rem', description: 'Small spacing (12px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-4', value: '1rem', description: 'Base spacing (16px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-5', value: '1.25rem', description: 'Medium spacing (20px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-6', value: '1.5rem', description: 'Large spacing (24px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-8', value: '2rem', description: 'Extra large spacing (32px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-10', value: '2.5rem', description: '2XL spacing (40px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-12', value: '3rem', description: '3XL spacing (48px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-16', value: '4rem', description: '4XL spacing (64px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-20', value: '5rem', description: '5XL spacing (80px)', category: 'spacing', type: 'spacing' },
  { name: 'spacing-24', value: '6rem', description: '6XL spacing (96px)', category: 'spacing', type: 'spacing' },
  
  // Typography - Font Families
  { name: '$font-family-base', value: 'Roboto, sans-serif', description: 'Base font family', category: 'typography', type: 'typography' },
  { name: '$font-family-monospace', value: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace', description: 'Monospace font family', category: 'typography', type: 'typography' },
  
  // Typography - Font Sizes
  { name: '$font-size-xs', value: '0.75rem', description: 'Extra small (12px)', category: 'typography', type: 'typography' },
  { name: '$font-size-sm', value: '0.875rem', description: 'Small (14px)', category: 'typography', type: 'typography' },
  { name: '$font-size-base', value: '1rem', description: 'Base (16px)', category: 'typography', type: 'typography' },
  { name: '$font-size-md', value: '1.125rem', description: 'Medium (18px)', category: 'typography', type: 'typography' },
  { name: '$font-size-lg', value: '1.25rem', description: 'Large (20px)', category: 'typography', type: 'typography' },
  { name: '$font-size-xl', value: '1.5rem', description: 'Extra large (24px)', category: 'typography', type: 'typography' },
  { name: '$font-size-2xl', value: '2rem', description: '2XL (32px)', category: 'typography', type: 'typography' },
  
  // Typography - Headings
  { name: '$h1-font-size', value: '2.5rem', description: 'H1 heading (40px)', category: 'typography', type: 'typography' },
  { name: '$h2-font-size', value: '2rem', description: 'H2 heading (32px)', category: 'typography', type: 'typography' },
  { name: '$h3-font-size', value: '1.5rem', description: 'H3 heading (24px)', category: 'typography', type: 'typography' },
  { name: '$h4-font-size', value: '1.25rem', description: 'H4 heading (20px)', category: 'typography', type: 'typography' },
  { name: '$h5-font-size', value: '1.125rem', description: 'H5 heading (18px)', category: 'typography', type: 'typography' },
  { name: '$h6-font-size', value: '1rem', description: 'H6 heading (16px)', category: 'typography', type: 'typography' },
  
  // Typography - Font Weights
  { name: '$font-weight-light', value: '300', description: 'Light weight', category: 'typography', type: 'typography' },
  { name: '$font-weight-normal', value: '400', description: 'Normal weight', category: 'typography', type: 'typography' },
  { name: '$font-weight-medium', value: '500', description: 'Medium weight', category: 'typography', type: 'typography' },
  { name: '$font-weight-semibold', value: '600', description: 'Semibold weight', category: 'typography', type: 'typography' },
  { name: '$font-weight-bold', value: '700', description: 'Bold weight', category: 'typography', type: 'typography' },
  
  // Border Radius
  { name: '$border-radius-sm', value: '0.25rem', description: 'Small radius (4px)', category: 'border', type: 'border' },
  { name: '$border-radius', value: '0.5rem', description: 'Default radius (8px)', category: 'border', type: 'border' },
  { name: '$border-radius-lg', value: '0.625rem', description: 'Large radius (10px)', category: 'border', type: 'border' },
  { name: '$border-radius-xl', value: '0.75rem', description: 'Extra large radius (12px)', category: 'border', type: 'border' },
  { name: '$border-radius-xxl', value: '1rem', description: '2XL radius (16px)', category: 'border', type: 'border' },
  { name: '$border-radius-3xl', value: '1.5rem', description: '3XL radius (24px)', category: 'border', type: 'border' },
  { name: '$border-radius-4xl', value: '2rem', description: '4XL radius (32px)', category: 'border', type: 'border' },
  { name: '$border-radius-pill', value: '50rem', description: 'Pill shape (800px)', category: 'border', type: 'border' },
  
  // Box Shadows
  { name: '$box-shadow-xs', value: '0px 1px 2px 0px rgba(45, 54, 67, 0.04), 0px 2px 4px 0px rgba(45, 54, 67, 0.08)', description: 'Extra small shadow', category: 'shadow', type: 'shadow' },
  { name: '$box-shadow-sm', value: '0 2px 4px rgba(0, 0, 0, 0.075)', description: 'Small shadow', category: 'shadow', type: 'shadow' },
  { name: '$box-shadow-md', value: '0 4px 8px rgba(0, 0, 0, 0.1)', description: 'Medium shadow', category: 'shadow', type: 'shadow' },
  { name: '$box-shadow', value: '0 8px 16px rgba(0, 0, 0, 0.15)', description: 'Default shadow', category: 'shadow', type: 'shadow' },
  { name: '$box-shadow-lg', value: '0 16px 48px rgba(0, 0, 0, 0.175)', description: 'Large shadow', category: 'shadow', type: 'shadow' },
  { name: '$box-shadow-xl', value: '0px 16px 64px -8px rgba(45, 54, 67, 0.14)', description: 'Extra large shadow', category: 'shadow', type: 'shadow' },
  
  // Breakpoints
  { name: 'breakpoint-xs', value: '0px', description: 'Extra small devices', category: 'breakpoint', type: 'breakpoint' },
  { name: 'breakpoint-sm', value: '576px', description: 'Small devices', category: 'breakpoint', type: 'breakpoint' },
  { name: 'breakpoint-md', value: '768px', description: 'Medium devices', category: 'breakpoint', type: 'breakpoint' },
  { name: 'breakpoint-lg', value: '992px', description: 'Large devices', category: 'breakpoint', type: 'breakpoint' },
  { name: 'breakpoint-xl', value: '1200px', description: 'Extra large devices', category: 'breakpoint', type: 'breakpoint' },
  { name: 'breakpoint-xxl', value: '1440px', description: '2XL devices', category: 'breakpoint', type: 'breakpoint' }
];
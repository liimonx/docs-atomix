export interface DesignToken {
  name: string;
  value: string;
  description: string;
  category: string;
  type: 'color' | 'spacing' | 'typography' | 'border' | 'shadow' | 'breakpoint';
}

export const designTokens: DesignToken[] = [
  // Colors
  { name: '--atomix-primary', value: '#3b82f6', description: 'Primary brand color', category: 'colors', type: 'color' },
  { name: '--atomix-primary-dark', value: '#2563eb', description: 'Primary color (dark variant)', category: 'colors', type: 'color' },
  { name: '--atomix-primary-light', value: '#93c5fd', description: 'Primary color (light variant)', category: 'colors', type: 'color' },
  { name: '--atomix-secondary', value: '#8b5cf6', description: 'Secondary brand color', category: 'colors', type: 'color' },
  { name: '--atomix-success', value: '#10b981', description: 'Success state color', category: 'colors', type: 'color' },
  { name: '--atomix-warning', value: '#f59e0b', description: 'Warning state color', category: 'colors', type: 'color' },
  { name: '--atomix-error', value: '#ef4444', description: 'Error state color', category: 'colors', type: 'color' },
  { name: '--atomix-info', value: '#06b6d4', description: 'Info state color', category: 'colors', type: 'color' },
  
  // Background colors
  { name: '--atomix-bg-primary', value: '#ffffff', description: 'Primary background color', category: 'colors', type: 'color' },
  { name: '--atomix-bg-secondary', value: '#f9fafb', description: 'Secondary background color', category: 'colors', type: 'color' },
  { name: '--atomix-bg-tertiary', value: '#f3f4f6', description: 'Tertiary background color', category: 'colors', type: 'color' },
  
  // Text colors
  { name: '--atomix-text-primary', value: '#111827', description: 'Primary text color', category: 'colors', type: 'color' },
  { name: '--atomix-text-secondary', value: '#6b7280', description: 'Secondary text color', category: 'colors', type: 'color' },
  { name: '--atomix-text-tertiary', value: '#9ca3af', description: 'Tertiary text color', category: 'colors', type: 'color' },
  
  // Border colors
  { name: '--atomix-border', value: '#e5e7eb', description: 'Default border color', category: 'colors', type: 'color' },
  { name: '--atomix-border-light', value: '#f3f4f6', description: 'Light border color', category: 'colors', type: 'color' },
  { name: '--atomix-border-dark', value: '#d1d5db', description: 'Dark border color', category: 'colors', type: 'color' },
  
  // Spacing
  { name: '--atomix-spacing-xs', value: '0.25rem', description: 'Extra small spacing', category: 'spacing', type: 'spacing' },
  { name: '--atomix-spacing-sm', value: '0.5rem', description: 'Small spacing', category: 'spacing', type: 'spacing' },
  { name: '--atomix-spacing-md', value: '1rem', description: 'Medium spacing', category: 'spacing', type: 'spacing' },
  { name: '--atomix-spacing-lg', value: '1.5rem', description: 'Large spacing', category: 'spacing', type: 'spacing' },
  { name: '--atomix-spacing-xl', value: '2rem', description: 'Extra large spacing', category: 'spacing', type: 'spacing' },
  { name: '--atomix-spacing-2xl', value: '3rem', description: '2x extra large spacing', category: 'spacing', type: 'spacing' },
  { name: '--atomix-spacing-3xl', value: '4rem', description: '3x extra large spacing', category: 'spacing', type: 'spacing' },
  
  // Typography
  { name: '--atomix-font-family', value: 'Inter, system-ui, sans-serif', description: 'Primary font family', category: 'typography', type: 'typography' },
  { name: '--atomix-font-family-mono', value: 'JetBrains Mono, Consolas, monospace', description: 'Monospace font family', category: 'typography', type: 'typography' },
  { name: '--atomix-font-size-xs', value: '0.75rem', description: 'Extra small font size', category: 'typography', type: 'typography' },
  { name: '--atomix-font-size-sm', value: '0.875rem', description: 'Small font size', category: 'typography', type: 'typography' },
  { name: '--atomix-font-size-base', value: '1rem', description: 'Base font size', category: 'typography', type: 'typography' },
  { name: '--atomix-font-size-lg', value: '1.125rem', description: 'Large font size', category: 'typography', type: 'typography' },
  { name: '--atomix-font-size-xl', value: '1.25rem', description: 'Extra large font size', category: 'typography', type: 'typography' },
  { name: '--atomix-font-size-2xl', value: '1.5rem', description: '2x extra large font size', category: 'typography', type: 'typography' },
  { name: '--atomix-font-size-3xl', value: '1.875rem', description: '3x extra large font size', category: 'typography', type: 'typography' },
  { name: '--atomix-font-size-4xl', value: '2.25rem', description: '4x extra large font size', category: 'typography', type: 'typography' },
  
  // Border radius
  { name: '--atomix-border-radius-sm', value: '0.125rem', description: 'Small border radius', category: 'border', type: 'border' },
  { name: '--atomix-border-radius-md', value: '0.375rem', description: 'Medium border radius', category: 'border', type: 'border' },
  { name: '--atomix-border-radius-lg', value: '0.5rem', description: 'Large border radius', category: 'border', type: 'border' },
  { name: '--atomix-border-radius-xl', value: '0.75rem', description: 'Extra large border radius', category: 'border', type: 'border' },
  { name: '--atomix-border-radius-2xl', value: '1rem', description: '2x extra large border radius', category: 'border', type: 'border' },
  { name: '--atomix-border-radius-full', value: '9999px', description: 'Full border radius (pill)', category: 'border', type: 'border' },
  
  // Shadows
  { name: '--atomix-shadow-sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)', description: 'Small shadow', category: 'shadow', type: 'shadow' },
  { name: '--atomix-shadow-md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', description: 'Medium shadow', category: 'shadow', type: 'shadow' },
  { name: '--atomix-shadow-lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', description: 'Large shadow', category: 'shadow', type: 'shadow' },
  { name: '--atomix-shadow-xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', description: 'Extra large shadow', category: 'shadow', type: 'shadow' },
  
  // Breakpoints
  { name: '--atomix-breakpoint-sm', value: '640px', description: 'Small breakpoint', category: 'breakpoint', type: 'breakpoint' },
  { name: '--atomix-breakpoint-md', value: '768px', description: 'Medium breakpoint', category: 'breakpoint', type: 'breakpoint' },
  { name: '--atomix-breakpoint-lg', value: '1024px', description: 'Large breakpoint', category: 'breakpoint', type: 'breakpoint' },
  { name: '--atomix-breakpoint-xl', value: '1280px', description: 'Extra large breakpoint', category: 'breakpoint', type: 'breakpoint' },
  { name: '--atomix-breakpoint-2xl', value: '1536px', description: '2x extra large breakpoint', category: 'breakpoint', type: 'breakpoint' }
];
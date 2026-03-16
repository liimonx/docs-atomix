/**
 * Documentation content loader - loads component data from metadata files.
 * Transforms component metadata to ComponentDocumentation format.
 */

import { ComponentDocumentation, ComponentFeature, ComponentExample, ComponentUsage, AccessibilityInfo } from '../types';
import { getComponentById } from '../data/components';

/**
 * Transform component metadata to ComponentDocumentation format
 */
function transformMetadata(metadata: any): ComponentDocumentation {
  // Transform features from string array to ComponentFeature array
  const features: ComponentFeature[] = Array.isArray(metadata.features)
    ? metadata.features.map((feature: string | ComponentFeature) => {
      if (typeof feature === 'string') {
        // Extract title and description from string format
        const parts = feature.split(' - ');
        return {
          title: parts[0] || feature,
          description: parts.slice(1).join(' - ') || feature,
          supported: true
        };
      }
      return feature;
    })
    : [];

  // Transform examples to ensure they have required fields
  const examples: ComponentExample[] = (metadata.examples || []).map((example: any, index: number) => ({
    id: example.id || `${metadata.id}-example-${index}`,
    title: example.title || 'Example',
    description: example.description || '',
    code: example.code || '',
    language: example.language || 'tsx',
    category: example.category || 'basic',
    preview: example.preview ?? null,
    dependencies: example.dependencies,
    notes: example.notes
  }));

  // Transform accessibility data
  const transformAccessibility = (acc: any): AccessibilityInfo => {
    if (!acc) {
      return {
        overview: 'Accessibility information not available',
        guidelines: [],
        wcagLevel: 'AA' as const,
        keyboardSupport: [],
        ariaAttributes: []
      };
    }

    // Transform keyboardSupport from string array to object array
    const keyboardSupport = Array.isArray(acc.keyboardSupport)
      ? acc.keyboardSupport.map((item: string | { key: string; action: string; context?: string }) => {
        if (typeof item === 'string') {
          const [key, ...actionParts] = item.split(' - ');
          return {
            key: key.trim(),
            action: actionParts.join(' - ').trim() || key.trim()
          };
        }
        return item;
      })
      : [];

    // Transform ariaAttributes from string array to object array
    const ariaAttributes = Array.isArray(acc.ariaAttributes)
      ? acc.ariaAttributes.map((item: string | { attribute: string; description: string; required: boolean; defaultValue?: string }) => {
        if (typeof item === 'string') {
          const [attribute, ...descParts] = item.split(' - ');
          return {
            attribute: attribute.trim(),
            description: descParts.join(' - ').trim() || attribute.trim(),
            required: false
          };
        }
        return item;
      })
      : [];

    return {
      overview: acc.overview || 'Accessibility information not available',
      guidelines: acc.guidelines || [],
      wcagLevel: acc.wcagLevel || ('AA' as const),
      keyboardSupport,
      ariaAttributes,
      screenReaderSupport: acc.screenReaderSupport ?? true,
      focusManagement: acc.focusManagement || []
    };
  };

  // Create usage examples from import path
  const usage: ComponentUsage[] = [
    {
      title: 'Installation',
      description: 'Install the Atomix component library',
      code: 'npm install @shohojdhara/atomix',
      language: 'bash'
    },
    {
      title: 'Basic Usage',
      description: `Import and use the ${metadata.name} component`,
      code: `import { ${metadata.name} } from '${metadata.importPath}';`,
      language: 'tsx'
    }
  ];

  return {
    name: metadata.name,
    description: metadata.description,
    category: metadata.category,
    version: metadata.version,
    status: metadata.status,
    lastUpdated: metadata.lastUpdated || new Date().toISOString().split('T')[0],
    author: metadata.author || 'Atomix Team',
    importPath: metadata.importPath,
    dependencies: metadata.dependencies || ['react'],
    tags: metadata.tags || [],
    relatedComponents: metadata.relatedComponents || [],
    props: metadata.props || [],
    examples,
    features,
    usage,
    accessibility: transformAccessibility(metadata.accessibility)
  };
}

/**
 * Get component documentation by component ID.
 * Loads from component metadata files and transforms to ComponentDocumentation format.
 */
export function getComponentDocumentation(componentId: string): ComponentDocumentation | null {
  // First try to get from real metadata files
  const metadata = getComponentById(componentId);
  if (metadata) {
    return transformMetadata(metadata);
  }

  return null;
}
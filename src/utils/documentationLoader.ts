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
 * Legacy mock data - kept for backward compatibility but should not be used
 * @deprecated Use componentMetadata from @/data/components instead
 */
const mockComponentData: Record<string, ComponentDocumentation> = {
  button: {
    name: 'Button',
    description: 'A versatile button component for actions in forms, dialogs, and more. Supports multiple styles, sizes, and states.',
    category: 'Actions',
    version: '1.2.0',
    status: 'stable',
    lastUpdated: '2024-01-15',
    author: 'Atomix Team',
    importPath: '@shohojdhara/atomix/Button',
    dependencies: ['react'],
    tags: ['button', 'action', 'ui', 'interactive'],
    relatedComponents: ['ButtonGroup', 'IconButton', 'Link'],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'link'",
        required: false,
        defaultValue: 'primary',
        description: 'The visual style of the button'
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        required: false,
        defaultValue: 'md',
        description: 'The size of the button'
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Whether the button is disabled'
      },
      {
        name: 'loading',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Shows a loading spinner and disables the button'
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        description: 'Function called when the button is clicked'
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: false,
        description: 'Content to be displayed inside the button'
      },
      {
        name: 'icon',
        type: 'ReactNode',
        required: false,
        description: 'Icon to display alongside the button text'
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Makes the button take up the full width of its container'
      },
      {
        name: 'type',
        type: "'button' | 'submit' | 'reset'",
        required: false,
        defaultValue: 'button',
        description: 'HTML button type attribute'
      }
    ],
    examples: [
      {
        id: 'button-basic',
        title: 'Basic Button',
        description: 'A simple primary button',
        code: '<Button>Click me</Button>',
        language: 'tsx',
        category: 'basic'
      },
      {
        id: 'button-variants',
        title: 'Variants',
        description: 'Different button styles for different purposes',
        code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
        language: 'tsx',
        category: 'basic'
      },
      {
        id: 'button-sizes',
        title: 'Sizes',
        description: 'Three different button sizes',
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
        language: 'tsx',
        category: 'basic'
      },
      {
        id: 'button-states',
        title: 'States',
        description: 'Disabled and loading states',
        code: `<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`,
        language: 'tsx',
        category: 'basic'
      },
      {
        id: 'button-witha_icon',
        title: 'With Icon',
        description: 'Buttons with icons for better visual communication',
        code: `<Button icon={<Star size={16} />}>Favorite</Button>
<Button icon={<Download size={16} />} variant="outline">Download</Button>`,
        language: 'tsx',
        category: 'advanced'
      },
      {
        id: 'button-full-width',
        title: 'Full Width',
        description: 'Buttons that span the full width of their container',
        code: '<Button fullWidth>Full Width Button</Button>',
        language: 'tsx',
        category: 'advanced'
      }
    ],
    features: [
      {
        title: 'Multiple variants',
        description: 'Supports primary, secondary, outline, ghost, and link variants',
        supported: true
      },
      {
        title: 'Multiple sizes',
        description: 'Available in small, medium, and large sizes',
        supported: true
      },
      {
        title: 'Disabled state',
        description: 'Can be disabled to prevent user interaction',
        supported: true
      },
      {
        title: 'Loading state',
        description: 'Shows a loading indicator during async operations',
        supported: true
      },
      {
        title: 'Icon support',
        description: 'Can display icons alongside text',
        supported: true
      },
      {
        title: 'Full accessibility support',
        description: 'Follows WCAG 2.1 guidelines for accessibility',
        supported: true
      },
      {
        title: 'Full width option',
        description: 'Can span the full width of its container',
        supported: true
      }
    ],
    usage: [
      {
        title: 'Installation',
        description: 'Install the Atomix component library',
        code: 'npm install @shohojdhara/atomix',
        language: 'bash'
      },
      {
        title: 'Basic Usage',
        description: 'Import and use the Button component in your React application',
        code: `import { Button } from '@shohojdhara/atomix';

function MyComponent() {
  return <Button onClick={() => console.log('Clicked!')}>Click me</Button>;
}`,
        language: 'tsx'
      },
      {
        title: 'With Icon',
        description: 'Using Button with an icon',
        code: `import { Button, Icon } from '@shohojdhara/atomix';

function MyComponent() {
  return <Button icon={<Icon name="Star" size="lg" />}>Favorite</Button>;
}`,
        language: 'tsx'
      }
    ],
    accessibility: {
      overview: 'The Button component follows WCAG 2.1 guidelines for accessibility with proper focus management and ARIA attributes.',
      keyboardSupport: [
        {
          key: 'Enter',
          action: 'Activates the button'
        },
        {
          key: 'Space',
          action: 'Activates the button'
        },
        {
          key: 'Tab',
          action: 'Moves focus to the next focusable element'
        },
        {
          key: 'Shift + Tab',
          action: 'Moves focus to the previous focusable element'
        }
      ],
      ariaAttributes: [
        {
          attribute: 'aria-disabled',
          description: 'Set to true when the button is disabled',
          required: false
        }
      ],
      guidelines: [
        'Buttons should have clear, descriptive text',
        'Disabled buttons should have appropriate styling and not receive focus',
        'Buttons should be focusable and operable via keyboard',
        'Icons in buttons should be accompanied by text or have proper aria-labels'
      ],
      wcagLevel: 'AA'
    }
  },
  // Add other components here as needed...
  badge: {
    name: 'Badge',
    description: 'A small count and labeling component that attracts attention to an item or indicates status.',
    category: 'Indicators',
    version: '1.1.0',
    status: 'stable',
    lastUpdated: '2024-01-10',
    author: 'Atomix Team',
    importPath: '@shohojdhara/atomix/Badge',
    dependencies: ['react'],
    tags: ['badge', 'status', 'notification', 'indicator'],
    relatedComponents: ['Tag', 'Chip', 'Alert'],
    props: [
      {
        name: 'variant',
        type: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",
        required: false,
        defaultValue: 'default',
        description: 'Visual style variant of the badge'
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        required: false,
        defaultValue: 'md',
        description: 'Size of the badge'
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: true,
        description: 'Content to be displayed inside the badge'
      },
      {
        name: 'dot',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Display as a dot badge without content'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Additional CSS classes'
      }
    ],
    examples: [
      {
        id: 'badge-basic',
        title: 'Basic Badge',
        description: 'Default badge with content',
        code: '<Badge>5</Badge>',
        language: 'tsx',
        category: 'basic'
      },
      {
        id: 'badge-variants',
        title: 'Variants',
        description: 'Different visual styles for different contexts',
        code: `<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`,
        language: 'tsx',
        category: 'basic'
      },
      {
        id: 'badge-sizes',
        title: 'Sizes',
        description: 'Different sizes for different contexts',
        code: `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`,
        language: 'tsx',
        category: 'basic'
      },
      {
        id: 'badge-dot',
        title: 'Dot Badge',
        description: 'Minimalist dot badge for notifications',
        code: '<Badge dot />',
        language: 'tsx',
        category: 'basic'
      }
    ],
    features: [
      {
        title: 'Multiple variants',
        description: 'Supports default, primary, secondary, success, warning, error, and info variants',
        supported: true
      },
      {
        title: 'Multiple sizes',
        description: 'Available in small, medium, and large sizes',
        supported: true
      },
      {
        title: 'Dot mode',
        description: 'Can be displayed as a minimalist dot for notifications',
        supported: true
      },
      {
        title: 'Full accessibility support',
        description: 'Follows WCAG 2.1 guidelines for accessibility',
        supported: true
      }
    ],
    usage: [
      {
        title: 'Installation',
        description: 'Install the Atomix component library',
        code: 'npm install @shohojdhara/atomix',
        language: 'bash'
      },
      {
        title: 'Basic Usage',
        description: 'Import and use the Badge component in your React application',
        code: `import { Badge } from '@shohojdhara/atomix';

function MyComponent() {
  return <Badge variant="primary">5</Badge>;
}`,
        language: 'tsx'
      },
      {
        title: 'Dot Badge',
        description: 'Using Badge as a notification dot',
        code: `import { Badge } from '@shohojdhara/atomix';

function MyComponent() {
  return (
    <div style={{ position: 'relative' }}>
      Notifications
      <Badge dot style={{ position: 'absolute', top: 0, right: 0 }} />
    </div>
  );
}`,
        language: 'tsx'
      }
    ],
    accessibility: {
      overview: 'The Badge component provides accessible status information with proper contrast ratios and sizing.',
      keyboardSupport: [],
      ariaAttributes: [],
      guidelines: [
        'Badges should provide meaningful status information',
        'Color should not be the only means of conveying information',
        'Dot badges should be accompanied by alternative text when possible',
        'Badge text should be concise and clear'
      ],
      wcagLevel: 'AA'
    }
  },
  card: {
    name: 'Card',
    description: 'A flexible content container with multiple variants and options for displaying content with headers, footers, and media.',
    category: 'Layout',
    version: '1.3.0',
    status: 'stable',
    lastUpdated: '2024-01-12',
    author: 'Atomix Team',
    importPath: '@shohojdhara/atomix/Card',
    dependencies: ['react'],
    tags: ['card', 'container', 'layout', 'content'],
    relatedComponents: ['Paper', 'Panel', 'Section'],
    props: [
      {
        name: 'variant',
        type: "'elevated' | 'outlined' | 'filled'",
        required: false,
        defaultValue: 'elevated',
        description: 'Visual style variant of the card'
      },
      {
        name: 'children',
        type: 'ReactNode',
        required: false,
        description: 'Content to be displayed inside the card'
      },
      {
        name: 'header',
        type: 'ReactNode',
        required: false,
        description: 'Content to be displayed in the card header'
      },
      {
        name: 'footer',
        type: 'ReactNode',
        required: false,
        description: 'Content to be displayed in the card footer'
      },
      {
        name: 'media',
        type: 'ReactNode',
        required: false,
        description: 'Media content (images, videos) to be displayed in the card'
      },
      {
        name: 'actions',
        type: 'ReactNode',
        required: false,
        description: 'Action buttons to be displayed in the card'
      },
      {
        name: 'className',
        type: 'string',
        required: false,
        description: 'Additional CSS classes'
      }
    ],
    examples: [
      {
        id: 'card-basic',
        title: 'Basic Card',
        description: 'Simple card with content',
        code: `<Card>
  <p>This is a basic card with some content.</p>
</Card>`,
        language: 'tsx',
        category: 'basic'
      },
      {
        id: 'card-header-footer',
        title: 'Card with Header and Footer',
        description: 'Card with header and footer sections',
        code: `<Card 
  header={<h3>Card Title</h3>}
  footer={<small>Card footer content</small>}
>
  <p>This card has both header and footer sections.</p>
</Card>`,
        language: 'tsx',
        category: 'basic'
      },
      {
        id: 'card-variants',
        title: 'Card Variants',
        description: 'Different visual styles for cards',
        code: `<Card variant="elevated">
  <p>Elevated card</p>
</Card>
<Card variant="outlined">
  <p>Outlined card</p>
</Card>
<Card variant="filled">
  <p>Filled card</p>
</Card>`,
        language: 'tsx',
        category: 'basic'
      }
    ],
    features: [
      {
        title: 'Multiple variants',
        description: 'Supports elevated, outlined, and filled variants',
        supported: true
      },
      {
        title: 'Flexible sections',
        description: 'Header, footer, media, and actions sections',
        supported: true
      },
      {
        title: 'Full accessibility support',
        description: 'Follows WCAG 2.1 guidelines for accessibility',
        supported: true
      }
    ],
    usage: [
      {
        title: 'Installation',
        description: 'Install the Atomix component library',
        code: 'npm install @shohojdhara/atomix',
        language: 'bash'
      },
      {
        title: 'Basic Usage',
        description: 'Import and use the Card component in your React application',
        code: `import { Card } from '@shohojdhara/atomix';

function MyComponent() {
  return (
    <Card>
      <p>This is content inside a card.</p>
    </Card>
  );
}`,
        language: 'tsx'
      },
      {
        title: 'Card with Sections',
        description: 'Using Card with header, footer, and actions',
        code: `import { Card, Button } from '@shohojdhara/atomix';

function MyComponent() {
  return (
    <Card
      header={<h3>Article Title</h3>}
      footer={<small>Published on January 1, 2024</small>}
      actions={
        <>
          <Button variant="primary">Read More</Button>
          <Button variant="outline">Share</Button>
        </>
      }
    >
      <p>This is the main content of the article card.</p>
    </Card>
  );
}`,
        language: 'tsx'
      }
    ],
    accessibility: {
      overview: 'The Card component follows WCAG 2.1 guidelines with proper heading structure and semantic HTML.',
      keyboardSupport: [],
      ariaAttributes: [],
      guidelines: [
        'Cards should have proper heading hierarchy',
        'Interactive elements within cards should be keyboard accessible',
        'Focus should be clearly visible when navigating within cards',
        'Card content should be logically organized'
      ],
      wcagLevel: 'AA'
    }
  }
  // ... other components would follow the same pattern
};

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

  // Fallback to mock data for backward compatibility (should be removed eventually)
  return mockComponentData[componentId] || null;
}
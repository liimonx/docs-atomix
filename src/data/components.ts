import React from 'react';

export interface ComponentMetadata {
  id: string;
  name: string;
  description: string;
  category: string;
  status: 'stable' | 'beta' | 'alpha' | 'deprecated';
  version: string;
  props: ComponentProp[];
  examples: ComponentExample[];
  features: string[];
  dependencies: string[];
  accessibility: AccessibilityInfo;
  relatedComponents: string[];
  tags: string[];
  importPath: string;
}

export interface ComponentProp {
  name: string;
  type: string;
  description: string;
  required: boolean;
  defaultValue?: string;
  options?: string[];
}

export interface ComponentExample {
  title: string;
  description: string;
  code: string;
  preview: React.ReactNode;
}

export interface AccessibilityInfo {
  keyboardSupport: string[];
  ariaAttributes: string[];
  screenReaderSupport: boolean;
  focusManagement: string[];
}

// Component metadata for all Atomix components
export const componentMetadata: ComponentMetadata[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'A versatile button component for actions in forms, dialogs, and more. Supports multiple styles, sizes, and states.',
    category: 'Actions',
    status: 'stable',
    version: '1.2.0',
    importPath: '@shohojdhara/atomix/Button',
    dependencies: ['react'],
    tags: ['button', 'action', 'ui', 'interactive'],
    relatedComponents: ['ButtonGroup', 'IconButton', 'Link'],
    features: [
      'Multiple variants (primary, secondary, outline, ghost, link)',
      'Multiple sizes (sm, md, lg)',
      'Disabled state',
      'Loading state with spinner',
      'Icon support',
      'Full width option',
      'Full accessibility support'
    ],
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'link'",
        description: 'The visual style of the button',
        required: false,
        defaultValue: 'primary'
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        description: 'The size of the button',
        required: false,
        defaultValue: 'md'
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Whether the button is disabled',
        required: false,
        defaultValue: 'false'
      },
      {
        name: 'loading',
        type: 'boolean',
        description: 'Shows a loading spinner and disables the button',
        required: false,
        defaultValue: 'false'
      },
      {
        name: 'onClick',
        type: '() => void',
        description: 'Function called when the button is clicked',
        required: false
      },
      {
        name: 'children',
        type: 'ReactNode',
        description: 'Content to be displayed inside the button',
        required: false
      },
      {
        name: 'icon',
        type: 'ReactNode',
        description: 'Icon to display alongside the button text',
        required: false
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        description: 'Makes the button take up the full width of its container',
        required: false,
        defaultValue: 'false'
      },
      {
        name: 'type',
        type: "'button' | 'submit' | 'reset'",
        description: 'HTML button type attribute',
        required: false,
        defaultValue: 'button'
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes',
        required: false
      }
    ],
    examples: [
      {
        title: 'Primary Button',
        description: 'A standard primary button for main actions',
        code: '<Button>Click me</Button>',
        preview: React.createElement('div') // Placeholder
      },
      {
        title: 'Variants',
        description: 'Different button styles for different purposes',
        code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
        preview: React.createElement('div') // Placeholder
      },
      {
        title: 'Sizes',
        description: 'Three different button sizes',
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
        preview: React.createElement('div') // Placeholder
      },
      {
        title: 'States',
        description: 'Disabled and loading states',
        code: `<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`,
        preview: React.createElement('div') // Placeholder
      }
    ],
    accessibility: {
      keyboardSupport: [
        'Enter - Activates the button',
        'Space - Activates the button',
        'Tab - Moves focus to the next focusable element',
        'Shift + Tab - Moves focus to the previous focusable element'
      ],
      ariaAttributes: [
        'aria-disabled - Set to true when the button is disabled'
      ],
      screenReaderSupport: true,
      focusManagement: [
        'Button receives focus when tabbed to',
        'Button maintains clear focus indicator',
        'Focus is not trapped within the button'
      ]
    }
  },
  {
    id: 'badge',
    name: 'Badge',
    description: 'A small count and labeling component that attracts attention to an item or indicates status.',
    category: 'Indicators',
    status: 'stable',
    version: '1.1.0',
    importPath: '@shohojdhara/atomix/Badge',
    dependencies: ['react'],
    tags: ['badge', 'status', 'notification', 'indicator'],
    relatedComponents: ['Tag', 'Chip', 'Alert'],
    features: [
      'Multiple variants (default, primary, secondary, success, warning, error, info)',
      'Multiple sizes (sm, md, lg)',
      'Dot mode for minimalist notifications',
      'Full accessibility support'
    ],
    props: [
      {
        name: 'variant',
        type: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",
        description: 'Visual style variant of the badge',
        required: false,
        defaultValue: 'default'
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        description: 'Size of the badge',
        required: false,
        defaultValue: 'md'
      },
      {
        name: 'children',
        type: 'ReactNode',
        description: 'Content to be displayed inside the badge',
        required: true
      },
      {
        name: 'dot',
        type: 'boolean',
        description: 'Display as a dot badge without content',
        required: false,
        defaultValue: 'false'
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes',
        required: false
      }
    ],
    examples: [
      {
        title: 'Basic Badge',
        description: 'Default badge with content',
        code: '<Badge>5</Badge>',
        preview: React.createElement('div') // Placeholder
      },
      {
        title: 'Variants',
        description: 'Different visual styles for different contexts',
        code: `<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`,
        preview: React.createElement('div') // Placeholder
      },
      {
        title: 'Dot Badge',
        description: 'Minimalist dot badge for notifications',
        code: '<Badge dot />',
        preview: React.createElement('div') // Placeholder
      }
    ],
    accessibility: {
      keyboardSupport: [],
      ariaAttributes: [],
      screenReaderSupport: true,
      focusManagement: []
    }
  },
  {
    id: 'card',
    name: 'Card',
    description: 'A flexible content container with multiple variants and options for displaying content with headers, footers, and media.',
    category: 'Layout',
    status: 'stable',
    version: '1.3.0',
    importPath: '@shohojdhara/atomix/Card',
    dependencies: ['react'],
    tags: ['card', 'container', 'layout', 'content'],
    relatedComponents: ['Paper', 'Panel', 'Section'],
    features: [
      'Multiple variants (elevated, outlined, filled)',
      'Flexible sections (header, footer, media, actions)',
      'Full accessibility support'
    ],
    props: [
      {
        name: 'variant',
        type: "'elevated' | 'outlined' | 'filled'",
        description: 'Visual style variant of the card',
        required: false,
        defaultValue: 'elevated'
      },
      {
        name: 'children',
        type: 'ReactNode',
        description: 'Content to be displayed inside the card',
        required: false
      },
      {
        name: 'header',
        type: 'ReactNode',
        description: 'Content to be displayed in the card header',
        required: false
      },
      {
        name: 'footer',
        type: 'ReactNode',
        description: 'Content to be displayed in the card footer',
        required: false
      },
      {
        name: 'media',
        type: 'ReactNode',
        description: 'Media content (images, videos) to be displayed in the card',
        required: false
      },
      {
        name: 'actions',
        type: 'ReactNode',
        description: 'Action buttons to be displayed in the card',
        required: false
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes',
        required: false
      }
    ],
    examples: [
      {
        title: 'Basic Card',
        description: 'Simple card with content',
        code: `<Card>
  <p>This is a basic card with some content.</p>
</Card>`,
        preview: React.createElement('div') // Placeholder
      },
      {
        title: 'Card with Header and Footer',
        description: 'Card with header and footer sections',
        code: `<Card 
  header={<h3>Card Title</h3>}
  footer={<small>Card footer content</small>}
>
  <p>This card has both header and footer sections.</p>
</Card>`,
        preview: React.createElement('div') // Placeholder
      }
    ],
    accessibility: {
      keyboardSupport: [],
      ariaAttributes: [],
      screenReaderSupport: true,
      focusManagement: [
        'Card content should be logically organized',
        'Interactive elements within cards should be keyboard accessible'
      ]
    }
  },
  {
    id: 'accordion',
    name: 'Accordion',
    description: 'Collapsible content sections with smooth animations',
    category: 'display',
    status: 'stable',
    version: '1.0.0',
    importPath: '@shohojdhara/atomix/Accordion',
    dependencies: ['react', 'framer-motion'],
    tags: ['accordion', 'collapsible', 'expand', 'collapse'],
    relatedComponents: ['Tabs', 'Collapse'],
    features: [
      'Smooth expand/collapse animations',
      'Keyboard navigation support',
      'Customizable icons',
      'Disabled state',
      'Full accessibility support'
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: 'Accordion header title',
        required: true
      },
      {
        name: 'children',
        type: 'ReactNode',
        description: 'Content to show when expanded',
        required: true
      },
      {
        name: 'defaultOpen',
        type: 'boolean',
        description: 'Initially open state',
        required: false,
        defaultValue: 'false'
      },
      {
        name: 'iconPosition',
        type: "'left' | 'right'",
        description: 'Position of expand/collapse icon',
        required: false,
        defaultValue: "'right'"
      },
      {
        name: 'icon',
        type: 'ReactNode',
        description: 'Custom expand/collapse icon',
        required: false
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Disable accordion interaction',
        required: false,
        defaultValue: 'false'
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes',
        required: false,
        defaultValue: "''"
      }
    ],
    examples: [
      {
        title: 'Basic Accordion',
        description: 'Simple accordion with default settings',
        code: `<Accordion title="Section 1">
  <p>This is the content of the accordion section.</p>
</Accordion>`,
        preview: React.createElement('div') // Placeholder
      },
      {
        title: 'Initially Open',
        description: 'Accordion that is open by default',
        code: `<Accordion title="Section 1" defaultOpen>
  <p>This accordion section is open by default.</p>
</Accordion>`,
        preview: React.createElement('div') // Placeholder
      }
    ],
    accessibility: {
      keyboardSupport: [
        'Enter - Toggle accordion',
        'Space - Toggle accordion',
        'Tab - Navigate to next focusable element',
        'Shift + Tab - Navigate to previous focusable element'
      ],
      ariaAttributes: [
        'aria-expanded - Indicates if the accordion is expanded or collapsed',
        'aria-controls - Identifies the element controlled by the accordion'
      ],
      screenReaderSupport: true,
      focusManagement: [
        'Accordion header receives focus',
        'Focus is maintained on header when toggling'
      ]
    }
  }
];

export const getComponentById = (id: string) => {
  return componentMetadata.find(component => component.id === id);
};

export const getComponentsByCategory = (category: string) => {
  return componentMetadata.filter(component => component.category === category);
};

export const getAllCategories = () => {
  const categories = new Set(componentMetadata.map(component => component.category));
  return Array.from(categories);
};
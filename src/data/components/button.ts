// import { Button } from '@shohojdhara/atomix';

export const buttonMetadata = {
  id: 'button',
  name: 'Button',
  description: 'A versatile button component for actions in forms, dialogs, and more. Supports multiple styles, sizes, and states.',
  category: 'Actions',
  status: 'stable' as const,
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
      preview: null
    },
    {
      title: 'Variants',
      description: 'Different button styles for different purposes',
      code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
      preview: null
    },
    {
      title: 'Sizes',
      description: 'Three different button sizes',
      code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      preview: null
    },
    {
      title: 'States',
      description: 'Disabled and loading states',
      code: `<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`,
      preview: null
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
};

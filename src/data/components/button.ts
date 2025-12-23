// import { Button } from '@shohojdhara/atomix';

export const buttonMetadata = {
  id: 'button',
  name: 'Button',
  description: 'A fundamental interactive element that allows users to trigger actions or navigate through your application. It supports multiple variants, sizes, icons, and states to fit various use cases.',
  category: 'Actions',
  status: 'stable' as const,
  version: '1.2.0',
  importPath: '@shohojdhara/atomix/Button',
  dependencies: ['react'],
  tags: ['button', 'action', 'ui', 'interactive', 'click', 'submit'],
  relatedComponents: ['Icon', 'Link', 'Card', 'Form'],
  features: [
    'Multiple variants (primary, secondary, success, info, warning, error, light, dark, and outline variants)',
    'Multiple sizes (sm: 32px, md: 40px, lg: 48px)',
    'Icon support with configurable position (start/end)',
    'Icon-only button option',
    'Loading state with spinner and custom loading text',
    'Disabled and active states',
    'Rounded (pill) styling option',
    'Full width and block display options',
    'Can render as different elements (button, anchor, or custom component)',
    'Glass morphism effect support',
    'Comprehensive event handlers (onClick, onHover, onFocus, onBlur)',
    'Full accessibility support with ARIA attributes'
  ],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'The text content of the button (use label OR children)',
      required: false
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Button content (use label OR children)',
      required: false
    },
    {
      name: 'variant',
      type: "Variant | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'light' | 'dark' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-info' | 'outline-warning' | 'outline-error' | 'outline-light' | 'outline-dark' | 'link'",
      description: 'Visual style variant of the button',
      required: false,
      defaultValue: "'primary'"
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Size of the button',
      required: false,
      defaultValue: "'md'"
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
      description: 'Loading state - shows spinner and disables button',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'loadingText',
      type: 'string',
      description: 'Custom loading text (replaces label when loading)',
      required: false
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'Optional icon element to display',
      required: false
    },
    {
      name: 'iconPosition',
      type: "'start' | 'end'",
      description: 'Icon position relative to text',
      required: false,
      defaultValue: "'start'"
    },
    {
      name: 'iconOnly',
      type: 'boolean',
      description: 'Whether to show only the icon (hides label visually)',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'rounded',
      type: 'boolean',
      description: 'Whether to apply fully rounded (pill) styling',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      description: 'Full width button (takes 100% of container width)',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'block',
      type: 'boolean',
      description: 'Block-level button (full width with block display)',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'active',
      type: 'boolean',
      description: 'Active state styling',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'selected',
      type: 'boolean',
      description: 'Selected state styling',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'type',
      type: "'button' | 'submit' | 'reset'",
      description: 'Button type attribute',
      required: false,
      defaultValue: "'button'"
    },
    {
      name: 'onClick',
      type: '(event: MouseEvent) => void',
      description: 'Click event handler',
      required: false
    },
    {
      name: 'onHover',
      type: '(event: MouseEvent) => void',
      description: 'Hover event handler',
      required: false
    },
    {
      name: 'onFocus',
      type: '(event: FocusEvent) => void',
      description: 'Focus event handler',
      required: false
    },
    {
      name: 'onBlur',
      type: '(event: FocusEvent) => void',
      description: 'Blur event handler',
      required: false
    },
    {
      name: 'as',
      type: 'ElementType',
      description: 'The element type to render as',
      required: false,
      defaultValue: "'button'"
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false,
      defaultValue: "''"
    },
    {
      name: 'glass',
      type: 'boolean | AtomixGlassProps',
      description: 'Glass morphism effect for the button',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom style for the button',
      required: false
    },
    {
      name: 'ariaLabel',
      type: 'string',
      description: 'ARIA label for accessibility',
      required: false
    },
    {
      name: 'ariaDescribedBy',
      type: 'string',
      description: 'ARIA described by reference',
      required: false
    },
    {
      name: 'ariaExpanded',
      type: 'boolean',
      description: 'ARIA expanded state (for toggle buttons)',
      required: false
    },
    {
      name: 'ariaControls',
      type: 'string',
      description: 'ARIA controls reference',
      required: false
    },
    {
      name: 'tabIndex',
      type: 'number',
      description: 'Tab index for keyboard navigation',
      required: false,
      defaultValue: '0'
    }
  ],
  examples: [
    {
      title: 'Basic Usage',
      description: 'Using label prop or children for button content',
      code: `import { Button } from '@shohojdhara/atomix';

function MyComponent() {
  return (
    <div>
      {/* Using label prop */}
      <Button label="Primary Button" />
      <Button label="Secondary Button" variant="secondary" />
      <Button label="Disabled Button" disabled />
      
      {/* Using children */}
      <Button variant="primary">
        Button with Children
      </Button>
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Button Variants',
      description: 'Solid, outline, and link variants',
      code: `// Solid variants
<Button label="Primary" variant="primary" />
<Button label="Secondary" variant="secondary" />
<Button label="Success" variant="success" />
<Button label="Error" variant="error" />

// Outline variants
<Button label="Outline Primary" variant="outline-primary" />
<Button label="Outline Secondary" variant="outline-secondary" />

// Link variant
<Button label="Link Button" variant="link" />`,
      preview: null
    },
    {
      title: 'Button Sizes',
      description: 'Three different button sizes (sm: 32px, md: 40px, lg: 48px)',
      code: `<Button label="Small" variant="primary" size="sm" />
<Button label="Medium" variant="primary" size="md" />
<Button label="Large" variant="primary" size="lg" />`,
      preview: null
    },
    {
      title: 'Buttons with Icons',
      description: 'Icons at start, end, or icon-only buttons',
      code: `import { Icon } from '@shohojdhara/atomix';

// Button with icon and text (icon at start)
<Button
  label="Save Document"
  variant="primary"
  icon={<Icon name="Save" />}
/>

// Button with icon at end
<Button
  label="Next"
  variant="primary"
  icon={<Icon name="ArrowRight" />}
  iconPosition="end"
/>

// Icon-only button
<Button
  label="Delete"
  variant="error"
  icon={<Icon name="Trash" />}
  iconOnly
  ariaLabel="Delete item"
/>`,
      preview: null
    },
    {
      title: 'Rounded Buttons',
      description: 'Pill-shaped buttons with rounded styling',
      code: `<Button label="Rounded Button" variant="primary" rounded />
<Button
  label="Rounded with Icon"
  variant="secondary"
  icon={<Icon name="Heart" />}
  rounded
/>`,
      preview: null
    },
    {
      title: 'Button States',
      description: 'Disabled, loading, active, and selected states',
      code: `<Button label="Disabled" disabled />
<Button label="Loading" loading />
<Button label="Loading with Text" loading loadingText="Saving..." />
<Button label="Active" active />
<Button label="Selected" selected />`,
      preview: null
    },
    {
      title: 'Button as Link',
      description: 'Rendering button as anchor tag or React Router Link',
      code: `// Render as an anchor tag
<Button
  label="Visit Website"
  variant="link"
  as="a"
  href="https://example.com"
  target="_blank"
/>

// Render with React Router Link
<Button
  label="Go to Dashboard"
  variant="primary"
  linkComponent={Link}
  to="/dashboard"
/>`,
      preview: null
    },
    {
      title: 'Full Width Buttons',
      description: 'Buttons that span the full width of their container',
      code: `<Button label="Full Width" variant="primary" fullWidth />
<Button label="Block Button" variant="secondary" block />`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Button component follows WCAG 2.1 guidelines for accessibility with proper focus management, keyboard navigation, and ARIA attributes. It supports all standard button interactions and can be used with screen readers.',
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
      },
      {
        attribute: 'aria-label',
        description: 'ARIA label for accessibility (especially important for icon-only buttons)',
        required: false
      },
      {
        attribute: 'aria-describedby',
        description: 'ARIA described by reference',
        required: false
      },
      {
        attribute: 'aria-expanded',
        description: 'ARIA expanded state (for toggle buttons)',
        required: false
      },
      {
        attribute: 'aria-controls',
        description: 'ARIA controls reference',
        required: false
      }
    ],
    guidelines: [
      'Buttons should have clear, descriptive text or labels',
      'Icon-only buttons must have aria-label for accessibility',
      'Disabled buttons should have appropriate styling and not receive focus',
      'Buttons should be focusable and operable via keyboard',
      'Loading states should be communicated to screen readers',
      'Buttons used for navigation should use appropriate semantic elements (as prop)'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Button receives focus when tabbed to',
      'Button maintains clear focus indicator',
      'Focus is not trapped within the button',
      'Disabled buttons do not receive focus',
      'Loading buttons remain focusable but disabled'
    ]
  }
};

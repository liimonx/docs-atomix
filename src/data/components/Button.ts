export const buttonMetadata = {
  id: 'button',
  name: 'Button',
  description: 'A comprehensive, interactive element for triggering actions or navigation. The Button component is designed for flexibility, supporting various variants, sizes, states, and compositions to fit any UI requirement.',
  category: 'Actions',
  status: 'stable' as const,
  version: '1.2.0',
  importPath: '@shohojdhara/atomix/Button',
  dependencies: ['react'],
  tags: ['button', 'action', 'ui', 'interactive', 'click', 'submit', 'form'],
  relatedComponents: ['Icon', 'Link', 'Card', 'ButtonGroup'],
  features: [
    'Extensive styling variants (Solid, Outline, Ghost, Link)',
    'Responsive sizing (sm, md, lg)',
    'Flexible icon positioning (start/end) and icon-only mode',
    'Intelligent built-in loading state management',
    'Polymorphic rendering (render as button, anchor, or custom component)',
    'Accessibility-first design (ARIA support, keyboard navigation)',
    'Full-width and block-level display options',
    'Glassmorphism effect support for modern aesthetics',
  ],
  props: [
    {
      name: 'variant',
      type: "Variant | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'light' | 'dark' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-info' | 'outline-warning' | 'outline-error' | 'outline-light' | 'outline-dark' | 'link'",
      description: 'The visual style of the button. Supports solid variants (primary, secondary, success, info, warning, error, light, dark), outline variants (outline-*), and link variant for text-only appearance.',
      required: false,
      defaultValue: "'primary'",
      examples: ["'primary'", "'secondary'", "'outline-primary'", "'outline-error'", "'link'"]
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Controls the size of the button, affecting padding and font size.',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'label',
      type: 'string',
      description: 'The text content to display. Can be used instead of children.',
      required: false
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The content of the button. Preferred over label for complex content.',
      required: false
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'An icon element to display within the button.',
      required: false
    },
    {
      name: 'iconPosition',
      type: "'start' | 'end'",
      description: 'Position of the icon relative to the text content.',
      required: false,
      defaultValue: "'start'"
    },
    {
      name: 'iconOnly',
      type: 'boolean',
      description: 'Optimizes the button for a single icon, ensuring a square aspect ratio and centering.',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Disables the button, preventing user interaction and interaction events.',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'loading',
      type: 'boolean',
      description: 'Sets the button to a loading state, showing a spinner and disabling interaction.',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'loadingText',
      type: 'string',
      description: 'Text to display alongside the spinner when in valid loading state.',
      required: false
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      description: 'Makes the button span the full width of its parent container.',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'rounded',
      type: 'boolean',
      description: 'Applies full rounded corners (pill shape).',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'glass',
      type: 'boolean | AtomixGlassProps',
      description: 'Glass morphism effect for the button.',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'as',
      type: 'ElementType',
      description: 'Polymorphic prop to render the component as a different element or component (e.g. "a", Link).',
      required: false,
      defaultValue: "'button'"
    },
    {
      name: 'block',
      type: 'boolean',
      description: 'Block-level button (full width with block display).',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'active',
      type: 'boolean',
      description: 'Active state styling.',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'selected',
      type: 'boolean',
      description: 'Selected state styling.',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'type',
      type: "'button' | 'submit' | 'reset'",
      description: 'Button type attribute.',
      required: false,
      defaultValue: "'button'"
    },
    {
      name: 'onClick',
      type: '(event: React.MouseEvent) => void',
      description: 'Callback fired when the button is clicked.',
      required: false
    },
    {
      name: 'onHover',
      type: '(event: React.MouseEvent) => void',
      description: 'Hover event handler.',
      required: false
    },
    {
      name: 'onFocus',
      type: '(event: React.FocusEvent) => void',
      description: 'Focus event handler.',
      required: false
    },
    {
      name: 'onBlur',
      type: '(event: React.FocusEvent) => void',
      description: 'Blur event handler.',
      required: false
    },
    {
      name: 'href',
      type: 'string',
      description: 'When provided, automatically renders as an anchor element.',
      required: false
    },
    {
      name: 'target',
      type: 'string',
      description: 'Target attribute for anchor elements (e.g., "_blank").',
      required: false
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom style for the button.',
      required: false
    },
    {
      name: 'ariaLabel',
      type: 'string',
      description: 'ARIA label for accessibility.',
      required: false
    },
    {
      name: 'ariaDescribedBy',
      type: 'string',
      description: 'ARIA described by reference.',
      required: false
    },
    {
      name: 'ariaExpanded',
      type: 'boolean',
      description: 'ARIA expanded state (for toggle buttons).',
      required: false
    },
    {
      name: 'ariaControls',
      type: 'string',
      description: 'ARIA controls reference.',
      required: false
    },
    {
      name: 'tabIndex',
      type: 'number',
      description: 'Tab index for keyboard navigation.',
      required: false,
      defaultValue: '0'
    }
  ],
  examples: [
    {
      title: 'Basic Usage',
      description: 'The fundamental usage of the Button component with different variants.',
      code: `import { Button } from '@shohojdhara/atomix';

export default function BasicButtons() {
  return (
    <div className="u-flex u-gap-3 u-flex-wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="error">Error</Button>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Outline Variants',
      description: 'Outline buttons usually indicate secondary actions.',
      code: `import { Button } from '@shohojdhara/atomix';

export default function OutlineButtons() {
  return (
    <div className="u-flex u-gap-3 u-flex-wrap u-p-4 u-bg-dark u-rounded">
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-light">Light</Button>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Sizes & Shapes',
      description: 'Buttons come in multiple sizes and can be fully rounded.',
      code: `import { Button } from '@shohojdhara/atomix';

export default function ButtonSizes() {
  return (
    <div className="u-flex u-align-items-center u-gap-3 u-flex-wrap">
      <Button size="sm" variant="secondary">Small</Button>
      <Button size="md" variant="primary">Medium</Button>
      <Button size="lg" variant="secondary">Large</Button>
      
      <div className="u-w-1 u-bg-subtle u-h-8 u-mx-2"></div>
      
      <Button rounded variant="primary">Rounded</Button>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Icons & Loading',
      description: 'Buttons effectively communicate state and context with icons and loading indicators.',
      code: `import { Button, Icon } from '@shohojdhara/atomix';

export default function IconButtonExample() {
  return (
    <div className="u-flex u-gap-3 u-flex-wrap">
      {/* Icon at Start */}
      <Button 
        variant="primary" 
        icon={<Icon name="Plus" />}
      >
        Create New
      </Button>

      {/* Icon at End */}
      <Button 
        variant="secondary" 
        icon={<Icon name="ArrowRight" />} 
        iconPosition="end"
      >
        Continue
      </Button>

      {/* Icon Only */}
      <Button 
        variant="outline-error" 
        icon={<Icon name="Trash" />} 
        iconOnly 
        ariaLabel="Delete" 
      />

      {/* Loading State */}
      <Button 
        variant="primary" 
        loading 
        loadingText="Saving..."
      >
        Save Changes
      </Button>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Full Width & Block',
      description: 'Utility props to control layout behavior.',
      code: `import { Button, Card } from '@shohojdhara/atomix';

export default function FullWidthExample() {
  return (
    <Card className="u-max-w-sm u-p-4">
      <h4 className="u-mb-4">Sign In</h4>
      <div className="u-flex u-flex-column u-gap-3">
        <Button fullWidth variant="primary">
          Sign In
        </Button>
        <Button fullWidth variant="outline-secondary">
          Create Account
        </Button>
      </div>
    </Card>
  );
}`,
      preview: true
    },
    {
      title: 'Social Login Groups',
      description: 'Common pattern for social authentication buttons.',
      code: `import { Button, Icon } from '@shohojdhara/atomix';

export default function SocialLoginExample() {
  return (
    <div className="u-flex u-flex-column u-gap-3 u-max-w-sm">
      <Button 
        variant="outline-secondary" 
        fullWidth
        icon={<Icon name="GithubLogo" />} 
        style={{ borderColor: '#333', color: '#333' }}
      >
        Continue with GitHub
      </Button>
      
      <Button 
        variant="outline-secondary" 
        fullWidth
        icon={<Icon name="TwitterLogo" />} 
        style={{ borderColor: '#1DA1F2', color: '#1DA1F2' }}
      >
        Continue with Twitter
      </Button>
      
      <Button 
        variant="outline-secondary" 
        fullWidth
        icon={<Icon name="GoogleLogo" />}
      >
        Continue with Google
      </Button>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Button as Link',
      description: 'The Button component automatically renders as an anchor element when the href prop is provided.',
      code: `import { Button } from '@shohojdhara/atomix';

export default function ButtonAsLink() {
  return (
    <div className="u-flex u-gap-3 u-flex-wrap">
      {/* Simple link button (automatically renders as <a>) */}
      <Button
        label="Visit Website"
        variant="primary"
        href="https://example.com"
        target="_blank"
      />

      {/* Link button with different variant */}
      <Button
        label="Learn More"
        variant="outline-primary"
        href="/about"
      />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Active and Selected States',
      description: 'Buttons can have active and selected states for toggle functionality.',
      code: `import { Button } from '@shohojdhara/atomix';
import { useState } from 'react';

export default function ToggleButton() {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="u-flex u-gap-3 u-flex-wrap">
      <Button
        label="Toggle Active"
        variant="primary"
        active={isActive}
        onClick={() => setIsActive(!isActive)}
      />
      <Button
        label="Toggle Selected"
        variant="secondary"
        selected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Event Handlers',
      description: 'Buttons support various event handlers for interactive behavior.',
      code: `import { Button } from '@shohojdhara/atomix';

export default function EventHandlers() {
  const handleClick = () => console.log('Clicked');
  const handleHover = () => console.log('Hovered');
  const handleFocus = () => console.log('Focused');
  const handleBlur = () => console.log('Blurred');

  return (
    <Button
      label="Interactive Button"
      variant="primary"
      onClick={handleClick}
      onHover={handleHover}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Button component strictly adheres to WAI-ARIA practices. It handles role assignment, focus management, and keyboard event mapping automatically.',
    keyboardSupport: [
      { key: 'Enter', action: 'Activates the button' },
      { key: 'Space', action: 'Activates the button' },
      { key: 'Tab', action: 'Moves focus to the button' },
      { key: 'Shift + Tab', action: 'Moves focus away from the button' }
    ],
    ariaAttributes: [
      { attribute: 'aria-label', description: 'Essential for icon-only buttons to provide context to screen readers.', required: false },
      { attribute: 'aria-disabled', description: 'Indicates the button is disabled to assistive technology.', required: false },
      { attribute: 'aria-busy', description: 'Indicates the button is in a loading state.', required: false },
      { attribute: 'aria-expanded', description: 'Indicates expanded state for toggle buttons.', required: false },
      { attribute: 'aria-controls', description: 'References the element controlled by the button.', required: false },
      { attribute: 'aria-describedby', description: 'References additional descriptive text.', required: false },
      { attribute: 'role', description: 'Automatically applied when using non-button elements.', required: false }
    ],
    guidelines: [
      'Always provide an aria-label for buttons that do not have visible text.',
      'Use disabled state sparingly; consider showing an error message instead if interaction is restricted.',
      'Ensure high color contrast for custom variants.'
    ],
    wcagLevel: 'AA',
    screenReaderSupport: true,
    focusManagement: [
      'Focus styles are automatically applied using the standard outline ring.',
      'The focus ring is suppressed on mouse click but visible on keyboard navigation.'
    ]
  }
};

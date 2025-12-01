export const inputMetadata = {
  id: 'input',
  name: 'Input',
  description: 'A versatile text input component with validation support, multiple variants, and full accessibility features.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Input',
  dependencies: ['react'],
  tags: ['input', 'text', 'form', 'field', 'validation'],
  relatedComponents: ['Form', 'Textarea', 'Select'],
  features: [
    'Multiple variants (default, dark, light)',
    'Multiple sizes (sm, md, lg)',
    'Validation states (error, success, warning)',
    'Icon support (left and right icons)',
    'Placeholder and label support',
    'Disabled and readonly states',
    'Full accessibility support',
    'Type support (text, email, password, number, etc.)'
  ],
  props: [
    {
      name: 'type',
      type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'",
      description: 'The input type',
      required: false,
      defaultValue: "'text'"
    },
    {
      name: 'variant',
      type: "'default' | 'dark' | 'light'",
      description: 'Visual style variant of the input',
      required: false,
      defaultValue: "'default'"
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Size of the input',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'value',
      type: 'string',
      description: 'The input value (controlled)',
      required: false
    },
    {
      name: 'defaultValue',
      type: 'string',
      description: 'The default input value (uncontrolled)',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text',
      required: false
    },
    {
      name: 'label',
      type: 'string',
      description: 'Label text for the input',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the input is disabled',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'readOnly',
      type: 'boolean',
      description: 'Whether the input is read-only',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether the input is required',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'error',
      type: 'boolean | string',
      description: 'Error state or error message',
      required: false
    },
    {
      name: 'success',
      type: 'boolean',
      description: 'Success validation state',
      required: false
    },
    {
      name: 'warning',
      type: 'boolean',
      description: 'Warning validation state',
      required: false
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'Icon to display on the left side',
      required: false
    },
    {
      name: 'iconRight',
      type: 'ReactNode',
      description: 'Icon to display on the right side',
      required: false
    },
    {
      name: 'onChange',
      type: '(event: ChangeEvent<HTMLInputElement>) => void',
      description: 'Callback function when input value changes',
      required: false
    },
    {
      name: 'onFocus',
      type: '(event: FocusEvent<HTMLInputElement>) => void',
      description: 'Callback function when input receives focus',
      required: false
    },
    {
      name: 'onBlur',
      type: '(event: FocusEvent<HTMLInputElement>) => void',
      description: 'Callback function when input loses focus',
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
      title: 'Basic Input',
      description: 'A simple text input field',
      code: `<Input 
  placeholder="Enter your name"
  onChange={(e) => console.log(e.target.value)}
/>`,
      preview: null
    },
    {
      title: 'Input Variants',
      description: 'Different visual styles for inputs',
      code: `<Input variant="default" placeholder="Default" />
<Input variant="dark" placeholder="Dark" />
<Input variant="light" placeholder="Light" />`,
      preview: null
    },
    {
      title: 'Input Sizes',
      description: 'Three different input sizes',
      code: `<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />`,
      preview: null
    },
    {
      title: 'With Label',
      description: 'Input with a label',
      code: `<Input 
  label="Email Address"
  type="email"
  placeholder="you@example.com"
/>`,
      preview: null
    },
    {
      title: 'Validation States',
      description: 'Input with validation feedback',
      code: `<Input 
  label="Email"
  type="email"
  error="Please enter a valid email"
/>
<Input 
  label="Username"
  success
  placeholder="Username is available"
/>
<Input 
  label="Password"
  type="password"
  warning="Password should be at least 8 characters"
/>`,
      preview: null
    },
    {
      title: 'With Icons',
      description: 'Input with left and right icons',
      code: `<Input 
  icon={<Icon name="MagnifyingGlass" />}
  placeholder="Search..."
/>
<Input 
  iconRight={<Icon name="Eye" />}
  type="password"
  placeholder="Password"
/>`,
      preview: null
    },
    {
      title: 'Disabled and Readonly',
      description: 'Input in disabled and readonly states',
      code: `<Input 
  disabled
  placeholder="Disabled input"
/>
<Input 
  readOnly
  value="Read-only value"
/>`,
      preview: null
    }
  ],
  accessibility: {
    keyboardSupport: [
      'Tab - Move focus to the input',
      'Shift + Tab - Move focus to the previous focusable element',
      'Arrow keys - Navigate within text (when focused)',
      'Enter - Submit form (when inside a form)',
      'Escape - Clear input (if supported)'
    ],
    ariaAttributes: [
      'aria-label - Accessible label for the input',
      'aria-describedby - References error or help text',
      'aria-invalid - Indicates validation state',
      'aria-required - Indicates required field',
      'aria-disabled - Indicates disabled state'
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Input receives focus when tabbed to',
      'Clear focus indicator with proper contrast',
      'Focus moves logically through form fields',
      'Error messages are announced to screen readers'
    ]
  }
};


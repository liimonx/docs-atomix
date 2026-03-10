export const formMetadata = {
  id: 'form',
  name: 'Form',
  description: 'A comprehensive form component with validation, error handling, and accessibility features for building complex forms.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  author: 'Atomix Team',
  lastUpdated: '2026-03-10',
  importPath: '@shohojdhara/atomix/Form',
  dependencies: ['react'],
  tags: ['form', 'validation', 'submit', 'fields', 'form-control'],
  relatedComponents: ['Input', 'Button', 'Select', 'Textarea'],
  features: [
    'Form validation and error handling',
    'Automatic form state management',
    'Submit and reset handlers',
    'Field-level and form-level validation',
    'Accessibility support',
    'Integration with form fields',
    'Custom validation rules'
  ],
  props: [
    {
      name: 'onSubmit',
      type: '(data: FormData | Record<string, any>) => void',
      description: 'Callback function when form is submitted',
      required: false
    },
    {
      name: 'onReset',
      type: '() => void',
      description: 'Callback function when form is reset',
      required: false
    },
    {
      name: 'validateOnChange',
      type: 'boolean',
      description: 'Whether to validate on field change',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'validateOnBlur',
      type: 'boolean',
      description: 'Whether to validate on field blur',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Form content including form fields',
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
    { id: 'example-1',
      title: 'Basic Form',
      description: 'A simple form with input fields',
      code: `<Form onSubmit={(data) => console.log(data)}>
  <Input 
    name="email"
    label="Email"
    type="email"
    required
  />
  <Input 
    name="password"
    label="Password"
    type="password"
    required
  />
  <Button type="submit">Submit</Button>
</Form>`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    },
    { id: 'example-2',
      title: 'Form with Validation',
      description: 'Form with validation and error handling',
      code: `<Form 
  onSubmit={(data) => console.log('Submitted:', data)}
  validateOnChange
>
  <Input 
    name="email"
    label="Email Address"
    type="email"
    required
    error="Please enter a valid email"
  />
  <Input 
    name="password"
    label="Password"
    type="password"
    required
  />
  <Button type="submit">Sign In</Button>
</Form>`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    },
    { id: 'example-3',
      title: 'Complex Form',
      description: 'Form with multiple field types',
      code: `<Form onSubmit={(data) => console.log(data)}>
  <Input name="name" label="Full Name" required />
  <Input name="email" label="Email" type="email" required />
  <Input name="phone" label="Phone" type="tel" />
  <Textarea name="message" label="Message" />
  <Button type="submit">Submit</Button>
  <Button type="reset" variant="outline">Reset</Button>
</Form>`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    }
  ],
  accessibility: {
    keyboardSupport: [
      { key: 'Tab', action: 'Navigate between form fields' },
      { key: 'Shift + Tab', action: 'Navigate backwards' },
      { key: 'Enter', action: 'Submit form (when focus is on submit button)' },
      { key: 'Escape', action: 'Cancel or reset form (if supported)' }
    ],
    ariaAttributes: [
      { attribute: 'aria-label', description: 'Accessible form label', required: false },
      { attribute: 'aria-describedby', description: 'References form instructions or errors', required: false },
      { attribute: 'aria-invalid', description: 'Indicates form validation state', required: false },
      { attribute: 'role="form"', description: 'Semantic form role', required: false }
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Focus moves logically through form fields',
      'Error messages are announced to screen readers',
      'Focus management on form submission',
      'Clear focus indicators for all interactive elements'
    ]
  }
};


export const textareaMetadata = {
  id: 'textarea',
  name: 'Textarea',
  description: 'A multi-line text input field for longer text content. It supports auto-resize, character counting, validation states, and glass morphism effects.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Textarea',
  dependencies: ['react'],
  tags: ['textarea', 'text', 'form', 'field', 'multiline', 'input'],
  relatedComponents: ['FormGroup', 'Input', 'Select', 'Button'],
  features: [
    'Multi-line text input',
    'Multiple sizes (sm: 32px, md: 40px, lg: 48px)',
    'Character counting support',
    'Validation states (invalid, valid)',
    'Disabled and read-only states',
    'Glass morphism effect support',
    'Full accessibility support',
    'Min/max length validation',
    'Auto-focus support'
  ],
  props: [
    {
      name: 'value',
      type: 'string',
      description: 'Controlled textarea value',
      required: false
    },
    {
      name: 'onChange',
      type: '(event: ChangeEvent<HTMLTextAreaElement>) => void',
      description: 'Change event handler',
      required: false
    },
    {
      name: 'onBlur',
      type: '(event: FocusEvent<HTMLTextAreaElement>) => void',
      description: 'Blur event handler',
      required: false
    },
    {
      name: 'onFocus',
      type: '(event: FocusEvent<HTMLTextAreaElement>) => void',
      description: 'Focus event handler',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the textarea is disabled',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether the textarea is required',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'readOnly',
      type: 'boolean',
      description: 'Whether the textarea is read-only',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'id',
      type: 'string',
      description: 'Textarea ID',
      required: false
    },
    {
      name: 'name',
      type: 'string',
      description: 'Textarea name attribute',
      required: false
    },
    {
      name: 'rows',
      type: 'number',
      description: 'Number of visible text lines',
      required: false,
      defaultValue: '4'
    },
    {
      name: 'cols',
      type: 'number',
      description: 'Number of visible text columns',
      required: false
    },
    {
      name: 'maxLength',
      type: 'number',
      description: 'Maximum number of characters',
      required: false
    },
    {
      name: 'minLength',
      type: 'number',
      description: 'Minimum number of characters',
      required: false
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Size of the textarea',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'variant',
      type: 'string',
      description: 'Visual variant of the textarea',
      required: false
    },
    {
      name: 'invalid',
      type: 'boolean',
      description: 'Whether the textarea has validation errors',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'valid',
      type: 'boolean',
      description: 'Whether the textarea has passed validation',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'autoFocus',
      type: 'boolean',
      description: 'Whether to auto-focus the textarea',
      required: false,
      defaultValue: 'false'
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
      description: 'ARIA described-by attribute',
      required: false
    },
    {
      name: 'glass',
      type: 'boolean | AtomixGlassProps',
      description: 'Enable glass morphism effect',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false,
      defaultValue: "''"
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom style object',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Textarea',
      description: 'Simple multi-line text input',
      code: `import { Textarea, FormGroup } from '@shohojdhara/atomix';

function BasicTextarea() {
  const [message, setMessage] = useState('');

  return (
    <FormGroup label="Message">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message..."
        rows={4}
      />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'With Character Count',
      description: 'Textarea with character limit and count display',
      code: `function TextareaWithCount() {
  const [text, setText] = useState('');
  const maxLength = 200;
  const remaining = maxLength - text.length;

  return (
    <FormGroup
      label="Description"
      helperText={
        <div className="u-d-flex u-justify-content-between">
          <span>Tell us about yourself</span>
          <span style={{ color: remaining < 20 ? 'red' : 'inherit' }}>
            {remaining} characters remaining
          </span>
        </div>
      }
    >
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
        rows={4}
        placeholder="Write a short description..."
      />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'Validation States',
      description: 'Textarea with invalid and valid validation states',
      code: `function ValidationStates() {
  const [message, setMessage] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setIsInvalid(value.length < 10);
    setIsValid(value.length >= 10 && value.length <= 500);
  };

  return (
    <div className="u-gap-4">
      <FormGroup
        label="Message"
        helperText={isInvalid ? "Message must be at least 10 characters" : ""}
        invalid={isInvalid}
      >
        <Textarea
          value={message}
          onChange={handleChange}
          invalid={isInvalid}
          rows={4}
          placeholder="Enter at least 10 characters..."
        />
      </FormGroup>

      <FormGroup
        label="Valid Message"
        helperText="Message looks good!"
        valid={isValid}
      >
        <Textarea
          value={message}
          onChange={handleChange}
          valid={isValid}
          rows={4}
          placeholder="Enter your message..."
        />
      </FormGroup>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Textarea Sizes',
      description: 'Different sizes for different contexts',
      code: `function TextareaSizes() {
  return (
    <div className="u-d-flex u-flex-column u-gap-3" style={{ width: '400px' }}>
      <FormGroup label="Small">
        <Textarea size="sm" rows={3} placeholder="Small textarea" />
      </FormGroup>
      <FormGroup label="Medium">
        <Textarea size="md" rows={4} placeholder="Medium textarea" />
      </FormGroup>
      <FormGroup label="Large">
        <Textarea size="lg" rows={5} placeholder="Large textarea" />
      </FormGroup>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Glass Effect',
      description: 'Textarea with glass morphism effect',
      code: `function GlassTextarea() {
  return (
    <FormGroup label="Glass Textarea">
      <Textarea
        glass={true}
        rows={4}
        placeholder="Enter your message with glass effect..."
      />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'Disabled and Readonly',
      description: 'Textarea in disabled and readonly states',
      code: `import { Textarea, FormGroup } from '@shohojdhara/atomix';

function DisabledTextarea() {
  return (
    <div className="u-gap-4">
      <FormGroup label="Disabled Textarea">
        <Textarea
          value="This textarea is disabled"
          disabled
          rows={4}
        />
      </FormGroup>
      
      <FormGroup label="Readonly Textarea">
        <Textarea
          value="This textarea is read-only"
          readOnly
          rows={4}
        />
      </FormGroup>
    </div>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Textarea component follows WCAG accessibility guidelines with proper keyboard navigation, ARIA attributes, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Tab',
        action: 'Moves focus to the textarea'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus away from the textarea'
      },
      {
        key: 'Arrow Keys',
        action: 'Navigate within text (standard textarea behavior)'
      },
      {
        key: 'Home/End',
        action: 'Move to beginning/end of text'
      },
      {
        key: 'Ctrl+A',
        action: 'Select all text'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'aria-label',
        description: 'Accessible label when no visible label is present',
        required: false
      },
      {
        attribute: 'aria-describedby',
        description: 'References helper text or error messages',
        required: false
      },
      {
        attribute: 'aria-invalid',
        description: 'Indicates validation state',
        required: false
      },
      {
        attribute: 'aria-required',
        description: 'Indicates required state',
        required: false
      }
    ],
    guidelines: [
      'Always provide labels: Use FormGroup with a label or provide aria-label',
      'Use helper text for guidance',
      'Provide error messages for invalid states',
      'Set appropriate rows for the expected content length',
      'Ensure keyboard navigation works correctly'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Textarea receives focus when tabbed to',
      'Validation states are communicated to screen readers',
      'Character limits are announced when appropriate',
      'Helper text and error messages are associated correctly'
    ]
  }
};


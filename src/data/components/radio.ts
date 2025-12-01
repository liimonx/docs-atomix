export const radioMetadata = {
  id: 'radio',
  name: 'Radio',
  description: 'A single-selection input control from a group of options. Radio buttons are ideal when users need to choose exactly one option from multiple choices.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Radio',
  dependencies: ['react'],
  tags: ['radio', 'form', 'input', 'selection', 'choice', 'single-select'],
  relatedComponents: ['Checkbox', 'FormGroup', 'Select', 'Button'],
  features: [
    'Single selection from a group',
    'Mutually exclusive options',
    'Disabled state support',
    'Validation states (invalid, valid)',
    'Glass morphism effect support',
    'Full accessibility support with ARIA attributes',
    'Keyboard navigation support',
    'Custom label support with ReactNode',
    'Horizontal and vertical layouts'
  ],
  props: [
    {
      name: 'label',
      type: 'ReactNode',
      description: 'Radio label text or element',
      required: false
    },
    {
      name: 'checked',
      type: 'boolean',
      description: 'Whether the radio is checked',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'onChange',
      type: '(event: ChangeEvent<HTMLInputElement>) => void',
      description: 'Change event handler',
      required: false
    },
    {
      name: 'name',
      type: 'string',
      description: 'Radio group name (must be same for all radios in a group) (Required)',
      required: true
    },
    {
      name: 'value',
      type: 'string',
      description: 'Radio value attribute',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the radio is disabled',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether the radio is required',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'id',
      type: 'string',
      description: 'Radio ID',
      required: false
    },
    {
      name: 'invalid',
      type: 'boolean',
      description: 'Whether the radio has validation errors',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'valid',
      type: 'boolean',
      description: 'Whether the radio has passed validation',
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
      title: 'Basic Radio Group',
      description: 'Simple radio button group for single selection',
      code: `import { Radio } from '@shohojdhara/atomix';

function RadioGroup() {
  const [selected, setSelected] = useState('option1');

  return (
    <div className="u-gap-3">
      <h3>Choose an option</h3>
      <Radio
        name="choice"
        label="Option 1"
        value="option1"
        checked={selected === 'option1'}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        name="choice"
        label="Option 2"
        value="option2"
        checked={selected === 'option2'}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        name="choice"
        label="Option 3"
        value="option3"
        checked={selected === 'option3'}
        onChange={(e) => setSelected(e.target.value)}
      />
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Horizontal Layout',
      description: 'Radio buttons arranged horizontally',
      code: `function HorizontalRadioGroup() {
  const [selected, setSelected] = useState('small');

  return (
    <div className="u-d-flex u-gap-4">
      <Radio
        name="size"
        label="Small"
        value="small"
        checked={selected === 'small'}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        name="size"
        label="Medium"
        value="medium"
        checked={selected === 'medium'}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        name="size"
        label="Large"
        value="large"
        checked={selected === 'large'}
        onChange={(e) => setSelected(e.target.value)}
      />
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'With Descriptions',
      description: 'Radio buttons with additional description text',
      code: `function RadioWithDescriptions() {
  const [plan, setPlan] = useState('basic');

  return (
    <div className="u-gap-4">
      <Radio
        name="plan"
        label={
          <div>
            <div style={{ fontWeight: '600' }}>Basic Plan</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>
              $9/month - Perfect for individuals
            </div>
          </div>
        }
        value="basic"
        checked={plan === 'basic'}
        onChange={(e) => setPlan(e.target.value)}
      />
      <Radio
        name="plan"
        label={
          <div>
            <div style={{ fontWeight: '600' }}>Pro Plan</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.7 }}>
              $29/month - Best for teams
            </div>
          </div>
        }
        value="pro"
        checked={plan === 'pro'}
        onChange={(e) => setPlan(e.target.value)}
      />
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Disabled Options',
      description: 'Radio group with some disabled options',
      code: `function DisabledRadioGroup() {
  const [selected, setSelected] = useState('option1');

  return (
    <div className="u-gap-3">
      <Radio
        name="choice"
        label="Option 1"
        value="option1"
        checked={selected === 'option1'}
        onChange={(e) => setSelected(e.target.value)}
      />
      <Radio
        name="choice"
        label="Option 2 (Disabled)"
        value="option2"
        checked={selected === 'option2'}
        onChange={(e) => setSelected(e.target.value)}
        disabled
      />
      <Radio
        name="choice"
        label="Option 3"
        value="option3"
        checked={selected === 'option3'}
        onChange={(e) => setSelected(e.target.value)}
      />
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Validation States',
      description: 'Radio group with validation',
      code: `function ValidationStates() {
  const [selected, setSelected] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setIsInvalid(false);
  };

  return (
    <div className="u-gap-3">
      <Radio
        name="required-choice"
        label="Option 1"
        value="option1"
        checked={selected === 'option1'}
        onChange={handleChange}
        invalid={isInvalid}
        required
      />
      <Radio
        name="required-choice"
        label="Option 2"
        value="option2"
        checked={selected === 'option2'}
        onChange={handleChange}
        invalid={isInvalid}
        required
      />
      {isInvalid && (
        <div className="u-text-error u-fs-sm">
          Please select an option
        </div>
      )}
    </div>
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Radio component follows WCAG accessibility guidelines with proper keyboard navigation, ARIA attributes, and screen reader support. Radio groups ensure only one option can be selected.',
    keyboardSupport: [
      {
        key: 'Arrow Keys',
        action: 'Navigate between radio options in the same group'
      },
      {
        key: 'Space',
        action: 'Selects the focused radio option'
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
        attribute: 'aria-checked',
        description: 'Indicates checked state',
        required: false
      },
      {
        attribute: 'aria-disabled',
        description: 'Indicates disabled state',
        required: false
      }
    ],
    guidelines: [
      'Always provide labels: Use label prop or provide aria-label',
      'Use the same name attribute for all radios in a group',
      'Provide error messages for invalid states',
      'Ensure keyboard navigation works correctly',
      'Group related radio buttons visually and semantically'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Radio receives focus when tabbed to',
      'Arrow keys navigate within the radio group',
      'Selected state is announced to screen readers',
      'Validation states are communicated',
      'Helper text and error messages are associated correctly'
    ]
  }
};


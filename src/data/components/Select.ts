export const selectMetadata = {
  id: 'select',
  name: 'Select',
  description: 'A dropdown selection interface for choosing one or multiple options from a list. It supports single and multiple selection modes, validation states, and glass morphism effects.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Select',
  dependencies: ['react'],
  tags: ['select', 'dropdown', 'form', 'field', 'option', 'choice'],
  relatedComponents: ['FormGroup', 'Input', 'Checkbox', 'Radio', 'Button'],
  features: [
    'Single and multiple selection modes',
    'Multiple sizes (sm: 32px, md: 40px, lg: 48px)',
    'Validation states (invalid, valid)',
    'Disabled options support',
    'Glass morphism effect support',
    'Full accessibility support with ARIA attributes',
    'Keyboard navigation support',
    'Integration with FormGroup component'
  ],
  props: [
    {
      name: 'options',
      type: 'SelectOption[]',
      description: 'Array of select options (Required)',
      required: true
    },
    {
      name: 'value',
      type: 'string | string[]',
      description: 'Selected value(s)',
      required: false
    },
    {
      name: 'onChange',
      type: '(event: ChangeEvent<HTMLSelectElement>) => void',
      description: 'Change event handler',
      required: false
    },
    {
      name: 'onBlur',
      type: '(event: FocusEvent<HTMLSelectElement>) => void',
      description: 'Blur event handler',
      required: false
    },
    {
      name: 'onFocus',
      type: '(event: FocusEvent<HTMLSelectElement>) => void',
      description: 'Focus event handler',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text',
      required: false,
      defaultValue: "'Select an option'"
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the select is disabled',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether the select is required',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'id',
      type: 'string',
      description: 'Select ID',
      required: false
    },
    {
      name: 'name',
      type: 'string',
      description: 'Select name attribute',
      required: false
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Size of the select',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'invalid',
      type: 'boolean',
      description: 'Whether the select has validation errors',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'valid',
      type: 'boolean',
      description: 'Whether the select has passed validation',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'multiple',
      type: 'boolean',
      description: 'Whether multiple options can be selected',
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
      title: 'Basic Select',
      description: 'Simple dropdown selection with options',
      code: `import { Select, FormGroup } from '@shohojdhara/atomix';

function BasicSelect() {
  const [value, setValue] = useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <FormGroup label="Choose an option">
      <Select
        options={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Select an option"
      />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'Multiple Selection',
      description: 'Select multiple options from a list',
      code: `import { Select, FormGroup } from '@shohojdhara/atomix';
import { useState } from 'react';

function MultipleSelect() {
  const [values, setValues] = useState([]);

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
  ];

  return (
    <FormGroup label="Languages">
      <Select
        options={languages}
        value={values}
        onChange={(e) => {
          const selected = Array.from(
            e.target.selectedOptions,
            option => option.value
          );
          setValues(selected);
        }}
        multiple
        placeholder="Select languages"
      />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'With Disabled Options',
      description: 'Select with some options disabled',
      code: `import { Select, FormGroup } from '@shohojdhara/atomix';

function SelectWithDisabled() {
  const options = [
    { value: 'active1', label: 'Active Option 1' },
    { value: 'active2', label: 'Active Option 2' },
    { value: 'disabled1', label: 'Disabled Option', disabled: true },
    { value: 'active3', label: 'Active Option 3' },
  ];

  return (
    <FormGroup label="Select with disabled options">
      <Select options={options} placeholder="Choose an option" />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'Validation States',
      description: 'Select with invalid and valid states',
      code: `function ValidationStates() {
  const [value, setValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const options = [
    { value: 'valid', label: 'Valid Option' },
    { value: 'invalid', label: 'Invalid Option' },
  ];

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsInvalid(newValue === 'invalid');
    setIsValid(newValue === 'valid');
  };

  return (
    <div className="u-gap-4">
      <FormGroup
        label="Invalid State"
        helperText="This field has an error"
        invalid={isInvalid}
      >
        <Select
          options={options}
          value={value}
          onChange={handleChange}
          invalid={isInvalid}
          placeholder="Select an option"
        />
      </FormGroup>

      <FormGroup
        label="Valid State"
        helperText="This field is valid"
        valid={isValid}
      >
        <Select
          options={options}
          value={value}
          onChange={handleChange}
          valid={isValid}
          placeholder="Select an option"
        />
      </FormGroup>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Select Sizes',
      description: 'Different sizes for different contexts',
      code: `function SelectSizes() {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  return (
    <div className="u-flex u-flex-column u-gap-3" style={{ width: '300px' }}>
      <FormGroup label="Small">
        <Select options={options} size="sm" placeholder="Small select" />
      </FormGroup>
      <FormGroup label="Medium">
        <Select options={options} size="md" placeholder="Medium select" />
      </FormGroup>
      <FormGroup label="Large">
        <Select options={options} size="lg" placeholder="Large select" />
      </FormGroup>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Disabled State',
      description: 'Select in disabled state',
      code: `import { Select, FormGroup } from '@shohojdhara/atomix';

function DisabledSelect() {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  return (
    <FormGroup label="Disabled Select">
      <Select
        options={options}
        value="1"
        disabled
        placeholder="This select is disabled"
      />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'Glass Effect',
      description: 'Select with glass morphism effect',
      code: `function GlassSelect() {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  return (
    <FormGroup label="Glass Select">
      <Select
        options={options}
        glass={true}
        placeholder="Select with glass effect"
      />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'Custom Glass Configuration',
      description: 'Select with custom glass morphism settings',
      code: `import { Select, FormGroup } from '@shohojdhara/atomix';

function CustomGlassSelect() {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  return (
    <FormGroup label="Custom Glass">
      <Select
        options={options}
        glass={{
          displacementScale: 60,
          blurAmount: 1,
          saturation: 180,
          aberrationIntensity: 0.2,
          cornerRadius: 12,
          mode: 'shader',
        }}
        placeholder="Custom glass select"
      />
    </FormGroup>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Select component follows WCAG accessibility guidelines with proper keyboard navigation, ARIA attributes, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Tab',
        action: 'Moves focus to the select'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus away from the select'
      },
      {
        key: 'Enter/Space',
        action: 'Opens/closes the dropdown'
      },
      {
        key: 'Arrow Keys',
        action: 'Navigate through options'
      },
      {
        key: 'Escape',
        action: 'Closes the dropdown'
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
        attribute: 'aria-expanded',
        description: 'Indicates dropdown open/closed state',
        required: false
      },
      {
        attribute: 'aria-disabled',
        description: 'Indicates disabled state',
        required: false
      }
    ],
    guidelines: [
      'Always provide labels: Use FormGroup with a label or provide aria-label',
      'Use helper text for guidance',
      'Provide error messages for invalid states',
      'Mark required fields appropriately',
      'Ensure keyboard navigation works correctly'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Select receives focus when tabbed to',
      'Dropdown state is communicated to screen readers',
      'Selected options are announced',
      'Validation states are communicated'
    ]
  }
};


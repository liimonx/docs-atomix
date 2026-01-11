export const checkboxMetadata = {
  id: 'checkbox',
  name: 'Checkbox',
  description: 'A boolean input control with support for checked, unchecked, and indeterminate states. It\'s ideal for single selections, multiple selections, and toggle functionality.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Checkbox',
  dependencies: ['react'],
  tags: ['checkbox', 'form', 'input', 'boolean', 'selection', 'toggle'],
  relatedComponents: ['Radio', 'FormGroup', 'Input', 'Button'],
  features: [
    'Checked and unchecked states',
    'Indeterminate state for parent checkboxes',
    'Disabled state support',
    'Validation states (invalid, valid)',
    'Glass morphism effect support',
    'Full accessibility support with ARIA attributes',
    'Keyboard navigation support',
    'Custom label support with ReactNode'
  ],
  props: [
    {
      name: 'label',
      type: 'ReactNode',
      description: 'Checkbox label text or element',
      required: false
    },
    {
      name: 'checked',
      type: 'boolean',
      description: 'Whether the checkbox is checked',
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
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the checkbox is disabled',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether the checkbox is required',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'id',
      type: 'string',
      description: 'Checkbox ID',
      required: false
    },
    {
      name: 'name',
      type: 'string',
      description: 'Checkbox name attribute',
      required: false
    },
    {
      name: 'value',
      type: 'string',
      description: 'Checkbox value attribute',
      required: false
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      description: 'Whether the checkbox is in indeterminate state',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'invalid',
      type: 'boolean',
      description: 'Whether the checkbox has validation errors',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'valid',
      type: 'boolean',
      description: 'Whether the checkbox has passed validation',
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
      title: 'Basic Checkbox',
      description: 'Simple checkbox with label',
      code: `import { Checkbox } from '@shohojdhara/atomix';

function BasicCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Accept terms and conditions"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Checkbox Group',
      description: 'Multiple checkboxes for notification preferences',
      code: `function CheckboxGroup() {
  const [selected, setSelected] = useState({
    email: false,
    sms: false,
    push: false,
  });

  const handleChange = (key) => (e) => {
    setSelected(prev => ({
      ...prev,
      [key]: e.target.checked,
    }));
  };

  return (
    <div className="u-gap-3">
      <h3>Notification Preferences</h3>
      <Checkbox
        label="Email notifications"
        checked={selected.email}
        onChange={handleChange('email')}
      />
      <Checkbox
        label="SMS notifications"
        checked={selected.sms}
        onChange={handleChange('sms')}
      />
      <Checkbox
        label="Push notifications"
        checked={selected.push}
        onChange={handleChange('push')}
      />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Indeterminate State',
      description: 'Parent checkbox with indeterminate state for "Select All" functionality',
      code: `function IndeterminateCheckbox() {
  const [allChecked, setAllChecked] = useState(false);
  const [items, setItems] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const allItemsChecked = Object.values(items).every(Boolean);
  const someItemsChecked = Object.values(items).some(Boolean);

  useEffect(() => {
    setAllChecked(allItemsChecked);
  }, [allItemsChecked]);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setItems({
      item1: checked,
      item2: checked,
      item3: checked,
    });
  };

  return (
    <div className="u-gap-3">
      <Checkbox
        label="Select All"
        checked={allChecked}
        indeterminate={someItemsChecked && !allChecked}
        onChange={handleSelectAll}
      />
      <div className="u-pl-4 u-gap-2">
        <Checkbox
          label="Item 1"
          checked={items.item1}
          onChange={(e) => setItems(prev => ({ ...prev, item1: e.target.checked }))}
        />
        <Checkbox
          label="Item 2"
          checked={items.item2}
          onChange={(e) => setItems(prev => ({ ...prev, item2: e.target.checked }))}
        />
        <Checkbox
          label="Item 3"
          checked={items.item3}
          onChange={(e) => setItems(prev => ({ ...prev, item3: e.target.checked }))}
        />
      </div>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'With Description',
      description: 'Checkbox with additional description text',
      code: `function CheckboxWithDescription() {
  return (
    <Checkbox
      label={
        <div>
          <div>Enable two-factor authentication</div>
          <div style={{ fontSize: '0.875rem', opacity: 0.7, marginTop: '0.25rem' }}>
            Add an extra layer of security to your account
          </div>
        </div>
      }
      checked={false}
      onChange={() => {}}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Disabled State',
      description: 'Checkboxes in disabled states',
      code: `import { Checkbox } from '@shohojdhara/atomix';

function DisabledCheckbox() {
  return (
    <div className="u-gap-3">
      <Checkbox
        label="Enabled checkbox"
        checked={true}
      />
      <Checkbox
        label="Disabled unchecked"
        disabled
      />
      <Checkbox
        label="Disabled checked"
        checked={true}
        disabled
      />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Validation States',
      description: 'Checkbox with invalid and valid states',
      code: `function ValidationStates() {
  const [checked, setChecked] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    setIsInvalid(!newChecked);
  };

  return (
    <div className="u-gap-3">
      <Checkbox
        label="I agree to the terms"
        checked={checked}
        onChange={handleChange}
        invalid={isInvalid}
      />
      {isInvalid && (
        <div className="u-text-error u-fs-sm">
          You must agree to the terms to continue
        </div>
      )}
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Glass Effect',
      description: 'Checkbox with glass morphism effect',
      code: `import { Checkbox } from '@shohojdhara/atomix';

function GlassCheckbox() {
  return (
    <div
      style={{
        background: 'url(https://example.com/background.jpg)',
        padding: '2rem',
        borderRadius: '12px',
        backgroundSize: 'cover',
      }}
    >
      <Checkbox
        label="Glass effect checkbox"
        glass={true}
      />
    </div>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Checkbox component follows WCAG accessibility guidelines with proper keyboard navigation, ARIA attributes, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Space',
        action: 'Toggles the checkbox state'
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
        description: 'Indicates checked state (true, false, or mixed for indeterminate)',
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
      'Use helper text for guidance when needed',
      'Provide error messages for invalid states',
      'Ensure keyboard navigation works correctly',
      'Use indeterminate state appropriately for parent checkboxes'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Checkbox receives focus when tabbed to',
      'Checked state is announced to screen readers',
      'Indeterminate state is communicated as "mixed"',
      'Validation states are announced',
      'Helper text and error messages are associated correctly'
    ]
  }
};


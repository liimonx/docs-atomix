export const inputMetadata = {
  id: 'input',
  name: 'Input',
  description: 'A flexible and accessible text input field with support for various types, sizes, validation states, and styling options. It serves as the foundation for collecting user text input in forms and interactive interfaces.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Input',
  dependencies: ['react'],
  tags: ['input', 'text', 'form', 'field', 'validation', 'textfield'],
  relatedComponents: ['Form', 'FormGroup', 'Textarea', 'Select', 'Button'],
  features: [
    'Multiple input types (text, email, password, number, tel, url, search, date, time, datetime-local)',
    'Multiple sizes (sm, md, lg)',
    'Validation states (invalid, valid)',
    'Icon support (left and right icons)',
    'Placeholder and label support',
    'Disabled and readonly states',
    'Controlled and uncontrolled modes',
    'Glass morphism effect support',
    'Full accessibility support with ARIA attributes',
    'Character counter support',
    'Auto-complete support',
    'Pattern validation support'
  ],
  props: [
    {
      name: 'type',
      type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local'",
      description: 'HTML input type. Different types enable appropriate keyboards on mobile devices and provide built-in validation.',
      required: false,
      defaultValue: "'text'"
    },
    {
      name: 'value',
      type: 'string',
      description: 'Controlled input value',
      required: false
    },
    {
      name: 'defaultValue',
      type: 'string',
      description: 'Default input value for uncontrolled mode',
      required: false
    },
    {
      name: 'onChange',
      type: '(event: ChangeEvent<HTMLInputElement>) => void',
      description: 'Change event handler',
      required: false
    },
    {
      name: 'onBlur',
      type: '(event: FocusEvent<HTMLInputElement>) => void',
      description: 'Blur event handler',
      required: false
    },
    {
      name: 'onFocus',
      type: '(event: FocusEvent<HTMLInputElement>) => void',
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
      description: 'Whether the input is disabled',
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
      name: 'readOnly',
      type: 'boolean',
      description: 'Whether the input is read-only',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Size of the input (sm: 32px, md: 40px, lg: 48px height)',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'variant',
      type: 'string',
      description: 'Visual variant of the input',
      required: false
    },
    {
      name: 'invalid',
      type: 'boolean',
      description: 'Whether the input has validation errors',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'valid',
      type: 'boolean',
      description: 'Whether the input has passed validation',
      required: false,
      defaultValue: 'false'
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
      name: 'pattern',
      type: 'string',
      description: 'Regular expression pattern for validation',
      required: false
    },
    {
      name: 'min',
      type: 'string | number',
      description: 'Minimum value (for number/date inputs)',
      required: false
    },
    {
      name: 'max',
      type: 'string | number',
      description: 'Maximum value (for number/date inputs)',
      required: false
    },
    {
      name: 'step',
      type: 'string | number',
      description: 'Step value (for number inputs)',
      required: false
    },
    {
      name: 'autoComplete',
      type: 'string',
      description: 'HTML autocomplete attribute (e.g., "email", "current-password", "tel")',
      required: false
    },
    {
      name: 'autoFocus',
      type: 'boolean',
      description: 'Whether to auto-focus the input',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'id',
      type: 'string',
      description: 'HTML id attribute',
      required: false
    },
    {
      name: 'name',
      type: 'string',
      description: 'HTML name attribute',
      required: false
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false,
      defaultValue: "''"
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
    }
  ],
  examples: [
    {
      title: 'Basic Input',
      description: 'A simple text input field with FormGroup',
      code: `import { Input, FormGroup } from '@shohojdhara/atomix';

function ContactForm() {
  const [name, setName] = useState('');

  return (
    <FormGroup label="Full Name" required>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your full name"
      />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'Input Sizes',
      description: 'Three different input sizes',
      code: `import { Input, FormGroup } from '@shohojdhara/atomix';

<div className="input-sizes">
  <FormGroup label="Small Input">
    <Input size="sm" placeholder="Small input" />
  </FormGroup>

  <FormGroup label="Medium Input">
    <Input size="md" placeholder="Medium input" />
  </FormGroup>

  <FormGroup label="Large Input">
    <Input size="lg" placeholder="Large input" />
  </FormGroup>
</div>`,
      preview: true
    },
    {
      title: 'Input Types',
      description: 'Different input types for various use cases',
      code: `import { Input, FormGroup } from '@shohojdhara/atomix';

<div className="input-types">
  <FormGroup label="Full Name">
    <Input type="text" placeholder="Enter your full name" />
  </FormGroup>

  <FormGroup label="Email Address">
    <Input type="email" placeholder="name@example.com" />
  </FormGroup>

  <FormGroup label="Password">
    <Input type="password" placeholder="Enter your password" />
  </FormGroup>

  <FormGroup label="Age">
    <Input type="number" min="18" max="120" placeholder="Enter your age" />
  </FormGroup>

  <FormGroup label="Search">
    <Input type="search" placeholder="Search products..." />
  </FormGroup>
</div>`,
      preview: true
    },
    {
      title: 'Validation States',
      description: 'Input with validation feedback using invalid and valid props',
      code: `import { Input, FormGroup } from '@shohojdhara/atomix';
import { useState } from 'react';

function ValidationExample() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    const valid = emailRegex.test(value);
    setIsValid(valid && value.length > 0);
    setIsInvalid(!valid && value.length > 0);
  };

  return (
    <FormGroup
      label="Email Address"
      helperText={isValid ? "Email looks good!" : "Enter a valid email address"}
      valid={isValid}
      invalid={isInvalid}
    >
      <Input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
        placeholder="name@example.com"
        valid={isValid}
        invalid={isInvalid}
      />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'Input with Icons',
      description: 'Input with left and right icons',
      code: `import { Input, FormGroup, Icon } from '@shohojdhara/atomix';
import { useState } from 'react';

function InputWithIcons() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {/* Input with left icon */}
      <FormGroup label="Search Products">
        <div className="input-with-icon">
          <Icon name="MagnifyingGlass" className="input-icon input-icon--left" />
          <Input
            type="search"
            placeholder="Search for products..."
            className="pl-10"
          />
        </div>
      </FormGroup>

      {/* Password input with toggle */}
      <FormGroup label="Password">
        <div className="input-with-icon">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="pr-10"
          />
          <button
            type="button"
            className="input-icon input-icon--right"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Icon name={showPassword ? "EyeSlash" : "Eye"} />
          </button>
        </div>
      </FormGroup>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Controlled vs Uncontrolled',
      description: 'Examples of controlled and uncontrolled input modes',
      code: `import { Input, FormGroup } from '@shohojdhara/atomix';
import { useState, useRef } from 'react';

// Controlled input
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <FormGroup label="Controlled Input">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Current value: {value}</p>
    </FormGroup>
  );
}

// Uncontrolled input with ref
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert(\`Value: \${inputRef.current.value}\`);
  };

  return (
    <div>
      <FormGroup label="Uncontrolled Input">
        <Input
          ref={inputRef}
          defaultValue="Initial value"
          placeholder="Type something..."
        />
      </FormGroup>
      <Button onClick={handleSubmit} label="Get Value" />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Input with Character Counter',
      description: 'Input with character limit and counter display',
      code: `import { Input, FormGroup } from '@shohojdhara/atomix';
import { useState } from 'react';

function InputWithCounter() {
  const [text, setText] = useState('');
  const maxLength = 100;
  const remaining = maxLength - text.length;

  return (
    <FormGroup
      label="Bio"
      helperText={
        <div className="flex justify-between">
          <span>Tell us about yourself</span>
          <span className={remaining < 10 ? 'text-error' : 'text-muted'}>
            {remaining} characters remaining
          </span>
        </div>
      }
    >
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
        placeholder="Write a short bio..."
      />
    </FormGroup>
  );
}`,
      preview: true
    },
    {
      title: 'Glass Effect Input',
      description: 'Input with glass morphism effect',
      code: `import { Input, FormGroup, Button } from '@shohojdhara/atomix';

<form className="glass-form">
  <FormGroup label="Email">
    <Input
      type="email"
      glass={true}
      placeholder="your@email.com"
    />
  </FormGroup>
  <FormGroup label="Password">
    <Input
      type="password"
      glass={true}
      placeholder="••••••••"
    />
  </FormGroup>
  <Button variant="primary" glass={true}>
    Sign In
  </Button>
</form>`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Input component follows WCAG accessibility guidelines with proper labeling, ARIA attributes, and keyboard navigation support.',
    keyboardSupport: [
      { key: 'Tab', action: 'Moves focus to the input' },
      { key: 'Shift + Tab', action: 'Moves focus away from the input' },
      { key: 'Arrow keys', action: 'Navigate within text (standard text input behavior)' },
      { key: 'Home/End', action: 'Move to beginning/end of text' },
      { key: 'Ctrl+A', action: 'Select all text' },
      { key: 'Enter', action: 'Submit form (when inside a form)' }
    ],
    ariaAttributes: [
      { attribute: 'aria-label', description: 'Accessible label for the input when label is not visible', required: false },
      { attribute: 'aria-describedby', description: 'References error or help text', required: false },
      { attribute: 'aria-invalid', description: 'Indicates validation state (automatically set when invalid prop is true)', required: false },
      { attribute: 'aria-required', description: 'Indicates required field (automatically set when required prop is true)', required: false },
      { attribute: 'aria-disabled', description: 'Indicates disabled state', required: false }
    ],
    guidelines: [
      'Always provide labels: Use FormGroup with label prop or aria-label',
      'Use appropriate input types: Enable correct keyboards on mobile devices',
      'Provide clear error messages: Use helperText in FormGroup with invalid state',
      'Use autocomplete attributes: Help users fill forms faster (e.g., autoComplete="email")',
      'Ensure proper color contrast: Validation states must meet WCAG AA standards'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Input receives focus when tabbed to',
      'Clear focus indicator with proper contrast',
      'Focus moves logically through form fields',
      'Error messages are announced to screen readers via aria-describedby',
      'Required fields are announced to screen readers'
    ]
  }
};


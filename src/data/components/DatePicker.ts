export const datePickerMetadata = {
  id: 'date-picker',
  name: 'Date Picker',
  description: 'A date input component with calendar picker functionality, validation support, and full accessibility features. Allows users to select dates with ease.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/DatePicker',
  dependencies: ['react'],
  tags: ['date', 'picker', 'calendar', 'form', 'field', 'validation'],
  relatedComponents: ['Input', 'Form', 'Select'],
  features: [
    'Calendar popup for date selection',
    'Multiple date formats support',
    'Date range selection',
    'Min and max date constraints',
    'Validation states (error, success, warning)',
    'Multiple sizes (sm, md, lg)',
    'Icon support',
    'Placeholder and label support',
    'Disabled and readonly states',
    'Full accessibility support with ARIA attributes',
    'Keyboard navigation support',
    'Localization support'
  ],
  props: [
    {
      name: 'value',
      type: 'Date | string',
      description: 'The selected date value (controlled)',
      required: false
    },
    {
      name: 'defaultValue',
      type: 'Date | string',
      description: 'The default date value (uncontrolled)',
      required: false
    },
    {
      name: 'onChange',
      type: '(date: Date | null) => void',
      description: 'Callback function when date changes',
      required: false
    },
    {
      name: 'placeholder',
      type: 'string',
      description: 'Placeholder text',
      required: false,
      defaultValue: "'Select a date'"
    },
    {
      name: 'label',
      type: 'string',
      description: 'Label text for the date picker',
      required: false
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Size of the date picker',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'variant',
      type: "'default' | 'dark' | 'light'",
      description: 'Visual style variant',
      required: false,
      defaultValue: "'default'"
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the date picker is disabled',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'readOnly',
      type: 'boolean',
      description: 'Whether the date picker is read-only',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'required',
      type: 'boolean',
      description: 'Whether the date picker is required',
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
      name: 'minDate',
      type: 'Date | string',
      description: 'Minimum selectable date',
      required: false
    },
    {
      name: 'maxDate',
      type: 'Date | string',
      description: 'Maximum selectable date',
      required: false
    },
    {
      name: 'dateFormat',
      type: 'string',
      description: 'Date format string (e.g., "MM/DD/YYYY", "DD-MM-YYYY")',
      required: false,
      defaultValue: "'MM/DD/YYYY'"
    },
    {
      name: 'showCalendarIcon',
      type: 'boolean',
      description: 'Whether to show calendar icon',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'locale',
      type: 'string',
      description: 'Locale for date formatting and calendar',
      required: false,
      defaultValue: "'en-US'"
    },
    {
      name: 'firstDayOfWeek',
      type: '0 | 1',
      description: 'First day of week (0 = Sunday, 1 = Monday)',
      required: false,
      defaultValue: '0'
    },
    {
      name: 'onFocus',
      type: '(event: FocusEvent<HTMLInputElement>) => void',
      description: 'Callback function when date picker receives focus',
      required: false
    },
    {
      name: 'onBlur',
      type: '(event: FocusEvent<HTMLInputElement>) => void',
      description: 'Callback function when date picker loses focus',
      required: false
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
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
      description: 'ARIA described-by attribute',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Date Picker',
      description: 'A simple date picker with calendar popup',
      code: `import { DatePicker } from '@shohojdhara/atomix';

function BasicDatePicker() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DatePicker
      label="Select Date"
      value={date}
      onChange={setDate}
      placeholder="Choose a date"
    />
  );
}`,
      preview: null
    },
    {
      title: 'Date Picker Sizes',
      description: 'Three different date picker sizes',
      code: `<DatePicker size="sm" label="Small" />
<DatePicker size="md" label="Medium" />
<DatePicker size="lg" label="Large" />`,
      preview: null
    },
    {
      title: 'With Date Constraints',
      description: 'Date picker with min and max date limits',
      code: `function DatePickerWithConstraints() {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  return (
    <DatePicker
      label="Select Date (Next 7 Days)"
      minDate={today}
      maxDate={nextWeek}
      placeholder="Choose a date"
    />
  );
}`,
      preview: null
    },
    {
      title: 'Validation States',
      description: 'Date picker with validation feedback',
      code: `<DatePicker 
  label="Birth Date"
  error="Please select a valid date"
/>
<DatePicker 
  label="Appointment Date"
  success
  placeholder="Date selected"
/>
<DatePicker 
  label="Event Date"
  warning="Date is in the past"
/>`,
      preview: null
    },
    {
      title: 'Custom Date Format',
      description: 'Date picker with custom date format',
      code: `<DatePicker 
  label="Date (DD-MM-YYYY)"
  dateFormat="DD-MM-YYYY"
  placeholder="DD-MM-YYYY"
/>
<DatePicker 
  label="Date (YYYY/MM/DD)"
  dateFormat="YYYY/MM/DD"
  placeholder="YYYY/MM/DD"
/>`,
      preview: null
    },
    {
      title: 'Disabled and Readonly',
      description: 'Date picker in disabled and readonly states',
      code: `<DatePicker 
  disabled
  label="Disabled Date Picker"
  placeholder="Cannot select"
/>
<DatePicker 
  readOnly
  label="Read-only Date Picker"
  value={new Date()}
/>`,
      preview: null
    },
    {
      title: 'With Default Value',
      description: 'Date picker with pre-selected date',
      code: `function DatePickerWithDefault() {
  const defaultDate = new Date(2024, 0, 15); // January 15, 2024

  return (
    <DatePicker
      label="Event Date"
      defaultValue={defaultDate}
      onChange={(date) => console.log('Selected:', date)}
    />
  );
}`,
      preview: null
    },
    {
      title: 'Custom Locale',
      description: 'Date picker with custom locale and first day of week',
      code: `<DatePicker 
  label="Date (Monday First)"
  locale="en-US"
  firstDayOfWeek={1}
  placeholder="Select date"
/>
<DatePicker 
  label="Date (French)"
  locale="fr-FR"
  placeholder="Sélectionner une date"
/>`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The DatePicker component follows WCAG 2.1 accessibility guidelines with proper keyboard navigation, ARIA attributes, and screen reader support. The calendar popup is fully keyboard accessible.',
    keyboardSupport: [
      {
        key: 'Tab',
        action: 'Move focus to the date picker input'
      },
      {
        key: 'Enter',
        action: 'Open/close calendar popup'
      },
      {
        key: 'Escape',
        action: 'Close calendar popup'
      },
      {
        key: 'Arrow Keys',
        action: 'Navigate dates in calendar popup'
      },
      {
        key: 'Page Up/Down',
        action: 'Navigate months in calendar popup'
      },
      {
        key: 'Home/End',
        action: 'Navigate to first/last day of month'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'aria-label',
        description: 'Accessible label for the date picker',
        required: false
      },
      {
        attribute: 'aria-describedby',
        description: 'References error or help text',
        required: false
      },
      {
        attribute: 'aria-invalid',
        description: 'Indicates validation state',
        required: false
      },
      {
        attribute: 'aria-required',
        description: 'Indicates required field',
        required: false
      },
      {
        attribute: 'aria-disabled',
        description: 'Indicates disabled state',
        required: false
      },
      {
        attribute: 'aria-expanded',
        description: 'Indicates if calendar popup is open',
        required: false
      },
      {
        attribute: 'aria-haspopup',
        description: 'Indicates the presence of a popup (calendar)',
        required: false
      }
    ],
    guidelines: [
      'Always provide labels: Use label prop or provide aria-label',
      'Provide clear error messages for invalid dates',
      'Ensure keyboard navigation works correctly',
      'Calendar popup should be focusable and keyboard navigable',
      'Selected date should be clearly indicated',
      'Disabled dates should be visually distinct and not selectable',
      'Date format should be clear and consistent'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Date picker receives focus when tabbed to',
      'Calendar popup opens with focus on current or selected date',
      'Focus moves logically through calendar dates',
      'Focus returns to input when calendar closes',
      'Error messages are announced to screen readers',
      'Selected date is announced when changed'
    ]
  }
};


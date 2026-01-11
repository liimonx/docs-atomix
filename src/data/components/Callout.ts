// import { Callout } from '@shohojdhara/atomix';

export const calloutMetadata = {
  id: 'callout',
  name: 'Callout',
  description: 'A component used to display important messages, notifications, alerts, or highlighted information blocks. It supports multiple variants, icons, actions, and can be configured as dismissible or toast notifications.',
  category: 'Feedback',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Callout',
  dependencies: ['react'],
  tags: ['callout', 'alert', 'notification', 'message', 'info', 'warning', 'error', 'success'],
  relatedComponents: ['Card', 'Modal', 'Messages', 'Badge'],
  features: [
    'Multiple color variants (primary, secondary, success, warning, error, info, light, dark)',
    'Icon support for enhanced visual communication',
    'Title and content sections',
    'Dismissible with close button',
    'Action buttons support',
    'One-line compact mode',
    'Toast notification mode',
    'Glass morphism effect support',
    'Full accessibility support with ARIA attributes'
  ],
  props: [
    {
      name: 'title',
      type: 'ReactNode',
      description: 'Callout title/heading',
      required: false
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Callout content/message',
      required: false
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'Icon to display',
      required: false
    },
    {
      name: 'variant',
      type: "ThemeColor | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'light' | 'dark'",
      description: 'Color variant',
      required: false,
      defaultValue: "'primary'"
    },
    {
      name: 'onClose',
      type: '() => void',
      description: 'Close handler (makes callout dismissible)',
      required: false
    },
    {
      name: 'actions',
      type: 'ReactNode',
      description: 'Action buttons or elements',
      required: false
    },
    {
      name: 'oneLine',
      type: 'boolean',
      description: 'Display in compact one-line mode',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'toast',
      type: 'boolean',
      description: 'Display as toast notification',
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
      name: 'glass',
      type: 'boolean | AtomixGlassProps',
      description: 'Glass morphism effect for the callout',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom style for the callout',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Callouts',
      description: 'Simple callouts with different variants',
      code: `import { Callout, Icon } from '@shohojdhara/atomix';

function BasicCallouts() {
  return (
    <div className="u-gap-4">
      <Callout
        title="Information"
        variant="primary"
        icon={<Icon name="Info" />}
      >
        This is a basic informational callout.
      </Callout>
      
      <Callout
        title="Success"
        variant="success"
        icon={<Icon name="CheckCircle" />}
      >
        Your changes have been saved successfully.
      </Callout>
      
      <Callout
        title="Warning"
        variant="warning"
        icon={<Icon name="Warning" />}
      >
        Please review your settings before proceeding.
      </Callout>
      
      <Callout
        title="Error"
        variant="error"
        icon={<Icon name="XCircle" />}
      >
        An error occurred while processing your request.
      </Callout>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Dismissible Callouts',
      description: 'Callouts with close button',
      code: `function DismissibleCallouts() {
  const [showCallout, setShowCallout] = useState(true);

  if (!showCallout) return null;

  return (
    <Callout
      title="Dismissible Callout"
      variant="info"
      icon={<Icon name="Info" />}
      onClose={() => setShowCallout(false)}
    >
      This callout can be dismissed by clicking the close button.
    </Callout>
  );
}`,
      preview: true
    },
    {
      title: 'Callouts with Actions',
      description: 'Callouts with action buttons',
      code: `import { Button } from '@shohojdhara/atomix';

function CalloutsWithActions() {
  return (
    <Callout
      title="Action Required"
      variant="warning"
      icon={<Icon name="Warning" />}
      actions={
        <div className="u-d-flex u-gap-2">
          <Button size="sm" variant="primary">Accept</Button>
          <Button size="sm" variant="secondary">Decline</Button>
        </div>
      }
    >
      Please review and accept the terms before continuing.
    </Callout>
  );
}`,
      preview: true
    },
    {
      title: 'One-line Callouts',
      description: 'Compact one-line callout display',
      code: `function OneLineCallouts() {
  return (
    <div className="u-gap-2">
      <Callout
        variant="success"
        oneLine
        icon={<Icon name="CheckCircle" />}
      >
        Operation completed successfully
      </Callout>
      
      <Callout
        variant="error"
        oneLine
        icon={<Icon name="XCircle" />}
      >
        Failed to save changes
      </Callout>
    </div>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Callout component follows WCAG 2.1 guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Escape',
        action: 'Closes the callout (when dismissible)'
      },
      {
        key: 'Tab',
        action: 'Moves focus to the next focusable element'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus to the previous focusable element'
      },
      {
        key: 'Enter',
        action: 'Activates action buttons or close button'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="alert"',
        description: 'Applied automatically for important alerts',
        required: false
      },
      {
        attribute: 'role="status"',
        description: 'Applied for informational messages',
        required: false
      },
      {
        attribute: 'aria-live',
        description: 'Applied to announce callout content to screen readers',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the callout',
        required: false
      }
    ],
    guidelines: [
      'Use appropriate variant colors for message types',
      'Provide clear, descriptive titles and content',
      'Ensure dismissible callouts are keyboard accessible',
      'Use icons to enhance visual communication',
      'Ensure sufficient color contrast for all variants',
      'Announce important callouts to screen readers'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Callout content is announced to screen readers',
      'Close button receives focus when present',
      'Action buttons are keyboard accessible',
      'Focus management depends on callout type (alert vs status)'
    ]
  }
};


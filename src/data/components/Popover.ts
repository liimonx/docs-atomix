// import { Popover } from '@shohojdhara/atomix';

export const popoverMetadata = {
  id: 'popover',
  name: 'Popover',
  description: 'A floating content component that appears relative to a trigger element. Commonly used for tooltips, contextual menus, additional information panels, and interactive overlays that need to be positioned dynamically.',
  category: 'Overlay',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Popover',
  dependencies: ['react'],
  tags: ['popover', 'tooltip', 'overlay', 'floating', 'contextual', 'menu'],
  relatedComponents: ['Tooltip', 'Modal', 'Dropdown', 'Card'],
  features: [
    'Multiple positioning options (top, bottom, left, right, auto)',
    'Hover and click trigger modes',
    'Smart positioning to stay within viewport',
    'Configurable delay and offset',
    'Controlled and uncontrolled modes',
    'Click outside to close',
    'Escape key to close',
    'Full accessibility support with ARIA attributes',
    'Keyboard navigation support'
  ],
  props: [
    {
      name: 'content',
      type: 'ReactNode',
      description: 'Content to be displayed in the popover (Required)',
      required: true
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'The trigger element (Required)',
      required: true
    },
    {
      name: 'position',
      type: "'top' | 'bottom' | 'left' | 'right' | 'auto'",
      description: 'Position of the popover relative to trigger',
      required: false,
      defaultValue: "'top'"
    },
    {
      name: 'trigger',
      type: "'hover' | 'click'",
      description: 'How the popover is triggered',
      required: false,
      defaultValue: "'click'"
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS class for the popover',
      required: false,
      defaultValue: "''"
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Inline style for the popover',
      required: false
    },
    {
      name: 'delay',
      type: 'number',
      description: 'Delay before showing the popover (in milliseconds)',
      required: false,
      defaultValue: '0'
    },
    {
      name: 'offset',
      type: 'number',
      description: 'Offset from the trigger element (in pixels)',
      required: false,
      defaultValue: '12'
    },
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: 'Whether the popover should be open initially',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'isOpen',
      type: 'boolean',
      description: 'Controlled open state',
      required: false
    },
    {
      name: 'onOpenChange',
      type: '(isOpen: boolean) => void',
      description: 'Open state change callback',
      required: false
    },
    {
      name: 'closeOnClickOutside',
      type: 'boolean',
      description: 'Close when clicking outside',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'closeOnEscape',
      type: 'boolean',
      description: 'Close when pressing Escape',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'id',
      type: 'string',
      description: 'Optional ID for the popover',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Popover',
      description: 'Simple popover with click trigger',
      code: `import { Popover } from '@shohojdhara/atomix';

function BasicPopover() {
  return (
    <Popover
      content={
        <div>
          <h4>Popover Title</h4>
          <p>This is some helpful information in a popover.</p>
        </div>
      }
      position="top"
    >
      <button>Show Popover</button>
    </Popover>
  );
}`,
      preview: true
    },
    {
      title: 'Hover Triggered Popover',
      description: 'Popover that appears on hover',
      code: `function HoverPopover() {
  return (
    <Popover
      content="Quick info on hover"
      trigger="hover"
      position="top"
      delay={300}
    >
      <span>Hover over me for more info</span>
    </Popover>
  );
}`,
      preview: true
    },
    {
      title: 'Different Positions',
      description: 'Popover positioned in different directions',
      code: `function PositionExamples() {
  const content = <div>Popover content</div>;

  return (
    <div className="u-d-flex u-gap-4">
      <Popover content={content} position="top">
        <button>Top</button>
      </Popover>

      <Popover content={content} position="right">
        <button>Right</button>
      </Popover>

      <Popover content={content} position="bottom">
        <button>Bottom</button>
      </Popover>

      <Popover content={content} position="left">
        <button>Left</button>
      </Popover>

      <Popover content={content} position="auto">
        <button>Auto</button>
      </Popover>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Controlled Popover',
      description: 'Popover with controlled open state',
      code: `import { useState } from 'react';

function ControlledPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Popover
      </button>
      <Popover
        content={<div>Controlled popover content</div>}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        position="bottom"
      >
        <span>Trigger</span>
      </Popover>
    </div>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Popover component follows WCAG 2.1 guidelines with proper ARIA attributes, keyboard navigation, and focus management.',
    keyboardSupport: [
      {
        key: 'Escape',
        action: 'Closes the popover'
      },
      {
        key: 'Tab',
        action: 'Moves focus within the popover content'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus backward within the popover content'
      },
      {
        key: 'Enter',
        action: 'Activates interactive elements within the popover'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role',
        description: 'Applied automatically (typically "dialog" or "tooltip")',
        required: true
      },
      {
        attribute: 'aria-describedby',
        description: 'References the popover content',
        required: false
      },
      {
        attribute: 'aria-expanded',
        description: 'Indicates whether the popover is open',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the popover',
        required: false
      }
    ],
    guidelines: [
      'Provide descriptive content in popovers',
      'Ensure popovers are keyboard accessible',
      'Manage focus appropriately when opening/closing',
      'Use appropriate ARIA roles and attributes',
      'Ensure popover content is readable and accessible',
      'Provide close mechanisms (Escape key, click outside)'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Focus management depends on popover type (tooltip vs dialog)',
      'Tooltip popovers typically do not trap focus',
      'Dialog popovers should trap focus within',
      'Focus should return to trigger when popover closes',
      'First focusable element in popover should receive focus when opened'
    ]
  }
};


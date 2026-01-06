export const buttonGroupMetadata = {
    id: 'button-group',
    name: 'ButtonGroup',
    description: 'A wrapper component that groups related buttons together, merging their borders and border-radii for a cohesive look.',
    category: 'Actions',
    status: 'stable' as const,
    version: '1.2.0',
    importPath: '@shohojdhara/atomix/ButtonGroup',
    dependencies: ['react'],
    tags: ['button', 'group', 'action', 'toolbar', 'ui'],
    relatedComponents: ['Button', 'Icon'],
    features: [
        'Groups multiple buttons into a single visual unit',
        'Supports horizontal and vertical orientations',
        'Unifies styling (variant, size) across all children',
        'Maintains proper border merging and focus states',
        'Responsive design support',
        'Checkable button logic ready',
    ],
    props: [
        {
            name: 'children',
            type: 'ReactNode',
            description: 'Button components to group together (should be Button components)',
            required: true
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
            description: 'Inline style for the component root element',
            required: false
        },
        {
            name: 'aria-label',
            type: 'string',
            description: 'ARIA label for accessibility (describes the group\'s purpose)',
            required: false
        },
        {
            name: 'role',
            type: 'string',
            description: 'ARIA role for the button group',
            required: false,
            defaultValue: "'group'"
        }
    ],
    examples: [
        {
            title: 'Basic Usage',
            description: 'Buttons grouped horizontally by default.',
            code: `import { ButtonGroup, Button } from '@shohojdhara/atomix';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}`,
            preview: true
        },
        {
            title: 'Variants & Sizes',
            description: 'Apply variants and sizes to the entire group.',
            code: `import { ButtonGroup, Button } from '@shohojdhara/atomix';

export default function VariantsExample() {
  return (
    <div className="u-d-flex u-flex-column u-gap-4">
      <ButtonGroup variant="outline-primary" size="sm">
        <Button>Small</Button>
        <Button>Outline</Button>
        <Button>Group</Button>
      </ButtonGroup>

      <ButtonGroup variant="secondary" size="lg">
        <Button>Large</Button>
        <Button>Secondary</Button>
        <Button>Group</Button>
      </ButtonGroup>
    </div>
  );
}`,
            preview: true
        },
        {
            title: 'Vertical Orientation',
            description: 'Buttons can be stacked vertically.',
            code: `import { ButtonGroup, Button, Icon } from '@shohojdhara/atomix';

export default function VerticalExample() {
  return (
    <ButtonGroup orientation="vertical" variant="outline-dark">
      <Button icon={<Icon name="Pencil" />}>Edit</Button>
      <Button icon={<Icon name="Copy" />}>Copy</Button>
      <Button icon={<Icon name="Trash" />}>Delete</Button>
    </ButtonGroup>
  );
}`,
            preview: true
        },
        {
            title: 'Toolbar Usage',
            description: 'Combine multiple groups to create a toolbar.',
            code: `import { ButtonGroup, Button, Icon } from '@shohojdhara/atomix';

export default function ToolbarExample() {
  return (
    <div className="u-d-flex u-gap-2 u-p-2 u-bg-subtle u-rounded">
      <ButtonGroup variant="ghost" size="sm">
        <Button icon={<Icon name="TextBolder" />} ariaLabel="Bold" />
        <Button icon={<Icon name="TextItalic" />} ariaLabel="Italic" />
        <Button icon={<Icon name="TextUnderline" />} ariaLabel="Underline" />
      </ButtonGroup>
      
      <div className="u-w-px u-bg-border u-my-1" />
      
      <ButtonGroup variant="ghost" size="sm">
        <Button icon={<Icon name="TextAlignLeft" />} ariaLabel="Align Left" />
        <Button icon={<Icon name="TextAlignCenter" />} ariaLabel="Align Center" />
        <Button icon={<Icon name="TextAlignRight" />} ariaLabel="Align Right" />
      </ButtonGroup>
    </div>
  );
}`,
            preview: true
        },
        {
            title: 'Mixed Variants',
            description: 'Buttons with different variants in the same group',
            code: `import { ButtonGroup, Button } from '@shohojdhara/atomix';

export default function MixedVariants() {
  return (
    <ButtonGroup>
      <Button label="Cancel" variant="secondary" />
      <Button label="Save Draft" variant="outline-primary" />
      <Button label="Publish" variant="primary" />
    </ButtonGroup>
  );
}`,
            preview: true
        },
        {
            title: 'Icon-Only Buttons',
            description: 'Button group with icon-only buttons',
            code: `import { ButtonGroup, Button, Icon } from '@shohojdhara/atomix';

export default function IconOnlyButtons() {
  return (
    <ButtonGroup aria-label="Navigation controls">
      <Button 
        icon={<Icon name="CaretLeft" />}
        iconOnly 
        ariaLabel="Previous" 
      />
      <Button 
        icon={<Icon name="CaretRight" />}
        iconOnly 
        ariaLabel="Next" 
      />
    </ButtonGroup>
  );
}`,
            preview: true
        },
        {
            title: 'Disabled Buttons',
            description: 'Button group with disabled buttons',
            code: `import { ButtonGroup, Button } from '@shohojdhara/atomix';

export default function DisabledButtons() {
  return (
    <ButtonGroup>
      <Button label="Enabled" />
      <Button label="Disabled" disabled />
      <Button label="Enabled" />
    </ButtonGroup>
  );
}`,
            preview: true
        }
    ],
    accessibility: {
        overview: 'ButtonGroup uses role="group" to group related buttons for assistive technologies. It ensures proper keyboard navigation and ARIA relationships.',
        keyboardSupport: [
            {
                key: 'Tab',
                action: 'Moves focus to the next focusable element (between buttons)'
            },
            {
                key: 'Shift + Tab',
                action: 'Moves focus to the previous focusable element'
            },
            {
                key: 'Enter or Space',
                action: 'Activates the focused button'
            }
        ],
        ariaAttributes: [
            {
                attribute: 'role',
                description: 'Set to "group" (or "toolbar" if appropriate)',
                required: true
            },
            {
                attribute: 'aria-label',
                description: 'Label for the group to describe its purpose',
                required: false
            }
        ],
        guidelines: [
            'Provide a label for the group using aria-label or aria-labelledby',
            'Ensure standard keyboard navigation (Tab/Shift+Tab) works between buttons',
            'For selection groups (radio/checkbox behavior), manage aria-pressed or aria-checked states on the buttons',
            'Use role="toolbar" for toolbar-style button groups',
            'Ensure sufficient color contrast for all button variants'
        ],
        wcagLevel: 'AA' as const,
        screenReaderSupport: true,
        focusManagement: [
            'Buttons receive focus when tabbed to',
            'Focus moves logically through buttons in the group',
            'Clear focus indicators for all buttons',
            'Group purpose is announced to screen readers when aria-label is provided'
        ]
    }
};

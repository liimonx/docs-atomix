export const tooltipMetadata = {
  id: 'tooltip',
  name: 'Tooltip',
  description: 'Contextual information component that appears on hover or focus, with rich content support and accessibility features.',
  category: 'Overlays',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Tooltip',
  dependencies: ['react'],
  tags: ['tooltip', 'hover', 'info', 'popup', 'help'],
  relatedComponents: ['Popover', 'Modal', 'Dropdown'],
  features: [
    'Hover and focus triggers',
    'Multiple placements',
    'Rich content support',
    'Delay and duration control',
    'Keyboard accessible',
    'Full accessibility support',
    'Portal rendering'
  ],
  props: [
    {
      name: 'content',
      type: 'string | ReactNode',
      description: 'Tooltip content',
      required: true
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Element that triggers the tooltip',
      required: true
    },
    {
      name: 'placement',
      type: "'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'",
      description: 'Placement of tooltip relative to trigger',
      required: false,
      defaultValue: "'top'"
    },
    {
      name: 'trigger',
      type: "'hover' | 'focus' | 'click' | 'hover focus'",
      description: 'Event that triggers the tooltip',
      required: false,
      defaultValue: "'hover'"
    },
    {
      name: 'delay',
      type: 'number',
      description: 'Delay before showing tooltip (ms)',
      required: false,
      defaultValue: '200'
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the tooltip is disabled',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Tooltip',
      description: 'Simple tooltip with text',
      code: `<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`,
      preview: null
    },
    {
      title: 'Tooltip Placements',
      description: 'Tooltip with different placements',
      code: `<Tooltip content="Top tooltip" placement="top">
  <Button>Top</Button>
</Tooltip>
<Tooltip content="Bottom tooltip" placement="bottom">
  <Button>Bottom</Button>
</Tooltip>
<Tooltip content="Left tooltip" placement="left">
  <Button>Left</Button>
</Tooltip>
<Tooltip content="Right tooltip" placement="right">
  <Button>Right</Button>
</Tooltip>`,
      preview: null
    },
    {
      title: 'Rich Content Tooltip',
      description: 'Tooltip with rich content',
      code: `<Tooltip 
  content={
    <div>
      <strong>Rich Content</strong>
      <p>This tooltip can contain any React content.</p>
    </div>
  }
>
  <Button>Hover for details</Button>
</Tooltip>`,
      preview: null
    },
    {
      title: 'Focus Trigger',
      description: 'Tooltip that appears on focus',
      code: `<Tooltip 
  content="This appears on focus"
  trigger="focus"
>
  <Input placeholder="Focus me" />
</Tooltip>`,
      preview: null
    },
    {
      title: 'With Icon',
      description: 'Tooltip on icon button',
      code: `<Tooltip content="Delete item">
  <Button icon={<Icon name="Trash" />} variant="ghost" />
</Tooltip>`,
      preview: null
    },
    {
      title: 'Custom Delay',
      description: 'Tooltip with custom delay',
      code: `<Tooltip 
  content="This tooltip appears after 1 second"
  delay={1000}
>
  <Button>Hover me</Button>
</Tooltip>`,
      preview: null
    }
  ],
  accessibility: {
    keyboardSupport: [
      'Focus - Show tooltip (when trigger="focus")',
      'Escape - Dismiss tooltip (if applicable)',
      'Tab - Move focus away (tooltip dismisses)'
    ],
    ariaAttributes: [
      'aria-describedby - References tooltip content',
      'role="tooltip" - Tooltip role',
      'aria-live - Announces tooltip content to screen readers'
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Tooltip content is announced to screen readers',
      'Tooltip appears on focus for keyboard users',
      'Tooltip dismisses when focus moves away',
      'Clear association between trigger and tooltip'
    ]
  }
};


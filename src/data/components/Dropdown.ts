export const dropdownMetadata = {
  id: 'dropdown',
  name: 'Dropdown',
  description: 'Flexible dropdown menu component with various triggers, placements, and customization options.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Dropdown',
  dependencies: ['react'],
  tags: ['dropdown', 'menu', 'select', 'options', 'popover'],
  relatedComponents: ['Select', 'Menu', 'Popover', 'Modal'],
  features: [
    'Multiple trigger types (click, hover)',
    'Flexible placement options',
    'Keyboard navigation',
    'Icon and label support',
    'Disabled items',
    'Separators and groups',
    'Full accessibility support',
    'Portal rendering'
  ],
  props: [
    {
      name: 'trigger',
      type: 'ReactNode',
      description: 'Element that triggers the dropdown',
      required: true
    },
    {
      name: 'items',
      type: 'DropdownItem[]',
      description: 'Array of dropdown menu items',
      required: true
    },
    {
      name: 'placement',
      type: "'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'",
      description: 'Placement of the dropdown relative to trigger',
      required: false,
      defaultValue: "'bottom-start'"
    },
    {
      name: 'triggerOn',
      type: "'click' | 'hover'",
      description: 'Event that triggers the dropdown',
      required: false,
      defaultValue: "'click'"
    },
    {
      name: 'open',
      type: 'boolean',
      description: 'Controlled open state',
      required: false
    },
    {
      name: 'onOpenChange',
      type: '(open: boolean) => void',
      description: 'Callback when open state changes',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the dropdown is disabled',
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
      title: 'Basic Dropdown',
      description: 'Simple dropdown with menu items',
      code: `<Dropdown
  trigger={<Button>Open Menu</Button>}
  items={[
    { label: 'Profile', onClick: () => console.log('Profile') },
    { label: 'Settings', onClick: () => console.log('Settings') },
    { label: 'Logout', onClick: () => console.log('Logout') }
  ]}
/>`,
      preview: true
    },
    {
      title: 'With Icons',
      description: 'Dropdown items with icons',
      code: `<Dropdown
  trigger={<Button icon={<Icon name="CaretDown" />}>Actions</Button>}
  items={[
    { label: 'Edit', icon: <Icon name="Pencil" />, onClick: () => {} },
    { label: 'Delete', icon: <Icon name="Trash" />, onClick: () => {} },
    { label: 'Share', icon: <Icon name="Share" />, onClick: () => {} }
  ]}
/>`,
      preview: true
    },
    {
      title: 'Placement Options',
      description: 'Dropdown with different placements',
      code: `<Dropdown
  trigger={<Button>Top</Button>}
  placement="top"
  items={[...]}
/>
<Dropdown
  trigger={<Button>Right</Button>}
  placement="right"
  items={[...]}
/>`,
      preview: true
    },
    {
      title: 'With Separators',
      description: 'Dropdown with grouped items and separators',
      code: `<Dropdown
  trigger={<Button>Menu</Button>}
  items={[
    { label: 'New', onClick: () => {} },
    { label: 'Open', onClick: () => {} },
    { type: 'separator' },
    { label: 'Save', onClick: () => {} },
    { label: 'Export', onClick: () => {} },
    { type: 'separator' },
    { label: 'Exit', onClick: () => {} }
  ]}
/>`,
      preview: true
    },
    {
      title: 'Hover Trigger',
      description: 'Dropdown that opens on hover',
      code: `<Dropdown
  trigger={<Button>Hover Me</Button>}
  triggerOn="hover"
  items={[
    { label: 'Item 1', onClick: () => {} },
    { label: 'Item 2', onClick: () => {} }
  ]}
/>`,
      preview: true
    },
    {
      title: 'Controlled Dropdown',
      description: 'Dropdown with controlled open state',
      code: `import { Dropdown, Button } from '@shohojdhara/atomix';
import { useState } from 'react';

function ControlledDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      trigger={<Button>Controlled Menu</Button>}
      open={open}
      onOpenChange={setOpen}
      items={[
        { label: 'Item 1', onClick: () => setOpen(false) },
        { label: 'Item 2', onClick: () => setOpen(false) }
      ]}
    />
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    keyboardSupport: [
      'Enter or Space - Open dropdown (when trigger is focused)',
      'Arrow Down - Open dropdown and focus first item',
      'Arrow Up/Down - Navigate between items',
      'Enter or Space - Activate focused item',
      'Escape - Close dropdown',
      'Tab - Close dropdown and move to next element',
      'Home/End - Focus first/last item'
    ],
    ariaAttributes: [
      'aria-haspopup - Indicates dropdown has popup',
      'aria-expanded - Indicates if dropdown is open',
      'aria-controls - References the dropdown menu',
      'role="menu" - Menu role for dropdown',
      'role="menuitem" - Menu item role'
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Focus moves to first item when opened',
      'Focus returns to trigger when closed',
      'Focus is trapped within dropdown when open',
      'Clear focus indicators for all items'
    ]
  }
};


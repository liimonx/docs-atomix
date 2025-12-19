export const navItemMetadata = {
  id: 'nav-item',
  name: 'NavItem',
  description: 'A navigation item component for use within Nav. It represents a single navigation link with support for active states, icons, and various styling options.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/NavItem',
  dependencies: ['react'],
  tags: ['nav', 'navigation', 'item', 'link', 'menu'],
  relatedComponents: ['Nav', 'NavDropdown', 'Navbar'],
  features: [
    'Link navigation support',
    'Active state indication',
    'Icon support',
    'Disabled state',
    'Custom styling',
    'Full keyboard navigation',
    'Accessibility support'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Nav item content',
      required: false
    },
    {
      name: 'href',
      type: 'string',
      description: 'Navigation URL',
      required: false
    },
    {
      name: 'active',
      type: 'boolean',
      description: 'Whether the item is active',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the item is disabled',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'Icon to display',
      required: false
    },
    {
      name: 'onClick',
      type: '(event: MouseEvent) => void',
      description: 'Click event handler',
      required: false
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false,
      defaultValue: "''"
    }
  ],
  examples: [
    {
      title: 'Basic NavItem',
      description: 'Simple navigation item',
      code: `import { Nav, NavItem } from '@shohojdhara/atomix';

function BasicNavItem() {
  return (
    <Nav>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </Nav>
  );
}`,
      preview: null
    },
    {
      title: 'Active NavItem',
      description: 'Navigation item with active state',
      code: `function ActiveNavItem() {
  return (
    <Nav>
      <NavItem href="/" active>Home</NavItem>
      <NavItem href="/about">About</NavItem>
    </Nav>
  );
}`,
      preview: null
    },
    {
      title: 'NavItem with Icon',
      description: 'Navigation item with icon',
      code: `import { Icon } from '@shohojdhara/atomix';

function NavItemWithIcon() {
  return (
    <Nav>
      <NavItem href="/" icon={<Icon name="Home" />}>
        Home
      </NavItem>
      <NavItem href="/docs" icon={<Icon name="Book" />}>
        Documentation
      </NavItem>
    </Nav>
  );
}`,
      preview: null
    },
    {
      title: 'Disabled NavItem',
      description: 'Disabled navigation item',
      code: `function DisabledNavItem() {
  return (
    <Nav>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/coming-soon" disabled>
        Coming Soon
      </NavItem>
    </Nav>
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The NavItem component follows WCAG 2.1 guidelines with proper keyboard navigation, ARIA attributes, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Enter',
        action: 'Activates the nav item'
      },
      {
        key: 'Space',
        action: 'Activates the nav item'
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
        attribute: 'aria-current',
        description: 'Indicates current/active item (set to "page" when active)',
        required: false
      },
      {
        attribute: 'aria-disabled',
        description: 'Indicates disabled state',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label when needed',
        required: false
      }
    ],
    guidelines: [
      'Provide clear, descriptive link text',
      'Indicate active/current items',
      'Ensure keyboard navigation works correctly',
      'Disabled items should not be focusable',
      'Use icons to enhance visual communication',
      'Test with screen readers'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'NavItem receives focus when tabbed to',
      'Active item is clearly indicated',
      'Disabled items do not receive focus',
      'Link destination is announced to screen readers',
      'Active state is communicated'
    ]
  }
};


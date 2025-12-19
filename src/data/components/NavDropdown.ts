export const navDropdownMetadata = {
  id: 'nav-dropdown',
  name: 'NavDropdown',
  description: 'A dropdown menu component for use within Nav. It provides a navigation item that expands to show additional menu options when clicked or hovered.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/NavDropdown',
  dependencies: ['react'],
  tags: ['nav', 'navigation', 'dropdown', 'menu', 'submenu'],
  relatedComponents: ['Nav', 'NavItem', 'Dropdown', 'Navbar'],
  features: [
    'Dropdown menu functionality',
    'Nested navigation items',
    'Hover and click triggers',
    'Keyboard navigation',
    'Active state support',
    'Icon support',
    'Full accessibility support'
  ],
  props: [
    {
      name: 'label',
      type: 'ReactNode',
      description: 'Dropdown trigger label',
      required: false
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Dropdown menu items (NavItem components)',
      required: false
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'Icon to display',
      required: false
    },
    {
      name: 'trigger',
      type: "'click' | 'hover'",
      description: 'Dropdown trigger method',
      required: false,
      defaultValue: "'click'"
    },
    {
      name: 'placement',
      type: "'bottom' | 'bottom-start' | 'bottom-end'",
      description: 'Dropdown placement',
      required: false,
      defaultValue: "'bottom-start'"
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
      title: 'Basic NavDropdown',
      description: 'Simple dropdown in navigation',
      code: `import { Nav, NavDropdown, NavItem } from '@shohojdhara/atomix';

function BasicNavDropdown() {
  return (
    <Nav>
      <NavItem href="/">Home</NavItem>
      <NavDropdown label="Products">
        <NavItem href="/products/web">Web</NavItem>
        <NavItem href="/products/mobile">Mobile</NavItem>
        <NavItem href="/products/desktop">Desktop</NavItem>
      </NavDropdown>
    </Nav>
  );
}`,
      preview: null
    },
    {
      title: 'NavDropdown with Icon',
      description: 'Dropdown with icon indicator',
      code: `import { Icon } from '@shohojdhara/atomix';

function NavDropdownWithIcon() {
  return (
    <Nav>
      <NavDropdown
        label="Resources"
        icon={<Icon name="CaretDown" />}
      >
        <NavItem href="/docs">Documentation</NavItem>
        <NavItem href="/guides">Guides</NavItem>
      </NavDropdown>
    </Nav>
  );
}`,
      preview: null
    },
    {
      title: 'Hover Trigger NavDropdown',
      description: 'Dropdown that opens on hover',
      code: `function HoverNavDropdown() {
  return (
    <Nav>
      <NavDropdown label="Services" trigger="hover">
        <NavItem href="/services/design">Design</NavItem>
        <NavItem href="/services/development">Development</NavItem>
      </NavDropdown>
    </Nav>
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The NavDropdown component follows WCAG 2.1 guidelines with proper keyboard navigation, ARIA attributes, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Enter',
        action: 'Opens/closes the dropdown'
      },
      {
        key: 'Space',
        action: 'Opens/closes the dropdown'
      },
      {
        key: 'Arrow Down',
        action: 'Opens dropdown and moves to first item'
      },
      {
        key: 'Arrow Up',
        action: 'Opens dropdown and moves to last item'
      },
      {
        key: 'Escape',
        action: 'Closes the dropdown'
      },
      {
        key: 'Tab',
        action: 'Moves focus to next element (closes dropdown)'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'aria-haspopup',
        description: 'Indicates the presence of a popup menu',
        required: true
      },
      {
        attribute: 'aria-expanded',
        description: 'Indicates whether dropdown is open',
        required: true
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the dropdown',
        required: false
      }
    ],
    guidelines: [
      'Provide clear dropdown labels',
      'Ensure keyboard navigation works correctly',
      'Announce dropdown state to screen readers',
      'Use appropriate ARIA attributes',
      'Test with screen readers',
      'Ensure dropdown items are keyboard accessible'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Dropdown trigger receives focus',
      'Focus moves to first item when opened',
      'Focus is trapped within dropdown when open',
      'Focus returns to trigger when closed',
      'Dropdown state is announced to screen readers'
    ]
  }
};


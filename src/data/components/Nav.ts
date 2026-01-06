export const navMetadata = {
  id: 'nav',
  name: 'Nav',
  description: 'A flexible navigation component for creating horizontal or vertical navigation menus. It provides a container for navigation items with alignment and styling options.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Nav',
  dependencies: ['react'],
  tags: ['nav', 'navigation', 'menu', 'horizontal', 'vertical'],
  relatedComponents: ['NavItem', 'NavDropdown', 'Navbar', 'SideMenu'],
  features: [
    'Horizontal and vertical layouts',
    'Flexible alignment options',
    'Works with NavItem and NavDropdown',
    'Responsive design',
    'Full keyboard navigation',
    'Accessibility support'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Navigation items (NavItem, NavDropdown)',
      required: false
    },
    {
      name: 'alignment',
      type: "'start' | 'center' | 'end'",
      description: 'Horizontal alignment of nav items',
      required: false,
      defaultValue: "'start'"
    },
    {
      name: 'vertical',
      type: 'boolean',
      description: 'Whether to display vertically',
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
      name: 'aria-label',
      type: 'string',
      description: 'ARIA label for accessibility',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Nav',
      description: 'Simple horizontal navigation',
      code: `import { Nav, NavItem } from '@shohojdhara/atomix';

function BasicNav() {
  return (
    <Nav>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </Nav>
  );
}`,
      preview: true
    },
    {
      title: 'Nav with Alignment',
      description: 'Navigation with center alignment',
      code: `function NavWithAlignment() {
  return (
    <Nav alignment="center">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/products">Products</NavItem>
      <NavItem href="/about">About</NavItem>
    </Nav>
  );
}`,
      preview: true
    },
    {
      title: 'Vertical Nav',
      description: 'Vertical navigation menu',
      code: `function VerticalNav() {
  return (
    <Nav vertical>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/docs">Documentation</NavItem>
      <NavItem href="/components">Components</NavItem>
    </Nav>
  );
}`,
      preview: true
    },
    {
      title: 'Nav with Dropdown',
      description: 'Navigation with dropdown items',
      code: `import { NavDropdown } from '@shohojdhara/atomix';

function NavWithDropdown() {
  return (
    <Nav>
      <NavItem href="/">Home</NavItem>
      <NavDropdown label="Products">
        <NavItem href="/products/web">Web</NavItem>
        <NavItem href="/products/mobile">Mobile</NavItem>
      </NavDropdown>
    </Nav>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Nav component follows WCAG 2.1 guidelines with proper keyboard navigation, ARIA attributes, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Arrow Keys',
        action: 'Navigate between nav items'
      },
      {
        key: 'Enter',
        action: 'Activate nav item'
      },
      {
        key: 'Tab',
        action: 'Move focus to next focusable element'
      },
      {
        key: 'Shift + Tab',
        action: 'Move focus to previous focusable element'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="navigation"',
        description: 'Applied to the nav element',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the navigation',
        required: false
      }
    ],
    guidelines: [
      'Provide clear navigation labels',
      'Use semantic HTML elements',
      'Ensure keyboard navigation works correctly',
      'Indicate active/current items',
      'Test with screen readers'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Nav items receive focus when navigated to',
      'Active item is clearly indicated',
      'Focus moves logically through nav items',
      'Navigation structure is announced to screen readers'
    ]
  }
};


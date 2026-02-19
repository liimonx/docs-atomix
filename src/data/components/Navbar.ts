// import { Navbar } from '@shohojdhara/atomix';

export const navbarMetadata = {
  id: 'navbar',
  name: 'Navbar',
  description: 'A responsive navigation header with brand, menu items, and collapsible mobile menu functionality. It\'s the primary navigation component for websites and applications.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Navbar',
  dependencies: ['react'],
  tags: ['navbar', 'navigation', 'header', 'menu', 'responsive', 'mobile'],
  relatedComponents: ['Nav', 'NavItem', 'NavDropdown', 'Button'],
  features: [
    'Responsive design with mobile menu',
    'Brand/logo support',
    'Multiple positioning options (static, fixed, fixed-bottom)',
    'Multiple color variants',
    'Collapsible mobile menu',
    'Backdrop support',
    'Close on outside click',
    'Close on escape key',
    'Glass morphism effect support',
    'Full accessibility support with ARIA attributes',
    'Keyboard navigation support'
  ],
  props: [
    {
      name: 'brand',
      type: 'ReactNode',
      description: 'Brand/logo component or text',
      required: false
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Navigation items (typically Nav components)',
      required: false
    },
    {
      name: 'variant',
      type: "ThemeColor | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'light' | 'dark'",
      description: 'Color scheme variant',
      required: false
    },
    {
      name: 'position',
      type: "'static' | 'fixed' | 'fixed-bottom'",
      description: 'Navbar position',
      required: false,
      defaultValue: "'static'"
    },
    {
      name: 'containerWidth',
      type: 'string',
      description: 'Container max width',
      required: false
    },
    {
      name: 'collapsible',
      type: 'boolean',
      description: 'Whether to collapse navbar on mobile',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'expanded',
      type: 'boolean',
      description: 'Controlled expansion state',
      required: false
    },
    {
      name: 'onToggle',
      type: '(expanded: boolean) => void',
      description: 'Toggle callback',
      required: false
    },
    {
      name: 'backdrop',
      type: 'boolean',
      description: 'Show backdrop when expanded on mobile',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'closeOnOutsideClick',
      type: 'boolean',
      description: 'Close navbar when clicking outside',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'closeOnEscape',
      type: 'boolean',
      description: 'Close navbar on escape key press',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'ariaLabel',
      type: 'string',
      description: 'Accessible label for navigation',
      required: false,
      defaultValue: "'Main navigation'"
    },
    {
      name: 'id',
      type: 'string',
      description: 'Navbar ID (used for accessibility)',
      required: false
    },
    {
      name: 'glass',
      type: 'boolean | AtomixGlassProps',
      description: 'Enable glass morphism effect',
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
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom style object',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the navbar is disabled',
      required: false,
      defaultValue: 'false'
    }
  ],
  examples: [
    {
      title: 'Basic Navbar',
      description: 'Simple navbar with brand and navigation items',
      code: `import { Navbar, Nav, NavItem } from '@shohojdhara/atomix';

function BasicNavbar() {
  return (
    <Navbar brand="My App">
      <Nav>
        <NavItem href="/" active>Home</NavItem>
        <NavItem href="/products">Products</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </Nav>
    </Navbar>
  );
}`,
      preview: true
    },
    {
      title: 'Fixed Navbar',
      description: 'Navbar fixed to the top of the viewport',
      code: `function FixedNavbar() {
  return (
    <Navbar 
      brand="My App"
      position="fixed"
      variant="dark"
    >
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/products">Products</NavItem>
      </Nav>
    </Navbar>
  );
}`,
      preview: true
    },
    {
      title: 'Navbar with Brand Logo',
      description: 'Navbar with custom brand logo component',
      code: `function NavbarWithLogo() {
  return (
    <Navbar 
      brand={
        <div className="u-flex u-align-items-center u-gap-2">
          <img src="/logo.png" alt="Logo" height="30" />
          <span>My App</span>
        </div>
      }
    >
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/products">Products</NavItem>
      </Nav>
    </Navbar>
  );
}`,
      preview: true
    },
    {
      title: 'Navbar Variants',
      description: 'Navbars with different color variants',
      code: `function NavbarVariants() {
  return (
    <div className="u-gap-4">
      <Navbar brand="Primary" variant="primary">
        <Nav>
          <NavItem href="/">Home</NavItem>
        </Nav>
      </Navbar>
      
      <Navbar brand="Dark" variant="dark">
        <Nav>
          <NavItem href="/">Home</NavItem>
        </Nav>
      </Navbar>
      
      <Navbar brand="Light" variant="light">
        <Nav>
          <NavItem href="/">Home</NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Controlled Navbar',
      description: 'Navbar with controlled expansion state',
      code: `import { useState } from 'react';

function ControlledNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      brand="My App"
      expanded={expanded}
      onToggle={setExpanded}
      backdrop={true}
    >
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/products">Products</NavItem>
      </Nav>
    </Navbar>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Navbar component follows WCAG 2.1 guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Tab',
        action: 'Moves focus to the next focusable element in the navbar'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus to the previous focusable element'
      },
      {
        key: 'Escape',
        action: 'Closes the mobile menu (when open)'
      },
      {
        key: 'Enter',
        action: 'Activates navigation links or buttons'
      },
      {
        key: 'Space',
        action: 'Activates navigation links or buttons'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="navigation"',
        description: 'Applied automatically to indicate navigation',
        required: true
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the navigation',
        required: false
      },
      {
        attribute: 'aria-expanded',
        description: 'Indicates whether the mobile menu is expanded',
        required: false
      },
      {
        attribute: 'aria-controls',
        description: 'References the collapsible menu content',
        required: false
      }
    ],
    guidelines: [
      'Provide descriptive aria-label for navigation',
      'Ensure all navigation links are keyboard accessible',
      'Use aria-expanded for collapsible menus',
      'Provide clear focus indicators',
      'Ensure sufficient color contrast for all variants',
      'Test mobile menu with keyboard navigation'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Navigation links receive focus when tabbed to',
      'Mobile menu toggle button is keyboard accessible',
      'Focus is trapped within mobile menu when open',
      'Focus returns to toggle button when menu closes',
      'Navigation structure is announced to screen readers'
    ]
  }
};


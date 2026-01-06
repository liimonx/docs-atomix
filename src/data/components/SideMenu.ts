export const sideMenuMetadata = {
  id: 'side-menu',
  name: 'SideMenu',
  description: 'A vertical navigation menu component designed for sidebars and navigation panels. It supports nested items, icons, badges, and active state management.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/SideMenu',
  dependencies: ['react'],
  tags: ['menu', 'navigation', 'sidebar', 'vertical', 'nav'],
  relatedComponents: ['Nav', 'NavItem', 'EdgePanel', 'Navbar'],
  features: [
    'Vertical menu layout',
    'Nested menu items support',
    'Icon support',
    'Badge indicators',
    'Active state management',
    'Collapsible sections',
    'Full keyboard navigation',
    'Accessibility support'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Menu items (SideMenuItem components)',
      required: false
    },
    {
      name: 'defaultActiveItem',
      type: 'string',
      description: 'Default active item ID',
      required: false
    },
    {
      name: 'onItemClick',
      type: '(itemId: string) => void',
      description: 'Callback when menu item is clicked',
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
      title: 'Basic SideMenu',
      description: 'Simple side menu with items',
      code: `import { SideMenu, SideMenuItem } from '@shohojdhara/atomix';

function BasicSideMenu() {
  return (
    <SideMenu>
      <SideMenuItem href="/" icon={<Icon name="Home" />}>
        Home
      </SideMenuItem>
      <SideMenuItem href="/docs" icon={<Icon name="Book" />}>
        Documentation
      </SideMenuItem>
      <SideMenuItem href="/components" icon={<Icon name="Grid" />}>
        Components
      </SideMenuItem>
    </SideMenu>
  );
}`,
      preview: true
    },
    {
      title: 'SideMenu with Badges',
      description: 'Menu items with badge indicators',
      code: `import { Badge } from '@shohojdhara/atomix';

function SideMenuWithBadges() {
  return (
    <SideMenu>
      <SideMenuItem href="/inbox" icon={<Icon name="Inbox" />}>
        Inbox
        <Badge color="primary">5</Badge>
      </SideMenuItem>
      <SideMenuItem href="/notifications" icon={<Icon name="Bell" />}>
        Notifications
        <Badge color="error">12</Badge>
      </SideMenuItem>
    </SideMenu>
  );
}`,
      preview: true
    },
    {
      title: 'Nested SideMenu',
      description: 'Menu with nested sub-items',
      code: `function NestedSideMenu() {
  return (
    <SideMenu>
      <SideMenuItem href="/docs" icon={<Icon name="Book" />}>
        Documentation
      </SideMenuItem>
      <SideMenuItem href="/docs/components" nested>
        Components
      </SideMenuItem>
      <SideMenuItem href="/docs/guides" nested>
        Guides
      </SideMenuItem>
    </SideMenu>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The SideMenu component follows WCAG 2.1 guidelines with proper keyboard navigation, ARIA attributes, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Arrow Up/Down',
        action: 'Navigate between menu items'
      },
      {
        key: 'Arrow Right',
        action: 'Expand nested menu (if applicable)'
      },
      {
        key: 'Arrow Left',
        action: 'Collapse nested menu (if applicable)'
      },
      {
        key: 'Enter',
        action: 'Activate menu item'
      },
      {
        key: 'Tab',
        action: 'Move focus to next focusable element'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="navigation"',
        description: 'Applied to the menu container',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the menu',
        required: false
      },
      {
        attribute: 'aria-current',
        description: 'Indicates current/active item',
        required: false
      }
    ],
    guidelines: [
      'Provide clear navigation labels',
      'Indicate active/current items',
      'Ensure keyboard navigation works correctly',
      'Use icons to enhance visual communication',
      'Test with screen readers',
      'Maintain logical focus order'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Menu items receive focus when navigated to',
      'Active item is clearly indicated',
      'Nested items are announced correctly',
      'Focus moves logically through menu items',
      'Menu state is communicated to screen readers'
    ]
  }
};


export const edgePanelMetadata = {
  id: 'edge-panel',
  name: 'EdgePanel',
  description: 'A side panel component that slides in from the edge of the screen. Commonly used for navigation menus, sidebars, and overlay content panels.',
  category: 'Overlay',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/EdgePanel',
  dependencies: ['react'],
  tags: ['panel', 'sidebar', 'overlay', 'drawer', 'navigation', 'edge'],
  relatedComponents: ['Modal', 'SideMenu', 'Dropdown'],
  features: [
    'Slide-in animation from edge',
    'Multiple edge positions (left, right, top, bottom)',
    'Backdrop overlay support',
    'Close on backdrop click',
    'Close on escape key',
    'Responsive behavior',
    'Full keyboard navigation',
    'Accessibility support'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Panel content',
      required: false
    },
    {
      name: 'isOpen',
      type: 'boolean',
      description: 'Whether the panel is open',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'onClose',
      type: '() => void',
      description: 'Callback when panel should close',
      required: false
    },
    {
      name: 'position',
      type: "'left' | 'right' | 'top' | 'bottom'",
      description: 'Panel position from edge',
      required: false,
      defaultValue: "'right'"
    },
    {
      name: 'width',
      type: 'string | number',
      description: 'Panel width (for left/right)',
      required: false,
      defaultValue: "'300px'"
    },
    {
      name: 'height',
      type: 'string | number',
      description: 'Panel height (for top/bottom)',
      required: false
    },
    {
      name: 'backdrop',
      type: 'boolean',
      description: 'Whether to show backdrop overlay',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'closeOnBackdropClick',
      type: 'boolean',
      description: 'Whether to close on backdrop click',
      required: false,
      defaultValue: 'true'
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
      title: 'Basic EdgePanel',
      description: 'Simple side panel from the right',
      code: `import { EdgePanel, Button } from '@shohojdhara/atomix';

function BasicEdgePanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Open Panel" onClick={() => setIsOpen(true)} />
      <EdgePanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
      >
        <h2>Panel Content</h2>
        <p>This is the panel content</p>
      </EdgePanel>
    </>
  );
}`,
      preview: true
    },
    {
      title: 'Left Edge Panel',
      description: 'Panel sliding in from the left',
      code: `function LeftEdgePanel() {
  return (
    <EdgePanel
      isOpen={isOpen}
      onClose={onClose}
      position="left"
      width="250px"
    >
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </EdgePanel>
  );
}`,
      preview: true
    },
    {
      title: 'EdgePanel with SideMenu',
      description: 'Panel containing a side menu',
      code: `import { SideMenu } from '@shohojdhara/atomix';

function EdgePanelWithMenu() {
  return (
    <EdgePanel isOpen={isOpen} onClose={onClose}>
      <SideMenu>
        <SideMenuItem href="/">Home</SideMenuItem>
        <SideMenuItem href="/docs">Documentation</SideMenuItem>
      </SideMenu>
    </EdgePanel>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The EdgePanel component follows WCAG 2.1 guidelines with proper focus management, keyboard navigation, and ARIA attributes.',
    keyboardSupport: [
      {
        key: 'Escape',
        action: 'Closes the panel'
      },
      {
        key: 'Tab',
        action: 'Moves focus within panel content'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus backwards within panel'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="dialog"',
        description: 'Applied to the panel element',
        required: false
      },
      {
        attribute: 'aria-modal',
        description: 'Indicates modal behavior',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the panel',
        required: false
      }
    ],
    guidelines: [
      'Provide clear close mechanism',
      'Trap focus within panel when open',
      'Return focus to trigger element when closed',
      'Announce panel open/close to screen readers',
      'Ensure backdrop is keyboard accessible',
      'Provide descriptive labels'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Focus is trapped within panel when open',
      'Focus returns to trigger element when closed',
      'Backdrop receives focus for keyboard dismissal',
      'Panel state is announced to screen readers'
    ]
  }
};


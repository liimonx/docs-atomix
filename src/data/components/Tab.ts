export const tabMetadata = {
  id: 'tab',
  name: 'Tab',
  description: 'Tabbed interface component for organizing content into separate panels with keyboard navigation and accessibility.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
  author: 'Atomix Team',
  lastUpdated: '2026-03-10',
  importPath: '@shohojdhara/atomix/Tabs',
  dependencies: ['react'],
  tags: ['tab', 'tabs', 'panel', 'content', 'navigation'],
  relatedComponents: ['Accordion', 'Dropdown', 'Navigation'],
  features: [
    'Multiple tab panels',
    'Keyboard navigation',
    'Controlled and uncontrolled modes',
    'Icon support',
    'Disabled tabs',
    'Customizable styling',
    'Full accessibility support',
    'ARIA tab pattern'
  ],
  props: [
    {
      name: 'items',
      type: 'TabItem[]',
      description: 'Array of tab items',
      required: true
    },
    {
      name: 'defaultActiveIndex',
      type: 'number',
      description: 'Default active tab index (uncontrolled)',
      required: false,
      defaultValue: '0'
    },
    {
      name: 'activeIndex',
      type: 'number',
      description: 'Active tab index (controlled)',
      required: false
    },
    {
      name: 'onTabChange',
      type: '(index: number) => void',
      description: 'Callback when active tab changes',
      required: false
    },
    {
      name: 'variant',
      type: "'default' | 'pills' | 'underline'",
      description: 'Visual style variant',
      required: false,
      defaultValue: "'default'"
    },
    {
      name: 'orientation',
      type: "'horizontal' | 'vertical'",
      description: 'Tab orientation',
      required: false,
      defaultValue: "'horizontal'"
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false
    }
  ],
  examples: [
    { id: 'example-1',
      title: 'Basic Tabs',
      description: 'Simple tabbed interface',
      code: `<Tabs
  items={[
    {
      id: 'tab1',
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>
    },
    {
      id: 'tab2',
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>
    },
    {
      id: 'tab3',
      label: 'Tab 3',
      content: <div>Content for Tab 3</div>
    }
  ]}
/>`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    },
    { id: 'example-2',
      title: 'Tabs with Icons',
      description: 'Tabs with icons in labels',
      code: `<Tabs
  items={[
    {
      id: 'home',
      label: 'Home',
      icon: <Icon name="House" />,
      content: <div>Home content</div>
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Icon name="Gear" />,
      content: <div>Settings content</div>
    }
  ]}
/>`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    },
    { id: 'example-3',
      title: 'Tab Variants',
      description: 'Different tab styles',
      code: `<Tabs variant="default" items={[...]} />
<Tabs variant="pills" items={[...]} />
<Tabs variant="underline" items={[...]} />`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    },
    { id: 'example-4',
      title: 'Vertical Tabs',
      description: 'Tabs in vertical orientation',
      code: `<Tabs
  orientation="vertical"
  items={[
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> }
  ]}
/>`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    },
    { id: 'example-5',
      title: 'Disabled Tabs',
      description: 'Tabs with disabled state',
      code: `<Tabs
  items={[
    { id: 'tab1', label: 'Active Tab', content: <div>Content</div> },
    { id: 'tab2', label: 'Disabled Tab', disabled: true, content: <div>Disabled</div> },
    { id: 'tab3', label: 'Another Tab', content: <div>Content</div> }
  ]}
/>`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    }
  ],
  accessibility: {
    keyboardSupport: [
      { key: 'Arrow Left/Right', action: 'Navigate between tabs (horizontal)' },
      { key: 'Arrow Up/Down', action: 'Navigate between tabs (vertical)' },
      { key: 'Home', action: 'Focus first tab' },
      { key: 'End', action: 'Focus last tab' },
      { key: 'Enter or Space', action: 'Activate focused tab' },
      { key: 'Tab', action: 'Move focus to tab panel content' }
    ],
    ariaAttributes: [
      { attribute: 'role="tablist"', description: 'Tab list container', required: false },
      { attribute: 'role="tab"', description: 'Individual tab', required: false },
      { attribute: 'role="tabpanel"', description: 'Tab panel content', required: false },
      { attribute: 'aria-selected', description: 'Indicates selected tab', required: false },
      { attribute: 'aria-controls', description: 'References controlled panel', required: false },
      { attribute: 'aria-labelledby', description: 'References tab label', required: false }
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Tabs are focusable and keyboard navigable',
      'Focus moves to active tab panel when tab is activated',
      'Clear focus indicators for all tabs',
      'Tab state is announced to screen readers'
    ]
  }
};


// import { List } from '@shohojdhara/atomix';

export const listMetadata = {
  id: 'list',
  name: 'List',
  description: 'A flexible way to display ordered and unordered lists with various styling options. It supports different variants, custom styling, and can be grouped using the ListGroup component for enhanced presentation.',
  category: 'Content',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/List',
  dependencies: ['react'],
  tags: ['list', 'ordered', 'unordered', 'items', 'content', 'collection'],
  relatedComponents: ['Card', 'Block', 'Section'],
  features: [
    'Multiple variants (default, dash, number, text)',
    'Ordered and unordered list support',
    'Multiple sizes (sm, md, lg)',
    'Inline list display option',
    'ListGroup component for grouping',
    'Full accessibility support',
    'Semantic HTML structure'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'List items content',
      required: false
    },
    {
      name: 'items',
      type: 'ReactNode[]',
      description: 'Array of items to render',
      required: false
    },
    {
      name: 'variant',
      type: "'default' | 'dash' | 'number' | 'text'",
      description: 'List style variant',
      required: false,
      defaultValue: "'default'"
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'List size',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'ordered',
      type: 'boolean',
      description: 'Whether the list is ordered',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'inline',
      type: 'boolean',
      description: 'Display list items inline',
      required: false,
      defaultValue: 'false'
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
      title: 'Basic Lists',
      description: 'Simple lists with default styling',
      code: `import { List } from '@shohojdhara/atomix';

function BasicLists() {
  return (
    <div className="u-gap-4">
      {/* Default list */}
      <List>
        <span>First item</span>
        <span>Second item</span>
        <span>Third item</span>
      </List>
      
      {/* Using items prop */}
      <List items={['Item 1', 'Item 2', 'Item 3']} />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'List Variants',
      description: 'Different list style variants',
      code: `function ListVariants() {
  const items = ['First item', 'Second item', 'Third item'];

  return (
    <div className="u-gap-6">
      <div>
        <h3>Default List</h3>
        <List variant="default" items={items} />
      </div>
      
      <div>
        <h3>Dash List</h3>
        <List variant="dash" items={items} />
      </div>
      
      <div>
        <h3>Numbered List</h3>
        <List variant="number" items={items} />
      </div>
      
      <div>
        <h3>Alphabetical List</h3>
        <List variant="text" items={items} />
      </div>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Ordered Lists',
      description: 'Ordered lists with numbering',
      code: `function OrderedLists() {
  return (
    <div className="u-gap-4">
      <List ordered items={['Step 1', 'Step 2', 'Step 3']} />
      <List ordered variant="number" items={['First', 'Second', 'Third']} />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Inline Lists',
      description: 'Lists displayed inline',
      code: `function InlineLists() {
  return (
    <List 
      inline 
      items={['Home', 'About', 'Services', 'Contact']} 
    />
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The List component uses semantic HTML elements (ul, ol, li) and follows WCAG 2.1 guidelines for proper list structure and accessibility.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'Lists are typically non-interactive display elements',
        context: 'When list items are made interactive, they should follow standard interactive patterns'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="list"',
        description: 'Applied automatically for proper list semantics',
        required: true
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the list when needed',
        required: false
      }
    ],
    guidelines: [
      'Use semantic HTML (ul, ol) for proper list structure',
      'Provide descriptive content for list items',
      'Use ordered lists for sequential information',
      'Use unordered lists for non-sequential information',
      'Ensure sufficient color contrast for list markers',
      'Group related lists using ListGroup component'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Lists typically do not receive focus',
      'Interactive list items should be focusable with clear indicators',
      'List structure is announced to screen readers'
    ]
  }
};


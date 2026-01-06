export const virtualizedGridMetadata = {
  id: 'virtualized-grid',
  name: 'VirtualizedGrid',
  description: 'A high-performance grid component that uses virtualization to efficiently render large datasets. Only visible items are rendered, making it ideal for displaying thousands of items without performance issues.',
  category: 'Data Display',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/VirtualizedGrid',
  dependencies: ['react'],
  tags: ['virtualized', 'grid', 'performance', 'large-data', 'scroll', 'optimization'],
  relatedComponents: ['Grid', 'DataTable', 'List'],
  features: [
    'Virtual scrolling for performance',
    'Handles large datasets efficiently',
    'Dynamic row height support',
    'Smooth scrolling',
    'Customizable item renderer',
    'Scroll position management',
    'Loading states',
    'Full keyboard navigation'
  ],
  props: [
    {
      name: 'data',
      type: 'Array<any>',
      description: 'Array of data items to render',
      required: true
    },
    {
      name: 'renderItem',
      type: '(item: any, index: number) => ReactNode',
      description: 'Function to render each item',
      required: true
    },
    {
      name: 'itemHeight',
      type: 'number | ((index: number) => number)',
      description: 'Height of each item (fixed or dynamic)',
      required: false
    },
    {
      name: 'columns',
      type: 'number',
      description: 'Number of columns',
      required: false,
      defaultValue: '1'
    },
    {
      name: 'gap',
      type: 'number',
      description: 'Gap between items',
      required: false,
      defaultValue: '0'
    },
    {
      name: 'height',
      type: 'number | string',
      description: 'Container height',
      required: false
    },
    {
      name: 'overscan',
      type: 'number',
      description: 'Number of items to render outside visible area',
      required: false,
      defaultValue: '5'
    },
    {
      name: 'onScroll',
      type: '(scrollTop: number) => void',
      description: 'Callback when scrolling',
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
      title: 'Basic VirtualizedGrid',
      description: 'Simple virtualized grid with fixed height items',
      code: `import { VirtualizedGrid } from '@shohojdhara/atomix';

function BasicVirtualizedGrid() {
  const data = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: \`Item \${i}\`,
  }));

  return (
    <VirtualizedGrid
      data={data}
      renderItem={(item) => <div>{item.name}</div>}
      itemHeight={50}
      height={400}
    />
  );
}`,
      preview: true
    },
    {
      title: 'VirtualizedGrid with Dynamic Heights',
      description: 'Grid with items of varying heights',
      code: `function DynamicHeightGrid() {
  const data = largeDataSet;

  return (
    <VirtualizedGrid
      data={data}
      renderItem={(item) => (
        <div style={{ height: item.height }}>
          {item.content}
        </div>
      )}
      itemHeight={(index) => data[index].height}
      height={600}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Multi-column VirtualizedGrid',
      description: 'Grid with multiple columns',
      code: `function MultiColumnGrid() {
  return (
    <VirtualizedGrid
      data={data}
      renderItem={(item) => <Card>{item.content}</Card>}
      columns={3}
      gap={16}
      itemHeight={200}
      height={600}
    />
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The VirtualizedGrid component follows WCAG 2.1 guidelines with proper keyboard navigation, ARIA attributes, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Arrow Keys',
        action: 'Navigate between items'
      },
      {
        key: 'Page Up/Down',
        action: 'Scroll by page'
      },
      {
        key: 'Home',
        action: 'Scroll to top'
      },
      {
        key: 'End',
        action: 'Scroll to bottom'
      },
      {
        key: 'Tab',
        action: 'Move focus to next focusable element'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="grid"',
        description: 'Applied to the grid container',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the grid',
        required: false
      },
      {
        attribute: 'aria-rowcount',
        description: 'Total number of rows',
        required: false
      }
    ],
    guidelines: [
      'Provide clear grid labels',
      'Ensure keyboard navigation works correctly',
      'Announce scroll position when needed',
      'Use appropriate ARIA attributes',
      'Test with screen readers',
      'Ensure items are keyboard accessible'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Items receive focus when navigated to',
      'Focus moves logically through items',
      'Scroll position is communicated when needed',
      'Grid structure is announced to screen readers'
    ]
  }
};


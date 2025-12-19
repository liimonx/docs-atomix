export const rowMetadata = {
  id: 'row',
  name: 'Row',
  description: 'A row component for organizing content horizontally. It works with GridCol to create flexible, responsive layouts within the grid system.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Row',
  dependencies: ['react'],
  tags: ['row', 'layout', 'grid', 'horizontal', 'flexbox'],
  relatedComponents: ['Grid', 'GridCol', 'Container'],
  features: [
    'Horizontal content organization',
    'Flexbox-based layout',
    'Alignment and justification options',
    'Gap control',
    'Responsive behavior',
    'Works with GridCol components'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Row content (typically GridCol components)',
      required: false
    },
    {
      name: 'alignItems',
      type: 'string',
      description: 'Vertical alignment of row items',
      required: false
    },
    {
      name: 'justifyContent',
      type: 'string',
      description: 'Horizontal alignment of row items',
      required: false
    },
    {
      name: 'gap',
      type: 'number | string',
      description: 'Gap between row items',
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
      title: 'Basic Row',
      description: 'Simple row with columns',
      code: `import { Row, GridCol } from '@shohojdhara/atomix';

function BasicRow() {
  return (
    <Row>
      <GridCol md={4}>
        <p>Column 1</p>
      </GridCol>
      <GridCol md={4}>
        <p>Column 2</p>
      </GridCol>
      <GridCol md={4}>
        <p>Column 3</p>
      </GridCol>
    </Row>
  );
}`,
      preview: null
    },
    {
      title: 'Row with Alignment',
      description: 'Row with custom alignment',
      code: `function RowWithAlignment() {
  return (
    <Row alignItems="center" justifyContent="space-between">
      <GridCol md={6}>
        <p>Left aligned content</p>
      </GridCol>
      <GridCol md={6}>
        <p>Right aligned content</p>
      </GridCol>
    </Row>
  );
}`,
      preview: null
    },
    {
      title: 'Row with Gap',
      description: 'Row with spacing between items',
      code: `function RowWithGap() {
  return (
    <Row gap={16}>
      <GridCol md={4}>
        <p>Item with gap</p>
      </GridCol>
      <GridCol md={4}>
        <p>Item with gap</p>
      </GridCol>
      <GridCol md={4}>
        <p>Item with gap</p>
      </GridCol>
    </Row>
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Row component uses semantic HTML and follows WCAG 2.1 guidelines for proper document structure.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'Row is a layout component and typically non-interactive'
      }
    ],
    ariaAttributes: [],
    guidelines: [
      'Use Row for horizontal content organization',
      'Ensure content maintains logical reading order',
      'Use appropriate alignment for content',
      'Test responsive behavior'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Row typically does not receive focus',
      'Content structure is announced to screen readers',
      'Focus order follows document flow'
    ]
  }
};


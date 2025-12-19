export const gridMetadata = {
  id: 'grid',
  name: 'Grid',
  description: 'A flexible 12-column responsive grid system for creating complex layouts. It provides a powerful foundation for building responsive designs that adapt to different screen sizes.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Grid',
  dependencies: ['react'],
  tags: ['grid', 'layout', 'responsive', 'columns', '12-column'],
  relatedComponents: ['GridCol', 'Row', 'Container'],
  features: [
    '12-column grid system',
    'Responsive breakpoints (xs, sm, md, lg, xl)',
    'Flexible column sizing',
    'Gap control between columns',
    'Alignment and justification options',
    'Nested grid support'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'GridCol components',
      required: false
    },
    {
      name: 'gap',
      type: 'number | string',
      description: 'Gap between columns',
      required: false
    },
    {
      name: 'alignItems',
      type: 'string',
      description: 'Vertical alignment of grid items',
      required: false
    },
    {
      name: 'justifyContent',
      type: 'string',
      description: 'Horizontal alignment of grid items',
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
      title: 'Basic Grid',
      description: 'Simple 12-column grid layout',
      code: `import { Grid, GridCol } from '@shohojdhara/atomix';

function BasicGrid() {
  return (
    <Grid>
      <GridCol md={6}>
        <p>Left column (6 columns)</p>
      </GridCol>
      <GridCol md={6}>
        <p>Right column (6 columns)</p>
      </GridCol>
    </Grid>
  );
}`,
      preview: null
    },
    {
      title: 'Responsive Grid',
      description: 'Grid with different column sizes at different breakpoints',
      code: `function ResponsiveGrid() {
  return (
    <Grid>
      <GridCol xs={12} sm={6} md={4} lg={3}>
        <p>Responsive column</p>
      </GridCol>
      <GridCol xs={12} sm={6} md={4} lg={3}>
        <p>Responsive column</p>
      </GridCol>
      <GridCol xs={12} sm={6} md={4} lg={3}>
        <p>Responsive column</p>
      </GridCol>
      <GridCol xs={12} sm={6} md={4} lg={3}>
        <p>Responsive column</p>
      </GridCol>
    </Grid>
  );
}`,
      preview: null
    },
    {
      title: 'Grid with Gap',
      description: 'Grid with custom gap between columns',
      code: `function GridWithGap() {
  return (
    <Grid gap={24}>
      <GridCol md={4}>
        <p>Column with gap</p>
      </GridCol>
      <GridCol md={4}>
        <p>Column with gap</p>
      </GridCol>
      <GridCol md={4}>
        <p>Column with gap</p>
      </GridCol>
    </Grid>
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Grid component uses semantic HTML and follows WCAG 2.1 guidelines for proper document structure and layout.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'Grid is a layout component and typically non-interactive'
      }
    ],
    ariaAttributes: [],
    guidelines: [
      'Use Grid for layout purposes, not for content structure',
      'Ensure grid items maintain logical reading order',
      'Use appropriate column sizes for content',
      'Test layouts at different breakpoints'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Grid typically does not receive focus',
      'Grid structure is announced to screen readers',
      'Focus order follows document flow'
    ]
  }
};


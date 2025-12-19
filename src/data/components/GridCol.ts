export const gridColMetadata = {
  id: 'grid-col',
  name: 'GridCol',
  description: 'A column component for use within the Grid system. It allows you to specify column widths at different breakpoints for responsive layouts.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/GridCol',
  dependencies: ['react'],
  tags: ['grid', 'column', 'layout', 'responsive', 'breakpoint'],
  relatedComponents: ['Grid', 'Row', 'Container'],
  features: [
    'Responsive column sizing (xs, sm, md, lg, xl)',
    '12-column grid system',
    'Automatic wrapping',
    'Offset support',
    'Order control',
    'Flexible sizing options'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Column content',
      required: false
    },
    {
      name: 'xs',
      type: 'number',
      description: 'Column width at extra small breakpoint (0-12)',
      required: false
    },
    {
      name: 'sm',
      type: 'number',
      description: 'Column width at small breakpoint (0-12)',
      required: false
    },
    {
      name: 'md',
      type: 'number',
      description: 'Column width at medium breakpoint (0-12)',
      required: false
    },
    {
      name: 'lg',
      type: 'number',
      description: 'Column width at large breakpoint (0-12)',
      required: false
    },
    {
      name: 'xl',
      type: 'number',
      description: 'Column width at extra large breakpoint (0-12)',
      required: false
    },
    {
      name: 'offset',
      type: 'number',
      description: 'Column offset (number of columns to push)',
      required: false
    },
    {
      name: 'order',
      type: 'number',
      description: 'Column order (for reordering)',
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
      title: 'Basic GridCol',
      description: 'Simple column with fixed width',
      code: `import { Grid, GridCol } from '@shohojdhara/atomix';

function BasicGridCol() {
  return (
    <Grid>
      <GridCol md={6}>
        <p>Half-width column</p>
      </GridCol>
      <GridCol md={6}>
        <p>Half-width column</p>
      </GridCol>
    </Grid>
  );
}`,
      preview: null
    },
    {
      title: 'Responsive Columns',
      description: 'Columns that adapt to different screen sizes',
      code: `function ResponsiveColumns() {
  return (
    <Grid>
      <GridCol xs={12} sm={6} md={4} lg={3}>
        <p>Full width on mobile, half on tablet, third on desktop</p>
      </GridCol>
      <GridCol xs={12} sm={6} md={4} lg={3}>
        <p>Full width on mobile, half on tablet, third on desktop</p>
      </GridCol>
      <GridCol xs={12} sm={6} md={4} lg={3}>
        <p>Full width on mobile, half on tablet, third on desktop</p>
      </GridCol>
      <GridCol xs={12} sm={6} md={4} lg={3}>
        <p>Full width on mobile, half on tablet, third on desktop</p>
      </GridCol>
    </Grid>
  );
}`,
      preview: null
    },
    {
      title: 'Column with Offset',
      description: 'Column with offset for spacing',
      code: `function ColumnWithOffset() {
  return (
    <Grid>
      <GridCol md={6} offset={3}>
        <p>Centered column with offset</p>
      </GridCol>
    </Grid>
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The GridCol component uses semantic HTML and follows WCAG 2.1 guidelines for proper document structure.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'GridCol is a layout component and typically non-interactive'
      }
    ],
    ariaAttributes: [],
    guidelines: [
      'Use GridCol within Grid components',
      'Ensure content maintains logical reading order',
      'Test responsive layouts at different breakpoints',
      'Use appropriate column widths for content'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'GridCol typically does not receive focus',
      'Content structure is announced to screen readers',
      'Focus order follows document flow'
    ]
  }
};


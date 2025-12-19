export const containerMetadata = {
  id: 'container',
  name: 'Container',
  description: 'A responsive container component that provides consistent max-width constraints and padding for content. It helps maintain readable line lengths and consistent spacing across different screen sizes.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Container',
  dependencies: ['react'],
  tags: ['container', 'layout', 'responsive', 'wrapper', 'max-width'],
  relatedComponents: ['Block', 'Grid', 'Row'],
  features: [
    'Responsive max-width constraints',
    'Multiple container types (default, fluid, small, large)',
    'Consistent horizontal padding',
    'Centered content alignment',
    'Full-width option support'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Content to be contained',
      required: false
    },
    {
      name: 'type',
      type: "'default' | 'fluid' | 'sm' | 'lg'",
      description: 'Container type/size',
      required: false,
      defaultValue: "'default'"
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
      title: 'Basic Container',
      description: 'Default container with standard max-width',
      code: `import { Container } from '@shohojdhara/atomix';

function BasicContainer() {
  return (
    <Container>
      <h1>Page Content</h1>
      <p>This content is contained within a responsive container.</p>
    </Container>
  );
}`,
      preview: null
    },
    {
      title: 'Container Types',
      description: 'Different container sizes',
      code: `function ContainerTypes() {
  return (
    <>
      <Container type="sm">
        <p>Small container - narrower max-width</p>
      </Container>
      
      <Container type="default">
        <p>Default container - standard max-width</p>
      </Container>
      
      <Container type="lg">
        <p>Large container - wider max-width</p>
      </Container>
      
      <Container type="fluid">
        <p>Fluid container - full width with padding</p>
      </Container>
    </>
  );
}`,
      preview: null
    },
    {
      title: 'Container with Grid',
      description: 'Using Container with Grid system',
      code: `import { Grid, GridCol } from '@shohojdhara/atomix';

function ContainerWithGrid() {
  return (
    <Container>
      <Grid>
        <GridCol md={6}>
          <p>Left column content</p>
        </GridCol>
        <GridCol md={6}>
          <p>Right column content</p>
        </GridCol>
      </Grid>
    </Container>
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Container component uses semantic HTML and follows WCAG 2.1 guidelines for proper document structure.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'Container is a layout component and typically non-interactive'
      }
    ],
    ariaAttributes: [],
    guidelines: [
      'Use Container to maintain readable line lengths',
      'Ensure sufficient padding for touch targets',
      'Maintain consistent spacing across breakpoints'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Container typically does not receive focus',
      'Content structure is announced to screen readers'
    ]
  }
};


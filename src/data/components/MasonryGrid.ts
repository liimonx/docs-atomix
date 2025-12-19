export const masonryGridMetadata = {
  id: 'masonry-grid',
  name: 'MasonryGrid',
  description: 'A dynamic grid layout component that arranges items in a masonry (Pinterest-style) layout. Items are arranged to minimize vertical gaps, creating an efficient use of space.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/MasonryGrid',
  dependencies: ['react'],
  tags: ['masonry', 'grid', 'layout', 'pinterest', 'dynamic', 'columns'],
  relatedComponents: ['MasonryGridItem', 'Grid', 'GridCol'],
  features: [
    'Dynamic column layout',
    'Automatic item positioning',
    'Configurable column count',
    'Gap control between items',
    'Responsive column adjustment',
    'Efficient space utilization'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'MasonryGridItem components',
      required: false
    },
    {
      name: 'columns',
      type: 'number',
      description: 'Number of columns (default: 3)',
      required: false,
      defaultValue: '3'
    },
    {
      name: 'gap',
      type: 'number',
      description: 'Gap between items in pixels (default: 16)',
      required: false,
      defaultValue: '16'
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
      title: 'Basic MasonryGrid',
      description: 'Simple masonry grid with default settings',
      code: `import { MasonryGrid, MasonryGridItem } from '@shohojdhara/atomix';

function BasicMasonryGrid() {
  return (
    <MasonryGrid columns={3} gap={16}>
      <MasonryGridItem>
        <img src="image1.jpg" alt="Image 1" />
      </MasonryGridItem>
      <MasonryGridItem>
        <img src="image2.jpg" alt="Image 2" />
      </MasonryGridItem>
      <MasonryGridItem>
        <img src="image3.jpg" alt="Image 3" />
      </MasonryGridItem>
    </MasonryGrid>
  );
}`,
      preview: null
    },
    {
      title: 'MasonryGrid with Cards',
      description: 'Masonry grid containing card components',
      code: `import { Card } from '@shohojdhara/atomix';

function MasonryGridWithCards() {
  return (
    <MasonryGrid columns={4} gap={20}>
      <MasonryGridItem>
        <Card>
          <h3>Card Title</h3>
          <p>Card content with varying heights</p>
        </Card>
      </MasonryGridItem>
      <MasonryGridItem>
        <Card>
          <h3>Another Card</h3>
          <p>This card has more content and will be taller</p>
          <p>Additional paragraph for height variation</p>
        </Card>
      </MasonryGridItem>
    </MasonryGrid>
  );
}`,
      preview: null
    },
    {
      title: 'Responsive MasonryGrid',
      description: 'Masonry grid that adapts to screen size',
      code: `function ResponsiveMasonryGrid() {
  const columns = window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4;
  
  return (
    <MasonryGrid columns={columns} gap={16}>
      {/* Grid items */}
    </MasonryGrid>
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The MasonryGrid component uses semantic HTML and follows WCAG 2.1 guidelines for proper document structure.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'MasonryGrid is a layout component and typically non-interactive'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="grid"',
        description: 'Applied when grid contains interactive items',
        required: false
      }
    ],
    guidelines: [
      'Use MasonryGrid for visual layouts, not for data tables',
      'Ensure items maintain logical reading order',
      'Provide alt text for images in grid items',
      'Test layout at different screen sizes'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'MasonryGrid typically does not receive focus',
      'Interactive items within grid receive focus',
      'Focus order follows document flow'
    ]
  }
};


export const masonryGridItemMetadata = {
  id: 'masonry-grid-item',
  name: 'MasonryGridItem',
  description: 'An item component for use within MasonryGrid. It represents a single item in the masonry layout and can contain any content.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/MasonryGridItem',
  dependencies: ['react'],
  tags: ['masonry', 'grid', 'item', 'layout'],
  relatedComponents: ['MasonryGrid', 'Card', 'GridCol'],
  features: [
    'Flexible content support',
    'Automatic height calculation',
    'Works within MasonryGrid',
    'Any content type support'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Item content',
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
      title: 'Basic MasonryGridItem',
      description: 'Simple item in a masonry grid',
      code: `import { MasonryGrid, MasonryGridItem } from '@shohojdhara/atomix';

function BasicMasonryGridItem() {
  return (
    <MasonryGrid columns={3}>
      <MasonryGridItem>
        <img src="photo.jpg" alt="Photo" />
      </MasonryGridItem>
      <MasonryGridItem>
        <div>
          <h3>Content Item</h3>
          <p>Item content</p>
        </div>
      </MasonryGridItem>
    </MasonryGrid>
  );
}`,
      preview: true
    },
    {
      title: 'MasonryGridItem with Card',
      description: 'Item containing a card component',
      code: `import { Card } from '@shohojdhara/atomix';

function ItemWithCard() {
  return (
    <MasonryGrid columns={3}>
      <MasonryGridItem>
        <Card>
          <h3>Card Title</h3>
          <p>Card content in masonry layout</p>
        </Card>
      </MasonryGridItem>
    </MasonryGrid>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The MasonryGridItem component uses semantic HTML and follows WCAG 2.1 guidelines.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'MasonryGridItem is a container component and typically non-interactive'
      }
    ],
    ariaAttributes: [],
    guidelines: [
      'Use MasonryGridItem within MasonryGrid',
      'Ensure content is accessible',
      'Provide alt text for images',
      'Maintain logical content structure'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'MasonryGridItem typically does not receive focus',
      'Interactive content within item receives focus',
      'Content structure is announced to screen readers'
    ]
  }
};


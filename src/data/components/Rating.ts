
export const ratingMetadata = {
  id: 'rating',
  name: 'Rating',
  description: 'An interactive star rating system for collecting user feedback and displaying ratings. It supports customizable star counts, half-star precision, read-only mode, and various sizes and colors.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Rating',
  dependencies: ['react'],
  tags: ['rating', 'stars', 'review', 'feedback', 'form', 'input'],
  relatedComponents: ['Input', 'Form', 'Card', 'Button'],
  features: [
    'Interactive and read-only modes',
    'Customizable star count (default 5)',
    'Half-star precision support',
    'Multiple sizes (sm, md, lg)',
    'Multiple color variants',
    'Keyboard navigation support',
    'Full accessibility support with ARIA attributes',
    'Smooth hover effects'
  ],
  props: [
    {
      name: 'value',
      type: 'number',
      description: 'Current rating value (controlled mode)',
      required: false
    },
    {
      name: 'defaultValue',
      type: 'number',
      description: 'Default rating value (uncontrolled mode)',
      required: false,
      defaultValue: '0'
    },
    {
      name: 'maxValue',
      type: 'number',
      description: 'Maximum number of stars',
      required: false,
      defaultValue: '5'
    },
    {
      name: 'allowHalf',
      type: 'boolean',
      description: 'Whether to allow half-star ratings',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'readOnly',
      type: 'boolean',
      description: 'Whether the rating is read-only',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Size of the rating stars',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'color',
      type: "ThemeColor | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'",
      description: 'Color theme for the stars',
      required: false
    },
    {
      name: 'onChange',
      type: '(value: number) => void',
      description: 'Callback when rating changes',
      required: false
    },
    {
      name: 'label',
      type: 'string',
      description: 'Accessible label for the rating',
      required: false
    },
    {
      name: 'id',
      type: 'string',
      description: 'HTML id attribute',
      required: false
    },
    {
      name: 'useVanillaJS',
      type: 'boolean',
      description: 'Use vanilla JS implementation',
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
      title: 'Basic Rating',
      description: 'Interactive star rating component',
      code: `import { useState } from 'react';
import { Rating } from '@shohojdhara/atomix';

function ProductReview() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    console.log('New rating:', newRating);
  };

  return (
    <div>
      <h3>Rate this product:</h3>
      <Rating
        value={rating}
        onChange={handleRatingChange}
        maxValue={5}
        size="lg"
      />
      <p>Your rating: {rating} stars</p>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Read-only Rating Display',
      description: 'Displaying product ratings in read-only mode',
      code: `function ProductCard({ product }) {
  // Example product data structure
  const productData = product || {
    name: 'Example Product',
    averageRating: 4.5,
    reviewCount: 128,
    price: 99.99
  };
  
  return (
    <div className="product-card">
      <h3>{productData.name}</h3>
      <div className="product-rating">
        <Rating
          value={productData.averageRating}
          readOnly
          allowHalf
          color="warning"
          size="sm"
        />
        <span className="rating-count">
          ({productData.reviewCount} reviews)
        </span>
      </div>
      <p className="product-price">\${productData.price}</p>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Half-star Ratings',
      description: 'Rating component with half-star precision',
      code: `function HalfStarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <Rating
        value={rating}
        onChange={setRating}
        allowHalf
        maxValue={5}
        size="lg"
        color="warning"
      />
      <p>Rating: {rating} / 5</p>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Rating Sizes',
      description: 'Different sizes of rating components',
      code: `function RatingSizes() {
  return (
    <div className="u-gap-4">
      <div>
        <label>Small</label>
        <Rating value={4} readOnly size="sm" />
      </div>
      <div>
        <label>Medium (Default)</label>
        <Rating value={4} readOnly size="md" />
      </div>
      <div>
        <label>Large</label>
        <Rating value={4} readOnly size="lg" />
      </div>
    </div>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Rating component follows WCAG 2.1 guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Arrow Right',
        action: 'Increases rating by one star'
      },
      {
        key: 'Arrow Left',
        action: 'Decreases rating by one star'
      },
      {
        key: 'Home',
        action: 'Sets rating to minimum (0)'
      },
      {
        key: 'End',
        action: 'Sets rating to maximum'
      },
      {
        key: 'Tab',
        action: 'Moves focus to the next focusable element'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus to the previous focusable element'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="radiogroup"',
        description: 'Applied automatically to indicate rating group',
        required: true
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the rating component',
        required: false
      },
      {
        attribute: 'aria-valuenow',
        description: 'Current rating value',
        required: true
      },
      {
        attribute: 'aria-valuemin',
        description: 'Minimum value (typically 0)',
        required: true
      },
      {
        attribute: 'aria-valuemax',
        description: 'Maximum value (typically 5)',
        required: true
      }
    ],
    guidelines: [
      'Provide descriptive labels for rating components',
      'Ensure ratings are keyboard accessible',
      'Use appropriate ARIA attributes for screen readers',
      'Provide visual feedback for interactions',
      'Read-only ratings should still be accessible to screen readers',
      'Ensure sufficient color contrast for all variants'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Rating receives focus when tabbed to',
      'Focus moves between individual stars',
      'Current rating is announced to screen readers',
      'State changes are announced when rating changes',
      'Read-only ratings are still accessible to screen readers'
    ]
  }
};


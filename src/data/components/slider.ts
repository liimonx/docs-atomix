export const sliderMetadata = {
  id: 'slider',
  name: 'Slider',
  description: 'A comprehensive, world-class slider component with advanced features and smooth animations. Supports multiple transition effects, touch/swipe gestures, autoplay, loop mode, and full accessibility support.',
  category: 'Media',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Slider',
  dependencies: ['react'],
  tags: ['slider', 'carousel', 'slideshow', 'swiper', 'media', 'gallery'],
  relatedComponents: ['Card', 'Image', 'Button'],
  features: [
    'Multiple transition effects (slide, fade, cube, coverflow, flip, cards, creative)',
    'Multiple slides per view with responsive breakpoints',
    'Touch/swipe gestures and mouse drag support',
    'Autoplay with pause on hover and custom delays',
    'Loop mode for infinite scrolling',
    'Free mode (no snap to slides)',
    'Vertical and horizontal orientation',
    'Keyboard and mousewheel control',
    'Multiple pagination types (bullets, fraction, progressbar, custom)',
    'Navigation arrows with custom styling',
    'Scrollbar with drag support',
    'Thumbnail navigation',
    'Zoom functionality for images',
    'Lazy loading for performance optimization',
    'Virtual slides for handling large datasets',
    'Full accessibility support with ARIA labels',
    'Hardware-accelerated animations'
  ],
  props: [
    {
      name: 'slides',
      type: 'SliderSlide[]',
      description: 'Array of slides to display (Required)',
      required: true
    },
    {
      name: 'slidesToShow',
      type: 'number',
      description: 'Number of slides to show at once',
      required: false,
      defaultValue: '1'
    },
    {
      name: 'slidesToScroll',
      type: 'number',
      description: 'Number of slides to scroll at once',
      required: false,
      defaultValue: '1'
    },
    {
      name: 'spaceBetween',
      type: 'number',
      description: 'Space between slides in pixels',
      required: false,
      defaultValue: '0'
    },
    {
      name: 'centeredSlides',
      type: 'boolean',
      description: 'Whether to center slides',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'loop',
      type: 'boolean',
      description: 'Whether to loop slides infinitely',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'initialSlide',
      type: 'number',
      description: 'Initial slide index',
      required: false,
      defaultValue: '0'
    },
    {
      name: 'direction',
      type: "'horizontal' | 'vertical'",
      description: 'Slider direction',
      required: false,
      defaultValue: "'horizontal'"
    },
    {
      name: 'effect',
      type: "'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'cards' | 'creative'",
      description: 'Transition effect',
      required: false,
      defaultValue: "'slide'"
    },
    {
      name: 'autoplay',
      type: 'boolean | { delay: number; pauseOnHover?: boolean }',
      description: 'Autoplay configuration',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'pagination',
      type: 'boolean | { type: string; clickable?: boolean }',
      description: 'Pagination configuration',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'navigation',
      type: 'boolean | { nextEl?: string; prevEl?: string }',
      description: 'Navigation arrows configuration',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'scrollbar',
      type: 'boolean | { draggable?: boolean }',
      description: 'Scrollbar configuration',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'keyboard',
      type: 'boolean',
      description: 'Enable keyboard control',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'mousewheel',
      type: 'boolean',
      description: 'Enable mousewheel control',
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
      title: 'Basic Slider',
      description: 'Simple slider with default settings',
      code: `import { Slider } from '@shohojdhara/atomix';

const slides = [
  {
    id: 'slide-1',
    content: <div>Slide 1 Content</div>,
    title: 'Slide 1',
    description: 'Description for slide 1',
    image: 'path/to/image1.jpg',
  },
  {
    id: 'slide-2',
    content: <div>Slide 2 Content</div>,
    title: 'Slide 2',
    description: 'Description for slide 2',
    image: 'path/to/image2.jpg',
  },
  {
    id: 'slide-3',
    content: <div>Slide 3 Content</div>,
    title: 'Slide 3',
    description: 'Description for slide 3',
    image: 'path/to/image3.jpg',
  },
];

function MyComponent() {
  return (
    <Slider
      slides={slides}
      slidesToShow={1}
      autoplay={{ delay: 3000, pauseOnHover: true }}
      pagination={{ type: 'bullets', clickable: true }}
      navigation={true}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Multiple Slides Per View',
      description: 'Slider showing multiple slides at once',
      code: `function MultipleSlides() {
  const slides = [
    // ... slide data
  ];

  return (
    <Slider
      slides={slides}
      slidesToShow={3}
      slidesToScroll={1}
      spaceBetween={20}
      pagination={{ type: 'bullets', clickable: true }}
      navigation={true}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Transition Effects',
      description: 'Different transition effects for slides',
      code: `function TransitionEffects() {
  const slides = [
    // ... slide data
  ];

  return (
    <div className="u-gap-4">
      <div>
        <h4>Fade Effect</h4>
        <Slider
          slides={slides}
          effect="fade"
          autoplay={{ delay: 3000 }}
        />
      </div>

      <div>
        <h4>Cube Effect</h4>
        <Slider
          slides={slides}
          effect="cube"
          autoplay={{ delay: 3000 }}
        />
      </div>

      <div>
        <h4>Coverflow Effect</h4>
        <Slider
          slides={slides}
          effect="coverflow"
          autoplay={{ delay: 3000 }}
        />
      </div>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Slider with Thumbnails',
      description: 'Slider with thumbnail navigation',
      code: `function SliderWithThumbnails() {
  const slides = [
    // ... slide data
  ];

  return (
    <Slider
      slides={slides}
      slidesToShow={1}
      pagination={{ type: 'bullets', clickable: true }}
      navigation={true}
      // Thumbnail configuration would go here
    />
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Slider component follows WCAG 2.1 guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Arrow Left',
        action: 'Moves to previous slide'
      },
      {
        key: 'Arrow Right',
        action: 'Moves to next slide'
      },
      {
        key: 'Home',
        action: 'Moves to first slide'
      },
      {
        key: 'End',
        action: 'Moves to last slide'
      },
      {
        key: 'Tab',
        action: 'Moves focus to the next focusable element'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus to the previous focusable element'
      },
      {
        key: 'Enter',
        action: 'Activates interactive elements within slides'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="region"',
        description: 'Applied automatically to indicate slider region',
        required: true
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the slider',
        required: false
      },
      {
        attribute: 'aria-live',
        description: 'Applied to announce slide changes to screen readers',
        required: false
      },
      {
        attribute: 'aria-atomic',
        description: 'Indicates whether entire region should be announced',
        required: false
      }
    ],
    guidelines: [
      'Provide descriptive labels for sliders',
      'Ensure all controls are keyboard accessible',
      'Use aria-live to announce slide changes',
      'Provide alternative navigation methods',
      'Ensure sufficient color contrast for all controls',
      'Provide pause/play controls for autoplay sliders'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Slider controls receive focus when tabbed to',
      'Current slide is announced to screen readers',
      'Focus moves logically through controls',
      'Slide changes are announced when appropriate'
    ]
  }
};


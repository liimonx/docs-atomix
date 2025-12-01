// import { Hero } from '@shohojdhara/atomix';

export const heroMetadata = {
  id: 'hero',
  name: 'Hero',
  description: 'A component that creates impactful banner sections for landing pages and feature highlights. It supports various layouts, background options including images and videos, background sliders with fade transitions, and flexible content positioning.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Hero',
  dependencies: ['react'],
  tags: ['hero', 'banner', 'landing', 'header', 'background', 'video', 'slider'],
  relatedComponents: ['Card', 'Button', 'AtomixGlass'],
  features: [
    'Multiple content alignment options (left, center, right)',
    'Background images and videos',
    'Background slider with automatic transitions',
    'Parallax effects',
    'Foreground image support',
    'Flexible grid-based layouts',
    'Full viewport height option',
    'Overlay support for better text readability',
    'Responsive design',
    'Full accessibility support'
  ],
  props: [
    {
      name: 'title',
      type: 'string',
      description: 'Main hero title text (Required)',
      required: true
    },
    {
      name: 'subtitle',
      type: 'string',
      description: 'Optional subtitle text',
      required: false
    },
    {
      name: 'text',
      type: 'string',
      description: 'Additional descriptive text',
      required: false
    },
    {
      name: 'imageSrc',
      type: 'string',
      description: 'Foreground image source URL',
      required: false
    },
    {
      name: 'imageAlt',
      type: 'string',
      description: 'Alt text for the hero image',
      required: false,
      defaultValue: "'Hero image'"
    },
    {
      name: 'alignment',
      type: "'left' | 'center' | 'right'",
      description: 'Content alignment',
      required: false,
      defaultValue: "'left'"
    },
    {
      name: 'backgroundImageSrc',
      type: 'string',
      description: 'Background image source URL',
      required: false
    },
    {
      name: 'showOverlay',
      type: 'boolean',
      description: 'Whether to show background overlay',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'fullViewportHeight',
      type: 'boolean',
      description: 'Whether hero should take full viewport height',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'actions',
      type: 'ReactNode',
      description: 'Action buttons or elements',
      required: false
    },
    {
      name: 'imageColSize',
      type: 'number',
      description: 'Grid column size for image (1-12)',
      required: false,
      defaultValue: '7'
    },
    {
      name: 'contentColSize',
      type: 'number',
      description: 'Grid column size for content (1-12)',
      required: false,
      defaultValue: '5'
    },
    {
      name: 'contentWidth',
      type: 'string',
      description: 'Custom width for hero content',
      required: false
    },
    {
      name: 'parallax',
      type: 'boolean',
      description: 'Enable parallax effect on background',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'parallaxIntensity',
      type: 'number',
      description: 'Parallax effect intensity (0-1)',
      required: false,
      defaultValue: '0.5'
    },
    {
      name: 'videoBackground',
      type: 'string',
      description: 'Video background source URL',
      required: false
    },
    {
      name: 'videoOptions',
      type: 'VideoOptions',
      description: 'Video playback options',
      required: false
    },
    {
      name: 'backgroundSlider',
      type: 'HeroBackgroundSliderConfig',
      description: 'Background slider configuration with multiple images/videos',
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
      title: 'Basic Hero',
      description: 'Simple hero section with title and subtitle',
      code: `import { Hero, Button } from '@shohojdhara/atomix';

function BasicHero() {
  return (
    <Hero
      title="Welcome to Our Platform"
      subtitle="Build amazing experiences"
      text="Discover the power of modern web development"
      actions={
        <div className="u-d-flex u-gap-3">
          <Button variant="primary" size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">Learn More</Button>
        </div>
      }
    />
  );
}`,
      preview: null
    },
    {
      title: 'Hero with Background Image',
      description: 'Hero section with background image and overlay',
      code: `function HeroWithBackground() {
  return (
    <Hero
      title="Amazing Products"
      subtitle="Discover what we offer"
      backgroundImageSrc="/images/hero-background.jpg"
      showOverlay={true}
      alignment="center"
      fullViewportHeight={true}
    />
  );
}`,
      preview: null
    },
    {
      title: 'Hero with Video Background',
      description: 'Hero section with video background',
      code: `function HeroWithVideo() {
  return (
    <Hero
      title="Experience the Future"
      subtitle="Watch our story"
      videoBackground="/videos/hero-video.mp4"
      videoOptions={{
        autoplay: true,
        loop: true,
        muted: true
      }}
      showOverlay={true}
      alignment="center"
      fullViewportHeight={true}
    />
  );
}`,
      preview: null
    },
    {
      title: 'Hero with Background Slider',
      description: 'Hero section with multiple background images/videos',
      code: `function HeroWithSlider() {
  return (
    <Hero
      title="Dynamic Hero Section"
      subtitle="Multiple backgrounds"
      backgroundSlider={{
        slides: [
          { type: 'image', src: '/images/slide1.jpg' },
          { type: 'image', src: '/images/slide2.jpg' },
          { type: 'video', src: '/videos/slide3.mp4', videoOptions: { autoplay: true, loop: true, muted: true } }
        ],
        autoplay: { delay: 5000, pauseOnHover: true },
        loop: true,
        transition: 'fade',
        transitionDuration: 1000
      }}
      alignment="center"
      fullViewportHeight={true}
    />
  );
}`,
      preview: null
    },
    {
      title: 'Hero with Parallax',
      description: 'Hero section with parallax scrolling effect',
      code: `function HeroWithParallax() {
  return (
    <Hero
      title="Parallax Hero"
      subtitle="Scroll to see the effect"
      backgroundImageSrc="/images/parallax-bg.jpg"
      parallax={true}
      parallaxIntensity={0.7}
      alignment="center"
    />
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Hero component follows WCAG 2.1 guidelines with proper semantic HTML, ARIA attributes, and keyboard navigation support.',
    keyboardSupport: [
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
        action: 'Activates action buttons'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="banner"',
        description: 'Applied automatically for hero sections',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the hero section',
        required: false
      }
    ],
    guidelines: [
      'Provide descriptive alt text for images',
      'Ensure sufficient contrast between text and background',
      'Use overlays to improve text readability',
      'Provide alternative text for video backgrounds',
      'Ensure action buttons are keyboard accessible',
      'Test with screen readers for proper announcements'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Hero content is accessible to screen readers',
      'Action buttons receive focus when tabbed to',
      'Background media should not interfere with content accessibility'
    ]
  }
};


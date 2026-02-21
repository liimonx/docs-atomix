export const countdownMetadata = {
  id: 'countdown',
  name: 'Countdown',
  description: 'A real-time countdown timer to a specified target date/time. It provides customizable display options, automatic updates, and supports both standard and focused styling modes with completion callbacks.',
  category: 'Display',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Countdown',
  dependencies: ['react'],
  tags: ['countdown', 'timer', 'clock', 'time', 'date', 'event'],
  relatedComponents: ['Badge', 'Card', 'Hero'],
  features: [
    'Real-time countdown updates',
    'Customizable time units (days, hours, minutes, seconds)',
    'Custom separator strings',
    'Focused/highlighted styling mode',
    'Completion callback support',
    'Automatic cleanup on unmount',
    'Full accessibility support',
    'Responsive design'
  ],
  props: [
    {
      name: 'target',
      type: 'Date | string',
      description: 'Target date/time as a Date object or ISO string (Required)',
      required: true
    },
    {
      name: 'show',
      type: "Array<'days' | 'hours' | 'minutes' | 'seconds'>",
      description: 'Time units to display',
      required: false,
      defaultValue: "['days', 'hours', 'minutes', 'seconds']"
    },
    {
      name: 'separator',
      type: 'string',
      description: 'String used to separate time units',
      required: false,
      defaultValue: "':'"
    },
    {
      name: 'focused',
      type: 'boolean',
      description: 'Enable focused/highlighted styling',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false,
      defaultValue: "''"
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom styles object',
      required: false
    },
    {
      name: 'onComplete',
      type: '() => void',
      description: 'Callback function when countdown reaches zero',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Countdown',
      description: 'Simple countdown timer',
      code: `import { Countdown } from '@shohojdhara/atomix';

function EventCountdown() {
  // Target date: New Year's Day 2024
  const targetDate = new Date('2024-01-01T00:00:00');

  const handleCountdownComplete = () => {
    alert('Happy New Year!');
  };

  return (
    <Countdown 
      target={targetDate}
      onComplete={handleCountdownComplete}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Custom Time Units',
      description: 'Countdown showing only specific time units',
      code: `function CustomTimeUnits() {
  const targetDate = new Date('2024-12-31T23:59:59');

  return (
    <div className="u-gap-4">
      <Countdown 
        target={targetDate}
        show={['days', 'hours', 'minutes']}
      />
      
      <Countdown 
        target={targetDate}
        show={['hours', 'minutes', 'seconds']}
      />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Focused Styling',
      description: 'Countdown with highlighted/focused styling',
      code: `function SaleCountdown() {
  const saleEndDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3); // 3 days from now

  return (
    <div className="sale-banner">
      <h2>Flash Sale Ends In:</h2>
      <Countdown 
        target={saleEndDate}
        focused={true}
        show={['days', 'hours', 'minutes']}
        separator=""
      />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Custom Separator',
      description: 'Countdown with custom separator string',
      code: `function CustomSeparator() {
  const targetDate = new Date('2024-06-01T00:00:00');

  return (
    <div className="u-gap-4">
      <Countdown 
        target={targetDate}
        separator=" • "
        show={['hours', 'minutes', 'seconds']}
      />
      
      <Countdown 
        target={targetDate}
        separator=" | "
        show={['days', 'hours', 'minutes']}
      />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Dynamic Target Date',
      description: 'Countdown with dynamically changing target',
      code: `import { useState } from 'react';

function FlexibleCountdown() {
  const [targetDate, setTargetDate] = useState(
    new Date(Date.now() + 1000 * 60 * 60 * 24) // 1 day from now
  );

  return (
    <div>
      <Countdown target={targetDate} />
      <button onClick={() => setTargetDate(new Date(Date.now() + 1000 * 60 * 60 * 48))}>
        Extend to 2 days
      </button>
    </div>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Countdown component follows WCAG 2.1 guidelines with proper ARIA attributes and screen reader support.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'Countdown is a display-only component',
        context: 'No keyboard interaction required'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="timer"',
        description: 'Applied automatically to indicate countdown timer',
        required: true
      },
      {
        attribute: 'aria-live',
        description: 'Applied to announce countdown updates to screen readers',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the countdown',
        required: false
      }
    ],
    guidelines: [
      'Provide descriptive labels for countdown timers',
      'Use aria-live to announce important countdown updates',
      'Ensure sufficient color contrast for all text',
      'Provide context about what the countdown represents',
      'Consider announcing completion to screen readers'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Countdown is a display-only component',
      'Updates are announced to screen readers when appropriate',
      'Completion callback can trigger announcements'
    ]
  }
};


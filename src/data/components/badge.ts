// import { Badge } from '@shohojdhara/atomix';

export const badgeMetadata = {
  id: 'badge',
  name: 'Badge',
  description: 'A compact UI element used to display small pieces of information like status indicators, counters, labels, or categories. It provides a visual way to highlight important information or draw attention to specific content.',
  category: 'Indicators',
  status: 'stable' as const,
  version: '1.1.0',
  importPath: '@shohojdhara/atomix/Badge',
  dependencies: ['react'],
  tags: ['badge', 'status', 'notification', 'indicator', 'label', 'tag', 'counter'],
  relatedComponents: ['Icon', 'Avatar', 'Button', 'Card', 'Navigation'],
  features: [
    'Multiple variants (primary, secondary, success, info, warning, error, light, dark)',
    'Multiple sizes (sm, md, lg)',
    'Icon support for enhanced visual communication',
    'Glass morphism effect support',
    'Full accessibility support with ARIA attributes',
    'Proper color contrast for all variants',
    'Screen reader compatible'
  ],
  props: [
    {
      name: 'label',
      type: 'string',
      description: 'Text content of the badge (Required)',
      required: true
    },
    {
      name: 'variant',
      type: "ThemeColor | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'light' | 'dark'",
      description: 'Color variant of the badge',
      required: false,
      defaultValue: "'primary'"
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Size of the badge',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'Optional icon element to display',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the badge is disabled',
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
      name: 'glass',
      type: 'boolean | AtomixGlassProps',
      description: 'Glass morphism effect for the badge',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom style for the badge',
      required: false
    }
  ],
  examples: [
    {
      title: 'Badge Variants',
      description: 'Status badges and information badges with different variants',
      code: `// Status badges
<Badge label="Online" variant="success" />
<Badge label="Away" variant="warning" />
<Badge label="Offline" variant="error" />
<Badge label="Busy" variant="dark" />

// Information badges
<Badge label="New" variant="primary" />
<Badge label="Hot" variant="error" />
<Badge label="Sale" variant="warning" />
<Badge label="Featured" variant="info" />`,
      preview: null
    },
    {
      title: 'Badge Sizes',
      description: 'Three different badge sizes for different contexts',
      code: `<div className="badge-sizes">
  <Badge label="Small" variant="primary" size="sm" />
  <Badge label="Medium" variant="primary" size="md" />
  <Badge label="Large" variant="primary" size="lg" />
</div>`,
      preview: null
    },
    {
      title: 'Badges with Icons',
      description: 'Notification badges and status badges with icons',
      code: `import { Icon } from '@shohojdhara/atomix';

// Notification badges
<Badge
  label="3"
  variant="error"
  icon={<Icon name="Mail" size="xs" />}
/>

<Badge
  label="12"
  variant="primary"
  icon={<Icon name="MessageCircle" size="xs" />}
/>

// Status badges with icons
<Badge
  label="Verified"
  variant="success"
  icon={<Icon name="CheckCircle" size="xs" />}
/>

<Badge
  label="Premium"
  variant="warning"
  icon={<Icon name="Star" size="xs" />}
/>`,
      preview: null
    },
    {
      title: 'Notification Badges',
      description: 'Badges used for notification counts with max limit',
      code: `function NotificationBadge({ count, max = 99 }) {
  const displayCount = count > max ? \`\${max}+\` : count.toString();

  return (
    <div className="notification-container">
      <Icon name="Bell" size="md" />
      {count > 0 && (
        <Badge
          label={displayCount}
          variant="error"
          size="sm"
          className="notification-badge"
        />
      )}
    </div>
  );
}

// Usage
<NotificationBadge count={5} />
<NotificationBadge count={150} max={99} />`,
      preview: null
    },
    {
      title: 'Tag Badges',
      description: 'Using badges as tags in a list',
      code: `function TagList({ tags }) {
  return (
    <div className="tag-list">
      {tags.map(tag => (
        <Badge
          key={tag.id}
          label={tag.name}
          variant="light"
          size="sm"
        />
      ))}
    </div>
  );
}

// Usage
<TagList tags={[
  { id: 1, name: 'React' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'CSS' }
]} />`,
      preview: null
    },
    {
      title: 'Status Indicators',
      description: 'User status badges with dynamic variant selection',
      code: `function UserStatus({ user }) {
  const getStatusBadge = (status) => {
    const statusConfig = {
      online: { variant: 'success', label: 'Online' },
      away: { variant: 'warning', label: 'Away' },
      busy: { variant: 'error', label: 'Busy' },
      offline: { variant: 'dark', label: 'Offline' }
    };

    return statusConfig[status] || statusConfig.offline;
  };

  const status = getStatusBadge(user.status);

  return (
    <div className="user-status">
      <Avatar src={user.avatar} circle />
      <div className="user-info">
        <span className="user-name">{user.name}</span>
        <Badge
          label={status.label}
          variant={status.variant}
          size="sm"
        />
      </div>
    </div>
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Badge component follows accessibility best practices with proper color contrast, ARIA support, and screen reader compatibility.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'Badges are typically non-interactive elements',
        context: 'When used as interactive elements, they should follow standard button keyboard patterns'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'aria-disabled',
        description: 'Applied when the badge is disabled',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'For dot badges or badges without clear text content',
        required: false
      }
    ],
    guidelines: [
      'Use meaningful text: Make badge content descriptive',
      "Don't rely solely on color to convey information - use both color and text or icons",
      'Provide context for screen readers when using numeric badges',
      'Maintain proper color contrast ratios for all variants',
      'Ensure badges are accessible to screen readers'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Badges typically do not receive focus',
      'Interactive badges should be focusable and have clear focus indicators'
    ]
  }
};

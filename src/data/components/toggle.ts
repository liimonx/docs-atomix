// import { Toggle } from '@shohojdhara/atomix';

export const toggleMetadata = {
  id: 'toggle',
  name: 'Toggle',
  description: 'A switch-like control for binary states. Perfect for settings, preferences, and any on/off functionality, offering a more visual alternative to checkboxes with smooth animations and clear state indication.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Toggle',
  dependencies: ['react'],
  tags: ['toggle', 'switch', 'form', 'control', 'binary', 'on-off'],
  relatedComponents: ['Checkbox', 'Radio', 'Button', 'Form'],
  features: [
    'Binary on/off state control',
    'Smooth animations and transitions',
    'Multiple sizes (sm, md, lg)',
    'Multiple color variants',
    'Disabled state support',
    'Glass morphism effect support',
    'Full accessibility support with ARIA attributes',
    'Keyboard navigation support'
  ],
  props: [
    {
      name: 'initialOn',
      type: 'boolean',
      description: 'Whether the toggle is initially on',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'onToggleOn',
      type: '() => void',
      description: 'Callback when the toggle is turned on',
      required: false
    },
    {
      name: 'onToggleOff',
      type: '() => void',
      description: 'Callback when the toggle is turned off',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the toggle is disabled',
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
      description: 'Custom style for the toggle',
      required: false
    },
    {
      name: 'glass',
      type: 'boolean | AtomixGlassProps',
      description: 'Glass morphism effect for the toggle',
      required: false,
      defaultValue: 'false'
    }
  ],
  examples: [
    {
      title: 'Basic Toggles',
      description: 'Simple toggle switches for settings',
      code: `import { useState } from 'react';
import { Toggle } from '@shohojdhara/atomix';

function BasicToggles() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false
  });

  const handleToggle = (key) => (checked) => {
    setSettings(prev => ({ ...prev, [key]: checked }));
  };

  return (
    <div className="u-gap-4">
      <Toggle 
        initialOn={settings.notifications}
        onToggleOn={() => handleToggle('notifications')(true)}
        onToggleOff={() => handleToggle('notifications')(false)}
      />
      <label>Enable notifications</label>
      
      <Toggle 
        initialOn={settings.darkMode}
        onToggleOn={() => handleToggle('darkMode')(true)}
        onToggleOff={() => handleToggle('darkMode')(false)}
      />
      <label>Dark mode</label>
      
      <Toggle 
        initialOn={settings.autoSave}
        onToggleOn={() => handleToggle('autoSave')(true)}
        onToggleOff={() => handleToggle('autoSave')(false)}
      />
      <label>Auto-save documents</label>
      
      <Toggle 
        initialOn={settings.analytics}
        onToggleOn={() => handleToggle('analytics')(true)}
        onToggleOff={() => handleToggle('analytics')(false)}
        disabled
      />
      <label>Share usage analytics</label>
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Settings Panel',
      description: 'Toggle switches in a settings panel',
      code: `function SettingsPanel() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    marketingEmails: false
  });

  return (
    <div className="settings-panel">
      <h3>Notification Settings</h3>
      <div className="u-gap-3">
        <div className="setting-item">
          <div>
            <label>Email Notifications</label>
            <p className="u-fs-sm u-text-secondary">
              Receive notifications via email
            </p>
          </div>
          <Toggle 
            initialOn={settings.emailNotifications}
            onToggleOn={() => setSettings(prev => ({ ...prev, emailNotifications: true }))}
            onToggleOff={() => setSettings(prev => ({ ...prev, emailNotifications: false }))}
          />
        </div>
        
        <div className="setting-item">
          <div>
            <label>Push Notifications</label>
            <p className="u-fs-sm u-text-secondary">
              Receive push notifications on your device
            </p>
          </div>
          <Toggle 
            initialOn={settings.pushNotifications}
            onToggleOn={() => setSettings(prev => ({ ...prev, pushNotifications: true }))}
            onToggleOff={() => setSettings(prev => ({ ...prev, pushNotifications: false }))}
          />
        </div>
      </div>
    </div>
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Toggle component follows WCAG 2.1 guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Space',
        action: 'Toggles the switch on/off'
      },
      {
        key: 'Enter',
        action: 'Toggles the switch on/off'
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
        attribute: 'role="switch"',
        description: 'Applied automatically to indicate toggle functionality',
        required: true
      },
      {
        attribute: 'aria-checked',
        description: 'Current state of the toggle (true/false)',
        required: true
      },
      {
        attribute: 'aria-disabled',
        description: 'Set to true when the toggle is disabled',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the toggle',
        required: false
      }
    ],
    guidelines: [
      'Provide clear labels for all toggles',
      'Use descriptive text to explain what the toggle controls',
      'Ensure toggles are keyboard accessible',
      'Provide visual feedback for state changes',
      'Disabled toggles should not receive focus',
      'Use appropriate ARIA labels for screen readers'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Toggle receives focus when tabbed to',
      'Toggle maintains clear focus indicator',
      'Focus is not trapped within the toggle',
      'Disabled toggles do not receive focus',
      'State changes are announced to screen readers'
    ]
  }
};


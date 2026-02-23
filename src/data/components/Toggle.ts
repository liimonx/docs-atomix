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
      name: 'checked',
      type: 'boolean',
      description: 'Toggle state',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'onChange',
      type: '(checked: boolean) => void',
      description: 'Change handler',
      required: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Disabled state',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Toggle size',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'label',
      type: 'string',
      description: 'Toggle label',
      required: false
    },
    {
      name: 'description',
      type: 'string',
      description: 'Additional description',
      required: false
    },
    {
      name: 'variant',
      type: "ThemeColor | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'",
      description: 'Color variant',
      required: false,
      defaultValue: "'primary'"
    },
    {
      name: 'id',
      type: 'string',
      description: 'Toggle ID',
      required: false
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
      description: 'Glass morphism effect for the toggle',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom style for the toggle',
      required: false
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
      preview: true
    },
    {
      title: 'Toggle Sizes and Variants',
      description: 'Different sizes and color variants',
      code: `import { Toggle } from '@shohojdhara/atomix';
import { useState } from 'react';

function ToggleSizesVariants() {
  const [toggleStates, setToggleStates] = useState({
    small: false,
    medium: true,
    large: false
  });

  const handleToggle = (key) => (checked) => {
    setToggleStates(prev => ({ ...prev, [key]: checked }));
  };

  return (
    <div className="u-gap-6">
      <div className="u-gap-4">
        <h3 className="u-font-semibold">Sizes</h3>
        <div className="u-gap-3">
          <div className="u-flex u-align-items-center u-gap-3">
            <Toggle 
              size="sm"
              checked={toggleStates.small}
              onChange={handleToggle('small')}
            />
            <span>Small toggle</span>
          </div>
          
          <div className="u-flex u-align-items-center u-gap-3">
            <Toggle 
              size="md"
              checked={toggleStates.medium}
              onChange={handleToggle('medium')}
            />
            <span>Medium toggle (default)</span>
          </div>
          
          <div className="u-flex u-align-items-center u-gap-3">
            <Toggle 
              size="lg"
              checked={toggleStates.large}
              onChange={handleToggle('large')}
            />
            <span>Large toggle</span>
          </div>
        </div>
      </div>

      <div className="u-gap-4">
        <h3 className="u-font-semibold">Color Variants</h3>
        <div className="u-grid u-grid-cols-2 u-gap-3">
          <Toggle checked variant="primary" label="Primary" />
          <Toggle checked variant="success" label="Success" />
          <Toggle checked variant="warning" label="Warning" />
          <Toggle checked variant="error" label="Error" />
          <Toggle checked variant="info" label="Info" />
          <Toggle checked variant="secondary" label="Secondary" />
        </div>
      </div>
    </div>
  );
}`,
      preview: true
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
            <p className="u-text-sm u-text-secondary">
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
            <p className="u-text-sm u-text-secondary">
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
      preview: true
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

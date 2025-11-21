import React, { useState } from 'react';
import { 
  Card, 
  Tab, 
  Button, 
  Badge, 
  Callout, 
  Icon,
  Tooltip
} from '@shohojdhara/atomix';
import type { ComponentDocumentation } from '@/types/index';

interface ComponentShowcaseProps {
  component: ComponentDocumentation;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  component
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      icon: 'Eye' as any,
      description: 'Component overview and basic usage',
      content: (
        <div className="tab-content overview-content">
          {/* Quick Start */}
          <section className="quick-start-section">
            <h2>Quick Start</h2>
            <p>Get started with {component.name} in just a few lines of code.</p>

            <div className="code-example">
              <div className="code-header">
                <span className="code-title">Basic Usage</span>
              </div>
              <pre className="code-block">
                <code>{component.quickStart || `import { ${component.name} } from '@shohojdhara/atomix';

function MyComponent() {
  return (
    <${component.name}>
      {/* Your content here */}
    </${component.name}>
  );
}`}</code>
              </pre>
            </div>
          </section>

          {/* Key Features */}
          {component.features && component.features.length > 0 && (
            <section className="features-section">
              <h2>Key Features</h2>
              <div className="features-grid">
                {component.features.map((feature, index) => (
                  <Card key={index} className="feature-card">
                    <div className="feature-content">
                      <Icon
                        name={feature.icon as any}
                        size="md"
                        className="feature-icon"
                      />
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      )
    },
    {
      id: 'examples',
      label: 'Examples',
      icon: 'Code' as any,
      description: 'Interactive examples and demos',
      content: (
        <div className="tab-content examples-content">
          <p>Examples content will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'api',
      label: 'API',
      icon: 'FileText' as any,
      description: 'Props, types, and API reference',
      content: (
        <div className="tab-content api-content">
          <p>API documentation will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      icon: 'Shield' as any,
      description: 'A11y features and guidelines',
      content: (
        <div className="tab-content accessibility-content">
          <p>Accessibility guidelines will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'design',
      label: 'Design',
      icon: 'Palette' as any,
      description: 'Design tokens and theming',
      content: (
        <div className="tab-content design-content">
          <p>Design tokens information will be implemented here.</p>
        </div>
      )
    }
  ];

  return (
    <div className="component-showcase" role="main">
      {/* Component Header */}
      <header className="showcase-header">
        <div className="header-content">
          <div className="title-section">
            <div className="title-wrapper">
              {component.icon && (
                <Icon
                  name={component.icon as any}
                  size="lg"
                  className="component-icon"
                  aria-hidden="true"
                />
              )}
              <h1 className="component-title">
                {component.name}
              </h1>
            </div>

            <div className="component-badges">
              <Badge variant="primary" size="sm" label="Component" />

              {component.status === 'stable' && (
                <Badge variant="success" size="sm" label="Stable" />
              )}

              {component.status === 'beta' && (
                <Badge variant="warning" size="sm" label="Beta" />
              )}

              {component.status === 'deprecated' && (
                <Badge variant="error" size="sm" label="Deprecated" />
              )}

              {component.isNew && (
                <Badge variant="info" size="sm" label="New" />
              )}
            </div>
          </div>

          <div className="header-actions">
            <Tooltip content="Copy import statement">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `import { ${component.name} } from '@shohojdhara/atomix';`
                  );
                }}
                aria-label="Copy import statement"
              >
                <Icon name="Copy" size="sm" />
                Import
              </Button>
            </Tooltip>
          </div>
        </div>

        <p className="component-description">
          {component.description}
        </p>

        {/* Status Messages */}
        {component.status === 'deprecated' && (
          <Callout variant="warning" className="status-callout">
            <Icon name={"AlertTriangle" as any} size="sm" />
            <div>
              <strong>Deprecated Component</strong>
              <p>{component.deprecationMessage || 'This component will be removed in a future version.'}</p>
            </div>
          </Callout>
        )}

        {component.status === 'beta' && (
          <Callout variant="info" className="status-callout">
            <Icon name="Info" size="sm" />
            <div>
              <strong>Beta Component</strong>
              <p>This component is in beta. The API may change in future releases.</p>
            </div>
          </Callout>
        )}
      </header>

      {/* Navigation Tabs */}
      <Tab
        items={tabs}
        activeIndex={activeTab}
        onTabChange={setActiveTab}
        className="showcase-tabs"
        aria-label="Component documentation sections"
      />
    </div>
  );
};
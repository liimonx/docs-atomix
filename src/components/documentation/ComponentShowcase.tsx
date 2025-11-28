import React, { useState } from 'react';
import { 
  Card, 
  Tabs, 
  Button, 
  Badge, 
  Callout, 
  Icon,
  Tooltip,
  Row,
  GridCol
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
        <div className="u-mt-4">
          {/* Quick Start */}
          <section className="u-mb-8">
            <h2 className="u-fs-2xl u-fw-bold u-mb-3">Quick Start</h2>
            <p className="u-text-secondary-emphasis u-mb-4">Get started with {component.name} in just a few lines of code.</p>

            <Card className="u-p-0 u-overflow-hidden">
              <div className="u-p-3 u-bg-tertiary u-border-b u-border-subtle">
                <span className="u-fs-sm u-fw-medium u-text-secondary-emphasis">Basic Usage</span>
              </div>
              <div className="u-p-4 u-bg-secondary">
                <pre className="u-m-0 u-overflow-x-auto">
                  <code className="u-fs-sm">{component.quickStart || `import { ${component.name} } from '@shohojdhara/atomix';

function MyComponent() {
  return (
    <${component.name}>
      {/* Your content here */}
    </${component.name}>
  );
}`}</code>
                </pre>
              </div>
            </Card>
          </section>

          {/* Key Features */}
          {component.features && component.features.length > 0 && (
            <section className="u-mb-8">
              <h2 className="u-fs-2xl u-fw-bold u-mb-4">Key Features</h2>
              <Row>
                {component.features.map((feature, index) => (
                  <GridCol key={index} md={6} lg={4}>
                    <Card className="u-p-6 u-h-100">
                      <div className="u-d-flex u-flex-direction-column u-gap-3">
                        <Icon
                          name={feature.icon as any}
                          size="md"
                          className="u-text-primary"
                        />
                        <h3 className="u-fs-lg u-fw-semibold u-m-0">{feature.title}</h3>
                        <p className="u-text-secondary-emphasis u-m-0">{feature.description}</p>
                      </div>
                    </Card>
                  </GridCol>
                ))}
              </Row>
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
        <div className="u-mt-4">
          <p className="u-text-secondary-emphasis">Examples content will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'api',
      label: 'API',
      icon: 'FileText' as any,
      description: 'Props, types, and API reference',
      content: (
        <div className="u-mt-4">
          <p className="u-text-secondary-emphasis">API documentation will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      icon: 'Shield' as any,
      description: 'A11y features and guidelines',
      content: (
        <div className="u-mt-4">
          <p className="u-text-secondary-emphasis">Accessibility guidelines will be implemented here.</p>
        </div>
      )
    },
    {
      id: 'design',
      label: 'Design',
      icon: 'Palette' as any,
      description: 'Design tokens and theming',
      content: (
        <div className="u-mt-4">
          <p className="u-text-secondary-emphasis">Design tokens information will be implemented here.</p>
        </div>
      )
    }
  ];

  return (
    <div role="main" className="u-mb-8">
      {/* Component Header */}
      <Card className="u-p-6 u-mb-6 u-bg-gradient" style={{ background: 'linear-gradient(135deg, var(--atomix-color-bg-secondary), var(--atomix-color-bg-tertiary))' }}>
        <div className="u-d-flex u-align-items-center u-justify-content-between u-flex-wrap u-gap-4 u-mb-4">
          <div className="u-flex-grow-1" style={{ minWidth: '300px' }}>
            <div className="u-d-flex u-align-items-center u-gap-3 u-mb-3">
              {component.icon && (
                <Icon
                  name={component.icon as any}
                  size="lg"
                  className="u-text-primary"
                  aria-hidden="true"
                />
              )}
              <h1 className="u-fs-4xl u-fw-extrabold u-m-0" style={{ 
                background: 'var(--atomix-color-primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {component.name}
              </h1>
            </div>

            <div className="u-d-flex u-gap-2 u-flex-wrap u-mb-4">
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

          <div className="u-d-flex u-gap-2 u-align-items-center">
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

        <p className="u-fs-lg u-text-secondary-emphasis u-mb-4" style={{ lineHeight: '1.6' }}>
          {component.description}
        </p>

        {/* Status Messages */}
        {component.status === 'deprecated' && (
          <Callout variant="warning" className="u-mt-4">
            <Icon name={"AlertTriangle" as any} size="sm" />
            <div>
              <strong>Deprecated Component</strong>
              <p>{component.deprecationMessage || 'This component will be removed in a future version.'}</p>
            </div>
          </Callout>
        )}

        {component.status === 'beta' && (
          <Callout variant="info" className="u-mt-4">
            <Icon name="Info" size="sm" />
            <div>
              <strong>Beta Component</strong>
              <p>This component is in beta. The API may change in future releases.</p>
            </div>
          </Callout>
        )}
      </Card>

      {/* Navigation Tabs */}
      <Tabs
        items={tabs}
        activeIndex={activeTab}
        onTabChange={setActiveTab}
        aria-label="Component documentation sections"
      />
    </div>
  );
};
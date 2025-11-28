'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  ExternalLink,
  Github,
  CheckCircle
} from 'lucide-react';
import { Button, Card, Badge, Row, GridCol, Tabs, Block } from '@shohojdhara/atomix';
import toast from 'react-hot-toast';

import { componentMetadata } from '@/data/components';
import { ComponentProps } from '@/components/showcase/ComponentProps';
import { ComponentExamples } from '@/components/showcase/ComponentExamples';
import { ComponentAccessibility } from '@/components/showcase/ComponentAccessibility';
import { ComponentRelated } from '@/components/showcase/ComponentRelated';
import { BreadcrumbNavigation } from '@/components/navigation/BreadcrumbNavigation';

const ComponentDetailPage: React.FC<{ componentId?: string }> = ({ componentId: componentIdProp }) => {
  const params = useParams();
  const componentId = componentIdProp || (params?.componentId as string) || '';
  const [activeTab, setActiveTab] = useState<'overview' | 'examples' | 'props' | 'accessibility'>('overview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const componentDoc = componentId ? componentMetadata.find(c => c.id === componentId) : null;

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

const getStatusColor = (status: string): 'success' | 'warning' | 'info' | 'error' => {
  switch (status) {
    case 'stable': return 'success';
    case 'beta': return 'warning';
    case 'alpha': return 'info';
    case 'deprecated': return 'error';
    default: return 'info';
  }
};


  if (!componentDoc) {
    return (
      <Block>
        <div className="u-text-center u-py-8">
          <h1 className="u-fs-3xl u-fw-bold u-mb-4">Component Not Found</h1>
          <p className="u-text-secondary-emphasis u-mb-6">The requested component could not be found.</p>
          <Link href="/docs/components/overview">
            <Button>Back to Components</Button>
          </Link>
        </div>
      </Block>
    );
  }

  // Prepare tab items for Atomix Tabs component
  const tabItems = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="u-mt-4">
          <Row>
            <GridCol md={8}>
              <Card className="u-p-6 u-mb-6">
                <h3 className="u-fs-xl u-fw-bold u-mb-4">Features</h3>
                <ul className="u-list-none u-p-0 u-m-0 u-d-flex u-flex-direction-column u-gap-2">
                  {componentDoc.features.map((feature, index) => (
                    <li key={index} className="u-d-flex u-align-items-start u-gap-2">
                      <CheckCircle size={16} className="u-text-success u-flex-shrink-0" style={{ marginTop: '2px' }} />
                      <span className="u-text-secondary-emphasis">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </GridCol>
            <GridCol md={4}>
              <Card className="u-p-6 u-mb-6">
                <h3 className="u-fs-xl u-fw-bold u-mb-4">Dependencies</h3>
                {componentDoc.dependencies.length > 0 ? (
                  <ul className="u-list-none u-p-0 u-m-0 u-d-flex u-flex-direction-column u-gap-2">
                    {componentDoc.dependencies.map((dep, index) => (
                      <li key={index}>
                        <Badge variant="warning" label={dep} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="u-text-secondary-emphasis u-m-0">No external dependencies</p>
                )}
              </Card>
            </GridCol>
          </Row>

          <Card className="u-p-6 u-mb-6">
            <h3 className="u-fs-xl u-fw-bold u-mb-4">Installation</h3>
            <Card className="u-p-4 u-bg-secondary u-border u-border-subtle u-overflow-x-auto">
              <pre className="u-m-0 u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
                <code>npm install @shohojdhara/atomix</code>
              </pre>
            </Card>
          </Card>

          <Card className="u-p-6">
            <h3 className="u-fs-xl u-fw-bold u-mb-4">Basic Usage</h3>
            <Card className="u-p-4 u-bg-secondary u-border u-border-subtle u-overflow-x-auto">
              <pre className="u-m-0 u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
                <code>{`import { ${componentDoc.name} } from '${componentDoc.importPath}';`}</code>
              </pre>
            </Card>
          </Card>
        </div>
      )
    },
    {
      id: 'examples',
      label: 'Examples',
      content: (
        <ComponentExamples
          examples={componentDoc.examples.map(example => ({
            ...example,
            language: 'jsx',
            category: 'example'
          }))}
          onCopy={copyToClipboard}
          copiedCode={copiedCode}
        />
      )
    },
    {
      id: 'props',
      label: 'Props',
      content: <ComponentProps props={componentDoc.props} />
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      content: (
        <ComponentAccessibility
          accessibility={{
            overview: 'Overview of accessibility features',
            guidelines: ['WCAG guidelines followed'],
            wcagLevel: 'AA',
            keyboardSupport: [],
            ariaAttributes: []
          }}
        />
      )
    }
  ];

  const getActiveTabIndex = () => {
    const index = tabItems.findIndex(tab => tab.id === activeTab);
    return index >= 0 ? index : 0;
  };

  return (
    <div className="u-min-h-screen u-pb-xl">
      <BreadcrumbNavigation />

      <Block>
        <div className="u-mb-8">
          <Link 
            href="/docs/components/overview" 
            className="u-d-inline-flex u-align-items-center u-gap-2 u-text-secondary-emphasis u-text-decoration-none u-fs-sm u-mb-4 u-transition-fast u-focus-visible-ring"
            style={{ 
              transition: 'var(--atomix-transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--atomix-color-primary)';
              e.currentTarget.style.transform = 'translateX(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '';
              e.currentTarget.style.transform = '';
            }}
          >
            <span>← Back to Components</span>
          </Link>

          <div className="u-d-flex u-flex-wrap u-align-items-center u-justify-content-between u-gap-4">
            <div>
              <h1 className="u-fs-4xl u-fw-bold u-mb-2">{componentDoc.name}</h1>
              <p className="u-text-secondary-emphasis u-m-0">{componentDoc.description}</p>
            </div>

            <div className="u-d-flex u-gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(`https://github.com/shohojdhara/atomix/tree/main/src/components/${componentDoc.name}`, '_blank')}
              >
                <Github size={16} className="u-mr-2" />
                Source
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://atomix-storybook.netlify.app', '_blank')}
              >
                <ExternalLink size={16} className="u-mr-2" />
                Storybook
              </Button>
            </div>
          </div>

          <div className="u-d-flex u-flex-wrap u-gap-3 u-mt-4">
            <Badge variant={getStatusColor(componentDoc.status)} label={componentDoc.status} />
            <Badge variant="secondary" label={`v${componentDoc.version}`} />
            <Badge variant="secondary" label={`Import: ${componentDoc.importPath}`} />
          </div>
        </div>

        <div className="u-mb-6">
          <Tabs
            items={tabItems}
            activeIndex={getActiveTabIndex()}
            onTabChange={(index) => {
              const tab = tabItems[index];
              if (tab) {
                setActiveTab(tab.id as any);
              }
            }}
          />
        </div>

        <div className="u-mt-8">
          <ComponentRelated relatedComponents={componentDoc.relatedComponents} />
        </div>
      </Block>
    </div>
  );
};

export default ComponentDetailPage;

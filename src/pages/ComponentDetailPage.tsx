import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Copy,
  ExternalLink,
  Github,
  BookOpen,
  Code,
  Eye,
  Download,
  Star,
  AlertCircle,
  CheckCircle,
  Info,
  Lightbulb
} from 'lucide-react';
import { Button, Card, Badge, Row, GridCol } from '@shohojdhara/atomix';
import toast from 'react-hot-toast';

import { componentMetadata } from '../data/components';
import { ComponentShowcase } from '../components/showcase/ComponentShowcase';
import { ComponentProps } from '../components/showcase/ComponentProps';
import { ComponentExamples } from '../components/showcase/ComponentExamples';
import { ComponentAccessibility } from '../components/showcase/ComponentAccessibility';
import { ComponentRelated } from '../components/showcase/ComponentRelated';
import { Breadcrumb } from '../components/layout/Breadcrumb';

const ComponentDetailPage: React.FC = () => {
  const { componentId } = useParams<{ componentId: string }>();
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
    default: return 'default';
  }
};


  if (!componentDoc) {
    return (
      <div className="container">
        <div className="u-text-center u-py-8">
          <h1>Component Not Found</h1>
          <p>The requested component could not be found.</p>
          <Link to="/components">
            <Button>Back to Components</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Create breadcrumb items
  const breadcrumbItems = [
    { label: 'Components', path: '/docs/components/overview' },
    { label: componentDoc.name }
  ];

  return (
    <div className="component-detail-page">
      <Helmet>
        <title>{componentDoc.name} - Atomix Documentation</title>
        <meta name="description" content={componentDoc.description} />
      </Helmet>

      <Breadcrumb items={breadcrumbItems} />

      <div className="component-header u-mb-8">
        <Link to="/components" className="u-d-flex u-align-items-center u-mb-4 u-text-decoration-none">
          <span>← Back to Components</span>
        </Link>

        <div className="u-d-flex u-flex-wrap u-align-items-center u-justify-content-between u-gap-4">
          <div>
            <h1 className="u-mb-2">{componentDoc.name}</h1>
            <p className="u-text-muted u-mb-0">{componentDoc.description}</p>
          </div>

          <div className="u-d-flex u-gap-2">
            <Button variant="outline" size="sm">
              <Github size={16} className="u-mr-2" />
              Source
            </Button>
            <Button variant="outline" size="sm">
              <ExternalLink size={16} className="u-mr-2" />
              Storybook
            </Button>
          </div>
        </div>

        <div className="u-d-flex u-flex-wrap u-gap-3 u-mt-4">
          <Badge variant={getStatusColor(componentDoc.status)} label={componentDoc.status} />
          <Badge variant="secondary" label={`v${componentDoc.version}`} />
          <Badge variant="outline" label={`Import: ${componentDoc.importPath}`} />
        </div>
      </div>

      <div className="component-navigation u-mb-6">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`tab ${activeTab === 'examples' ? 'active' : ''}`}
            onClick={() => setActiveTab('examples')}
          >
            Examples
          </button>
          <button
            className={`tab ${activeTab === 'props' ? 'active' : ''}`}
            onClick={() => setActiveTab('props')}
          >
            Props
          </button>
          <button
            className={`tab ${activeTab === 'accessibility' ? 'active' : ''}`}
            onClick={() => setActiveTab('accessibility')}
          >
            Accessibility
          </button>
        </div>
      </div>

      <div className="component-content">
        {activeTab === 'overview' && (
          <div className="overview-content">
            <Row>
              <GridCol md={8}>
                <Card className="u-mb-6">
                  <h3 className="u-mb-4">Features</h3>
                  <ul className="u-list-unstyled">
                    {componentDoc.features.map((feature, index) => (
                      <li key={index} className="u-mb-2 u-d-flex u-align-items-start">
                        <CheckCircle size={16} className="u-mr-2 u-mt-1 text-success" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </GridCol>
              <GridCol md={4}>
                <Card className="u-mb-6">
                  <h3 className="u-mb-4">Dependencies</h3>
                  {componentDoc.dependencies.length > 0 ? (
                    <ul className="u-list-unstyled">
                      {componentDoc.dependencies.map((dep, index) => (
                        <li key={index} className="u-mb-2">
                          <span className="badge badge-outline">{dep}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="u-text-muted">No external dependencies</p>
                  )}
                </Card>
              </GridCol>
            </Row>

            <Card className="u-mb-6">
              <h3 className="u-mb-4">Installation</h3>
              <pre className="code-block u-mb-0">
                <code>npm install @shohojdhara/atomix</code>
              </pre>
            </Card>

            <Card>
              <h3 className="u-mb-4">Basic Usage</h3>
              <pre className="code-block u-mb-0">
                <code>{`import { ${componentDoc.name} } from '${componentDoc.importPath}';`}</code>
              </pre>
            </Card>
          </div>
        )}

        {activeTab === 'examples' && (
<ComponentExamples
  examples={componentDoc.examples.map(example => ({
    ...example,
    language: 'jsx',
    category: 'example'
  }))}
  onCopy={copyToClipboard}
  copiedCode={copiedCode}
/>

        )}

        {activeTab === 'props' && (
          <ComponentProps props={componentDoc.props} />
        )}

        {activeTab === 'accessibility' && (
          <ComponentAccessibility
  accessibility={{
    ...componentDoc.accessibility,
    overview: 'Overview of accessibility features',
    guidelines: 'WCAG guidelines followed',
    wcagLevel: 'AA'
  }}
/>
        )}
      </div>

      <div className="component-footer u-mt-8">
        <ComponentRelated relatedComponents={componentDoc.relatedComponents} />
      </div>
    </div>
  );
};

export default ComponentDetailPage;

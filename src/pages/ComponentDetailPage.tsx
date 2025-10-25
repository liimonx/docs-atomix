import React from 'react';
import { Row, GridCol } from '@shohojdhara/atomix';

interface Accessibility {
  keyboardSupport: string[];
  ariaAttributes: string[];
}

interface ComponentAccessibilityProps {
  accessibility: Accessibility;
}

const ComponentAccessibility: React.FC<ComponentAccessibilityProps> = ({ accessibility }) => {
  return (
    <div className="accessibility-tab">
      <div className="card u-mb-6">
        <h3 className="u-mb-4">Keyboard Support</h3>
        <ul className="u-list-unstyled">
          {accessibility.keyboardSupport.map((key, index) => (
            <li key={index} className="u-mb-2">{key}</li>
          ))}
        </ul>
      </div>
      
      <div className="card">
        <h3 className="u-mb-4">ARIA Attributes</h3>
        <ul className="u-list-unstyled">
          {accessibility.ariaAttributes.map((attr, index) => (
            <li key={index} className="u-mb-2">{attr}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComponentAccessibility;
import React from 'react';
import { Button, Card } from '@shohojdhara/atomix';
import toast from 'react-hot-toast';

interface Example {
  title: string;
  description: string;
  code: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

interface ComponentExamplesProps {
  examples: Example[];
  onCopy: (code: string, id: string) => void;
  copiedCode: string | null;
}

const ComponentExamples: React.FC<ComponentExamplesProps> = ({ 
  examples, 
  onCopy, 
  copiedCode 
}) => {
  return (
    <div className="examples-tab">
      {examples.map((example, index) => (
        <Card key={index} className="example-card u-mb-6">
          <h3 className="u-mb-2">{example.title}</h3>
          <p className="u-mb-4">{example.description}</p>
          
          <div className="example-preview u-mb-4 u-p-4 u-border u-rounded">
            <p>Component preview would be displayed here</p>
          </div>
          
          <div className="example-code u-position-relative">
            <pre className="u-p-4 u-bg-gray-100 u-rounded u-mb-0">
              <code>{example.code}</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              className="u-position-absolute u-top-2 u-right-2"
              onClick={() => onCopy(example.code, `example-${index}`)}
            >
              {copiedCode === `example-${index}` ? 'Copied!' : 'Copy'}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ComponentExamples;
import React from 'react';
import { Badge } from '@shohojdhara/atomix';

interface Prop {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
  required: boolean;
}

interface ComponentPropsProps {
  props: Prop[];
}

const ComponentProps: React.FC<ComponentPropsProps> = ({ props }) => {
  return (
    <div className="props-tab">
      <div className="card">
        <table className="props-table u-w-100">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, index) => (
              <tr key={index}>
                <td>
                  <code>{prop.name}</code>
                  {prop.required && <Badge variant="error" className="u-ml-2">Required</Badge>}
                </td>
                <td>
                  <code>{prop.type}</code>
                </td>
                <td>
                  <code>{prop.defaultValue || '-'}</code>
                </td>
                <td>{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComponentProps;
import React from 'react';

const ComponentShowcase: React.FC = () => {
  return (
    <div className="component-showcase">
      <p>Component showcase will be displayed here</p>
    </div>
  );
};

export default ComponentShowcase;
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

  const getStatusColor = (status: string) => {
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

  return (
    <div className="component-detail-page">
      <Helmet>
        <title>{componentDoc.name} - Atomix Documentation</title>
        <meta name="description" content={componentDoc.description} />
      </Helmet>

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
          <Badge variant={getStatusColor(componentDoc.status)}>{componentDoc.status}</Badge>
          <Badge variant="secondary">v{componentDoc.version}</Badge>
          <Badge variant="outline">Import: {componentDoc.importPath}</Badge>
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
            examples={componentDoc.examples} 
            onCopy={copyToClipboard}
            copiedCode={copiedCode}
          />
        )}

        {activeTab === 'props' && (
          <ComponentProps props={componentDoc.props} />
        )}

        {activeTab === 'accessibility' && (
          <ComponentAccessibility accessibility={componentDoc.accessibility} />
        )}
      </div>

      <div className="component-footer u-mt-8">
        <ComponentRelated relatedComponents={componentDoc.relatedComponents} />
      </div>
    </div>
  );
};

export default ComponentDetailPage;
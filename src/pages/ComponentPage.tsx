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
  Lightbulb,
  ArrowLeft
} from 'lucide-react';
import { Button, Card, Badge, Row, GridCol, Container, Hero, Icon, Dropdown, Spinner, SideMenu, SideMenuList, SideMenuItem } from '@shohojdhara/atomix';
import toast from 'react-hot-toast';

import { findNavigationItem } from '../data/navigation';
import { ComponentDocumentation } from '../types';
import { getComponentDocumentation } from '../utils/documentationLoader';
import { ComponentShowcase } from '../components/showcase/ComponentShowcase';
import { ComponentProps } from '../components/showcase/ComponentProps';
import { ComponentExamples } from '../components/showcase/ComponentExamples';
import { ComponentAccessibility } from '../components/showcase/ComponentAccessibility';
import { ComponentRelated } from '../components/showcase/ComponentRelated';

const ComponentPage: React.FC = () => {
  const { componentId } = useParams<{ componentId: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'examples' | 'props' | 'accessibility'>('overview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Find navigation item for the component
  const navigationItem = componentId ? findNavigationItem(componentId) : null;

  // Get component documentation directly (no loading state needed)
  const componentData = getComponentDocumentation(componentId || '');
  const componentDoc: ComponentDocumentation = componentData || {
    name: navigationItem?.title || componentId || '',
    description: `A ${componentId} component for building user interfaces.`,
    category: navigationItem?.category || 'Components',
    version: '1.0.0',
    status: 'stable',
    lastUpdated: new Date().toISOString().split('T')[0],
    author: 'Atomix Team',
    importPath: `@shohojdhara/atomix/${navigationItem?.title || componentId}`,
    dependencies: ['react'],
    tags: ['component', 'ui', 'react'],
    relatedComponents: ['Button', 'Card', 'Badge'],
    props: [
      {
        name: 'className',
        type: 'string',
        required: false,
        defaultValue: '-',
        description: 'Additional CSS classes'
      }
    ],
    examples: [
      {
        title: 'Basic Usage',
        description: 'Simple component implementation',
        code: `<${navigationItem?.title || 'Component'} />`,
        language: 'jsx',
        category: 'basic'
      }
    ],
    features: [
      {
        title: 'Accessible by default',
        description: 'Follows WCAG guidelines',
        supported: true
      },
      {
        title: 'Customizable styling',
        description: 'Supports custom CSS classes',
        supported: true
      },
      {
        title: 'TypeScript support',
        description: 'Full TypeScript definitions included',
        supported: true
      },
      {
        title: 'Responsive design',
        description: 'Works on all device sizes',
        supported: true
      }
    ],
    usage: [
      {
        title: 'Installation',
        description: 'Install the Atomix component library',
        code: 'npm install @shohojdhara/atomix',
        language: 'bash'
      }
    ],
    accessibility: {
      overview: 'The component follows WCAG 2.1 guidelines.',
      keyboardSupport: [
        {
          key: 'Tab',
          action: 'Moves focus to the component'
        }
      ],
      ariaAttributes: [],
      guidelines: [
        'Components should be keyboard accessible',
        'Focus should be clearly visible'
      ],
      wcagLevel: 'AA'
    }
  };

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
      case 'experimental': return 'info';
      case 'deprecated': return 'error';
      default: return 'default';
    }
  };

  return (
    <Container className="component-page">
      <Helmet>
        <title>{componentDoc.name} - Atomix Documentation</title>
        <meta name="description" content={componentDoc.description} />
      </Helmet>

      <Hero

        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as any}
        className="u-pt-32 u-pb-16"
        backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
        title={componentDoc.name}
        text={componentDoc.description}
        alignment="center"
      />

      <div className="component-header u-mb-8">
        <Link to="/components" className="u-d-flex u-align-items-center u-mb-4 u-text-decoration-none">
          <Icon name="ArrowLeft" size={16} className="u-mr-2" />
          <span>Back to Components</span>
        </Link>

        <div className="u-d-flex u-flex-wrap u-align-items-center u-justify-content-between u-gap-4">
          <div>
            <h1 className="u-mb-2">{componentDoc.name}</h1>
            <p className="u-text-muted u-mb-0">{componentDoc.description}</p>
          </div>

          <div className="u-d-flex u-gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Github" size={16} className="u-mr-2" />
              Source
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="ExternalLink" size={16} className="u-mr-2" />
              Storybook
            </Button>
          </div>
        </div>

        <div className="u-d-flex u-flex-wrap u-gap-3 u-mt-4">
          <Badge label={componentDoc.status} variant="success">{componentDoc.status}</Badge>
          <Badge label={`v${componentDoc.version}`} variant="secondary">v{componentDoc.version}</Badge>
          <Badge label={`Last updated: ${componentDoc.lastUpdated}`} variant="outline">Last updated: {componentDoc.lastUpdated}</Badge>
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
                      <li key={index} className="u-mb-3">
                        {feature.supported ? (
                          <div className="u-d-flex u-align-items-start">
                            <Icon name="CheckCircle" size={16} className="u-mr-2 u-mt-1 text-success" />
                            <div>
                              <strong>{feature.title}</strong>
                              <p className="u-text-muted u-mb-0">{feature.description}</p>
                            </div>
                          </div>
                        ) : (
                          <div className="u-d-flex u-align-items-start">
                            <Icon name="AlertCircle" size={16} className="u-mr-2 u-mt-1 text-warning" />
                            <div>
                              <strong>{feature.title}</strong>
                              <p className="u-text-muted u-mb-0">{feature.description}</p>
                            </div>
                          </div>
                        )}
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
                          <Badge label={dep} variant="outline">{dep}</Badge>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="u-text-muted">No external dependencies</p>
                  )}
                </Card>

                <Card>
                  <h3 className="u-mb-4">Tags</h3>
                  <div className="u-d-flex u-flex-wrap u-gap-2">
                    {componentDoc.tags.map((tag, index) => (
                      <Badge key={index} label={tag} variant="secondary" size="sm">{tag}</Badge>
                    ))}
                  </div>
                </Card>
              </GridCol>
            </Row>

            <Card className="u-mb-6">
              <h3 className="u-mb-4">Installation</h3>
              <pre className="code-block u-mb-0">
                <code className="language-bash">npm install @shohojdhara/atomix</code>
              </pre>
            </Card>

            <Card>
              <h3 className="u-mb-4">Basic Usage</h3>
              <pre className="code-block u-mb-0">
                <code className="language-tsx">{`import { ${componentDoc.name} } from '${componentDoc.importPath}';`}</code>
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
    </Container>
  );
};

export default ComponentPage;

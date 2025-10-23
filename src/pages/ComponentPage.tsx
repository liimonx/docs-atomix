import React, { useState, useEffect } from 'react';
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
import { Button, Card, Badge, Container, Grid, GridCol, Row, Block } from '@shohojdhara/atomix';
import toast from 'react-hot-toast';

import { findNavigationItem } from '../data/navigation';
import { ComponentDocumentation } from '../types';

const ComponentPage: React.FC = () => {
  const { componentId } = useParams<{ componentId: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'examples' | 'props' | 'accessibility'>('overview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Find navigation item for the component
  const navigationItem = componentId ? findNavigationItem(componentId) : null;

  // Mock component documentation data
  const componentDoc: ComponentDocumentation | null = componentId ? {
    name: navigationItem?.title || componentId,
    description: navigationItem?.description || 'Component documentation',
    category: navigationItem?.category || 'components',
    version: '1.0.0',
    status: 'stable',
    lastUpdated: '2024-01-15',
    author: 'Atomix Team',
    importPath: `@shohojdhara/atomix`,
    dependencies: ['react', 'react-dom'],
    tags: ['ui', 'component', 'react'],
    relatedComponents: ['Button', 'Input', 'Card'],
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: false,
        description: 'The content to display inside the component',
        examples: ['<span>Hello</span>', 'Click me']
      },
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'outline'",
        required: false,
        defaultValue: 'primary',
        description: 'The visual style variant of the component',
        examples: ['primary', 'secondary', 'outline']
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        required: false,
        defaultValue: 'md',
        description: 'The size of the component',
        examples: ['sm', 'md', 'lg']
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        defaultValue: 'false',
        description: 'Whether the component is disabled',
        examples: ['true', 'false']
      }
    ],
    examples: [
      {
        title: 'Basic Usage',
        description: 'Simple example of how to use the component',
        code: `import { ${navigationItem?.title || 'Component'} } from '@shohojdhara/atomix';

function App() {
  return (
    <${navigationItem?.title || 'Component'}>
      Hello World
    </${navigationItem?.title || 'Component'}>
  );
}`,
        preview: true,
        language: 'tsx',
        category: 'basic'
      },
      {
        title: 'With Props',
        description: 'Example showing different props and variants',
        code: `import { ${navigationItem?.title || 'Component'} } from '@shohojdhara/atomix';

function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <${navigationItem?.title || 'Component'} variant="primary" size="sm">
        Small Primary
      </${navigationItem?.title || 'Component'}>
      <${navigationItem?.title || 'Component'} variant="secondary" size="md">
        Medium Secondary
      </${navigationItem?.title || 'Component'}>
      <${navigationItem?.title || 'Component'} variant="outline" size="lg">
        Large Outline
      </${navigationItem?.title || 'Component'}>
    </div>
  );
}`,
        preview: true,
        language: 'tsx',
        category: 'advanced'
      }
    ],
    features: [
      {
        title: 'Accessibility',
        description: 'Full WCAG 2.1 AA compliance with keyboard navigation',
        supported: true
      },
      {
        title: 'Theming',
        description: 'Customizable with CSS custom properties',
        supported: true
      },
      {
        title: 'TypeScript',
        description: 'Full TypeScript support with strict types',
        supported: true
      },
      {
        title: 'Server-side Rendering',
        description: 'Compatible with SSR frameworks like Next.js',
        supported: true
      }
    ],
    usage: [
      {
        title: 'Installation',
        description: 'Add Atomix to your project',
        code: 'npm install @shohojdhara/atomix',
        language: 'bash'
      },
      {
        title: 'Import',
        description: 'Import the component in your React app',
        code: `import { ${navigationItem?.title || 'Component'} } from '@shohojdhara/atomix';`,
        language: 'tsx'
      }
    ],
    accessibility: {
      overview: 'This component follows WAI-ARIA guidelines and provides full keyboard navigation support.',
      keyboardSupport: [
        {
          key: 'Enter',
          action: 'Activates the component'
        },
        {
          key: 'Space',
          action: 'Activates the component'
        },
        {
          key: 'Tab',
          action: 'Moves focus to the component'
        }
      ],
      ariaAttributes: [
        {
          attribute: 'aria-label',
          description: 'Provides an accessible name when text content is not sufficient',
          required: false
        },
        {
          attribute: 'aria-disabled',
          description: 'Indicates whether the component is disabled',
          required: false,
          defaultValue: 'false'
        }
      ],
      guidelines: [
        'Always provide meaningful labels or text content',
        'Ensure sufficient color contrast (4.5:1 minimum)',
        'Test with keyboard navigation and screen readers',
        'Use semantic HTML elements where appropriate'
      ],
      wcagLevel: 'AA'
    }
  } : null;

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

  if (!componentId || !navigationItem || !componentDoc) {
    return (
      <div className="component-page" style={{ padding: '2rem', textAlign: 'center' }}>
        <AlertCircle size={48} className="u-text-secondary-emphasis u-mb-4" />
        <h1>Component Not Found</h1>
        <p className="u-text-secondary-emphasis u-mb-8">
          The component "{componentId}" could not be found.
        </p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{componentDoc.name} - Atomix Components</title>
        <meta name="description" content={componentDoc.description} />
      </Helmet>

      <div className="component-page">
        {/* Header */}
        <Block className="component-showcase">
          <Container>
            <Row justifyContent="between" alignItems="start">
              <GridCol lg={8}>
                <div className="title-section">
                  <h1 className="component-title">{componentDoc.name}</h1>
                  <div className="component-badges">
                    <Badge variant={getStatusColor(componentDoc.status) as any} label={componentDoc.status} />
                    <Badge variant="primary" label={`v${componentDoc.version}`} />
                    <Badge variant="primary" label={componentDoc.category} />
                  </div>
                  <p style={{
                    fontSize: '1.125rem',
                    color: 'var(--atomix-text-secondary)',
                    margin: '1rem 0',
                    lineHeight: '1.6'
                  }}>
                    {componentDoc.description}
                  </p>
                </div>
              </GridCol>
              <GridCol lg={4}>
                <div className="header-actions" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <Button variant="outline" size="sm">
                    <Github size={16} />
                    <span style={{ marginLeft: '0.5rem' }}>Source</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink size={16} />
                    <span style={{ marginLeft: '0.5rem' }}>Storybook</span>
                  </Button>
                </div>
              </GridCol>
            </Row>
          </Container>
        </Block>

        {/* Navigation Tabs */}
        <Block className="component-tabs" style={{
          borderBottom: '1px solid var(--atomix-border)',
          marginBottom: '2rem'
        }}>
          <Container>
            <Row>
              <GridCol xs={12}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[
                    { key: 'overview', label: 'Overview', icon: <BookOpen size={16} /> },
                    { key: 'examples', label: 'Examples', icon: <Code size={16} /> },
                    { key: 'props', label: 'Props', icon: <Info size={16} /> },
                    { key: 'accessibility', label: 'Accessibility', icon: <Eye size={16} /> }
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as any)}
                      className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        border: 'none',
                        background: 'transparent',
                        borderBottom: activeTab === tab.key ? '2px solid var(--atomix-primary)' : '2px solid transparent',
                        color: activeTab === tab.key ? 'var(--atomix-primary)' : 'var(--atomix-text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontWeight: activeTab === tab.key ? '500' : '400'
                      }}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </GridCol>
            </Row>
          </Container>
        </Block>

        {/* Tab Content */}
        <Container>
          <Row>
            <GridCol xs={12}>
              <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-content">
              {/* Installation */}
              <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Installation</h2>
                <div className="code-example">
                  <div className="code-header">
                    <span className="code-title">Terminal</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard('npm install @shohojdhara/atomix', 'install')}
                    >
                      {copiedCode === 'install' ? <CheckCircle size={16} /> : <Copy size={16} />}
                    </Button>
                  </div>
                  <pre style={{
                    margin: 0,
                    padding: '1rem',
                    backgroundColor: 'var(--atomix-bg-tertiary)',
                    fontSize: '0.875rem',
                    overflowX: 'auto'
                  }}>
                    <code>npm install @shohojdhara/atomix</code>
                  </pre>
                </div>
              </section>

              {/* Features */}
              <section style={{ marginBottom: '3rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Features</h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {componentDoc.features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '1rem',
                        backgroundColor: 'var(--atomix-bg-secondary)',
                        borderRadius: '8px'
                      }}
                    >
                      {feature.supported ? (
                        <CheckCircle size={20} className="u-text-success u-mt-0.5" />
                      ) : (
                        <AlertCircle size={20} className="u-text-secondary-emphasis u-mt-0.5" />
                      )}
                      <div>
                        <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem' }}>{feature.title}</h3>
                        <p className="u-m-0 u-text-secondary-emphasis u-fs-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Components */}
              <section>
                <h2 style={{ marginBottom: '1rem' }}>Related Components</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {componentDoc.relatedComponents.map((comp, index) => (
                    <Badge key={index} variant="primary" label={comp} />  
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="examples-content">
              {componentDoc.examples.map((example, index) => (
                <section key={index} style={{ marginBottom: '3rem' }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{example.title}</h3>
                  <p style={{
                    color: 'var(--atomix-text-secondary)',
                    marginBottom: '1rem',
                    fontSize: '0.925rem'
                  }}>
                    {example.description}
                  </p>
                  <div className="code-example">
                    <div className="code-header">
                      <span className="code-title">{example.language}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(example.code, `example-${index}`)}
                      >
                        {copiedCode === `example-${index}` ? <CheckCircle size={16} /> : <Copy size={16} />}
                      </Button>
                    </div>
                    <pre style={{
                      margin: 0,
                      padding: '1rem',
                      backgroundColor: 'var(--atomix-bg-tertiary)',
                      fontSize: '0.875rem',
                      overflowX: 'auto',
                      lineHeight: '1.5'
                    }}>
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </section>
              ))}
            </div>
          )}

          {activeTab === 'props' && (
            <div className="props-content">
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  border: '1px solid var(--atomix-border)'
                }}>
                  <thead>
                    <tr className="u-bg-secondary-subtle">
                      <th className="u-p-3 u-text-start u-border-bottom u-border-solid u-border-secondary">Name</th>
                        <th className="u-p-3 u-text-start u-border-bottom u-border-solid u-border-secondary">Type</th>
                        <th className="u-p-3 u-text-start u-border-bottom u-border-solid u-border-secondary">Default</th>
                        <th className="u-p-3 u-text-start u-border-bottom u-border-solid u-border-secondary">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {componentDoc.props.map((prop, index) => (
                      <tr key={index} className="u-border-bottom u-border-solid u-border-secondary">
                        <td className="u-p-3 u-font-mono u-fs-sm">
                          {prop.name}
                          {prop.required && <span className="u-text-error-emphasis u-ms-1">*</span>}
                        </td>
                        <td className="u-p-3 u-font-mono u-fs-sm u-text-secondary-emphasis">
                          {prop.type}
                        </td>
                        <td className="u-p-3 u-font-mono u-fs-sm u-text-secondary-emphasis">
                          {prop.defaultValue || '-'}
                        </td>
                        <td className="u-p-3 u-fs-sm">
                          {prop.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'accessibility' && (
            <div className="accessibility-content">
              <section style={{ marginBottom: '3rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Overview</h3>
                <p className="u-text-secondary-emphasis u-lh-lg">
                  {componentDoc.accessibility.overview}
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  <Badge variant="primary" label={`WCAG ${componentDoc.accessibility.wcagLevel}`} />
                </div>
              </section>

              <section style={{ marginBottom: '3rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Keyboard Support</h3>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    border: '1px solid var(--atomix-border)'
                  }}>
                    <thead>
                      <tr className="u-bg-secondary-subtle">
                        <th className="u-p-3 u-text-start u-border-bottom u-border-solid u-border-secondary">Key</th>
                        <th className="u-p-3 u-text-start u-border-bottom u-border-solid u-border-secondary">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {componentDoc.accessibility.keyboardSupport.map((key, index) => (
                        <tr key={index} className="u-border-bottom u-border-solid u-border-secondary">
                          <td className="u-p-3 u-font-mono u-fs-sm">
                            {key.key}
                          </td>
                          <td className="u-p-3 u-fs-sm">
                            {key.action}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h3 style={{ marginBottom: '1rem' }}>Guidelines</h3>
                <ul className="u-text-secondary-emphasis u-lh-lg">
                  {componentDoc.accessibility.guidelines.map((guideline, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                      {guideline}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}
              </div>
            </GridCol>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ComponentPage;

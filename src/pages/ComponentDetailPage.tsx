import React, { useState, useEffect, isValidElement } from 'react';
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
import { Button, Card, Badge } from '@shohojdhara/atomix';
import toast from 'react-hot-toast';

import { findNavigationItem } from '../data/navigation';
import { ComponentDocumentation } from '../types';
import { componentMetadata, ComponentMetadata } from '../data/components';
import ComponentRenderer from '../components/documentation/ComponentRenderer';

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
      case 'experimental': return 'info';
      case 'deprecated': return 'error';
      default: return 'default';
    }
  };

  if (!componentId || !componentDoc) {
    return (
      <div className="component-page" style={{ padding: '2rem', textAlign: 'center' }}>
        <AlertCircle size={48} style={{ color: 'var(--atomix-text-secondary)', marginBottom: '1rem' }} />
        <h1>Component Not Found</h1>
        <p style={{ color: 'var(--atomix-text-secondary)', marginBottom: '2rem' }}>
          The component "{componentId}" could not be found.
        </p>
        <Button asChild>
          <Link to="/components">Back to Components</Link>
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
        <div className="component-showcase">
          <div className="showcase-header">
            <div className="header-content">
              <div className="title-section">
                <h1 className="component-title">{componentDoc.name}</h1>
                <div className="component-badges">
                  <Badge label={componentDoc.status} variant={getStatusColor(componentDoc.status) as any} />
                  <Badge label={`v${componentDoc.version}`} />
                  <Badge label={componentDoc.category} />
                </div>
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
              <div className="header-actions">
                <Button variant="outline" size="sm">
                  <Github size={16} />
                  <span style={{ marginLeft: '0.5rem' }}>Source</span>
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink size={16} />
                  <span style={{ marginLeft: '0.5rem' }}>Storybook</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="component-tabs" style={{
          borderBottom: '1px solid var(--atomix-border)',
          marginBottom: '2rem'
        }}>
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
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="overview-tab">
              <Card>
                <p>{componentDoc.description}</p>
                <div className="features-list">
                  <h3>Features</h3>
                  <ul>
                    {componentDoc.features.map((feature, index) => (
                      <li key={index}>
                        <CheckCircle size={16} style={{ color: 'var(--atomix-success)' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="examples-tab">
              {componentDoc.examples.map((example, index) => (
                <Card key={index} className="example-card">
                  <h4>{example.title}</h4>
                  <p>{example.description}</p>
                  <div className="example-preview">
                    {isValidElement(example.preview) ? (
                      <ComponentRenderer 
                        componentName={componentDoc.name as any} 
                        props={example.preview.props} 
                      />
                    ) : (
                      <div>Preview not available</div>
                    )}
                  </div>
                  <div className="example-code">
                    <pre>
                      <code>{example.code}</code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(example.code, `example-${index}`)}
                    >
                      {copiedCode === `example-${index}` ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'props' && (
            <div className="props-tab">
              <Card>
                <table className="props-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {componentDoc.props.map((prop, index) => (
                      <tr key={index}>
                        <td>
                          <code>{prop.name}</code>
                          {prop.required && <Badge label="Required" variant="error" />}
                        </td>
                        <td>
                          <code>{prop.type}</code>
                        </td>
                        <td>
                          {prop.defaultValue ? <code>{prop.defaultValue}</code> : '-'}
                        </td>
                        <td>{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          )}

          {activeTab === 'accessibility' && (
            <div className="accessibility-tab">
              <Card>
                <h3>Keyboard Support</h3>
                <ul>
                  {componentDoc.accessibility.keyboardSupport.map((key, index) => (
                    <li key={index}>{key}</li>
                  ))}
                </ul>
                <h3>ARIA Attributes</h3>
                <ul>
                  {componentDoc.accessibility.ariaAttributes.map((attr, index) => (
                    <li key={index}>{attr}</li>
                  ))}
                </ul>
              </Card>
            </div>
          )}
        </div>
      </>
    );
  };


export default ComponentDetailPage;

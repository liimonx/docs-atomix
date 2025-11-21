'use client';

import React from 'react';
import { Card, Icon } from '@shohojdhara/atomix';
import { useRouter } from 'next/navigation';
import { componentMetadata } from '@/data/components';

export const ComponentGrid: React.FC = () => {
  const router = useRouter();

  // Get a sample of components for the grid
  const featuredComponents = componentMetadata.slice(0, 6);

  return (
    <section className="component-grid-section">
      <div className="section-header">
        <h2>Featured Components</h2>
        <p>Explore our collection of professionally designed UI components</p>
      </div>

      <div className="component-grid">
        {featuredComponents.map((component) => (
          <Card
            key={component.id}
            className="component-card"
            onClick={() => router.push(`/docs/components/${component.id}`)}
          >
            <div className="component-card-content">
              <div className="component-info">
                <div className="component-header">
                  <h3 className="component-name">{component.name}</h3>
                </div>
                
                <p className="component-description">
                  {component.description}
                </p>
                
                <div className="component-meta">
                  <span className="component-category">
                    {component.category}
                  </span>
                  
                  <span className={`component-status status-${component.status}`}>
                    {component.status}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="section-footer">
        <button 
          className="view-all-button"
          onClick={() => router.push('/docs/components/overview')}
        >
          View all components
          <Icon name="ArrowRight" size="sm" />
        </button>
      </div>
    </section>
  );
};
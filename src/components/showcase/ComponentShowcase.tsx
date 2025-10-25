import React from 'react';
import { Card } from '@shohojdhara/atomix';

interface ComponentShowcaseProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <Card className="component-showcase u-mb-6">
      <div className="card-header">
        <h3 className="u-mb-2">{title}</h3>
        {description && <p className="u-text-muted u-mb-0">{description}</p>}
      </div>
      <div className="card-body">
        <div className="showcase-content">
          {children}
        </div>
      </div>
    </Card>
  );
};
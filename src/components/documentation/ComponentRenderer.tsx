import React from 'react';
import * as Atomix from '@shohojdhara/atomix';

interface ComponentRendererProps {
  componentName: keyof typeof Atomix;
  props?: any;
  children?: React.ReactNode;
}

const ComponentRenderer: React.FC<ComponentRendererProps> = ({
  componentName,
  props = {},
  children,
}) => {
  const Component = Atomix[componentName] as React.ComponentType<any>;

  if (!Component) {
    return (
      <div className='u-text-error-emphasis u-p-4'>
        Component "{componentName}" not found in Atomix library.
      </div>
    );
  }

  return <Component {...props}>{children}</Component>;
};

export default ComponentRenderer;
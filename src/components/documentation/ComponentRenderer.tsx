import React, { FC, ComponentType } from "react";

import * as Atomix from '@shohojdhara/atomix';

interface ComponentRendererProps {
  componentName?: keyof typeof Atomix;
  props?: any;
  children?: React.ReactNode;
}

const ComponentRenderer: FC<ComponentRendererProps> = ({
  componentName,
  props = {},
  children
}) => {
  if (!componentName) {
    return (
      <div className='u-text-error-emphasis u-p-4'>
        Component name must be provided.
      </div>
    );
  }

  const Component = Atomix[componentName] as ComponentType<any>;

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
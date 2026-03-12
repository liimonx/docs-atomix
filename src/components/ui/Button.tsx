import React, { ComponentProps } from 'react';
import { Button as AtomixButton } from '@shohojdhara/atomix';

// Extract the Button props type from Atomix
type AtomixButtonProps = ComponentProps<typeof AtomixButton>;

interface ButtonProps extends Omit<AtomixButtonProps, 'linkComponent'> {
  /**
   * Custom link component to use when href is provided.
   */
  linkComponent?: React.ComponentType<any>;
}

/**
 * Wrapper around Atomix Button that properly handles linkComponent prop.
 */
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ linkComponent, ...props }, ref) => {
    // Only pass linkComponent (lowercase) if we have it
    if (linkComponent) {
      return <AtomixButton {...props} linkComponent={linkComponent} ref={ref} />;
    }
    
    return <AtomixButton {...props} ref={ref} />;
  }
);

Button.displayName = 'Button';

export default Button;


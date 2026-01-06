import React, { ComponentProps } from 'react';
import { Button as AtomixButton } from '@shohojdhara/atomix';

// Extract the Button props type from Atomix
type AtomixButtonProps = ComponentProps<typeof AtomixButton>;

interface ButtonProps extends Omit<AtomixButtonProps, 'linkComponent' | 'LinkComponent'> {
  /**
   * Custom link component to use when href is provided.
   * Use LinkComponent (capitalized) instead of linkComponent to avoid React warnings.
   * This prop is handled internally and not passed to DOM elements.
   */
  linkComponent?: React.ComponentType<any>;
  LinkComponent?: React.ComponentType<any>;
}

/**
 * Wrapper around Atomix Button that properly handles linkComponent/LinkComponent props.
 * The Atomix Button component spreads linkComponent (lowercase) to DOM elements, causing React warnings.
 * This wrapper converts linkComponent to LinkComponent (capitalized) which the library handles correctly.
 */
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ linkComponent, LinkComponent, ...props }, ref) => {
    // Convert linkComponent (lowercase) to LinkComponent (capitalized) to avoid DOM prop warnings
    // The Atomix library expects LinkComponent (capitalized) and doesn't spread it to DOM
    const effectiveLinkComponent = LinkComponent || linkComponent;
    
    // Filter out both prop names to ensure they're not spread to DOM
    const { linkComponent: _, LinkComponent: __, ...restProps } = props as any;
    
    // Only pass LinkComponent (capitalized) if we have a link component
    // This prevents the lowercase linkComponent from being spread to DOM elements
    if (effectiveLinkComponent) {
      return <AtomixButton {...restProps} LinkComponent={effectiveLinkComponent} ref={ref} />;
    }
    
    return <AtomixButton {...restProps} ref={ref} />;
  }
);

Button.displayName = 'Button';

export default Button;


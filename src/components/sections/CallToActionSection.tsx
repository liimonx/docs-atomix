import React from 'react';
import { River, RiverProps } from '@shohojdhara/atomix';

interface CallToActionSectionProps extends Omit<RiverProps, 'center' | 'actions'> {
  /**
   * Primary action element (button, link, etc.)
   */
  primaryAction?: React.ReactNode;
  
  /**
   * Secondary action element (button, link, etc.)
   */
  secondaryAction?: React.ReactNode;
  
  /**
   * Whether to center the content (default: true for CTAs)
   */
  center?: boolean;
}

/**
 * CallToActionSection component for displaying prominent call-to-action sections
 * Uses the River component with preset styling for consistent CTAs across the site
 */
export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title,
  text,
  primaryAction,
  secondaryAction,
  center = true,
  ...restProps
}) => {
  const actions = (
    <>
      {primaryAction}
      {secondaryAction}
    </>
  );

  return (
    <River
      title={title}
      text={text}
      actions={actions}
      contentWidth='700px'
      center={center}
      {...restProps}
    />
  );
};

export default CallToActionSection;
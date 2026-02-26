import { FC } from "react";

import { River, RiverProps } from "@shohojdhara/atomix";
import { AtomixGlass, Container } from "@shohojdhara/atomix";

interface CallToActionSectionProps
  extends Omit<RiverProps, "center" | "actions"> {
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

  /**
   * Whether to apply glass effect to the CTA section
   */
  glass?: boolean;
}

/**
 * CallToActionSection component for displaying prominent call-to-action sections
 * Uses the River component with preset styling for consistent CTAs across the site
 */
export const CallToActionSection: FC<CallToActionSectionProps> = ({
  title,
  text,
  primaryAction,
  secondaryAction,
  center = true,
  glass = false,
  ...restProps
}) => {
  const actions = (
    <>
      {primaryAction}
      {secondaryAction}
    </>
  );

  const renderContent = () => (
    <River
      title={title}
      text={text}
      actions={actions}
      contentWidth="700px"
      center={center}
      className="u-bg-transparent"
      {...restProps}
    />
  );

  if (glass) {
    return (
      <Container>
        <AtomixGlass
          displacementScale={100}
          blurAmount={5.5}
          elasticity={0}
          mode="standard"
          className="u-my-8"
          withBorderEffect={false}
        >
          {renderContent()}
        </AtomixGlass>
      </Container>
    );
  }

  return renderContent();
};

export default CallToActionSection;

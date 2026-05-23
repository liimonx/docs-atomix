import Link from "next/link";
import { Block, Button, Icon } from "@shohojdhara/atomix";

export const CtaSection = () => {
  return (
    <Block>
      <div className="u-text-center u-max-w-4xl u-mx-auto u-py-8 u-py-md-16">
        <h2 className="u-fs-5xl u-fs-md-6xl u-font-black u-mb-6 u-tracking-tighter u-text-white">
          Ready to crystallize your vision?
        </h2>
        <p className="u-fs-lg u-text-secondary-emphasis u-mb-10 u-leading-relaxed u-opacity-80 u-max-w-2xl u-mx-auto">
          Join thousands of developers using Atomix to create beautiful,
          accessible, and performant interfaces.
        </p>

        <div className="u-flex u-flex-wrap u-justify-center u-gap-4 u-mb-16">
          <Button
            variant="primary"
            size="lg"
            icon={<Icon name="RocketLaunch" weight="duotone" />}
            href="/docs/getting-started/installation"
            linkComponent={Link}
            className="u-px-8 u-h-14 u-rounded-xl u-fs-base u-font-bold u-shadow-none"
          >
            Get Started Free
          </Button>
          <Button
            variant="secondary"
            size="lg"
            glass
            icon={<Icon name="GithubLogo" weight="duotone" />}
            href="https://github.com/shohojdhara/atomix"
            as="a"
            target="_blank"
            className="u-px-8 u-h-14 u-rounded-xl u-fs-base u-font-bold u-border u-border-secondary-subtle u-hover-bg-surface-subtle u-transition-colors"
          >
            Star on GitHub
          </Button>
        </div>

        {/* Key Features Summary */}
        <div className="u-flex u-flex-column u-flex-md-row u-justify-center u-gap-6 u-mb-16">
          <div className="u-flex u-items-center u-gap-4 u-bg-dark-subtle u-px-6 u-py-4 u-rounded-2xl u-border u-border-secondary-subtle">
            <Icon
              name="Timer"
              weight="duotone"
              size={28}
              className="u-text-primary"
            />
            <div className="u-text-start">
              <div className="u-fs-base u-font-bold u-text-white">
                5 min setup
              </div>
              <div className="u-fs-xs u-text-secondary-emphasis">
                Zero config required
              </div>
            </div>
          </div>
          <div className="u-flex u-items-center u-gap-4 u-bg-dark-subtle u-px-6 u-py-4 u-rounded-2xl u-border u-border-secondary-subtle">
            <Icon
              name="Cube"
              weight="duotone"
              size={28}
              className="u-text-success"
            />
            <div className="u-text-start">
              <div className="u-fs-base u-font-bold u-text-white">
                80+ Components
              </div>
              <div className="u-fs-xs u-text-secondary-emphasis">
                Fully customizable
              </div>
            </div>
          </div>
          <div className="u-flex u-items-center u-gap-4 u-bg-dark-subtle u-px-6 u-py-4 u-rounded-2xl u-border u-border-secondary-subtle">
            <Icon
              name="ShieldCheck"
              weight="duotone"
              size={28}
              className="u-text-error"
            />
            <div className="u-text-start">
              <div className="u-fs-base u-font-bold u-text-white">
                100% Accessible
              </div>
              <div className="u-fs-xs u-text-secondary-emphasis">
                WCAG 2.1 compliant
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="u-pt-10 u-border-t u-border-secondary-subtle">
          <p className="u-fs-xs u-text-secondary-emphasis u-uppercase u-tracking-widest u-font-bold u-mb-6">
            Built with modern technologies
          </p>
          <div className="u-flex u-flex-wrap u-justify-center u-items-center u-gap-8 u-fs-sm u-text-secondary-emphasis u-opacity-60">
            <span className="u-flex u-items-center u-gap-2 u-font-medium">
              <Icon name="Code" weight="duotone" size={20} />
              TypeScript
            </span>
            <span className="u-flex u-items-center u-gap-2 u-font-medium">
              <Icon name="Atom" weight="duotone" size={20} />
              React 18
            </span>
            <span className="u-flex u-items-center u-gap-2 u-font-medium">
              <Icon name="Palette" weight="duotone" size={20} />
              CSS Tokens
            </span>
            <span className="u-flex u-items-center u-gap-2 u-font-medium">
              <Icon name="Lightning" weight="duotone" size={20} />
              Zero Runtime
            </span>
          </div>
        </div>
      </div>
    </Block>
  );
};

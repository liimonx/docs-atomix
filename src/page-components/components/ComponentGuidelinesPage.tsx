'use client';

import { FC } from 'react';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Button,
  Card,
  Hero,
  Grid,
  GridCol,
  Block,
  SectionIntro,
  Callout,
  Icon,
  Tabs,
  List,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';
import styles from '@/styles/PageHero.module.scss';

const ComponentGuidelinesPage: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const guidelines = useMemo(() => [
    {
      title: 'Component Structure',
      description: 'Follow the standard directory structure and file organization',
      icon: 'Layers',
      items: [
        'Create dedicated directory under src/components/[ComponentName]/',
        'Implement React component with JSDoc comments',
        'Create Storybook examples for all variants',
        'Include TypeScript definitions',
        'Add vanilla JS implementation in scripts subdirectory',
      ],
    },
    {
      title: 'Naming Conventions',
      description: 'Use consistent naming patterns across all components',
      icon: 'Code',
      items: [
        'Use PascalCase for component names',
        'Use kebab-case for file names',
        'Follow BEM methodology for CSS classes',
        'Use descriptive prop names',
        'Prefix component classes with c- (e.g., .c-button)',
      ],
    },
    {
      title: 'Accessibility',
      description: 'Ensure all components meet WCAG 2.1 AA standards',
      icon: 'Shield',
      items: [
        'Include ARIA attributes where needed',
        'Support keyboard navigation',
        'Provide screen reader support',
        'Ensure proper focus management',
        'Test with screen readers',
      ],
    },
    {
      title: 'Documentation',
      description: 'Comprehensive documentation for all components',
      icon: 'FileText',
      items: [
        'Include JSDoc comments',
        'Document all props and their types',
        'Provide usage examples',
        'Include accessibility notes',
        'Create Storybook stories',
      ],
    },
    {
      title: 'Styling',
      description: 'Follow design system styling guidelines',
      icon: 'Palette',
      items: [
        'Use design tokens for colors and spacing',
        'Follow ITCSS architecture',
        'Support theming and customization',
        'Ensure responsive design',
        'Use CSS custom properties',
      ],
    },
    {
      title: 'Testing',
      description: 'Comprehensive testing for quality assurance',
      icon: 'CheckCircle',
      items: [
        'Write unit tests for components',
        'Test accessibility features',
        'Test responsive behavior',
        'Test with different themes',
        'Test both React and vanilla JS implementations',
      ],
    },
  ], []);

  const reactExample = useMemo(() => `export interface ButtonProps extends BaseComponentProps {
  /**
   * Button label text
   */
  label: string;

  /**
   * Click handler function
   */
  onClick?: () => void;

  /**
   * Button visual style variant
   */
  variant?: 'primary' | 'secondary' | 'success' | 'error';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
}, ref) => {
  return (
    <button
      ref={ref}
      className={\`c-button c-button--\${variant} c-button--\${size}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
});`, []);

  const vanillaExample = useMemo(() => `export default class Button {
  private element: HTMLElement;
  private options: ButtonOptions;

  constructor(element: string | HTMLElement, options: ButtonOptions = {}) {
    this.element = typeof element === 'string' 
      ? document.querySelector(element) as HTMLElement 
      : element;
    this.options = { ...DEFAULTS, ...options };
    this._init();
  }

  private _init(): void {
    this._bindEvents();
  }

  private _bindEvents(): void {
    this.element.addEventListener('click', this._handleClick.bind(this));
  }

  public destroy(): void {
    // Clean up event listeners
  }
}`, []);

  const stylingExample = useMemo(() => `// _settings.button.scss
$button-size: 32px !default;
$button-size-sm: 24px !default;
$button-size-lg: 40px !default;
$button-color: var(--atomix-primary) !default;

// _components.button.scss
.c-button {
  --atomix-button-size: #{$button-size};
  --atomix-button-color: #{$button-color};
  
  display: inline-flex;
  align-items: center;
  padding: var(--atomix-spacing-sm) var(--atomix-spacing-md);
  border-radius: var(--atomix-border-radius);
  
  &--primary {
    background-color: var(--atomix-primary);
    color: var(--atomix-white);
  }
  
  &--sm {
    --atomix-button-size: #{$button-size-sm};
  }
}`, []);

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <span>{children}</span>;
};

  const tabItems = useMemo(() => [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="u-mt-4">
          <Grid>
            {guidelines.map((guideline, index) => (
              <GridCol key={index} md={6} lg={4} className="u-mb-4">
                <Card
                  elevation="lg"
                  className="u-h-100"
                >
                  <div className="u-d-flex u-align-items-center u-mb-3">
                    <div
                      className="u-d-flex u-align-items-center u-justify-content-center u-me-3"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        backdropFilter:
                          'blur(5px) saturate(300%) contrast(45%) brightness(130%)',
                      }}
                    >
                      <Icon
                        name={guideline.icon as any}
                        size={24}
                        className="u-text-brand-emphasis"
                      />
                    </div>
                    <h3 className="u-fs-lg u-fw-semibold u-m-0">
                      {guideline.title}
                    </h3>
                  </div>
                  <p className="u-text-secondary-emphasis u-mb-4">
                    {guideline.description}
                  </p>
                  <List variant="text">
                    {guideline.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex}>{item}</ListItem>
                    ))}
                  </List>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </div>
      ),
    },
    {
      id: 'react',
      label: 'React Implementation',
      content: (
        <div className="u-mt-4">
          <Card className="u-mb-4">
            <h3 className="u-fs-xl u-fw-bold u-mb-4">React Component Structure</h3>
            <p className="u-text-secondary-emphasis u-mb-4">
              React components should follow this structure and best practices:
            </p>
            <List variant="text">
              <ListItem>Use <code className="u-fs-sm">forwardRef</code> for components that need ref forwarding</ListItem>
              <ListItem>Define clear props interfaces with JSDoc comments</ListItem>
              <ListItem>Support both controlled and uncontrolled modes</ListItem>
              <ListItem>Use composable hooks for logic and state management</ListItem>
              <ListItem>Include proper ARIA attributes for accessibility</ListItem>
              <ListItem>Implement clear return statements with proper JSX structure</ListItem>
            </List>
          </Card>

          <Card>
            <h3 className="u-fs-xl u-fw-bold u-mb-4">Example: React Component</h3>
            <Card className="u-p-4 u-bg-secondary-subtle u-border u-border-subtle u-overflow-x-auto">
              <pre
                className="u-m-0 u-fs-sm u-text-error-text-emphasis"
                style={{ fontFamily: 'var(--atomix-font-family-mono)' }}
              >
                <code>{reactExample}</code>
              </pre>
            </Card>
          </Card>
        </div>
      ),
    },
    {
      id: 'vanilla',
      label: 'Vanilla JS',
      content: (
        <div className="u-mt-4">
          <Card className="u-mb-4">
            <h3 className="u-fs-xl u-fw-bold u-mb-4">Vanilla JavaScript Implementation</h3>
            <p className="u-text-secondary-emphasis u-mb-4">
              Every component should also provide a vanilla JavaScript implementation:
            </p>
            <List variant="text">
              <ListItem>Create a main class with clear constructor and public API</ListItem>
              <ListItem>Use proper event delegation for better performance</ListItem>
              <ListItem>Implement initialization, event binding, and cleanup methods</ListItem>
              <ListItem>Support data attribute initialization</ListItem>
              <ListItem>Clean up all event listeners in destroy method</ListItem>
            </List>
          </Card>

          <Card>
            <h3 className="u-fs-xl u-fw-bold u-mb-4">Example: Vanilla JS Class</h3>
            <Card className="u-p-4 u-bg-secondary-subtle u-border u-border-subtle u-overflow-x-auto">
              <pre
                className="u-m-0 u-fs-sm u-text-error-text-emphasis"
                style={{ fontFamily: 'var(--atomix-font-family-mono)' }}
              >
                <code>{vanillaExample}</code>
              </pre>
            </Card>
          </Card>
        </div>
      ),
    },
    {
      id: 'styling',
      label: 'Styling',
      content: (
        <div className="u-mt-4">
          <Card className="u-mb-4">
            <h3 className="u-fs-xl u-fw-bold u-mb-4">Styling Architecture</h3>
            <p className="u-text-secondary-emphasis u-mb-4">
              Atomix follows the ITCSS (Inverted Triangle CSS) architecture:
            </p>
            <List variant="text">
              <ListItem><strong>01-settings/</strong> - Variables and configuration</ListItem>
              <ListItem><strong>02-tools/</strong> - Mixins and functions</ListItem>
              <ListItem><strong>06-components/</strong> - UI component styles</ListItem>
              <ListItem>Follow BEM methodology with <code className="u-fs-sm">c-</code> prefix</ListItem>
              <ListItem>Use CSS custom properties for theming</ListItem>
            </List>
          </Card>

          <Card>
            <h3 className="u-fs-xl u-fw-bold u-mb-4">Example: Component Styles</h3>
            <Card className="u-p-4 u-bg-secondary-subtle u-border u-border-subtle u-overflow-x-auto">
              <pre
                className="u-m-0 u-fs-sm u-text-error-text-emphasis"
                style={{ fontFamily: 'var(--atomix-font-family-mono)' }}
              >
                <code>{stylingExample}</code>
              </pre>
            </Card>
          </Card>
        </div>
      ),
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      content: (
        <div className="u-mt-4">
          <Card className="u-mb-4">
            <h3 className="u-fs-xl u-fw-bold u-mb-4">Accessibility Checklist</h3>
            <p className="u-text-secondary-emphasis u-mb-4">
              All components must meet WCAG 2.1 AA standards:
            </p>
            <Grid>
              <GridCol md={6}>
                <List variant="number">
                  <ListItem>Keyboard navigation support</ListItem>
                  <ListItem>Proper focus management</ListItem>
                  <ListItem>ARIA roles and attributes</ListItem>
                  <ListItem>Color contrast compliance</ListItem>
                  <ListItem>Screen reader compatibility</ListItem>
                  <ListItem>Reduced motion support</ListItem>
                </List>
              </GridCol>
              <GridCol md={6}>
                <List variant="number">
                  <ListItem>Color contrast compliance</ListItem>
                  <ListItem>Screen reader compatibility</ListItem>
                  <ListItem>Reduced motion support</ListItem>
                </List>
              </GridCol>
            </Grid>
          </Card>

          <Card>
            <h3 className="u-fs-xl u-fw-bold u-mb-4">Accessibility Example</h3>
            <Card className="u-p-4 u-bg-secondary-subtle u-border u-border-subtle u-overflow-x-auto">
              <pre
                className="u-m-0 u-fs-sm u-text-error-text-emphasis"
                style={{ fontFamily: 'var(--atomix-font-family-mono)' }}
              >
                <code>{`<button
  aria-expanded={isOpen}
  aria-controls={contentId}
  aria-label={ariaLabel || label}
  tabIndex={0}
  onKeyDown={handleKeyDown}
>
  {label}
</button>`}</code>
              </pre>
            </Card>
          </Card>
        </div>
      ),
    },
  ], [guidelines, reactExample, vanillaExample, stylingExample]);

  return (
    <>
      <Hero
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: '20px',
          cornerRadius: 30,
        } as GlassProps}
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Component Guidelines"
        subtitle="Development standards and best practices"
        text="Learn about component structure, naming conventions, accessibility requirements, and coding standards for the Atomix design system."
        alignment="center"
        showOverlay={false}
        fullViewportHeight={false}
        contentWidth="1200px"
        actions={
          <>
            <Button
              label="Browse Components"
              href="/docs/components/overview"
            />
            <Button
              variant="secondary"
              label="Quick Start"
              href="/docs/getting-started/quick-start"
            />
          </>
        }
      />

      <Block spacing="md" >
        <SectionIntro
          title="Development Standards"
          text="Follow these comprehensive guidelines to ensure consistency and quality across all components in the Atomix design system."
        />

        <div className="u-mb-6">
          <Tabs
            items={tabItems}
            activeIndex={activeTab}
            onTabChange={(index) => setActiveTab(index)}
          />
        </div>
      </Block>

      <Block background="secondary" >
        <Callout variant="info" title="Getting Started">
          <p className="u-mb-3">
            New to component development? Start with our{' '}
            <Link
              href="/docs/getting-started/installation"
              className="u-text-primary u-text-decoration-none u-fw-medium"
            >
              installation guide
            </Link>{' '}
            and{' '}
            <Link
              href="/docs/components/overview"
              className="u-text-primary u-text-decoration-none u-fw-medium"
            >
              browse existing components
            </Link>{' '}
            to see these guidelines in action.
          </p>
          <div className="u-d-flex u-gap-3 u-flex-wrap">
            <Button
              variant="primary"
              href="/docs/components/overview"
            >
              <Icon name="GridFour" size={16} className="u-me-2" />
              Browse Components
            </Button>
            <Button
              variant="outline"
              href="/docs/getting-started/quick-start"
            >
              <Icon name="Rocket" size={16} className="u-me-2" />
              Quick Start Guide
            </Button>
            <Button
              variant="outline"
              href="/docs/resources/contributing"
            >
              <Icon name="Code" size={16} className="u-me-2" />
              Contributing Guide
            </Button>
          </div>
        </Callout>
      </Block>
    </>
  );
};

export default ComponentGuidelinesPage;
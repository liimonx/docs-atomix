'use client';

import { FC } from 'react';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Grid,
  Container,
  Block,
  Icon,
  Badge,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';
import { EnhancedCodeBlock } from '@/components/showcase/EnhancedCodeBlock';
import styles from '@/styles/PageHero.module.scss';

const APIReactPage: FC = () => {
  return (
    <div>

      <Hero
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as GlassProps}
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="API Reference - React"
        text="Complete API reference for Atomix React components and hooks"
        alignment="center"
      />

      <Block spacing="md" >
        <Container>
          <SectionIntro
            title="React API Reference"
            text="Complete reference for all React components in the Atomix Design System, including props, types, and usage examples."
            alignment="center"
          />
          
          {/* Basic Components Section */}
          <Grid className="u-mt-8">
            <GridCol md={12}>
              <Card className="u-p-6">
                <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                  <div className="u-d-inline-flex u-align-items-center u-justify-content-center u-rounded u-bg-primary-subtle u-text-primary u-p-2">
                    <Icon name="Code" size={24} />
                  </div>
                  <h3 className="u-fs-xl u-fw-700 u-m-0 u-text-primary-emphasis">Component Categories</h3>
                </div>
                
                <div className="u-mt-5">
                  <div className="u-d-flex u-align-items-center u-gap-2 u-mb-3">
                    <Icon name="Stack" size={20} className="u-text-primary-emphasis" />
                    <h4 className="u-fs-lg u-fw-600 u-m-0 u-text-primary-emphasis">Basic Components</h4>
                  </div>
                  
                  <div className="u-mb-6">
                    <div className="u-d-flex u-align-items-center u-gap-2 u-mb-2">
                      <Badge variant="primary" size="sm" label="Button" />
                    </div>
                    <p className="u-text-secondary-emphasis u-mb-3">
                      Interactive button component with multiple variants and states.
                    </p>
                    <EnhancedCodeBlock
                      code={`interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'ghost' | 'outline-primary' | 'outline-secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  [key: string]: any;
}

// Usage
<Button variant="primary" size="lg" onClick={handleClick}>
  Click me
</Button>`}
                      language="tsx"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div className="u-mb-6">
                    <div className="u-d-flex u-align-items-center u-gap-2 u-mb-2">
                      <Badge variant="success" size="sm" label="Badge" />
                    </div>
                    <p className="u-text-secondary-emphasis u-mb-3">
                      Small status indicators and labels.
                    </p>
                    <EnhancedCodeBlock
                      code={`interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

// Usage
<Badge variant="success">New</Badge>`}
                      language="tsx"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <div className="u-d-flex u-align-items-center u-gap-2 u-mb-2">
                      <Badge variant="info" size="sm" label="Icon" />
                    </div>
                    <p className="u-text-secondary-emphasis u-mb-3">
                      Icon wrapper component with consistent sizing.
                    </p>
                    <EnhancedCodeBlock
                      code={`interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
}

// Usage
<Icon name="Check" size="lg" />`}
                      language="tsx"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
              </Card>
            </GridCol>
          </Grid>
          
          {/* Layout Components Section */}
          <Grid className="u-mt-6">
            <GridCol md={12}>
              <Card className="u-p-6">
                <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                  <div className="u-d-inline-flex u-align-items-center u-justify-content-center u-rounded u-bg-success-subtle u-text-success u-p-2">
                    <Icon name="GridFour" size={24} />
                  </div>
                  <h3 className="u-fs-xl u-fw-700 u-m-0 u-text-primary-emphasis">Layout Components</h3>
                </div>
                
                <div className="u-mt-5">
                  <div className="u-mb-6">
                    <div className="u-d-flex u-align-items-center u-gap-2 u-mb-2">
                      <Badge variant="primary" size="sm" label="Container" />
                    </div>
                    <p className="u-text-secondary-emphasis u-mb-3">
                      Responsive container component for centering content.
                    </p>
                    <EnhancedCodeBlock
                      code={`interface ContainerProps {
  fluid?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  children: React.ReactNode;
  className?: string;
}

// Usage
<Container maxWidth="lg">
  Content
</Container>`}
                      language="tsx"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <div className="u-d-flex u-align-items-center u-gap-2 u-mb-2">
                      <Badge variant="success" size="sm" label="Grid Components" />
                    </div>
                    <p className="u-text-secondary-emphasis u-mb-3">
                      Flexible grid system with responsive columns.
                    </p>
                    <EnhancedCodeBlock
                      code={`interface GridProps {
  gutter?: number;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'top' | 'middle' | 'bottom' | 'stretch' | 'baseline';
  children: React.ReactNode;
  className?: string;
}

interface GridColProps {
  span?: number;
  offset?: number;
  order?: number;
  xs?: number | 'auto';
  sm?: number | 'auto';
  md?: number | 'auto';
  lg?: number | 'auto';
  xl?: number | 'auto';
  xxl?: number | 'auto';
  children: React.ReactNode;
  className?: string;
}

// Usage
<Grid gutter={16}>
  <GridCol md={6} lg={4}>
    Content
  </GridCol>
</Grid>`}
                      language="tsx"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
              </Card>
            </GridCol>
          </Grid>
          
          {/* Hooks and Types Section */}
          <Grid className="u-mt-6">
            <GridCol md={6} className="u-mb-6">
              <Card className="u-p-6 u-h-100">
                <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                  <div className="u-d-inline-flex u-align-items-center u-justify-content-center u-rounded u-bg-warning-subtle u-text-warning u-p-2">
                    <Icon name="Lightning" size={24} />
                  </div>
                  <h3 className="u-fs-xl u-fw-700 u-m-0 u-text-primary-emphasis">Hooks</h3>
                </div>
                
                <div className="u-mt-5">
                  <div className="u-mb-5">
                    <div className="u-d-flex u-align-items-center u-gap-2 u-mb-2">
                      <Badge variant="warning" size="sm" label="useTheme" />
                    </div>
                    <p className="u-text-secondary-emphasis u-mb-3">
                      Hook for managing theme state and preferences.
                    </p>
                    <EnhancedCodeBlock
                      code={`interface ThemeHook {
  theme: 'light' | 'dark' | 'high-contrast';
  setTheme: (theme: 'light' | 'dark' | 'high-contrast') => void;
  systemTheme: 'light' | 'dark';
}

// Usage
const { theme, setTheme } = useTheme();`}
                      language="tsx"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <div className="u-d-flex u-align-items-center u-gap-2 u-mb-2">
                      <Badge variant="warning" size="sm" label="useResponsive" />
                    </div>
                    <p className="u-text-secondary-emphasis u-mb-3">
                      Hook for responsive breakpoints and device detection.
                    </p>
                    <EnhancedCodeBlock
                      code={`interface ResponsiveHook {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

// Usage
const { isMobile, breakpoint } = useResponsive();`}
                      language="tsx"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
              </Card>
            </GridCol>
            
            <GridCol md={6} className="u-mb-6">
              <Card className="u-p-6 u-h-100">
                <div className="u-d-flex u-align-items-center u-gap-3 u-mb-4">
                  <div className="u-d-inline-flex u-align-items-center u-justify-content-center u-rounded u-bg-info-subtle u-text-info u-p-2">
                    <Icon name="FileCode" size={24} />
                  </div>
                  <h3 className="u-fs-xl u-fw-700 u-m-0 u-text-primary-emphasis">Types</h3>
                </div>
                
                <div className="u-mt-5">
                  <div className="u-mb-5">
                    <div className="u-d-flex u-align-items-center u-gap-2 u-mb-2">
                      <Badge variant="info" size="sm" label="Common Types" />
                    </div>
                    <EnhancedCodeBlock
                      code={`type ColorVariant = 
  'primary' | 'secondary' | 'success' | 
  'error' | 'warning' | 'info';

type SizeVariant = 'sm' | 'md' | 'lg';

type Breakpoint = 
  'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Theme = 'light' | 'dark' | 'high-contrast';`}
                      language="tsx"
                      showLineNumbers={false}
                    />
                  </div>
                  
                  <div>
                    <div className="u-d-flex u-align-items-center u-gap-2 u-mb-2">
                      <Badge variant="info" size="sm" label="Utility Types" />
                    </div>
                    <EnhancedCodeBlock
                      code={`interface ClassNameProps {
  className?: string;
}

interface ChildrenProps {
  children: React.ReactNode;
}

type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
} & React.ComponentPropsWithoutRef<E>;`}
                      language="tsx"
                      showLineNumbers={false}
                    />
                  </div>
                </div>
              </Card>
            </GridCol>
          </Grid>
        </Container>
      </Block>
    </div>
  );
};

APIReactPage.displayName = 'APIReactPage';

export default APIReactPage;
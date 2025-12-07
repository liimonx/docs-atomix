'use client';


import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';
import { GlassProps } from '@/types/atomix-components';

const APIReactPage = () => {
  return (
    <>

      <Hero
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as GlassProps}
        className="u-pt-32 u-pb-16"
        backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
        title="API Reference - React"
        text="Complete API reference for Atomix React components and hooks"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8" container={{type: 'fluid'}}>
        <SectionIntro
          title="React API Reference"
          text="Complete reference for all React components in the Atomix Design System, including props, types, and usage examples."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Component Categories</h3>
              
              <h4 className="u-mt-3">Basic Components</h4>
              
              <h5>Button</h5>
              <p>Interactive button component with multiple variants and states.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`interface ButtonProps {
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
              </pre>
              
              <h5 className="u-mt-3">Badge</h5>
              <p>Small status indicators and labels.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

// Usage
<Badge variant="success">New</Badge>`}
              </pre>
              
              <h5 className="u-mt-3">Icon</h5>
              <p>Icon wrapper component with consistent sizing.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
}

// Usage
<Icon name="Check" size="lg" />`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Layout Components</h3>
              
              <h4 className="u-mt-3">Container</h4>
              <p>Responsive container component for centering content.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`interface ContainerProps {
  fluid?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  children: React.ReactNode;
  className?: string;
}

// Usage
<Container maxWidth="lg">
  Content
</Container>`}
              </pre>
              
              <h4 className="u-mt-3">Grid Components</h4>
              <p>Flexible grid system with responsive columns.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`interface GridProps {
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
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Hooks</h3>
              
              <h4 className="u-mt-3">useTheme</h4>
              <p>Hook for managing theme state and preferences.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`interface ThemeHook {
  theme: 'light' | 'dark' | 'high-contrast';
  setTheme: (theme: 'light' | 'dark' | 'high-contrast') => void;
  systemTheme: 'light' | 'dark';
}

// Usage
const { theme, setTheme } = useTheme();`}
              </pre>
              
              <h4 className="u-mt-3">useResponsive</h4>
              <p>Hook for responsive breakpoints and device detection.</p>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`interface ResponsiveHook {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

// Usage
const { isMobile, breakpoint } = useResponsive();`}
              </pre>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Types</h3>
              
              <h4 className="u-mt-3">Common Types</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`type ColorVariant = 
  'primary' | 'secondary' | 'success' | 
  'error' | 'warning' | 'info';

type SizeVariant = 'sm' | 'md' | 'lg';

type Breakpoint = 
  'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Theme = 'light' | 'dark' | 'high-contrast';`}
              </pre>
              
              <h4 className="u-mt-3">Utility Types</h4>
              <pre className="u-mt-3 u-p-3 u-bg-gray-100 u-br-4">
{`interface ClassNameProps {
  className?: string;
}

interface ChildrenProps {
  children: React.ReactNode;
}

type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
} & React.ComponentPropsWithoutRef<E>;`}
              </pre>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default APIReactPage;
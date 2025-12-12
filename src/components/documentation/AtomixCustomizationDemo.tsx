import React from 'react';
import { 
  Button, 
  Card, 
  Callout, 
  Badge, 
  Tabs,
  Input,
  Row,
  GridCol
} from '@shohojdhara/atomix';

const AtomixCustomizationDemo: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Atomix Components Customization Demo</h1>
      <p>
        This page demonstrates the enhanced styling of Atomix components with our custom overrides.
      </p>
      
      <Row>
        <GridCol md={6}>
          <Card className="u-mb-4">
            <h2>Enhanced Buttons</h2>
            <div className="u-d-flex u-gap-3 u-flex-wrap">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="primary" disabled>Disabled Button</Button>
            </div>
          </Card>
          
          <Card className="u-mb-4">
            <h2>Custom Form Elements</h2>
            <div className="u-mb-3">
              <label htmlFor="demoInput" className="u-d-block u-mb-1">Input Field</label>
              <Input id="demoInput" placeholder="Enter text..." />
            </div>
          </Card>
        </GridCol>
        
        <GridCol md={6}>
          <Card className="u-mb-4">
            <h2>Enhanced Alerts</h2>
            <Callout variant="success" className="u-mb-3">
              <strong>Success!</strong> This is a custom success alert.
            </Callout>
            <Callout variant="error" className="u-mb-3">
              <strong>Error!</strong> This is a custom error alert.
            </Callout>
            <Callout variant="warning" className="u-mb-3">
              <strong>Warning!</strong> This is a custom warning alert.
            </Callout>
            <Callout variant="info">
              <strong>Info!</strong> This is a custom info alert.
            </Callout>
          </Card>
          
          <Card className="u-mb-4">
            <h2>Custom Badges</h2>
            <div className="u-d-flex u-gap-2 u-flex-wrap">
              <Badge variant="primary" label="Primary Badge" />
              <Badge variant="success" label="Success Badge" />
              <Badge variant="warning" label="Warning Badge" />
              <Badge variant="error" label="Error Badge" />
            </div>
          </Card>
        </GridCol>
      </Row>
      
      <Card>
        <h2>Enhanced Tabs</h2>
        <Tabs 
          activeIndex={activeTab} 
          onTabChange={setActiveTab}
          items={[
            { 
              label: 'Tab One', 
              content: (
                <div className="u-p-4">
                  <p>Content for Tab One. Notice the enhanced styling of the active tab.</p>
                </div>
              )
            },
            { 
              label: 'Tab Two', 
              content: (
                <div className="u-p-4">
                  <p>Content for Tab Two. The tab navigation has been customized with a thicker border.</p>
                </div>
              )
            },
            { 
              label: 'Tab Three', 
              content: (
                <div className="u-p-4">
                  <p>Content for Tab Three. All tabs have improved styling and transitions.</p>
                </div>
              )
            }
          ]}
        />
      </Card>
    </div>
  );
};

export default AtomixCustomizationDemo;
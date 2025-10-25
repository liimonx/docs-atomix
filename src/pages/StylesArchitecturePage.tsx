import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
} from '@shohojdhara/atomix';

const StylesArchitecturePage = () => {
  return (
    <>
      <Helmet>
        <title>Styles Architecture - Atomix Design System</title>
        <meta
          name="description"
          content="Learn about the ITCSS architecture and organization of Atomix styles system."
        />
      </Helmet>

      <Hero
        title="Styles Architecture"
        text="ITCSS structure and organization of the Atomix CSS framework"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="ITCSS Architecture"
          text="Atomix styles are organized in a hierarchical structure that moves from generic, far-reaching styles to specific, localized styles. This creates a natural cascade that minimizes specificity conflicts and promotes reusability."
        />
        
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Architecture Overview</h3>
              <pre className="u-mt-4 u-p-4 u-bg-gray-100 u-br-4">
{`src/styles/
├── 01-settings/     # Variables, colors, configuration
├── 02-tools/        # Mixins, functions, utilities
├── 03-generic/      # Reset, normalize, box-sizing
├── 04-elements/     # Base HTML element styles
├── 05-objects/      # Layout patterns (OOCSS)
├── 06-components/   # UI components
└── 99-utilities/    # Utility classes`}
              </pre>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>ITCSS Methodology</h3>
              <p>ITCSS organizes CSS in order of specificity and reach:</p>
              <ul className="u-mt-4">
                <li>Specificity increases as you go down</li>
                <li>Reach decreases as you go down</li>
                <li>Explicitness increases as you go down</li>
                <li>No output in the first two layers</li>
              </ul>
            </Card>
          </GridCol>
          
          <GridCol md={6}>
            <Card className="u-p-6 u-h-100">
              <h3>Key Principles</h3>
              <p>The ITCSS methodology is based on these principles:</p>
              <ul className="u-mt-4">
                <li>Predictable cascade behavior</li>
                <li>Reduced specificity conflicts</li>
                <li>Improved code reusability</li>
                <li>Scalable architecture</li>
              </ul>
            </Card>
          </GridCol>
        </Row>
        
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3>Layer Structure</h3>
              <p>Each layer in the ITCSS architecture serves a specific purpose:</p>
              
              <div className="u-mt-4">
                <h4>Settings</h4>
                <p>Global variables, colors, configuration - no CSS output</p>
                
                <h4 className="u-mt-3">Tools</h4>
                <p>Mixins, functions, utilities - no CSS output</p>
                
                <h4 className="u-mt-3">Generic</h4>
                <p>Reset, normalize, box-sizing - broad reach, low specificity</p>
                
                <h4 className="u-mt-3">Elements</h4>
                <p>Base HTML element styles - broad reach, low specificity</p>
                
                <h4 className="u-mt-3">Objects</h4>
                <p>Layout patterns (OOCSS) - medium reach, medium specificity</p>
                
                <h4 className="u-mt-3">Components</h4>
                <p>UI components - narrow reach, high specificity</p>
                
                <h4 className="u-mt-3">Utilities</h4>
                <p>Helper classes - narrow reach, highest specificity</p>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default StylesArchitecturePage;
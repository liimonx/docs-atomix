import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  Hero,
  GridCol,
  Row,
  Block,
  SectionIntro,
} from "@shohojdhara/atomix";
import { Link } from "react-router-dom";

const StylesOverviewPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Styles Overview - Atomix Documentation</title>
        <meta name="description" content="Learn about the Atomix Styles System built on modern web standards and ITCSS methodology" />
      </Helmet>

      <div className="styles-overview-page">
        <Hero
          title="Styles System"
          subtitle="Atomix CSS Architecture"
          text="A comprehensive, scalable CSS architecture built on modern web standards and the ITCSS methodology."
          alignment="center"
          showOverlay={false}
          fullViewportHeight={false}
          contentWidth="900px"
          actions={
            <>
              <Link to="/docs/styles/architecture">
                <Button label="Architecture Guide" />
              </Link>
              <Link to="/docs/styles/utilities">
                <Button variant="secondary" label="Utility Classes" />
              </Link>
            </>
          }
        />

        <Block spacing="sm">
          <SectionIntro 
            title="Modern CSS Architecture"
            text="Explore our CSS architecture designed for scalability, maintainability, and performance."
          />
          
          <Row>
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Architecture</h3>
                <p className="u-mb-4">Learn about our CSS architecture based on ITCSS methodology for scalable styling.</p>
                <Link to="/docs/styles/architecture">
                  <Button variant="outline" label="Architecture Guide" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Utility Classes</h3>
                <p className="u-mb-4">Explore our extensive collection of utility classes for rapid UI development.</p>
                <Link to="/docs/styles/utilities">
                  <Button variant="outline" label="Utility Classes" size="sm" />
                </Link>
              </Card>
            </GridCol>
            
            <GridCol md={6} lg={4}>
              <Card className="u-p-6 u-h-100">
                <h3 className="u-mb-3">Customization</h3>
                <p className="u-mb-4">Learn how to customize the Atomix design system to match your brand.</p>
                <Link to="/docs/styles/customization">
                  <Button variant="outline" label="Customization Guide" size="sm" />
                </Link>
              </Card>
            </GridCol>
          </Row>
        </Block>
      </div>
    </>
  );
};

export default StylesOverviewPage;
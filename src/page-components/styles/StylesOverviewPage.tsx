"use client";

import { FC } from "react";
import Link from "next/link";

import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Hero,
  GridCol,
  Row,
  Block,
  SectionIntro,
} from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const StylesOverviewPage: FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering glass effect on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Hero
        className={styles.pageHero}
        title="Styles System"
        subtitle="Atomix CSS Architecture"
        text="A comprehensive, scalable CSS architecture built on modern web standards and the ITCSS methodology."
        alignment="center"
        fullViewportHeight={false}
        contentWidth="900px"
        actions={
          <div className={styles.pageHero__actions}>
            <Button
              label="Architecture Guide"
              href="/docs/styles/architecture"
              LinkComponent={Link}
            />
            <Button
              variant="secondary"
              label="Utility Classes"
              href="/docs/styles/utilities"
              LinkComponent={Link}
            />
          </div>
        }
      />

      <Block>
        <SectionIntro
          title="Modern CSS Architecture"
          text="Explore our CSS architecture designed for scalability, maintainability, and performance."
        />

        <Row>
          <GridCol md={6} lg={4}>
            <Card className="u-p-6 u-h-100 atomix-card-hover">
              <h3 className="u-text-lg u-font-semibold u-mb-3">Architecture</h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                Learn about our CSS architecture based on ITCSS methodology for
                scalable styling.
              </p>
              <Button
                variant="outline"
                label="Architecture Guide"
                size="sm"
                href="/docs/styles/architecture"
                LinkComponent={Link}
              />
            </Card>
          </GridCol>

          <GridCol md={6} lg={4}>
            <Card className="u-p-6 u-h-100 atomix-card-hover">
              <h3 className="u-text-lg u-font-semibold u-mb-3">
                Utility Classes
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                Explore our extensive collection of utility classes for rapid UI
                development.
              </p>
              <Button
                variant="outline"
                label="Utility Classes"
                size="sm"
                href="/docs/styles/utilities"
                LinkComponent={Link}
              />
            </Card>
          </GridCol>

          <GridCol md={6} lg={4}>
            <Card className="u-p-6 u-h-100 atomix-card-hover">
              <h3 className="u-text-lg u-font-semibold u-mb-3">
                Customization
              </h3>
              <p className="u-text-secondary-emphasis u-mb-4">
                Learn how to customize the Atomix design system to match your
                brand.
              </p>
              <Button
                variant="outline"
                label="Customization Guide"
                size="sm"
                href="/docs/styles/customization"
                LinkComponent={Link}
              />
            </Card>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default StylesOverviewPage;

"use client";

import { FC } from "react";
import { Button, Hero, Icon } from "@shohojdhara/atomix";
import { useRouter } from "next/navigation";
import styles from "./HeroSection.module.scss";
import pageHeroStyles from "@/styles/PageHero.module.scss";

export const HeroSection: FC = () => {
  const router = useRouter();

  return (
    <Hero
      title="Atomix Design System"
      subtitle="A comprehensive React component library for building modern, accessible web applications"
      className={pageHeroStyles.pageHero}
    >
      <div className={styles.heroSection__content}>
        <p className={styles.heroSection__description}>
          40+ professionally designed components with full TypeScript support,
          WCAG 2.1 AA accessibility compliance, and extensive customization
          options.
        </p>

        <div className={styles.heroSection__actions}>
          <Button
            size="lg"
            onClick={() => router.push("/docs/getting-started/installation")}
          >
            <Icon name="Rocket" size="sm" />
            Get Started
          </Button>

          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => router.push("/docs/components/overview")}
          >
            <Icon name="Stack" size="sm" />
            Browse Components
          </Button>
        </div>

        <div className={styles.heroSection__stats}>
          <div className={styles.heroSection__statItem}>
            <Icon name="Stack" size="sm" />
            <span>40+ Components</span>
          </div>
          <div className={styles.heroSection__statItem}>
            <Icon name="Palette" size="sm" />
            <span>Design Tokens</span>
          </div>
          <div className={styles.heroSection__statItem}>
            <Icon name="Wheelchair" size="sm" />
            <span>WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </Hero>
  );
};

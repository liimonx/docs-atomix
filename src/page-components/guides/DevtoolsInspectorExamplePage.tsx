"use client";

import { FC } from "react";
import { Hero, Block, Callout } from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsInspectorExamplePage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
        title="Theme Inspector"
        subtitle="Inspect and debug your themes"
        text="Use the ThemeInspector component to explore theme structure, validate tokens, and debug styling issues."
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-4">
        <Callout variant="info">
          This page is currently under construction. The Theme Inspector API is
          being updated.
        </Callout>
      </Block>
    </div>
  );
};

export default DevtoolsInspectorExamplePage;

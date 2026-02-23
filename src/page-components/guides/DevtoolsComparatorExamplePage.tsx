"use client";

import { FC } from "react";
import { Hero, Block, Callout } from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsComparatorExamplePage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
        title="Theme Comparator"
        subtitle="Compare theme versions side-by-side"
        text="Use the ThemeComparator component to identify differences between theme versions, track changes, and document breaking changes."
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-4">
        <Callout variant="info">
          This page is currently under construction. The Theme Comparator API is
          being updated.
        </Callout>
      </Block>
    </div>
  );
};

export default DevtoolsComparatorExamplePage;

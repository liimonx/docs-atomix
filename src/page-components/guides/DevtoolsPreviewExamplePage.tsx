"use client";

import { FC } from "react";
import { Hero, Block, Callout } from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsPreviewExamplePage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
        title="Theme Preview"
        subtitle="Preview your themes"
        text="Use the ThemePreview component to visualize how your theme looks across different components."
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-4">
        <Callout variant="info">
          This page is currently under construction. The Theme Preview API is
          being updated.
        </Callout>
      </Block>
    </div>
  );
};

export default DevtoolsPreviewExamplePage;

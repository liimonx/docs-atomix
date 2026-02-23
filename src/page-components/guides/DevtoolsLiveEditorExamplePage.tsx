"use client";

import { FC } from "react";
import { Hero, Block, Callout } from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsLiveEditorExamplePage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
        title="Theme Live Editor"
        subtitle="Edit themes in real-time"
        text="Use the ThemeLiveEditor component to modify theme tokens on-the-fly and see changes instantly."
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-4">
        <Callout variant="info">
          This page is currently under construction. The Theme Live Editor API
          is being updated.
        </Callout>
      </Block>
    </div>
  );
};

export default DevtoolsLiveEditorExamplePage;

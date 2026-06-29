'use client';

import React, { FC } from "react";
import { DocumentationHeader } from "@/components/navigation/DocumentationHeader";
import { DocumentationFooter } from "./DocumentationFooter";
import { SkipLinks } from "@/components/ui/SkipLinks";
import styles from "./HomePageLayout.module.scss";

export const HomePageLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <SkipLinks />
      <DocumentationHeader
        onSidebarToggle={() => {}}
        isSidebarOpen={false}
        showSidebarToggle={false}
      />

      <main id="main-content" role="main" className={styles.mainContent}>
        {children}
      </main>

      <DocumentationFooter />
    </div>
  );
};

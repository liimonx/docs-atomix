"use client";

import React, { useState, FC } from "react";
import { DocumentationHeader } from "@/components/navigation/DocumentationHeader";
import { DocumentationFooter } from "./DocumentationFooter";
import { DocumentationSidebar } from "@/components/navigation/DocumentationSidebar";
import { SkipLinks } from "@/components/ui/SkipLinks";
import { PageTransition } from "./PageTransition";
import { usePathname } from "next/navigation";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import styles from "./AppLayout.module.scss";

const MemoizedSkipLinks = React.memo(SkipLinks);
const MemoizedDocumentationFooter = React.memo(DocumentationFooter);

export const AppLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const [sidebarState, setSidebarState] = useState({ open: false, path: pathname });

  const sidebarOpen =
    sidebarState.path === pathname ? sidebarState.open : false;
  const setSidebarOpen = (open: boolean) => {
    setSidebarState({ open, path: pathname });
  };

  return (
    <div className={styles.layoutWrapper}>
      <AmbientBackground />
      <MemoizedSkipLinks />

      <DocumentationHeader
        isSidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
        showSidebarToggle={true}
      />

      <div className={styles.mainContainer}>
        <aside
          id="navigation"
          className={`${styles.sidebarWrapper} ${
            sidebarOpen ? styles["sidebarWrapper--mobileOpen"] : ""
          }`}
        >
          <DocumentationSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        </aside>

        <main
          id="main-content"
          className={`${styles.contentWrapper} main-content`}
        >
          <PageTransition>{children}</PageTransition>
          <MemoizedDocumentationFooter />
        </main>
      </div>
    </div>
  );
};

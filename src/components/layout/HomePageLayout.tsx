'use client';

import React, { FC } from "react";
import { DocumentationHeader } from "@/components/navigation/DocumentationHeader";
import { DocumentationFooter } from "./DocumentationFooter";
import { SkipLinks } from "@/components/ui/SkipLinks";

export const HomePageLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <SkipLinks />
      {/* Header - ALWAYS visible - rendered first for proper DOM order */}
      <DocumentationHeader
        onMenuToggle={() => {}}
        sidebarOpen={false}
        showMenuButton={false}
      />

      {/* Main content area - no sidebar for home page */}
      <main id="main-content" role="main">
        {children}
      </main>
      
      <DocumentationFooter />
    </div>
  );
};
"use client";

import React, { useState, useEffect, FC } from "react";
import { DocumentationHeader } from "@/components/navigation/DocumentationHeader";
import { DocumentationFooter } from "./DocumentationFooter";
import { DocumentationSidebar } from "@/components/navigation/DocumentationSidebar";
import { SkipLinks } from "@/components/ui/SkipLinks";
import { PageTransition } from "./PageTransition";
import { usePathname } from "next/navigation";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

const MemoizedSkipLinks = React.memo(SkipLinks);
const MemoizedDocumentationFooter = React.memo(DocumentationFooter);

export const AppLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="u-flex u-flex-column u-min-h-screen u-overflow-hidden u-relative">
      <AmbientBackground />
      <MemoizedSkipLinks />

      <DocumentationHeader
        isSidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
        showSidebarToggle={true}
      />

      <div className="u-flex u-flex-1 u-overflow-hidden u-pt-16">
        <DocumentationSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main id="main-content" className="u-flex-1 u-overflow-y-auto">
          <PageTransition>{children}</PageTransition>
          <div className="u-px-4 u-px-md-6 u-pb-5">
            <MemoizedDocumentationFooter />
          </div>
        </main>
      </div>
    </div>
  );
};

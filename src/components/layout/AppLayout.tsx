"use client";

import React, { useState, useEffect, FC } from "react";
import { DocumentationHeader } from "@/components/navigation/DocumentationHeader";
import { DocumentationFooter } from "./DocumentationFooter";
import { DocumentationSidebar } from "@/components/navigation/DocumentationSidebar";
import { SkipLinks } from "@/components/ui/SkipLinks";
import { PageTransition } from "./PageTransition";
import { usePathname } from "next/navigation";

const MemoizedSkipLinks = React.memo(SkipLinks);
const MemoizedDocumentationFooter = React.memo(DocumentationFooter);

export const AppLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="u-flex u-flex-column u-min-h-screen u-bg-background-light dark:u-bg-background-dark u-color-text-primary u-overflow-hidden">
      <MemoizedSkipLinks />

      <DocumentationHeader
        isSidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
        showSidebarToggle={true}
      />

      <div className="u-flex u-flex-1 u-overflow-hidden" style={{ height: 'calc(100vh - 65px)' }}>
        <DocumentationSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main id="main-content" className="u-flex-1 u-overflow-y-auto u-bg-background-dark u-custom-scrollbar u-scroll-smooth u-relative u-w-100">
           <PageTransition>
             <div className="u-max-w-1440px u-mx-auto u-px-4 u-py-5 md:u-px-6 lg:u-py-6">
               {children}
             </div>
           </PageTransition>
           <div className="u-px-4 md:u-px-6 u-pb-5">
             <MemoizedDocumentationFooter />
           </div>
        </main>
      </div>
    </div>
  );
};

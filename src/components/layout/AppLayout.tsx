import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Spinner, Container } from "@shohojdhara/atomix";
import { DocumentationHeader } from "./DocumentationHeader";
import { DocumentationSidebar } from "./DocumentationSidebar";
import { DocumentationFooter } from "./DocumentationFooter";
import { MobileNavigation } from "./MobileNavigation";
import { BackToTopButton } from "../ui/BackToTopButton";  

export const AppLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="atomix-docs-app">
      {/* Main content area */}
      <div className="atomix-docs-main">
        {/* Sidebar - Desktop persistent, mobile overlay */}
        <DocumentationSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Mobile Navigation Overlay */}
        <MobileNavigation
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Page Content */}
        <main className="atomix-docs-content" role="main">
          <div className="atomix-docs-container-wrapper">
            <Container type="fluid">
              <Outlet />
            </Container>
          </div>
        </main>
      </div>

      {/* Footer */}
      <DocumentationFooter />

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Header - ALWAYS visible */}
      <DocumentationHeader
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
    </div>
  );
};
import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Spinner, Container, Hero, Button, Icon } from "@shohojdhara/atomix";
import { DocumentationHeader } from "./DocumentationHeader";
import { MobileNavigation } from "./MobileNavigation";
import { BackToTopButton } from "../ui/BackToTopButton";
import { DocumentationFooter } from "./DocumentationFooter";
import { DocumentationSidebar } from "./DocumentationSidebar";

export const AppLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleItemSelect = (itemId: string) => {
    setActiveItem(itemId);
  };

  // Check if we're on the homepage
  const isHomepage = location.pathname === "/";

  return (
    <div className="atomix-docs-app">
      {/* Full-width Hero Section - only shown on homepage */}
      {isHomepage && (
        <>
          <Hero
            subtitle="A Comprehensive Design System"
            title="Build Amazing UIs with Atomix"
            text="A modern design system with 40+ components, comprehensive layouts, design tokens, and advanced effects like AtomixGlass. Built for React and vanilla JavaScript with accessibility and performance in mind."
            alignment="center"
            backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
            contentWidth="70%"
            fullViewportHeight
            className="u-py-64 hero"
            showOverlay={false}
            actions={
              <>
                <Button
                  glass
                  variant="primary"
                  icon={<Icon name="ArrowRight" size="sm" />}
                  onClick={() => navigate("/docs/getting-started/installation")}
                >
                  Get Started
                </Button>
                <Button
                  glass
                  variant="info"
                  onClick={() => navigate("/docs/components/overview")}
                >
                  Explore Components
                </Button>
              </>
            }
            parallax={true}
            glass={
              {
                displacementScale: 30,
                blurAmount: 5,
                elasticity: 0,
                enableLiquidBlur: true,
                padding: "0 20px",
                cornerRedius: 30,
              } as any
            }
          />
          <div className="shade"></div>
        </>
      )}

      {/* Main content area */}
      <div className="atomix-docs-main">
        {/* Sidebar - Desktop persistent, mobile overlay */}
        <DocumentationSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          activeItem={activeItem}
          onItemSelect={handleItemSelect}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <main className="atomix-docs-content">
          <Container type="fluid">
            <Outlet />
          </Container>
        </main>
      </div>
      <DocumentationFooter />
      <BackToTopButton />
      <DocumentationHeader
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        sidebarOpen={isSidebarOpen}
      />
    </div>
  );
};

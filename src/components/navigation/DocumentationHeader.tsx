"use client";

import { memo } from "react";
import Link from "next/link";
import { Button, ColorModeToggle, Navbar, Nav } from "@shohojdhara/atomix";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { GlobalSearch } from "../ui/GlobalSearch";

interface DocumentationHeaderProps {
  isSidebarOpen?: boolean;
  onSidebarToggle?: () => void;
  showSidebarToggle?: boolean;
}

const DocumentationHeader = memo(function DocumentationHeader({
  isSidebarOpen,
  onSidebarToggle,
  showSidebarToggle = false,
}: DocumentationHeaderProps) {
  return (
    <Navbar
      position={"fixed"}
      glass={{
        blurAmount: 6,
        displacementScale: 60,
        aberrationIntensity: 30,
        overLight: {
          brightness: 1,
          contrast: 1,
        },
        enableBorderEffect: false,
        enableLiquidBlur: false,
        shaderVariant: "appleFluid",
      }}
      brand={
        <Link href="/">
          <div className="u-flex u-items-center u-gap-3">
            <div className="u-flex u-items-center u-justify-center u-bg-brand-subtle u-rounded-sm u-p-3">
              <span className="u-text-brand-emphasis u-fs-xs .material-symbols-outlined">
                atm
              </span>
            </div>
            <div className="u-flex u-flex-column">
              <p className="u-text-primary-emphasis u-fs-lg u-font-bold u-leading-none">
                Atomix
              </p>
              <p className="u-text-primary-emphasis u-fs-xs u-font-medium u-mt-1">
                v2.0.4
              </p>
            </div>
          </div>
        </Link>
      }
    >
      {showSidebarToggle && (
        <Nav alignment="start" className="u-ps-2">
          <BreadcrumbNavigation />
        </Nav>
      )}

      <Nav alignment="end">
        <GlobalSearch />
        <Button
          as="a"
          href="https://github.com/shohojdhara/atomix"
          variant="ghost"
          iconName="GithubLogo"
          iconOnly
          ariaLabel="GitHub"
        />
        <Button
          as="a"
          href="https://twitter.com/shohojdhara"
          variant="ghost"
          iconName="TwitterLogo"
          iconOnly
          ariaLabel="Twitter"
        />
        <ColorModeToggle defaultValue="dark" />

        {showSidebarToggle && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onSidebarToggle}
            ariaLabel={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            iconName={isSidebarOpen ? "X" : "List"}
            iconOnly
          />
        )}
      </Nav>
    </Navbar>
  );
});

export { DocumentationHeader };

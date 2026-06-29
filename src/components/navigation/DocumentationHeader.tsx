"use client";

import { memo } from "react";
import Link from "next/link";
import { Button, ColorModeToggle, Navbar, Nav } from "@shohojdhara/atomix";
import { BreadcrumbNavigation } from "./BreadcrumbNavigation";
import { GlobalSearch } from "../ui/GlobalSearch";
import {
  ATOMIX_VERSION_LABEL,
  SOCIAL_LINKS,
} from "@/utils/siteConfig";
import styles from "./DocumentationHeader.module.scss";

interface DocumentationHeaderProps {
  isSidebarOpen?: boolean;
  onSidebarToggle?: () => void;
  showSidebarToggle?: boolean;
}

const DocumentationHeader = memo(function DocumentationHeader({
  isSidebarOpen = false,
  onSidebarToggle,
  showSidebarToggle = false,
}: DocumentationHeaderProps) {
  return (
    <Navbar
      position="fixed"
      glass={{
        blurAmount: 6,
        displacementScale: 60,
        aberrationIntensity: 30,
        overLight: {
          brightness: 1.3,
          contrast: 1,
        },
        shaderVariant: "appleFluid",
      }}
      brand={
        <Link href="/">
          <div className="u-flex u-items-center u-gap-3">
            <div className="u-flex u-items-center u-justify-center u-rounded-sm u-p-3">
              <span className="material-symbols-outlined u-text-brand-emphasis u-fs-xs">
                atm
              </span>
            </div>
            <div className="u-flex u-flex-column">
              <p className="u-text-primary-emphasis u-fs-lg u-font-bold u-leading-none">
                Atomix
              </p>
              <p className="u-text-primary-emphasis u-fs-xs u-font-medium u-mt-1">
                {ATOMIX_VERSION_LABEL}
              </p>
            </div>
          </div>
        </Link>
      }
    >
      {showSidebarToggle && (
        <Nav alignment="start" className="u-ps-2">
          <Button
            className={styles.menuButton}
            variant="link"
            iconOnly
            iconName={isSidebarOpen ? "X" : "List"}
            aria-label={
              isSidebarOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isSidebarOpen}
            aria-controls="navigation"
            onClick={onSidebarToggle}
          />
          <div className={styles.breadcrumbs}>
            <BreadcrumbNavigation />
          </div>
        </Nav>
      )}

      <Nav alignment="end">
        <GlobalSearch />
        <Button
          as="a"
          href={SOCIAL_LINKS.github}
          variant="link"
          iconName="GithubLogo"
          iconOnly
          aria-label="GitHub"
        />
        <Button
          as="a"
          href={SOCIAL_LINKS.twitter}
          variant="link"
          iconName="TwitterLogo"
          iconOnly
          aria-label="Twitter"
        />
        <ColorModeToggle />
      </Nav>
    </Navbar>
  );
});

export { DocumentationHeader };

"use client";

import { memo } from "react";
import Link from "next/link";
import {
  Button,
  ColorModeToggle,
  Navbar,
  Nav,
  Breadcrumb,
} from "@shohojdhara/atomix";
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
    <Navbar position={"fixed"}>
      <Nav alignment="start" className="u-ps-32">
        <Breadcrumb
          className="u-mb-auto"
          items={[
            { label: "Home", href: "/" },
            { label: "Components", href: "/components" },
          ]}
        />
      </Nav>
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

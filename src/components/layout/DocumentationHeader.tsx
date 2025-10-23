import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  ColorModeToggle,
  Badge,
  Dropdown,
  Icon,
  Tooltip,
  Navbar,
  Nav,
  NavItem,
} from "@shohojdhara/atomix";
import { GlobalSearch } from "../ui/GlobalSearch";
import { useTheme } from "../../hooks/useTheme";
import { useSearch } from "../../hooks/useSearch";

interface DocumentationHeaderProps {
  onMenuToggle: () => void;
  sidebarOpen: boolean;
}

export const DocumentationHeader: React.FC<DocumentationHeaderProps> = () => {
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    { label: "Home", href: "/", icon: "Home" },
    { label: "Components", href: "/components", icon: "Layers" },
    { label: "Design Tokens", href: "/design-tokens", icon: "Palette" },
    { label: "Examples", href: "/examples", icon: "Code" },
  ];

  const externalLinks = [
    {
      label: "GitHub",
      href: "https://github.com/shohojdhara/atomix",
      icon: "Github",
    },
    {
      label: "NPM",
      href: "https://www.npmjs.com/package/@shohojdhara/atomix",
      icon: "Package",
    },
    {
      label: "Storybook",
      href: "https://atomix-storybook.netlify.app",
      icon: "BookOpen",
    },
  ];

  return (
    <Navbar
      position="fixed"
      brand={
        <>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            <Icon name="Stack" size="md" />
            <strong>Atomix</strong>
          </Link>
        </>
      }
    >
      <Nav alignment="center">
        {navigationItems.map((item) => (
          <NavItem key={item.href} active={location.pathname === item.href}>
            <Link to={item.href} style={{ display: "flex", alignItems: "center", gap: "0.25rem", textDecoration: "none", color: "inherit" }}>
              <Icon name={item.icon as any} size="sm" />
              {item.label}
            </Link>
          </NavItem>
        ))}
      </Nav>

      <GlobalSearch />

      <Tooltip
        position="bottom"
        content={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
          <ColorModeToggle />
        </div>
      </Tooltip>

      <Badge variant="primary" size="sm" label="v1.0.0" />
    </Navbar>
  );
};

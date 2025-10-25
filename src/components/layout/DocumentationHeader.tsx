import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Icon,
  Navbar,
  Nav,
  NavItem,
  ColorModeToggle,
  Button,
} from "@shohojdhara/atomix";
import { GlobalSearch } from "../ui/GlobalSearch";

interface DocumentationHeaderProps {
  onMenuToggle: () => void;
  sidebarOpen: boolean;
}

export const DocumentationHeader: React.FC<DocumentationHeaderProps> = ({
  onMenuToggle,
  sidebarOpen,
}) => {
  const navigate = useNavigate();
  
  return (
    <Navbar
      className="atomix-docs-header"
      position="fixed"
      glass={{
        displacementScale: 60,
        blurAmount: 3,
        elasticity: 0,
        enableLiquidBlur: true,
      } as any}
      brand={
        <>
          <button
            className="mobile-menu-toggle"
            onClick={onMenuToggle}
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            aria-expanded={sidebarOpen}
          >
            <Icon name={sidebarOpen ? "X" : "List"} size="lg" />
          </button>

          <Link 
            to="/" 
            className="brand-link"
          >
            <Icon name="Atom" size="lg" />
            Atomix
          </Link>
        </>
      }
    >
      <Nav alignment="start" className="nav-main">
        <NavItem>
          <Link to="/docs/getting-started/installation" className="nav-link">
            Docs
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/docs/components/overview" className="nav-link">
            Components
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/docs/design-tokens/colors" className="nav-link">
            Design Tokens
          </Link>
        </NavItem>
      </Nav>

      <Nav alignment="end" className="u-gap-4">
        <GlobalSearch />

        <ColorModeToggle
          aria-label="Toggle theme"
        />

        <Button
          variant="ghost"
          glass={
            {
              cornerRadius: 90,
            }
          }
          rounded
          iconOnly
          icon={<Icon name="GithubLogo" />}
          aria-label="GitHub repository"
          onClick={() => window.open("https://github.com/shohojdhara/atomix", "_blank")}
        />
      </Nav>
    </Navbar>
  );
};
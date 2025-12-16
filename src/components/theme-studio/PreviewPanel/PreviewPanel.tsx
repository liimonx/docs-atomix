import { FC, useEffect, useRef } from "react";
import { Container } from "@shohojdhara/atomix";
import { ComponentShowcase } from "./ComponentShowcase";
import { useThemeStudioStore } from "@/stores/themeStudioStore";

export const PreviewPanel: FC = () => {
  const { lightTokens, darkTokens, activeMode } = useThemeStudioStore();
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply theme to preview container for live updates
  useEffect(() => {
    if (!containerRef.current) return;

    const tokens = activeMode === "light" ? lightTokens : darkTokens;
    
    // Skip if tokens are empty (not initialized yet)
    if (Object.keys(tokens).length === 0) {
      return;
    }

    const container = containerRef.current;

    // Set color mode attribute
    container.setAttribute("data-atomix-color-mode", activeMode);

    // Apply all tokens as CSS variables to the container
    Object.entries(tokens).forEach(([name, value]) => {
      container.style.setProperty(name, value);
    });
  }, [lightTokens, darkTokens, activeMode]);

  return (
    <div ref={containerRef}>
      <Container type="fluid" className="u-py-4">
        <ComponentShowcase />
      </Container>
    </div>
  );
};

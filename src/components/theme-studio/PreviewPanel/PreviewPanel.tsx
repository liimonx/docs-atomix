import { FC, useEffect, useRef, useMemo } from "react";
import { Block, Row, GridCol } from "@shohojdhara/atomix";
import { ComponentShowcase } from "./ComponentShowcase";
import { useThemeStudioStore } from "@/stores/themeStudioStore";
import styles from "./PreviewPanel.module.scss";

const DEVICE_PRESETS = {
  desktop: { width: 1920, height: 1080 },
  laptop: { width: 1440, height: 900 },
  tablet: { width: 768, height: 1024 },
  "tablet-landscape": { width: 1024, height: 768 },
  mobile: { width: 375, height: 667 },
  "mobile-landscape": { width: 667, height: 375 },
};

export const PreviewPanel: FC = () => {
  const {
    lightTokens,
    darkTokens,
    activeMode,
    responsiveMode,
    customViewportWidth,
    customViewportHeight,
  } = useThemeStudioStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const viewportSize = useMemo(() => {
    if (responsiveMode === "custom") {
      return { width: customViewportWidth, height: customViewportHeight };
    }
    // Map store responsiveMode to device presets
    const modePresetMap: Record<string, keyof typeof DEVICE_PRESETS> = {
      desktop: "desktop",
      tablet: "tablet",
      mobile: "mobile",
    };
    const presetKey = modePresetMap[responsiveMode] || "desktop";
    const preset = DEVICE_PRESETS[presetKey];
    return preset || DEVICE_PRESETS.desktop;
  }, [responsiveMode, customViewportWidth, customViewportHeight]);

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
    <div ref={containerRef} className={styles.previewPanel}>
      <Block container={{ type: "fluid" }} spacing="md">
        <Row>
          <GridCol md={12}>
            <div
              className={styles.previewPanel__viewport}
              style={{
                maxWidth: `${viewportSize.width}px`,
                maxHeight: `${viewportSize.height}px`,
                width: "100%",
                margin: "0 auto",
                border: "1px solid var(--atomix-border)",
                borderRadius: "var(--atomix-border-radius-md)",
                overflow: "auto",
                boxShadow: "var(--atomix-shadow-lg)",
              }}
            >
              <ComponentShowcase />
            </div>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

import { FC, ReactNode, useState, useRef, useCallback, useEffect } from "react";
import { Block } from "@shohojdhara/atomix";
import { useThemeStudioStore } from "@/stores/themeStudioStore";
import { ThemeToolbar } from "./Toolbar/ThemeToolbar";
import { TokenEditorPanel } from "./TokenEditor/TokenEditorPanel";
import { PreviewPanel } from "./PreviewPanel/PreviewPanel";
import { ColorToolsPanel } from "./ColorTools/ColorToolsPanel";
import styles from "./ThemeStudioLayout.module.scss";

interface ThemeStudioLayoutProps {
  children?: ReactNode;
  onImport?: () => void;
}

export const ThemeStudioLayout: FC<ThemeStudioLayoutProps> = ({ onImport }) => {
  const { splitViewEnabled, panelWidth, setPanelWidth } = useThemeStudioStore();
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      // Clamp between 20% and 80%
      const clampedWidth = Math.max(20, Math.min(80, newWidth));
      setPanelWidth(clampedWidth);
    },
    [isDragging, setPanelWidth],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global mouse event listeners
  useEffect(() => {
    if (isDragging) {
      // Prevent text selection while dragging
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";

      window.addEventListener("mousemove", handleMouseMove, { passive: false });
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mouseleave", handleMouseUp); // Handle mouse leaving window

      return () => {
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mouseleave", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <Block container={{ type: "fluid" }} className="u-pt-1">
      <ThemeToolbar onImport={onImport} />

      <div ref={containerRef} className={styles.themeStudioLayout__content}>
        {splitViewEnabled ? (
          <>
            <div
              className={styles.themeStudioLayout__editor}
              style={{ width: `${panelWidth}%` }}
            >
              <TokenEditorPanel />
            </div>
            <div
              className={styles.themeStudioLayout__divider}
              onMouseDown={handleMouseDown}
              role="separator"
              aria-label="Resize panels"
              aria-orientation="vertical"
              aria-valuemin={20}
              aria-valuemax={80}
              aria-valuenow={panelWidth}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                  e.preventDefault();
                  const step = e.shiftKey ? 10 : 5;
                  const newWidth =
                    e.key === "ArrowLeft"
                      ? Math.max(20, panelWidth - step)
                      : Math.min(80, panelWidth + step);
                  setPanelWidth(newWidth);
                }
              }}
            >
              <div className={styles.themeStudioLayout__dividerHandle} />
            </div>
            <div
              className={styles.themeStudioLayout__preview}
              style={{ width: `${100 - panelWidth}%` }}
            >
              <PreviewPanel />
            </div>
          </>
        ) : (
          <div
            className={styles.themeStudioLayout__editor}
            style={{ width: "100%" }}
          >
            <TokenEditorPanel />
          </div>
        )}
        <ColorToolsPanel />
      </div>
    </Block>
  );
};

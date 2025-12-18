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
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setPanelWidth(newWidth);
    },
    [isDragging, setPanelWidth]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global mouse event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <Block container={{ type: 'fluid' }}>
      <ThemeToolbar onImport={onImport} />

      <div className={styles.themeStudioLayout__content}>
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
              tabIndex={0}
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

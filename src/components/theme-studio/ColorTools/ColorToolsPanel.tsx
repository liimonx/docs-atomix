import { FC, useMemo } from 'react';
import { Button, Icon, Tabs, EdgePanel } from '@shohojdhara/atomix';
import { ContrastChecker } from './ContrastChecker';
import { PaletteGenerator } from './PaletteGenerator';
import { ColorHarmonies } from './ColorHarmonies';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import styles from './ColorToolsPanel.module.scss';

export const ColorToolsPanel: FC = () => {
  const { colorToolsOpen, activeColorTool, setColorToolsOpen, setActiveColorTool } =
    useThemeStudioStore();

  // Map activeColorTool to tab index
  const toolToIndex: Record<string, number> = {
    contrast: 0,
    palette: 1,
    harmonies: 2,
  };

  const activeTabIndex = activeColorTool && toolToIndex[activeColorTool] !== undefined 
    ? toolToIndex[activeColorTool] 
    : 0;

  // Create tabs items for Atomix Tabs component
  const tabItems = useMemo(
    () => [
      {
        id: 'contrast',
        label: 'Contrast',
        content: <ContrastChecker />,
      },
      {
        id: 'palette',
        label: 'Palette',
        content: <PaletteGenerator />,
      },
      {
        id: 'harmonies',
        label: 'Harmonies',
        content: <ColorHarmonies />,
      },
    ],
    []
  );

  const handleTabChange = (index: number) => {
    const tool = tabItems[index]?.id;
    if (tool) {
      setActiveColorTool(tool as 'contrast' | 'palette' | 'harmonies');
    }
  };

  const handleOpenChange = (open: boolean) => {
    setColorToolsOpen(open);
  };

  return (
    <>
      {!colorToolsOpen && (
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => setColorToolsOpen(true)}
          className={styles.colorToolsPanel__toggle}
        >
          <Icon name="Palette" size={16} />
          Color Tools
        </Button>
      )}

      <EdgePanel
        title="Color Tools"
        isOpen={colorToolsOpen}
        onOpenChange={handleOpenChange}
        position="end"
        mode="slide"
        backdrop={false}
        closeOnBackdropClick={false}
        closeOnEscape={true}
        style={{ '--atomix-edge-panel-width': '400px', top: '56px' } as React.CSSProperties}
      >
          <Tabs
            items={tabItems}
            activeIndex={activeTabIndex}
            onTabChange={handleTabChange}
          />
      </EdgePanel>
    </>
  );
};


import { FC, useState, ReactNode, useId } from "react";
import { Button, Icon, Dropdown, Menu, MenuItem } from "@shohojdhara/atomix";
import { useThemeStudioStore } from "@/stores/themeStudioStore";
import { themePresets } from "@/data/themePresets";
import styles from "./PresetSelector.module.scss";

interface DropdownItem {
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "separator";
  disabled?: boolean;
}

export const PresetSelector: FC = () => {
  const { setTheme } = useThemeStudioStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownId = useId();

  const handlePresetSelect = (presetId: string) => {
    const preset = themePresets[presetId];
    if (preset) {
      setTheme(
        {
          light: preset.light,
          dark: preset.dark,
        },
        `Applied ${preset.name} preset`
      );
      setIsOpen(false);
    }
  };

  const dropdownItems: DropdownItem[] = Object.entries(themePresets).map(
    ([id, preset]) => ({
      label: preset.name,
      icon: (
        <div className={styles.presetSelector__preview} aria-hidden="true">
          <div
            className={styles.presetSelector__color}
            style={{
              backgroundColor: preset.light["--atomix-primary"] || "#8b5cf6",
            }}
          />
          <div
            className={styles.presetSelector__color}
            style={{
              backgroundColor: preset.dark["--atomix-primary"] || "#a78bfa",
            }}
          />
        </div>
      ),
      onClick: () => handlePresetSelect(id),
    })
  );

  return (
    <div className={styles.presetSelector}>
      <Dropdown
        id={dropdownId}
        variant="primary"
        isOpen={isOpen}
        onOpenChange={setIsOpen as any}
        trigger="click"
        style={{ width: '200px' }}
        children={
          <Button
            variant="outline-secondary"
            size="sm"
            aria-label="Select theme preset"
            style={{ width: '100%' }}
          >
            <Icon name="Palette" size={16} /> Presets
          </Button>
        }
        menu={
          <Menu
            style={{ width: '200px' }}
            children={dropdownItems.map((item) => (
              <MenuItem key={item.label} onClick={item.onClick}>
                {item.label}
                {item.icon}
              </MenuItem>
            ))}
          />
        }
        placement="bottom-start"
      />
    </div>
  );
};

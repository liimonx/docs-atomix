"use client";

import { FC, useState, useEffect, useRef } from "react";
import {
  Button,
  Icon,
  Dropdown,
  Input,
  Modal,
  Menu,
  MenuItem,
} from "@shohojdhara/atomix";
import { useThemeStudioStore } from "@/stores/themeStudioStore";
import { themePresets } from "@/data/themePresets";
import styles from "./PresetSelector.module.scss";

export const PresetSelector: FC = () => {
  const {
    setTheme,
    customPresets,
    saveCustomPreset,
    loadCustomPresets,
  } = useThemeStudioStore();
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [presetName, setPresetName] = useState("");
  const [presetDescription, setPresetDescription] = useState("");
  const [mounted, setMounted] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Ensure component only renders on client to avoid hydration mismatches
  useEffect(() => {
    setMounted(true);
    loadCustomPresets();
  }, [loadCustomPresets]);

  const handlePresetSelect = (presetId: string) => {
    // Check if it's a custom preset
    if (customPresets[presetId]) {
      const preset = customPresets[presetId];
      setTheme(
        {
          light: preset.light,
          dark: preset.dark,
        },
        `Applied ${preset.name} preset`
      );
      return;
    }

    // Check built-in presets
    const preset = themePresets[presetId];
    if (preset) {
      setTheme(
        {
          light: preset.light,
          dark: preset.dark,
        },
        `Applied ${preset.name} preset`
      );
    }
  };

  const handleSavePreset = () => {
    if (!presetName.trim()) return;

    const id = `custom-${Date.now()}`;
    saveCustomPreset(
      id,
      presetName.trim(),
      presetDescription.trim() || undefined
    );
    setShowSaveModal(false);
    setPresetName("");
    setPresetDescription("");
  };



  const builtInItems = Object.entries(themePresets).map(([id, preset]) => ({
    label: preset.name,
    onClick: () => handlePresetSelect(id),
  }));

  const customItems = Object.entries(customPresets).map(([id, preset]) => ({
    label: `${preset.name} (Custom)`,
    onClick: () => handlePresetSelect(id),
  }));

  const dropdownItems = [
    ...builtInItems,
    ...customItems,
    {
      label: "💾 Save Current Theme",
      onClick: () => {
        setShowSaveModal(true);
        setTimeout(() => nameInputRef.current?.focus(), 100);
      },
    },
  ];

  // Prevent hydration mismatch by only rendering Dropdown on client
  if (!mounted) {
    return (
      <div className={styles.presetSelector}>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Select theme preset"
          className={styles.presetSelector__button}
          disabled
          title="Theme presets"
        >
          <Icon name="Palette" size={14} aria-hidden="true" />
          <span className={styles.presetSelector__text}>Presets</span>
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.presetSelector}>
      <Dropdown
        trigger="click"
        menu={(
          <Menu className={styles.presetSelector__menu}>
            {dropdownItems.map((item) => (
              <MenuItem
                key={item.label}
                children={item.label}
                onClick={item.onClick}
              />
            ))}
          </Menu>
        )}
        placement="bottom-start"
      >
        <Button
          variant="ghost"
          size="sm"
          aria-label="Select theme preset"
          className={styles.presetSelector__button}
          title="Theme presets"
        >
          <Icon name="Palette" size={14} aria-hidden="true" />
          <span className={styles.presetSelector__text}>Presets</span>
        </Button>
      </Dropdown>

      <Modal
        isOpen={showSaveModal}
        onClose={() => {
          setShowSaveModal(false);
          setPresetName("");
          setPresetDescription("");
        }}
        title="Save Custom Preset"
        size="md"
        style={{ position: "fixed"}}
      >
        <div className={`${styles.presetSelector__saveForm} u-d-flex u-flex-col u-gap-4`}>
          <div className="u-d-flex u-flex-col">
            <label className={styles.presetSelector__formLabel}>
              Preset Name *
            </label>
            <div
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === "Enter" && presetName.trim()) {
                  e.preventDefault();
                  handleSavePreset();
                }
              }}
            >
              <Input
                ref={nameInputRef}
                type="text"
                value={presetName}
                onChange={(e) => setPresetName(e.target.value)}
                placeholder="My Custom Theme"
                aria-label="Preset name"
              />
            </div>
          </div>

          <div className="u-d-flex u-flex-col">
            <label className={styles.presetSelector__formLabel}>
              Description (optional)
            </label>
            <div
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (e.key === "Enter" && presetDescription.trim()) {
                  e.preventDefault();
                  handleSavePreset();
                }
              }}
            >
              <Input
                type="text"
                value={presetDescription}
                onChange={(e) => setPresetDescription(e.target.value)}
                placeholder="A brief description of this theme"
                aria-label="Preset description"
              />
            </div>
          </div>

          <div className={`${styles.presetSelector__formActions} u-d-flex u-gap-2 u-justify-content-end`}>
            <Button
              variant="primary"
              onClick={handleSavePreset}
              disabled={!presetName.trim()}
            >
              Save Preset
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => {
                setShowSaveModal(false);
                setPresetName("");
                setPresetDescription("");
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

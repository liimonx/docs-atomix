'use client';

import { FC, useState, ReactNode, useId, useEffect, useRef } from "react";
import { Button, Icon, Dropdown, Input, Modal } from "@shohojdhara/atomix";
import { useThemeStudioStore } from "@/stores/themeStudioStore";
import { themePresets } from "@/data/themePresets";
import styles from "./PresetSelector.module.scss";

export const PresetSelector: FC = () => {
  const {
    setTheme,
    lightTokens,
    darkTokens,
    customPresets,
    saveCustomPreset,
    deleteCustomPreset,
    loadCustomPresets,
  } = useThemeStudioStore();
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [presetName, setPresetName] = useState('');
  const [presetDescription, setPresetDescription] = useState('');
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
    saveCustomPreset(id, presetName.trim(), presetDescription.trim() || undefined);
    setShowSaveModal(false);
    setPresetName('');
    setPresetDescription('');
  };

  const handleDeletePreset = (presetId: string) => {
    if (confirm('Are you sure you want to delete this custom preset?')) {
      deleteCustomPreset(presetId);
    }
  };

  const builtInItems = Object.entries(themePresets).map(
    ([id, preset]) => ({
      label: preset.name,
      onClick: () => handlePresetSelect(id),
    })
  );

  const customItems = Object.entries(customPresets).map(
    ([id, preset]) => ({
      label: `${preset.name} (Custom)`,
      onClick: () => handlePresetSelect(id),
    })
  );

  const dropdownItems = [
    ...builtInItems,
    ...customItems,
    {
      label: '💾 Save Current Theme',
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
          variant="outline-secondary"
          size="sm"
          aria-label="Select theme preset"
          style={{ width: '100%' }}
          disabled
        >
          <Icon name="Palette" size={16} aria-hidden="true" /> Presets
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.presetSelector}>
      <Dropdown
        trigger={
          <Button
            variant="outline-secondary"
            size="sm"
            aria-label="Select theme preset"
            style={{ width: '100%' }}
          >
            <Icon name="Palette" size={16} aria-hidden="true" /> Presets
          </Button>
        }
        items={dropdownItems}
        placement="bottom-start"
      />

      <Modal
        isOpen={showSaveModal}
        onClose={() => {
          setShowSaveModal(false);
          setPresetName('');
          setPresetDescription('');
        }}
        title="Save Custom Preset"
        size="md"
      >
        <div className={styles.presetSelector__saveForm}>
          <div>
            <label className={styles.presetSelector__formLabel}>
              Preset Name *
            </label>
            <Input
              ref={nameInputRef}
              type="text"
              value={presetName}
              onChange={(e) => setPresetName(e.target.value)}
              placeholder="My Custom Theme"
              aria-label="Preset name"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && presetName.trim()) {
                  handleSavePreset();
                }
              }}
            />
          </div>
          
          <div>
            <label className={styles.presetSelector__formLabel}>
              Description (optional)
            </label>
            <Input
              type="text"
              value={presetDescription}
              onChange={(e) => setPresetDescription(e.target.value)}
              placeholder="A brief description of this theme"
              aria-label="Preset description"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && presetName.trim()) {
                  handleSavePreset();
                }
              }}
            />
          </div>

          <div className={styles.presetSelector__formActions}>
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
                setPresetName('');
                setPresetDescription('');
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

import { FC, useMemo } from 'react';
import { Button, Icon, Select, Input, Row, GridCol } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import styles from './ResponsivePreview.module.scss';

const DEVICE_PRESETS = {
  desktop: { width: 1920, height: 1080, label: 'Desktop (1920×1080)' },
  laptop: { width: 1440, height: 900, label: 'Laptop (1440×900)' },
  tablet: { width: 768, height: 1024, label: 'Tablet (768×1024)' },
  'tablet-landscape': { width: 1024, height: 768, label: 'Tablet Landscape (1024×768)' },
  mobile: { width: 375, height: 667, label: 'Mobile (375×667)' },
  'mobile-landscape': { width: 667, height: 375, label: 'Mobile Landscape (667×375)' },
};

export const ResponsivePreview: FC = () => {
  const {
    responsiveMode,
    customViewportWidth,
    customViewportHeight,
    setResponsiveMode,
    setCustomViewportSize,
  } = useThemeStudioStore();

  const currentViewport = useMemo(() => {
    if (responsiveMode === 'custom') {
      return { width: customViewportWidth, height: customViewportHeight };
    }
    // Map store responsiveMode to device presets
    const modePresetMap: Record<string, keyof typeof DEVICE_PRESETS> = {
      'desktop': 'desktop',
      'tablet': 'tablet',
      'mobile': 'mobile',
    };
    const presetKey = modePresetMap[responsiveMode] || 'desktop';
    const preset = DEVICE_PRESETS[presetKey];
    return preset || DEVICE_PRESETS.desktop;
  }, [responsiveMode, customViewportWidth, customViewportHeight]);

  const getCurrentPresetValue = () => {
    if (responsiveMode === 'custom') return 'custom';
    // Find matching preset based on current viewport size
    const matchingPreset = Object.entries(DEVICE_PRESETS).find(
      ([_, preset]) => preset.width === customViewportWidth && preset.height === customViewportHeight
    );
    if (matchingPreset) return matchingPreset[0];
    
    // Fallback: map responsiveMode to closest preset
    if (responsiveMode === 'tablet') return 'tablet';
    if (responsiveMode === 'mobile') return 'mobile';
    return 'desktop';
  };

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const preset = e.target.value;
    if (preset === 'custom') {
      setResponsiveMode('custom');
    } else if (preset in DEVICE_PRESETS) {
      const devicePreset = DEVICE_PRESETS[preset as keyof typeof DEVICE_PRESETS];
      if (devicePreset) {
        // Map preset to responsive mode (store only supports desktop/tablet/mobile/custom)
        let mode: 'desktop' | 'tablet' | 'mobile' = 'desktop';
        if (preset.includes('mobile')) {
          mode = 'mobile';
        } else if (preset.includes('tablet')) {
          mode = 'tablet';
        } else if (preset === 'laptop') {
          mode = 'desktop'; // Laptop maps to desktop mode
        }
        
        // Set viewport size and mode together
        // Use store's setCustomViewportSize but then override the mode
        setCustomViewportSize(devicePreset.width, devicePreset.height);
        // Use store's direct state update to set mode without triggering custom
        useThemeStudioStore.setState({ 
          customViewportWidth: devicePreset.width,
          customViewportHeight: devicePreset.height,
          responsiveMode: mode 
        });
      }
    }
  };

  return (
    <div className={styles.responsivePreview}>
      <div className={styles.responsivePreview__controls}>
        <Row>
          <GridCol md={6}>
            <label className={styles.responsivePreview__label}>
              Device Preset
            </label>
            <Select
              options={[
                { value: 'desktop', label: DEVICE_PRESETS.desktop.label },
                { value: 'laptop', label: DEVICE_PRESETS.laptop.label },
                { value: 'tablet', label: DEVICE_PRESETS.tablet.label },
                { value: 'tablet-landscape', label: DEVICE_PRESETS['tablet-landscape'].label },
                { value: 'mobile', label: DEVICE_PRESETS.mobile.label },
                { value: 'mobile-landscape', label: DEVICE_PRESETS['mobile-landscape'].label },
                { value: 'custom', label: 'Custom Size' },
              ]}
              value={getCurrentPresetValue()}
              onChange={handlePresetChange}
              aria-label="Select device preset"
            />
          </GridCol>
          
          {responsiveMode === 'custom' && (
            <>
              <GridCol md={3}>
                <label className={styles.responsivePreview__label}>
                  Width (px)
                </label>
                <Input
                  type="number"
                  value={customViewportWidth}
                  onChange={(e) => {
                    const width = parseInt(e.target.value, 10);
                    if (!isNaN(width)) {
                      setCustomViewportSize(width, customViewportHeight);
                    }
                  }}
                  min={320}
                  max={3840}
                  aria-label="Custom viewport width"
                />
              </GridCol>
              <GridCol md={3}>
                <label className={styles.responsivePreview__label}>
                  Height (px)
                </label>
                <Input
                  type="number"
                  value={customViewportHeight}
                  onChange={(e) => {
                    const height = parseInt(e.target.value, 10);
                    if (!isNaN(height)) {
                      setCustomViewportSize(customViewportWidth, height);
                    }
                  }}
                  min={240}
                  max={2160}
                  aria-label="Custom viewport height"
                />
              </GridCol>
            </>
          )}
        </Row>
        
        <div className={styles.responsivePreview__info}>
          <Icon name="Monitor" size={16} aria-hidden="true" />
          <span>
            Viewport: {currentViewport.width} × {currentViewport.height}px
          </span>
        </div>
      </div>
    </div>
  );
};


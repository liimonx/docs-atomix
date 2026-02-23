import themeTokensData from './themeTokens.json';

export interface ThemePreset {
  name: string;
  description?: string;
  light: Record<string, string>;
  dark: Record<string, string>;
}

export interface PresetColors {
  primary: string;
  primaryHover: string;
  primaryRgb: string;
  secondary: string;
  secondaryRgb?: string;
  success: string;
  successHover?: string;
  successRgb?: string;
  error: string;
  errorHover?: string;
  errorRgb?: string;
  warning: string;
  warningHover?: string;
  warningRgb?: string;
  info: string;
  infoHover?: string;
  infoRgb?: string;
  bodyBg: string;
  bodyColor: string;
  headingColor: string;
  linkColor?: string;
  linkHoverColor?: string;
  borderColor?: string;
  focusBorderColor?: string;
  // Text emphasis colors
  primaryTextEmphasis?: string;
  secondaryTextEmphasis?: string;
  tertiaryTextEmphasis?: string;
  disabledTextEmphasis?: string;
  // Background subtle colors
  primaryBgSubtle?: string;
  secondaryBgSubtle?: string;
  tertiaryBgSubtle?: string;
  successBgSubtle?: string;
  errorBgSubtle?: string;
  warningBgSubtle?: string;
  infoBgSubtle?: string;
  // Border subtle colors
  primaryBorderSubtle?: string;
  secondaryBorderSubtle?: string;
  successBorderSubtle?: string;
  errorBorderSubtle?: string;
  warningBorderSubtle?: string;
  infoBorderSubtle?: string;
  // Form validation
  formValidColor?: string;
  formInvalidColor?: string;
  formValidBorderColor?: string;
  formInvalidBorderColor?: string;
  // Brand tokens
  brandBgSubtle?: string;
  brandBorderSubtle?: string;
  brandTextEmphasis?: string;
}

const defaultTokens = themeTokensData as {
  light: Record<string, string>;
  dark: Record<string, string>;
};

/**
 * Helper function to convert hex color to RGB string
 */
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0, 0, 0';
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}

/**
 * Helper function to lighten a color (for bg-subtle tokens)
 */
function lightenColor(hex: string, amount: number = 0.95): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  
  const r = Math.min(255, Math.round(parseInt(result[1], 16) + (255 - parseInt(result[1], 16)) * (1 - amount)));
  const g = Math.min(255, Math.round(parseInt(result[2], 16) + (255 - parseInt(result[2], 16)) * (1 - amount)));
  const b = Math.min(255, Math.round(parseInt(result[3], 16) + (255 - parseInt(result[3], 16)) * (1 - amount)));
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/**
 * Helper function to darken a color (for dark mode bg-subtle tokens)
 */
function darkenColor(hex: string, amount: number = 0.2): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  
  const r = Math.max(0, Math.round(parseInt(result[1], 16) * (1 - amount)));
  const g = Math.max(0, Math.round(parseInt(result[2], 16) * (1 - amount)));
  const b = Math.max(0, Math.round(parseInt(result[3], 16) * (1 - amount)));
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

/**
 * Helper function to create a comprehensive theme preset
 */
function createPresetTokens(
  baseTokens: Record<string, string>,
  colors: PresetColors,
  isDark: boolean = false
): Record<string, string> {
  // Generate RGB values if not provided
  const successRgb = colors.successRgb || hexToRgb(colors.success);
  const errorRgb = colors.errorRgb || hexToRgb(colors.error);
  const warningRgb = colors.warningRgb || hexToRgb(colors.warning);
  const infoRgb = colors.infoRgb || hexToRgb(colors.info);
  const secondaryRgb = colors.secondaryRgb || hexToRgb(colors.secondary);

  // Generate hover states if not provided
  const successHover = colors.successHover || colors.success;
  const errorHover = colors.errorHover || colors.error;
  const warningHover = colors.warningHover || colors.warning;
  const infoHover = colors.infoHover || colors.info;

  // Generate text emphasis colors
  const primaryTextEmphasis = colors.primaryTextEmphasis || (isDark ? colors.bodyColor : colors.headingColor);
  const secondaryTextEmphasis = colors.secondaryTextEmphasis || colors.secondary;
  const tertiaryTextEmphasis = colors.tertiaryTextEmphasis || colors.secondary;
  const disabledTextEmphasis = colors.disabledTextEmphasis || colors.secondary;

  // Generate background subtle colors
  const primaryBgSubtle = colors.primaryBgSubtle || (isDark ? darkenColor(colors.primary, 0.8) : lightenColor(colors.primary, 0.95));
  const secondaryBgSubtle = colors.secondaryBgSubtle || (isDark ? darkenColor(colors.secondary, 0.7) : lightenColor(colors.secondary, 0.95));
  const tertiaryBgSubtle = colors.tertiaryBgSubtle || (isDark ? darkenColor(colors.bodyBg, 0.3) : lightenColor(colors.bodyBg, 0.98));
  const successBgSubtle = colors.successBgSubtle || (isDark ? darkenColor(colors.success, 0.8) : lightenColor(colors.success, 0.95));
  const errorBgSubtle = colors.errorBgSubtle || (isDark ? darkenColor(colors.error, 0.8) : lightenColor(colors.error, 0.95));
  const warningBgSubtle = colors.warningBgSubtle || (isDark ? darkenColor(colors.warning, 0.8) : lightenColor(colors.warning, 0.95));
  const infoBgSubtle = colors.infoBgSubtle || (isDark ? darkenColor(colors.info, 0.8) : lightenColor(colors.info, 0.95));
  const brandBgSubtle = colors.brandBgSubtle || primaryBgSubtle;

  // Generate border subtle colors
  const primaryBorderSubtle = colors.primaryBorderSubtle || colors.primary;
  const secondaryBorderSubtle = colors.secondaryBorderSubtle || colors.secondary;
  const successBorderSubtle = colors.successBorderSubtle || colors.success;
  const errorBorderSubtle = colors.errorBorderSubtle || colors.error;
  const warningBorderSubtle = colors.warningBorderSubtle || colors.warning;
  const infoBorderSubtle = colors.infoBorderSubtle || colors.info;
  const brandBorderSubtle = colors.brandBorderSubtle || primaryBorderSubtle;

  // Generate brand text emphasis
  const brandTextEmphasis = colors.brandTextEmphasis || colors.primary;

  // Form validation colors
  const formValidColor = colors.formValidColor || colors.success;
  const formInvalidColor = colors.formInvalidColor || colors.error;
  const formValidBorderColor = colors.formValidBorderColor || colors.success;
  const formInvalidBorderColor = colors.formInvalidBorderColor || colors.error;

  return {
    ...baseTokens,
    // Primary colors
    '--atomix-primary': colors.primary,
    '--atomix-primary-hover': colors.primaryHover,
    '--atomix-primary-rgb': colors.primaryRgb,
    '--atomix-primary-text-emphasis': primaryTextEmphasis,
    '--atomix-primary-bg-subtle': primaryBgSubtle,
    '--atomix-primary-border-subtle': primaryBorderSubtle,
    
    // Secondary colors
    '--atomix-secondary': colors.secondary,
    '--atomix-secondary-rgb': secondaryRgb,
    '--atomix-secondary-text-emphasis': secondaryTextEmphasis,
    '--atomix-secondary-bg-subtle': secondaryBgSubtle,
    '--atomix-secondary-border-subtle': secondaryBorderSubtle,
    
    // Tertiary colors
    '--atomix-tertiary-text-emphasis': tertiaryTextEmphasis,
    '--atomix-tertiary-bg-subtle': tertiaryBgSubtle,
    
    // Success colors
    '--atomix-success': colors.success,
    '--atomix-success-hover': successHover,
    '--atomix-success-rgb': successRgb,
    '--atomix-success-text-emphasis': colors.success,
    '--atomix-success-bg-subtle': successBgSubtle,
    '--atomix-success-border-subtle': successBorderSubtle,
    
    // Error colors
    '--atomix-error': colors.error,
    '--atomix-error-hover': errorHover,
    '--atomix-error-rgb': errorRgb,
    '--atomix-error-text-emphasis': colors.error,
    '--atomix-error-bg-subtle': errorBgSubtle,
    '--atomix-error-border-subtle': errorBorderSubtle,
    
    // Warning colors
    '--atomix-warning': colors.warning,
    '--atomix-warning-hover': warningHover,
    '--atomix-warning-rgb': warningRgb,
    '--atomix-warning-text-emphasis': colors.warning,
    '--atomix-warning-bg-subtle': warningBgSubtle,
    '--atomix-warning-border-subtle': warningBorderSubtle,
    
    // Info colors
    '--atomix-info': colors.info,
    '--atomix-info-hover': infoHover,
    '--atomix-info-rgb': infoRgb,
    '--atomix-info-text-emphasis': colors.info,
    '--atomix-info-bg-subtle': infoBgSubtle,
    '--atomix-info-border-subtle': infoBorderSubtle,
    
    // Body and typography
    '--atomix-body-bg': colors.bodyBg,
    '--atomix-body-color': colors.bodyColor,
    '--atomix-heading-color': colors.headingColor,
    '--atomix-disabled-text-emphasis': disabledTextEmphasis,
    
    // Links
    '--atomix-link-color': colors.linkColor || colors.primary,
    '--atomix-link-hover-color': colors.linkHoverColor || colors.primaryHover,
    '--atomix-link-color-rgb': colors.linkColor ? hexToRgb(colors.linkColor) : colors.primaryRgb,
    '--atomix-link-hover-color-rgb': colors.linkHoverColor
      ? hexToRgb(colors.linkHoverColor)
      : colors.primaryRgb,
    
    // Borders
    '--atomix-border-color': colors.borderColor || baseTokens['--atomix-border-color'],
    '--atomix-focus-border-color': colors.focusBorderColor || colors.primary,
    
    // Brand tokens
    '--atomix-brand-bg-subtle': brandBgSubtle,
    '--atomix-brand-border-subtle': brandBorderSubtle,
    '--atomix-brand-text-emphasis': brandTextEmphasis,
    
    // Form validation
    '--atomix-form-valid-color': formValidColor,
    '--atomix-form-invalid-color': formInvalidColor,
    '--atomix-form-valid-border-color': formValidBorderColor,
    '--atomix-form-invalid-border-color': formInvalidBorderColor,
  };
}

/**
 * Material Design 3 theme preset
 */
const materialLight = createPresetTokens(defaultTokens.light, {
  primary: '#6750A4',
  primaryHover: '#5E40A0',
  primaryRgb: '103, 80, 164',
  secondary: '#625B71',
  success: '#006C4C',
  error: '#BA1A1A',
  warning: '#7C5800',
  info: '#006874',
  bodyBg: '#FFFBFE',
  bodyColor: '#1C1B1F',
  headingColor: '#1C1B1F',
  linkColor: '#6750A4',
  linkHoverColor: '#5E40A0',
  borderColor: '#E6E1E5',
  focusBorderColor: '#6750A4',
});

const materialDark = createPresetTokens(defaultTokens.dark, {
  primary: '#D0BCFF',
  primaryHover: '#E6DDFF',
  primaryRgb: '208, 188, 255',
  secondary: '#CCC2DC',
  success: '#4FD8A0',
  error: '#FFB4AB',
  warning: '#F5C842',
  info: '#4FD8E8',
  bodyBg: '#1C1B1F',
  bodyColor: '#E6E1E5',
  headingColor: '#E6E1E5',
  linkColor: '#D0BCFF',
  linkHoverColor: '#E6DDFF',
  borderColor: '#49454F',
  focusBorderColor: '#D0BCFF',
}, true);

/**
 * Nord theme preset (Arctic-inspired)
 */
const nordLight = createPresetTokens(defaultTokens.light, {
  primary: '#5E81AC',
  primaryHover: '#4C6A8A',
  primaryRgb: '94, 129, 172',
  secondary: '#81A1C1',
  success: '#A3BE8C',
  error: '#BF616A',
  warning: '#EBCB8B',
  info: '#88C0D0',
  bodyBg: '#ECEFF4',
  bodyColor: '#2E3440',
  headingColor: '#2E3440',
  linkColor: '#5E81AC',
  linkHoverColor: '#4C6A8A',
  borderColor: '#D8DEE9',
  focusBorderColor: '#5E81AC',
});

const nordDark = createPresetTokens(defaultTokens.dark, {
  primary: '#81A1C1',
  primaryHover: '#88C0D0',
  primaryRgb: '129, 161, 193',
  secondary: '#5E81AC',
  success: '#A3BE8C',
  error: '#BF616A',
  warning: '#EBCB8B',
  info: '#88C0D0',
  bodyBg: '#2E3440',
  bodyColor: '#ECEFF4',
  headingColor: '#ECEFF4',
  linkColor: '#81A1C1',
  linkHoverColor: '#88C0D0',
  borderColor: '#3B4252',
  focusBorderColor: '#81A1C1',
}, true);

/**
 * Dracula theme preset
 */
const draculaLight = createPresetTokens(defaultTokens.light, {
  primary: '#BD93F9',
  primaryHover: '#A78BFA',
  primaryRgb: '189, 147, 249',
  secondary: '#6272A4',
  success: '#50FA7B',
  error: '#FF5555',
  warning: '#F1FA8C',
  info: '#8BE9FD',
  bodyBg: '#F8F8F2',
  bodyColor: '#282A36',
  headingColor: '#282A36',
  linkColor: '#BD93F9',
  linkHoverColor: '#A78BFA',
  borderColor: '#E6E6E0',
  focusBorderColor: '#BD93F9',
});

const draculaDark = createPresetTokens(defaultTokens.dark, {
  primary: '#BD93F9',
  primaryHover: '#A78BFA',
  primaryRgb: '189, 147, 249',
  secondary: '#6272A4',
  success: '#50FA7B',
  error: '#FF5555',
  warning: '#F1FA8C',
  info: '#8BE9FD',
  bodyBg: '#282A36',
  bodyColor: '#F8F8F2',
  headingColor: '#F8F8F2',
  linkColor: '#BD93F9',
  linkHoverColor: '#A78BFA',
  borderColor: '#44475A',
  focusBorderColor: '#BD93F9',
}, true);

/**
 * GitHub Primer theme preset
 */
const githubLight = createPresetTokens(defaultTokens.light, {
  primary: '#0969DA',
  primaryHover: '#0860CA',
  primaryRgb: '9, 105, 218',
  secondary: '#656D76',
  success: '#1A7F37',
  error: '#CF222E',
  warning: '#9A6700',
  info: '#0969DA',
  bodyBg: '#FFFFFF',
  bodyColor: '#1F2328',
  headingColor: '#1F2328',
  linkColor: '#0969DA',
  linkHoverColor: '#0860CA',
  borderColor: '#D0D7DE',
  focusBorderColor: '#0969DA',
});

const githubDark = createPresetTokens(defaultTokens.dark, {
  primary: '#58A6FF',
  primaryHover: '#79C0FF',
  primaryRgb: '88, 166, 255',
  secondary: '#8B949E',
  success: '#3FB950',
  error: '#F85149',
  warning: '#D29922',
  info: '#58A6FF',
  bodyBg: '#0D1117',
  bodyColor: '#C9D1D9',
  headingColor: '#C9D1D9',
  linkColor: '#58A6FF',
  linkHoverColor: '#79C0FF',
  borderColor: '#30363D',
  focusBorderColor: '#58A6FF',
}, true);

/**
 * Tailwind CSS theme preset
 * Note: These presets are defined but not currently exported in themePresets
 * They can be added to the themePresets object when needed
 */
// const tailwindLight = createPresetTokens(defaultTokens.light, {
//   primary: '#3B82F6',
//   primaryHover: '#2563EB',
//   primaryRgb: '59, 130, 246',
//   secondary: '#6B7280',
//   success: '#10B981',
//   error: '#EF4444',
//   warning: '#F59E0B',
//   info: '#06B6D4',
//   bodyBg: '#FFFFFF',
//   bodyColor: '#111827',
//   headingColor: '#111827',
//   linkColor: '#3B82F6',
//   linkHoverColor: '#2563EB',
//   borderColor: '#E5E7EB',
//   focusBorderColor: '#3B82F6',
// });

// const tailwindDark = createPresetTokens(defaultTokens.dark, {
//   primary: '#60A5FA',
//   primaryHover: '#3B82F6',
//   primaryRgb: '96, 165, 250',
//   secondary: '#9CA3AF',
//   success: '#34D399',
//   error: '#F87171',
//   warning: '#FBBF24',
//   info: '#22D3EE',
//   bodyBg: '#111827',
//   bodyColor: '#F9FAFB',
//   headingColor: '#F9FAFB',
//   linkColor: '#60A5FA',
//   linkHoverColor: '#3B82F6',
//   borderColor: '#374151',
//   focusBorderColor: '#60A5FA',
// }, true);

/**
 * Gets all available preset IDs
 */
export function getPresetIds(): string[] {
  return Object.keys(themePresets);
}

export const themePresets: Record<string, ThemePreset> = {
  atomix: {
    name: 'Atomix Default',
    description: 'The original Atomix design system with purple primary color',
    light: defaultTokens.light,
    dark: defaultTokens.dark,
  },
  material: {
    name: 'Material Design 3',
    description: 'Google\'s Material Design 3 system with purple primary color',
    light: materialLight,
    dark: materialDark,
  },
  nord: {
    name: 'Nord',
    description: 'Arctic-inspired color palette with cool blue tones',
    light: nordLight,
    dark: nordDark,
  },
  dracula: {
    name: 'Dracula',
    description: 'Popular dark theme with vibrant purple and green accents',
    light: draculaLight,
    dark: draculaDark,
  },
  github: {
    name: 'GitHub Primer',
    description: 'GitHub\'s design system with blue primary color',
    light: githubLight,
    dark: githubDark,
  },

} as const;

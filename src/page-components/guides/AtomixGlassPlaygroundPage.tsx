"use client";

import { FC, useState, useCallback, useMemo } from "react";
import {
  AtomixGlass,
  Block,
  Button,
  Badge,
  Card,
  Row,
  GridCol,
  Icon,
} from "@shohojdhara/atomix";

import styles from "./AtomixGlassPlaygroundPage.module.scss";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface GlassConfig {
  displacementScale: number;
  blurAmount: number;
  aberrationIntensity: number;
  saturation: number;
  elasticity: number;
  cornerRadius: number;
  overLight: boolean;
  padding: number;
  mode: "standard" | "shader";
  shaderVariant: "liquidGlass" | "appleFluid" | "premiumGlass" | "liquidMetal";
  enableBorderEffect: boolean;
  enableLiquidBlur: boolean;
}

interface ThemePreset {
  id: string;
  label: string;
  icon: string;
  description: string;
  config: Partial<GlassConfig>;
  cssVars: Record<string, string>;
  badgeVariant?: "primary" | "success" | "warning" | "error" | "info";
}

type PreviewContent = "card" | "button" | "metric" | "text";

// ---------------------------------------------------------------------------
// SCSS / CSS variable theme presets
// These represent the "override Atomix SCSS var theming" dimension
// ---------------------------------------------------------------------------

const THEME_PRESETS: ThemePreset[] = [
  {
    id: "aurora",
    label: "Aurora",
    icon: "Sparkle",
    description: "Vibrant gradient glass with cyan/violet palette",
    badgeVariant: "primary",
    config: {
      displacementScale: 10,
      blurAmount: 3,
      aberrationIntensity: 0.08,
      saturation: 160,
      elasticity: 0.06,
      cornerRadius: 24,
      overLight: false,
      mode: "standard",
      enableBorderEffect: true,
    },
    cssVars: {
      "--glass-background": "rgba(14, 150, 240, 0.08)",
      "--glass-border": "rgba(14, 150, 240, 0.22)",
      "--glass-backdrop-blur": "blur(20px)",
      "--playground-bg-from": "#080e15",
      "--playground-bg-to": "#041d33",
      "--playground-glow-1": "rgba(14, 150, 240, 0.35)",
      "--playground-glow-2": "rgba(147, 51, 234, 0.25)",
      "--playground-glow-3": "rgba(6, 182, 212, 0.2)",
      "--playground-accent": "#0e96f0",
    },
  },
  {
    id: "obsidian",
    label: "Obsidian",
    icon: "DiamondsFour",
    description: "Ultra-dark smoky glass — maximum depth",
    badgeVariant: "info",
    config: {
      displacementScale: 10,
      blurAmount: 4,
      aberrationIntensity: 0.04,
      saturation: 120,
      elasticity: 0.03,
      cornerRadius: 16,
      overLight: false,
      mode: "standard",
      enableBorderEffect: true,
    },
    cssVars: {
      "--glass-background": "rgba(8, 14, 21, 0.55)",
      "--glass-border": "rgba(255, 255, 255, 0.07)",
      "--glass-backdrop-blur": "blur(28px)",
      "--playground-bg-from": "#080e15",
      "--playground-bg-to": "#000000",
      "--playground-glow-1": "rgba(30, 45, 61, 0.6)",
      "--playground-glow-2": "rgba(17, 28, 39, 0.5)",
      "--playground-glow-3": "rgba(7, 13, 20, 0.4)",
      "--playground-accent": "#64748b",
    },
  },
  {
    id: "ember",
    label: "Ember",
    icon: "Fire",
    description: "Warm amber glass with fiery glow accents",
    badgeVariant: "warning",
    config: {
      displacementScale: 70,
      blurAmount: 2,
      aberrationIntensity: 0.1,
      saturation: 170,
      elasticity: 0.08,
      cornerRadius: 20,
      overLight: false,
      mode: "standard",
      enableBorderEffect: true,
    },
    cssVars: {
      "--glass-background": "rgba(213, 158, 46, 0.08)",
      "--glass-border": "rgba(213, 158, 46, 0.28)",
      "--glass-backdrop-blur": "blur(18px)",
      "--playground-bg-from": "#1a0e04",
      "--playground-bg-to": "#0a0600",
      "--playground-glow-1": "rgba(213, 158, 46, 0.35)",
      "--playground-glow-2": "rgba(229, 62, 62, 0.25)",
      "--playground-glow-3": "rgba(180, 90, 20, 0.2)",
      "--playground-accent": "#d69e2e",
    },
  },
  {
    id: "meadow",
    label: "Meadow",
    icon: "Leaf",
    description: "Organic emerald glass — fresh and clean",
    badgeVariant: "success",
    config: {
      displacementScale: 0.5,
      blurAmount: 20,
      aberrationIntensity: 0.06,
      saturation: 145,
      elasticity: 0.05,
      cornerRadius: 28,
      overLight: false,
      mode: "standard",
      enableBorderEffect: true,
    },
    cssVars: {
      "--glass-background": "rgba(56, 161, 105, 0.08)",
      "--glass-border": "rgba(56, 161, 105, 0.25)",
      "--glass-backdrop-blur": "blur(22px)",
      "--playground-bg-from": "#062015",
      "--playground-bg-to": "#030e09",
      "--playground-glow-1": "rgba(56, 161, 105, 0.35)",
      "--playground-glow-2": "rgba(6, 182, 212, 0.2)",
      "--playground-glow-3": "rgba(100, 200, 120, 0.15)",
      "--playground-accent": "#38a169",
    },
  },
  {
    id: "frost",
    label: "Frost",
    icon: "Snowflake",
    description: "Over-light mode — crisp frosted glass on white",
    badgeVariant: "primary",
    config: {
      displacementScale: 0.3,
      blurAmount: 30,
      aberrationIntensity: 0.03,
      saturation: 110,
      elasticity: 0.04,
      cornerRadius: 20,
      overLight: true,
      mode: "standard",
      enableBorderEffect: true,
    },
    cssVars: {
      "--glass-background": "rgba(241, 245, 249, 0.6)",
      "--glass-border": "rgba(226, 232, 240, 0.8)",
      "--glass-backdrop-blur": "blur(30px)",
      "--playground-bg-from": "#e2e8f0",
      "--playground-bg-to": "#f1f5f9",
      "--playground-glow-1": "rgba(99, 179, 237, 0.2)",
      "--playground-glow-2": "rgba(147, 51, 234, 0.1)",
      "--playground-glow-3": "rgba(14, 150, 240, 0.15)",
      "--playground-accent": "#0e96f0",
    },
  },
];

const DEFAULT_CONFIG: GlassConfig = {
  ...THEME_PRESETS[0].config,
} as GlassConfig;

// ---------------------------------------------------------------------------
// Helper: Slider Control
// ---------------------------------------------------------------------------

interface SliderControlProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
  accentColor?: string;
}

const SliderControl: FC<SliderControlProps> = ({
  id,
  label,
  value,
  min,
  max,
  step,
  unit = "",
  onChange,
  accentColor,
}) => {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className={styles.sliderControl}>
      <div className={styles.sliderHeader}>
        <label htmlFor={id} className={styles.sliderLabel}>
          {label}
        </label>
        <span
          className={styles.sliderValue}
          style={accentColor ? { color: accentColor } : undefined}
        >
          {value}
          {unit}
        </span>
      </div>
      <div className={styles.sliderTrack}>
        <div
          className={styles.sliderFill}
          style={{
            width: `${pct}%`,
            ...(accentColor ? { background: accentColor } : {}),
          }}
        />
        <input
          id={id}
          type="range"
          className={styles.sliderInput}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Helper: Toggle Chip
// ---------------------------------------------------------------------------

interface ToggleChipProps {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
}

const ToggleChip: FC<ToggleChipProps> = ({
  id,
  checked,
  onChange,
  children,
}) => (
  <button
    id={id}
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    className={`${styles.toggleChip} ${checked ? styles.toggleChipActive : ""}`}
  >
    <span className={styles.toggleChipDot} aria-hidden="true" />
    {children}
  </button>
);

// ---------------------------------------------------------------------------
// Preview content samples
// ---------------------------------------------------------------------------

const PreviewCardContent: FC<{ accentColor: string }> = ({ accentColor }) => (
  <div className={styles.previewCard}>
    <div className={styles.previewCardHeader}>
      <div
        className={styles.previewDot}
        style={{ background: accentColor }}
        aria-hidden="true"
      />
      <span className={styles.previewCardTitle}>Flux Capacitor</span>
    </div>
    <div className={styles.previewCardBody}>
      <span className={styles.previewMetricLabel}>OUTPUT</span>
      <div className={styles.previewMetricRow}>
        <span className={styles.previewMetricValue}>1.21</span>
        <span
          className={styles.previewMetricUnit}
          style={{ color: accentColor }}
        >
          GW
        </span>
        <span className={styles.previewMetricIcon} aria-hidden="true">
          <Icon name="ChartBar" size={28} />
        </span>
      </div>
    </div>
    <div className={styles.previewCardFooter}>
      <button type="button" className={styles.previewBtn}>
        Diagnostics
      </button>
      <button
        type="button"
        className={styles.previewBtnPrimary}
        style={{ background: accentColor }}
      >
        Engage
      </button>
    </div>
  </div>
);

const PreviewMetricContent: FC<{ accentColor: string }> = ({ accentColor }) => (
  <div className={styles.previewMetric}>
    <Icon
      name="ChartLineUp"
      size={24}
      style={{ color: accentColor }}
      aria-hidden="true"
    />
    <div className={styles.previewMetricBlock}>
      <span className={styles.previewMetricBig}>98.7%</span>
      <span className={styles.previewMetricSmall}>Uptime</span>
    </div>
    <span
      className={styles.previewBadge}
      style={{ borderColor: accentColor, color: accentColor }}
    >
      +2.3%
    </span>
  </div>
);

const PreviewButtonContent: FC<{ accentColor: string }> = ({ accentColor }) => (
  <div className={styles.previewButtons}>
    <button
      type="button"
      className={styles.previewBtnFull}
      style={{ background: accentColor }}
    >
      <Icon name="Lightning" size={16} aria-hidden="true" />
      <span>Launch</span>
    </button>
    <button
      type="button"
      className={styles.previewBtnFullOutline}
      style={{ borderColor: accentColor, color: accentColor }}
    >
      <Icon name="Code" size={16} aria-hidden="true" />
      <span>View Source</span>
    </button>
  </div>
);

const PreviewTextContent: FC = () => (
  <div className={styles.previewText}>
    <p className={styles.previewTextBody}>
      Glass morphism creates a depth illusion by layering translucent surfaces
      with backdrop-filter blur. AtomixGlass makes this effortless.
    </p>
    <span className={styles.previewTextTag}>AtomixGlass · v4</span>
  </div>
);

// ---------------------------------------------------------------------------
// Code snippet generator
// ---------------------------------------------------------------------------

function buildCodeSnippet(cfg: GlassConfig): string {
  const lines: string[] = ["<AtomixGlass"];
  if (cfg.displacementScale !== 0.5)
    lines.push(`  displacementScale={${cfg.displacementScale}}`);
  if (cfg.blurAmount !== 12) lines.push(`  blurAmount={${cfg.blurAmount}}`);
  if (cfg.aberrationIntensity !== 0.05)
    lines.push(`  aberrationIntensity={${cfg.aberrationIntensity}}`);
  if (cfg.saturation !== 140) lines.push(`  saturation={${cfg.saturation}}`);
  if (cfg.elasticity !== 0.05) lines.push(`  elasticity={${cfg.elasticity}}`);
  if (cfg.cornerRadius !== 20)
    lines.push(`  cornerRadius={${cfg.cornerRadius}}`);
  if (cfg.overLight) lines.push(`  overLight={true}`);
  if (cfg.mode !== "standard") lines.push(`  mode="${cfg.mode}"`);
  if (cfg.mode === "shader")
    lines.push(`  shaderVariant="${cfg.shaderVariant}"`);
  if (!cfg.enableBorderEffect) lines.push(`  enableBorderEffect={false}`);
  if (cfg.enableLiquidBlur) lines.push(`  enableLiquidBlur={true}`);
  lines.push(">");
  lines.push("  {children}");
  lines.push("</AtomixGlass>");
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

const AtomixGlassPlaygroundPage: FC = () => {
  const [activePresetId, setActivePresetId] = useState<string>("aurora");
  const [config, setConfig] = useState<GlassConfig>(DEFAULT_CONFIG);
  const [previewContent, setPreviewContent] = useState<PreviewContent>("card");
  const [codeCopied, setCodeCopied] = useState(false);

  const activePreset = useMemo(
    () =>
      THEME_PRESETS.find((p) => p.id === activePresetId) ?? THEME_PRESETS[0],
    [activePresetId],
  );

  const accentColor = activePreset.cssVars["--playground-accent"];

  // Apply a preset — update config & CSS vars
  const applyPreset = useCallback((preset: ThemePreset) => {
    setActivePresetId(preset.id);
    setConfig((prev) => ({ ...prev, ...preset.config }));
  }, []);

  // Patch a single config property
  const patch = useCallback(
    <K extends keyof GlassConfig>(key: K, value: GlassConfig[K]) => {
      setConfig((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const codeSnippet = useMemo(() => buildCodeSnippet(config), [config]);

  const handleCopyCode = useCallback(() => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    });
  }, [codeSnippet]);

  // CSS variable overrides injected as inline style on the root
  const cssVarStyle = useMemo(
    () => activePreset.cssVars as React.CSSProperties,
    [activePreset.cssVars],
  );

  const previewContents: { id: PreviewContent; label: string; icon: string }[] =
    [
      { id: "card", label: "Card", icon: "CreditCard" },
      { id: "metric", label: "Metric", icon: "ChartBar" },
      { id: "button", label: "Buttons", icon: "Mouse" },
      { id: "text", label: "Text", icon: "TextT" },
    ];

  return (
    <div className={styles.root} style={cssVarStyle}>
      {/* ── Two-column split layout ───────────────────────────── */}
      <div className={styles.layout}>
        {/* ── LEFT: Control panel ─────────────────────────────── */}
        <aside className={styles.panel} aria-label="Glass controls">
          {/* Panel header */}
          <div className={styles.panelHeader}>
            <div className={styles.panelHeaderInner}>
              <Icon name="Sliders" size={18} aria-hidden="true" />
              <span className={styles.panelTitle}>Properties</span>
            </div>
            <p className={styles.panelSubtitle}>
              Fine-tune the optical characteristics of your glass surface.
            </p>
          </div>

          {/* Sliders */}
          <div className={styles.panelSection}>
            <SliderControl
              id="pg-displacement"
              label="Displacement Scale"
              value={config.displacementScale}
              min={0}
              max={150}
              step={0.05}
              onChange={(v) => patch("displacementScale", v)}
              accentColor={accentColor}
            />
            <SliderControl
              id="pg-blur"
              label="Blur Amount"
              value={config.blurAmount}
              min={0}
              max={48}
              step={1}
              unit="px"
              onChange={(v) => patch("blurAmount", v)}
              accentColor={accentColor}
            />
            <SliderControl
              id="pg-aberration"
              label="Aberration Intensity"
              value={config.aberrationIntensity}
              min={0}
              max={0.5}
              step={0.01}
              onChange={(v) => patch("aberrationIntensity", v)}
              accentColor={accentColor}
            />
            <SliderControl
              id="pg-saturation"
              label="Saturation"
              value={config.saturation}
              min={60}
              max={250}
              step={5}
              unit="%"
              onChange={(v) => patch("saturation", v)}
              accentColor={accentColor}
            />
            <SliderControl
              id="pg-elasticity"
              label="Elasticity"
              value={config.elasticity}
              min={0}
              max={0.3}
              step={0.005}
              onChange={(v) => patch("elasticity", v)}
              accentColor={accentColor}
            />
            <SliderControl
              id="pg-radius"
              label="Corner Radius"
              value={config.cornerRadius}
              min={0}
              max={48}
              step={1}
              unit="px"
              onChange={(v) => patch("cornerRadius", v)}
              accentColor={accentColor}
            />
          </div>

          {/* Toggle chips */}
          <div className={styles.panelSection}>
            <div className={styles.chipRow}>
              <ToggleChip
                id="pg-overlight"
                checked={config.overLight}
                onChange={(v) => patch("overLight", v)}
              >
                Over-Light
              </ToggleChip>
              <ToggleChip
                id="pg-border"
                checked={config.enableBorderEffect}
                onChange={(v) => patch("enableBorderEffect", v)}
              >
                Border FX
              </ToggleChip>
              <ToggleChip
                id="pg-liquidblur"
                checked={config.enableLiquidBlur}
                onChange={(v) => patch("enableLiquidBlur", v)}
              >
                Liquid Blur
              </ToggleChip>
            </div>
          </div>

          {/* Mode selector */}
          <div className={styles.panelSection}>
            <span className={styles.sectionLabel}>Render Mode</span>
            <div className={styles.modeRow}>
              {(["standard", "shader"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => patch("mode", m)}
                  className={`${styles.modeBtn} ${
                    config.mode === m ? styles.modeBtnActive : ""
                  }`}
                  style={
                    config.mode === m
                      ? { borderColor: accentColor, color: accentColor }
                      : undefined
                  }
                  aria-pressed={config.mode === m}
                >
                  {m === "standard" ? (
                    <Icon name="Drop" size={14} aria-hidden="true" />
                  ) : (
                    <Icon name="MagicWand" size={14} aria-hidden="true" />
                  )}
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>

            {config.mode === "shader" && (
              <div className={styles.shaderVariants}>
                {(
                  [
                    "liquidGlass",
                    "appleFluid",
                    "premiumGlass",
                    "liquidMetal",
                  ] as const
                ).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => patch("shaderVariant", v)}
                    className={`${styles.variantBtn} ${
                      config.shaderVariant === v ? styles.variantBtnActive : ""
                    }`}
                    style={
                      config.shaderVariant === v
                        ? {
                            background: `${accentColor}22`,
                            borderColor: accentColor,
                          }
                        : undefined
                    }
                    aria-pressed={config.shaderVariant === v}
                  >
                    {v}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Generated code */}
          <div className={styles.codeBlock}>
            <div className={styles.codeBlockHeader}>
              <span className={styles.codeBlockTitle}>GENERATED CODE</span>
              <Button
                variant="ghost"
                size="xs"
                onClick={handleCopyCode}
                aria-label="Copy generated JSX"
              >
                <Icon
                  name={codeCopied ? "Check" : "Copy"}
                  size={14}
                  aria-hidden="true"
                />
                {codeCopied ? "Copied!" : "Copy JSX"}
              </Button>
            </div>
            <pre className={styles.code} aria-label="Generated AtomixGlass JSX">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </aside>

        {/* ── RIGHT: Canvas ─────────────────────────────────────── */}
        <main className={styles.canvas} aria-label="Glass preview canvas">
          {/* Ambient background layers */}
          <div className={styles.canvasBg} aria-hidden="true">
            <div className={styles.glow1} />
            <div className={styles.glow2} />
            <div className={styles.glow3} />
            <div className={styles.grid} />
          </div>

          {/* Theme preset pills */}
          <div className={styles.presetBar}>
            {THEME_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset)}
                className={`${styles.presetPill} ${
                  activePresetId === preset.id ? styles.presetPillActive : ""
                }`}
                style={
                  activePresetId === preset.id
                    ? {
                        borderColor: preset.cssVars["--playground-accent"],
                        color: preset.cssVars["--playground-accent"],
                        background: `${preset.cssVars["--playground-accent"]}18`,
                      }
                    : undefined
                }
                aria-pressed={activePresetId === preset.id}
                title={preset.description}
              >
                <Icon
                  name={preset.icon as Parameters<typeof Icon>[0]["name"]}
                  size={14}
                  aria-hidden="true"
                />
                {preset.label}
              </button>
            ))}
          </div>

          {/* Preview content selector */}
          <div className={styles.contentSelector}>
            {previewContents.map((pc) => (
              <button
                key={pc.id}
                type="button"
                onClick={() => setPreviewContent(pc.id)}
                className={`${styles.contentBtn} ${
                  previewContent === pc.id ? styles.contentBtnActive : ""
                }`}
                style={
                  previewContent === pc.id ? { color: accentColor } : undefined
                }
                aria-pressed={previewContent === pc.id}
              >
                <Icon
                  name={pc.icon as Parameters<typeof Icon>[0]["name"]}
                  size={13}
                  aria-hidden="true"
                />
                {pc.label}
              </button>
            ))}
          </div>

          {/* AtomixGlass live preview */}
          <div className={styles.previewWrapper}>
            <AtomixGlass
              displacementScale={config.displacementScale}
              blurAmount={config.blurAmount}
              aberrationIntensity={config.aberrationIntensity}
              saturation={config.saturation}
              elasticity={config.elasticity}
              cornerRadius={config.cornerRadius}
              overLight={config.overLight}
              mode={config.mode}
              shaderVariant={config.shaderVariant}
              enableBorderEffect={config.enableBorderEffect}
              enableLiquidBlur={config.enableLiquidBlur}
              aria-label="Live AtomixGlass preview"
            >
              <div className={styles.previewInner}>
                {previewContent === "card" && (
                  <PreviewCardContent accentColor={accentColor} />
                )}
                {previewContent === "metric" && (
                  <PreviewMetricContent accentColor={accentColor} />
                )}
                {previewContent === "button" && (
                  <PreviewButtonContent accentColor={accentColor} />
                )}
                {previewContent === "text" && <PreviewTextContent />}
              </div>
            </AtomixGlass>
          </div>

          {/* FPS badge */}
          <div className={styles.fpsBadge} aria-label="Live preview indicator">
            <span
              className={styles.fpsDot}
              style={{ background: accentColor }}
              aria-hidden="true"
            />
            LIVE PREVIEW
          </div>

          {/* Zoom hint */}
          <div className={styles.canvasHint}>
            <Icon name="CursorClick" size={14} aria-hidden="true" />
            Hover the glass surface to see liquid interaction
          </div>
        </main>
      </div>

      {/* ── Reference section ─────────────────────────────────── */}
      <Block className="u-pt-8 u-pb-12">
        <div className={styles.referenceHeader}>
          <h2 className={styles.referenceTitle}>SCSS Variable Theming</h2>
          <p className={styles.referenceSubtitle}>
            AtomixGlass integrates with the Atomix SCSS override system. Set
            these CSS custom properties to retheme the glass surface across your
            entire documentation site — no component-level changes required.
          </p>
        </div>

        <Row className="u-mt-2">
          {/* Theme preset cards */}
          {THEME_PRESETS.map((preset) => (
            <GridCol key={preset.id} sm={6} lg={4} xl={4} className="u-mt-4">
              <Card
                className={`u-p-5 ${styles.refCard} ${
                  activePresetId === preset.id ? styles.refCardActive : ""
                }`}
                onClick={() => applyPreset(preset)}
                style={
                  activePresetId === preset.id
                    ? {
                        borderColor: preset.cssVars["--playground-accent"],
                        boxShadow: `0 0 0 1px ${preset.cssVars["--playground-accent"]}, 0 0 20px ${preset.cssVars["--playground-accent"]}22`,
                      }
                    : undefined
                }
              >
                <div className="u-flex u-items-center u-gap-3 u-mb-3">
                  <div
                    className={styles.presetIconBadge}
                    style={{
                      background: `${preset.cssVars["--playground-accent"]}20`,
                      color: preset.cssVars["--playground-accent"],
                    }}
                  >
                    <Icon
                      name={preset.icon as Parameters<typeof Icon>[0]["name"]}
                      size={18}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <span className={styles.presetCardLabel}>
                      {preset.label}
                    </span>
                    {activePresetId === preset.id && (
                      <Badge
                        variant={preset.badgeVariant ?? "primary"}
                        size="sm"
                        className="u-ms-2"
                        label="Active"
                      />
                    )}
                  </div>
                </div>
                <p className={styles.presetCardDesc}>{preset.description}</p>

                <div className={styles.varTable}>
                  {Object.entries(preset.cssVars)
                    .filter(([k]) => k.startsWith("--glass-"))
                    .map(([k, v]) => (
                      <div key={k} className={styles.varRow}>
                        <code className={styles.varKey}>{k}</code>
                        <span className={styles.varVal}>{v}</span>
                      </div>
                    ))}
                </div>
              </Card>
            </GridCol>
          ))}
        </Row>

        {/* CSS variable reference table */}
        <div className={styles.cssVarReference}>
          <h3 className={styles.referenceSubsectionTitle}>
            Available SCSS / CSS Custom Properties
          </h3>
          <div className={styles.refTable}>
            <div className={styles.refTableHeader}>
              <span>Variable</span>
              <span>Default</span>
              <span>Description</span>
            </div>
            {[
              {
                name: "--atomix-glass-radius",
                default: "var(--atomix-radius-md, 16px)",
                desc: "Border radius applied to all glass layers",
              },
              {
                name: "--atomix-glass-transition",
                default: "all 0.15s ease-out",
                desc: "Transition for interactive glass states",
              },
              {
                name: "--atomix-glass-border-width",
                default: "0.09375rem",
                desc: "Border gradient layer thickness",
              },
              {
                name: "--glass-background",
                default: "rgba(255,255,255,0.1)",
                desc: "Custom glass background — override in your theme",
              },
              {
                name: "--glass-border",
                default: "rgba(255,255,255,0.15)",
                desc: "Custom glass border color",
              },
              {
                name: "--glass-backdrop-blur",
                default: "blur(20px)",
                desc: "Backdrop-filter blur value for glass elements",
              },
              {
                name: "--playground-accent",
                default: "#0e96f0",
                desc: "Playground accent / highlight color (custom prop)",
              },
            ].map((row) => (
              <div key={row.name} className={styles.refTableRow}>
                <code className={styles.refTableCode}>{row.name}</code>
                <code className={styles.refTableDefault}>{row.default}</code>
                <span className={styles.refTableDesc}>{row.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SCSS usage snippet */}
        <div className={styles.scssSnippet}>
          <div className={styles.codeBlockHeader}>
            <span className={styles.codeBlockTitle}>SCSS OVERRIDE EXAMPLE</span>
          </div>
          <pre
            className={styles.code}
            aria-label="SCSS variable override example"
          >
            <code>{`// styles/01-settings/_glass-theme.scss
// Override Atomix glass CSS custom properties to retheme globally

:root {
  --glass-background:      rgba(14, 150, 240, 0.08);
  --glass-border:          rgba(14, 150, 240, 0.22);
  --glass-backdrop-blur:   blur(20px);
  --playground-bg-from:    #080e15;
  --playground-bg-to:      #041d33;
  --playground-accent:     #0e96f0;
}

// Dark-mode glass surface variant
[data-theme="dark"] .c-atomix-glass {
  --atomix-glass-radius:   20px;
  --atomix-glass-border-width: 0.09375rem;
}`}</code>
          </pre>
        </div>
      </Block>
    </div>
  );
};

AtomixGlassPlaygroundPage.displayName = "AtomixGlassPlaygroundPage";

export default AtomixGlassPlaygroundPage;

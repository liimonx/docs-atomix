"use client";

import { FC } from "react";
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Callout,
} from "@shohojdhara/atomix";
import Link from "next/link";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsLiveEditorPage: FC = () => {
  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Theme Live Editor"
        subtitle="Real-time theme editing with instant preview"
        text="Edit themes visually or with JSON, see changes instantly, and export your customized theme for use in your application."
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Theme Live Editor Component"
          text="ThemeLiveEditor provides a powerful editing environment with visual controls, JSON editor, live preview, and export capabilities for rapid theme development."
        />

        {/* Overview */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Overview</h2>
              <p className="u-text-secondary-emphasis u-mb-4">
                The ThemeLiveEditor component combines visual editing tools with
                a JSON editor to provide a flexible theme creation experience.
                Changes are reflected instantly in the preview, making it easy
                to experiment and iterate quickly.
              </p>

              <h3 className="u-text-lg u-font-semibold u-mb-3">Key Features</h3>
              <ul className="u-ml-4 u-mb-4">
                <li className="u-mb-2">
                  <strong>Visual Editor</strong> - Edit common properties with
                  color pickers and inputs
                </li>
                <li className="u-mb-2">
                  <strong>JSON Editor</strong> - Advanced editing with syntax
                  highlighting and validation
                </li>
                <li className="u-mb-2">
                  <strong>Live Preview</strong> - Instant updates as you make
                  changes
                </li>
                <li className="u-mb-2">
                  <strong>Export Theme</strong> - Download theme as JSON file
                </li>
                <li className="u-mb-2">
                  <strong>Copy to Clipboard</strong> - Copy theme JSON for quick
                  integration
                </li>
                <li className="u-mb-2">
                  <strong>Syntax Validation</strong> - Real-time error checking
                </li>
                <li className="u-mb-2">
                  <strong>Debounced Updates</strong> - Smooth editing experience
                </li>
              </ul>
            </Card>
          </GridCol>
        </Row>

        {/* Basic Usage */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Basic Usage</h2>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Simple Editor
                </h3>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemeLiveEditor } from '@shohojdhara/atomix/theme/devtools';
import { createTheme } from '@shohojdhara/atomix/theme';

const initialTheme = createTheme({
  name: 'My Theme',
  palette: {
    primary: { main: '#7AFFD7' },
    secondary: { main: '#FF5733' },
  },
});

function App() {
  const handleThemeChange = (newTheme) => {
    console.log('Theme updated:', newTheme);
  };

  return (
    <ThemeLiveEditor
      initialTheme={initialTheme}
      onChange={handleThemeChange}
    />
  );
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  With State Management
                </h3>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { useState } from 'react';

function ThemeBuilder() {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <div>
      <ThemeLiveEditor
        initialTheme={theme}
        onChange={setTheme}
      />
      
      <button onClick={() => saveTheme(theme)}>
        Save Theme
      </button>
    </div>
  );
}`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Props API */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Props API</h2>

              <div className="u-overflow-x-auto">
                <table className="u-w-100">
                  <thead>
                    <tr>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Prop
                      </th>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Type
                      </th>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Default
                      </th>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="u-p-3">
                        <code>initialTheme</code>
                      </td>
                      <td className="u-p-3">
                        <code>Theme</code>
                      </td>
                      <td className="u-p-3">Required</td>
                      <td className="u-p-3">Initial theme to edit</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>onChange</code>
                      </td>
                      <td className="u-p-3">
                        <code>(theme: Theme) =&gt; void</code>
                      </td>
                      <td className="u-p-3">Required</td>
                      <td className="u-p-3">Callback when theme changes</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>className</code>
                      </td>
                      <td className="u-p-3">
                        <code>string</code>
                      </td>
                      <td className="u-p-3">-</td>
                      <td className="u-p-3">Custom CSS class name</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>style</code>
                      </td>
                      <td className="u-p-3">
                        <code>CSSProperties</code>
                      </td>
                      <td className="u-p-3">-</td>
                      <td className="u-p-3">Inline styles object</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Editor Features */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Editor Features</h2>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Visual Editor
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  The visual editor provides intuitive controls for common theme
                  properties:
                </p>
                <ul className="u-ml-4 u-mb-4">
                  <li className="u-mb-2">
                    <strong>Color Pickers</strong> - Visual color selection for
                    palette colors
                  </li>
                  <li className="u-mb-2">
                    <strong>Font Selectors</strong> - Choose from available font
                    families
                  </li>
                  <li className="u-mb-2">
                    <strong>Size Inputs</strong> - Adjust font sizes, spacing,
                    and other numeric values
                  </li>
                  <li className="u-mb-2">
                    <strong>Preset Options</strong> - Quick selection of common
                    values
                  </li>
                </ul>
              </div>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  JSON Editor
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  For advanced editing, switch to JSON mode:
                </p>
                <ul className="u-ml-4 u-mb-4">
                  <li className="u-mb-2">
                    <strong>Syntax Highlighting</strong> - Color-coded JSON for
                    readability
                  </li>
                  <li className="u-mb-2">
                    <strong>Auto-completion</strong> - Suggestions for property
                    names
                  </li>
                  <li className="u-mb-2">
                    <strong>Error Detection</strong> - Real-time validation and
                    error highlighting
                  </li>
                  <li className="u-mb-2">
                    <strong>Format/Beautify</strong> - Auto-format JSON for
                    consistency
                  </li>
                </ul>
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Export Options
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Export your theme in multiple ways:
                </p>
                <ul className="u-ml-4 u-mb-4">
                  <li className="u-mb-2">
                    <strong>Download JSON</strong> - Save theme as a .json file
                  </li>
                  <li className="u-mb-2">
                    <strong>Copy to Clipboard</strong> - Copy theme JSON for
                    quick pasting
                  </li>
                  <li className="u-mb-2">
                    <strong>Generate Code</strong> - Get createTheme() code
                    snippet
                  </li>
                </ul>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Advanced Examples */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">
                Advanced Examples
              </h2>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Theme Builder Application
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Create a complete theme builder with save/load functionality:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { ThemeLiveEditor, ThemePreview } from '@shohojdhara/atomix/theme/devtools';
import { useState } from 'react';

function ThemeBuilderApp() {
  const [theme, setTheme] = useState(defaultTheme);
  const [savedThemes, setSavedThemes] = useState([]);

  const handleSave = () => {
    const themeName = prompt('Enter theme name:');
    if (themeName) {
      setSavedThemes([
        ...savedThemes,
        { name: themeName, theme: theme }
      ]);
    }
  };

  const handleLoad = (savedTheme) => {
    setTheme(savedTheme.theme);
  };

  return (
    <div className="theme-builder">
      <div className="sidebar">
        <h3>Saved Themes</h3>
        {savedThemes.map((saved) => (
          <button
            key={saved.name}
            onClick={() => handleLoad(saved)}
          >
            {saved.name}
          </button>
        ))}
      </div>

      <div className="editor">
        <ThemeLiveEditor
          initialTheme={theme}
          onChange={setTheme}
        />
        <button onClick={handleSave}>Save Theme</button>
      </div>

      <div className="preview">
        <ThemePreview theme={theme} />
      </div>
    </div>
  );
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-6">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Collaborative Editing
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Sync theme changes across multiple users:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`import { useEffect, useState } from 'react';

function CollaborativeThemeEditor({ roomId }) {
  const [theme, setTheme] = useState(defaultTheme);

  // Sync with backend
  useEffect(() => {
    const socket = connectToRoom(roomId);
    
    socket.on('theme-update', (newTheme) => {
      setTheme(newTheme);
    });

    return () => socket.disconnect();
  }, [roomId]);

  const handleChange = (newTheme) => {
    setTheme(newTheme);
    // Broadcast to other users
    broadcastThemeUpdate(roomId, newTheme);
  };

  return (
    <ThemeLiveEditor
      initialTheme={theme}
      onChange={handleChange}
    />
  );
}`}
                  showLineNumbers={true}
                />
              </div>

              <div className="u-mb-4">
                <h3 className="u-text-lg u-font-semibold u-mb-3">
                  Undo/Redo Support
                </h3>
                <p className="u-text-secondary-emphasis u-mb-3">
                  Add undo/redo functionality to the editor:
                </p>
                <EnhancedCodeBlock
                  language="tsx"
                  code={`function ThemeEditorWithHistory() {
  const [history, setHistory] = useState([defaultTheme]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTheme = history[currentIndex];

  const handleChange = (newTheme) => {
    const newHistory = history.slice(0, currentIndex + 1);
    setHistory([...newHistory, newTheme]);
    setCurrentIndex(newHistory.length);
  };

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <div className="controls">
        <button onClick={undo} disabled={currentIndex === 0}>
          Undo
        </button>
        <button onClick={redo} disabled={currentIndex === history.length - 1}>
          Redo
        </button>
      </div>

      <ThemeLiveEditor
        initialTheme={currentTheme}
        onChange={handleChange}
      />
    </div>
  );
}`}
                  showLineNumbers={true}
                />
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Best Practices */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Best Practices</h2>

              <Callout variant="success" className="u-mb-4">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Start with Visual Editor
                </h3>
                <p className="u-text-sm u-m-0">
                  Use the visual editor for quick adjustments to common
                  properties. Switch to JSON mode for advanced customization or
                  bulk edits.
                </p>
              </Callout>

              <Callout variant="info" className="u-mb-4">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Save Frequently
                </h3>
                <p className="u-text-sm u-m-0">
                  Export your theme regularly during development. Use the copy
                  to clipboard feature for quick backups or sharing with team
                  members.
                </p>
              </Callout>

              <Callout variant="warning" className="u-mb-4">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Validate Before Exporting
                </h3>
                <p className="u-text-sm u-m-0">
                  The editor validates syntax in real-time, but always test your
                  exported theme with ThemeInspector to catch any logical errors
                  or accessibility issues.
                </p>
              </Callout>

              <Callout variant="warning" className="u-mb-0">
                <h3 className="u-text-md u-font-semibold u-mb-2">
                  Performance Note
                </h3>
                <p className="u-text-sm u-m-0">
                  Updates are debounced for smooth editing. The onChange
                  callback fires after a short delay to prevent excessive
                  re-renders during rapid typing.
                </p>
              </Callout>
            </Card>
          </GridCol>
        </Row>

        {/* Keyboard Shortcuts */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">
                Keyboard Shortcuts
              </h2>

              <div className="u-overflow-x-auto">
                <table className="u-w-100">
                  <thead>
                    <tr>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Shortcut
                      </th>
                      <th className="u-text-start u-p-3 u-bg-surface-subtle">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="u-p-3">
                        <code>Cmd/Ctrl + S</code>
                      </td>
                      <td className="u-p-3">Export theme</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>Cmd/Ctrl + C</code>
                      </td>
                      <td className="u-p-3">Copy theme JSON to clipboard</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>Cmd/Ctrl + F</code>
                      </td>
                      <td className="u-p-3">Format JSON (in JSON mode)</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>Cmd/Ctrl + Z</code>
                      </td>
                      <td className="u-p-3">Undo (if implemented)</td>
                    </tr>
                    <tr>
                      <td className="u-p-3">
                        <code>Cmd/Ctrl + Shift + Z</code>
                      </td>
                      <td className="u-p-3">Redo (if implemented)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Related Tools */}
        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h2 className="u-text-2xl u-font-bold u-mb-4">Related Tools</h2>
              <p className="u-text-secondary-emphasis u-mb-4">
                Combine ThemeLiveEditor with other devtools:
              </p>
              <div className="u-grid u-gap-3">
                <Link
                  href="/docs/guides/devtools/live-editor-example"
                  className="u-text-primary u-font-medium"
                >
                  ✨ Try Live Editor - Interactive theme editor example
                </Link>
                <Link
                  href="/docs/guides/devtools/preview"
                  className="u-text-primary u-font-medium"
                >
                  → Theme Preview - Preview your edited theme
                </Link>
                <Link
                  href="/docs/guides/devtools/inspector"
                  className="u-text-primary u-font-medium"
                >
                  → Theme Inspector - Validate your theme
                </Link>
                <Link
                  href="/docs/guides/theme-studio"
                  className="u-text-primary u-font-medium"
                >
                  → Theme Studio - Full theme creation environment
                </Link>
                <Link
                  href="/docs/guides/devtools"
                  className="u-text-primary u-font-medium"
                >
                  ← Back to Devtools Overview
                </Link>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

DevtoolsLiveEditorPage.displayName = "DevtoolsLiveEditorPage";

export default DevtoolsLiveEditorPage;

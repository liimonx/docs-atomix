import { FC, useState, useRef, useEffect } from 'react';
import { Button, Icon } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import {
  exportAsJSON,
  exportAsCSS,
  exportAsSCSS,
  exportAsTypeScript,
  exportAsFigma,
  downloadFile,
} from '@/utils/themeTokenUtils';
import styles from './ExportMenu.module.scss';

export const ExportMenu: FC = () => {
  const { lightTokens, darkTokens } = useThemeStudioStore();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleExport = (format: 'json' | 'css' | 'scss' | 'typescript' | 'figma') => {
    let content = '';
    let filename = '';
    let mimeType = '';

    switch (format) {
      case 'json':
        content = exportAsJSON(lightTokens, darkTokens);
        filename = 'theme.json';
        mimeType = 'application/json';
        break;
      case 'css':
        // Export with theme name for ThemeManager compatibility
        content = exportAsCSS(lightTokens, darkTokens, 'custom-theme');
        filename = 'theme.css';
        mimeType = 'text/css';
        break;
      case 'scss':
        content = exportAsSCSS(lightTokens, darkTokens);
        filename = 'theme.scss';
        mimeType = 'text/scss';
        break;
      case 'typescript':
        content = exportAsTypeScript(lightTokens, darkTokens);
        filename = 'theme.ts';
        mimeType = 'text/typescript';
        break;
      case 'figma':
        content = exportAsFigma(lightTokens, darkTokens);
        filename = 'theme.figma.json';
        mimeType = 'application/json';
        break;
    }

    downloadFile(content, filename, mimeType);
    setCopied(format);
    setTimeout(() => setCopied(null), 2000);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(`.${styles.exportMenu__dropdown}`)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  return (
    <div className={styles.exportMenu}>
      <Button
        ref={buttonRef}
        variant="primary"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.exportMenu__button}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Export theme"
      >
        <Icon name="Download" size={16} />
        Export
        <Icon
          name={isOpen ? 'CaretUp' : 'CaretDown'}
          size={14}
          className={styles.exportMenu__caret}
        />
      </Button>
      
      {isOpen && (
        <div className={styles.exportMenu__dropdown} role="menu" aria-label="Export options">
          <button
            onClick={() => handleExport('json')}
            className={styles.exportMenu__item}
            role="menuitem"
            aria-label="Export as JSON"
          >
            <Icon name="FileCode" size={16} />
            <span>JSON</span>
            {copied === 'json' && <Icon name="CheckCircle" size={16} aria-label="Exported" />}
          </button>
          <button
            onClick={() => handleExport('css')}
            className={styles.exportMenu__item}
            role="menuitem"
            aria-label="Export as CSS"
          >
            <Icon name="FileCode" size={16} />
            <span>CSS</span>
            {copied === 'css' && <Icon name="CheckCircle" size={16} aria-label="Exported" />}
          </button>
          <button
            onClick={() => handleExport('scss')}
            className={styles.exportMenu__item}
            role="menuitem"
            aria-label="Export as SCSS"
          >
            <Icon name="FileCode" size={16} />
            <span>SCSS</span>
            {copied === 'scss' && <Icon name="CheckCircle" size={16} aria-label="Exported" />}
          </button>
          <button
            onClick={() => handleExport('typescript')}
            className={styles.exportMenu__item}
            role="menuitem"
            aria-label="Export as TypeScript"
          >
            <Icon name="FileCode" size={16} />
            <span>TypeScript</span>
            {copied === 'typescript' && <Icon name="CheckCircle" size={16} aria-label="Exported" />}
          </button>
          <button
            onClick={() => handleExport('figma')}
            className={styles.exportMenu__item}
            role="menuitem"
            aria-label="Export as Figma Variables"
          >
            <Icon name="FileCode" size={16} />
            <span>Figma Variables</span>
            {copied === 'figma' && <Icon name="CheckCircle" size={16} aria-label="Exported" />}
          </button>
        </div>
      )}
    </div>
  );
};


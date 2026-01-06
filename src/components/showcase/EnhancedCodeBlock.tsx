"use client";

import { FC, useState, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Card,
  Button,
  Icon,
  Tooltip,
  Badge,
  Callout,
} from "@shohojdhara/atomix";
import toast from "react-hot-toast";
import styles from "./EnhancedCodeBlock.module.scss";

interface EnhancedCodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
  highlightLines?: number[];
  title?: string;
  className?: string;
}

// Map common language aliases to Prism language names
const languageMap: Record<string, string> = {
  tsx: "tsx",
  jsx: "jsx",
  ts: "typescript",
  js: "javascript",
  typescript: "typescript",
  javascript: "javascript",
  json: "json",
  css: "css",
  scss: "scss",
  sass: "sass",
  html: "markup",
  xml: "markup",
  bash: "bash",
  shell: "bash",
  sh: "bash",
  yaml: "yaml",
  yml: "yaml",
  md: "markdown",
  markdown: "markdown",
  sql: "sql",
  python: "python",
  py: "python",
  java: "java",
  c: "c",
  cpp: "cpp",
  go: "go",
  rust: "rust",
  php: "php",
  ruby: "ruby",
  swift: "swift",
  kotlin: "kotlin",
};

export const EnhancedCodeBlock: FC<EnhancedCodeBlockProps> = ({
  code,
  language = "typescript",
  showLineNumbers = true,
  startingLineNumber = 1,
  highlightLines = [],
  title,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  // Normalize language name
  const normalizedLanguage = useMemo(() => {
    const lang = language.toLowerCase().trim();
    return languageMap[lang] || lang;
  }, [language]);

  // Format code - remove leading/trailing whitespace but preserve relative indentation
  const formattedCode = useMemo(() => {
    if (!code) return "";

    const lines = code.split("\n");

    // Find minimum indentation (excluding empty lines)
    const nonEmptyLines = lines.filter((line) => line.trim().length > 0);
    if (nonEmptyLines.length === 0) return code;

    const minIndent = Math.min(
      ...nonEmptyLines.map((line) => {
        const match = line.match(/^(\s*)/);
        return match ? match[1].length : 0;
      })
    );

    // Remove common indentation
    if (minIndent > 0) {
      return lines.map((line) => line.slice(minIndent)).join("\n");
    }

    return code;
  }, [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedCode);
      setCopied(true);
      toast.custom(
        (t) => (
          <Callout
            toast
            variant="success"
            glass
            title="Code copied to clipboard!"
            icon={<Icon name="CheckCircle" size={20} />}
            className={t.visible ? "u-opacity-100" : "u-opacity-0"}
            style={{
              transition: "opacity 0.3s ease-in-out",
              minWidth: "300px",
            }}
          >
            <p className="u-m-0 u-fs-sm">
              The code has been copied to your clipboard.
            </p>
          </Callout>
        ),
        {
          duration: 2000,
          position: "top-right",
        }
      );
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.custom(
        (t) => (
          <Callout
            variant="error"
            toast
            glass
            title="Failed to copy code"
            icon={<Icon name="XCircle" size={20} />}
            className={t.visible ? "u-opacity-100" : "u-opacity-0"}
            style={{
              transition: "opacity 0.3s ease-in-out",
              minWidth: "300px",
            }}
          >
            <p className="u-m-0 u-fs-sm">
              Unable to copy code to clipboard. Please try again.
            </p>
          </Callout>
        ),
        {
          duration: 2000,
          position: "top-right",
        }
      );
    }
  };

  // Custom line number renderer with highlighting support
  // const customLineNumberRenderer = (lineNumber: number) => {
  //   const isHighlighted = highlightLines.includes(lineNumber);
  //   return (
  //     <span
  //       style={{
  //         display: "inline-block",
  //         width: "3em",
  //         paddingRight: "1em",
  //         textAlign: "right",
  //         userSelect: "none",
  //         opacity: 0.5,
  //         color: isHighlighted ? "var(--atomix-primary)" : "inherit",
  //         fontWeight: isHighlighted ? "bold" : "normal",
  //       }}
  //     >
  //       {lineNumber}
  //     </span>
  //   );
  // };

  // Custom line renderer for highlighting
  const customLineRenderer = (lineNumber: number) => {
    const isHighlighted = highlightLines.includes(lineNumber);
    return {
      className: isHighlighted ? "highlighted-line" : "",
      style: isHighlighted
        ? {
          backgroundColor: "rgba(139, 92, 246, 0.1)",
          display: "block",
          paddingLeft: "0.5em",
          marginLeft: "-0.5em",
          marginRight: "-0.5em",
          borderLeft: "3px solid var(--atomix-primary)",
        }
        : {},
    };
  };

  return (
    <Card className={`u-p-0  ${className}`} elevation="sm">
      {/* Header */}
      <div className="u-d-flex u-align-items-center u-justify-content-between u-p-3 u-bg-tertiary u-border-b u-border-subtle">
        <div className="u-d-flex u-align-items-center u-gap-3">
          {title && (
            <span className="u-fs-sm u-fw-semibold u-text-primary">
              {title}
            </span>
          )}
          <Badge
            variant="secondary"
            size="sm"
            label={normalizedLanguage.toUpperCase()}
            className="u-fs-xs"
          />
        </div>
        <div className="u-d-flex u-gap-2 u-align-items-center">
          <Tooltip content={copied ? "Copied!" : "Copy code to clipboard"}>
            <Button
              variant={copied ? "success" : "outline-secondary"}
              size="sm"
              onClick={handleCopy}
              aria-label={copied ? "Code copied" : "Copy code"}
              className="u-d-flex u-align-items-center u-gap-2"
            >
              <Icon name={copied ? "CheckCircle" : "Copy"} size="sm" />
              {copied ? "Copied" : "Copy"}
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Code Block */}
      <div
        className={`u-overflow-x-auto ${styles["enhanced-code-block"]}`}
      >
        <SyntaxHighlighter
          language={normalizedLanguage}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          startingLineNumber={startingLineNumber}
          lineNumberStyle={{
            minWidth: "3em",
            paddingRight: "1em",
            textAlign: "right",
            userSelect: "none",
            opacity: 0.5,
            color: "rgba(255, 255, 255, 0.5)",
          }}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.6",
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
            background: "var(--atomix-dark-bg-subtle)",
            borderRadius: 0,
          }}
          lineProps={(lineNumber) => customLineRenderer(lineNumber)}
          codeTagProps={{
            style: {
              fontFamily: "inherit",
            },
          }}
          PreTag="div"
        >
          {formattedCode}
        </SyntaxHighlighter>
      </div>

      {/* Footer with line count */}
      <div className="u-d-flex u-align-items-center u-justify-content-between u-px-3 u-py-2 u-bg-tertiary u-border-t u-border-subtle">
        <span className="u-fs-xs u-text-secondary-emphasis">
          {formattedCode.split("\n").length} line
          {formattedCode.split("\n").length !== 1 ? "s" : ""}
        </span>
        <span className="u-fs-xs u-text-secondary-emphasis">
          {formattedCode.length} characters
        </span>
      </div>
    </Card>
  );
};

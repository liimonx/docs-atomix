import { FC } from "react";
import { useState } from "react";
import { Button, Icon, Tooltip, Card } from "@shohojdhara/atomix";

interface CodeBlockWithCopyProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export const CodeBlockWithCopy: FC<CodeBlockWithCopyProps> = ({
  code,
  language = "typescript",
  title,
  showLineNumbers = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");
  const lineCount = lines.length;

  return (
    <Card className="u-p-0 u-overflow-hidden u-mb-4">
      {(title || language) && (
        <div className="u-flex u-items-center u-justify-between u-p-3 u-bg-tertiary u-border-b u-border-subtle">
          <div className="u-flex u-items-center u-gap-3">
            {title && (
              <span className="u-text-sm u-font-medium u-text-secondary-emphasis">
                {title}
              </span>
            )}
            {language && (
              <span className="u-text-xs u-font-medium u-text-secondary-emphasis u-bg-secondary u-px-2 u-py-1 u-rounded-sm">
                {language}
              </span>
            )}
          </div>
          <div className="u-flex u-gap-2">
            <Tooltip content={copied ? "Copied!" : "Copy to clipboard"}>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={handleCopy}
                aria-label={
                  copied ? "Copied to clipboard" : "Copy to clipboard"
                }
              >
                <Icon name={copied ? "Check" : "Copy"} size="sm" />
              </Button>
            </Tooltip>
          </div>
        </div>
      )}

      <div className="u-p-4 u-bg-secondary u-overflow-x-auto">
        <pre className="u-m-0 u-text-sm" style={{ fontFamily: "monospace" }}>
          {showLineNumbers && (
            <span
              className="u-inline-block u-me-4 u-text-secondary-emphasis u-user-select-none"
              style={{ minWidth: "3ch" }}
            >
              {Array.from({ length: lineCount }, (_, i) => (
                <span key={i} className="u-block">
                  {i + 1}
                </span>
              ))}
            </span>
          )}
          <code
            className={`language-${language}`}
            style={{ fontFamily: "inherit" }}
          >
            {code}
          </code>
        </pre>
      </div>
    </Card>
  );
};

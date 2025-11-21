import React, { useState } from 'react';
import { Button, Icon, Tooltip } from '@shohojdhara/atomix';

interface CodeBlockWithCopyProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export const CodeBlockWithCopy: React.FC<CodeBlockWithCopyProps> = ({
  code,
  language = 'typescript',
  title,
  showLineNumbers = false
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');
  const lineCount = lines.length;

  return (
    <div className="code-block-with-copy">
      {(title || language) && (
        <div className="code-header">
          {title && <span className="code-title">{title}</span>}
          {language && <span className="code-language">{language}</span>}
          <div className="code-actions">
            <Tooltip content={copied ? 'Copied!' : 'Copy to clipboard'}>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={handleCopy}
                aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
              >
                <Icon name={copied ? 'Check' : 'Copy'} size="sm" />
              </Button>
            </Tooltip>
          </div>
        </div>
      )}

      <div className="code-content">
        <pre className={`language-${language}`}>
          {showLineNumbers && (
            <span className="line-numbers">
              {Array.from({ length: lineCount }, (_, i) => (
                <span key={i} className="line-number">
                  {i + 1}
                </span>
              ))}
            </span>
          )}
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
};
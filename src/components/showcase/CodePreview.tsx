import React, { useMemo } from 'react';
import * as Atomix from '@shohojdhara/atomix';

interface CodePreviewProps {
  code: string;
  language: string;
}

/**
 * CodePreview component that attempts to render JSX code as a live preview.
 * Uses a simplified parser to extract and render JSX elements from code strings.
 */
export const CodePreview: React.FC<CodePreviewProps> = ({ code, language }) => {
  const renderedPreview = useMemo(() => {
    if (language !== 'jsx' && language !== 'tsx') {
      return null;
    }

    try {
      // Extract JSX elements from the code
      const jsxElements = extractJSXElements(code);
      
      if (jsxElements.length === 0) {
        return null;
      }

      return jsxElements;
    } catch (error) {
      console.warn('Failed to render code preview:', error);
      return null;
    }
  }, [code, language]);

  if (!renderedPreview) {
    return (
      <div className="u-text-center u-p-8">
        <p className="u-text-secondary-emphasis u-mb-0">
          Live preview is not available for this example. Please refer to the code tab to view the source code.
        </p>
      </div>
    );
  }

  return (
    <div className="u-d-flex u-flex-wrap u-gap-2 u-align-items-center u-justify-content-center">
      {renderedPreview}
    </div>
  );
};

/**
 * Extracts JSX elements from code string and renders them
 */
function extractJSXElements(code: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  
  // Remove comments
  let cleanCode = code
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .trim();

  // Extract JSX from return statements or direct JSX
  // Pattern 1: return (<JSX>);
  const returnMatch = cleanCode.match(/return\s*\(?\s*([\s\S]*?)\s*\)?\s*;?\s*}/);
  if (returnMatch) {
    cleanCode = returnMatch[1].trim();
  }

  // Pattern 2: Direct JSX without function wrapper
  // Find all JSX elements in the code (handle both self-closing and with children)
  // Match patterns like: <Component /> or <Component>content</Component>
  const jsxPattern = /<(\w+)([^>]*?)(\/>|>([\s\S]*?)<\/\1>)/g;
  let match;
  
  while ((match = jsxPattern.exec(cleanCode)) !== null) {
    const componentName = match[1];
    const propsString = match[2] || '';
    const isSelfClosing = match[3] === '/>';
    const children = match[4] || '';
    
    // Get component from Atomix
    const Component = (Atomix as any)[componentName] as React.ComponentType<any>;
    
    if (!Component) {
      continue; // Skip if component not found in Atomix
    }
    
    // Parse props
    const props = parseProps(propsString);
    
    // Render the component
    try {
      if (!isSelfClosing && children.trim()) {
        // Handle text children - remove quotes and trim
        let textChildren = children.trim();
        // Remove surrounding quotes if present
        if ((textChildren.startsWith('"') && textChildren.endsWith('"')) ||
            (textChildren.startsWith("'") && textChildren.endsWith("'"))) {
          textChildren = textChildren.slice(1, -1);
        }
        elements.push(React.createElement(Component, { key: elements.length, ...props }, textChildren));
      } else {
        elements.push(React.createElement(Component, { key: elements.length, ...props }));
      }
    } catch (error) {
      console.warn(`Failed to render ${componentName}:`, error);
    }
  }
  
  return elements;
}

/**
 * Parses props string into an object
 */
function parseProps(propsString: string): Record<string, any> {
  const props: Record<string, any> = {};
  
  if (!propsString.trim()) {
    return props;
  }
  
  // Match prop="value", prop='value', or prop={value} patterns
  // Updated to handle arrays and objects better
  const propPattern = /(\w+)=(["'])([^"']*)\2|(\w+)=\{([^}]+)\}/g;
  let match;
  
  while ((match = propPattern.exec(propsString)) !== null) {
    const propName = match[1] || match[4];
    const propValue = match[3] || match[5];
    
    if (!propName) continue;
    
    // Skip complex props like arrays/objects that can't be easily parsed
    // These will cause errors if not handled properly
    if (propValue && (propValue.includes('[') || propValue.includes('{'))) {
      // For arrays/objects, we can't safely parse them in this simple parser
      // Skip them to avoid errors - components that require these should use preview: null
      continue;
    }
    
    // Convert value types
    if (propValue === 'true') {
      props[propName] = true;
    } else if (propValue === 'false') {
      props[propName] = false;
    } else if (!isNaN(Number(propValue)) && propValue.trim() !== '') {
      props[propName] = Number(propValue);
    } else {
      // Remove quotes if present
      props[propName] = propValue.replace(/^["']|["']$/g, '');
    }
  }
  
  return props;
}


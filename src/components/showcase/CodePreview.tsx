import React, { FC, ComponentType, useMemo } from "react";
import * as Atomix from "@shohojdhara/atomix";

interface CodePreviewProps {
  code: string;
  language: string;
}

/**
 * CodePreview component that attempts to render JSX code as a live preview.
 * Uses a simplified parser to extract and render JSX elements from code strings.
 */
export const CodePreview: FC<CodePreviewProps> = ({ code, language }) => {
  const renderedPreview = useMemo(() => {
    if (language !== "jsx" && language !== "tsx") {
      return null;
    }

    try {
      // Extract JSX elements from the code
      const jsxElements = extractJSXElements(code);

      if (jsxElements.length === 0) {
        if (process.env.NODE_ENV === "development") {
          console.debug(
            "CodePreview: No JSX elements extracted from code:",
            code.substring(0, 100),
          );
        }
        return null;
      }

      if (process.env.NODE_ENV === "development") {
        console.debug(
          "CodePreview: Extracted",
          jsxElements.length,
          "JSX elements",
        );
      }

      return jsxElements;
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.warn("CodePreview: Error extracting JSX elements:", error);
      }
      return null;
    }
  }, [code, language]);

  if (!renderedPreview) {
    return (
      <div className="u-text-center u-p-8">
        <p className="u-text-secondary-emphasis u-mb-0">
          Live preview is not available for this example. Please refer to the
          code tab to view the source code.
        </p>
      </div>
    );
  }

  return (
    <div className="u-flex u-flex-wrap u-gap-2 u-align-items-center u-justify-center">
      {renderedPreview}
    </div>
  );
};

/**
 * Extracts JSX elements from code string and renders them
 */
function extractJSXElements(code: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];

  // Skip if code contains hooks or state management (can't be statically rendered)
  if (
    /\b(useState|useEffect|useCallback|useMemo|useRef|useContext|useReducer|const\s+\[.*\]\s*=)/.test(
      code,
    )
  ) {
    return [];
  }

  // Remove comments and import statements
  let cleanCode = code
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "")
    .replace(/^import\s+.*?from\s+['"].*?['"];?\s*/gm, "")
    .trim();

  // Extract JSX from return statements - improved pattern
  // Pattern 1: return (<JSX>); or return <JSX>;
  // Match return statement and extract content until the closing brace of the function
  // Improved to handle multi-line returns better
  const returnMatch = cleanCode.match(
    /return\s*(\([\s\S]*?\)|[\s\S]*?)(?=\s*;?\s*[}\n]|$)/,
  );
  if (returnMatch) {
    cleanCode = returnMatch[1].trim();
    // Remove outer parentheses if present
    if (cleanCode.startsWith("(") && cleanCode.endsWith(")")) {
      cleanCode = cleanCode.slice(1, -1).trim();
    }
  }

  // Pattern 2: Extract JSX from inside JSX fragments or div wrappers
  // Remove wrapper divs if they only contain JSX elements
  const wrapperMatch = cleanCode.match(/^<div[^>]*>([\s\S]*)<\/div>$/);
  if (wrapperMatch) {
    cleanCode = wrapperMatch[1].trim();
  }

  // Pattern 3: Extract from JSX fragments
  const fragmentMatch = cleanCode.match(/^<>([\s\S]*)<\/>$/);
  if (fragmentMatch) {
    cleanCode = fragmentMatch[1].trim();
  }

  // Find all top-level JSX elements
  // Strategy: Find JSX elements that are not nested inside other JSX
  // We'll process from the start and match JSX elements one by one
  const jsxElements: Array<{
    name: string;
    props: string;
    children: string;
    isSelfClosing: boolean;
    start: number;
  }> = [];
  let pos = 0;

  while (pos < cleanCode.length) {
    // Find the next JSX opening tag (skip whitespace)
    const remainingCode = cleanCode.slice(pos);
    const openTagMatch = remainingCode.match(/<(\w+)([^>]*?)(\/>|>)/);
    if (!openTagMatch) break;

    const componentName = openTagMatch[1];
    const propsString = openTagMatch[2] || "";
    const isSelfClosing = openTagMatch[3] === "/>";
    const tagStart = pos + openTagMatch.index!;
    const tagEnd = tagStart + openTagMatch[0].length;

    if (isSelfClosing) {
      // Self-closing tag
      jsxElements.push({
        name: componentName,
        props: propsString,
        children: "",
        isSelfClosing: true,
        start: tagStart,
      });
      pos = tagEnd;
    } else {
      // Find matching closing tag
      let depth = 1;
      let searchPos = tagEnd;
      let found = false;

      while (searchPos < cleanCode.length && depth > 0) {
        // Look for opening tags of the same component
        const nextOpenPattern = new RegExp(`<${componentName}(?:\\s|>)`, "g");
        nextOpenPattern.lastIndex = searchPos;
        const nextOpenMatch = nextOpenPattern.exec(cleanCode);
        const nextOpen = nextOpenMatch ? nextOpenMatch.index : -1;

        // Look for closing tags
        const nextClose = cleanCode.indexOf(`</${componentName}>`, searchPos);

        if (nextClose === -1) break;

        if (nextOpen !== -1 && nextOpen < nextClose) {
          depth++;
          searchPos = nextOpen + 1;
        } else {
          depth--;
          if (depth === 0) {
            const children = cleanCode.slice(tagEnd, nextClose);
            jsxElements.push({
              name: componentName,
              props: propsString,
              children: children.trim(),
              isSelfClosing: false,
              start: tagStart,
            });
            pos = nextClose + `</${componentName}>`.length;
            found = true;
            break;
          }
          searchPos = nextClose + 1;
        }
      }

      if (!found) {
        // Couldn't find matching closing tag, try to treat as self-closing or skip
        // This might be a fragment or incomplete JSX
        pos = tagEnd;
      }
    }
  }

  // If no elements found with the complex parser, try a simpler fallback
  // This handles cases with simple, flat JSX structures
  if (jsxElements.length === 0) {
    const simplePattern = /<(\w+)([^>]*?)(\/>|>([\s\S]*?)<\/\1>)/g;
    let simpleMatch;
    while ((simpleMatch = simplePattern.exec(cleanCode)) !== null) {
      const componentName = simpleMatch[1];
      const propsString = simpleMatch[2] || "";
      const isSelfClosing = simpleMatch[3] === "/>";
      const children = simpleMatch[4] || "";

      // Only add if it's a top-level element (not already processed)
      const matchStart = simpleMatch.index;
      const isDuplicate = jsxElements.some(
        (el) => Math.abs(el.start - matchStart) < 10,
      );
      if (!isDuplicate) {
        jsxElements.push({
          name: componentName,
          props: propsString,
          children: children.trim(),
          isSelfClosing,
          start: matchStart,
        });
      }
    }
  }

  // Process each found JSX element
  for (const jsxElement of jsxElements) {
    const componentName = jsxElement.name;
    const propsString = jsxElement.props;
    const isSelfClosing = jsxElement.isSelfClosing;
    const children = jsxElement.children;

    // Check if it's an HTML element (lowercase) or React component (PascalCase)
    const isHTMLElement =
      componentName.charAt(0) === componentName.charAt(0).toLowerCase();

    let Component;
    // We should filter props if it's an explicit HTML element OR if the resolved component is a string (e.g. "button")
    let shouldFilterProps = isHTMLElement;

    if (isHTMLElement) {
      // For HTML elements, use the lowercase name directly
      Component = componentName;
    } else {
      // For React components, try to get from Atomix
      Component = (Atomix as any)[componentName] as ComponentType<any>;

      // Skip if component not found in Atomix
      if (!Component) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            `CodePreview: Component "${componentName}" not found in Atomix. Available components:`,
            Object.keys(Atomix).filter((k) => k[0] === k[0].toUpperCase()),
          );
        }
        continue;
      }

      // If the resolved component is a string (e.g. Atomix.Button might be "button"),
      // treat it as an HTML element for prop filtering purposes
      if (typeof Component === "string") {
        shouldFilterProps = true;
      }
    }

    // Parse props
    let props = parseProps(propsString);

    // Special handling for controlled form inputs - convert to uncontrolled
    const formElements = [
      "input",
      "textarea",
      "select",
      "Checkbox",
      "Radio",
      "Switch",
      "Toggle",
    ];
    if (formElements.includes(componentName)) {
      if (
        "checked" in props &&
        !("onChange" in props) &&
        !("readOnly" in props)
      ) {
        props.readOnly = true;
      }
      if (
        "value" in props &&
        !("onChange" in props) &&
        !("readOnly" in props)
      ) {
        props.readOnly = true;
      }
    }

    // For HTML elements (or string components), filter out invalid props and convert valid ones to lowercase
    // Also filter props if Component is a string (DOM element) to ensure no invalid props are passed
    const isDOMElement = typeof Component === "string" || shouldFilterProps;
    if (isDOMElement) {
      const filteredProps: Record<string, any> = {};
      const standardReactProps = new Set([
        "key",
        "ref",
        "children",
        "className",
        "tabIndex",
        "contentEditable",
        "spellCheck",
        "dangerouslySetInnerHTML",
      ]);

      for (const [key, value] of Object.entries(props)) {
        const lowerKey = key.toLowerCase();
        const firstChar = key.charAt(0);
        const isPascalCase =
          firstChar === firstChar.toUpperCase() &&
          firstChar !== firstChar.toLowerCase();

        // CRITICAL: Filter out ALL PascalCase props that are not standard React props or event handlers
        // (e.g., "Button", "Card", "Icon", etc.) - these are invalid for DOM elements
        if (
          isPascalCase &&
          !standardReactProps.has(key) &&
          !(
            key.startsWith("on") &&
            key.length > 2 &&
            key[2] === key[2].toUpperCase()
          )
        ) {
          // Skip invalid PascalCase props like "Icon", "Button", "Card", etc.
          if (process.env.NODE_ENV === "development") {
            console.debug(
              `CodePreview: Filtering out invalid PascalCase prop "${key}" for ${
                typeof Component === "string" ? "DOM element" : "component"
              } "${componentName}"`,
            );
          }
          continue;
        }

        // Keep valid props: lowercase, camelCase React props, data-*, aria-*, and event handlers
        // Convert to lowercase for HTML attributes (except standard React props and event handlers)
        if (standardReactProps.has(key)) {
          filteredProps[key] = value; // Keep camelCase for standard React props
        } else if (
          key.startsWith("on") &&
          key.length > 2 &&
          key[2] === key[2].toUpperCase()
        ) {
          // Event handlers like onClick, onMouseEnter, etc.
          filteredProps[key] = value; // Keep camelCase for event handlers
        } else if (
          key.startsWith("data-") ||
          key.startsWith("aria-") ||
          key === lowerKey // Already lowercase
        ) {
          filteredProps[lowerKey] = value; // Convert to lowercase for HTML attributes
        } else if (!isPascalCase) {
          // Allow other lowercase/camelCase props that aren't PascalCase
          // Convert camelCase to lowercase for HTML attributes
          filteredProps[lowerKey] = value;
        }
        // All other props (including any remaining PascalCase props) are filtered out
      }
      props = filteredProps;
    }

    // Final safety check: Remove any remaining PascalCase props for DOM elements
    // This is a safeguard in case the filtering above missed something
    if (typeof Component === "string") {
      const safeProps: Record<string, any> = {};
      const standardReactProps = new Set([
        "key",
        "ref",
        "children",
        "className",
        "tabIndex",
        "contentEditable",
        "spellCheck",
        "dangerouslySetInnerHTML",
      ]);

      for (const [key, value] of Object.entries(props)) {
        const firstChar = key.charAt(0);
        const isPascalCase =
          firstChar === firstChar.toUpperCase() &&
          firstChar !== firstChar.toLowerCase();

        // Skip PascalCase props that aren't standard React props or event handlers
        if (
          isPascalCase &&
          !standardReactProps.has(key) &&
          !(
            key.startsWith("on") &&
            key.length > 2 &&
            key[2] === key[2].toUpperCase()
          )
        ) {
          if (process.env.NODE_ENV === "development") {
            console.warn(
              `CodePreview: Removing invalid PascalCase prop "${key}" from DOM element "${Component}"`,
            );
          }
          continue;
        }
        safeProps[key] = value;
      }
      props = safeProps;
    }

    // Render the component
    try {
      if (!isSelfClosing && children.trim()) {
        // Check if children contain JSX (nested components)
        // For now, we'll only handle text children or simple nested JSX
        const hasNestedJSX = /<[A-Z]/.test(children);

        if (hasNestedJSX) {
          // Recursively process nested JSX
          const nestedElements = extractJSXElements(children);
          if (nestedElements.length > 0) {
            elements.push(
              React.createElement(
                Component,
                { key: elements.length, ...props },
                ...nestedElements,
              ),
            );
          } else {
            // Fallback: try to render as text
            let textChildren = children.trim();
            if (
              (textChildren.startsWith('"') && textChildren.endsWith('"')) ||
              (textChildren.startsWith("'") && textChildren.endsWith("'"))
            ) {
              textChildren = textChildren.slice(1, -1);
            }
            elements.push(
              React.createElement(
                Component,
                { key: elements.length, ...props },
                textChildren,
              ),
            );
          }
        } else {
          // Handle text children - remove quotes and trim
          let textChildren = children.trim();
          // Remove surrounding quotes if present
          if (
            (textChildren.startsWith('"') && textChildren.endsWith('"')) ||
            (textChildren.startsWith("'") && textChildren.endsWith("'"))
          ) {
            textChildren = textChildren.slice(1, -1);
          }
          elements.push(
            React.createElement(
              Component,
              { key: elements.length, ...props },
              textChildren,
            ),
          );
        }
      } else {
        elements.push(
          React.createElement(Component, { key: elements.length, ...props }),
        );
      }
    } catch (error) {
      // Log error in development for debugging
      if (process.env.NODE_ENV === "development") {
        console.warn(`Failed to render component ${componentName}:`, error);
      }
      // Silently skip components that fail to render
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

  // First, remove any JSX prop values to avoid parsing issues
  // Match prop={<...>...</...>} or prop={<.../>} patterns and replace with placeholders
  let cleanedPropsString = propsString;
  const jsxPropPattern = /(\w+)=\{<[^>]+>.*?<\/[^>]+>|(\w+)=\{<[^>]+\/>\}/g;
  cleanedPropsString = cleanedPropsString.replace(jsxPropPattern, "");

  // Match prop="value", prop='value', prop={value}, or boolean props
  const propPattern =
    /(\w+)=(["'])([^"']*)\2|(\w+)=\{([^}]+)\}|(\w+)(?=\s|$|\/>)/g;
  let match;

  while ((match = propPattern.exec(cleanedPropsString)) !== null) {
    const propName = match[1] || match[4] || match[6];
    const propValue = match[3] || match[5];

    if (!propName) continue;

    // Handle boolean props (no value means true)
    if (!propValue && match[6]) {
      props[propName] = true;
      continue;
    }

    // Skip complex props like arrays/objects that can't be easily parsed
    // These will cause errors if not handled properly
    if (propValue && (propValue.includes("[") || propValue.includes("{"))) {
      // For arrays/objects, we can't safely parse them in this simple parser
      // Skip them to avoid errors - components that require these should use preview: null
      continue;
    }

    // Convert value types
    if (propValue === "true") {
      props[propName] = true;
    } else if (propValue === "false") {
      props[propName] = false;
    } else if (!isNaN(Number(propValue)) && propValue.trim() !== "") {
      props[propName] = Number(propValue);
    } else {
      // Remove quotes if present
      props[propName] = propValue.replace(/^["']|["']$/g, "");
    }
  }

  return props;
}

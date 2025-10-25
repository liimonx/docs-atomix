/**
 * Content parsing utility - simplified version without markdown parsing
 */

export interface ParsedMarkdown {
  title: string;
  content: string;
  sections: ParsedSection[];
  metadata: Record<string, any>;
  codeBlocks: ParsedCodeBlock[];
  tables: ParsedTable[];
  links: ParsedLink[];
}

export interface ParsedSection {
  id: string;
  title: string;
  level: number;
  content: string;
  subsections: ParsedSection[];
}

export interface ParsedCodeBlock {
  language: string;
  code: string;
  title?: string;
  lineNumbers?: boolean;
}

export interface ParsedTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface ParsedLink {
  text: string;
  url: string;
  title?: string;
  isExternal: boolean;
}

/**
 * Simple mock parser that returns basic structure
 */
export function parseMarkdown(content: string): ParsedMarkdown {
  return {
    title: 'Component Documentation',
    content: content,
    sections: [],
    metadata: {},
    codeBlocks: [],
    tables: [],
    links: []
  };
}

/**
 * Convert parsed markdown to ComponentDocumentation format
 */
export function convertToComponentDocumentation(parsed: ParsedMarkdown, componentId: string): any {
  // Return a simple mock object
  return {
    id: componentId,
    name: parsed.title,
    description: 'Component description',
    category: 'Components',
    version: '1.0.0',
    status: 'stable'
  };
}


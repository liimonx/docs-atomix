import { accessSync, constants } from 'fs';
import { resolve } from 'path';

/** Default relative path to the optional markdown documentation repository. */
export const DEFAULT_MARKDOWN_REPO_DIR = 'atomix-doc-in-md';

/** Env var for the docs directory (should contain .md / .mdx files). */
export const MARKDOWN_DOCS_ENV = 'ATOMIX_MARKDOWN_DOCS_PATH';

/** Env var for a git repo URL used by `npm run setup:markdown`. */
export const MARKDOWN_REPO_ENV = 'ATOMIX_MARKDOWN_REPO';

export const MARKDOWN_SETUP_HINT =
  'Clone markdown source into ./atomix-doc-in-md, set ATOMIX_MARKDOWN_DOCS_PATH, or run npm run setup:markdown with ATOMIX_MARKDOWN_REPO set. See README.md.';

/**
 * Resolve the directory that backs `/api/markdown/*`.
 */
export function getMarkdownDocsBasePath(): string {
  const configured = process.env[MARKDOWN_DOCS_ENV];
  if (configured) {
    return resolve(configured);
  }
  return resolve(process.cwd(), DEFAULT_MARKDOWN_REPO_DIR, 'docs');
}

/**
 * Synchronous check used at API request time.
 */
export function isMarkdownDocsAvailable(): boolean {
  try {
    accessSync(getMarkdownDocsBasePath(), constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

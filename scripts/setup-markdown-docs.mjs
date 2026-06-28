#!/usr/bin/env node
/**
 * Optional setup for the markdown documentation source used by /api/markdown/*.
 *
 * Usage:
 *   ATOMIX_MARKDOWN_REPO=https://github.com/you/atomix-doc-in-md npm run setup:markdown
 *   ATOMIX_MARKDOWN_DOCS_PATH=/path/to/docs npm run setup:markdown
 */

import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const docsPath = process.env.ATOMIX_MARKDOWN_DOCS_PATH
  ? resolve(process.env.ATOMIX_MARKDOWN_DOCS_PATH)
  : resolve(projectRoot, 'atomix-doc-in-md', 'docs');

const repoDir = process.env.ATOMIX_MARKDOWN_DOCS_PATH
  ? dirname(docsPath)
  : resolve(projectRoot, 'atomix-doc-in-md');

if (existsSync(docsPath)) {
  console.log(`✅ Markdown docs found at ${docsPath}`);
  process.exit(0);
}

const repo = process.env.ATOMIX_MARKDOWN_REPO;

if (!repo) {
  console.error('❌ Markdown documentation source is not configured.\n');
  console.error('Choose one of the following:\n');
  console.error(`  1. Clone your repo into ${repoDir}`);
  console.error('  2. Set ATOMIX_MARKDOWN_DOCS_PATH to an existing docs directory');
  console.error('  3. Set ATOMIX_MARKDOWN_REPO and run this script again:\n');
  console.error('     ATOMIX_MARKDOWN_REPO=https://github.com/you/atomix-doc-in-md npm run setup:markdown\n');
  process.exit(1);
}

console.log(`Cloning ${repo} → ${repoDir}`);
execSync(`git clone "${repo}" "${repoDir}"`, { stdio: 'inherit', cwd: projectRoot });

if (!existsSync(docsPath)) {
  console.error(`❌ Clone succeeded but docs directory not found at ${docsPath}`);
  console.error('Ensure the repository contains a docs/ folder or set ATOMIX_MARKDOWN_DOCS_PATH.');
  process.exit(1);
}

console.log(`✅ Markdown docs ready at ${docsPath}`);

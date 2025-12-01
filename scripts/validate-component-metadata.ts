#!/usr/bin/env ts-node
/**
 * Component Metadata Validation Script
 * 
 * This script validates component metadata files against:
 * 1. TypeScript type definitions
 * 2. Required field presence
 * 3. Import path validity
 * 4. Consistency checks
 * 
 * Usage: npx ts-node scripts/validate-component-metadata.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ValidationIssue {
  component: string;
  severity: 'error' | 'warning' | 'info';
  field?: string;
  message: string;
}

interface ValidationResult {
  component: string;
  isValid: boolean;
  issues: ValidationIssue[];
}

// Required fields for component metadata
const REQUIRED_FIELDS = [
  'id',
  'name',
  'description',
  'category',
  'status',
  'version',
  'importPath',
  'dependencies',
  'tags',
  'relatedComponents',
  'features',
  'props',
  'examples',
  'accessibility'
];

// Valid status values
const VALID_STATUSES = ['stable', 'beta', 'experimental', 'deprecated'];

// Required accessibility fields
const REQUIRED_ACCESSIBILITY_FIELDS = [
  'keyboardSupport',
  'ariaAttributes',
  'screenReaderSupport',
  'focusManagement'
];

/**
 * Validate a single component metadata file
 */
function validateComponentMetadata(filePath: string): ValidationResult {
  const fileName = path.basename(filePath, '.ts');
  const issues: ValidationIssue[] = [];

  try {
    // Read and parse the file
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Basic checks
    if (!content.includes('export const')) {
      issues.push({
        component: fileName,
        severity: 'error',
        message: 'File does not export a const metadata object'
      });
      return { component: fileName, isValid: false, issues };
    }

    // Check for required export name pattern
    const expectedExportName = `${fileName.replace(/-/g, '')}Metadata`;
    if (!content.includes(`export const ${expectedExportName}`)) {
      issues.push({
        component: fileName,
        severity: 'warning',
        message: `Expected export name '${expectedExportName}' but found different pattern`
      });
    }

    // Check for required fields (basic string matching)
    for (const field of REQUIRED_FIELDS) {
      if (!content.includes(`${field}:`)) {
        issues.push({
          component: fileName,
          severity: 'error',
          field,
          message: `Missing required field: ${field}`
        });
      }
    }

    // Check status value
    const statusMatch = content.match(/status:\s*['"](.*?)['"]/);
    if (statusMatch && !VALID_STATUSES.includes(statusMatch[1])) {
      issues.push({
        component: fileName,
        severity: 'error',
        field: 'status',
        message: `Invalid status value: ${statusMatch[1]}. Must be one of: ${VALID_STATUSES.join(', ')}`
      });
    }

    // Check import path format
    const importPathMatch = content.match(/importPath:\s*['"](.*?)['"]/);
    if (importPathMatch) {
      const importPath = importPathMatch[1];
      if (!importPath.startsWith('@shohojdhara/atomix')) {
        issues.push({
          component: fileName,
          severity: 'error',
          field: 'importPath',
          message: `Import path should start with '@shohojdhara/atomix', found: ${importPath}`
        });
      }
    }

    // Check for examples
    if (content.includes('examples:') && !content.includes('title:')) {
      issues.push({
        component: fileName,
        severity: 'warning',
        field: 'examples',
        message: 'Examples array appears to be empty or missing title fields'
      });
    }

    // Check for props
    if (content.includes('props:') && !content.includes('name:')) {
      issues.push({
        component: fileName,
        severity: 'warning',
        field: 'props',
        message: 'Props array appears to be empty or missing name fields'
      });
    }

    // Check accessibility structure
    if (content.includes('accessibility:')) {
      for (const field of REQUIRED_ACCESSIBILITY_FIELDS) {
        if (!content.includes(`${field}:`)) {
          issues.push({
            component: fileName,
            severity: 'warning',
            field: `accessibility.${field}`,
            message: `Missing accessibility field: ${field}`
          });
        }
      }
    }

    // Check for TypeScript type annotations
    if (!content.includes('as const')) {
      issues.push({
        component: fileName,
        severity: 'info',
        message: "Consider using 'as const' for status field for better type safety"
      });
    }

  } catch (error) {
    issues.push({
      component: fileName,
      severity: 'error',
      message: `Error reading file: ${error instanceof Error ? error.message : String(error)}`
    });
  }

  const isValid = issues.filter(i => i.severity === 'error').length === 0;
  return { component: fileName, isValid, issues };
}

/**
 * Main validation function
 */
function main() {
  const componentsDir = path.join(__dirname, '../src/data/components');
  const files = fs.readdirSync(componentsDir)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts');

  console.log('🔍 Validating Component Metadata Files\n');
  console.log(`Found ${files.length} component files to validate\n`);

  const results: ValidationResult[] = [];
  let totalErrors = 0;
  let totalWarnings = 0;
  let totalInfo = 0;

  for (const file of files) {
    const filePath = path.join(componentsDir, file);
    const result = validateComponentMetadata(filePath);
    results.push(result);

    const errors = result.issues.filter(i => i.severity === 'error').length;
    const warnings = result.issues.filter(i => i.severity === 'warning').length;
    const info = result.issues.filter(i => i.severity === 'info').length;

    totalErrors += errors;
    totalWarnings += warnings;
    totalInfo += info;

    if (result.isValid && result.issues.length === 0) {
      console.log(`✅ ${result.component} - Valid`);
    } else {
      const status = result.isValid ? '⚠️' : '❌';
      console.log(`${status} ${result.component} - ${result.issues.length} issue(s)`);
      
      for (const issue of result.issues) {
        const icon = issue.severity === 'error' ? '  ❌' : issue.severity === 'warning' ? '  ⚠️' : '  ℹ️';
        const field = issue.field ? ` [${issue.field}]` : '';
        console.log(`${icon} ${issue.message}${field}`);
      }
    }
    console.log('');
  }

  // Summary
  console.log('\n📊 Validation Summary\n');
  console.log(`Total Components: ${files.length}`);
  console.log(`Valid: ${results.filter(r => r.isValid && r.issues.length === 0).length}`);
  console.log(`With Issues: ${results.filter(r => !r.isValid || r.issues.length > 0).length}`);
  console.log(`\nTotal Issues:`);
  console.log(`  Errors: ${totalErrors}`);
  console.log(`  Warnings: ${totalWarnings}`);
  console.log(`  Info: ${totalInfo}`);

  if (totalErrors > 0) {
    console.log('\n❌ Validation failed with errors');
    process.exit(1);
  } else if (totalWarnings > 0) {
    console.log('\n⚠️  Validation passed with warnings');
    process.exit(0);
  } else {
    console.log('\n✅ All components validated successfully');
    process.exit(0);
  }
}

// Run if executed directly
main();

export { validateComponentMetadata };
export type { ValidationResult, ValidationIssue };


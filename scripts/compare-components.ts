#!/usr/bin/env ts-node
/**
 * Component Comparison Script
 * 
 * Compares documented components with actual Atomix package exports
 */
/* eslint-disable no-console */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getDocumentedComponents(): string[] {
  const componentsDir = path.join(__dirname, '../src/data/components');
  const files = fs.readdirSync(componentsDir)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts');
  
  return files.map(file => {
    const content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
    const nameMatch = content.match(/name:\s*['"](.*?)['"]/);
    const componentName = nameMatch ? nameMatch[1] : file.replace('.ts', '');
    // Handle name variations: Tab -> Tabs
    if (componentName === 'Tab') return 'Tabs';
    return componentName;
  });
}

function getAtomixExports(): string[] {
  try {
    const indexPath = path.join(__dirname, '../node_modules/@shohojdhara/atomix/dist/index.d.ts');
    const content = fs.readFileSync(indexPath, 'utf-8');
    
    // Find the export statement line - it's all on one line
    const lines = content.split('\n');
    const exportLine = lines.find(line => line.includes('export {') && line.includes('Accordion'));
    
    if (!exportLine) {
      console.error('Could not find export line');
      return [];
    }
    
    // Extract content between braces - handle the full line
    const match = exportLine.match(/export\s+\{([^}]+)\}/);
    if (!match) {
      console.error('Could not match export pattern');
      return [];
    }
    
    const exportContent = match[1];
    const exports = exportContent
      .split(',')
      .map(item => item.trim())
      .filter(item => {
        // Filter out non-component exports
        if (!item || item.length === 0) return false;
        // Component names start with uppercase letter
        const firstChar = item.charAt(0);
        if (!firstChar || firstChar !== firstChar.toUpperCase()) return false;
        // Exclude known non-component exports
        const excludeList = ['composables', 'constants', 'types', 'utils'];
        if (excludeList.some(exclude => item.toLowerCase().includes(exclude.toLowerCase()))) return false;
        // Exclude "atomix as default"
        if (item.includes('atomix as default') || (item === 'atomix' && !item.includes('Atomix'))) return false;
        return true;
      });
    
    return exports;
  } catch (error) {
    console.error('Error reading Atomix exports:', error);
    return [];
  }
}

function main() {
  console.log('🔍 Comparing Documented vs Available Components\n');
  
  const documented = getDocumentedComponents();
  const available = getAtomixExports();
  
  console.log(`📊 Statistics:`);
  console.log(`  Documented: ${documented.length}`);
  console.log(`  Available in Atomix: ${available.length}`);
  console.log(`  Missing Documentation: ${available.length - documented.length}\n`);
  
  // Find documented components
  const documentedSet = new Set(documented);
  const availableSet = new Set(available);
  
  // Components that are documented
  const documentedComponents = available.filter(c => documentedSet.has(c));
  
  // Components available but not documented
  const missingComponents = available.filter(c => !documentedSet.has(c));
  
  // Components documented but not in package (shouldn't happen, but check)
  const extraComponents = documented.filter(c => !availableSet.has(c));
  
  console.log('✅ Documented Components:');
  documentedComponents.forEach(c => console.log(`  - ${c}`));
  
  if (missingComponents.length > 0) {
    console.log(`\n⚠️  Missing Documentation (${missingComponents.length} components):`);
    missingComponents.forEach(c => console.log(`  - ${c}`));
  }
  
  if (extraComponents.length > 0) {
    console.log(`\n❌ Extra Components (documented but not in package):`);
    extraComponents.forEach(c => console.log(`  - ${c}`));
  }
  
  // Priority suggestions
  console.log('\n📋 Priority Suggestions for Documentation:');
  console.log('\nHigh Priority (Common UI Components):');
  const highPriority = ['Icon', 'Grid', 'GridCol', 'Row', 'Container', 'Block', 'Hero', 'SectionIntro', 'Spinner', 'Progress'];
  highPriority.filter(c => missingComponents.includes(c)).forEach(c => console.log(`  - ${c}`));
  
  console.log('\nMedium Priority (Form Components):');
  const mediumPriority = ['Checkbox', 'Radio', 'Select', 'Textarea', 'Toggle', 'Slider', 'DatePicker', 'Upload'];
  mediumPriority.filter(c => missingComponents.includes(c)).forEach(c => console.log(`  - ${c}`));
  
  console.log('\nLower Priority (Specialized Components):');
  const lowerPriority = missingComponents.filter(c => 
    !highPriority.includes(c) && !mediumPriority.includes(c)
  );
  lowerPriority.slice(0, 10).forEach(c => console.log(`  - ${c}`));
  if (lowerPriority.length > 10) {
    console.log(`  ... and ${lowerPriority.length - 10} more`);
  }
}

main();


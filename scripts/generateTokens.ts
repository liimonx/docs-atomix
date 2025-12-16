import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { parseTokensFromSCSS } from '../src/utils/parseTokensFromSCSS.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tokensFilePath = path.join(__dirname, '../src/styles/_tokens.scss');
const atomixCssPath = path.join(__dirname, '../node_modules/@shohojdhara/atomix/dist/atomix.css');
const outputPath = path.join(__dirname, '../src/data/themeTokens.json');

/**
 * Extract all token names from Atomix CSS file
 */
function extractAtomixTokenNames(cssContent: string): Set<string> {
  const tokenNames = new Set<string>();
  // Match all --atomix-* variable declarations
  const regex = /--atomix-([a-zA-Z0-9-]+):/g;
  let match;
  
  while ((match = regex.exec(cssContent)) !== null) {
    const tokenName = `--atomix-${match[1]}`;
    tokenNames.add(tokenName);
  }
  
  return tokenNames;
}

console.log('Generating theme tokens from SCSS...');
console.log(`Reading from: ${tokensFilePath}`);
console.log(`Checking against: ${atomixCssPath}`);

try {
  // Read tokens from _tokens.scss
  const tokensContent = fs.readFileSync(tokensFilePath, 'utf-8');
  const parsedTokens = parseTokensFromSCSS(tokensContent);
  
  // Read Atomix CSS to get valid token names
  const atomixCssContent = fs.readFileSync(atomixCssPath, 'utf-8');
  const validTokenNames = extractAtomixTokenNames(atomixCssContent);
  
  console.log(`Found ${validTokenNames.size} tokens in Atomix CSS`);
  
  // Filter tokens to only include those that exist in Atomix
  const filteredLightTokens = parsedTokens.light.filter(token => 
    validTokenNames.has(token.name)
  );
  
  const filteredDarkTokens = parsedTokens.dark.filter(token => 
    validTokenNames.has(token.name)
  );
  
  // Also include tokens that exist in light but not dark (and vice versa)
  // to ensure we have all tokens that exist in Atomix
  const allValidTokens = new Set([
    ...filteredLightTokens.map(t => t.name),
    ...filteredDarkTokens.map(t => t.name)
  ]);
  
  // Add any missing tokens from Atomix that weren't in _tokens.scss
  // (This ensures we don't miss any tokens)
  const missingLightTokens = parsedTokens.light.filter(token => 
    !allValidTokens.has(token.name) && validTokenNames.has(token.name)
  );
  const missingDarkTokens = parsedTokens.dark.filter(token => 
    !allValidTokens.has(token.name) && validTokenNames.has(token.name)
  );
  
  const finalLightTokens = [...filteredLightTokens, ...missingLightTokens];
  const finalDarkTokens = [...filteredDarkTokens, ...missingDarkTokens];
  
  console.log(`Filtered to ${finalLightTokens.length} light mode tokens`);
  console.log(`Filtered to ${finalDarkTokens.length} dark mode tokens`);
  
  // Convert tokens to a format suitable for the theme studio
  const output = {
    light: finalLightTokens.reduce((acc, token) => {
      acc[token.name] = token.value;
      return acc;
    }, {} as Record<string, string>),
    dark: finalDarkTokens.reduce((acc, token) => {
      acc[token.name] = token.value;
      return acc;
    }, {} as Record<string, string>),
    metadata: {
      light: finalLightTokens.map(token => ({
        name: token.name,
        displayName: token.displayName,
        type: token.type,
        category: token.category
      })),
      dark: finalDarkTokens.map(token => ({
        name: token.name,
        displayName: token.displayName,
        type: token.type,
        category: token.category
      })),
      categories: parsedTokens.categories
    }
  };
  
  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write JSON file
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');
  
  console.log(`✓ Generated ${finalLightTokens.length} light mode tokens`);
  console.log(`✓ Generated ${finalDarkTokens.length} dark mode tokens`);
  console.log(`✓ Generated ${parsedTokens.categories.length} categories`);
  console.log(`✓ Output written to: ${outputPath}`);
  
  // Warn about tokens in _tokens.scss that don't exist in Atomix
  const tokensNotInAtomix = [
    ...parsedTokens.light.filter(t => !validTokenNames.has(t.name)),
    ...parsedTokens.dark.filter(t => !validTokenNames.has(t.name))
  ];
  
  if (tokensNotInAtomix.length > 0) {
    const uniqueMissing = Array.from(new Set(tokensNotInAtomix.map(t => t.name)));
    console.log(`\n⚠ Warning: ${uniqueMissing.length} tokens from _tokens.scss not found in Atomix:`);
    uniqueMissing.slice(0, 10).forEach(name => console.log(`  - ${name}`));
    if (uniqueMissing.length > 10) {
      console.log(`  ... and ${uniqueMissing.length - 10} more`);
    }
  }
} catch (error) {
  console.error('Error generating tokens:', error);
  process.exit(1);
}


import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { parseTokensFromSCSS } from '../src/utils/parseTokensFromSCSS.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tokensFilePath = path.join(__dirname, '../src/styles/_tokens.scss');
const outputPath = path.join(__dirname, '../src/data/themeTokens.json');

console.log('Generating theme tokens from SCSS...');
console.log(`Reading from: ${tokensFilePath}`);

try {
  const content = fs.readFileSync(tokensFilePath, 'utf-8');
  const parsedTokens = parseTokensFromSCSS(content);
  
  // Convert tokens to a format suitable for the theme studio
  const output = {
    light: parsedTokens.light.reduce((acc, token) => {
      acc[token.name] = token.value;
      return acc;
    }, {} as Record<string, string>),
    dark: parsedTokens.dark.reduce((acc, token) => {
      acc[token.name] = token.value;
      return acc;
    }, {} as Record<string, string>),
    metadata: {
      light: parsedTokens.light.map(token => ({
        name: token.name,
        displayName: token.displayName,
        type: token.type,
        category: token.category
      })),
      dark: parsedTokens.dark.map(token => ({
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
  
  console.log(`✓ Generated ${parsedTokens.light.length} light mode tokens`);
  console.log(`✓ Generated ${parsedTokens.dark.length} dark mode tokens`);
  console.log(`✓ Generated ${parsedTokens.categories.length} categories`);
  console.log(`✓ Output written to: ${outputPath}`);
} catch (error) {
  console.error('Error generating tokens:', error);
  process.exit(1);
}


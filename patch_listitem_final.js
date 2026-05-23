const fs = require('fs');
const file = 'src/page-components/components/ComponentGuidelinesPage.tsx';
let contents = fs.readFileSync(file, 'utf8');

// Replace the custom ListItem declaration at the top
contents = contents.replace(/const ListItem = \(\{[^}]+\}\) => \{\n  return <li>\{children\}<\/li>;\n\};\n\n/, '');

fs.writeFileSync(file, contents);

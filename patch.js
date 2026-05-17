const fs = require('fs');
let content = fs.readFileSync('src/page-components/components/ComponentGuidelinesPage.tsx', 'utf-8');
content = `const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <span>{children}</span>;
};\n\n` + content;
fs.writeFileSync('src/page-components/components/ComponentGuidelinesPage.tsx', content);

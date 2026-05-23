const fs = require('fs');
const file = 'src/page-components/components/ComponentGuidelinesPage.tsx';
let contents = fs.readFileSync(file, 'utf8');
contents = `const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li>{children}</li>;
};

` + contents;
fs.writeFileSync(file, contents);

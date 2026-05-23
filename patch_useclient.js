const fs = require('fs');
const file = 'src/page-components/components/ComponentGuidelinesPage.tsx';
let contents = fs.readFileSync(file, 'utf8');

// Remove existing 'use client'
contents = contents.replace(/"use client";\n/g, '');
contents = contents.replace(/'use client';\n/g, '');

// Prepend 'use client'
contents = `"use client";\n\n` + contents;

fs.writeFileSync(file, contents);

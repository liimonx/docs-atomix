#!/bin/bash
sed -i '1s/^/const ListItem = ({ children }: { children: React.ReactNode }) => { return <span>{children}<\/span>; };\n/' src/page-components/components/ComponentGuidelinesPage.tsx

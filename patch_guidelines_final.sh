#!/bin/bash
sed -i 's/<ListItem/<List.Item/g' src/page-components/components/ComponentGuidelinesPage.tsx
sed -i 's/<\/ListItem>/<\/List.Item>/g' src/page-components/components/ComponentGuidelinesPage.tsx
sed -i '1,3d' src/page-components/components/ComponentGuidelinesPage.tsx

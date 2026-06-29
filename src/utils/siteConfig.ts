/** Shared site URLs and metadata constants for the Atomix docs site. */

import packageJson from '../../package.json';

export const SITE_NAME = 'Atomix Documentation';

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://atomix-docs.vercel.app';

/** Next.js file-based OG image route (see app/opengraph-image.tsx). */
export const OG_IMAGE_PATH = '/opengraph-image';

export const OG_IMAGE_URL = `${BASE_URL}${OG_IMAGE_PATH}`;

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export const OG_IMAGE_ALT =
  'Atomix Design System — React component library documentation';

/** Installed @shohojdhara/atomix version from package.json (without range prefix). */
export const ATOMIX_VERSION = (
  packageJson.dependencies['@shohojdhara/atomix'] ?? '0.6.9'
).replace(/^[\^~>=<]*/, '');

export const ATOMIX_VERSION_LABEL = `v${ATOMIX_VERSION}`;

export const SOCIAL_LINKS = {
  github: 'https://github.com/shohojdhara/atomix',
  twitter: 'https://twitter.com/shohojdhara',
  discord: 'https://discord.gg/atomix',
  npm: 'https://www.npmjs.com/package/@shohojdhara/atomix',
  storybook: 'https://atomix-storybook.netlify.app',
} as const;

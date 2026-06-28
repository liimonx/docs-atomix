/** Shared site URLs and metadata constants for the Atomix docs site. */

export const SITE_NAME = 'Atomix Documentation';

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://atomix-docs.vercel.app';

/** Next.js file-based OG image route (see app/opengraph-image.tsx). */
export const OG_IMAGE_PATH = '/opengraph-image';

export const OG_IMAGE_URL = `${BASE_URL}${OG_IMAGE_PATH}`;

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export const OG_IMAGE_ALT = 'Atomix Design System — React component library documentation';

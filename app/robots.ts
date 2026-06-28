// Robots.txt Generation
// =============================================================================

import { MetadataRoute } from 'next';
import { BASE_URL } from '@/utils/siteConfig';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/out/',
          '/static/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/out/',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}


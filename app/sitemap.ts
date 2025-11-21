// Sitemap Generation
// =============================================================================

import { MetadataRoute } from 'next';
import { getAllRoutePaths } from '@/utils/routeMapper';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://atomix-docs.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  // Get all routes from navigation data
  const routes = getAllRoutePaths();

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = [
    // Home page
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Documentation overview
    {
      url: `${BASE_URL}/docs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // All documentation pages
    ...routes.map(path => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path.includes('/components/') ? 0.8 : 0.7,
    })),
  ];

  return sitemapEntries;
}


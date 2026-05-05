import { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yourwebsite.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://yourwebsite.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
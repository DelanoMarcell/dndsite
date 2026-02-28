import { SERVICE_DETAILS } from '@/src/content/siteData';
import { getAbsoluteSiteUrl } from '@/src/lib/site-url';

export const dynamic = 'force-static';

export default function sitemap() {
  const lastModified = new Date();
  const staticRoutes = ['/', '/about/', '/contact/', '/privacy-policy/', '/terms/'];
  const serviceRoutes = Object.keys(SERVICE_DETAILS).map((slug) => `/services/${slug}/`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: getAbsoluteSiteUrl(path),
    lastModified,
  }));
}

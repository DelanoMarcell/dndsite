import { getAbsoluteSiteUrl } from '@/src/lib/site-url';

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: getAbsoluteSiteUrl('/sitemap.xml'),
  };
}

function normalizeOrigin(value) {
  return value.replace(/\/+$/, '');
}

function normalizeBasePath(value) {
  if (!value || value === '/') {
    return '';
  }

  return `/${value.replace(/^\/+|\/+$/g, '')}`;
}

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const rawBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? process.env.PAGES_BASE_PATH?.trim() ?? '';
const siteOrigin = normalizeOrigin(rawSiteUrl || 'https://dndsoftware.co.za');
const siteBasePath = normalizeBasePath(rawBasePath);

export function getAbsoluteSiteUrl(pathname = '/') {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${siteOrigin}${siteBasePath}${normalizedPath}`;
}

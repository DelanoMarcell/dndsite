/** @type {import('next').NextConfig} */
const rawBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? process.env.PAGES_BASE_PATH?.trim() ?? '';
const basePath =
  rawBasePath && rawBasePath !== '/'
    ? `/${rawBasePath.replace(/^\/+|\/+$/g, '')}`
    : undefined;

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
};

export default nextConfig;

import { notFound } from 'next/navigation';
import { ServiceDetailPage } from '@/src/components/site-pages';
import { SERVICE_DETAILS } from '@/src/content/siteData';

export function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function Page({ params }) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage {...service} />;
}

import { notFound } from 'next/navigation';
import { ServiceDetailPage } from '@/src/components/site-pages';
import { SERVICE_DETAILS } from '@/src/content/siteData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];

  if (!service) {
    return {
      title: 'Service Not Found | DnD Software',
      description: 'The requested service page could not be found.',
    };
  }

  return {
    title: `${service.eyebrow} | DnD Software`,
    description: service.summary,
  };
}

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

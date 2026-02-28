import { LegalPage } from '@/src/components/site-pages';

export const metadata = {
  title: 'Terms of Service | DnD Software',
  description:
    'Review DnD Software terms of service, including commercial terms, scope, responsibilities, and delivery commitments.',
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      body="Commercial terms, service scope, responsibilities, and delivery commitments are agreed formally before any project work begins."
    />
  );
}

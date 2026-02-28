import { LegalPage } from '@/src/components/site-pages';

export const metadata = {
  title: 'Privacy Policy | DnD Software',
  description:
    'Read the DnD Software privacy policy covering how information is used for service delivery, communication, and compliance.',
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      body="DnD Software processes information responsibly and uses client data only for agreed service delivery, communication, and compliance requirements."
    />
  );
}

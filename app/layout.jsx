import './globals.css';
import SiteLayoutClient from '@/src/components/site-layout-client';

export const metadata = {
  title: 'DnD Software',
  description: 'DnD Software main website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteLayoutClient>{children}</SiteLayoutClient>
      </body>
    </html>
  );
}

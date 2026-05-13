import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LOGVITRIN',
  description: 'Mobile-first warehouse operations workspace',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

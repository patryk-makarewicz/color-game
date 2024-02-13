import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { dir } from 'i18next';

import { languages } from '@/i18n/settings';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Color Game App',
  description: 'A Color Game App (PWA) to learn names of colors.',
  category: 'game',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'nextjs13', 'next13', 'pwa', 'next-pwa'],
  authors: [
    { name: 'Patryk Makarewicz' },
    {
      name: 'Patryk Makarewicz',
      url: 'https://www.linkedin.com/XYZ'
    }
  ],
  icons: [
    { rel: 'apple-touch-icon', url: 'pwa/apple-touch-icon.png' },
    { rel: 'icon', url: 'pwa/favicon-32x32.png' }
  ]
};

export const viewport: Viewport = {
  themeColor: [{ color: '#262626' }],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
  userScalable: false
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

const RootLayout = ({ children, params: { lng } }: RootLayoutProps) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { ReactQueryProvider } from '@/providers/reactQueryProvider';
import { dir } from 'i18next';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Color Game App',
  description: 'A Color Game App (PWA) to learn names of colors.',
  category: 'game',
  generator: 'Next.js',
  manifest: 'manifest.json',
  keywords: ['nextjs', 'nextjs13', 'next13', 'pwa', 'next-pwa'],
  authors: [
    { name: 'Patryk Makarewicz' },
    {
      name: 'Patryk Makarewicz',
      url: 'https://www.linkedin.com/XYZ'
    }
  ],
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: 'pwa/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: 'pwa/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: 'pwa/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '256x256', url: 'pwa/android-chrome-256x256.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', url: 'pwa/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '150x150', url: 'pwa/mstile-150x150.png' },
    { rel: 'mask-icon', url: 'pwa/safari-pinned-tab.svg' }
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
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;

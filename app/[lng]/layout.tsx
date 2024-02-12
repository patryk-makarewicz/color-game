import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Color Game App',
  description: 'A Color Game App (PWA) to learn names of colors.',
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
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
  userScalable: false
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

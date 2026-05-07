import React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import '../styles/index.css';
import { organizationSchema } from '@/lib/schema/organization';
import { websiteSchema } from '@/lib/schema/website';
import WhatsAppButton from '@/components/common/WhatsAppButton';

const SITE_URL = 'https://zentranr.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ZENTRANR - Transformación Digital y Consultoría Tecnológica en Lima',
    template: '%s | ZENTRANR',
  },
  description: 'Socios estratégicos en transformación digital. Desarrollo de software personalizado, consultoría tecnológica y soluciones empresariales que generan resultados medibles en Lima, Perú.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: SITE_URL,
    siteName: 'ZENTRANR',
    title: 'ZENTRANR - Transformación Digital y Consultoría Tecnológica',
    description: 'Socios estratégicos en transformación digital. Desarrollo de software personalizado y consultoría tecnológica en Lima, Perú.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZENTRANR - Transformación Digital y Consultoría Tecnológica',
    description: 'Socios estratégicos en transformación digital. Desarrollo de software personalizado y consultoría tecnológica en Lima, Perú.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppButton />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}

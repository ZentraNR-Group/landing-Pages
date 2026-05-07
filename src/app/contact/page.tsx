import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactInteractive from './components/ContactInteractive';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { contactPageSchema } from '@/lib/schema/pages/contact';

export const metadata: Metadata = {
  title: 'Contacto - Consultoría Tecnológica en Lima',
  description: 'Programe una consulta personalizada con ZENTRANR. Teléfono, email o visítenos en Lima. Consultas ejecutivas, técnicas y de proyecto disponibles.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contacto - ZENTRANR',
    description: 'Programe una consulta personalizada. Múltiples formas de conectar con nuestro equipo en Lima, Perú.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs items={[{ name: 'Contacto', href: '/contact' }]} />
      <div>
        <ContactInteractive />
      </div>
      <Footer />
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </main>
  );
}

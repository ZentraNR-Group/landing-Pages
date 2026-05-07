import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ServiceHero from './components/ServiceHero';
import ServiceOverview from './components/ServiceOverview';
import TechnologyMatrix from './components/TechnologyMatrix';
import ServiceDetails from './components/ServiceDetails';
import ProcessFlow from './components/ProcessFlow';
import ProjectEstimator from './components/ProjectEstimator';
import FAQ from './components/FAQ';
import { servicesFaqSchema } from '@/lib/schema/pages/services';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Servicios de Desarrollo de Software y Consultoría TI en Lima',
  description: 'Desarrollo de software personalizado, consultoría TI, implementación de sistemas y laboratorio de innovación. Transformación digital para empresas en Lima, Perú.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Servicios Tecnológicos - ZENTRANR',
    description: 'Desarrollo de software personalizado, consultoría TI e implementación de sistemas en Lima, Perú.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs items={[{ name: 'Servicios', href: '/services' }]} />

      <main>
        <ServiceHero />
        <ServiceOverview />
        <TechnologyMatrix />
        <ServiceDetails />
        <ProcessFlow />
        <ProjectEstimator />
        <FAQ />
      </main>

      <Footer />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesFaqSchema),
        }}
      />
    </div>
  );
}

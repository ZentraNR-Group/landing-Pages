import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import CultureSection from './components/CultureSection';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Sobre ZENTRANR - Consultoría Tecnológica en Lima, Perú',
  description: 'Conozca a ZENTRANR: consultora tecnológica que combina pensamiento estratégico con excelencia tecnológica para transformar empresas en Perú y Latinoamérica.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Sobre ZENTRANR - Consultoría Tecnológica',
    description: 'Consultora tecnológica en Lima, Perú. Transformación digital con pensamiento estratégico y excelencia técnica.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs items={[{ name: 'Nosotros', href: '/about' }]} />

      <main>
        <HeroSection />
        <MissionSection />
        <CultureSection />
      </main>

      <Footer />
    </div>
  );
}

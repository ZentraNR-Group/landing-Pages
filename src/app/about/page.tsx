import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import CultureSection from './components/CultureSection';

export const metadata: Metadata = {
  title: 'Sobre ZENTRANR - Transformación Digital | ZENTRANR Corporate',
  description: 'Conozca a ZENTRANR: consultora tecnológica que combina pensamiento estratégico con excelencia tecnológica para transformar empresas en Perú y Latinoamérica.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <MissionSection />
        <CultureSection />
      </main>

      <Footer />
    </div>
  );
}
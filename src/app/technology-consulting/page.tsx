import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TechnologyConsultingInteractive from './components/TechnologyConsultingInteractive';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Consultoría Tecnológica y Transformación Digital en Lima',
  description: 'Auditorías tecnológicas, optimización de sistemas y estrategias digitales para empresas en Lima, Perú. Impulse el crecimiento de su negocio con consultoría experta.',
  alternates: {
    canonical: '/technology-consulting',
  },
  openGraph: {
    title: 'Consultoría Tecnológica - ZENTRANR',
    description: 'Auditorías tecnológicas y estrategias de transformación digital para empresas en Lima, Perú.',
    url: '/technology-consulting',
  },
};

export default function TechnologyConsultingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs items={[{ name: 'Consultoría Tecnológica', href: '/technology-consulting' }]} />
      <div>
        <TechnologyConsultingInteractive />
      </div>
      <Footer />
    </main>
  );
}

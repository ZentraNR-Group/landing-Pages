import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HomepageInteractive from './homepage/components/HomepageInteractive';

export const metadata: Metadata = {
  title: 'ZENTRANR - Transformación Digital y Consultoría Tecnológica en Lima, Perú',
  description: 'Socios estratégicos en transformación digital. Desarrollo de software personalizado, consultoría tecnológica y soluciones empresariales que generan resultados medibles en Lima y Latinoamérica.',
};

export default function RootPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HomepageInteractive />
      </main>
      <Footer />
    </>
  );
}

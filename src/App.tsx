import { LightboxProvider } from './store/LightboxContext';
import { Header } from './components/Header';
import { Lightbox } from './components/Lightbox';
import { Hero } from './sections/Hero';
import { Work } from './sections/Work';
import { Skills } from './sections/Skills';
import { About } from './sections/About';
import { Footer } from './sections/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  useSmoothScroll();

  return (
    <LightboxProvider>
      <span className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
      </main>
      <Footer />
      <Lightbox />
    </LightboxProvider>
  );
}

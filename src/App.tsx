import Header from './sections/Header';
import Hero from './sections/Hero';
import Servicios from './sections/Servicios';
import Proceso from './sections/Proceso';
import Tecnologias from './sections/Tecnologias';
import Industrias from './sections/Industrias';
import Beneficios from './sections/Beneficios';
import Testimonios from './sections/Testimonios';
import Portafolio from './sections/Portafolio';
import Nosotros from './sections/Nosotros';
import FAQ from './sections/FAQ';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-tech-dark">
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Proceso />
        <Tecnologias />
        <Industrias />
        <Beneficios />
        <Testimonios />
        <Portafolio />
        <Nosotros />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

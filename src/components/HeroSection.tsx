import { MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import WaveDivider from './WaveDivider';
import heroImage from '../assets/img_hero.webp';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      role="banner"
      aria-label="Sección principal de Decir Psi"
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-marron/90 to-brand-marron/70" aria-hidden="true"></div>
      
      {/* Elementos decorativos - ajustados para mejor visualización en móvil */}
      <div className="absolute top-20 left-10 w-24 h-24 sm:w-40 sm:h-40 bg-brand-accent/30 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-56 sm:h-56 bg-brand-background/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true"></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 py-16 sm:py-24 md:py-32 relative z-10">
        <div className={`max-w-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 sm:mb-6 text-white drop-shadow-md">
            Atención Psicológica Privada en Buenos Aires
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-brand-secondary mb-4 sm:mb-8 transition-all duration-700 delay-200" style={{ transitionDelay: '100ms' }} aria-hidden="true"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-10 max-w-2xl transition-all duration-700 ease-out" style={{ transitionDelay: '200ms' }}>
            Somos un equipo de psicólogas y psicólogos matriculados con amplia trayectoria clínica.
            Consultas privadas presenciales en CABA y atención online para todo el país.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 text-white/90 text-sm sm:text-base">
            <p>Servicio de atención psicológica privada. No brindamos atención por obra social ni consultas gratuitas.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 text-white/90">
            <p className="text-sm sm:text-base">
              ✓ Profesionales matriculados | ✓ Consultas privadas | ✓ Atención personalizada
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out" style={{ transitionDelay: '400ms' }}>
            <a 
              href="https://wa.me/5491134910754" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center bg-brand-secondary text-brand-primary font-medium py-3 sm:py-2.5 px-6 sm:px-6 rounded-full 
                        shadow-lg hover:shadow-xl transition-all duration-300 
                        transform hover:-translate-y-1 hover:brightness-110 active:translate-y-0 relative overflow-hidden group"
              aria-label="Contactar por WhatsApp para consulta psicológica"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" aria-hidden="true"></span>
              <MessageSquare size={20} className="mr-3 relative z-10" aria-hidden="true" />
              <span className="relative z-10 font-semibold text-base sm:text-base">Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Divisor de onda */}
      <WaveDivider position="bottom" color="#ffffff" />
    </section>
  );
};

export default HeroSection;
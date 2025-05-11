import { MessageSquare } from 'lucide-react';
import { useEffect, useState } from 'react';
import WaveDivider from './WaveDivider';

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
        backgroundImage: `url("https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-chocolate/90 to-brand-marron/70"></div>
      
      {/* Elementos decorativos - ajustados para mejor visualización en móvil */}
      <div className="absolute top-20 left-10 w-24 h-24 sm:w-40 sm:h-40 bg-brand-tierra/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-56 sm:h-56 bg-brand-caramelo/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-brand-beige/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 py-16 sm:py-24 md:py-32 relative z-10">
        <div className={`max-w-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 sm:mb-6 text-white drop-shadow-md">
            Profesionales de la salud mental
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-brand-beige mb-4 sm:mb-8 transition-all duration-700 delay-200" style={{ transitionDelay: '100ms' }}></div>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-10 max-w-2xl transition-all duration-700 ease-out" style={{ transitionDelay: '200ms' }}>
            Somos un equipo de profesionales egresados de la Facultad de Psicología de la UBA con amplia experiencia en diferentes especialidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out" style={{ transitionDelay: '400ms' }}>
            <a 
              href="https://wa.me/5491158846134" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center bg-brand-beige text-brand-chocolate font-medium py-1.75 sm:py-2.5 px-4 sm:px-6 rounded-full 
                        shadow-lg hover:shadow-xl transition-all duration-300 
                        transform hover:-translate-y-1 hover:brightness-110 active:translate-y-0 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-beige to-brand-tierra rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
              <MessageSquare size={17} className="mr-2.5 relative z-10" />
              <span className="relative z-10 font-semibold text-sm sm:text-base">Contactar por WhatsApp</span>
            </a>
            <a 
              href="#about" 
              className="flex items-center justify-center bg-transparent border-2 border-white/70 text-white font-medium py-1.75 sm:py-2.5 px-4 sm:px-6 rounded-full 
                        shadow-md hover:shadow-lg transition-all duration-300 
                        transform hover:-translate-y-1 hover:bg-white/10 active:translate-y-0"
            >
              <span className="font-semibold text-sm sm:text-base">Conocer más</span>
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
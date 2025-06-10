import { MessageSquare } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/3 w-12 h-12 sm:w-20 sm:h-20 bg-brand-beige rounded-full opacity-40 blur-xl"></div>
      <div className="absolute right-0 bottom-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-brand-tierra rounded-full opacity-40 blur-xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-marron transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Conocenos</h2>
          <div className={`w-20 sm:w-24 h-1 bg-brand-marron mx-auto mb-3 sm:mb-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 sm:gap-12">
          <div className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-brand-dark text-left sm:text-justify">
              Cada profesional de nuestro equipo trabaja desde su trayectoria y con la impronta de su formación profesional,
                <span className="font-medium text-brand-marron"> compartiendo una misma lógica de trabajo:</span>
              </p>
              <p className="text-lg sm:text-xl italic font-normal leading-relaxed text-brand-dark text-left sm:text-justify pl-4 border-l-4 border-brand-marron/30">
                Priorizar la singularidad de cada persona, acompañar y construir juntos un espacio donde lo que duele puede ser dicho y pensado.
              </p>
            </div>
            <div className="mt-8 sm:mt-10">
              <a 
                href="https://wa.me/5491158846134" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center bg-brand-marron text-white font-medium py-3 sm:py-2.5 px-6 sm:px-6 rounded-full 
                shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110
                relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                <MessageSquare size={20} className="mr-3 relative z-10" />
                <span className="relative z-10 text-base">Contactanos</span>
              </a>
            </div>
          </div>
          <div className={`md:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-tierra to-transparent rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <img
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Equipo de profesionales de Libre Asociación"
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-soft transition-all duration-500 group-hover:shadow-lg relative"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

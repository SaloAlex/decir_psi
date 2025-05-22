import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, StarIcon } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const testimonials = [
    {
      text: "Llegué sin saber muy bien qué me pasaba, solo con angustia y cansancio. Encontré un espacio donde pude empezar a poner en palabras cosas que llevaba años callando.",
      author: "Mariana G., 34 años"
    },
    {
      text: "Había probado otras terapias pero nunca me sentí tan escuchado sin sentirme juzgado. Poder hablar de mis ataques de pánico cambió mi forma de estar en el mundo.",
      author: "Lucas D., 29 años"
    },
    {
      text: "Me ayudó a entender mi relación con la comida y, sobre todo, conmigo misma. El espacio fue cálido, respetuoso y sin presiones.",
      author: "Sol A., 22 años"
    },
    {
      text: "No fue fácil empezar, pero el acompañamiento constante y profesional hizo toda la diferencia. Hoy puedo decir que volví a sentirme en movimiento.",
      author: "Ezequiel R., 41 años"
    },
    {
      text: "Fui por una crisis puntual y terminé descubriendo mucho más. Me sentí cuidada desde el primer encuentro.",
      author: "Ana B., 38 años"
    },
    {
      text: "Mi hijo empezó con muchas dificultades para expresar lo que sentía. Hoy lo vemos más tranquilo, con más recursos para enfrentar situaciones que antes lo desbordaban.",
      author: "Mamá de Santi, 7 años"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: number | undefined;

    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length, currentIndex]);

  const handleManualNavigation = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);

    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-brand-background/70 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 sm:w-40 sm:h-40 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-brand-highlight/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-primary transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Lo que dicen nuestros pacientes
          </h2>
          <div className={`w-20 sm:w-24 h-1 bg-brand-primary mx-auto mb-3 sm:mb-4 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>

        {/* Vista Desktop */}
        <div className="hidden md:block">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <div className="relative h-64 sm:h-72">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${index === currentIndex ? 'block' : 'hidden'}`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-soft">
                    <Quote className="text-brand-primary mb-4" size={32} />
                    <p className="text-lg text-brand-dark mb-4 italic">{testimonial.text}</p>
                    <div className="flex items-center justify-center">
                      <StarIcon className="text-brand-accent" size={20} />
                    </div>
                    <p className="text-brand-primary font-medium mt-4">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vista Mobile */}
        <div className="block md:hidden">
          <div className="relative h-[400px]">
            <div className="transition-all duration-500 ease-in-out">
              <div className="bg-white p-5 rounded-xl shadow-soft">
                <Quote className="text-brand-primary mb-4" size={24} />
                <p className="text-base text-brand-dark mb-4 italic">{testimonials[currentIndex].text}</p>
                <div className="flex items-center justify-center">
                  <StarIcon className="text-brand-accent" size={16} />
                </div>
                <p className="text-brand-primary font-medium mt-4">{testimonials[currentIndex].author}</p>
              </div>
            </div>

            <button
              onClick={() => handleManualNavigation((currentIndex - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md z-20 -ml-2
                        hover:bg-brand-secondary/20 transition-all duration-300"
              aria-label="Ver testimonio anterior"
            >
              <ChevronLeft size={20} className="text-brand-primary" />
            </button>
            <button
              onClick={() => handleManualNavigation((currentIndex + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md z-20 -mr-2
                        hover:bg-brand-secondary/20 transition-all duration-300"
              aria-label="Ver testimonio siguiente"
            >
              <ChevronRight size={20} className="text-brand-primary" />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300
                          ${currentIndex === index ? 'bg-brand-primary w-6' : 'bg-brand-accent/50 w-2'} 
                          hover:bg-brand-highlight`}
                onClick={() => handleManualNavigation(index)}
                aria-label={`Ver testimonio ${index + 1} de ${testimonials.length}`}
                aria-current={currentIndex === index ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
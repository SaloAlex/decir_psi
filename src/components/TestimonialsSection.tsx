import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, StarIcon } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  rating: number;
  service: string;
}

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

  const testimonials: Testimonial[] = [
    {
      text: "Llegué sin saber muy bien qué me pasaba, solo con angustia y cansancio. Encontré un espacio donde pude empezar a poner en palabras cosas que llevaba años callando. La terapia me ayudó a entender y manejar mejor mis emociones.",
      author: "Mariana G.",
      rating: 5,
      service: "Terapia individual para adultos"
    },
    {
      text: "Había probado otras terapias pero nunca me sentí tan escuchado sin sentirme juzgado. Poder hablar de mis ataques de pánico cambió mi forma de estar en el mundo. El enfoque profesional y empático hizo toda la diferencia.",
      author: "Lucas D.",
      rating: 5,
      service: "Tratamiento de ansiedad"
    },
    {
      text: "Me ayudó a entender mi relación con la comida y, sobre todo, conmigo misma. El espacio fue cálido, respetuoso y sin presiones. El tratamiento integral me dio herramientas que uso día a día.",
      author: "Sol A.",
      rating: 5,
      service: "Terapia para trastornos alimentarios"
    },
    {
      text: "No fue fácil empezar, pero el acompañamiento constante y profesional hizo toda la diferencia. Hoy puedo decir que volví a sentirme en movimiento. La terapia online fue muy conveniente para mi rutina.",
      author: "Ezequiel R.",
      rating: 5,
      service: "Terapia online"
    },
    {
      text: "Fui por una crisis puntual y terminé descubriendo mucho más. Me sentí cuidada desde el primer encuentro. El proceso terapéutico me ayudó a conocerme mejor y desarrollar recursos propios.",
      author: "Ana B.",
      rating: 5,
      service: "Terapia individual"
    },
    {
      text: "Mi hijo empezó con muchas dificultades para expresar lo que sentía. Hoy lo vemos más tranquilo, con más recursos para enfrentar situaciones que antes lo desbordaban. El trabajo conjunto con la terapeuta fue fundamental.",
      author: "Mamá de Santiago",
      rating: 5,
      service: "Terapia infantil"
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

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <article 
      className="bg-white p-6 rounded-xl shadow-soft"
      itemScope
      itemType="https://schema.org/Review"
    >
      <Quote className="text-brand-primary mb-4" size={32} aria-hidden="true" />
      <p className="text-lg text-brand-dark mb-4 italic" itemProp="reviewBody">{testimonial.text}</p>
      <div className="flex items-center justify-center" aria-label={`Calificación: ${testimonial.rating} estrellas`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} className="text-brand-accent" size={20} aria-hidden="true" />
        ))}
      </div>
      <footer className="mt-4">
        <p className="text-brand-primary font-medium" itemProp="author">{testimonial.author}</p>
        <p className="text-sm text-brand-darkLight mt-1" itemProp="itemReviewed">{testimonial.service}</p>
      </footer>
      <meta itemProp="datePublished" content="2024-03-20" />
      <meta itemProp="reviewRating" content={testimonial.rating.toString()} />
    </article>
  );

  return (
    <section 
      id="testimonials" 
      className="py-12 sm:py-16 md:py-24 bg-brand-background/70 relative overflow-hidden" 
      ref={sectionRef}
      aria-label="Testimonios de pacientes"
      itemScope
      itemType="https://schema.org/ReviewAggregator"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 sm:w-40 sm:h-40 bg-brand-accent/20 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-brand-highlight/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true"></div>

      <div className="container relative z-10 px-4 sm:px-6">
        <header className="text-center mb-8 sm:mb-12">
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-primary transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            itemProp="name"
          >
            Experiencias de Nuestros Pacientes
          </h2>
          <div 
            className={`w-20 sm:w-24 h-1 bg-brand-primary mx-auto mb-3 sm:mb-4 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            aria-hidden="true"
          ></div>
          <p className="text-lg text-brand-darkLight">
            Testimonios reales de personas que encontraron ayuda en nuestra terapia
          </p>
        </header>

        {/* Vista Desktop */}
        <div className="hidden md:block">
          <div 
            className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            role="region"
            aria-label="Carrusel de testimonios"
          >
            <div className="relative h-auto min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${index === currentIndex ? 'block' : 'hidden'}`}
                  role="tabpanel"
                  aria-labelledby={`testimonial-tab-${index}`}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vista Mobile */}
        <div 
          className="block md:hidden"
          role="region"
          aria-label="Carrusel de testimonios móvil"
        >
          <div className="relative h-auto min-h-[400px]">
            <div className="transition-all duration-500 ease-in-out">
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </div>

            <button
              onClick={() => handleManualNavigation((currentIndex - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md z-20 -ml-2 hover:bg-brand-secondary/20 transition-all duration-300"
              aria-label="Ver testimonio anterior"
            >
              <ChevronLeft size={20} className="text-brand-primary" aria-hidden="true" />
            </button>
            <button
              onClick={() => handleManualNavigation((currentIndex + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md z-20 -mr-2 hover:bg-brand-secondary/20 transition-all duration-300"
              aria-label="Ver testimonio siguiente"
            >
              <ChevronRight size={20} className="text-brand-primary" aria-hidden="true" />
            </button>
          </div>

          <div 
            className="flex justify-center mt-4 space-x-2"
            role="tablist"
            aria-label="Navegación de testimonios"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-brand-primary w-6' : 'bg-brand-accent/50 w-2'
                } hover:bg-brand-highlight`}
                onClick={() => handleManualNavigation(index)}
                aria-label={`Ver testimonio de ${testimonials[index].author}`}
                aria-selected={currentIndex === index}
                role="tab"
                id={`testimonial-tab-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
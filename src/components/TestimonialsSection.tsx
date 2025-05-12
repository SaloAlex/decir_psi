import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, StarIcon } from 'lucide-react';

interface TestimonialProps {
  text: string;
  author: string;
  status: 'entering' | 'active' | 'exiting';
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, status, delay = 0 }) => {
  // Determinar las clases según el estado del testimonio
  const stateClasses = {
    entering: 'opacity-0 translate-x-20 scale-95',
    active: 'opacity-100 translate-x-0 scale-100',
    exiting: 'opacity-0 -translate-x-20 scale-95'
  };

  return (
    <div
      className={`bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl transition-all duration-700 transform ${stateClasses[status]} hover:shadow-lg shadow-soft absolute top-0 left-0 w-full`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <div className="flex justify-center text-brand-marron mb-4 sm:mb-6">
          <Quote size={32} className="opacity-80" />
        </div>
        <p className="text-base sm:text-lg mb-4 sm:mb-6 italic text-brand-dark leading-relaxed text-center">{text}</p>
        <div className="flex justify-center mb-4">
          <StarIcon size={20} className="text-brand-caramelo" />
        </div>
        <div className="w-10 sm:w-12 h-1 bg-brand-caramelo mx-auto my-3 sm:my-4 transition-all duration-300 ease-in-out hover:w-16 hover:bg-brand-chocolate"></div>
        <p className="text-center font-medium text-brand-chocolate">{author}</p>
      </div>
    </div>
  );
};

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
      text: "La terapia en Libre Asociación cambió mi vida. Después de meses lidiando con ansiedad, finalmente encontré las herramientas para manejarla efectivamente.",
      author: "María L."
    },
    {
      text: "La terapia de pareja nos ayudó a mejorar nuestra comunicación y a entendernos mejor. Ahora tenemos herramientas para resolver nuestros conflictos de manera saludable.",
      author: "Juan y Carla"
    },
    {
      text: "Como madre, estaba preocupada por los cambios de comportamiento de mi hijo. La terapia infantil le ha ayudado a expresar sus emociones y a sentirse más seguro.",
      author: "Patricia G."
    },
    {
      text: "Agradezco profundamente el acompañamiento terapéutico durante mi proceso de duelo. Me ayudó a transitar el dolor y a encontrar un nuevo equilibrio emocional.",
      author: "Roberto M."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: number | undefined;

    if (autoplay) {
      interval = window.setInterval(() => {
        setPreviousIndex(currentIndex);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length, currentIndex]);

  const handleManualNavigation = (index: number) => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
    setAutoplay(false);

    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Determinar el estado de cada testimonio para la animación
  const getTestimonialStatus = (index: number): 'entering' | 'active' | 'exiting' => {
    if (index === currentIndex) return 'active';
    if (index === previousIndex) return 'exiting';
    return 'entering';
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-brand-caramelo/10 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 sm:w-40 sm:h-40 bg-brand-tierra/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-brand-marron/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-marron transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Lo que dicen nuestros pacientes
          </h2>
          <div className={`w-20 sm:w-24 h-1 bg-brand-marron mx-auto mb-3 sm:mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '400ms' }}>
          <div className="relative h-64 sm:h-72 md:h-80 px-2 sm:px-4 mb-6 sm:mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${index === currentIndex || index === previousIndex ? 'block' : 'hidden'} h-full`}
              >
                <Testimonial
                  text={testimonial.text}
                  author={testimonial.author}
                  status={getTestimonialStatus(index)}
                />
              </div>
            ))}

            <button
              onClick={() => handleManualNavigation((currentIndex - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 sm:p-2 shadow-soft z-20 -ml-1 sm:-ml-4 
                        hover:bg-brand-beige transition-all duration-300 transform hover:-translate-x-1"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={24} className="text-brand-chocolate" />
            </button>
            <button
              onClick={() => handleManualNavigation((currentIndex + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 sm:p-2 shadow-soft z-20 -mr-1 sm:-mr-4
                        hover:bg-brand-beige transition-all duration-300 transform hover:translate-x-1"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight size={24} className="text-brand-chocolate" />
            </button>
          </div>

          <div className="flex justify-center mt-2 sm:mt-4 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 sm:h-3 rounded-full transition-all duration-300 
                          ${currentIndex === index ? 'bg-brand-marron w-8 sm:w-8' : 'bg-brand-tierra w-3 sm:w-3'} 
                          hover:bg-brand-chocolate`}
                onClick={() => handleManualNavigation(index)}
                aria-label={`Ver testimonio ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  text: string;
  author: string;
  active: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, active }) => {
  return (
    <div className={`testimonial-card transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-brand-blue mb-4">
        <Quote size={40} />
      </div>
      <p className="text-lg mb-4 italic">{text}</p>
      <p className="text-right font-medium">{author}</p>
    </div>
  );
};

const TestimonialsSection = () => {
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
  }, [autoplay, testimonials.length]);

  const handleManualNavigation = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section id="testimonials" className="section bg-brand-sand">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros pacientes</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`absolute w-full transition-all duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{ position: index === currentIndex ? 'relative' : 'absolute' }}
              >
                <Testimonial 
                  text={testimonial.text} 
                  author={testimonial.author} 
                  active={index === currentIndex} 
                />
              </div>
            ))}
            
            <button 
              onClick={() => handleManualNavigation((currentIndex - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-soft z-20 -ml-4"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => handleManualNavigation((currentIndex + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-soft z-20 -mr-4"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-brand-blue w-6' : 'bg-brand-light'}`}
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
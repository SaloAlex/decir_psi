import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SpecialtyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  delay: number;
  isVisible: boolean;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ title, description, imageSrc, imageAlt, delay, isVisible }) => {
  return (
    <div 
      className={`bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-soft transition-all duration-700 hover:shadow-lg flex flex-col items-center text-center transform hover:-translate-y-1 hover:bg-gradient-to-b hover:from-white hover:to-brand-secondary/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-4 sm:mb-6 overflow-hidden rounded-full transition-transform duration-300 hover:scale-105 shadow-md">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-brand-primary">{title}</h3>
      <p className="text-sm sm:text-base text-brand-darkLight">{description}</p>
    </div>
  );
};

const SpecialtiesSection = () => {
  const [isVisible, sectionRef] = useIntersectionObserver();
  const [currentIndex, setCurrentIndex] = useState(0);

  const specialties = [
    {
      title: "Adultos",
      description: "Apoyamos a los adultos en la gestión de sus emociones y en la búsqueda de un equilibrio personal y profesional.",
      imageSrc: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Adulto en meditación"
    },
    {
      title: "Adolescencia",
      description: "Ofrecemos apoyo a adolescentes en su desarrollo personal y social, ayudándolos a enfrentar los desafíos de esta etapa.",
      imageSrc: "https://images.pexels.com/photos/256658/pexels-photo-256658.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Adolescente en reflexión"
    },
    {
      title: "Niñez",
      description: "Brindamos orientación para el desarrollo emocional y social de los niños, promoviendo un entorno seguro y positivo.",
      imageSrc: "https://images.pexels.com/photos/1912868/pexels-photo-1912868.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Niño jugando"
    },
    {
      title: "Orientación a padres",
      description: "Apoyamos a los padres en la crianza y educación de sus hijos, ofreciendo herramientas para mejorar la comunicación y el entendimiento.",
      imageSrc: "https://images.pexels.com/photos/1682497/pexels-photo-1682497.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Padres con su hijo"
    },
    {
      title: "Tercera edad",
      description: "Ofrecemos apoyo a personas mayores para mejorar su calidad de vida y enfrentar los cambios propios de esta etapa.",
      imageSrc: "https://images.pexels.com/photos/432722/pexels-photo-432722.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona mayor sonriendo"
    },
    {
      title: "Adicciones",
      description: "Proporcionamos tratamiento para superar adicciones, promoviendo un estilo de vida saludable y libre de dependencias.",
      imageSrc: "https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Concepto de adicción"
    },
    {
      title: "Trastornos de la conducta alimentaria",
      description: "Ofrecemos apoyo para superar trastornos alimentarios, promoviendo una relación saludable con la comida.",
      imageSrc: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona con trastorno alimentario"
    },
    {
      title: "Terapia de pareja",
      description: "Ayudamos a las parejas a mejorar su comunicación y resolver conflictos, fortaleciendo su relación.",
      imageSrc: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Pareja comunicándose"
    },
    {
      title: "Familia",
      description: "Ofrecemos terapia familiar para mejorar la dinámica y comunicación entre los miembros de la familia.",
      imageSrc: "https://images.pexels.com/photos/1648385/pexels-photo-1648385.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Familia feliz"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= specialties.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? specialties.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="specialties" className="py-12 sm:py-16 md:py-24 bg-brand-secondary/50 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-brand-background/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-brand-accent/20 rounded-full blur-2xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-primary mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Nos especializamos en</h2>
          <div className={`w-20 sm:w-24 h-1 bg-brand-primary mx-auto mb-6 sm:mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              title={specialty.title}
              description={specialty.description}
              imageSrc={specialty.imageSrc}
              imageAlt={specialty.imageAlt}
              delay={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <div className="relative px-4 sm:px-6">
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <SpecialtyCard
                  title={specialties[currentIndex].title}
                  description={specialties[currentIndex].description}
                  imageSrc={specialties[currentIndex].imageSrc}
                  imageAlt={specialties[currentIndex].imageAlt}
                  delay={0}
                  isVisible={isVisible}
                />
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-brand-secondary/20 transition-colors duration-300"
              aria-label="Anterior especialidad"
            >
              <ChevronLeft size={24} className="text-brand-primary" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-brand-secondary/20 transition-colors duration-300"
              aria-label="Siguiente especialidad"
            >
              <ChevronRight size={24} className="text-brand-primary" />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {specialties.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-brand-primary w-4' : 'bg-brand-accent/50'
                }`}
                aria-label={`Ir a especialidad ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mensaje final */}
        <div className="text-center mt-8">
          <p className="text-base sm:text-lg italic text-brand-dark bg-white/80 p-4 rounded-md shadow-lg border-2 border-brand-primary">
            Si estás pasando por una situación de angustia, frustración o estrés, pedir ayuda es el primer paso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
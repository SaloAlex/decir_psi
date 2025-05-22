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
      title: "Trastornos de la Ansiedad",
      description: "Tratamos los diferentes tipos de trastornos de ansiedad, ayudando a los pacientes a manejar sus síntomas y mejorar su calidad de vida.",
      imageSrc: "https://images.pexels.com/photos/3958476/pexels-photo-3958476.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona experimentando ansiedad"
    },
    {
      title: "Fobias",
      description: "Ofrecemos terapia para superar fobias específicas, ayudando a los pacientes a enfrentar y reducir sus miedos.",
      imageSrc: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona enfrentando una fobia"
    },
    {
      title: "Ansiedad Social",
      description: "Ayudamos a las personas a superar la ansiedad social, mejorando sus habilidades de interacción y confianza en situaciones sociales.",
      imageSrc: "https://images.pexels.com/photos/3184407/pexels-photo-3184407.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona en un entorno social"
    },
    {
      title: "TOC",
      description: "Tratamos el Trastorno Obsesivo-Compulsivo, proporcionando estrategias para manejar pensamientos intrusivos y compulsiones.",
      imageSrc: "https://images.pexels.com/photos/4342498/pexels-photo-4342498.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona lidiando con TOC"
    },
    {
      title: "Manejo de las Emociones",
      description: "Enseñamos técnicas para el manejo efectivo de las emociones, promoviendo el bienestar emocional.",
      imageSrc: "https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona gestionando sus emociones"
    },
    {
      title: "Trastornos de la Conducta Alimentaria",
      description: "Ofrecemos apoyo para superar trastornos alimentarios, promoviendo una relación saludable con la comida.",
      imageSrc: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona con trastorno alimentario"
    },
    {
      title: "Depresión",
      description: "Proporcionamos tratamiento para la depresión, ayudando a los pacientes a encontrar esperanza y mejorar su estado de ánimo.",
      imageSrc: "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona experimentando depresión"
    },
    {
      title: "Crisis Vitales",
      description: "Apoyamos a las personas en momentos de crisis vitales, ayudándolas a encontrar nuevas perspectivas y soluciones.",
      imageSrc: "https://images.pexels.com/photos/4557473/pexels-photo-4557473.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona enfrentando una crisis vital"
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
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
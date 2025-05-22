import React, { useEffect, useState, useRef } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              title={specialty.title}
              description={specialty.description}
              imageSrc={specialty.imageSrc}
              imageAlt={specialty.imageAlt}
              delay={index + 3}
              isVisible={isVisible}
            />
          ))}
        </div>
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
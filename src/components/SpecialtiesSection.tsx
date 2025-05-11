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
      className={`bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-soft transition-all duration-700 hover:shadow-lg flex flex-col items-center text-center transform hover:-translate-y-1 hover:bg-gradient-to-b hover:from-white hover:to-brand-beige/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-brand-chocolate">{title}</h3>
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
      title: "Terapia Individual Adultos",
      description: "Trabajamos para brindar la mejor atención a nuestros pacientes, formándonos y actualizándonos en los distintos métodos psicoterapeuticos vigentes. Nuestra propuesta arranca con un primer encuentro, donde realizamos una entrevista de admisión, para conocer al paciente y establecer el tipo de tratamiento que se le brindara, acorde a su necesidad.",
      imageSrc: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Consulta de terapia individual con un adulto"
    },
    {
      title: "Terapia con Niños",
      description: "Los niños pueden transitar situaciones de conflictos psicoemocionales o sociales que pueden expresar de diferentes maneras, como cambios de humor, en su conduca, en sus relaciones con los otros tanto adultos como su grupo de pares, etc. Para poder trabajar con ellos se utiliza el juego como la mejor herramienta, dado que dichos conflictos son inconscientes, y a través de él pueden proyectar, exteriorizar y resolver sin darse cuenta.",
      imageSrc: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Sesión de terapia infantil con juegos terapéuticos"
    },
    {
      title: "Terapia de Pareja",
      description: "El tiempo, la rutina, la cotidianidad, los hijos y/o eventos singulares de cada uno de los miembros de la pareja, desencadenan conflictos que no pueden resolver o identificar. Nuestros profesionales están capacitados para escuchar y acompañar a la pareja en este difícil momento de crisis donde detenerse, hablar, escuchar y ser escuchado es un camino distinto para transitar el conflicto.",
      imageSrc: "https://images.pexels.com/photos/4098227/pexels-photo-4098227.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Pareja durante una sesión de terapia de pareja"
    },
    {
      title: "Certificado de apoyo emocional para mascotas",
      description: "Aunque por lo general la aerolíneas no permiten volar con animales los \"Emotional Support Animals\", son acompañantes que proveen a sus dueños de un apoyo emocional necesario para realizar estos viajes. Por lo tanto, si un profesional de la salud mental certifica esta necesidad, esto determina que esas personas tienen derecho a viajar con su perro en el avión.",
      imageSrc: "https://images.pexels.com/photos/7210704/pexels-photo-7210704.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1",
      imageAlt: "Persona con su mascota de apoyo emocional"
    }
  ];

  return (
    <section id="specialties" className="py-12 sm:py-16 md:py-24 bg-brand-beige/50 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-brand-caramelo/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-brand-tierra/20 rounded-full blur-2xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-marron mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Nos especializamos en</h2>
          <div className={`w-20 sm:w-24 h-1 bg-brand-marron mx-auto mb-6 sm:mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
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
      </div>
    </section>
  );
};

export default SpecialtiesSection;
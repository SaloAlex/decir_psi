import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importar las imágenes locales
import florenciaDelGrosso from '../assets/Florencia-del-Grosso.webp';
import vivianaDeMarinis from '../assets/Viviana-De-Marinis.webp';
import emilceNajmanovich from '../assets/Emilce-Najmanovich.webp';
import paolaBoella from '../assets/Paola-Boella.webp';
import solGiovanetti from '../assets/Sol-Giovanetti.webp';
import vivianaKostoff from '../assets/Viviana-B-Kostoff.webp';
import juanIgnacioDiez from '../assets/Juan-Ignacio-Diez.webp';
import roxanaNijamin from '../assets/Roxana-Alejandra-Nijamin.webp';
import silvinaIsabettini from '../assets/Silvina-Isabettini.webp';
import mercedesArias from '../assets/Mercedes-Arias.webp';
import mailenDiLascio from '../assets/Mailen-Di-Lascio.webp';
import juanMartinZampini from '../assets/Juan-Martin-Zampini.webp';

interface TeamMemberProps {
  name: string;
  license: string;
  education: string;
  specialties: string;
  image: string;
  delay?: number;
  isVisible?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, license, education, specialties, image, delay = 0, isVisible = true }) => {
  return (
    <div 
      className={`flex flex-col items-center p-3 sm:p-4 bg-white rounded-lg shadow-soft transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-md group`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-3 sm:mb-4 rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-md">
        <img 
          src={image} 
          alt={`${name} - Psicólogo`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy" 
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-brand-primary text-center transition-colors duration-300 group-hover:text-brand-highlight">{name}</h3>
      <p className="text-brand-highlight font-medium mb-1 sm:mb-2 text-center text-sm sm:text-base">{license}</p>
      <p className="text-brand-dark text-xs sm:text-sm font-medium text-center">{education}</p>
      <div className="w-10 h-1 bg-brand-accent my-2 sm:my-3 transition-all duration-300 group-hover:w-16"></div>
      <p className="text-center text-brand-darkLight text-xs sm:text-sm line-clamp-3 md:line-clamp-none">{specialties}</p>
    </div>
  );
};

const TeamSection = () => {
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

  const team = [
    {
      name: "Lic. Viviana B. Kostoff",
      license: "M.N. 34399",
      education: "U.B.A",
      specialties: "Psicóloga clínica. Psicoanalista. Adolescentes Adultos Parejas",
      image: vivianaKostoff
    },
    {
      name: "Lic. Florencia Del Grosso",
      license: "M.N. 36663",
      education: "U.B.A",
      specialties: "Psicóloga; Psicoanalista; Esp. en Clínica de Adultos; Esp. En Niñez y Adolescencia; Esp. En Primera Infancia; Esp. en Pubertad, Adolescencia y Familia; Orientación a Padres; Psicoprofilaxis Quirúrgica; Terapia de Parejas",
      image: florenciaDelGrosso
    },
    {
      name: "Lic. Emilce D. Najmanovich",
      license: "M.N. 32041",
      education: "U.B.A",
      specialties: "Atención a Jóvenes; Adultos; Adultos Mayores. Orientación a padres. Presencial- Virtual",
      image: emilceNajmanovich
    },
    {
      name: "Lic. Viviana De Marinis",
      license: "M.N. 22930",
      education: "U.B.A",
      specialties: "Psicóloga Clínica-Psicodramatista; Esp. Clínica: Jóvenes, Adultos y Adultos Mayores; Esp. Orientación a padres.",
      image: vivianaDeMarinis
    },
    {
      name: "Lic. Paola Boella",
      license: "M.N. 41914",
      education: "U.B.A",
      specialties: "Psicóloga Clínica de Adultos, Adolescentes y Parejas; Psicoanalista; Posgrados en Psicoanálisis en Fundación Tiempo e Institución Nuevo Centro; Psicóloga Clínica de Adultos en Fundación Tiempo.",
      image: paolaBoella
    },
    {
      name: "Lic. María del Sol Giovanetti",
      license: "M.N. 42201",
      education: "U.B.A",
      specialties: "Psicóloga; Clínica de Adultos y Adolescentes; Terapia de Parejas; Orientación a Padres.",
      image: solGiovanetti
    },
    {
      name: "Lic. Juan Ignacio Diez",
      license: "M.N. 60.859",
      education: "U.B.A",
      specialties: "Psicólogo; Psicoanalista; Esp. Adolescentes, adultos; Terapia de parejas.",
      image: juanIgnacioDiez
    },
    {
      name: "Lic. Roxana A. Nijamin",
      license: "M.N. 22211",
      education: "U.B.A",
      specialties: "Especialidad Terapia de Pareja; Adultos; Adolescentes; Psicología Laboral.",
      image: roxanaNijamin
    },
    {
      name: "Lic. Silvina Isabettini",
      license: "M.N. 36826",
      education: "U.B.A",
      specialties: "Psicóloga; Clínica de Niños y Adolescentes; Clínica de Adultos.",
      image: silvinaIsabettini
    },
    {
      name: "Lic. María Mercedes Aira",
      license: "M.N. 29557",
      education: "U.B.A",
      specialties: "Psicoanalista; Psicoterapeuta; Clínica de Adultos y Parejas.",
      image: mercedesArias
    },
    {
      name: "Lic. Mailen Di Lascio Troncoso",
      license: "M.N. 85137",
      education: "UFLO",
      specialties: "Psicóloga Clínica de niños, adolescentes, adultos.",
      image: mailenDiLascio
    },
    {
      name: "Lic. Juan Martin Zampini",
      license: "M.N. 84037",
      education: "U.B.A",
      specialties: "Psicólogo. Clínica de adolescentes y adultos. Bilingüe.",
      image: juanMartinZampini
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = {
    mobile: 1,
    tablet: 2, 
    desktop: 4
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage.mobile >= team.length ? 0 : prevIndex + itemsPerPage.mobile
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage.mobile < 0 ? team.length - itemsPerPage.mobile : prevIndex - itemsPerPage.mobile
    );
  };

  return (
    <section id="team" className="py-12 sm:py-16 md:py-24 bg-brand-secondary/30 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-brand-background/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-20 h-20 sm:w-32 sm:h-32 bg-brand-accent/20 rounded-full blur-2xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-primary transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Nuestro Equipo de Profesionales</h2>
          <div className={`w-20 sm:w-24 h-1 bg-brand-primary mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>
        
        {/* Desktop View - Grid layout for larger screens */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              license={member.license}
              education={member.education}
              specialties={member.specialties}
              image={member.image}
              delay={index % 4}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        {/* Tablet View - Grid with 2 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 sm:gap-6">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              license={member.license}
              education={member.education}
              specialties={member.specialties}
              image={member.image}
              delay={index % 3}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        {/* Mobile View - Carousel with 1 at a time */}
        <div className={`md:hidden transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative px-8 sm:px-10">
            <div className="flex justify-center">
              <TeamMember
                name={team[currentIndex].name}
                license={team[currentIndex].license}
                education={team[currentIndex].education}
                specialties={team[currentIndex].specialties}
                image={team[currentIndex].image}
              />
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 sm:p-2 shadow-soft z-10 hover:bg-brand-secondary transition-colors duration-300"
              aria-label="Anterior profesional"
            >
              <ChevronLeft size={24} className="text-brand-primary" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 sm:p-2 shadow-soft z-10 hover:bg-brand-secondary transition-colors duration-300"
              aria-label="Siguiente profesional"
            >
              <ChevronRight size={24} className="text-brand-primary" />
            </button>
          </div>
          
          <div className="flex justify-center mt-3 sm:mt-4 space-x-2 sm:space-x-2 flex-wrap max-w-xs mx-auto overflow-x-auto py-2">
            {team.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-brand-primary w-4 sm:w-4' : 'bg-brand-accent'} hover:bg-brand-highlight`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ver profesional ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
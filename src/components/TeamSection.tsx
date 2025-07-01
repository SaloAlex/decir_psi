import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
    <article 
      className={`flex flex-col items-center p-3 sm:p-4 bg-white rounded-lg shadow-soft transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-md group`}
      style={{ transitionDelay: `${delay * 100}ms` }}
      itemScope
      itemType="http://schema.org/Person"
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-3 sm:mb-4 rounded-full overflow-hidden transition-all duration-300 group-hover:shadow-md">
        <img 
          src={image} 
          alt={`${name} - Psicólogo/a en Buenos Aires`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          itemProp="image"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-brand-primary text-center transition-colors duration-300 group-hover:text-brand-highlight" itemProp="name">{name}</h3>
      <p className="text-brand-highlight font-medium mb-1 sm:mb-2 text-center text-sm sm:text-base" itemProp="license">{license}</p>
      <p className="text-brand-dark text-xs sm:text-sm font-medium text-center" itemProp="alumniOf">{education}</p>
      <div className="w-10 h-1 bg-brand-accent my-2 sm:my-3 transition-all duration-300 group-hover:w-16" aria-hidden="true"></div>
      <p className="text-center text-brand-darkLight text-xs sm:text-sm line-clamp-3 md:line-clamp-none" itemProp="description">{specialties}</p>
    </article>
  );
};

const TeamSection = () => {
  const [isVisible, sectionRef] = useIntersectionObserver();
  const [currentIndex, setCurrentIndex] = useState(0);

  const team = [
    {
      name: "Lic. Viviana B. Kostoff",
      license: "M.N. 34399",
      education: "Universidad de Buenos Aires (UBA)",
      specialties: "Psicóloga clínica y psicoanalista especializada en el abordaje terapéutico de adolescentes y adultos. Experta en terapia de parejas.",
      image: vivianaKostoff
    },
    {
      name: "Lic. Florencia Del Grosso",
      license: "M.N. 36663",
      education: "U.B.A",
      specialties: "Psicóloga y psicoanalista especializada en adultos, niñez, adolescencia y familia. Brinda orientación a padres y terapia de parejas. Experta en psicoprofilaxis quirúrgica y primera infancia.",
      image: florenciaDelGrosso
    },
    {
      name: "Lic. Emilce D. Najmanovich",
      license: "M.N. 32041",
      education: "U.B.A",
      specialties: "Psicóloga especializada en el acompañamiento terapéutico de jóvenes, adultos y adultos mayores. Brinda orientación a padres en modalidad presencial y virtual.",
      image: emilceNajmanovich
    },
    {
      name: "Lic. Viviana De Marinis",
      license: "M.N. 22930",
      education: "U.B.A",
      specialties: "Psicóloga clínica y psicodramatista. Especialista en el trabajo con jóvenes, adultos y adultos mayores. Brinda orientación profesional a padres.",
      image: vivianaDeMarinis
    },
    {
      name: "Lic. Paola Boella",
      license: "M.N. 41914",
      education: "U.B.A",
      specialties: "Especialista en psicoanálisis con enfoque en adultos, adolescentes y parejas. Ofrece atención en modalidad virtual.",
      image: paolaBoella
    },
    {
      name: "Lic. María del Sol Giovanetti",
      license: "M.N. 42201",
      education: "U.B.A",
      specialties: "Psicóloga especializada en clínica de adultos y adolescentes. Brinda terapia de parejas y orientación profesional a padres.",
      image: solGiovanetti
    },
    {
      name: "Lic. Juan Ignacio Diez",
      license: "M.N. 60.859",
      education: "U.B.A",
      specialties: "Psicólogo y psicoanalista dedicado al trabajo terapéutico con adolescentes y adultos. Especialista en terapia de parejas.",
      image: juanIgnacioDiez
    },
    {
      name: "Lic. Roxana A. Nijamin",
      license: "M.N. 22211",
      education: "U.B.A",
      specialties: "Especialista en terapia familiar y de pareja. Amplia experiencia en psicología laboral y trabajo con adolescentes y adultos.",
      image: roxanaNijamin
    },
    {
      name: "Lic. Silvina Isabettini",
      license: "M.N. 36826",
      education: "U.B.A",
      specialties: "Psicóloga especializada en clínica infantil, adolescentes y adultos. Enfoque integral en el desarrollo y bienestar emocional.",
      image: silvinaIsabettini
    },
    {
      name: "Lic. María Mercedes Aira",
      license: "M.N. 29557",
      education: "U.B.A",
      specialties: "Psicoanalista y psicoterapeuta con amplia experiencia en clínica de adultos y terapia de parejas.",
      image: mercedesArias
    },
    {
      name: "Lic. Mailen Di Lascio Troncoso",
      license: "M.N. 85137",
      education: "UFLO",
      specialties: "Psicóloga clínica especializada en el acompañamiento terapéutico de niños, adolescentes y adultos.",
      image: mailenDiLascio
    },
    {
      name: "Lic. Juan Martin Zampini",
      license: "M.N. 84037",
      education: "U.B.A",
      specialties: "Psicólogo clínico bilingüe especializado en el trabajo terapéutico con adolescentes y adultos.",
      image: juanMartinZampini
    }
  ];

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
    <section 
      id="team" 
      className="py-12 sm:py-16 md:py-24 bg-brand-secondary/30 relative" 
      ref={sectionRef}
      aria-label="Equipo de profesionales de psicología"
      itemScope
      itemType="http://schema.org/Organization"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-brand-background/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-10 left-20 w-20 h-20 sm:w-32 sm:h-32 bg-brand-accent/20 rounded-full blur-2xl" aria-hidden="true"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <header className="text-center mb-6 sm:mb-10">
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-primary transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            itemProp="name"
          >
            Equipo de Psicólogos en Buenos Aires
          </h2>
          <div 
            className={`w-20 sm:w-24 h-1 bg-brand-primary mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            aria-hidden="true"
          ></div>
          <meta itemProp="description" content="Equipo de psicólogos profesionales especializados en diferentes áreas de la salud mental en Buenos Aires" />
        </header>
        
        {/* Desktop View - Grid layout for larger screens */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6" itemProp="employees">
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
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 sm:gap-6" itemProp="employees">
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
        
        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 text-brand-primary hover:text-brand-highlight transition-colors"
              aria-label="Ver profesional anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="overflow-hidden mx-8">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {team.map((member, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <TeamMember
                      name={member.name}
                      license={member.license}
                      education={member.education}
                      specialties={member.specialties}
                      image={member.image}
                      delay={0}
                      isVisible={isVisible}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 text-brand-primary hover:text-brand-highlight transition-colors"
              aria-label="Ver siguiente profesional"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
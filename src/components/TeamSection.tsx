import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  license: string;
  expertise: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, license, expertise, image }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-40 h-40 mb-4 rounded-full overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - Psicólogo`} 
          className="w-full h-full object-cover"
          loading="lazy" 
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-brand-darkLight">{license}</p>
      <p className="text-center mt-2">{expertise}</p>
    </div>
  );
};

const TeamSection = () => {
  const team = [
    {
      name: "Dra. Laura Martínez",
      license: "MP 12345",
      expertise: "Especialista en Terapia Cognitivo Conductual y Ansiedad",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Lic. Carlos Rodríguez",
      license: "MP 23456",
      expertise: "Especialista en Terapia Sistémica y Parejas",
      image: "https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Dra. Ana González",
      license: "MP 34567",
      expertise: "Especialista en Infancias y Adolescencias",
      image: "https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Lic. Martín Sánchez",
      license: "MP 45678",
      expertise: "Especialista en Psicoanálisis y Depresión",
      image: "https://images.pexels.com/photos/5905484/pexels-photo-5905484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
      prevIndex + 1 >= team.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? team.length - 1 : prevIndex - 1
    );
  };

  // For larger screens, we'll show the complete team
  // For mobile, we'll implement a carousel

  return (
    <section id="team" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Equipo Profesional</h2>
        
        {/* Desktop View - All team members at once */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              license={member.license}
              expertise={member.expertise}
              image={member.image}
            />
          ))}
        </div>
        
        {/* Tablet View - 2 at a time */}
        <div className="hidden md:block lg:hidden">
          <div className="relative">
            <div className="flex">
              {team.slice(currentIndex, currentIndex + itemsPerPage.tablet).map((member, index) => (
                <div key={index} className="w-1/2">
                  <TeamMember
                    name={member.name}
                    license={member.license}
                    expertise={member.expertise}
                    image={member.image}
                  />
                </div>
              ))}
              {currentIndex + itemsPerPage.tablet >= team.length && 
                team.slice(0, (currentIndex + itemsPerPage.tablet) % team.length).map((member, index) => (
                  <div key={index + team.length} className="w-1/2">
                    <TeamMember
                      name={member.name}
                      license={member.license}
                      expertise={member.expertise}
                      image={member.image}
                    />
                  </div>
                ))
              }
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-soft z-10"
              aria-label="Anterior profesional"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-soft z-10"
              aria-label="Siguiente profesional"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile View - 1 at a time */}
        <div className="md:hidden">
          <div className="relative">
            <div className="flex justify-center">
              <TeamMember
                name={team[currentIndex].name}
                license={team[currentIndex].license}
                expertise={team[currentIndex].expertise}
                image={team[currentIndex].image}
              />
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-soft z-10"
              aria-label="Anterior profesional"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-soft z-10"
              aria-label="Siguiente profesional"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {team.map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-brand-dark' : 'bg-brand-light'}`}
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
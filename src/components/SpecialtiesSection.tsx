import React from 'react';
import { Brain, HeartHandshake, Users, Baby } from 'lucide-react';

interface SpecialtyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ title, description, icon }) => {
  return (
    <div className="specialty-card">
      <div className="specialty-icon">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-brand-darkLight">{description}</p>
    </div>
  );
};

const SpecialtiesSection = () => {
  const specialties = [
    {
      title: "Ansiedad",
      description: "Tratamiento para crisis de ansiedad, ataques de pánico y trastornos relacionados.",
      icon: <Brain size={28} />
    },
    {
      title: "Depresión",
      description: "Acompañamiento profesional para superar estados depresivos y recuperar la motivación.",
      icon: <HeartHandshake size={28} />
    },
    {
      title: "Terapia de Pareja",
      description: "Mejora la comunicación y resuelve conflictos para fortalecer el vínculo de pareja.",
      icon: <Users size={28} />
    },
    {
      title: "Terapia Infantil",
      description: "Apoyo especializado para niños que enfrentan desafíos emocionales o de conducta.",
      icon: <Baby size={28} />
    }
  ];

  return (
    <section id="specialties" className="section bg-brand-sand">
      <div className="container">
        <h2 className="section-title">Nuestras Especialidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={index}
              title={specialty.title}
              description={specialty.description}
              icon={specialty.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
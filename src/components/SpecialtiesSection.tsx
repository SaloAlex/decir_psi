import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Imágenes
import imgAdultos from '../assets/img_specialities/adultos.webp';
import imgAdolescencia from '../assets/img_specialities/adolescencia.webp';
import imgNinez from '../assets/img_specialities/niñez.webp';
import imgOrientacionPadres from '../assets/img_specialities/orientacion_padres.webp';
import imgTerceraEdad from '../assets/img_specialities/tercera_edad.webp';
import imgTerapiaVirtual from '../assets/img_specialities/virtual.webp';
import imgAlimentaria from '../assets/img_specialities/alimentaria.webp';
import imgTerapiaPareja from '../assets/img_specialities/terapia_pareja.webp';
import imgFamilia from '../assets/img_specialities/familia.webp';

interface SpecialtyCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  delay: number;
  isVisible: boolean;
}

const SpecialtyCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  delay,
  isVisible,
}: SpecialtyCardProps) => {
  return (
    <article
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
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-brand-primary">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-brand-darkLight">{description}</p>
    </article>
  );
};

const SpecialtiesSection = () => {
  const [isVisible, sectionRef] = useIntersectionObserver();
  const [currentIndex, setCurrentIndex] = useState(0);

  const specialties = [
    {
      title: 'Psicología para Adultos',
      description:
        'Terapia psicológica para adultos enfocada en la gestión de emociones, ansiedad, depresión y desarrollo personal. Atención profesional en Buenos Aires.',
      imageSrc: imgAdultos,
      imageAlt: 'Terapia psicológica para adultos en Buenos Aires',
    },
    {
      title: 'Psicología para Adolescentes',
      description:
        'Acompañamiento terapéutico especializado para adolescentes, abordando temas de identidad, relaciones, y desarrollo emocional.',
      imageSrc: imgAdolescencia,
      imageAlt: 'Atención psicológica para adolescentes',
    },
    {
      title: 'Psicología Infantil',
      description:
        'Atención psicológica especializada en niños, facilitando su desarrollo emocional y social en un ambiente seguro y adaptado.',
      imageSrc: imgNinez,
      imageAlt: 'Psicología infantil y terapia para niños',
    },
    {
      title: 'Orientación a Padres',
      description:
        'Asesoramiento profesional para padres, brindando herramientas y estrategias para la crianza y el desarrollo familiar saludable.',
      imageSrc: imgOrientacionPadres,
      imageAlt: 'Orientación psicológica para padres',
    },
    {
      title: 'Psicología para Adultos Mayores',
      description:
        'Atención especializada para adultos mayores, enfocada en el bienestar emocional y la adaptación a los cambios vitales.',
      imageSrc: imgTerceraEdad,
      imageAlt: 'Atención psicológica para adultos mayores',
    },
    {
      title: 'Terapia Online',
      description:
        'Consultas psicológicas virtuales profesionales, accesibles desde cualquier lugar, manteniendo la calidad y confidencialidad del tratamiento.',
      imageSrc: imgTerapiaVirtual,
      imageAlt: 'Sesiones de terapia psicológica online',
    },
    {
      title: 'Trastornos Alimentarios',
      description:
        'Tratamiento especializado en trastornos de la conducta alimentaria, con enfoque integral y multidisciplinario.',
      imageSrc: imgAlimentaria,
      imageAlt: 'Tratamiento de trastornos alimentarios',
    },
    {
      title: 'Terapia de Pareja',
      description:
        'Acompañamiento profesional para parejas, mejorando la comunicación y fortaleciendo el vínculo emocional.',
      imageSrc: imgTerapiaPareja,
      imageAlt: 'Terapia de pareja en Buenos Aires',
    },
    {
      title: 'Terapia Familiar',
      description:
        'Intervención terapéutica familiar, facilitando la comunicación y resolución de conflictos en el sistema familiar.',
      imageSrc: imgFamilia,
      imageAlt: 'Terapia familiar sistémica',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= specialties.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? specialties.length - 1 : prev - 1));
  };

  return (
    <section
      id="specialties"
      className="py-12 sm:py-16 md:py-24 bg-brand-secondary/50 relative"
      ref={sectionRef}
      aria-label="Especialidades y servicios psicológicos"
    >
      {/* Decorativos */}
      <div
        className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-brand-background/20 rounded-full blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-brand-accent/20 rounded-full blur-2xl"
        aria-hidden="true"
      />

      <div className="container relative z-10 px-4 sm:px-6">
        <header className="text-center mb-8 sm:mb-12">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-primary mb-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Servicios de Atención Psicológica
          </h2>
          <div
            className={`w-20 sm:w-24 h-1 bg-brand-primary mx-auto mb-6 sm:mb-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            aria-hidden="true"
          />
        </header>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {specialties.map((s, i) => (
            <SpecialtyCard
              key={i}
              title={s.title}
              description={s.description}
              imageSrc={s.imageSrc}
              imageAlt={s.imageAlt}
              delay={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Mobile (carrusel) */}
        <div className="block md:hidden" role="region" aria-label="Carrusel de especialidades">
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
              aria-label="Ver especialidad anterior"
            >
              <ChevronLeft size={24} className="text-brand-primary" aria-hidden="true" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-brand-secondary/20 transition-colors duration-300"
              aria-label="Ver siguiente especialidad"
            >
              <ChevronRight size={24} className="text-brand-primary" aria-hidden="true" />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2" role="tablist">
            {specialties.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'bg-brand-primary w-4' : 'bg-brand-accent/50'
                }`}
                aria-label={`Ver ${s.title}`}
                aria-selected={currentIndex === i}
                role="tab"
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-base sm:text-lg italic text-brand-dark bg-white/80 p-4 rounded-md shadow-lg border-2 border-brand-primary">
            Si estás pasando por una situación de angustia, frustración o estrés, pedir ayuda es el primer paso hacia tu bienestar emocional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;

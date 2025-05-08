import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:py-32 bg-hero-gradient">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Comenzar tu terapia es el primer paso
          </h1>
          <p className="text-lg md:text-xl text-brand-darkLight mb-8 max-w-xl">
            Un espacio seguro para acompañarte en tu proceso de autoconocimiento y bienestar emocional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="primary-button flex items-center justify-center">
              Agendar por WhatsApp
            </a>
            <a href="#contact" className="secondary-button flex items-center justify-center">
              Reservar Consulta
              <ArrowDown size={18} className="ml-2" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-md">
            <img
              src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Persona en sesión de terapia"
              className="w-full h-auto rounded-2xl shadow-soft object-cover"
              loading="eager"
              width="500"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
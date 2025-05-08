import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg mb-6 leading-relaxed">
              En <strong>Libre Asociación</strong> creemos en la terapia como un proceso de crecimiento personal. 
              Nuestro equipo multidisciplinario de psicólogos clínicos ofrece un espacio confidencial y acogedor, 
              donde cada proceso terapéutico se adapta a las necesidades individuales de cada persona.
            </p>
            <p className="text-lg leading-relaxed">
              Con más de 10 años de experiencia, combinamos diferentes enfoques terapéuticos para acompañarte 
              en tu camino hacia el bienestar emocional, respetando siempre tus tiempos y procesos.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Equipo de psicólogos de Libre Asociación"
              className="w-full h-auto rounded-2xl shadow-soft"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
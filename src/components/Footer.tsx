// Eliminando la importación no utilizada
// import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-tierra pt-8 pb-6 px-4 sm:px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-6 md:gap-8 mb-8">
          <div className="w-full md:max-w-md text-center md:text-left px-4 md:px-0">
            <h3 className="text-xl font-semibold mb-3 text-white">Psi | Atención Psicológica</h3>
            <p className="text-white text-sm sm:text-base">
              Somos un grupo de profesionales dedicados a acompañarte en el proceso de autoconocimiento y crecimiento personal.
            </p>
          </div>

          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3 text-white">Enlaces rápidos</h3>
            <ul className="space-y-2 text-white text-sm sm:text-base">
              <li><a href="#home" className="hover:text-brand-beige transition-colors block py-1">Inicio</a></li>
              <li><a href="#about" className="hover:text-brand-beige transition-colors block py-1">Nosotros</a></li>
              <li><a href="#specialties" className="hover:text-brand-beige transition-colors block py-1">Especialidades</a></li>
              <li><a href="#team" className="hover:text-brand-beige transition-colors block py-1">Equipo</a></li>
              <li><a href="#faq" className="hover:text-brand-beige transition-colors block py-1">Preguntas frecuentes</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/30 pt-6 text-center text-xs sm:text-sm text-white">
          <p className="flex items-center justify-center mb-2">
            <span>© {new Date().getFullYear()} Psi | Atención Psicológica</span>
          </p>
          <p className="flex items-center justify-center flex-wrap">
            <span>Hecho por </span>
            <a href="https://websiar.site" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-400 hover:underline mx-1">
              websiar <span className="mx-1">|</span> diseño Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// Eliminando la importación no utilizada
// import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer 
      className="bg-brand-tierra pt-8 pb-6 px-4 sm:px-6"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-6 md:gap-8 mb-8">
          <div className="w-full md:max-w-md text-center md:text-left px-4 md:px-0">
            <h3 className="text-xl font-semibold mb-3 text-white" itemProp="name">Decir Psi | Atención Psicológica</h3>
            <p className="text-white text-sm sm:text-base" itemProp="description">
              Somos un grupo de profesionales dedicados a acompañarte en el proceso de autoconocimiento y crecimiento personal.
            </p>
            <meta itemProp="address" content="Buenos Aires, Argentina" />
          </div>

          <nav 
            className="w-full md:w-auto text-center md:text-left"
            aria-label="Enlaces del pie de página"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">Enlaces rápidos</h3>
            <ul className="space-y-2 text-white text-sm sm:text-base" role="list">
              <li>
                <a 
                  href="#home" 
                  className="hover:text-brand-beige transition-colors block py-1"
                  aria-label="Ir a la sección de inicio"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-brand-beige transition-colors block py-1"
                  aria-label="Ir a la sección sobre nosotros"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a 
                  href="#specialties" 
                  className="hover:text-brand-beige transition-colors block py-1"
                  aria-label="Ver nuestras especialidades"
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="hover:text-brand-beige transition-colors block py-1"
                  aria-label="Conocer nuestro equipo"
                >
                  Equipo
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="hover:text-brand-beige transition-colors block py-1"
                  aria-label="Ver preguntas frecuentes"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-white/30 pt-6 text-center text-xs sm:text-sm text-white">
          <p className="flex items-center justify-center mb-2">
            <span>© {new Date().getFullYear()} Decir Psi | Atención Psicológica - Todos los derechos reservados</span>
          </p>
          <p className="flex items-center justify-center flex-wrap">
            <span>Desarrollado por </span>
            <a 
              href="https://websiar.site" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium text-gray-400 hover:underline mx-1"
              aria-label="Visitar websiar - diseño web"
            >
              websiar <span className="mx-1">|</span> diseño Web
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link 
            to="/politica-de-privacidad"
            className="text-sm hover:text-brand-secondary transition-colors"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
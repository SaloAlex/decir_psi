import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-tierra pt-10 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Libre Asociación</h3>
            <p className="text-white mb-3">
              Somos un grupo de profesionales dedicados a acompañarte en el proceso de autoconocimiento y crecimiento personal.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Enlaces rápidos</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#home" className="hover:text-brand-beige transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-brand-beige transition-colors">Nosotros</a></li>
              <li><a href="#specialties" className="hover:text-brand-beige transition-colors">Especialidades</a></li>
              <li><a href="#team" className="hover:text-brand-beige transition-colors">Equipo</a></li>
              <li><a href="#faq" className="hover:text-brand-beige transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Contacto</h3>
            <p className="text-white mb-3">
              ¿Necesitas más información? Escríbenos y te responderemos lo antes posible.
            </p>
            <a 
              href="mailto:info@libreasociacion.com" 
              className="inline-flex items-center text-white hover:text-brand-beige transition-colors"
            >
              <Mail size={18} className="mr-2" />
              info@libreasociacion.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/30 pt-6 text-center text-sm text-white">
          <p className="flex items-center justify-center mb-2">
            <span>© {new Date().getFullYear()} Libre Asociación</span>
          </p>
          <p className="flex items-center justify-center">
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
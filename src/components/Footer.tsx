import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Libre Asociación</h3>
            <p className="mb-6">Un espacio seguro para tu bienestar emocional.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-pink transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-blue transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-green transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Av. Corrientes 1234, CABA, Argentina</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+54 11 5555-5555</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>contacto@libreasociacion.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Lunes a Viernes: 9:00 - 20:00<br />Sábados: 9:00 - 13:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
            <div className="rounded-lg overflow-hidden h-[200px] shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9919953030085!2d-58.3851391!3d-34.604232999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacee322018f%3A0x5efb530c95610174!2sAv.%20Corrientes%201234%2C%20C1043AAZ%20CABA!5e0!3m2!1ses-419!2sar!4v1662900000000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Libre Asociación"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brand-dark/10 pt-6 text-center text-sm text-brand-light">
          <p>© {new Date().getFullYear()} Libre Asociación. Todos los derechos reservados.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-brand-dark transition-colors">Política de Privacidad</a> | 
            <a href="#" className="hover:text-brand-dark transition-colors ml-2">Términos y Condiciones</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
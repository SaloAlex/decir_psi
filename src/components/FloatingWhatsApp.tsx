import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  // Show the button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
        
        // Show tooltip after 2 seconds of button visibility
        if (!isTooltipVisible) {
          const timer = setTimeout(() => {
            setIsTooltipVisible(true);
          }, 2000);
          
          return () => clearTimeout(timer);
        }
      } else {
        setIsVisible(false);
        setIsTooltipVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTooltipVisible]);
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/123456789?text=Hola,%20estoy%20interesado/a%20en%20agendar%20una%20consulta.', '_blank');
    setIsTooltipVisible(false);
  };
  
  const closeTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTooltipVisible(false);
  };
  
  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      {isTooltipVisible && (
        <div className="absolute bottom-full right-0 mb-2 w-56 p-3 bg-white rounded-lg shadow-soft text-sm">
          <button 
            onClick={closeTooltip}
            className="absolute top-2 right-2 text-brand-light hover:text-brand-dark"
            aria-label="Cerrar tooltip"
          >
            <X size={14} />
          </button>
          <p>¿Necesitas ayuda? Contáctanos por WhatsApp</p>
        </div>
      )}
      
      <button
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
        onClick={handleWhatsAppClick}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
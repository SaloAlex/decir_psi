import { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      action: string | Date,
      params?: {
        send_to?: string;
        value?: number;
        currency?: string;
        transaction_id?: string;
      }
    ) => void;
  }
}

const FloatingWhatsApp = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Mostrar el tooltip después de 3 segundos al cargar la página
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTooltipVisible(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleWhatsAppClick = () => {
    try {
      window.location.href = '/gracias';
      setIsTooltipVisible(false);
      setErrorMessage(null);
    } catch {
      setErrorMessage('No se pudo abrir WhatsApp. Por favor, intenta de nuevo o contáctanos por otro medio.');
      setTimeout(() => setErrorMessage(null), 5000);
    }
  };
  
  const closeTooltip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsTooltipVisible(false);
  };
  
  // Efecto CSS de pulso
  const pulseEffect = `
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(133, 92, 63, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(133, 92, 63, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(133, 92, 63, 0);
      }
    }
    
    .pulse {
      animation: pulse 2s infinite;
    }

    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    
    .float {
      animation: float 3s ease-in-out infinite;
    }
  `;
  
  return (
    <>
      <style>{pulseEffect}</style>
      <div className="fixed bottom-6 right-6 z-50">
        {errorMessage && (
          <div className="absolute bottom-full right-0 mb-3 w-64 p-4 bg-red-50 rounded-xl shadow-lg text-sm border border-red-200 text-brand-primary transition-all duration-300 transform animate-fade-in-up">
            {errorMessage}
          </div>
        )}
        {isTooltipVisible && !errorMessage && (
          <div className="absolute bottom-full right-0 mb-3 w-64 p-4 bg-white rounded-xl shadow-lg text-sm border border-brand-caramelo/20 transition-all duration-300 transform animate-fade-in-up">
            <button 
              onClick={closeTooltip}
              className="absolute top-2 right-2 text-brand-light hover:text-brand-chocolate transition-colors duration-300"
              aria-label="Cerrar tooltip"
            >
              <X size={14} />
            </button>
            <div className="flex items-start space-x-3">
              <span className="text-brand-marron">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-brand-primary font-medium mb-2">¿Necesitas ayuda? Contáctanos por WhatsApp</p>
                <p className="text-brand-darkLight text-xs">Responderemos a la brevedad</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="relative float">
          <div className="absolute -inset-1 bg-gray-600 rounded-full blur opacity-70"></div>
          <button
            className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 pulse overflow-hidden group"
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            aria-label="Contactar por WhatsApp"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-chocolate to-brand-marron opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center justify-center transition-all duration-300 transform">
              {isButtonHovered ? (
                <Send size={24} className="text-white" />
              ) : (
                <MessageCircle size={28} fill="white" className="transition-transform duration-300 transform group-hover:scale-110" />
              )}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
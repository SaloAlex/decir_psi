import { useEffect, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/5491133993121?text=Hola,%20estoy%20interesado/a%20en%20agendar%20una%20consulta.';

const Gracias = () => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17293564881',
          'value': 1.0,
          'currency': 'ARS',
          // @ts-expect-error - Google Ads types no incluyen event_callback pero es una propiedad válida
          'event_callback': () => {
            window.location.href = WHATSAPP_URL;
          }
        });
      } catch (e) {
        console.error('Error al registrar la conversión:', e);
        setError('Hubo un problema al redirigir a WhatsApp. Por favor, intenta nuevamente.');
      }
    } else {
      // Redirección por si no está disponible gtag
      setTimeout(() => {
        window.location.href = WHATSAPP_URL;
      }, 3000);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-light to-white">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-lg mx-auto">
        {error ? (
          <>
            <h1 className="text-3xl font-bold text-red-600 mb-4">¡Ups! Algo salió mal</h1>
            <p className="text-brand-darkLight mb-6">{error}</p>
            <button
              onClick={() => window.location.href = WHATSAPP_URL}
              className="px-6 py-2 bg-brand-chocolate text-white rounded-lg hover:bg-brand-marron transition-colors duration-300"
            >
              Intentar nuevamente
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-brand-primary mb-4">Redirigiendo a WhatsApp...</h1>
            <p className="text-brand-darkLight mb-6">Un momento por favor</p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-chocolate mx-auto"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Gracias; 
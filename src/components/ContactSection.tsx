import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

const ContactSection = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here would be the actual form submission to a backend service
    // For this demo, we'll simulate a successful submission
    
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Gracias! Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.'
    });
    
    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      phone: '',
      reason: '',
      message: ''
    });
    
    // In a real application, you'd handle errors as well
  };

  return (
    <section id="contact" className="section bg-brand-sand">
      <div className="container">
        <h2 className="section-title">Reservar Consulta</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-soft p-6 md:p-8">
          {formStatus.submitted ? (
            <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-brand-green/20' : 'bg-red-100'}`}>
              <p className="text-center text-lg">{formStatus.message}</p>
              {formStatus.success && (
                <button
                  className="mt-4 mx-auto block primary-button"
                  onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                >
                  Enviar otro mensaje
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="form-label">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="+54 9 11 5555-5555"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="form-label">Motivo de consulta</label>
                  <select
                    id="reason"
                    name="reason"
                    value={formState.reason}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Seleccionar motivo</option>
                    <option value="anxiety">Ansiedad</option>
                    <option value="depression">Depresión</option>
                    <option value="couple">Terapia de pareja</option>
                    <option value="children">Terapia infantil</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="form-label">Mensaje (opcional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="form-input min-h-[120px]"
                  placeholder="Cuéntanos brevemente el motivo de tu consulta"
                ></textarea>
              </div>
              
              <div className="flex flex-col items-center">
                <button type="submit" className="primary-button w-full md:w-auto flex items-center justify-center">
                  Enviar consulta
                  <Send size={18} className="ml-2" />
                </button>
                
                <p className="text-xs text-brand-light mt-4 text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos 
                  para contactarte en relación a tu consulta. Nunca compartiremos tu información con terceros.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
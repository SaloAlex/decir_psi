const PrivacyPolicy = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-semibold text-brand-primary mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none text-brand-darkLight">
          <p className="mb-6">
            Última actualización: {new Date().toLocaleDateString('es-AR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-primary mb-4">1. Información que Recopilamos</h2>
            <p>
              En Decir Psi, recopilamos la siguiente información cuando nos contacta:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Nombre y apellido</li>
              <li>Número de teléfono</li>
              <li>Dirección de correo electrónico (si la proporciona)</li>
              <li>Información proporcionada voluntariamente en mensajes o consultas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-primary mb-4">2. Uso de la Información</h2>
            <p>
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Responder a sus consultas y proporcionar el servicio solicitado</li>
              <li>Agendar y gestionar turnos de consulta</li>
              <li>Enviar información relevante sobre nuestros servicios (solo si lo solicita)</li>
              <li>Mejorar nuestros servicios y la experiencia del usuario</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-primary mb-4">3. Confidencialidad y Seguridad</h2>
            <p>
              Toda la información compartida durante las consultas está protegida por el secreto profesional y las leyes de confidencialidad aplicables. Implementamos medidas de seguridad para proteger su información personal contra acceso, alteración o divulgación no autorizada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-primary mb-4">4. Cookies y Tecnologías de Seguimiento</h2>
            <p>
              Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación y analizar el uso del sitio. Estas herramientas pueden recopilar información como:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Páginas visitadas</li>
              <li>Tiempo de permanencia en el sitio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-primary mb-4">5. Sus Derechos</h2>
            <p>
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Acceder a su información personal</li>
              <li>Solicitar la rectificación de datos incorrectos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-primary mb-4">6. Contacto</h2>
            <p>
              Para ejercer sus derechos o realizar consultas sobre esta política de privacidad, puede contactarnos a través de:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>WhatsApp: +54 9 11 3491-0754</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-primary mb-4">7. Cambios en la Política de Privacidad</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. Le recomendamos revisar periódicamente esta página para mantenerse informado sobre las actualizaciones.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 
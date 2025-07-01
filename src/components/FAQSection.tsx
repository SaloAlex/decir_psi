import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  const itemId = `faq-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <article 
      className="border-b border-brand-chocolate/10 py-4"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className="flex items-center justify-between w-full text-left font-medium text-base md:text-lg focus:outline-none focus:text-brand-chocolate py-2 md:py-1"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={itemId}
      >
        <span itemProp="name">{question}</span>
        <span className="flex-shrink-0 ml-2" aria-hidden="true">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>
      {isOpen && (
        <div 
          className="pt-2 pb-4 text-brand-darkLight"
          id={answerId}
          role="region"
          aria-labelledby={itemId}
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <p itemProp="text">{answer}</p>
        </div>
      )}
    </article>
  );
};

const FAQSection = () => {
  const [isVisible, sectionRef] = useIntersectionObserver();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué tipo de servicio psicológico ofrecen?",
      answer: "Brindamos atención psicológica privada con un equipo de profesionales matriculados y especializados. Nuestro servicio se caracteriza por ofrecer un tratamiento personalizado, adaptado a las necesidades específicas de cada paciente, en un marco de profesionalismo y confidencialidad."
    },
    {
      question: "¿Cuánto dura una sesión de terapia psicológica?",
      answer: "Las sesiones individuales de terapia psicológica tienen una duración de 50 minutos, mientras que las sesiones de terapia de pareja o terapia familiar pueden extenderse hasta 60-75 minutos dependiendo de las necesidades específicas del tratamiento."
    },
    {
      question: "¿Cuál es el costo de una sesión de terapia?",
      answer: "Los honorarios se establecen según el tipo de terapia y el profesional tratante. Trabajamos con las principales obras sociales y prepagas. Contáctanos por WhatsApp para recibir información detallada sobre tarifas actualizadas y opciones de cobertura."
    },
    {
      question: "¿Realizan consultas psicológicas online?",
      answer: "Sí, brindamos sesiones de terapia online a través de plataformas seguras que garantizan la confidencialidad de las consultas. La terapia virtual es tan efectiva como la presencial y ofrece mayor flexibilidad horaria y comodidad para nuestros pacientes."
    },
    {
      question: "¿Con qué frecuencia se realizan las sesiones de terapia?",
      answer: "Generalmente se recomienda una sesión semanal al inicio del tratamiento psicológico. A medida que avanza el proceso terapéutico, la frecuencia puede ajustarse según las necesidades individuales y los objetivos terapéuticos de cada paciente."
    },
    {
      question: "¿Cómo garantizan la confidencialidad en las sesiones?",
      answer: "Respetamos estrictamente el secreto profesional y la confidencialidad de toda la información compartida en las sesiones de terapia, cumpliendo con las normas éticas y legales de la práctica psicológica. Solo en casos excepcionales donde exista riesgo vital, podría ser necesario romper la confidencialidad."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white" 
      ref={sectionRef}
      aria-label="Preguntas frecuentes sobre nuestros servicios"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container">
        <header className="text-center mb-8">
          <h2 
            className={`text-3xl md:text-4xl font-semibold text-brand-primary transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Preguntas Frecuentes sobre Terapia Psicológica
          </h2>
          <p className="mt-4 text-lg text-brand-darkLight">
            Resolvemos tus dudas sobre nuestros servicios de atención psicológica
          </p>
        </header>
        <div 
          className="max-w-3xl mx-auto"
          role="list"
          aria-label="Lista de preguntas frecuentes"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto dura una sesión de terapia?",
      answer: "Las sesiones individuales duran 50 minutos, mientras que las sesiones de pareja o familiares pueden extenderse hasta 60-75 minutos dependiendo de las necesidades específicas."
    },
    {
      question: "¿Cuáles son los honorarios por sesión?",
      answer: "Los honorarios varían según el tipo de terapia y el profesional. Ofrecemos planes accesibles y trabajamos con las principales obras sociales y prepagas. Contáctanos para más información sobre tarifas actualizadas."
    },
    {
      question: "¿Ofrecen terapia online?",
      answer: "Sí, ofrecemos sesiones online a través de plataformas seguras que garantizan la confidencialidad. La terapia virtual es tan efectiva como la presencial y brinda mayor flexibilidad."
    },
    {
      question: "¿Con qué frecuencia son las sesiones?",
      answer: "Generalmente se recomienda una sesión semanal al inicio del tratamiento. Conforme avanza el proceso, la frecuencia puede ajustarse según las necesidades y objetivos terapéuticos."
    },
    {
      question: "¿La información compartida es confidencial?",
      answer: "Absolutamente. Respetamos estrictamente el secreto profesional y la confidencialidad de toda la información compartida en las sesiones, salvo en casos excepcionales donde exista riesgo vital."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
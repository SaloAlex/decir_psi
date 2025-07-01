import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PrivacyPolicy from './components/PrivacyPolicy';
import Gracias from './components/Gracias';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
            <Route path="/gracias" element={<Gracias />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
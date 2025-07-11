import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <HeroSection />
                <AboutSection />
                <SpecialtiesSection />
                <TeamSection />
                <TestimonialsSection />
                <FAQSection />
                <ContactSection />
              </main>
            </>
          } />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
        </Routes>
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
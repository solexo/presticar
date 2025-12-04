import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll based on pathname
      const path = location.pathname;
      let targetId = '';
      switch (path) {
        case '/services':
          targetId = '#services';
          break;
        case '/booking':
          targetId = '#reserver';
          break;
        case '/contact':
          targetId = '#contact';
          break;
        default:
          window.scrollTo(0, 0);
          return;
      }
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function MainPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modal: string) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <BookingForm />
      <Footer onOpenModal={openModal} />
      <PrivacyPolicy isOpen={activeModal === 'privacy'} onClose={closeModal} />
      <TermsAndConditions isOpen={activeModal === 'terms'} onClose={closeModal} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<MainPage />} />
        <Route path="/booking" element={<MainPage />} />
        <Route path="/contact" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;

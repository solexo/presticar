import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
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

export default App;

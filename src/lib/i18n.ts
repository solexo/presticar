import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Header
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.features": "Features",
      "nav.booking": "Book Now",
      "nav.contact": "Contact",
      "nav.call": "Call",

      // Hero
      "hero.title": "Professional Transportation Services",
      "hero.subtitle": "Premium Transportation Service in France",
      "hero.description": "TAXI PARIS offers professional drivers and high-end vehicles for all your travels in France. Book in a few clicks and travel in complete peace of mind.",
      "hero.cta": "Book a Ride",
      "hero.contact": "Contact Us",
      "hero.stats.available": "24/7",
      "hero.stats.availableDesc": "Available",
      "hero.stats.secure": "100%",
      "hero.stats.secureDesc": "Secure",
      "hero.stats.country": "France",
      "hero.stats.countryDesc": "Entire",
      "hero.stats.drivers": "Certified Drivers",

      // Services
      "services.title": "Our Transportation Services",
      "services.subtitle": "Choose the category that fits your needs. All our vehicles are regularly maintained and driven by certified professional drivers.",
      "services.loading": "Loading services...",
      "services.book": "Book Now",

      // Booking Form
      "booking.title": "Book Your Ride",
      "booking.subtitle": "Fill out the form below and our team will contact you quickly",
      "booking.name": "Full Name",
      "booking.name.placeholder": "Your name",
      "booking.phone": "Phone",
      "booking.phone.placeholder": "+33 6 12 34 56 78",
      "booking.pickup": "Pickup Address",
      "booking.pickup.placeholder": "Complete pickup address",
      "booking.dropoff": "Drop-off Address",
      "booking.dropoff.placeholder": "Complete drop-off address",
      "booking.date": "Date and Time",
      "booking.category": "Vehicle Category",
      "booking.category.placeholder": "Select a category",
      "booking.notes": "Additional Notes (optional)",
      "booking.notes.placeholder": "Special luggage, child seat, etc.",
      "booking.submit": "Book Now",
      "booking.submitting": "Submitting...",
      "booking.success": "Your booking has been sent successfully! We will contact you soon.",
      "booking.error": "An error occurred. Please try again or contact us directly.",
      "booking.whatsapp.booking": "Book via WhatsApp",
      "booking.whatsapp.info": "Request Info",

      // Features
      "features.title": "Why Choose Taxi D?",
      "features.subtitle": "We are committed to providing the best transportation service in France",
      "features.available247": "Available 24/7",
      "features.available247Desc": "Non-stop service every day of the year, including holidays",
      "features.maximumSecurity": "Maximum Security",
      "features.maximumSecurityDesc": "Certified drivers, inspected vehicles and complete insurance",
      "features.professionalDrivers": "Professional Drivers",
      "features.professionalDriversDesc": "All our drivers are trained and hold a professional license",
      "features.personalizedService": "Personalized Service",
      "features.personalizedServiceDesc": "An experience tailored to your specific needs",
      "features.easyBooking": "Easy Booking",
      "features.easyBookingDesc": "Book in a few clicks via our website or WhatsApp",
      "features.flexiblePayment": "Flexible Payment",
      "features.flexiblePaymentDesc": "Several payment options available for your comfort",

      // Footer
      "footer.company": "TAXI PARIS",
      "footer.description": "TAXI PARIS - Your professional transportation service in France. Available 24/7 for all your travels.",
      "footer.quickLinks": "Quick Links",
      "footer.contact": "Contact",
      "footer.followUs": "Follow Us",
      "footer.rights": "All rights reserved.",
      "footer.services.comfort": "Comfort Sedan",
      "footer.services.van": "Premium Van",
      "footer.services.business": "Business Luxury",
      "footer.services.airport": "Airport Transfer",
      "footer.services.events": "Events",
      "footer.contact.available": "24/7 available",
      "footer.contact.response": "Response within 24h",
      "footer.contact.location": "Paris, France",
      "footer.contact.national": "National service",
      "footer.legal": "Legal Notice",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms & Conditions",

      // Stats
      "stats.drivers": "Pro Drivers",
      "stats.service": "24/7 Service",
      "stats.satisfaction": "Customer Satisfaction",
      "stats.rides": "Rides Completed",

      // Language
      "lang.fr": "Français",
      "lang.en": "English"
    }
  },
  fr: {
    translation: {
      // Header
      "nav.home": "Accueil",
      "nav.services": "Services",
      "nav.features": "Fonctionnalités",
      "nav.booking": "Réserver",
      "nav.contact": "Contact",
      "nav.call": "Appeler",

      // Hero
      "hero.title": "Services de Transport Professionnels",
      "hero.subtitle": "Service de Transport Premium en France",
      "hero.description": "TAXI PARIS vous propose des chauffeurs professionnels et des véhicules haut de gamme pour tous vos déplacements en France. Réservez en quelques clics et voyagez en toute sérénité.",
      "hero.cta": "Réservez Votre Course",
      "hero.contact": "Nous contacter",
      "hero.stats.available": "24/7",
      "hero.stats.availableDesc": "Disponible",
      "hero.stats.secure": "100%",
      "hero.stats.secureDesc": "Sécurisé",
      "hero.stats.country": "France",
      "hero.stats.countryDesc": "Entière",
      "hero.stats.drivers": "Chauffeurs certifiés",

      // Services
      "services.title": "Nos Services de Transport",
      "services.subtitle": "Choisissez la catégorie qui correspond à vos besoins. Tous nos véhicules sont entretenus régulièrement et conduits par des chauffeurs professionnels certifiés.",
      "services.loading": "Chargement des services...",
      "services.book": "Réserver maintenant",

      // Booking Form
      "booking.title": "Réserver votre course",
      "booking.subtitle": "Remplissez le formulaire ci-dessous et notre équipe vous recontactera rapidement",
      "booking.name": "Nom complet",
      "booking.name.placeholder": "Votre nom",
      "booking.phone": "Téléphone",
      "booking.phone.placeholder": "+33 6 12 34 56 78",
      "booking.pickup": "Adresse de départ",
      "booking.pickup.placeholder": "Adresse complète de départ",
      "booking.dropoff": "Adresse d'arrivée",
      "booking.dropoff.placeholder": "Adresse complète d'arrivée",
      "booking.date": "Date et heure",
      "booking.category": "Catégorie de véhicule",
      "booking.category.placeholder": "Sélectionnez une catégorie",
      "booking.notes": "Notes additionnelles (optionnel)",
      "booking.notes.placeholder": "Bagages spéciaux, siège enfant, etc.",
      "booking.submit": "Réserver maintenant",
      "booking.submitting": "Envoi en cours...",
      "booking.success": "Votre réservation a été envoyée avec succès! Nous vous contacterons bientôt.",
      "booking.error": "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.",
      "booking.whatsapp.booking": "Réserver via WhatsApp",
      "booking.whatsapp.info": "Demander des infos",

      // Features
      "features.title": "Pourquoi Nous Choisir",
      "features.subtitle": "Nous fournissons des services de transport exceptionnels avec une attention à chaque détail",
      "features.available247": "Disponible 24/7",
      "features.available247Desc": "Service non-stop tous les jours de l'année, y compris les jours fériés",
      "features.maximumSecurity": "Sécurité maximale",
      "features.maximumSecurityDesc": "Chauffeurs certifiés, véhicules contrôlés et assurance complète",
      "features.professionalDrivers": "Chauffeurs professionnels",
      "features.professionalDriversDesc": "Tous nos chauffeurs sont formés et possèdent une licence professionnelle",
      "features.personalizedService": "Service personnalisé",
      "features.personalizedServiceDesc": "Une expérience adaptée à vos besoins spécifiques",
      "features.easyBooking": "Réservation facile",
      "features.easyBookingDesc": "Réservez en quelques clics via notre site ou WhatsApp",
      "features.flexiblePayment": "Paiement flexible",
      "features.flexiblePaymentDesc": "Plusieurs options de paiement disponibles pour votre confort",

      // Footer
      "footer.company": "PRESTICAR",
      "footer.description": "TAXI PARIS - Votre service de transport professionnel en France. Disponible 24/7 pour tous vos déplacements.",
      "footer.quickLinks": "Liens Rapides",
      "footer.contact": "Contact",
      "footer.followUs": "Suivez-nous",
      "footer.rights": "Tous droits réservés.",
      "footer.services.comfort": "Berline Confort",
      "footer.services.van": "Van Premium",
      "footer.services.business": "Luxe Business",
      "footer.services.airport": "Transport Aéroport",
      "footer.services.events": "Événements",
      "footer.contact.available": "24/7 disponible",
      "footer.contact.response": "Réponse sous 24h",
      "footer.contact.location": "Paris, France",
      "footer.contact.national": "Service national",
      "footer.legal": "Mentions légales",
      "footer.privacy": "Politique de confidentialité",
      "footer.terms": "CGV",

      // Stats
      "stats.drivers": "Chauffeurs Pro",
      "stats.service": "Service Non-Stop",
      "stats.satisfaction": "Satisfaction Client",
      "stats.rides": "Courses Réalisées",

      // Language
      "lang.fr": "Français",
      "lang.en": "English"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
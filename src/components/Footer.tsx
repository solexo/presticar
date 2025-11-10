import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    const message = i18n.language === 'fr'
      ? 'Bonjour, j\'ai une question'
      : 'Hello, I have a question';
    window.open(`https://wa.me/33658966587?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent tracking-wider">
              PRESTICAR
            </div>
            <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-orange-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-orange-600 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 dark:bg-gray-700 p-3 rounded-full hover:bg-orange-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-gray-400 dark:text-gray-300 hover:text-orange-500 transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 dark:text-gray-300 hover:text-orange-500 transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#reserver" className="text-gray-400 dark:text-gray-300 hover:text-orange-500 transition-colors">
                  {t('nav.booking')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 dark:text-gray-300 hover:text-orange-500 transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 dark:text-gray-300">{t('footer.services.comfort')}</li>
              <li className="text-gray-400 dark:text-gray-300">{t('footer.services.van')}</li>
              <li className="text-gray-400 dark:text-gray-300">{t('footer.services.business')}</li>
              <li className="text-gray-400 dark:text-gray-300">{t('footer.services.airport')}</li>
              <li className="text-gray-400 dark:text-gray-300">{t('footer.services.events')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={handleWhatsAppContact}
                  className="flex items-start gap-3 text-gray-400 dark:text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">+33 1 23 45 67 89</div>
                    <div className="text-sm">{t('footer.contact.available')}</div>
                  </div>
                </button>
              </li>
              <li className="flex items-start gap-3 text-gray-400 dark:text-gray-300">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">contact@presti-car.fr</div>
                  <div className="text-sm">{t('footer.contact.response')}</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 dark:text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">{t('footer.contact.location')}</div>
                  <div className="text-sm">{t('footer.contact.national')}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 dark:text-gray-300 text-sm">
              © {currentYear} {t('footer.company')}. {t('footer.rights')}
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-orange-500 transition-colors">
                {t('footer.legal')}
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-orange-500 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-orange-500 transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

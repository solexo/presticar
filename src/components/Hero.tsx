import { MapPin, Clock, Shield, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const scrollToBooking = () => {
    document.getElementById('reserver')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppContact = () => {
    const message = i18n.language === 'fr'
      ? 'Bonjour, j\'ai besoin d\'informations sur vos services'
      : 'Hello, I need information about your services';
    window.open(`https://wa.me/33658966587?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="accueil" className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-semibold">
                {t('hero.subtitle')}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {t('hero.title')}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                {t('hero.cta')}
              </button>
              <button
                onClick={handleWhatsAppContact}
                className="flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                {t('hero.contact')}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{t('hero.stats.available')}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.availableDesc')}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{t('hero.stats.secure')}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.secureDesc')}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{t('hero.stats.country')}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t('hero.stats.countryDesc')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="flex items-center justify-center w-full h-[600px] rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl">
              <div className="text-center">
                <img
                  src="/images/logo.webp"
                  alt="TAXI PARIS Logo"
                  className="w-80 h-80 object-contain mx-auto mb-8"
                />
                <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-4">
                  TAXI PARIS
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                  Service de transport professionnel en Île-de-France
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                  <div className="text-gray-600 dark:text-gray-300">{t('hero.stats.drivers')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

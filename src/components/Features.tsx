import { Shield, Clock, Award, Users, Smartphone, CreditCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();
  const features = [
    {
      icon: Clock,
      titleKey: 'features.available247',
      descriptionKey: 'features.available247Desc',
    },
    {
      icon: Shield,
      titleKey: 'features.maximumSecurity',
      descriptionKey: 'features.maximumSecurityDesc',
    },
    {
      icon: Award,
      titleKey: 'features.professionalDrivers',
      descriptionKey: 'features.professionalDriversDesc',
    },
    {
      icon: Users,
      titleKey: 'features.personalizedService',
      descriptionKey: 'features.personalizedServiceDesc',
    },
    {
      icon: Smartphone,
      titleKey: 'features.easyBooking',
      descriptionKey: 'features.easyBookingDesc',
    },
    {
      icon: CreditCard,
      titleKey: 'features.flexiblePayment',
      descriptionKey: 'features.flexiblePaymentDesc',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-300 transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t(feature.titleKey)}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from 'react-i18next';

export default function Map() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('map.title', { defaultValue: 'Our Location' })}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('map.subtitle', { defaultValue: 'Find us on the map' })}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.2241,48.8156,2.4699,48.9022&layer=mapnik"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
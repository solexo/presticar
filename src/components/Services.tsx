import { Car, Users, Briefcase, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase, type Category } from '../lib/supabase';

export default function Services() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;

      // For now, provide English translations directly in the component
      // In a real app, these would come from the database
      const categoriesWithTranslations = (data || []).map(category => ({
        ...category,
        name_en: category.name === 'Taxi Premium' ? 'Premium Taxi' :
                category.name === 'Véhicule luxe' ? 'Luxury Vehicle' :
                category.name === 'Taxi Standard' ? 'Standard Taxi' :
                category.name === 'Taxi Van' ? 'Taxi Van' :
                category.name === 'Van Taxi' ? 'Taxi Van' : category.name,
        description_en: category.description === 'Véhicule haut de gamme pour un trajet en tout confort' ?
          'High-end vehicle for a comfortable journey' :
          category.description === 'Véhicule de luxe avec chauffeur professionnel' ?
          'Luxury vehicle with professional driver' :
          category.description === 'Véhicule confortable pour vos déplacements quotidiens' ?
          'Comfortable vehicle for your daily travels' :
          category.description === 'Véhicule confortable pour 1-3 passagers avec chauffeur professionnel' ?
          'Comfortable vehicle for 1-3 passengers with professional driver' :
          category.description === 'Véhicule spacieux pour groupes et bagages (4-7 passagers)' ?
          'Spacious vehicle for groups and luggage (4-7 passengers)' : category.description,
        features_en: category.features_en || category.features?.map((feature: string) =>
          feature === 'Eau offerte' ? 'Complimentary water' :
          feature === 'WiFi gratuit' ? 'Free WiFi' :
          feature === 'Chargeur téléphone' ? 'Phone charger' :
          feature === 'Chauffeur bilingue' ? 'Bilingual driver' :
          feature === 'Siège enfant disponible' ? 'Child seat available' :
          feature === 'Bagages supplémentaires' ? 'Extra luggage space' :
          feature === 'Climatisation' ? 'Air conditioning' :
          feature === 'GPS intégré' ? 'Integrated GPS' :
          feature === 'Air conditioning' ? 'Air conditioning' :
          feature === 'Paiement carte' ? 'Card payment' :
          feature === 'Chauffeur expérimenté' ? 'Experienced driver' :
          feature === '7 places' ? '7 seats' :
          feature === 'Grand coffre' ? 'Large trunk' :
          feature === 'Idéal groupes' ? 'Ideal for groups' :
          feature === 'Transfert aéroport' ? 'Airport transfer' :
          feature === 'Équipements premium' ? 'Premium equipment' : feature
        ) || []
      }));

      setCategories(categoriesWithTranslations);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (index: number) => {
    const icons = [Car, Users, Briefcase];
    const Icon = icons[index % icons.length];
    return <Icon className="w-8 h-8" />;
  };

  const scrollToBooking = () => {
    document.getElementById('reserver')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse text-gray-400 dark:text-gray-500">{t('services.loading')}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-300 transform hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full opacity-50"></div>

              <div className="p-8 relative z-10">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(index)}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {i18n.language === 'fr' ? category.name : category.name_en || category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {i18n.language === 'fr' ? category.description : category.description_en || category.description}
                </p>


                <div className="space-y-3 mb-8">
                  {Array.isArray(category.features) && category.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm">
                        {i18n.language === 'fr' ? feature : category.features_en?.[idx] || feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToBooking}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {t('services.book')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-orange-100 dark:border-gray-600">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">500+</div>
              <div className="text-gray-700 dark:text-gray-300">{t('stats.drivers')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <div className="text-gray-700 dark:text-gray-300">{t('stats.service')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">98%</div>
              <div className="text-gray-700 dark:text-gray-300">{t('stats.satisfaction')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">1M+</div>
              <div className="text-gray-700 dark:text-gray-300">{t('stats.rides')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

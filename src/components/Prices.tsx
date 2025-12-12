import { useTranslation } from 'react-i18next';

export default function Prices() {
  const { t } = useTranslation();

  const routes = [
    { from: 'PARIS', to: 'PARIS', prices: [30, 40, 50] },
    { from: 'PARIS', to: 'ORLY', prices: [40, 55, 70] },
    { from: 'PARIS', to: 'CDG', prices: [50, 65, 80] },
    { from: 'CDG', to: 'ORLY', prices: [70, 90, 100] },
    { from: 'PARIS', to: 'DISNEY', prices: [65, 75, 90] },
    { from: 'ORLY', to: 'DISNEY', prices: [65, 75, 90] },
    { from: 'CDG', to: 'DISNEY', prices: [65, 75, 90] },
    { from: 'BEAUVAIS', to: 'DISNEY', prices: [120, 150, 200] },
    { from: 'BEAUVAIS', to: 'PARIS', prices: [120, 150, 180] },
  ];

  const vehicleTypes = ['Eco', 'Berline', 'Van'];
  const perKmRates = [1.60, 2.00, 2.50];

  return (
    <section id="prices" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('prices.title', 'Nos Tarifs')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('prices.subtitle', 'Tarifs transparents pour tous vos déplacements')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Trajet</th>
                  <th className="px-6 py-4 text-center font-semibold">Eco</th>
                  <th className="px-6 py-4 text-center font-semibold">Berline</th>
                  <th className="px-6 py-4 text-center font-semibold">Van</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {route.from} → {route.to}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                      {route.prices[0]}€
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                      {route.prices[1]}€
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300">
                      {route.prices[2]}€
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-orange-100 dark:border-gray-600">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t('prices.perKm', 'Tarif au Kilomètre')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {vehicleTypes.map((type, index) => (
              <div key={type} className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {perKmRates[index]}€
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">{type}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">par km</div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
            {t('prices.note', 'Prix H.T. Tarifs indicatifs, peuvent varier selon les conditions.')}
          </p>
        </div>
      </div>
    </section>
  );
}
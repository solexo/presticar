import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('footer.privacy')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3>Politique de confidentialité</h3>
            <p>Chez TAXI PARIS, nous respectons votre vie privée et nous nous engageons à ne pas collecter, stocker ou traiter vos données personnelles.</p>

            <h4>Collecte de données :</h4>
            <p>Nous ne collectons aucune donnée personnelle vous concernant. Nos services de réservation se font exclusivement via WhatsApp ou téléphone, et aucune information n'est sauvegardée sur nos systèmes.</p>

            <h4>Utilisation des données :</h4>
            <p>Comme nous ne collectons pas de données, nous n'utilisons pas vos informations à des fins commerciales, marketing ou autres.</p>

            <h4>Partage des données :</h4>
            <p>Nous ne partageons aucune donnée avec des tiers, car nous n'en possédons aucune.</p>

            <h4>Cookies et suivi :</h4>
            <p>Notre site web n'utilise pas de cookies de suivi ou d'analyse. Nous ne traçons pas vos activités en ligne.</p>

            <h4>Contact :</h4>
            <p>Pour toute question concernant cette politique, contactez-nous à Paristaxipro@gmail.com ou au +33658966587.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsAndConditions({ isOpen, onClose }: TermsAndConditionsProps) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('footer.terms')}
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
            <h3>Conditions Générales de Vente</h3>
            <p>Les présentes conditions générales régissent les relations entre TAXI PARIS et ses clients pour les services de transport.</p>

            <h4>1. Services</h4>
            <p>TAXI PARIS propose des services de transport professionnel en France, disponibles 24/7.</p>

            <h4>2. Réservation</h4>
            <p>Les réservations peuvent être effectuées via WhatsApp, téléphone ou le formulaire en ligne. Aucune donnée n'est stockée après la réalisation du service.</p>

            <h4>3. Tarifs</h4>
            <p>Les tarifs sont communiqués au moment de la réservation. Le paiement s'effectue à la fin du trajet.</p>

            <h4>4. Responsabilités</h4>
            <p>TAXI PARIS s'engage à fournir un service de qualité. Le client est responsable de ses effets personnels.</p>

            <h4>5. Annulation</h4>
            <p>Les annulations doivent être faites au moins 2 heures à l'avance. Des frais peuvent s'appliquer.</p>

            <h4>6. Données personnelles</h4>
            <p>Conformément à notre politique de confidentialité, aucune donnée personnelle n'est collectée ou stockée.</p>

            <h4>7. Droit applicable</h4>
            <p>Les présentes conditions sont soumises au droit français.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LegalNoticeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalNotice({ isOpen, onClose }: LegalNoticeProps) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('footer.legal')}
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
            <h3>Mentions légales</h3>
            <p><strong>Éditeur du site :</strong></p>
            <p>TAXI PARIS<br />
            Société [Type de société]<br />
            SIRET : [Numéro SIRET]<br />
            Adresse : Paris, France<br />
            Téléphone : +33658966587<br />
            Email : Paristaxipro@gmail.com</p>

            <h3>Directeur de la publication :</h3>
            <p>[Nom du directeur]</p>

            <h3>Hébergement :</h3>
            <p>[Nom de l'hébergeur]<br />
            Adresse : [Adresse de l'hébergeur]</p>

            <h3>Propriété intellectuelle :</h3>
            <p>Le contenu de ce site est protégé par les lois françaises sur la propriété intellectuelle. Toute reproduction est interdite sans autorisation préalable.</p>

            <h3>Données personnelles :</h3>
            <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { MapPin, Calendar, User, Phone, MessageSquare, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supabase, type Category } from '../lib/supabase';

export default function BookingForm() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_phone: '',
    pickup_location: '',
    dropoff_location: '',
    category: '',
    pickup_date: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppBooking = () => {
    const message = i18n.language === 'fr'
      ? `Bonjour, je souhaite réserver une course:

Nom: ${formData.customer_name}
Téléphone: ${formData.customer_phone}
Départ: ${formData.pickup_location}
Arrivée: ${formData.dropoff_location}
Catégorie: ${formData.category}
Date/Heure: ${formData.pickup_date}
${formData.notes ? `Notes: ${formData.notes}` : ''}`
      : `Hello, I would like to book a ride:

Name: ${formData.customer_name}
Phone: ${formData.customer_phone}
Pickup: ${formData.pickup_location}
Drop-off: ${formData.dropoff_location}
Category: ${formData.category}
Date/Time: ${formData.pickup_date}
${formData.notes ? `Notes: ${formData.notes}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/33658966587?text=${encodedMessage}`, '_blank');
  };

  const handleWhatsAppInfo = () => {
    const message = `Bonjour, j'ai besoin d'informations concernant:

Départ: ${formData.pickup_location || 'À préciser'}
Arrivée: ${formData.dropoff_location || 'À préciser'}
Date: ${formData.pickup_date || 'À préciser'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/33658966587?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('bookings').insert([
        {
          ...formData,
          status: 'pending',
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        customer_name: '',
        customer_phone: '',
        pickup_location: '',
        dropoff_location: '',
        category: '',
        pickup_date: '',
        notes: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reserver" className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('booking.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('booking.subtitle')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="customer_name" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  <User className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  {t('booking.name')}
                </label>
                <input
                  type="text"
                  id="customer_name"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={t('booking.name.placeholder')}
                />
              </div>

              <div>
                <label htmlFor="customer_phone" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  <Phone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  {t('booking.phone')}
                </label>
                <input
                  type="tel"
                  id="customer_phone"
                  name="customer_phone"
                  value={formData.customer_phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={t('booking.phone.placeholder')}
                />
              </div>
            </div>

            <div>
              <label htmlFor="pickup_location" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                {t('booking.pickup')}
              </label>
              <input
                type="text"
                id="pickup_location"
                name="pickup_location"
                value={formData.pickup_location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder={t('booking.pickup.placeholder')}
              />
            </div>

            <div>
              <label htmlFor="dropoff_location" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                {t('booking.dropoff')}
              </label>
              <input
                type="text"
                id="dropoff_location"
                name="dropoff_location"
                value={formData.dropoff_location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder={t('booking.dropoff.placeholder')}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pickup_date" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  <Calendar className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  {t('booking.date')}
                </label>
                <input
                  type="datetime-local"
                  id="pickup_date"
                  name="pickup_date"
                  value={formData.pickup_date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="category" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  <MessageSquare className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  {t('booking.category')}
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">{t('booking.category.placeholder')}</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                <MessageSquare className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                {t('booking.notes')}
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder={t('booking.notes.placeholder')}
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 dark:bg-green-900/30 border-2 border-green-200 dark:border-green-700 rounded-xl p-4 text-green-800 dark:text-green-300">
                {t('booking.success')}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-700 rounded-xl p-4 text-red-800 dark:text-red-300">
                {t('booking.error')}
              </div>
            )}

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? t('booking.submitting') : t('booking.submit')}
              </button>

              <div className="grid md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex items-center justify-center gap-2 bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  {t('booking.whatsapp.booking')}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInfo}
                  className="flex items-center justify-center gap-2 border-2 border-green-700 text-green-700 py-3 rounded-xl font-semibold hover:bg-green-700 hover:text-white transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                  {t('booking.whatsapp.info')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

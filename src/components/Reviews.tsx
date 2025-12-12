import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Reviews() {
  const { t } = useTranslation();
  const reviews = [
    {
      name: t('reviews.review1.name'),
      rating: 5,
      date: '2025-11-15',
      text: t('reviews.review1.text'),
    },
    {
      name: t('reviews.review2.name'),
      rating: 5,
      date: '2025-12-22',
      text: t('reviews.review2.text'),
    },
    {
      name: t('reviews.review3.name'),
      rating: 4,
      date: '2025-08-30',
      text: t('reviews.review3.text'),
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="flex">{renderStars(review.rating)}</div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">"{review.text}"</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">- {review.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://g.page/r/Cf8407TGeDzbEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {t('reviews.leaveReview')}
          </a>
        </div>
      </div>
    </section>
  );
}
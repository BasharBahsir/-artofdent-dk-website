import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const reviews = [
  {
    id: 1,
    author: "Gunilla",
    rating: 5,
    text: "Det som verkligen imponerade mig var hur noggrann och grundligt undersökningen genomfördes. Tandläkaren tog sig tid att förklara varje steg och svarade tålmodigt på alla mina frågor. Jag kände mig verkligen sedd och hörd som patient, vilket gjorde mig mycket bekväm.",
    date: "2 veckor sedan",
    verified: true
  },
  {
    id: 2,
    author: "Maria S.",
    rating: 5,
    text: "Fantastisk service och mycket professionell personal. Fick akut hjälp samma dag och behandlingen var smärtfri. Rekommenderar varmt!",
    date: "1 månad sedan",
    verified: true
  },
  {
    id: 3,
    author: "Erik L.",
    rating: 5,
    text: "Bästa tandläkarkliniken i Malmö! Modern utrustning, vänlig personal och alltid punktliga tider. Har varit patient här i 3 år och är mycket nöjd.",
    date: "3 veckor sedan",
    verified: true
  }
]

export default function GoogleReviewsFooter() {
  const averageRating = 4.9
  const totalReviews = 127

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-lg font-semibold text-gray-900">🌟 Google recensioner</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">{averageRating}</span>
          </div>
          
          <p className="text-sm text-gray-600">
            Baseret på {totalReviews} anmeldelser
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-700">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{review.author}</p>
                  {review.verified && (
                    <p className="text-xs text-gray-500">✓ Verifierad kund</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=artofdent+malmö+recensioner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            🔍
            Se alla recensioner på Google
          </a>
        </div>
      </div>
    </div>
  )
}

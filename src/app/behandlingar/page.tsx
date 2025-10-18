import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const treatments = [
  {
    name: 'Akut tandvård',
    description: 'Vid tandvärk är det viktigt att kontakta en tandläkare.',
    slug: 'akut-tandvard'
  },
  {
    name: 'Tandimplantat',
    description: 'Ersättning av förlorade tänder med titaniumimplantat.',
    slug: 'tandimplantat'
  },
  {
    name: 'Estetisk tandvård',
    description: 'För vackrare tänder och ett strålande leende.',
    slug: 'estetisk-tandvard'
  },
  {
    name: 'Tandreglering',
    description: 'För sneda eller trångställda tänder.',
    slug: 'tandreglering'
  },
  {
    name: 'Barn tandvård',
    description: 'Tandvård för barn och ungdomar är kostnadsfri.',
    slug: 'barnvard'
  },
  {
    name: 'Tandblekning',
    description: 'Professionell tandblekning för vitare tänder.',
    slug: 'tandblekning'
  },
  {
    name: 'Tandhygienist',
    description: 'Professionell tandrengöring och förebyggande vård.',
    slug: 'tandhygienist'
  },
  {
    name: 'Rotfyllning',
    description: 'Behandling av infekterade tandrötter.',
    slug: 'rotfyllning'
  },
  {
    name: 'Tandundersökning',
    description: 'Den årliga undersökningen hos din tandläkare.',
    slug: 'tandundersokning'
  },
  {
    name: 'Tandvårdsrädsla',
    description: 'Specialiserad vård för patienter med tandvårdsrädsla.',
    slug: 'tandvardsradsla'
  }
]

export default function BehandlingarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-normal text-gray-900 mb-4">
              Alla våra behandlingar
            </h1>
          </div>

          {/* Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment) => (
              <div key={treatment.slug} className="bg-gray-50 p-6 rounded-lg">
                <Link href={`/behandlingar/${treatment.slug}`} className="block">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    {treatment.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {treatment.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-normal text-orange-600 mb-6">
              Dags för en undersökning?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Vi vet att du har hört det förr, men regelbundna besök hos tandvården är viktigt för 
              att dina tänder ska må bra. Välkommen till oss och upplev en trevligare tandläkare.
            </p>
            <div className="flex gap-4">
              <Link
                href="/boka-tid"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                BOKA ONLINE
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-700 hover:text-orange-600 px-6 py-3 font-medium transition-colors"
              >
                RING OSS
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const treatments = [
  {
    name: 'Akut tandpleje',
    description: 'Ved tandpine er det vigtigt at kontakte en tandlæge.',
    slug: 'akut-tandvard'
  },
  {
    name: 'Tandimplantater',
    description: 'Erstatning af mistede tænder med titaniumimplantater.',
    slug: 'tandimplantat'
  },
  {
    name: 'Æstetisk tandpleje',
    description: 'For smukkere tænder og et strålende smil.',
    slug: 'estetisk-tandvard'
  },
  {
    name: 'Tandregulering',
    description: 'For skæve eller tætpakkede tænder.',
    slug: 'tandreglering'
  },
  {
    name: 'Børnetandpleje',
    description: 'Tandpleje for børn og unge er gratis.',
    slug: 'barnvard'
  },
  {
    name: 'Tandblekning',
    description: 'Professionel tandblekning for hvidere tænder.',
    slug: 'tandblekning'
  },
  {
    name: 'Tandhygiejnist',
    description: 'Professionel tandrensning og forebyggende pleje.',
    slug: 'tandhygienist'
  },
  {
    name: 'Rodfyldning',
    description: 'Behandling af inficerede tandrødder.',
    slug: 'rotfyllning'
  },
  {
    name: 'Tandundersøgelse',
    description: 'Den årlige undersøgelse hos din tandlæge.',
    slug: 'tandundersokning'
  },
  {
    name: 'Tandlægeangst',
    description: 'Specialiseret pleje for patienter med tandlægeangst.',
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
              Alle vores behandlinger
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Som dansk patient får du betydelige besparelser sammenlignet med København. Vi dækker endda din rejse over Øresund!
            </p>
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
              Tid til en undersøgelse?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Vi ved, at du har hørt det før, men regelmæssige besøg hos tandlægen er vigtigt for, 
              at dine tænder skal have det godt. Velkommen til os og oplev en venligere tandlæge. Som dansk patient dækker vi din rejse over Øresund!
            </p>
            <div className="flex gap-4">
              <Link
                href="/boka-tid"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                BOOK ONLINE
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-700 hover:text-orange-600 px-6 py-3 font-medium transition-colors"
              >
                RING TIL OS
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

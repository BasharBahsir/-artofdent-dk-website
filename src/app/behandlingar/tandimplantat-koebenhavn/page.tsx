import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tandimplantat København - Spar 60% i Malmö | Artofdent Danmark",
  description: "Tandimplantat i København vs Malmö - spar op til 60%! Fra 12.000 kr i stedet for 25.000+ kr i København. Vi betaler din rejse over Øresund. Book konsultation i dag.",
  keywords: "tandimplantat københavn, billige tandimplantater, tandimplantat malmö, tandimplantat pris københavn, danske patienter malmö, øresund tandlæge",
}

export default function TandimplantatKoebenhavnPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tandimplantat København vs Malmö
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Spar op til 60% på tandimplantater ved at vælge Malmö frem for København. Samme kvalitet, moderne teknik, erfarne specialister - bare til en brøkdel af prisen.
            </p>
            
            {/* Price Comparison Banner */}
            <div className="mt-8 mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
                <h3 className="text-lg font-bold text-red-800 mb-2">København (typisk pris)</h3>
                <p className="text-3xl font-bold text-red-600">25.000-35.000 kr</p>
                <p className="text-sm text-red-600 mt-2">+ rejseomkostninger</p>
              </div>
              <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
                <h3 className="text-lg font-bold text-green-800 mb-2">Malmö (vores pris)</h3>
                <p className="text-3xl font-bold text-green-600">12.000-18.000 kr</p>
                <p className="text-sm text-green-600 mt-2">Vi betaler din rejse!</p>
              </div>
            </div>
            
            {/* Øresund Bridge Cost Coverage Banner */}
            <div className="mt-8 mx-auto max-w-2xl p-6 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl">
              <div className="flex items-center justify-center gap-x-2 mb-3">
                <div className="h-3 w-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-lg font-bold text-blue-800">GRATIS TRANSPORT OVER ØRESUND</span>
              </div>
              <p className="text-blue-700 font-medium">
                Vi dækker dine rejseomkostninger - tog, bus eller bilafgift. Du sparer endnu mere!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Malmö for Implants */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hvorfor vælge tandimplantater i Malmö?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Samme høje kvalitet som i København - bare til en brøkdel af prisen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Spar 13.000-17.000 kr</h3>
              <p className="text-gray-600">
                Vores tandimplantater koster 12.000-18.000 kr sammenlignet med 25.000-35.000 kr i København. Selv med rejse sparer du tusindvis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gratis transport</h3>
              <p className="text-gray-600">
                Vi betaler din rejse over Øresund - tog, bus eller bilafgift. Ingen ekstra omkostninger for danske patienter.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hurtigere behandling</h3>
              <p className="text-gray-600">
                Kortere ventetider end i København. Vi kan ofte tilbyde konsultation inden for 1-2 uger.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Samme høje kvalitet</h3>
              <p className="text-gray-600">
                Moderne udstyr, erfarne specialister og samme høje standarder som de bedste klinikker i København.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Garanti og sikkerhed</h3>
              <p className="text-gray-600">
                Samme garantier som i Danmark. EU-regler sikrer dine rettigheder som patient på tværs af grænser.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🇩🇰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dansk-venlig service</h3>
              <p className="text-gray-600">
                Vi forstår danske patienter og kan hjælpe med forsikring, refusion og alle praktiske spørgsmål.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sådan fungerer det for danske patienter
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En nem proces fra første konsultation til færdigt implantat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gratis konsultation</h3>
              <p className="text-gray-600">
                Book en gratis konsultation online eller ring til os. Vi vurderer dit tilfælde og laver en behandlingsplan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rejse til Malmö</h3>
              <p className="text-gray-600">
                Vi betaler din rejse over Øresund. Tag toget, bussen eller kør selv - vi dækker omkostningerne.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Behandling & opfølgning</h3>
              <p className="text-gray-600">
                Professionel behandling med moderne teknik. Vi følger op og sikrer det bedste resultat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <blockquote className="text-xl font-medium text-gray-900 mb-6">
                &ldquo;Jeg sparede over 15.000 kr på mit tandimplantat ved at vælge Malmö frem for København. 
                Kvaliteten var fantastisk, og de betalte endda min rejse over broen. Kan varmt anbefales!&rdquo;
              </blockquote>
              <cite className="text-gray-600">
                - Lars H., København (dansk patient)
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klar til at spare på dit tandimplantat?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Book en gratis konsultation i dag. Vi betaler din rejse over Øresund!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/boka-tid"
                className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-500 transition-all hover:shadow-xl"
              >
                BOOK GRATIS KONSULTATION
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-white hover:text-primary-700 transition-all hover:shadow-xl"
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

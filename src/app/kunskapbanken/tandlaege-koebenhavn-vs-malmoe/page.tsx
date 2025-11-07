import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tandlæge København vs Malmö - Betydelige Besparelser på Tandbehandling | Artofdent",
  description: "Sammenlign priser på tandlæge i København vs Malmö. Betydelige besparelser på tandbehandling! Vi betaler din rejse over Øresund. Professionel tandpleje til danske patienter.",
  keywords: "tandlæge københavn, tandlæge malmö, billig tandlæge, tandbehandling københavn, tandimplantat københavn, øresund tandlæge, danske patienter malmö",
}

export default function TandlaegeKoebenhavnVsMalmoePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tandlæge København vs Malmö
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Få betydelige besparelser på tandbehandling ved at vælge Malmö frem for København. Vi betaler endda din rejse over Øresund!
            </p>
            
            {/* Øresund Bridge Cost Coverage Banner */}
            <div className="mt-8 mx-auto max-w-2xl p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl">
              <div className="flex items-center justify-center gap-x-2 mb-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-lg font-bold text-green-800">SÆRLIGT TILBUD TIL DANSKE PATIENTER</span>
              </div>
              <p className="text-green-700 font-medium">
                <strong>Vi betaler din rejse over Øresund!</strong> Tog, bus eller bilafgift - vi dækker omkostningerne når du vælger os.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Price Comparison Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Prissammenligning: København vs Malmö
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Se hvor meget du kan spare ved at vælge tandpleje i Malmö frem for København
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Behandling</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-red-600">København (typisk pris)</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Malmö (vores pris)</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Du sparer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Tandundersøgelse</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">800-1200 kr</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">450 kr</td>
                    <td className="px-6 py-4 text-center text-sm text-blue-600 font-bold">350-750 kr besparelse</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Tandimplantat</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">25.000-35.000 kr</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">12.000-18.000 kr</td>
                    <td className="px-6 py-4 text-center text-sm text-blue-600 font-bold">13.000-17.000 kr besparelse</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Tandblekning</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">4.000-6.000 kr</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">1.800-2.500 kr</td>
                    <td className="px-6 py-4 text-center text-sm text-blue-600 font-bold">2.200-3.500 kr besparelse</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Rodfyldning</td>
                    <td className="px-6 py-4 text-center text-sm text-red-600 font-semibold">3.500-5.000 kr</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">1.500-2.200 kr</td>
                    <td className="px-6 py-4 text-center text-sm text-blue-600 font-bold">2.000-2.800 kr besparelse</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Malmö Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hvorfor vælge tandlæge i Malmö?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Betydelige besparelser</h3>
              <p className="text-gray-600">
                Få betydelige besparelser sammenlignet med københavnske priser. Selv med rejseomkostninger sparer du tusindvis af kroner.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vi betaler din rejse</h3>
              <p className="text-gray-600">
                Tog, bus eller bilafgift over Øresund - vi dækker dine transportomkostninger, så du sparer endnu mere.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Samme høje kvalitet</h3>
              <p className="text-gray-600">
                Moderne udstyr, erfarne tandlæger og samme høje standarder som i København - bare til en brøkdel af prisen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🕐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hurtigere tider</h3>
              <p className="text-gray-600">
                Kortere ventetider end i København. Vi kan ofte tilbyde tid samme uge eller endda samme dag for akutte tilfælde.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🇩🇰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dansk-venlig service</h3>
              <p className="text-gray-600">
                Vi forstår danske patienter og kan hjælpe med forsikring, refusion og alle praktiske spørgsmål.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Garanti og sikkerhed</h3>
              <p className="text-gray-600">
                Samme garantier og forsikringsdækning som i Danmark. EU-regler sikrer dine rettigheder.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klar til at spare på din tandpleje?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Book din tid i dag og oplev forskellen. Vi betaler din rejse over Øresund!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/boka-tid"
                className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-500 transition-all hover:shadow-xl"
              >
                BOOK TID NU
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-white hover:text-primary-700 transition-all hover:shadow-xl"
              >
                KONTAKT OS
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

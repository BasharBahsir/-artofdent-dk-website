'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandproteserMalmoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Tandproteser Malmö" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Tandproteser</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Kompletta lösningar för saknade tänder - återfå ditt leende och tuggfunktion.</p>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Tandproteser</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Tandproteser erbjuder effektiva lösningar för personer som förlorat flera eller alla tänder. Modern protesteknologi ger naturligt utseende och god funktion.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Typer av tandproteser</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Helproteser - för patienter som saknar alla tänder</li>
            <li>Delproteser - för patienter som saknar flera tänder</li>
            <li>Implantatburna proteser - maximal stabilitet och komfort</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Behandlingsprocessen</h2>
          <p className="text-gray-700 leading-7 mb-6">Konsultation och planering inkluderar undersökning av munhälsa, röntgen och avtryck. Förberedelser kan innefatta tandutdragningar och läkning. Därefter tas exakta avtryck och färg- och formval görs. Slutligen monteras och justeras den färdiga protesen.</p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Skötsel av tandproteser</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Skölj efter måltider</li>
              <li>Borsta med mjuk borste dagligen</li>
              <li>Använd protesrengöringsmedel</li>
              <li>Förvara i vatten nattetid</li>
              <li>Djuprengöring veckovis med speciella tabletter</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent för proteser?</h2>
          <p className="text-gray-700 leading-7 mb-6">Vi på Art of Dent är specialister på alla typer av tandproteser med modern CAD/CAM-teknologi. Våra erfarna protestandläkare arbetar varsamt för att ge dig bästa möjliga resultat. Vi erbjuder garanti på alla proteser och flexibla betalningsplaner.</p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka proteskonsultation</h2>
          <p className="text-gray-600 mb-6">Behöver du tandprotes? Kontakta oss på Art of Dent för kostnadsfri konsultation. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/tandimplantat-malmo-kostnader-behandling" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandimplantat</Link>
              <Link href="/kunskapbanken/losa-tander-hos-vuxna" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Lösa tänder</Link>
              <Link href="/kunskapbanken/ersatta-forlorade-tander" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Ersätta tänder</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

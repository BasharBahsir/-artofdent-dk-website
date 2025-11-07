'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function BarntandvardMalmoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Barntandvård Malmö" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Barntandvård i Malmö</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Trygg och barnvänlig tandvård som skapar positiva upplevelser för livet.</p>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Barntandvård</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Barntandvård i Malmö fokuserar på att skapa positiva upplevelser som formar barnets relation till tandvård för livet. Rätt tandläkare kan göra skillnaden mellan rädsla och trygghet.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför är tidig tandvård viktig?</h2>
          <p className="text-gray-700 leading-7 mb-6">Förebyggande vård hjälper till att upptäcka problem tidigt, lära goda vanor och förhindra karies. Positiva upplevelser i tidig ålder minskar tandvårdsrädsla, bygger förtroende och skapar viktiga rutiner.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad ingår i barntandvård?</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Första besöket vid 1-2 års ålder</li>
            <li>Regelbundna kontroller var 6:e månad</li>
            <li>Profylax och rengöring</li>
            <li>Fluorbehandling för friska tänder</li>
            <li>Fyllningar anpassade för barn</li>
            <li>Ortodontisk bedömning</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Tips för föräldrar</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Börja tidigt - första besöket vid 1 års ålder</li>
              <li>Var positiv - undvik skrämmande ord</li>
              <li>Regelbunden borstning två gånger dagligen</li>
              <li>Begränsa socker mellan måltider</li>
              <li>Använd fluor enligt tandläkarens rekommendation</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent för barntandvård?</h2>
          <p className="text-gray-700 leading-7 mb-6">Vi på Art of Dent har specialutbildade barntandläkare som skapar en trygg och lekfull miljö. Våra erfarna tandläkare arbetar varsamt och tålmodigt för att ge ditt barn positiva upplevelser.</p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka ditt barns första tandbesök</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent för en trygg barntandvård. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/behandlingar/barnvard" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Barntandvård</Link>
              <Link href="/kunskapbanken/karies" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Karies</Link>
              <Link href="/kunskapbanken/munhygien-malmo-expertrad-hemma" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhygien</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

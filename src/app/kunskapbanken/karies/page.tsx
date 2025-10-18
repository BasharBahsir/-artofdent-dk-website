'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function KariesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/Miljöfoton på kliniken (1).jpg"
            alt="Tandläkare Malmö - Kariesbehandling"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Karies - Hål i tänderna
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            Erfaren tandläkare i Malmö behandlar karies med modern teknik. Boka tid hos Art of Dent för professionell tandvård.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Karies</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">
            Karies, eller hål i tänderna, är en av de vanligaste tandsjukdomarna. På Art of Dent i Malmö behandlar vi karies effektivt med moderna metoder för att bevara dina tänder.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad är karies?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Karies uppstår när bakterier i munnen bryter ner socker och producerar syra som angriper tandemaljenKaries börjar ofta som små vita eller bruna fläckar på tanden och utvecklas till hål om det inte behandlas i tid.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Symtom på karies</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Känslighet för kallt, varmt eller sött</li>
            <li>Synliga hål eller fläckar på tänderna</li>
            <li>Tandvärk eller obehag vid tuggning</li>
            <li>Missfärgning av tanden (vit, brun eller svart)</li>
            <li>Dålig andedräkt som inte försvinner</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Kariesbehandling hos tandläkare i Malmö</h2>
          <p className="text-gray-700 leading-7 mb-6">
            På vår tandläkarklinik i Malmö behandlar vi karies genom att ta bort den angripna tandvävnaden och fylla hålet med högkvalitativa material. Vid mindre karies i tidigt stadium kan fluorbehandling räcka. Vid djupare karies kan rotfyllning eller krona behövas. Vi använder alltid lokalbedövning för smärtfri behandling.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Förebygg karies</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta tänderna två gånger dagligen med fluortandkräm</li>
              <li>Använd tandtråd eller mellanrumsborste dagligen</li>
              <li>Begränsa intag av sötsaker och snacks mellan måltiderna</li>
              <li>Besök tandläkaren regelbundet för kontroll</li>
              <li>Undvik att sova med nattflaska om du har små barn</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent i Malmö?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Vi på Art of Dent är specialister på att behandla karies med moderna tekniker och material. Våra erfarna tandläkare i Malmö arbetar varsamt för att bevara så mycket frisk tandsubstans som möjligt. Vi erbjuder flexibla tider och tar emot både barn och vuxna.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tid hos tandläkare i Malmö</h2>
          <p className="text-gray-600 mb-6">
            Misstänker du att du har karies? Kontakta oss på Art of Dent för en undersökning. Ring <strong>040-121 108</strong> eller boka tid online.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/boka-tid"
              className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all"
            >
              BOKA TID ONLINE
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all"
            >
              KONTAKTA OSS
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Relaterade ämnen
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/tandvark" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandvärk
              </Link>
              <Link href="/kunskapbanken/tandsten" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandsten
              </Link>
              <Link href="/behandlingar/tandundersokning" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandundersökning
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

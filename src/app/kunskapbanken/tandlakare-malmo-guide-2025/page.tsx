'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandlakareMalmoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/Miljöfoton på kliniken (3).jpg"
            alt="Tandläkare Malmö - Art of Dent"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tandläkare Malmö
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            Erfarna tandläkare i Malmö behandlar karies med modern teknik. Boka tid hos Art of Dent för professionell tandvård.
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
            <span className="text-gray-900">Tandläkare Malmö</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">
            Att hitta rätt tandläkare i Malmö kan kännas överväldigande med alla alternativ som finns tillgängliga. Som Skånes största stad erbjuder Malmö ett brett utbud av tandvårdskliniker. På Art of Dent kombinerar vi modern teknik med personlig omsorg för att ge dig den bästa tandvården i Malmö.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad kännetecknar en bra tandläkare i Malmö?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            De bästa tandläkarna i Malmö investerar i modern teknik som digital röntgen, 3D-scanning och laserteknik för att ge dig den mest avancerade vården. Leta efter kliniker med legitimerade tandläkare som har gedigen utbildning och kontinuerlig vidareutbildning inom tandvård.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Populära tandvårdsbehandlingar</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Allmän tandvård: Kontroller, rengöring och fyllningar</li>
            <li>Tandimplantat: Ersättning av förlorade tänder</li>
            <li>Tandblekning: För ett vitare leende</li>
            <li>Ortodonti: Tandställning och tandreglering</li>
            <li>Akut tandvård: För plötsliga tandproblem</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Tips för att välja tandläkare i Malmö</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Läs recensioner från tidigare patienter</li>
              <li>Kontrollera legitimation hos Socialstyrelsen</li>
              <li>Besök kliniken för att få en känsla för miljön</li>
              <li>Fråga om priser och försäkringsalternativ</li>
              <li>Utvärdera tillgänglighet för akuta situationer</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent i Malmö?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Vi på Art of Dent är specialister på professionell tandvård med moderna tekniker och utrustning. Våra erfarna tandläkare i Malmö arbetar varsamt och professionellt för att ge dig bästa möjliga vård. Vi erbjuder flexibla tider och tar emot både barn och vuxna.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tid hos tandläkare i Malmö</h2>
          <p className="text-gray-600 mb-6">
            Behöver du en tandläkare? Kontakta oss på Art of Dent för en undersökning. Ring <strong>040-121 108</strong> eller boka tid online.
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
              <Link href="/behandlingar/akut-tandvard" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Akut tandvård
              </Link>
              <Link href="/behandlingar/tandimplantat" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandimplantat
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

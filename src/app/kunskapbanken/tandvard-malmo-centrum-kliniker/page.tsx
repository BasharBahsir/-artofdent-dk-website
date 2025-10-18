'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandvardMalmoCentrumPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Tandvård Malmö Centrum" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Tandvård i Malmö Centrum</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Centralt belägen tandvårdsklinik med hög kvalitet och god tillgänglighet i Malmö city.</p>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Tandvård Malmö Centrum</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Att bo eller arbeta i Malmö centrum ger dig tillgång till några av stadens bästa tandvårdskliniker. Med närhet till kollektivtrafik och parkering är det enkelt att ta hand om din munhälsa.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Fördelar med tandvård i centrum</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Nära Malmö Central och bra kollektivtrafikförbindelser</li>
            <li>Parkeringsmöjligheter i närheten</li>
            <li>Erfarna tandläkare med modern utrustning</li>
            <li>Flexibla öppettider för dig som arbetar i city</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tjänster som erbjuds</h2>
          <p className="text-gray-700 leading-7 mb-6">Vi erbjuder rutinkontroller och profylax, fyllningar och rotbehandlingar, tandimplantat och broar, tandblekning och estetisk tandvård samt akut tandvård.</p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Art of Dent i centrum</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Centralt läge nära Malmö C</li>
              <li>Moderna lokaler och utrustning</li>
              <li>Erfarna tandläkare och tandhygienister</li>
              <li>Flexibla tider även kvällar</li>
              <li>All tandvård under ett tak</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">Vi på Art of Dent erbjuder professionell tandvård i centrala Malmö med moderna tekniker och utrustning. Våra erfarna tandläkare arbetar varsamt för att ge dig bästa möjliga vård i en trygg miljö.</p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tid i Malmö Centrum</h2>
          <p className="text-gray-600 mb-6">Behöver du tandvård i city? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kontakt" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Hitta klinik</Link>
              <Link href="/boka-tid" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Boka tid</Link>
              <Link href="/om-oss" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Om oss</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

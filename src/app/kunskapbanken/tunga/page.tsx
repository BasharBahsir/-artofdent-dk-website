'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TungaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Tunga" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Tunga</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Ett muskulärt organ med viktiga funktioner för smak, tal och sväljning.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Tunga</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Tungan är ett muskulärt organ i munnen med många viktiga funktioner. Den består av åtta olika muskler som gör den extremt rörlig och precis.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tungans uppbyggnad</h2>
          <p className="text-gray-700 leading-7 mb-6">Tungan består av inre muskler som ändrar tungans form. Yttre muskler fäster tungan och rör den. Slemhinna täcker ytan med papiller och smaklökar. Blodkärl och nerver löper genom tungan. Tungroten fäster vid käkbenet och tungbenet.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tungans delar</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Tungspetsen</strong> - Främre delen, mest rörlig</li>
            <li><strong>Tungbladet</strong> - Mittdelen med de flesta smakpapillerna</li>
            <li><strong>Tungryggen</strong> - Ovansidan täckt med papiller</li>
            <li><strong>Tungroten</strong> - Bakre delen som fäster vid svalget</li>
            <li><strong>Tungundersidan</strong> - Slät, tunn slemhinna</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tungans viktiga funktioner</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Smak</strong> - Smaklökar känner av de fem grundsmakerna. <strong>Tuggning</strong> - Blandar mat med saliv och formar matbiten. <strong>Sväljning</strong> - Trycker maten mot gommen och ner i svalget. <strong>Tal</strong> - Formar ljud tillsammans med läppar och gom. <strong>Rengöring</strong> - Skrapar bort matrester från tänderna.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Tecken på frisk tunga</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Rosa eller ljust röd färg</li>
              <li>Fuktig yta med tunn beläggning</li>
              <li>Papillerna syns tydligt</li>
              <li>Inga sår, utväxter eller missfärgningar</li>
              <li>God rörlighet utan smärta</li>
              <li>Neutral smak i munnen</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga tungproblem</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Beläggning på tungan</strong> - Bakterier, matrester och döda celler. Normalt men bör rengöras. <strong>Geografisk tunga</strong> - Ofarliga fläckar som ändrar form. <strong>Svart hårig tunga</strong> - Papiller blir långa och mörka, ofta från tobak. <strong>Tungsvamp</strong> - Vita beläggningar från jästsvamp. <strong>Tungbränna</strong> - Brännande känsla, kan ha många orsaker.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Skötsel av tungan</h2>
          <p className="text-gray-700 leading-7 mb-6">Rengör tungan dagligen med tungskrapa eller tandborste. Borsta försiktigt från roten mot spetsen. Skölj munnen väl. Detta minskar bakterier och förbättrar andedräkten. Vid beläggning eller missfärgning, kontakta tandläkare.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö undersöker vi tungan noggrant vid varje kontroll. Vi upptäcker förändringar tidigt och kan behandla eller remittera vid behov. Vi ger råd om tungrengöring och munhygien.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka munundersökning</h2>
          <p className="text-gray-600 mb-6">Problem med tungan? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/smaklökar-och-papiller" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Smaklokar</Link>
              <Link href="/kunskapbanken/belaggning-pa-tungan" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Beläggning på tungan</Link>
              <Link href="/kunskapbanken/munhala" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhåla</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

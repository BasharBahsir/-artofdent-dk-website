'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function HorntandPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Hörntand" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Hörntand</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">De spetsiga tänderna som hjälper dig att riva och skära mat.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Hörntand</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Hörntänder, eller caniner som de kallas medicinskt, är de spetsiga tänderna som sitter vid mungiporna. De är våra längsta och starkaste tänder.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Var sitter hörntänderna?</h2>
          <p className="text-gray-700 leading-7 mb-6">Du har fyra hörntänder - en på vardera sidan i överkäken och en på vardera sidan i underkäken. De sitter mellan framtänderna (incisiverna) och de små kindtänderna (premolarerna), precis vid mungiporna.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hörntändernas funktion</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Riva och skära av mat, särskilt kött och fibrös mat</li>
            <li>Styra käkens rörelser vid tuggning</li>
            <li>Stödja läpparna och ge ansiktet form</li>
            <li>Skydda de andra tänderna vid sidorörelser</li>
            <li>Förde la tuggkraften jämnt</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Speciella egenskaper</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Längsta tandroten av alla tänder - extra stabila</li>
              <li>Spetsig krona perfekt för att riva</li>
              <li>Tjockast emalj vid toppen där slitaget är störst</li>
              <li>Viktig för ansiktets utseende</li>
              <li>Ofta kallade &quot;ögontänder&quot; på svenska</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Problem med hörntänder</h2>
          <p className="text-gray-700 leading-7 mb-6">Hörntänder kan ibland växa fel eller sitta kvar i käkbenet (retinerade hörntänder). Detta är vanligast i överkäken. Andra problem inkluderar slitage på spetsen, karies vid tandköttskanten, eller felpositionering som kan kräva tandreglering.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö har vi erfarenhet av att behandla alla problem med hörntänder. Från rutinkontroller till komplexa tandregleringar - vi tar hand om dina hörntänder professionellt.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tandundersökning</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/caniner" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Caniner</Link>
              <Link href="/kunskapbanken/incisiver" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Incisiver</Link>
              <Link href="/behandlingar/tandreglering" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandreglering</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

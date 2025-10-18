'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandvardsforsakringMalmoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Tandvårdsförsäkring" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Tandvårdsförsäkring</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Smart ekonomi för din munhälsa - spara tusentals kronor årligen på tandvård.</p>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Tandvårdsförsäkring</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Tandvårdsförsäkring kan betydligt minska dina tandvårdskostnader. Med rätt försäkring kan du spara tusentals kronor årligen på behandlingar.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför behöver du tandvårdsförsäkring?</h2>
          <p className="text-gray-700 leading-7 mb-6">Tandvård kan vara kostsamt. Implantat kostar 20 000-35 000 kr, kronor 8 000-15 000 kr, rotbehandling 5 000-12 000 kr och ortodonti 25 000-60 000 kr. Tandvård ingår inte i högkostnadsskyddet för vård över 23 år.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Typer av tandvårdsförsäkringar</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Grundförsäkring - täcker akut tandvård och grundläggande behandlingar</li>
            <li>Premiumförsäkring - täcker alla tandvårdsbehandlingar inkl estetiska</li>
            <li>Familjeförsäkring - täcker hela familjen med rabatt</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Tips för att välja rätt försäkring</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Jämför årlig ersättning vs premie</li>
              <li>Kontrollera karenstider för olika behandlingar</li>
              <li>Se vilka kliniker som samarbetar</li>
              <li>Läs villkoren noga</li>
              <li>Överväg dina behov - förebyggande vs behandling</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad täcks vanligtvis?</h2>
          <p className="text-gray-700 leading-7 mb-6">Alltid täckt: Akut tandvård, smärtlindring och infektionsbehandling. Ofta täckt: Fyllningar, rotbehandlingar, tandutdragning och proteser. Sällan täckt: Kosmetisk tandblekning och veneers av estetiska skäl.</p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Få hjälp med tandvårdsförsäkring</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent för rådgivning. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/behandlingar/tandvard-bidrag" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandvårdsbidrag</Link>
              <Link href="/behandlingar/tiotandvard" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tiotandvård</Link>
              <Link href="/kontakt" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Kontakt</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

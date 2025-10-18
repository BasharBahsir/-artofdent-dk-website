'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function KakbenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Käkben" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Käkben</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">De ben som håller dina tänder på plats och formar ditt ansikte.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Käkben</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Käkbenen är de ben som håller tänderna på plats och ger ansiktet dess form. Du har två käkben - överkäksbenet (maxilla) och underkäksbenet (mandibula).</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Överkäksbenet (Maxilla)</h2>
          <p className="text-gray-700 leading-7 mb-6">Överkäksbenet är fast förankrat i skallen och rör sig inte. Det bildar munhålans tak, näshålans golv och ögonhålans golv. I överkäksbenet finns tandfack för de övre tänderna. Överkäken innehåller också maxillarsinus - ett luftfyllt hålrum som kan påverkas vid tandinfektioner.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Underkäksbenet (Mandibula)</h2>
          <p className="text-gray-700 leading-7 mb-6">Underkäksbenet är det enda rörliga benet i skallen. Det är U-format och fästs vid skallbasen via käkleden (temporomandibularleden). Underkäken innehåller tandfack för de nedre tänderna och är det starkaste benet i ansiktet.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Käkbenens funktioner</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Håller tänderna på plats i tandfacken (alveolerna)</li>
            <li>Ger ansiktet dess form och struktur</li>
            <li>Möjliggör tuggning och bitning</li>
            <li>Överför tuggkraften från tänderna till skallen</li>
            <li>Skyddar viktiga nerver och blodkärl</li>
            <li>Stödjer ansiktets mjukdelar</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Käkbenens hälsa</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Bra munhygien skyddar käkbenet mot parodontit</li>
              <li>Käkbenet bryts ned när tänder saknas - överväg implantat</li>
              <li>Infektioner i tänderna kan spridas till käkbenet</li>
              <li>Osteoporos kan påverka käkbenets densitet</li>
              <li>Kalcium och vitamin D är viktigt för käkbenets styrka</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Problem med käkben</h2>
          <p className="text-gray-700 leading-7 mb-6">Parodontit kan leda till förlust av käkben runt tänderna. Osteomyelit (beninfektion) kan uppstå från obehandlade tandinfektioner. Käkbensfrakturer kan ske vid trauma. Osteonekros (bendöd) kan uppstå som biverkning av vissa mediciner.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö övervakar vi käkbenets hälsa vid varje kontroll. Vi använder röntgen för att upptäcka benförlust tidigt och erbjuder behandlingar för att bevara och återuppbygga käkben, inklusive benaugmentation vid implantatbehandling.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka käkbenskontroll</h2>
          <p className="text-gray-600 mb-6">Vill du kontrollera ditt käkben? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/kake" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Käke</Link>
              <Link href="/kunskapbanken/parodontit-malmo-tandkottssjukdom" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Parodontit</Link>
              <Link href="/behandlingar/tandimplantat" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandimplantat</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

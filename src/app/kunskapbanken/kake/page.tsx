'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function KakePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Käke" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Käken</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Lär dig om käkens anatomi, funktion och vanliga problem.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Käke</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Käken består av överkäken och underkäken tillsammans med tillhörande muskulatur, leder och vävnad. Ett komplext system som möjliggör tuggning, tal och ansiktsuttryck.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Käkens uppbyggnad</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Överkäken</strong> är fast förankrad i skallen och rör sig inte. Den innehåller de övre tänderna och bildar delar av näshålan och ögonhålan. <strong>Underkäken</strong> är rörlig och fäster vid skallen via käkleden på vardera sidan. Den är U-formad och innehåller de nedre tänderna.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Käkmuskulaturen</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Tuggmusklerna</strong> - Sluter käken med stor kraft</li>
            <li><strong>Tinningmuskeln</strong> - Sluter och drar tillbaka underkäken</li>
            <li><strong>Vingmusklerna</strong> - Möjliggör sidorörelser och framskjutning</li>
            <li><strong>Munbottenmusklerna</strong> - Öppnar munnen</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Käkleden (TMJ)</h2>
          <p className="text-gray-700 leading-7 mb-6">Temporomandibularleden (TMJ) är en av kroppens mest komplexa leder. Den tillåter både gångjärnsrörelse (öppna/stänga) och glidrörelse (fram/bak och sida till sida). Mellan ledytorna finns en broskskiva som fungerar som stötdämpare.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Käkens funktioner</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Tugga och bearbeta mat</li>
              <li>Bita av och hålla fast föda</li>
              <li>Möjliggöra tal och språk</li>
              <li>Skapa ansiktsuttryck och mimik</li>
              <li>Stödja ansiktets struktur</li>
              <li>Svälja och andas</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga käkproblem</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>TMD (Temporomandibulär dysfunktion)</strong> orsakar smärta och begränsad rörlighet i käken. <strong>Bruxism</strong> (tandgnissling) belastar käken och sliter tänderna. <strong>Käkledsluxation</strong> innebär att käken hoppar ur led. <strong>Käkledsartros</strong> kan utvecklas med åldern.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö har vi erfarenhet av att behandla käkproblem. Vi undersöker käkleden, muskulaturen och bettet. Vi erbjuder behandlingar som bettskena, fysioterapi och i vissa fall remiss till käkkirurg.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Har du käkproblem?</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent för undersökning. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/kakben" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Käkben</Link>
              <Link href="/kunskapbanken/temporomandibular-dysfunktion" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">TMD</Link>
              <Link href="/kunskapbanken/bruxism" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Bruxism</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

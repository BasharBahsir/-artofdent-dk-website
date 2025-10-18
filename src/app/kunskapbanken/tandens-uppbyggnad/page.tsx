'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandensUppbyggnadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Tandens uppbyggnad" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Tandens uppbyggnad</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">En detaljerad genomgång av tandens olika lager och strukturer.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Tandens uppbyggnad</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">En tand består av flera olika vävnader och strukturer som samarbetar för att göra det möjligt att tugga, tala och le. Varje lager har sin specifika funktion och uppbyggnad.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Kronans lager</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Emalj (enamelum)</strong> - Yttersta lagret på kronan. Kroppens hårdaste vävnad, består till 96% av mineraler. Skyddar tanden mot slitage och syraattacker. Kan inte återbildas om den skadas. <strong>Dentin (dentinum)</strong> - Under emaljen, utgör största delen av tanden. Gulaktig färg som ger tänderna deras nyans. Innehåller mikroskopiska kanaler till pulpan, därför känslig. Kan bildas om under hela livet.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandens inre</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Pulpa (tandköttet)</strong> - Tandens innersta del med mjuk vävnad. Innehåller blodkärl som ger näring. Nerver som känner av smärta och temperatur. Celler som bildar ny dentin. Viktigt för tandens vitalitet och försvar.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Rotens struktur</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Cement (cementum)</strong> - Täcker tandroten, liknar ben i sammansättning</li>
            <li><strong>Rotkanaler</strong> - Innehåller pulpavävnad från kronan till rotspetsen</li>
            <li><strong>Rotspets (apex)</strong> - Där blodkärl och nerver går in i tanden</li>
            <li><strong>Sidokanaler</strong> - Mindre grenar från huvudrotkanalen</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Tandens stödjande strukturer</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li><strong>Periodontalligament</strong> - Bindvävsfibrer mellan rot och ben</li>
              <li><strong>Alveolarbenet</strong> - Käkbenet runt tandroten</li>
              <li><strong>Tandkött (gingiva)</strong> - Skyddar fästet mellan tand och ben</li>
              <li>Dessa strukturer håller tanden på plats och fungerar som stötdämpare</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandens form och funktion</h2>
          <p className="text-gray-700 leading-7 mb-6">Kronen är formad efter tandens funktion - framtänder har skarpa kanter för att bita av, kindtänder har gropar och höjder för att mala. Roten kan vara enkel eller ha flera grenar beroende på var tanden sitter. Antalet rotkanaler varierar - framtänder har ofta en, molarer kan ha fyra eller fler.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö har vi djup förståelse för tandens uppbyggnad. Detta gör att vi kan behandla problem i varje lager - från emaljskador till komplicerade rotbehandlingar. Vi använder modern teknik för precision.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tandundersökning</h2>
          <p className="text-gray-600 mb-6">Vill du veta mer om dina tänder? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/tand" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tand</Link>
              <Link href="/kunskapbanken/emalj" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Emalj</Link>
              <Link href="/behandlingar/rotfyllning" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Rotfyllning</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

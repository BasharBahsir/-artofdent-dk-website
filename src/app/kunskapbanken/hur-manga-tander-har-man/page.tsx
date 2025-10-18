'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function HurMangaTanderPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Hur många tänder har man" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Hur många tänder har man?</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Lär dig om antalet tänder hos barn och vuxna, och hur de utvecklas.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Hur många tänder har man</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Antalet tänder varierar beroende på ålder och om man har mjölktänder eller permanenta tänder. Som vuxen har man normalt 32 tänder, inklusive visdomständer.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mjölktänder hos barn</h2>
          <p className="text-gray-700 leading-7 mb-6">Barn har 20 mjölktänder (primära tänder). Den första tanden brukar komma vid 6 månaders ålder, och vid 3 års ålder har de flesta barn alla 20 mjölktänderna. Mjölktänderna består av 8 framtänder, 4 hörntänder och 8 kindtänder.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Permanenta tänder hos vuxna</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>8 framtänder (incisiver) - 4 i överkäken, 4 i underkäken</li>
            <li>4 hörntänder (caniner) - 2 i varje käke</li>
            <li>8 främre kindtänder (premolarer) - 4 i varje käke</li>
            <li>12 bakre kindtänder (molarer) - 6 i varje käke, inklusive visdomständer</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">När kommer tänderna?</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>6-7 år: Första permanenta kindtanden och framtänderna</li>
              <li>7-8 år: Nedre framtänder</li>
              <li>9-11 år: Hörntänder och kindtänder</li>
              <li>11-13 år: Resterande kindtänder</li>
              <li>17-25 år: Visdomständer (om de kommer)</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Visdomständer</h2>
          <p className="text-gray-700 leading-7 mb-6">Visdomständer är de sista tänderna som kommer fram, ofta i åldrarna 17-25 år. Många människor får aldrig sina visdomständer, och hos en del måste de tas bort om de orsakar problem.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö tar vi hand om tänder i alla åldrar. Vi följer barns tandut veckling och hjälper vuxna att behålla sina tänder. Våra tandläkare har lång erfarenhet av både barn- och vuxentandvård.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tandkontroll</h2>
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
              <Link href="/kunskapbanken/permanenta-tander" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Permanenta tänder</Link>
              <Link href="/kunskapbanken/visdomstander" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Visdomständer</Link>
              <Link href="/behandlingar/barnvard" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Barntandvård</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

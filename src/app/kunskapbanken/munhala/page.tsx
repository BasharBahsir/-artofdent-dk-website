'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function MunhalaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Munhålan" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Munhålan</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Ett komplext system för mat, tal och andning - lär dig om munhålans anatomi.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Munhåla</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Munhålan är den första delen av matsmältningssystemet och har viktiga funktioner för mat, tal och andning. Den innehåller tänder, tunga, tandkött, gom och spottkörtelar.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Munhålans delar</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Tänderna</strong> - Tuggar och bearbetar mat</li>
            <li><strong>Tungan</strong> - Smakar, blandar mat och hjälper till vid tal</li>
            <li><strong>Tandköttet</strong> - Skyddar tandrötter och käkben</li>
            <li><strong>Gommen</strong> - Munhålans tak</li>
            <li><strong>Läpparna</strong> - Håller mat och formar tal</li>
            <li><strong>Spottkörtelar</strong> - Producerar saliv</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Munhålans funktioner</h2>
          <p className="text-gray-700 leading-7 mb-6">Bearbeta mat genom att tugga och mala. Producera saliv som mjukar upp mat. Smaka mat och identifiera smaker. Forma ljud och tal. Möjliggöra andning. Skydda kroppen mot främmande ämnen.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Håll munhålan frisk</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta tänderna två gånger dagligen</li>
              <li>Använd tandtråd dagligen</li>
              <li>Drick tillräckligt med vatten</li>
              <li>Ät näringsrik mat och begränsa socker</li>
              <li>Undvik tobak</li>
              <li>Besök tandläkaren regelbundet</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga munhåleproblem</h2>
          <p className="text-gray-700 leading-7 mb-6">Karies och tandköttsinflammation från dålig hygien. Muntorrhet från mediciner eller sjukdom. Sår och irritation från skarp mat eller trauma. Svampinfektioner, särskilt hos äldre eller vid nedsatt immunförsvar. Dålig andedräkt från bakterier.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö undersöker vi hela munhålan vid varje kontroll. Vi upptäcker tidiga förändringar och behandlar problem innan de blir allvarliga. Våra tandläkare har kunskap om alla delar av munhålan.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka munhålekontroll</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent för en grundlig undersökning. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/tunga" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tunga</Link>
              <Link href="/kunskapbanken/gommen" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Gommen</Link>
              <Link href="/kunskapbanken/mundslemhinna" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Mundslemhinna</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

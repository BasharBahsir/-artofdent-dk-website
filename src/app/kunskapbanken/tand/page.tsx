'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Tand" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Tand - Tandens anatomi</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Lär dig om tandens uppbyggnad och hur den fungerar.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Tand</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">En tand är ett komplext organ med flera lager och strukturer. Varje del har sin viktiga funktion för att tanden ska fungera optimalt och hålla hela livet.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandens delar</h2>
          <p className="text-gray-700 leading-7 mb-6">En tand består av två huvuddelar: <strong>Kronan</strong> - Den synliga delen ovanför tandköttet som vi använder för att tugga. <strong>Roten</strong> - Den del som sitter fast i käkbenet och håller tanden på plats.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandens lager och vävnader</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Emalj</strong> - Yttersta lagret, kroppens hårdaste vävnad, skyddar tanden</li>
            <li><strong>Dentin</strong> - Under emaljen, gulaktig och porös, känslig för temperatur</li>
            <li><strong>Pulpa (tandköttet)</strong> - Innerst, innehåller nerver och blodkärl</li>
            <li><strong>Cement</strong> - Täcker tandroten, fäster vid käkbenet</li>
            <li><strong>Periodontalligament</strong> - Bindväv mellan rot och ben, stötdämpare</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Olika typer av tänder</h2>
          <p className="text-gray-700 leading-7 mb-6">Människan har fyra typer av tänder, var och en anpassad för en specifik funktion: <strong>Incisiver (framtänder)</strong> - 8 stycken, biter av mat. <strong>Caniner (hörntänder)</strong> - 4 stycken, river och skär. <strong>Premolarer (små kindtänder)</strong> - 8 stycken, tuggar och maler. <strong>Molarer (stora kindtänder)</strong> - 12 stycken inkl visdomständer, maler mat.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Tandens funktioner</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Tugga och bearbeta mat för matsmältningen</li>
              <li>Bita av och hålla fast föda</li>
              <li>Forma ljud vid tal</li>
              <li>Ge ansiktet struktur och stöd</li>
              <li>Bidra till ett vackert leende</li>
              <li>Stödja läppar och kinder</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandens fäste i käken</h2>
          <p className="text-gray-700 leading-7 mb-6">Tanden sitter fast i ett tandfack (alveol) i käkbenet. Mellan tandroten och benet finns periodontalligamentet - tusentals små fibrer som håller tanden på plats och fungerar som stötdämpare. Detta gör att tanden kan röra sig mikroskopiskt vid tuggning utan att skadas.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandens livscykel</h2>
          <p className="text-gray-700 leading-7 mb-6">Först kommer mjölktänderna (20 stycken) mellan 6 månader och 3 år. Dessa börjar lossna vid cirka 6 år. De permanenta tänderna (32 stycken) kommer mellan 6 och 25 år. Permanenta tänder är tänkta att hålla hela livet med rätt vård.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö tar vi hand om alla delar av din tand. Vi behandlar skador i emaljen, rotfyller när pulpan är infekterad och ser till att tanden sitter stadigt i sitt fäste. Våra tandläkare har djup kunskap om tandens anatomi.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tandkontroll</h2>
          <p className="text-gray-600 mb-6">Vill du kontrollera dina tänder? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/tandens-uppbyggnad" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandens uppbyggnad</Link>
              <Link href="/kunskapbanken/emalj" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Emalj</Link>
              <Link href="/kunskapbanken/hur-manga-tander-har-man" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Hur många tänder har man</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

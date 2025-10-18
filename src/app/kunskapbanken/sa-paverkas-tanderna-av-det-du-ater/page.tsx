'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function SaPaverkasTandernaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Så påverkas tänderna av det du äter" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Så påverkas tänderna av det du äter</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Din kost har stor betydelse för tändernas hälsa - lär dig göra smarta val.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Så påverkas tänderna av det du äter</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Det du äter och dricker påverkar dina tänder varje dag. Rätt kost stärker tänderna medan fel matvanor ökar risken för karies och tandskador. Genom att göra smarta val kan du skydda dina tänder.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mat och dryck som skadar tänderna</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Socker</strong> - Omvandlas av bakterier till syra som löser upp emaljen</li>
            <li><strong>Sur mat och dryck</strong> - Läsk, frukt, vin mjukar upp emaljen direkt</li>
            <li><strong>Klibbiga sötsaker</strong> - Fastnar på tänderna och ger långvarig syraattack</li>
            <li><strong>Stärkelse</strong> - Chips, bröd kan omvandlas till socker i munnen</li>
            <li><strong>Ofta mellanmål</strong> - Ger tänderna ingen återhämtningstid</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mat som är bra för tänderna</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Mjölkprodukter</strong> - Ost, mjölk och yoghurt innehåller kalcium och fosfat som stärker emaljen. Ost neutraliserar också syra. <strong>Fibrer</strong> - Grönsaker och frukt som äpple och morot stimulerar salivproduktion. <strong>Nötter</strong> - Innehåller mineraler och stimulerar tuggning. <strong>Vatten</strong> - Sköljer munnen och späder ut syra. <strong>Grönt te</strong> - Innehåller ämnen som kan hämma bakterietillväxt.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">När du äter och dricker</h2>
          <p className="text-gray-700 leading-7 mb-6">Frekvensen är viktigare än mängden. Kontinuerligt snacksande ger tänderna ingen återhämtningstid. Efter surt eller sött sänks pH i munnen i cirka 30 minuter. Ät gärna något som ost eller drick vatten efter måltiden för att neutralisera. Vänta 30 minuter med att borsta efter sur mat.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Tips för tandvänlig kost</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Ät tre huvudmål och högst två mellanmål per dag</li>
              <li>Välj vatten eller mjölk istället för läsk och juice</li>
              <li>Avsluta måltiden med ost eller nötter</li>
              <li>Undvik sockrad mat och dryck mellan måltider</li>
              <li>Skölj munnen med vatten efter sött eller surt</li>
              <li>Tugga sockerfritt tuggummi för att stimulera saliv</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Näringsämnen för friska tänder</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Kalcium</strong> - Bygger upp tandemalj och ben. Finns i mjölk, ost, mandlar. <strong>Vitamin D</strong> - Hjälper kroppen ta upp kalcium. Fisk, ägg, solljus. <strong>Fluor</strong> - Stärker emaljen och gör den mer motståndskraftig. Tandkräm, te, viss fisk. <strong>Vitamin C</strong> - Viktigt för friskt tandkött. Citrus, paprika, broccoli. <strong>Fosfor</strong> - Samarbetar med kalcium. Kött, fisk, baljväxter.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö ger vi personliga kostråd för bättre tandhälsa. Vi hjälper dig identifiera matvanor som skadar tänderna och föreslår alternativ. Tillsammans skapar vi en tandvänlig kosthållning.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Få kostråd för friska tänder</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent för personlig rådgivning. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/karies" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Karies</Link>
              <Link href="/kunskapbanken/emalj" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Emalj</Link>
              <Link href="/kunskapbanken/saliv" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Saliv</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

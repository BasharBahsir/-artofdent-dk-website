'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function ErsattaForloradeTanderPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Ersätta förlorade tänder" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Ersätta förlorade tänder</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Moderna lösningar för att återfå ditt leende och tuggfunktion efter tandförlust.</p>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Ersätta förlorade tänder</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Att förlora en eller flera tänder påverkar både utseende, tuggförmåga och munhälsa. Lyckligtvis finns flera moderna och effektiva lösningar för att ersätta förlorade tänder.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför ersätta förlorade tänder?</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Återställ tuggförmågan och förbättra matsmältningen</li>
            <li>Förhindra att intilliggande tänder flyttar sig</li>
            <li>Bevara käkbenet som annars bryts ner</li>
            <li>Återfå ett naturligt leende och självförtroende</li>
            <li>Förbättra talförmågan</li>
            <li>Minska risken för ytterligare tandförlust</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Alternativ för tandersättning</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Tandimplantat</strong> är den mest permanenta lösningen. En titankrok fästs i käkbenet och fungerar som en konstgjord tandrot. Implantat känns och fungerar som naturliga tänder.</p>
          <p className="text-gray-700 leading-7 mb-6"><strong>Bro</strong> är en fast lösning där konstgjorda tänder fästs på intilliggande tänder. Kräver ingen kirurgi men påverkar närliggande tänder.</p>
          <p className="text-gray-700 leading-7 mb-6"><strong>Tandproteser</strong> (löständer) är avtagbara och passar bra vid flera saknade tänder. Moderna proteser är bekväma och naturligt utseende.</p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Välja rätt lösning</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Antal tänder som saknas</li>
              <li>Käkbenets tillstånd och kvalitet</li>
              <li>Din allmänna hälsa</li>
              <li>Budget och försäkring</li>
              <li>Estetiska önskemål</li>
              <li>Långsiktiga mål för munhälsan</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö erbjuder vi alla typer av tandersättningar. Våra erfarna tandläkare hjälper dig att välja rätt lösning baserat på dina behov och förutsättningar. Vi använder moderna tekniker och material för bästa resultat.</p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka konsultation</h2>
          <p className="text-gray-600 mb-6">Saknar du tänder? Kontakta oss på Art of Dent för en kostnadsfri konsultation. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/behandlingar/tandimplantat" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandimplantat</Link>
              <Link href="/kunskapbanken/tandproteser-malmo-kompletta-losningar" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandproteser</Link>
              <Link href="/kunskapbanken/losa-tander-hos-vuxna" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Lösa tänder</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

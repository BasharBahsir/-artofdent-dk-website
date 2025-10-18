'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function SalivPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Saliv" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Saliv - Kroppens naturliga skydd</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Den viktiga vätskan som skyddar tänderna och gör tuggning och sväljning möjligt.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Saliv</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Saliv är den klara vätska som produceras av spottkörtlarna i munnen. Den har många viktiga funktioner för munhälsan och gör det möjligt att tugga, svälja och tala bekvämt.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad innehåller saliv?</h2>
          <p className="text-gray-700 leading-7 mb-6">Saliv består till 99% av vatten, men innehåller även viktiga ämnen: Enzymer som påbörjar nedbrytning av mat. Mineraler som kalcium och fosfat som stärker tänderna. Antibakteriella ämnen som bekämpar bakterier. Muciner som gör saliven hal och skyddande. Immunoglobuliner som skyddar mot infektioner.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Salivens viktiga funktioner</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Skyddar tänderna</strong> - Neutraliserar syra och remineraliserar emaljen</li>
            <li><strong>Underlättar tuggning</strong> - Mjukar upp och fuktar maten</li>
            <li><strong>Hjälper vid sväljning</strong> - Gör matbiten hal</li>
            <li><strong>Möjliggör smak</strong> - Löser upp smakmolekyler</li>
            <li><strong>Rengör munnen</strong> - Sköljer bort matrester och bakterier</li>
            <li><strong>Bekämpar infektioner</strong> - Innehåller antibakteriella ämnen</li>
            <li><strong>Underlättar tal</strong> - Fuktar munnen</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hur mycket saliv produceras?</h2>
          <p className="text-gray-700 leading-7 mb-6">En frisk vuxen producerar cirka 1-1,5 liter saliv per dag. Produktionen är högst under måltider och lägst under natten. Tuggning stimulerar salivproduktionen kraftigt. Lukt och tanke på mat ökar också produktionen.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Stimulera salivproduktionen</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Drick tillräckligt med vatten - minst 2 liter per dag</li>
              <li>Tugga sockerfritt tuggummi mellan måltider</li>
              <li>Ät regelbundna måltider som stimulerar salivproduktion</li>
              <li>Undvik uttorkande mediciner när det är möjligt</li>
              <li>Använd luftfuktare om luften är torr</li>
              <li>Sluta röka - rökning minskar salivproduktionen</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Muntorrhet - för lite saliv</h2>
          <p className="text-gray-700 leading-7 mb-6">Muntorrhet (xerostomi) uppstår när salivproduktionen minskar. Orsaker inkluderar mediciner (vanligaste orsaken), sjukdomar som diabetes eller Sjögrens syndrom, strålbehandling mot huvud/hals, stress och ångest, munandning, samt åldrande. Muntorrhet ökar risken för karies, svampinfektioner och tandköttsproblem.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö tar vi muntorrhet på allvar. Vi undersöker salivproduktionen, identifierar orsaker och ger råd om behandling. Vi kan föreskriva salivstimulerade produkter och hjälper dig skydda tänderna extra när saliven är för lite.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem med muntorrhet?</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent för hjälp. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/spottkörtlar" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Spottkörtlar</Link>
              <Link href="/kunskapbanken/munhala" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhåla</Link>
              <Link href="/kunskapbanken/karies" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Karies</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

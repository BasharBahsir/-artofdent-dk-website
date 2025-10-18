'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function CaninerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/Miljöfoton på kliniken (1).jpg"
            alt="Caniner - Hörntänder"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Caniner - Hörntänder
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            Lär dig om caninerna, de viktiga hörntänderna som hjälper dig att tugga och riva maten.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Caniner</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">
            Caniner, även kallade hörntänder eller ögontänder, är de spetsiga tänderna som sitter mellan framtänderna och kindtänderna. De är våra längsta tänder och har en viktig funktion när vi äter.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Var sitter caninerna?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Du har totalt fyra caniner - två i överkäken och två i underkäken. De sitter precis vid mungiporna, mellan de två framtänderna (incisiverna) och de första kindtänderna (premolarerna). Caninerna är lätta att känna igen på sin karakteristiska spetsiga form.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Caninernas funktion</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Riva och skära av mat, särskilt kött och fibrös mat</li>
            <li>Stödja läpparna och ge ansiktet dess form</li>
            <li>Styra käkens rörelser vid tuggning</li>
            <li>Hjälpa till att fördela tuggkraften jämnt</li>
            <li>Skydda de mer känsliga tänderna bakom dem</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Caninernas uppbyggnad</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Caninerna har den längsta tandroten av alla tänder, vilket gör dem mycket stabila och starka. De har en bred krona med en spetsig topp som är perfekt anpassad för att riva och skära. Tandens emalj är tjockast vid spetsen där den utsätts för mest slitage.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Ta hand om dina caniner</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta noga runt caninerna där mat lätt fastnar</li>
              <li>Använd tandtråd mellan caninen och intilliggande tänder</li>
              <li>Undvik att öppna förpackningar med tänderna</li>
              <li>Besök tandläkaren regelbundet för kontroll</li>
              <li>Vid tandställning får caninerna ofta särskild uppmärksamhet</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga problem med caniner</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Caniner kan ibland växa fel eller sitta kvar i käkbenet (retinerade caniner). Detta är särskilt vanligt i överkäken. Andra problem inkluderar slitage på spetsen, karies vid tandköttskanten, eller att de sitter för långt fram eller bak i käken. Tandläkaren kan hjälpa till med alla dessa problem.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            På Art of Dent i Malmö tar vi hand om alla problem med tänder, inklusive caniner. Våra erfarna tandläkare kan hjälpa dig med allt från rutinkontroller till mer avancerad behandling. Vi använder moderna metoder och tar oss tid att förklara varje steg i behandlingen.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tid hos tandläkare i Malmö</h2>
          <p className="text-gray-600 mb-6">
            Behöver du hjälp med dina tänder? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/boka-tid"
              className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all"
            >
              BOKA TID ONLINE
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all"
            >
              KONTAKTA OSS
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Relaterade ämnen
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/incisiver" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Incisiver
              </Link>
              <Link href="/kunskapbanken/premolar" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Premolar
              </Link>
              <Link href="/kunskapbanken/tandens-uppbyggnad" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandens uppbyggnad
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

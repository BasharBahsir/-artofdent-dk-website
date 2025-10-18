'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function EmaljPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/Miljöfoton på kliniken (3).jpg"
            alt="Tandemalj"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Emalj - Tandernas skyddande yta
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            Tandemalj är kroppens hårdaste vävnad och skyddar dina tänder. Lär dig hur du tar hand om din emalj.
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
            <span className="text-gray-900">Emalj</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">
            Tandemalj är det yttersta lagret på tänderna och kroppens hårdaste vävnad. Den skyddar tänderna mot slitage, karies och temperaturförändringar. Trots sin styrka kan emalj skadas och den kan inte återbildas naturligt.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad är tandemalj?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Tandemalj består till 96% av mineraler, främst kalciumfosfat i form av hydroxiapatit. Detta gör den extremt hård och tålig. Emaljens tjocklek varierar från cirka 2,5 mm över tandens tuggyta till mycket tunt vid tandhalsen. Den är genomskinlig och får sin färg från dentinet som ligger under.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Emaljens funktion</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Skyddar tanden mot karies och bakterier</li>
            <li>Tål den stora kraft som uppstår vid tuggning</li>
            <li>Isolerar mot temperaturförändringar</li>
            <li>Ger tänderna deras vita, glänsande utseende</li>
            <li>Förhindrar att bakterier tränger in i tanden</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hot mot tandemalj</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Syra är emaljens största fiende. När du äter eller dricker något surt mjuknar emaljen tillfälligt och blir mer känslig för slitage. Socker omvandlas av bakterier i munnen till syra som angriper emaljen. Även för hård borstning kan slita ner emalj över tid. Bruxism (tandgnissling) orsakar också emaljslitage.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Så skyddar du din emalj</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta tänderna två gånger dagligen med fluortandkräm</li>
              <li>Vänta 30 minuter med att borsta efter sur mat eller dryck</li>
              <li>Begränsa socker och sura livsmedel</li>
              <li>Drick vatten eller neutralisera syra med mjölk eller ost</li>
              <li>Använd mjuk tandborste och borsta försiktigt</li>
              <li>Besök tandläkaren regelbundet för fluorbehandling</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Emaljskador och behandling</h2>
          <p className="text-gray-700 leading-7 mb-6">
            När emalj har skadats kan den inte växa tillbaka, men tidiga skador kan stoppas och stärkas med fluorbehandling. Vid större skador kan tandläkaren laga med fyllningar, inlägg eller kronor. Erosionsskador från syra kan behandlas med speciella skyddande lacker och råd om kostförändringar.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            På Art of Dent i Malmö hjälper vi dig att ta hand om din tandemalj. Vi erbjuder fluorbehandlingar, undersöker emaljskador och ger råd om hur du bäst skyddar dina tänder. Våra tandläkare använder moderna metoder för att stärka och bevara din emalj.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tid för emaljkontroll</h2>
          <p className="text-gray-600 mb-6">
            Är du orolig för din tandemalj? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.
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
              <Link href="/kunskapbanken/karies" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Karies
              </Link>
              <Link href="/kunskapbanken/tandens-uppbyggnad" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandens uppbyggnad
              </Link>
              <Link href="/kunskapbanken/ilningar-i-tanderna" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Ilningar i tänderna
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

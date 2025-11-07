'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandblekningGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/Miljöfoton på kliniken (4).jpg"
            alt="Tandblekning Malmö - Vitare tänder"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tandblekning - Guide til hvidere tænder
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            Professionel tandblekning i Malmö hos Art of Dent. Få hvidere tænder sikkert og effektivt med erfarne tandlæger.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hjem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Vidensbank</Link>
            <span>/</span>
            <span className="text-gray-900">Tandblekning</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">
            Vil du have hvidere tænder? Tandblekning er en sikker og effektiv metode til at få et lysere smil. Hos Art of Dent i Malmö tilbyder vi professionel tandblekning, der giver langvarige resultater.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hvad er tandblekning?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Tandblekning er en kosmetisk behandling, der bleger tænderne og fjerner misfarvninger. Vi bruger blegemiddel-gel med hydrogenperoxid eller carbamidperoxid, som trænger ind i tandemaljenog nedbryder farvestoffer. Resultatet er tænder, der kan blive 3-8 nuancer lysere.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Forskellige metoder til tandblekning</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Tandblekning på klinik i Malmö</h3>
          <p className="text-gray-700 leading-7 mb-6">
            Professionel tandblekning hos tandlægen giver hurtigst og bedst resultat. Vi applicerer et stærkt blegemiddel direkte på tænderne og bruger ofte lys til at aktivere blegningen. Behandlingen tager cirka 60-90 minutter og giver øjeblikkeligt synlige resultater.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Hjemmeblekning med skinne</h3>
          <p className="text-gray-700 leading-7 mb-6">
            Vi kan også fremstille individuelle blegeskinne, som du bruger hjemme. Du applicerer blegegel i skinnen og bærer den nogle timer dagligt i 1-2 uger. Dette giver gradvist hvidere tænder og er et mildere alternativ.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
            <h3 className="text-lg font-medium text-yellow-800 mb-2">Vigtigt at vide om tandblekning</h3>
            <ul className="text-yellow-700 list-disc pl-5 space-y-1">
              <li>Blekningen fungerer kun på naturlige tænder, ikke fyllninger eller kroner</li>
              <li>Midlertidig følsomhed er normalt og forsvinder efter behandlingen</li>
              <li>Undgå farvende mad og drikke (kaffe, te, rødvin) direkte efter blekning</li>
              <li>Resultatet holder 1-3 år afhængigt af dine vaner</li>
              <li>Rygere får kortere holdbarhed på blekningen</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hvem kan blege tænderne?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            De fleste kan gennemgå tandblekning, men vi anbefaler altid en tandundersøgelse først. Vi kontrollerer, at du ikke har karies eller tandkødsproblemer, som skal behandles før blekning. Gravide og ammende bør vente med blekning.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandblekning i Malmö hos Art of Dent</h2>
          <p className="text-gray-700 leading-7 mb-6">
            På vores tandlægeklinik i Malmö bruger vi sikre og afprøvede blegningssystemer af højeste kvalitet. Vores erfarne tandlæger sørger for, at du får et jævnt og naturligt resultat. Vi tager hensyn til dine ønsker og giver dig realistiske forventninger.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Book tandblekning i Malmö</h2>
          <p className="text-gray-600 mb-6">
            Klar til et hvidere smil? Kontakt Art of Dent for en gratis konsultation om tandblekning. Ring til os på <strong>+46 40-12 11 08</strong> eller book online.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/boka-tid"
              className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-500 transition-all"
            >
              BOOK KONSULTATION
            </Link>
            <Link
              href="/behandlingar/tandblekning"
              className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all"
            >
              LÆS MERE OM TANDBLEKNING
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ofte stillede spørgsmål om tandblekning</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Gør tandblekning ondt?</h3>
              <p className="text-gray-700">Selve blekningen gør ikke ondt, men nogle oplever midlertidig følsomhed i tænderne under og efter behandlingen. Dette er helt normalt og forsvinder inden for nogle dage.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Hvor meget koster tandblekning?</h3>
              <p className="text-gray-700">Prisen varierer afhængigt af metode. Kontakt os for aktuelle priser og information om vores blegningspakker.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Er tandblekning skadeligt for tænderne?</h3>
              <p className="text-gray-700">Nej, professionel tandblekning udført af tandlæger er sikker og skader ikke tænderne, når den udføres korrekt. Vi bruger afprøvede metoder og produkter.</p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Relaterade ämnen
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/gula-tander" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Gula tänder
              </Link>
              <Link href="/behandlingar/estetisk-tandvard" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Estetisk tandvård
              </Link>
              <Link href="/kunskapbanken/tandhalsa" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandhälsa
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

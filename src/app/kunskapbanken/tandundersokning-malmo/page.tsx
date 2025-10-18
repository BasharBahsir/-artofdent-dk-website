'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandundersokningMalmoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/Miljöfoton på kliniken (2).jpg"
            alt="Tandläkare Malmö - Tandundersökning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tandundersökning hos tandläkare i Malmö
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            Regelbundna tandundersökningar är nyckeln till god tandhälsa. Boka tid hos Art of Dent - din erfarna tandläkare i Malmö.
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
            <span className="text-gray-900">Tandundersökning Malmö</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">
            En regelbunden tandundersökning är grunden för god munhälsa. På Art of Dent i Malmö erbjuder vi noggranna tandundersökningar med erfarna tandläkare och modern utrustning för att säkerställa din tandhälsa.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad ingår i en tandundersökning?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Under en tandundersökning hos vår tandläkarklinik i Malmö genomför vi en grundlig kontroll av hela munhålan. Vi undersöker tänder, tandkött, tunga, slemhinnor och käkled. Våra tandläkare letar efter karies, tandköttsinflammation, tandsten och andra problem som kan påverka din munhälsa.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Våra tandundersökningar inkluderar:</h3>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Kontroll av alla tänder för karies och sprickor</li>
            <li>Undersökning av tandkött och tandlossning</li>
            <li>Avlägsning av tandsten vid behov</li>
            <li>Kontroll av gamla fyllningar och kronor</li>
            <li>Screening för munhålecancer</li>
            <li>Bettanalys och käkledsfunktion</li>
            <li>Röntgen vid behov för djupare diagnos</li>
            <li>Personlig rådgivning om munhygien</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hur ofta ska man gå till tandläkaren?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Vi rekommenderar tandundersökning var 6-12:e månad beroende på din individuella munhälsa. Personer med tandköttsproblem eller kariesbenägenhet kan behöva tätare kontroller, medan andra med friska tänder kan komma mer sällan. Din tandläkare i Malmö bedömer vad som passar dig bäst.
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
            <h3 className="text-lg font-medium text-green-800 mb-2">Fördelar med regelbundna tandundersökningar</h3>
            <ul className="text-green-700 list-disc pl-5 space-y-1">
              <li>Upptäcka problem tidigt innan de blir stora och kostsamma</li>
              <li>Förebygga karies och tandköttsjukdomar</li>
              <li>Spara pengar genom att undvika omfattande behandlingar</li>
              <li>Behålla friska och starka tänder livet ut</li>
              <li>Få professionell rådgivning om munhygien</li>
              <li>Känna dig trygg med din tandhälsa</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandläkare i Malmö - Art of Dent</h2>
          <p className="text-gray-700 leading-7 mb-6">
            På Art of Dent i Malmö är vi specialister på förebyggande tandvård. Våra erfarna tandläkare använder modern teknik som digitala röntgen och intraoralskannrar för noggrann diagnostik. Vi tar oss tid att förklara våra fynd och diskutera eventuell behandling med dig.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Därför ska du välja oss:</h3>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Erfarna och legitimerade tandläkare</li>
            <li>Modern utrustning och teknik</li>
            <li>Centralt läge i Malmö med goda kommunikationer</li>
            <li>Flexibla tider som passar dig</li>
            <li>Trygg och professionell vårdmiljö</li>
            <li>Personlig service och individanpassad vård</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad kostar en tandundersökning?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Kostnaden för tandundersökning varierar beroende på omfattning. För barn och ungdomar upp till 23 år är tandvården kostnadsfri genom Sveriges allmänna tandvård. Vuxna betalar enligt gällande prislista. Kontakta oss för aktuella priser och information om tandvårdsstöd.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-700 text-white rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Boka tandundersökning i Malmö idag</h2>
          <p className="mb-6 text-primary-100">
            Har du inte varit hos tandläkaren på ett tag? Boka en tandundersökning hos Art of Dent i Malmö. Ring oss på <strong className="text-white">040-121 108</strong> eller boka direkt online.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/boka-tid"
              className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-500 transition-all"
            >
              BOKA TID ONLINE
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-primary-700 transition-all"
            >
              KONTAKTA OSS
            </Link>
          </div>
        </div>

        {/* Lokalt SEO - Klinikinfo */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Våra kliniker i Malmö</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Art of Dent Malmö</h3>
              <p className="text-gray-700 text-sm mb-2"><strong>Adress:</strong> Hantverkaregatan 6D, 211 22 Malmö</p>
              <p className="text-gray-700 text-sm mb-2"><strong>Telefon:</strong> 040-121 108</p>
              <p className="text-gray-700 text-sm"><strong>Öppettider:</strong> Vardagar 08:00-18:00</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">ABC Tandklinikgruppen</h3>
              <p className="text-gray-700 text-sm mb-2"><strong>Adress:</strong> Södra Förstadsgatan 31, 211 43 Malmö</p>
              <p className="text-gray-700 text-sm mb-2"><strong>Telefon:</strong> 040-18 44 00</p>
              <p className="text-gray-700 text-sm"><strong>Öppettider:</strong> Vardagar 08:00-18:00</p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Läs mer om tandvård
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/karies" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Karies
              </Link>
              <Link href="/kunskapbanken/tandvark" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandvärk
              </Link>
              <Link href="/behandlingar/tandhygienist" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandhygienist
              </Link>
              <Link href="/behandlingar/akut-tandvard" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Akut tandvård
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandimplantatMalmoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/Miljöfoton på kliniken (1).jpg"
            alt="Tandimplantat Malmö"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tandimplantat i Malmö
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            Erfarna tandläkare i Malmö behandlar med moderna tandimplantat. Boka tid hos Art of Dent för professionell implantattandvård.
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
            <span className="text-gray-900">Tandimplantat</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">
            Tandimplantat i Malmö har blivit allt mer populärt som en permanent lösning för förlorade tänder. Med erfarna implantologer och moderna kliniker erbjuder Malmö världsklasstandarder inom implantattandvård.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad är tandimplantat?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Tandimplantat är titankrokar som opereras in i käkbenet för att ersätta tandrötter. På dessa fästs sedan kronor, broar eller proteser för att återskapa både funktion och estetik. Behandlingen görs av specialiserade implantologer med modern teknik.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Behandlingsprocessen</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Konsultation och planering med röntgen</li>
            <li>Implantation (1-2 timmar)</li>
            <li>Läkningstid (3-6 månader)</li>
            <li>Kronmontering</li>
            <li>Uppföljning och kontroll</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Fördelar med tandimplantat</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Naturligt utseende och känsla</li>
              <li>Långvarig hållbarhet - kan hålla livet ut</li>
              <li>Bevarar käkbenet och förhindrar benförlust</li>
              <li>Förbättrad tuggförmåga jämfört med proteser</li>
              <li>Påverkar inte närliggande tänder</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent för tandimplantat?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Vi på Art of Dent är specialister på tandimplantat med moderna tekniker och 3D-planering. Våra erfarna implantologer i Malmö arbetar varsamt för att ge dig bästa möjliga resultat. Vi erbjuder flexibla betalningsplaner och kostnadsfri konsultation.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka konsultation för tandimplantat</h2>
          <p className="text-gray-600 mb-6">
            Funderar du på tandimplantat? Kontakta oss på Art of Dent för en kostnadsfri konsultation. Ring <strong>040-121 108</strong> eller boka tid online.
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
              <Link href="/behandlingar/tandimplantat" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandimplantat
              </Link>
              <Link href="/kunskapbanken/tandproteser-malmo-kompletta-losningar" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandproteser
              </Link>
              <Link href="/behandlingar/tandundersokning" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                Tandundersökning
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

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
            Tandblekning - Guide till vitare tänder
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            Professionell tandblekning i Malmö hos Art of Dent. Få vitare tänder säkert och effektivt med erfarna tandläkare.
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
            <span className="text-gray-900">Tandblekning</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">
            Vill du ha vitare tänder? Tandblekning är en säker och effektiv metod för att få ett ljusare leende. På Art of Dent i Malmö erbjuder vi professionell tandblekning som ger långvariga resultat.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad är tandblekning?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Tandblekning är en kosmetisk behandling som bleker tänderna och tar bort missfärgningar. Vi använder blekmedelgel med väteperoxid eller karbamidperoxid som tränger in i tandemaljenoch bryter ner färgämnen. Resultatet är tänder som kan bli 3-8 nyanser ljusare.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Olika metoder för tandblekning</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Tandblekning på klinik i Malmö</h3>
          <p className="text-gray-700 leading-7 mb-6">
            Professionell tandblekning hos tandläkare ger snabbast och bäst resultat. Vi applicerar ett starkt blekmedel direkt på tänderna och använder ofta ljus för att aktivera blekningen. Behandlingen tar cirka 60-90 minuter och ger omedelbart synliga resultat.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Hemblekning med skena</h3>
          <p className="text-gray-700 leading-7 mb-6">
            Vi kan också tillverka individuella bleskenor som du använder hemma. Du applicerar blekgel i skenan och bär den några timmar dagligen i 1-2 veckor. Detta ger gradvis vitare tänder och är ett mjukare alternativ.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
            <h3 className="text-lg font-medium text-yellow-800 mb-2">Viktigt att veta om tandblekning</h3>
            <ul className="text-yellow-700 list-disc pl-5 space-y-1">
              <li>Blekningen fungerar endast på naturliga tänder, inte fyllningar eller kronor</li>
              <li>Tillfällig känslighet är normalt och försvinner efter behandlingen</li>
              <li>Undvik färgande mat och dryck (kaffe, te, rödvin) direkt efter blekning</li>
              <li>Resultatet håller 1-3 år beroende på dina vanor</li>
              <li>Rökare får kortare hållbarhet på blekningen</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vem kan bleka tänderna?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            De flesta kan genomgå tandblekning, men vi rekommenderar alltid en tandundersökning först. Vi kontrollerar att du inte har karies eller tandköttsproblem som behöver behandlas innan blekning. Gravida och ammande bör vänta med blekning.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandblekning i Malmö hos Art of Dent</h2>
          <p className="text-gray-700 leading-7 mb-6">
            På vår tandläkarklinik i Malmö använder vi säkra och beprövade blekningssystem av högsta kvalitet. Våra erfarna tandläkare ser till att du får ett jämnt och naturligt resultat. Vi tar hänsyn till dina önskemål och ger dig realistiska förväntningar.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tandblekning i Malmö</h2>
          <p className="text-gray-600 mb-6">
            Redo för ett vitare leende? Kontakta Art of Dent för en kostnadsfri konsultation om tandblekning. Ring oss på <strong>040-121 108</strong> eller boka online.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/boka-tid"
              className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-500 transition-all"
            >
              BOKA KONSULTATION
            </Link>
            <Link
              href="/behandlingar/tandblekning"
              className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all"
            >
              LÄS MER OM TANDBLEKNING
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Vanliga frågor om tandblekning</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Gör tandblekning ont?</h3>
              <p className="text-gray-700">Själva blekningen gör inte ont, men vissa upplever tillfällig känslighet i tänderna under och efter behandlingen. Detta är helt normalt och försvinner inom några dagar.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Hur mycket kostar tandblekning?</h3>
              <p className="text-gray-700">Priset varierar beroende på metod. Kontakta oss för aktuella priser och information om våra blekningspaket.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Är tandblekning skadligt för tänderna?</h3>
              <p className="text-gray-700">Nej, professionell tandblekning utförd av tandläkare är säker och skadar inte tänderna när den utförs korrekt. Vi använder beprövade metoder och produkter.</p>
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

import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tandlagning Malmö | Reparera skadade tänder - Artofdent',
  description: 'Har du hål i tänderna eller en trasig fyllning? Vi erbjuder professionell tandlagning i Malmö för att återställa dina tänders funktion och utseende.',
}

export default function TandlagningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Tandlagning</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Reparation av tandskador
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tänder kan skadas av hål (karies) eller trasiga fyllningar. Smärtan kan vara omedelbar eller uppstå senare som ilningar. Det är viktigt att behandla skadade tänder för att undvika framtida problem, som exempelvis tandlossning.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Hur går behandlingen till?</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">Behandlingen inleds med en undersökning och bedövning erbjuds vanligtvis enligt eget önskemål. Den skadade delen av tanden avlägsnas genom borrning innan hålet fylls med plastmaterial. Effekterna av eventuell bedövning kvarstår vanligen några timmar efter ingreppet, men du kan använda tanden som vanligt, även om försiktighet rekommenderas. Samtliga steg i behandlingen, inklusive material, ingår i priset.</p>
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="/boka-tid" className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Få hjälp</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tandundersøgelse Malmö | Årlig kontrol hos Artofdent Danmark',
  description: 'Book en tandundersøgelse i Malmö. Vi gennemfører en grundig kontrol af din tandhælsa for at forebygge problemer og bevare et sundt smil. Danske patienter sparer op til 50% sammenlignet med København.',
}

export default function TandundersokningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Undersøgelse</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Undersøgelse af ny patient
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En tandlægeundersøgelse er den rutineundersøgelse, som man gennemgår regelmæssigt. Hvor ofte man bør gå afhænger af, hvor store problemer man har med sine tænder. Sammen lægger vi en individuel behandlingsplan for dig. Som dansk patient sparer du op til 50% sammenlignet med København, og vi dækker din rejse over Øresund!
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Før en tandlægeundersøgelse</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">Du behøver ikke forberede dig på nogen særlig måde før en tandlægeundersøgelse, bortset fra at det selvfølgelig er godt, hvis du har børstet tænderne lidt ekstra omhyggeligt.</p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Under tandlægeundersøgelsen</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">Ved undersøgelsen vurderer tandlægen tandhælsan manuelt og via røntgen. Tandsten fjernes efter behov. Prisen inkluderer fire røntgenbilleder. Ved identificerede problemer, som huller, diskuterer vi sammen den bedste tid og metode til behandling. Din tandhælsa er vores prioritet.</p>
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="/boka-tid" className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Book nu</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

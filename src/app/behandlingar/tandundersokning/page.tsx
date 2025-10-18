import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tandundersökning Malmö | Årlig kontroll hos Artofdent',
  description: 'Boka en tandundersökning i Malmö. Vi genomför en noggrann kontroll av din tandhälsa för att förebygga problem och bibehålla ett friskt leende.',
}

export default function TandundersokningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Undersökning</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Undersökning av ny patient
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              En tandläkarundersökning är den rutinundersökning som man genomgår regelbundet. Hur ofta man bör gå beror på hur stora problem man har med sina tänder. Tillsammans lägger vi upp en individuell behandlingsplan för dig.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Innan en tandläkarundersökning</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">Du behöver inte förbereda dig på något speciellt sätt innan en tandläkarundersökning förutom att det såklart är bra om du har borstat tänderna lite extra noggrant.</p>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Under tandläkarundersökningen</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">Vid undersökningen bedömer tandläkaren tandhälsan manuellt och med via röntgen. Tandsten tas bort vid behov. Priset inkluderar fyra röntgenbilder. Vid identifierade problem, som hål, diskuterar vi tillsammans bästa tid och metod för åtgärd. Din tandhälsa är vår prioritet.</p>
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="/boka-tid" className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Boka nu</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tandlagning Malmö | Reparer beskadigede tænder - Artofdent Danmark',
  description: 'Har du huller i tænderne eller en ødelagt fyldning? Vi tilbyder professionel tandlagning i Malmö for at genoprette dine tænders funktion og udseende. Danske patienter sparer op til 50%.',
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
              Reparation af tandskader
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tænder kan blive beskadiget af huller (karies) eller ødelagte fyldninger. Smerten kan være øjeblikkelig eller opstå senere som stikkende smerter. Det er vigtigt at behandle beskadigede tænder for at undgå fremtidige problemer, som f.eks. tandtab. Som dansk patient sparer du op til 50% sammenlignet med København!
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Hvordan forløber behandlingen?</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">Behandlingen begynder med en undersøgelse, og bedøvelse tilbydes normalt efter eget ønske. Den beskadigede del af tanden fjernes ved boring, før hullet fyldes med plastmateriale. Virkningerne af eventuel bedøvelse varer normalt nogle timer efter indgrebet, men du kan bruge tanden som sædvanligt, selvom forsigtighed anbefales. Alle trin i behandlingen, inklusive materialer, er inkluderet i prisen.</p>
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="/boka-tid" className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Få hjælp</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

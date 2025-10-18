import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Onlinetandläkaren | Träffa tandläkare i mobilen - Artofdent',
  description: 'Träffa en tandläkare online via videosamtal. Få rådgivning, bedömning och receptförnyelse direkt i din mobil, var du än är.',
}

export default function OnlineTandlakarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Onlinetandläkaren</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tandvård direkt i din mobil
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Med Onlinetandläkaren kan du snabbt och enkelt få professionell rådgivning från våra erfarna tandläkare via ett säkert videosamtal, oavsett var du befinner dig.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white">1</span>
                  </div>
                  Rådgivning och bedömning
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Få en första bedömning av dina symtom och rekommendationer för vidare behandling.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white">2</span>
                  </div>
                  Receptförnyelse
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Förnya dina recept snabbt och smidigt utan att behöva besöka en fysisk klinik.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white">3</span>
                  </div>
                  Uppföljning
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Följ upp en tidigare behandling eller diskutera dina framsteg med din tandläkare.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white">4</span>
                  </div>
                  Tryggt och säkert
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Alla samtal är krypterade och sker via en säker plattform för att skydda din integritet.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

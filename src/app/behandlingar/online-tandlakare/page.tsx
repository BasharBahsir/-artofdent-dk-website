import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Online tandlæge | Mød tandlæge i mobilen - Artofdent Danmark',
  description: 'Mød en tandlæge online via videoopkald. Få rådgivning, vurdering og receptfornyelse direkt i din mobil, uanset hvor du er. Danske patienter velkommen.',
}

export default function OnlineTandlakarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Online tandlæge</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tandpleje direkte i din mobil
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Med online tandlæge kan du hurtigt og nemt få professionel rådgivning fra vores erfarne tandlæger via et sikkert videoopkald, uanset hvor du befinder dig. Perfekt for danske patienter!
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white">1</span>
                  </div>
                  Rådgivning og vurdering
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Få en første vurdering af dine symptomer og anbefalinger til videre behandling.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white">2</span>
                  </div>
                  Receptfornyelse
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Forny dine recepter hurtigt og nemt uden at skulle besøge en fysisk klinik.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white">3</span>
                  </div>
                  Opfølgning
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Følg op på en tidligere behandling eller diskuter dine fremskridt med din tandlæge.</dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white">4</span>
                  </div>
                  Trygt og sikkert
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">Alle opkald er krypterede og sker via en sikker platform for at beskytte din integritet.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

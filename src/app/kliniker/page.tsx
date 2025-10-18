import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, MapPinIcon, ClockIcon, CheckIcon } from '@heroicons/react/24/outline'

const clinics = [
  {
    name: 'Artofdent Malmö',
    address: 'Hantverkaregatan 6D, 211 55 Malmö',
    phone: '040-12 11 08',
    email: 'Artofdent.klinik@gmail.com',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hours: {
      weekdays: 'Mån-Fre: 08:00-18:00',
      saturday: 'Lör: 09:00-14:00',
      sunday: 'Sön: Stängt'
    },
    services: [
      'Allmän tandvård',
      'Specialisttandvård',
      'Akutmottagning',
      'Tandimplantat',
      'Estetisk tandvård',
      'Tandblekning'
    ],
    description: 'Vår centralt belägna klinik erbjuder full service med moderna behandlingsrum och erfaren personal.',
    slug: 'malmo-central'
  },
  {
    name: 'Artofdent Malmö Väster',
    address: 'Västra Förstadsgatan 25, 214 21 Malmö',
    phone: '040-789 012',
    email: 'vaster@artofdent.se',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hours: {
      weekdays: 'Mån-Fre: 08:00-18:00',
      saturday: 'Lör: 09:00-14:00',
      sunday: 'Sön: Stängt'
    },
    services: [
      'Allmän tandvård',
      'Barntandvård',
      'Tandvårdsrädsla',
      'Ortodonti',
      'Tandhygienist',
      'Akutmottagning'
    ],
    description: 'En familjär klinik med fokus på att skapa en trygg och välkomnande miljö för hela familjen.',
    slug: 'malmo-vaster'
  }
]

export default function KlinikerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-dental-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dental-900 sm:text-6xl">
              Våra kliniker
            </h1>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Vi har två moderna tandvårdskliniker i Malmö. Välj den klinik som passar dig bäst.
            </p>
          </div>
        </div>
      </div>

      {/* Clinics Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {clinics.map((clinic, index) => (
              <div
                key={clinic.slug}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src={clinic.image}
                      alt={clinic.name}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold text-dental-900 mb-4">
                    {clinic.name}
                  </h2>
                  
                  <p className="text-lg text-dental-600 mb-8">
                    {clinic.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-x-3">
                      <MapPinIcon className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-dental-900 font-medium">Adress</p>
                        <p className="text-dental-600">{clinic.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-x-3">
                      <PhoneIcon className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-dental-900 font-medium">Telefon</p>
                        <a href={`tel:${clinic.phone}`} className="text-primary-600 hover:text-primary-700 font-medium">
                          {clinic.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-x-3">
                      <ClockIcon className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-dental-900 font-medium">Öppettider</p>
                        <div className="text-dental-600 space-y-0.5">
                          <p>{clinic.hours.weekdays}</p>
                          <p>{clinic.hours.saturday}</p>
                          <p>{clinic.hours.sunday}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-dental-900 mb-4">
                      Våra tjänster
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {clinic.services.map((service) => (
                        <li key={service} className="flex items-center gap-x-2">
                          <CheckIcon className="h-5 w-5 text-success-500 flex-shrink-0" />
                          <span className="text-dental-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/boka-tid"
                      className="inline-flex items-center justify-center rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all"
                    >
                      Boka tid
                    </Link>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center rounded-full border-2 border-primary-600 px-6 py-3 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-all"
                    >
                      Kontakta oss
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Redo att boka ditt besök?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Välj den klinik som passar dig bäst och boka tid online eller ring oss direkt
          </p>
          <div className="mt-8">
            <Link
              href="/boka-tid"
              className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all"
            >
              BOKA ONLINE
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

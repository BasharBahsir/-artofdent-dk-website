import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const clinics = [
  {
    name: 'Artofdent Malmö',
    address: 'Hantverkaregatan 6D',
    postal: '211 55 Malmö',
    phone: '+46 40-12 11 08',
    email: 'Artofdent.klinik@gmail.com',
    hours: {
      monday: 'Mandag: 08:00 - 20:00',
      tuesday: 'Tirsdag: 08:00 - 16:30',
      wednesday: 'Onsdag: 08:00 - 18:00',
      thursday: 'Torsdag: 08:00 - 17:00',
      friday: 'Fredag: 08:00 - 15:00',
      saturday: 'Lørdag: Lukket',
      sunday: 'Søndag: Lukket'
    },
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.433133598585!2d12.99021067767439!3d55.60150497303895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3e5c7993379%3A0x843f4c683c6a2e5!2sHantverkaregatan%206D%2C%20211%2055%20Malm%C3%B6!5e0!3m2!1sen!2sse!4v1678886452647!5m2!1sen!2sse'
  },
  {
    name: 'ABC Tandklinikgruppen',
    address: 'Södra Förstadsgatan 31 (IDOFFCENTRUM)',
    postal: '211 43 Malmö',
    phone: '+46 40-18 44 00',
    email: 'info@abctandklinikgruppen.se',
    hours: {
      monday: 'Mandag: 08:00 - 16:00',
      tuesday: 'Tirsdag: 08:00 - 16:00',
      wednesday: 'Onsdag: 08:00 - 16:00',
      thursday: 'Torsdag: 08:00 - 16:00',
      friday: 'Fredag: 08:00 - 14:00',
      saturday: 'Lørdag: Lukket',
      sunday: 'Søndag: Lukket'
    },
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.516999295195!2d12.99616567767433!3d55.59995197303867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3e6c0c0f9c3%3A0x1c0b1c0b1c0b1c0b!2sS%C3%B6dra%20F%C3%B6rstadsgatan%2031%2C%20211%2043%20Malm%C3%B6!5e0!3m2!1sen!2sse!4v1678886514789!5m2!1sen!2sse'
  }
]

const faqs = [
  {
    question: 'Hvordan booker jeg tid?',
    answer: 'Du kan booke tid online via vores bookingside, ringe til Artofdent på +46 40-12 11 08 eller ABC Tandklinikgruppen på +46 40-18 44 00, eller sende en email. Vi tilbyder fleksible tider og forsøger altid at finde en tid, der passer dig. Som dansk patient dækker vi dine rejseomkostninger over Øresund!'
  },
  {
    question: 'Hvad koster en tandundersøgelse?',
    answer: 'En grundig tandundersøgelse koster fra 450 kr - betydeligt billigere end i København! Dette inkluderer klinisk undersøgelse, røntgen og en behandlingsplan. Vi informerer altid om omkostninger før behandling.'
  },
  {
    question: 'Tager I imod akutte patienter?',
    answer: 'Ja, vi tager imod akutte patienter samme dag når det er muligt. Ring til Artofdent på +46 40-12 11 08 eller ABC Tandklinikgruppen på +46 40-18 44 00 så hurtigt som muligt, så hjælper vi dig med det samme.'
  },
  {
    question: 'Hvordan fungerer betaling for danske patienter?',
    answer: 'Som dansk patient betaler du direkte for behandlingen, men får betydelige besparelser sammenlignet med København! Vi hjælper gerne med dokumentation til eventuel refusion fra dansk forsikring. Vigtigst af alt - vi dækker din rejse over Øresund!'
  },
  {
    question: 'Hvilke betalingsmetoder accepterer I?',
    answer: 'Vi accepterer betalingskort (Visa, Mastercard), Swish, faktura efter aftale og delbetaling via eksterne partnere. Danske kort accepteres naturligvis også.'
  },
  {
    question: 'Hvad skal jeg tænke på før mit besøg?',
    answer: 'Kom 10 minutter før booket tid, tag gyldig ID og forsikringskort med. Informer os om medicin du tager. Afbestil senest 24 timer før for at undgå gebyr. Husk - vi betaler din rejse over Øresund!'
  }
]

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Kontakt & Praktisk Information
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Alt du behøver at vide for dit besøg hos os. Kontaktinformation, åbningstider, betaling, forsikringer og ofte stillede spørgsmål. Vi dækker din rejse over Øresund!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <a
                href="tel:+46401211008"
                className="rounded-lg sm:rounded-full bg-accent-400 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-accent-500 transition-all w-full sm:w-auto text-center"
              >
                Artofdent: +46 40-12 11 08
              </a>
              <Link
                href="/boka-tid"
                className="rounded-lg sm:rounded-full border-2 border-primary-600 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-primary-600 hover:bg-primary-600 hover:text-white transition-all w-full sm:w-auto text-center"
              >
                Book tid online
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Practical Info Cards */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            
            {/* Payment */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                  <CreditCardIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Betaling</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">Vi accepterer følgende betalingsmetoder:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Betalingskort (Visa, Mastercard)
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Swish
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Faktura (efter aftale)
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Delbetaling via eksterne partnere
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Betaling sker direkte efter besøget. Vi sender kvittering via email.
                </p>
              </div>
            </div>

            {/* Øresund Travel Offer */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 p-8 shadow-sm border border-blue-200">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM12 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM15.75 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM19.5 10.5h-15M19.5 13.5h-15" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Gratis Øresund Transport</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">Vi betaler din rejse over Øresund!</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Togbillet København-Malmö
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Øresundsbro bilafgift
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Busbillet over broen
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Betydelige besparelser på behandling
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200">
                <p className="text-sm text-blue-700 font-medium">
                  Gem dine rejsekvitteringer - vi refunderer omkostningerne ved dit besøg!
                </p>
              </div>
            </div>

            {/* Before Visit */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                  <DocumentTextIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Før dit besøg</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">Tænk på følgende:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Kom 10 minutter før booket tid
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Tag gyldig ID med
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Tag forsikringskort med (hvis relevant)
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Informer om medicin du tager
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Kan du ikke komme? Afbestil senest 24 timer før for at undgå gebyr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinics Section */}
      <div id="kliniker" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {clinics.map((clinic) => (
              <div key={clinic.name} className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Clinic Info */}
                <div>
                  <h2 className="text-3xl font-bold text-dental-900 mb-8">
                    {clinic.name}
                  </h2>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 flex-shrink-0">
                        <MapPinIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-dental-900">Adresse</h3>
                        <p className="mt-1 text-dental-600">{clinic.address}</p>
                        <p className="text-dental-600">{clinic.postal}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 flex-shrink-0">
                        <PhoneIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-dental-900">Telefon</h3>
                        <a href={`tel:${clinic.phone}`} className="mt-1 text-primary-600 hover:text-primary-700 font-medium">
                          {clinic.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 flex-shrink-0">
                        <EnvelopeIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-dental-900">Email</h3>
                        <a href={`mailto:${clinic.email}`} className="mt-1 text-primary-600 hover:text-primary-700 font-medium">
                          {clinic.email}
                        </a>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-start gap-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 flex-shrink-0">
                        <ClockIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">Åbningstider</h3>
                        <div className="mt-1 space-y-1 text-gray-600">
                          <p>{clinic.hours.monday}</p>
                          <p>{clinic.hours.tuesday}</p>
                          <p>{clinic.hours.wednesday}</p>
                          <p>{clinic.hours.thursday}</p>
                          <p>{clinic.hours.friday}</p>
                          <p>{clinic.hours.saturday}</p>
                          <p>{clinic.hours.sunday}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link
                        href="/boka-tid"
                        className="inline-flex items-center rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all"
                      >
                        Book tid på {clinic.name}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="h-[400px] lg:h-auto">
                  <div className="h-full w-full rounded-2xl overflow-hidden shadow-lg border border-dental-100">
                    <iframe
                      src={clinic.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Kort over ${clinic.name}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-600 mb-6">
              <QuestionMarkCircleIcon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Ofte stillede spørgsmål
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Her finder du svar på de mest almindelige spørgsmål om vores tjenester
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between flex-col md:flex-row gap-6">
            <div className="flex items-center gap-x-4">
              <HeartIcon className="h-12 w-12 text-white" />
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Akut tandpleje
                </h2>
                <p className="text-primary-100">
                  Vi er her for dig, når du har mest brug for os
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+46401211008"
                className="rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all text-center"
              >
                Artofdent: +46 40-12 11 08
              </a>
              <a
                href="tel:+46401844000"
                className="rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all text-center"
              >
                ABC: +46 40-18 44 00
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

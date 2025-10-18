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
    phone: '040-12 11 08',
    email: 'Artofdent.klinik@gmail.com',
    hours: {
      monday: 'Måndag: 08:00 - 20:00',
      tuesday: 'Tisdag: 08:00 - 16:30',
      wednesday: 'Onsdag: 08:00 - 18:00',
      thursday: 'Torsdag: 08:00 - 17:00',
      friday: 'Fredag: 08:00 - 15:00',
      saturday: 'Lördag: Stängt',
      sunday: 'Söndag: Stängt'
    },
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.433133598585!2d12.99021067767439!3d55.60150497303895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3e5c7993379%3A0x843f4c683c6a2e5!2sHantverkaregatan%206D%2C%20211%2055%20Malm%C3%B6!5e0!3m2!1sen!2sse!4v1678886452647!5m2!1sen!2sse'
  },
  {
    name: 'ABC Tandklinikgruppen',
    address: 'Södra Förstadsgatan 31 (IDOFFCENTRUM)',
    postal: '211 43 Malmö',
    phone: '040-18 44 00',
    email: 'info@abctandklinikgruppen.se',
    hours: {
      monday: 'Måndag: 08:00 - 16:00',
      tuesday: 'Tisdag: 08:00 - 16:00',
      wednesday: 'Onsdag: 08:00 - 16:00',
      thursday: 'Torsdag: 08:00 - 16:00',
      friday: 'Fredag: 08:00 - 14:00',
      saturday: 'Lördag: Stängt',
      sunday: 'Söndag: Stängt'
    },
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.516999295195!2d12.99616567767433!3d55.59995197303867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3e6c0c0f9c3%3A0x1c0b1c0b1c0b1c0b!2sS%C3%B6dra%20F%C3%B6rstadsgatan%2031%2C%20211%2043%20Malm%C3%B6!5e0!3m2!1sen!2sse!4v1678886514789!5m2!1sen!2sse'
  }
]

const faqs = [
  {
    question: 'Hur bokar jag tid?',
    answer: 'Du kan boka tid online via vår bokningssida, ringa Artofdent på 040-12 11 08 eller ABC Tandklinikgruppen på 040-18 44 00, eller skicka ett email. Vi erbjuder flexibla tider och försöker alltid hitta en tid som passar dig.'
  },
  {
    question: 'Vad kostar en tandundersökning?',
    answer: 'En grundlig tandundersökning kostar från 450 kr. Detta inkluderar klinisk undersökning, röntgen och en behandlingsplan. Vi informerar alltid om kostnader innan behandling.'
  },
  {
    question: 'Tar ni emot akuta patienter?',
    answer: 'Ja, vi tar emot akuta patienter samma dag när det är möjligt. Ring Artofdent på 040-12 11 08 eller ABC Tandklinikgruppen på 040-18 44 00 så snart som möjligt så hjälper vi dig omgående.'
  },
  {
    question: 'Vilka försäkringar accepterar ni?',
    answer: 'Vi accepterar alla svenska tandvårdsförsäkringar och hjälper dig gärna med din försäkring. Ta med ditt försäkringskort till besöket.'
  },
  {
    question: 'Vilka betalningsmetoder accepterar ni?',
    answer: 'Vi accepterar kontokort (Visa, Mastercard), Swish, faktura efter överenskommelse och delbetalning via externa partners.'
  },
  {
    question: 'Vad ska jag tänka på inför mitt besök?',
    answer: 'Kom 10 minuter före bokad tid, ta med giltig ID-handling och försäkringskort. Informera oss om mediciner du tar. Avboka senast 24 timmar innan för att undvika avgift.'
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
              Allt du behöver veta för ditt besök hos oss. Kontaktinformation, öppettider, betalning, försäkringar och vanliga frågor.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <a
                href="tel:040-12 11 08"
                className="rounded-lg sm:rounded-full bg-accent-400 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-accent-500 transition-all w-full sm:w-auto text-center"
              >
                Artofdent: 040-12 11 08
              </a>
              <Link
                href="/boka-tid"
                className="rounded-lg sm:rounded-full border-2 border-primary-600 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-primary-600 hover:bg-primary-600 hover:text-white transition-all w-full sm:w-auto text-center"
              >
                Boka tid online
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
                <h2 className="text-2xl font-bold text-gray-900">Betalning</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">Vi accepterar följande betalningsmetoder:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Kontokort (Visa, Mastercard)
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Swish
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Faktura (efter överenskommelse)
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Delbetalning via externa partners
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Betalning sker direkt efter besöket. Vi skickar kvitto via email.
                </p>
              </div>
            </div>

            {/* Insurance */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                  <ShieldCheckIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Försäkring</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">Vi samarbetar med alla större försäkringsbolag:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Folksam
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Länsförsäkringar
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    If
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Trygg-Hansa
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Ta med ditt försäkringskort till besöket så hjälper vi dig med din försäkring.
                </p>
              </div>
            </div>

            {/* Before Visit */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                  <DocumentTextIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Inför ditt besök</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">Tänk på följande:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Kom 10 minuter före bokad tid
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Ta med giltig ID-handling
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Ta med försäkringskort (om tillämpligt)
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-green-500">✓</span>
                    Informera om mediciner du tar
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Kan du inte komma? Avboka senast 24 timmar innan för att undvika avgift.
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
                        <h3 className="text-base font-semibold text-dental-900">Adress</h3>
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
                        <h3 className="text-base font-semibold text-gray-900">Öppettider</h3>
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
                        Boka tid på {clinic.name}
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
                      title={`Karta över ${clinic.name}`}
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
              Vanliga frågor
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Här hittar du svar på de vanligaste frågorna om våra tjänster
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
                  Akut tandvård
                </h2>
                <p className="text-primary-100">
                  Vi finns här för dig när du behöver oss som mest
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:040-12 11 08"
                className="rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all text-center"
              >
                Artofdent: 040-12 11 08
              </a>
              <a
                href="tel:040-18 44 00"
                className="rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all text-center"
              >
                ABC: 040-18 44 00
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

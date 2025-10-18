import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  CreditCardIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Hur bokar jag tid?',
    answer: 'Du kan boka tid online via vår bokningssida, ringa oss direkt, eller skicka ett email. Vi erbjuder flexibla tider och försöker alltid hitta en tid som passar dig.'
  },
  {
    question: 'Vad kostar en tandundersökning?',
    answer: 'En grundlig tandundersökning kostar från 450 kr. Detta inkluderar klinisk undersökning, röntgen och en behandlingsplan.'
  },
  {
    question: 'Tar ni emot akuta patienter?',
    answer: 'Ja, vi tar emot akuta patienter samma dag när det är möjligt. Ring oss så snart som möjligt så hjälper vi dig.'
  },
  {
    question: 'Vilka försäkringar accepterar ni?',
    answer: 'Vi accepterar alla svenska tandvårdsförsäkringar och hjälper dig gärna med din försäkring.'
  }
]

export default function PraktiskInfoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-dental-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dental-900 sm:text-6xl">
              Praktisk information
            </h1>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Här hittar du viktig information om besök, betalning, försäkringar och mycket mer.
            </p>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Opening Hours */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-dental-100">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                  <ClockIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-dental-900">Öppettider</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dental-700">Måndag - Fredag</span>
                  <span className="font-medium text-dental-900">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dental-700">Lördag</span>
                  <span className="font-medium text-dental-900">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dental-700">Söndag</span>
                  <span className="font-medium text-dental-900">Stängt</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-dental-100">
                <p className="text-sm text-dental-600">
                  För akuta ärenden, ring oss även utanför öppettider och följ instruktionerna i telefonsvararen.
                </p>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-dental-100">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                  <CreditCardIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-dental-900">Betalning</h2>
              </div>
              <div className="space-y-4">
                <p className="text-dental-700">Vi accepterar följande betalningsmetoder:</p>
                <ul className="space-y-2 text-dental-600">
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Kontokort (Visa, Mastercard)
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Swish
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Faktura (efter överenskommelse)
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Delbetalning via externa partners
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-dental-100">
                <p className="text-sm text-dental-600">
                  Betalning sker direkt efter besöket. Vi skickar kvitto via email.
                </p>
              </div>
            </div>

            {/* Insurance */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-dental-100">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                  <ShieldCheckIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-dental-900">Försäkring</h2>
              </div>
              <div className="space-y-4">
                <p className="text-dental-700">Vi samarbetar med alla större försäkringsbolag:</p>
                <ul className="space-y-2 text-dental-600">
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Folksam
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Länsförsäkringar
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    If
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Trygg-Hansa
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-dental-100">
                <p className="text-sm text-dental-600">
                  Ta med ditt försäkringskort till besöket så hjälper vi dig med din försäkring.
                </p>
              </div>
            </div>

            {/* Before Visit */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-dental-100">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                  <DocumentTextIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-dental-900">Inför ditt besök</h2>
              </div>
              <div className="space-y-4">
                <p className="text-dental-700">Tänk på följande:</p>
                <ul className="space-y-2 text-dental-600">
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Kom 10 minuter före bokad tid
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Ta med giltig ID-handling
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Ta med försäkringskort (om tillämpligt)
                  </li>
                  <li className="flex items-center gap-x-2">
                    <span className="text-success-500">✓</span>
                    Informera om mediciner du tar
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-dental-100">
                <p className="text-sm text-dental-600">
                  Kan du inte komma? Avboka senast 24 timmar innan för att undvika avgift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-dental-50 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-600 mb-6">
              <QuestionMarkCircleIcon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-dental-900 sm:text-4xl">
              Vanliga frågor
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl bg-white p-6 shadow-sm border border-dental-100">
                <h3 className="text-lg font-semibold text-dental-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-dental-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-dental-600 mb-6">
              Har du fler frågor? Vi hjälper dig gärna!
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all"
            >
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency */}
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
            <div className="flex gap-4">
              <a
                href="tel:040-12 11 08"
                className="rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all"
              >
                Artofdent: 040-12 11 08
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const treatments = [
  { name: 'Akutbesök', href: '/behandlingar/akut-tandvard' },
  { name: 'Besök hos tandhygienist', href: '/behandlingar/tandhygienist' },
  { name: 'Tandundersökning/årlig kontroll', href: '/behandlingar/tandundersokning' },
  { name: 'Tandblekning', href: '/behandlingar/tandblekning' },
  { name: 'Rotfyllning', href: '/behandlingar/rotfyllning' },
  { name: 'Tandvårdsrädsla', href: '/behandlingar/tandvardsradsla' },
  { name: 'Tandställning/Invisalign', href: '/behandlingar/tandreglering' },
  { name: 'Tandimplantat', href: '/behandlingar/tandimplantat' }
]

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Title and Image */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
              Behandlingar vi kan hjälpa dig med
            </h2>
            <div className="relative">
              <Image
                src="/images/Miljöfoton på kliniken (4).jpg"
                alt="Modern tandvårdsmiljö - Art of Dent"
                width={500}
                height={375}
                className="w-full h-auto rounded-lg shadow-sm"
                priority
              />
            </div>
          </div>

          {/* Right side - Treatment List */}
          <div className="lg:pt-16">
            <div className="space-y-0">
              {treatments.map((treatment, index) => (
                <Link
                  key={treatment.name}
                  href={treatment.href}
                  className="flex items-center justify-between py-4 px-0 text-gray-700 hover:text-primary-600 transition-colors group border-b border-gray-200 last:border-b-0"
                >
                  <span className="text-lg font-light">{treatment.name}</span>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import SearchModal from './SearchModal'

const services = [
  {
    name: 'Boka tid',
    description: 'Snabb och enkel bokning online eller via telefon',
    icon: '/images/icons/appointment.png',
    href: '/boka-tid',
  },
  {
    name: 'Hitta klinik',
    description: 'Lokalisera närmaste klinik med vägbeskrivning',
    icon: '/images/icons/dental-checkup.png', // Assuming this is the right icon
    href: '/kontakt',
  },
  {
    name: 'Barn tandvård',
    description: 'Specialiserad och trygg tandvård för barn',
    icon: '/images/icons/happy-tooth.png',
    href: '/behandlingar/barnvard',
  },
  {
    name: 'Akut tandvård',
    description: 'Akutmottagning för brådskande tandproblem',
    icon: '/images/icons/akut.png',
    href: '/behandlingar/akut-tandvard',
  },
  {
    name: 'Tandimplantat',
    description: 'Moderna implantat för ersättning av förlorade tänder',
    icon: '/images/icons/dental-implant.png',
    href: '/behandlingar/tandimplantat',
  },
  {
    name: 'Estetisk tandvård',
    description: 'Tandblekning och kosmetiska behandlingar',
    icon: '/images/icons/astetic_tandvard.png',
    href: '/behandlingar/estetisk-tandvard',
  }
]

export default function ServicesGrid() {
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchModalOpen(true)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dental-900 sm:text-4xl">
            Hur kan vi hjälpa dig?
          </h2>
          <p className="mt-6 text-lg leading-8 text-dental-600">
            Vi erbjuder ett brett utbud av tandvårdstjänster med fokus på kvalitet, 
            trygghet och patientens bästa.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group relative flex flex-col items-start p-8 bg-white rounded-2xl border border-dental-100 hover:bg-dental-50 hover:shadow-lg transition-all duration-300"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-dental-900">
                  <div className="flex h-16 w-16 items-center justify-center">
                    <Image src={service.icon} alt={`${service.name} icon`} width={40} height={40} className="h-10 w-10" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-dental-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <span className="text-sm font-semibold text-primary-600 group-hover:text-primary-500">
                      Läs mer <span aria-hidden="true">→</span>
                    </span>
                  </p>
                </dd>
              </Link>
            ))}
          </dl>
        </div>

        {/* Search section */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Jag letar efter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full rounded-full border border-dental-300 bg-white px-6 py-4 text-base placeholder-dental-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            />
            <button 
              onClick={handleSearch}
              className="absolute right-2 top-2 rounded-full bg-accent-400 px-6 py-2 text-sm font-semibold text-white hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 transition-colors"
            >
              Sök
            </button>
          </div>
          <p className="mt-4 text-sm text-dental-500">
            Du kan söka på allt från{' '}
            <button 
              onClick={() => {
                setSearchQuery('tandsten')
                setSearchModalOpen(true)
              }}
              className="font-medium text-primary-600 hover:text-primary-500 underline"
            >
              &ldquo;tandsten&rdquo;
            </button>{' '}
            till{' '}
            <button 
              onClick={() => {
                setSearchQuery('tandvårdsrädsla')
                setSearchModalOpen(true)
              }}
              className="font-medium text-primary-600 hover:text-primary-500 underline"
            >
              &ldquo;tandvårdsrädsla&rdquo;
            </button>
          </p>
        </div>

        {/* Search Modal */}
        <SearchModal 
          isOpen={searchModalOpen} 
          onClose={() => setSearchModalOpen(false)}
          initialQuery={searchQuery}
        />
      </div>
    </div>
  )
}

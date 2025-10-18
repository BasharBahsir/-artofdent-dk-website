'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

interface Clinic {
  slug: string
  name: string
  address: string
  phone: string
  openingHours: string
  image: string
  specialties: string[]
}

interface ClinicSelectorProps {
  onClose: () => void
  onSelect: (clinicSlug: string) => void
}

const clinics: Clinic[] = [
  {
    slug: 'artofdent-malmo',
    name: 'Artofdent Malmö',
    address: 'Hantverkaregatan 6D, 21155 Malmö',
    phone: '040-121 108',
    openingHours: 'Mån-Fre: 08:00-17:00',
    image: '/images/artofdent.png',
    specialties: ['Allmäntandvård', 'Implantologi', 'Estetisk tandvård', 'Invisalign']
  },
  {
    slug: 'abc-tandklinik-malmo',
    name: 'ABC Tandklinikgruppen Malmö',
    address: 'Södra Förstadsgatan 31, 211 43 Malmö',
    phone: '040-18 44 00',
    openingHours: 'Mån-Fre: 07:30-18:00',
    image: '/images/abc_tandklinikgruppen.jpg',
    specialties: ['Allmäntandvård', 'Barntandvård', 'Tandreglering', 'Specialisttandvård']
  }
]

export default function ClinicSelector({ onClose, onSelect }: ClinicSelectorProps) {
  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-neutral-900">
                    Välj din klinik
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md p-2 text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    onClick={onClose}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {clinics.map((clinic) => (
                    <div
                      key={clinic.slug}
                      className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      {/* Clinic image */}
                      <div className="aspect-[16/9] relative">
                        <Image
                          src={clinic.image}
                          alt={clinic.name}
                          fill
                          className="object-cover"
                        />
                        {/* Subtle brand gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 via-transparent to-accent-400/45 opacity-85"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                      </div>

                      {/* Clinic info */}
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                          {clinic.name}
                        </h4>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-start gap-x-3">
                            <MapPinIcon className="h-5 w-5 text-neutral-400 mt-0.5" />
                            <span className="text-sm text-neutral-600">{clinic.address}</span>
                          </div>
                          
                          <div className="flex items-center gap-x-3">
                            <PhoneIcon className="h-5 w-5 text-neutral-400" />
                            <span className="text-sm text-neutral-600">{clinic.phone}</span>
                          </div>
                          
                          <div className="flex items-center gap-x-3">
                            <ClockIcon className="h-5 w-5 text-neutral-400" />
                            <span className="text-sm text-neutral-600">{clinic.openingHours}</span>
                          </div>
                        </div>

                        {/* Specialties */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {clinic.specialties.map((specialty) => (
                              <span
                                key={specialty}
                                className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-center">
                          <button
                            onClick={() => onSelect(clinic.slug)}
                            className="w-full max-w-xs rounded-lg bg-accent-400 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 transition-colors"
                          >
                            Boka för denna klinik
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-neutral-500">
                    Behöver du hjälp att välja? <Link href="/kontakt" className="text-primary-600 hover:text-primary-500">Kontakta oss</Link>
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

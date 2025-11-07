'use client'

import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { allBlogPosts } from '@/data/blog-posts'

interface SearchResult {
  title: string
  description: string
  href: string
  type: 'treatment' | 'article' | 'page'
  category?: string
}

const searchData: SearchResult[] = [
  // Treatments
  {
    title: 'Akut tandpleje',
    description: 'Ved tandpine og ulykker',
    href: '/behandlingar/akut-tandvard',
    type: 'treatment',
    category: 'Behandlinger'
  },
  {
    title: 'Tandimplantater',
    description: 'Erstatning af mistede tænder',
    href: '/behandlingar/tandimplantat',
    type: 'treatment',
    category: 'Behandlinger'
  },
  {
    title: 'Æstetisk tandpleje',
    description: 'For smukkere tænder',
    href: '/behandlingar/estetisk-tandvard',
    type: 'treatment',
    category: 'Behandlinger'
  },
  {
    title: 'Tandregulering',
    description: 'For skæve eller tætpakkede tænder',
    href: '/behandlingar/tandreglering',
    type: 'treatment',
    category: 'Behandlinger'
  },
  {
    title: 'Børnetandpleje',
    description: 'Specialiseret tandpleje for børn',
    href: '/behandlingar/barnvard',
    type: 'treatment',
    category: 'Behandlinger'
  },
  {
    title: 'Tandblekning',
    description: 'Hvidere tænder med professionel blekning',
    href: '/behandlingar/tandblekning',
    type: 'treatment',
    category: 'Behandlinger'
  },
  {
    title: 'Tandhygiejnist',
    description: 'Professionel tandrensning og forebyggende pleje',
    href: '/behandlingar/tandhygienist',
    type: 'treatment',
    category: 'Behandlinger'
  },
  {
    title: 'Rodfyldning',
    description: 'Behandling af inficerede tandrødder',
    href: '/behandlingar/rotfyllning',
    type: 'treatment',
    category: 'Behandlinger'
  },
  {
    title: 'Tandundersøgelse',
    description: 'Regelmæssig kontrol for god mundssundhed',
    href: '/behandlingar/tandundersokning',
    type: 'treatment',
    category: 'Behandlinger'
  },
  {
    title: 'Tandplejetilskud',
    description: 'Beregner for tandplejetilskud',
    href: '/behandlingar/tandvard-bidrag',
    type: 'treatment',
    category: 'Tandplejeydelser'
  },
  {
    title: 'Senior tandpleje',
    description: 'Prisvenlig tandpleje for 67+ år',
    href: '/behandlingar/tiotandvard',
    type: 'treatment',
    category: 'Tandplejeydelser'
  },
  // Pages
  {
    title: 'Om os',
    description: 'Lær vores team og vores historie at kende',
    href: '/om-oss',
    type: 'page',
    category: 'Information'
  },
  {
    title: 'Kontakt',
    description: 'Kontaktinformation og åbningstider',
    href: '/kontakt',
    type: 'page',
    category: 'Information'
  },
  {
    title: 'Book tid',
    description: 'Book dit tandlægebesøg online',
    href: '/boka-tid',
    type: 'page',
    category: 'Booking'
  },
  {
    title: 'Henvisning',
    description: 'Send henvisning til vores specialister',
    href: '/remiss',
    type: 'page',
    category: 'Specialister'
  },
  {
    title: 'Vidensbank',
    description: 'Artikler og information om tandpleje',
    href: '/kunskapbanken',
    type: 'page',
    category: 'Information'
  }
]

// Add blog posts to search data
const blogSearchData: SearchResult[] = allBlogPosts.map(post => ({
  title: post.title,
  description: post.excerpt,
  href: `/kunskapbanken/${post.slug}`,
  type: 'article',
  category: post.category
}))

const allSearchData = [...searchData, ...blogSearchData]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  initialQuery?: string
}

export default function SearchModal({ isOpen, onClose, initialQuery = '' }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  // Set initial query when modal opens
  useEffect(() => {
    if (isOpen && initialQuery) {
      setQuery(initialQuery)
    }
  }, [isOpen, initialQuery])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchQuery = query.toLowerCase().trim()
    const filteredResults = allSearchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery) ||
      item.category?.toLowerCase().includes(searchQuery)
    )

    setResults(filteredResults.slice(0, 8)) // Limit to 8 results
  }, [query])

  const handleClose = () => {
    setQuery('')
    setResults([])
    onClose()
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'treatment':
        return 'Behandlinger'
      case 'article':
        return 'Artikler'
      case 'page':
        return 'Sider'
      default:
        return 'Resultater'
    }
  }

  // Group results by type
  const groupedResults = results.reduce((acc, result) => {
    const type = result.type
    if (!acc[type]) {
      acc[type] = []
    }
    acc[type].push(result)
    return acc
  }, {} as Record<string, SearchResult[]>)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto h-full sm:h-auto sm:max-w-6xl sm:mt-12 transform divide-y divide-gray-100 overflow-hidden sm:rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              {/* Search Input */}
              <div className="relative border-b border-gray-200 sm:border-b-0">
                <MagnifyingGlassIcon className="pointer-events-none absolute left-6 top-6 h-7 w-7 text-gray-400" />
                <input
                  type="text"
                  className="h-20 w-full border-0 bg-transparent pl-16 pr-16 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-xl"
                  placeholder="Søg behandlinger, artikler eller information..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={handleClose}
                  className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 p-1"
                >
                  <XMarkIcon className="h-8 w-8" />
                </button>
              </div>

              {/* Search Results */}
              {results.length > 0 && (
                <div className="flex-1 overflow-y-auto" style={{ maxHeight: '600px' }}>
                  {Object.entries(groupedResults).map(([type, typeResults]) => (
                    <div key={type} className="border-b border-gray-100 last:border-b-0">
                      {/* Category Header */}
                      <div className="px-8 py-5 bg-gray-50 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                          {getTypeLabel(type)}
                        </h3>
                      </div>
                      
                      {/* Category Results */}
                      <div className="divide-y divide-gray-100">
                        {typeResults.map((result, index) => (
                          <Link
                            key={`${type}-${index}`}
                            href={result.href}
                            onClick={handleClose}
                            className="group flex cursor-pointer select-none items-start px-8 py-6 hover:bg-primary-50 hover:text-primary-900 transition-colors"
                          >
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 group-hover:text-primary-900 text-lg">
                                {result.title}
                              </h4>
                              <p className="mt-2 text-gray-600 group-hover:text-primary-700 text-base line-clamp-2">
                                {result.description}
                              </p>
                              {result.category && (
                                <p className="mt-2 text-sm text-gray-500 group-hover:text-primary-600">
                                  {result.category}
                                </p>
                              )}
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <span className="text-gray-400 group-hover:text-primary-600">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* No Results */}
              {query && results.length === 0 && (
                <div className="flex-1 flex items-center justify-center px-8 py-24 text-center">
                  <div>
                    <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-6 font-semibold text-gray-900 text-xl">Ingen resultater fundet</p>
                    <p className="mt-3 text-gray-500 text-base">
                      Prøv andre søgeord eller gennemse vores behandlinger.
                    </p>
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              {!query && (
                <div className="flex-1 flex items-center justify-center px-8 py-24 text-center">
                  <div>
                    <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-6 font-semibold text-gray-900 text-xl">Søg på vores hjemmeside</p>
                    <p className="mt-3 text-gray-500 text-base">
                      Find behandlinger, artikler og information hurtigt og nemt.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      <Link
                        href="/behandlingar"
                        onClick={handleClose}
                        className="rounded-full bg-primary-100 px-6 py-3 text-base font-medium text-primary-800 hover:bg-primary-200 transition-colors"
                      >
                        Behandlinger
                      </Link>
                      <Link
                        href="/kunskapbanken"
                        onClick={handleClose}
                        className="rounded-full bg-primary-100 px-6 py-3 text-base font-medium text-primary-800 hover:bg-primary-200 transition-colors"
                      >
                        Vidensbank
                      </Link>
                      <Link
                        href="/boka-tid"
                        onClick={handleClose}
                        className="rounded-full bg-accent-100 px-6 py-3 text-base font-medium text-accent-800 hover:bg-accent-200 transition-colors"
                      >
                        Book tid
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

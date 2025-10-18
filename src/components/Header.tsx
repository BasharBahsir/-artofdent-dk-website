'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, PhoneIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SearchModal from './SearchModal';

const navigation = [
  { name: 'Behandlingar', href: '/behandlingar', hasDropdown: true },
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Tandvårdsstöd', href: '/tandvardstod', hasDropdown: true },
  { name: 'Remiss', href: '/remiss' },
  { name: 'Kontakt & Info', href: '/kontakt' },
  { name: 'Kunskapbanken', href: '/kunskapbanken' },
]

const behandlingarDropdown = [
  {
    name: 'Akut tandvård',
    description: 'Vid tandvärk och olyckor',
    href: '/behandlingar/akut-tandvard',
    icon: '/images/Akut.svg'
  },
  {
    name: 'Tandimplantat',
    description: 'Ersättning av förlorade tänder',
    href: '/behandlingar/tandimplantat',
    icon: '/images/Implantat.svg'
  },
  {
    name: 'Estetisk tandvård',
    description: 'För vackrare tänder',
    href: '/behandlingar/estetisk-tandvard',
    icon: '/images/Estetisk.svg'
  },
  {
    name: 'Tandreglering',
    description: 'För sneda eller trångställda tänder',
    href: '/behandlingar/tandreglering',
    icon: '/images/Tandstallning.svg'
  },
  {
    name: 'Barn tandvård',
    description: 'Specialiserad tandvård för barn',
    href: '/behandlingar/barnvard',
    icon: '/images/icons/happy-tooth.png'
  }
]

const tandvardsstodDropdown = [
  {
    name: 'Tandvårdsbidrag',
    description: 'Kalkylator för tandvårdsbidrag',
    href: '/behandlingar/tandvard-bidrag',
    icon: '/images/icons/tandvardbidrag.png'
  },
  {
    name: 'Tiotandvård',
    description: 'Prisvärd tandvård för 67+ år',
    href: '/behandlingar/tiotandvard',
    icon: '/images/icons/tiotandvard.png'
  }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const pathname = usePathname();
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // 300ms delay before closing
    setDropdownTimeout(timeout)
  }

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/20 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Global">
        {/* Left side: Hamburger menu (mobile) and Logo */}
        <div className="flex lg:flex-1 items-center gap-4">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-primary-700 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          
          {/* Text-based Logo */}
          <Link href="/" className="flex items-start gap-x-1">
            <span className="text-xl sm:text-2xl font-bold text-primary-700 tracking-tight">
              ART<span className="text-primary-600">OF</span>DENT
            </span>
            <span className="text-xs font-bold text-gray-400 tracking-widest">se</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => {
            if (item.name === 'Behandlingar') {
              return (
                <button
                  key={item.name}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    pathname.startsWith('/behandlingar') && !pathname.includes('/tandvard-bidrag') && !pathname.includes('/tiotandvard')
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.name}
                  <ChevronDownIcon className="ml-1 h-4 w-4 inline" />
                </button>
              )
            }
            
            if (item.name === 'Tandvårdsstöd') {
              return (
                <button
                  key={item.name}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    pathname.includes('/tandvard-bidrag') || pathname.includes('/tiotandvard')
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.name}
                  <ChevronDownIcon className="ml-1 h-4 w-4 inline" />
                </button>
              )
            }
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                }`}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.name}
                {item.hasDropdown && <ChevronDownIcon className="ml-1 h-4 w-4 inline" />}
              </Link>
            )
          })}
        </div>

        {/* Right side - Search and CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-4">
          {/* Search - Hidden on mobile */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="hidden md:flex items-center gap-2 text-sm text-gray-600 hover:text-primary-700 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          >
            <span>Sök</span>
            <MagnifyingGlassIcon className="h-4 w-4" />
          </button>

          {/* CTA Button */}
          <Link
            href="/boka-tid"
            className="rounded-full bg-accent-400 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 transition-all hover:shadow-md"
          >
            BOKA TID
          </Link>
        </div>
      </nav>

          {/* Full-width Dropdown Menu - Behandlingar */}
          {activeDropdown === 'Behandlingar' && (
            <div 
              className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-4xl mx-auto px-6 py-4">
                <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                  {behandlingarDropdown.map((dropdownItem, index) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {dropdownItem.icon && (
                        <Image
                          src={dropdownItem.icon}
                          alt={dropdownItem.name}
                          width={38}
                          height={38}
                          className="w-7 h-7 sm:w-10 sm:h-10 mt-1 flex-shrink-0"
                        />
                      )}
                      <div>
                        <div className="text-sm sm:text-base font-medium text-gray-900">{dropdownItem.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500 mt-1">{dropdownItem.description}</div>
                      </div>
                    </Link>
                  ))}
                  
                  {/* 1177 Action Button - positioned in the right column */}
                  <div className="flex items-center justify-start pl-5">
                    <a
                      href="https://e-tjanster.1177.se/mvk/login/login.xhtml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all duration-200 transform hover:scale-105"
                    >
                      Lista dig på 1177
                      <Image
                        src="/images/icons/right-arrow.png"
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="w-4 h-4 brightness-0 invert"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

      {/* Full-width Dropdown Menu - Tandvårdsstöd */}
      {activeDropdown === 'Tandvårdsstöd' && (
        <div 
          className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {tandvardsstodDropdown.map((dropdownItem) => (
                <Link
                  key={dropdownItem.name}
                  href={dropdownItem.href}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {dropdownItem.icon && (
                    <Image
                      src={dropdownItem.icon}
                      alt={dropdownItem.name}
                      width={38}
                      height={38}
                      className="w-7 h-7 sm:w-10 sm:h-10 mt-1 flex-shrink-0"
                    />
                  )}
                  <div>
                    <div className="text-sm sm:text-base font-medium text-gray-900">{dropdownItem.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">{dropdownItem.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <Transition.Root show={mobileMenuOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={React.Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex justify-end">
            <Transition.Child
              as={React.Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <Link href="/" className="flex items-start gap-x-1" onClick={() => setMobileMenuOpen(false)}>
                    <span className="text-xl font-bold text-primary-700 tracking-tight">
                      ART<span className="text-primary-600">OF</span>DENT
                    </span>
                    <span className="text-xs font-bold text-gray-400 tracking-widest">se</span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2 border-t border-gray-200 px-4 py-6">
                  {navigation.map((item) => {
                    if (item.name === 'Behandlingar') {
                      return (
                        <div key={item.name}>
                          <button
                            onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'Behandlingar' ? null : 'Behandlingar')}
                            className="flex items-center justify-between w-full p-3 text-left font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                          >
                            <span>Behandlingar</span>
                            <ChevronDownIcon className={`h-5 w-5 transition-transform ${activeMobileDropdown === 'Behandlingar' ? 'rotate-180' : ''}`} />
                          </button>
                          {activeMobileDropdown === 'Behandlingar' && (
                            <div className="pl-4 mt-2 space-y-2">
                              {behandlingarDropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {dropdownItem.icon && (
                                    <Image
                                      src={dropdownItem.icon}
                                      alt=""
                                      width={20}
                                      height={20}
                                      className="w-5 h-5"
                                    />
                                  )}
                                  <div>
                                    <div className="font-medium text-sm">{dropdownItem.name}</div>
                                    <div className="text-xs text-gray-500">{dropdownItem.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    }
                    
                    if (item.name === 'Tandvårdsstöd') {
                      return (
                        <div key={item.name}>
                          <button
                            onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'Tandvårdsstöd' ? null : 'Tandvårdsstöd')}
                            className="flex items-center justify-between w-full p-3 text-left font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                          >
                            <span>Tandvårdsstöd</span>
                            <ChevronDownIcon className={`h-5 w-5 transition-transform ${activeMobileDropdown === 'Tandvårdsstöd' ? 'rotate-180' : ''}`} />
                          </button>
                          {activeMobileDropdown === 'Tandvårdsstöd' && (
                            <div className="pl-4 mt-2 space-y-2">
                              {tandvardsstodDropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {dropdownItem.icon && (
                                    <Image
                                      src={dropdownItem.icon}
                                      alt=""
                                      width={20}
                                      height={20}
                                      className="w-5 h-5"
                                    />
                                  )}
                                  <div>
                                    <div className="font-medium text-sm">{dropdownItem.name}</div>
                                    <div className="text-xs text-gray-500">{dropdownItem.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    }
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block p-3 font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 border-t border-gray-200 px-4 py-6">
                  <Link
                    href="/boka-tid"
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-primary-700 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-800 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src="/images/icons/appointment.png"
                      alt="Boka tid"
                      width={20}
                      height={20}
                      className="w-5 h-5 brightness-0 invert"
                    />
                    BOKA ONLINE
                  </Link>
                  
                  <Link
                    href="/kontakt"
                    className="flex items-center justify-center gap-2 w-full rounded-full border-2 border-secondary-400 bg-white px-6 py-3 text-base font-semibold text-secondary-400 shadow-lg hover:bg-secondary-400 hover:text-white transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <PhoneIcon className="w-5 h-5" />
                    KONTAKTA OSS
                  </Link>
                  
                  <a
                    href="https://e-tjanster.1177.se/mvk/login/login.xhtml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-500 transition-all"
                  >
                    Lista dig på 1177
                    <Image
                      src="/images/icons/right-arrow.png"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className="w-4 h-4 brightness-0 invert"
                    />
                  </a>
                </div>

                {/* Search Section */}
                <div className="border-t border-gray-200 px-4 py-6">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setSearchModalOpen(true)
                    }}
                    className="w-full flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-3 text-base text-gray-500 hover:border-primary-500 hover:text-primary-700 transition-colors"
                  >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                    <span>Sök behandlingar...</span>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Search Modal */}
      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />
    </header>
  )
}

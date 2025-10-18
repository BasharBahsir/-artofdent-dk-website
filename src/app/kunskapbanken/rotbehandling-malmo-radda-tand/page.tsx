'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function RotbehandlingMalmoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Rotbehandling" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Rotbehandling</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Modern endodonti för att rädda tänder som annars skulle behöva dras ut.</p>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Rotbehandling</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Rotbehandling utförs med modern teknik för att rädda tänder som annars skulle behöva dras ut. Behandlingen är ofta den sista möjligheten att bevara din naturliga tand.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">När behövs rotbehandling?</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Djup karies som nått tandnerven</li>
            <li>Tandtrauma eller skada</li>
            <li>Upprepade tandbehandlingar</li>
            <li>Sprickor i tanden</li>
            <li>Intensiv tandvärk som inte går över</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Rotbehandlingsprocessen</h2>
          <p className="text-gray-700 leading-7 mb-6">Behandlingen börjar med diagnos och planering genom klinisk undersökning och röntgen. Under behandlingen avlägsnas infekterad vävnad och rotkanalerna rengörs noggrant. Efter läkning fylls kanalerna permanent och tanden återställs, ofta med en krona för extra skydd.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Modern teknik</h2>
          <p className="text-gray-700 leading-7 mb-6">Vi använder mikroskopi för förbättrad precision och bättre visualisering, Rotex-teknik för snabbare behandling och mindre smärta, samt digital röntgen för lägre strålning och omedelbar bildvisning.</p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Eftervård</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Ta smärtstillande vid behov första dagarna</li>
              <li>Undvik tuggning på behandlad sida initialt</li>
              <li>Fortsätt god munhygien</li>
              <li>Kom på uppföljning efter 6-12 månader</li>
              <li>Överväg krona för långsiktigt skydd</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent för rotbehandling?</h2>
          <p className="text-gray-700 leading-7 mb-6">Vi på Art of Dent är specialister på rotbehandling med mikroskopisk teknik för hög framgångsgrad. Våra erfarna endodontister arbetar varsamt för att ge dig smärtfri behandling och rädda din tand.</p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Behöver du rotbehandling?</h2>
          <p className="text-gray-600 mb-6">Har du tandvärk? Kontakta oss på Art of Dent för undersökning. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/tandvark" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandvärk</Link>
              <Link href="/behandlingar/rotfyllning" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Rotfyllning</Link>
              <Link href="/kunskapbanken/pulpit" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Pulpit</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

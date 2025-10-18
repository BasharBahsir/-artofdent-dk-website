'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function MunhygienMalmoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Munhygien" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Munhygien</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Professionella tips för perfekt tandvård hemma från tandläkare i Malmö.</p>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Munhygien</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">God munhygien är grunden för friska tänder och tandkött. Tandläkare i Malmö delar sina bästa råd för optimal munvård hemma.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Grundläggande munhygienrutiner</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Borsta i 2 minuter, minst 2 gånger dagligen</li>
            <li>Använd mjuka borst med cirkulära rörelser</li>
            <li>Använd tandtråd dagligen för att ta bort plack mellan tänderna</li>
            <li>Munsköljning ger extra skydd mot bakterier</li>
            <li>Rengör tungan dagligen</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga munhygienfel</h2>
          <p className="text-gray-700 leading-7 mb-6">För hård borstning sliter på emaljen och tandköttet. För kort borstning ger inte tillräckligt skydd. Att glömma tungan leder till bakteriesamling. Fel tandkräm kanske inte är anpassad för dina behov.</p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Rekommenderade produkter</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Elektriska tandborstar: Oral-B, Philips Sonicare</li>
              <li>Manuella tandborstar: TePe, Jordan</li>
              <li>Tandkräm med fluor: Sensodyne, Colgate Total</li>
              <li>Tandtråd: Oral-B Glide, TePe Dental Tape</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">När ska du söka professionell hjälp?</h2>
          <p className="text-gray-700 leading-7 mb-6">Sök akut vård vid svår tandvärk, svullnad i ansiktet eller blödning som inte upphör. Rutinmässigt bör du besöka tandläkaren för kontroll var 6:e månad, professionell rengöring och fluorbehandling.</p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka munhygienbehandling</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent för professionell rengöring. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/behandlingar/tandhygienist" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandhygienist</Link>
              <Link href="/kunskapbanken/tandsten" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandsten</Link>
              <Link href="/kunskapbanken/karies" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Karies</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

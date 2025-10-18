'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function ParodontitMalmoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Parodontit" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Parodontit</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Effektiv behandling av tandköttsjukdom i Malmö. Tidig upptäckt är avgörande för att bevara dina tänder.</p>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Parodontit</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Parodontit är en allvarlig tandköttsjukdom som påverkar många vuxna. Tidig upptäckt och behandling är avgörande för att bevara dina tänder.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad är parodontit?</h2>
          <p className="text-gray-700 leading-7 mb-6">Parodontit är en bakteriell infektion som angriper tandköttet och det stödjande benvävnaden runt tänderna. Obehandlad kan den leda till tandlossning. Sjukdomen utvecklas i stadier från gingivit till avancerad parodontit.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Symtom på parodontit</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Blödande tandkött vid borstning</li>
            <li>Rött och svullet tandkött</li>
            <li>Dålig andedräkt</li>
            <li>Tandköttsrecession - tandköttet drar sig tillbaka</li>
            <li>Lösa tänder</li>
            <li>Smärta vid tuggning</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Behandlingsalternativ</h2>
          <p className="text-gray-700 leading-7 mb-6">Icke-kirurgisk behandling inkluderar djuprengöring (scaling & root planing) för att avlägsna plack och tandsten. Vid mer avancerad parodontit kan flapkirurgi och regenerativ behandling med benersättningsmaterial behövas.</p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Förebyggande åtgärder</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta tänderna 2 gånger dagligen</li>
              <li>Använd tandtråd dagligen</li>
              <li>Skölj med antibakteriell munsköljning</li>
              <li>Sluta röka</li>
              <li>Besök tandläkaren regelbundet</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent för parodontibehandling?</h2>
          <p className="text-gray-700 leading-7 mb-6">Vi på Art of Dent är specialister på tandköttsjukdomar med modern laserteknik för minimal smärta och snabb läkning. Våra erfarna parodontologer arbetar varsamt för att bevara dina tänder och återställa tandköttets hälsa.</p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka parodontal bedömning</h2>
          <p className="text-gray-600 mb-6">Misstänker du tandköttsproblem? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/blödande-tandkött" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Blödande tandkött</Link>
              <Link href="/kunskapbanken/tillbakadraget-tandkött" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tillbakadraget tandkött</Link>
              <Link href="/behandlingar/tandhygienist" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandhygienist</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function SpottkortelPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Spottkörtlar" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Spottkörtlar</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">De körtlar som producerar saliv och håller munnen fuktig och frisk.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Spottkörtlar</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Spottkörtlar är de körtlar som producerar saliv. Du har både stora och små spottkörtlar i munnen som tillsammans producerar 1-1,5 liter saliv per dag.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">De stora spottkörtlarna</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Parotiskörteln</strong> - Ligger framför örat, producerar vattni g saliv. Största körteln, producerar 25% av saliven</li>
            <li><strong>Submandibularkörteln</strong> - Under käken, producerar både vattning och slemhaltig saliv. Producerar 70% av saliven</li>
            <li><strong>Sublingual körteln</strong> - Under tungan, producerar slemhaltig saliv. Minsta av de stora körtlarna, producerar 5% av saliven</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Små spottkörtlar</h2>
          <p className="text-gray-700 leading-7 mb-6">Förutom de tre stora körtlarna finns hundratals små spottkörtlar i munnslemhinnan. De sitter i läppar, kinder, gom och tunga. Dessa små körtlar producerar saliv kontinuerligt och håller munnen fuktig mellan måltider.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Spottkörtlarnas funktion</h2>
          <p className="text-gray-700 leading-7 mb-6">Producera saliv som fuktar munnen. Starta nedbrytningen av stärkelse med enzym et amylas. Skydda tänderna med mineraler och buffertämnen. Bekämpa bakterier med antibakteriella ämnen. Underlätta tuggning och sväljning. Möjliggöra smak genom att lösa upp molekyler.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">När produceras mest saliv?</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Under måltider - stimulerad av tuggning</li>
              <li>Vid lukt av mat - kroppen förbereder sig</li>
              <li>Vid tanke på mat - psykisk stimulering</li>
              <li>Minst saliv produceras under natten</li>
              <li>Stress kan minska produktionen</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Problem med spottkörtlar</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Spottsten</strong> - Mineraliserade stenar blockerar körteln och orsakar svullnad. <strong>Infektion</strong> - Bakteriell infektion i körteln, vanligast i parotis. <strong>Sjögrens syndrom</strong> - Autoimmun sjukdom som påverkar körtlarna. <strong>Tumörer</strong> - Godartade eller elakartade, kräver utredning. <strong>Muntorrhet</strong> - För lite salivproduktion från olika orsaker.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö kan vi undersöka spottkörtlarnas funktion och upptäcka problem tidigt. Vid svullnad, smärta eller muntorrhet gör vi grundlig bedömning. Vi kan remittera till specialist vid behov.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem med spottkörtlar?</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent för undersökning. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/saliv" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Saliv</Link>
              <Link href="/kunskapbanken/spottsten" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Spottsten</Link>
              <Link href="/kunskapbanken/munhala" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhåla</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function IncsisiverPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Incisiver" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Incisiver - Framtänderna</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">De främre tänderna som hjälper dig att bita av mat och formar ditt leende.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Incisiver</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Incisiver är det medicinska namnet på framtänderna - de åtta tänderna längst fram i munnen som syns när du ler. De har en viktig roll både estetiskt och funktionellt.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Var sitter incisiverna?</h2>
          <p className="text-gray-700 leading-7 mb-6">Du har totalt åtta incisiver - fyra i överkäken och fyra i underkäken. De centrala incisiverna sitter i mitten, två i varje käke. Vid sidan om dessa sitter de laterala incisiverna, också två i varje käke. Tillsammans bildar de den främre delen av ditt leende.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Incisivernas funktion</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Bita av mat med sina skarpa kanter</li>
            <li>Hjälpa till vid uttal av vissa ljud</li>
            <li>Forma ansiktet och leendet</li>
            <li>Stödja läpparna</li>
            <li>Styra tungan vid tal</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Incisivernas uppbyggnad</h2>
          <p className="text-gray-700 leading-7 mb-6">Incisiverna har en platt, bred krona med en skarp bitande kant. De centrala incisiverna i överkäken är vanligtvis de största framtänderna. Rotsystemet är relativt enkelt med en enda rot. Emaljen är tunnare vid tandhalsen och tjockare vid bitanden.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Ta hand om dina incisiver</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta försiktigt fram och tillbaka över framtänderna</li>
              <li>Använd tandtråd mellan alla framtänder dagligen</li>
              <li>Undvik att bita i hårda föremål</li>
              <li>Skydda tänderna vid kontaktsport</li>
              <li>Besök tandläkaren regelbundet för kontroll</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga problem med incisiver</h2>
          <p className="text-gray-700 leading-7 mb-6">Incisiverna är utsatta för trauma och skador eftersom de sitter längst fram. Karies på framtänderna påverkar också utseendet. Missfärgning, sprickor, glipa mellan framtänderna (diastema) och felställning är vanliga problem som kan behandlas.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö specialiserar vi oss på både funktionell och estetisk tandvård för framtänderna. Vi kan hjälpa dig med allt från enkla fyllningar till veneers och tandreglering för ett perfekt leende.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tid för framtandskontroll</h2>
          <p className="text-gray-600 mb-6">Vill du förbättra ditt leende? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/caniner" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Caniner</Link>
              <Link href="/behandlingar/estetisk-tandvard" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Estetisk tandvård</Link>
              <Link href="/kunskapbanken/diastema" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Diastema</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

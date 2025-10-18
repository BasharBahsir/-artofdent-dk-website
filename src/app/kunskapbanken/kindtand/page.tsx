'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function KindtandPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Kindtand" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Kindtand</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">De bakre tänderna som tuggar och maler din mat.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Kindtand</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Kindtänder är de bakre tänderna i munnen som används för att tugga och mala mat. De har breda, platta tuggaytor med flera spetsar (cusps) som gör dem perfekta för att bearbeta mat.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Typer av kindtänder</h2>
          <p className="text-gray-700 leading-7 mb-6">Det finns två typer av kindtänder: <strong>Premolarer</strong> (små kindtänder) som sitter närmast hörntänderna. Du har åtta premolarer - fyra i varje käke. <strong>Molarer</strong> (stora kindtänder) som sitter längst bak. Du har tolv molarer inklusive visdomständerna - sex i varje käke.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Kindtändernas funktion</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Tugga och mala mat till mindre bitar</li>
            <li>Fördela tuggkraften jämnt över käkbenet</li>
            <li>Stödja ansiktets höjd och form</li>
            <li>Hjälpa till att blanda mat med saliv</li>
            <li>Underlätta matsmältningen genom grundlig tuggning</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Kindtändernas uppbyggnad</h2>
          <p className="text-gray-700 leading-7 mb-6">Kindtänderna har breda, platta kronor med flera höjder (cusps) och gropar (fissurer) på tuggaytan. Premolarerna har vanligtvis två cusps, medan molarerna har fyra eller fem. Molarerna i överkäken har ofta tre rötter, medan de i underkäken har två rötter.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Ta hand om dina kindtänder</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta noga över tuggytorna där plack samlas</li>
              <li>Använd tandtråd eller mellanrumsborste mellan kindtänderna</li>
              <li>Överväg fissurförsegling för extra skydd mot karies</li>
              <li>Tugga jämnt på båda sidor</li>
              <li>Besök tandläkaren regelbundet för kontroll</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga problem med kindtänder</h2>
          <p className="text-gray-700 leading-7 mb-6">Karies är vanligast på kindtänderna eftersom gropparna och springorna på tuggytorna lätt samlar bakterier och matrester. Spruckna eller avbrutna kindtänder kan uppstå vid hårt tuggande. Visdomständer kan orsaka problem om de växer snett eller inte har plats.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö har vi stor erfarenhet av att behandla kindtänder. Vi erbjuder allt från fyllningar och rotbehandlingar till kronor och visdomstandsutdragningar. Våra tandläkare använder modern teknik för bästa resultat.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tandundersökning</h2>
          <p className="text-gray-600 mb-6">Har du problem med dina kindtänder? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/premolar" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Premolar</Link>
              <Link href="/kunskapbanken/molar" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Molar</Link>
              <Link href="/kunskapbanken/visdomstander" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Visdomständer</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

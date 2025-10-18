'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function MolarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Molar" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Molar - Stora kindtänder</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">De stora kindtänderna längst bak som gör huvuddelen av tuggjobbet.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Molar</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Molarer är de stora kindtänderna som sitter längst bak i munnen. De är våra största och starkaste tänder med flera rötter och har som huvuduppgift att mala sönder mat.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Var sitter molarerna?</h2>
          <p className="text-gray-700 leading-7 mb-6">Du har normalt 12 molarer totalt (inklusive visdomständer) - 6 i överkäken och 6 i underkäken. De sitter bakom premolarerna (de små kindtänderna). Första molaren kommer vid cirka 6 års ålder, andra molaren vid 12 år, och tredje molaren (visdomstanden) vid 17-25 år om den kommer alls.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Molarernas uppbyggnad</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Krona</strong> - Bred och platt med 4-5 höjder (cusps)</li>
            <li><strong>Tuggyta</strong> - Gropar (fissurer) och höjder för effektiv malning</li>
            <li><strong>Rötter</strong> - Molarer i överkäken har vanligtvis 3 rötter, i underkäken 2 rötter</li>
            <li><strong>Rotkanaler</strong> - Ofta flera kanaler i varje rot</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Molarernas funktioner</h2>
          <p className="text-gray-700 leading-7 mb-6">Mala och krossa mat till mindre bitar. Ta emot och fördela den största tuggkraften. Möjliggöra effektiv matsmältning genom grundlig tuggning. Stödja ansiktets höjd och form. Hjälpa till att behålla käkbenets struktur.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Ta hand om dina molarer</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta extra noga på tuggytorna där gropar samlar bakterier</li>
              <li>Använd tandtråd mellan alla molarer dagligen</li>
              <li>Överväg fissurförsegling, särskilt för barn</li>
              <li>Undvik att tugga is eller andra hårda föremål</li>
              <li>Besök tandläkaren regelbundet för kontroll</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga problem med molarer</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Karies i fissurerna</strong> - Gropar och fåror samlar mat och bakterier. <strong>Spruckna molarer</strong> - Kan uppstå vid hårt tuggande eller tandgnissling. <strong>Känslighet</strong> - Slitage av emalj kan exponera dentin. <strong>Visdomstandsproblem</strong> - Tredje molaren växer ofta snett eller saknar plats.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö har vi stor erfarenhet av att behandla molarer. Vi erbjuder allt från förebyggande fissurförsegling till komplexa rotbehandlingar och kronor. Våra tandläkare använder mikroskop för precision vid rotbehandling av molarer.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Problem med dina molarer?</h2>
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
              <Link href="/kunskapbanken/premolar" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Premolar</Link>
              <Link href="/kunskapbanken/visdomstander" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Visdomständer</Link>
              <Link href="/behandlingar/rotfyllning" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Rotfyllning</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function PremolarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Premolar" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Premolar - Små kindtänder</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">De små kindtänderna mellan hörntänderna och stora kindtänderna.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Premolar</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Premolarer, även kallade små kindtänder eller bicuspider, sitter mellan hörntänderna (caninerna) och de stora kindtänderna (molarerna). De har viktiga funktioner för både tuggning och estetik.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Var sitter premolarerna?</h2>
          <p className="text-gray-700 leading-7 mb-6">Du har totalt åtta premolarer - fyra i överkäken och fyra i underkäken. På varje sida av käken finns det två premolarer. Den första premolaren sitter direkt efter hörntanden, och den andra premolaren sitter före den första stora kindtanden.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Premolarernas uppbyggnad</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Krona</strong> - Har vanligtvis två höjder (cusps), därav namnet bicuspid</li>
            <li><strong>Tuggyta</strong> - Mindre komplex än molarernas, men fortfarande effektiv</li>
            <li><strong>Rötter</strong> - Första premolaren i överkäken har ofta två rötter, andra har en</li>
            <li><strong>Storlek</strong> - Större än framtänderna men mindre än molarerna</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Premolarernas funktioner</h2>
          <p className="text-gray-700 leading-7 mb-6">Tugga och krossa mat tillsammans med molarerna. Hjälpa till att riva mat som caninerna påbörjat. Fördela tuggkraften mellan fram- och kindtänder. Stödja ansiktets form och leende. Viktig del av ett fungerande bett.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Viktigt att veta om premolarer</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Premolarer ersätter mjölkkindtänderna vid cirka 10-12 års ålder</li>
              <li>De är permanenta tänder - ingen andra uppsättning kommer</li>
              <li>Ofta involverade i tandregleringsbehandling</li>
              <li>Kan ibland tas bort för att ge plats vid trångställdhet</li>
              <li>Mindre benägna för karies än molarerna</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">När kommer premolarerna?</h2>
          <p className="text-gray-700 leading-7 mb-6">Premolarerna kommer vanligtvis mellan 10-12 års ålder. Första premolarerna brukar komma vid 10-11 år. Andra premolarerna kommer vid 11-12 år. De ersätter mjölkkindtänderna som lossnar för att ge plats.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga problem med premolarer</h2>
          <p className="text-gray-700 leading-7 mb-6">Karies i gropar på tuggytorna. Felställning som kan kräva tandreglering. Ibland tas premolarer bort strategiskt vid tandställning för att skapa plats. Spruckna premolarer från hårt tuggande. Känslighet om emaljen slits ned.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö tar vi hand om alla dina tänder, inklusive premolarerna. Vi erbjuder förebyggande vård, behandling av karies och skador samt ortodontisk bedömning. Våra tandläkare har bred erfarenhet av alla typer av tandvård.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tandkontroll</h2>
          <p className="text-gray-600 mb-6">Behöver du kontrollera dina tänder? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/molar" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Molar</Link>
              <Link href="/kunskapbanken/caniner" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Caniner</Link>
              <Link href="/behandlingar/tandreglering" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandreglering</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

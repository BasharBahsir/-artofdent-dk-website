'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function MundslemhinnaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Mundslemhinna" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Mundslemhinna</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Den skyddande hinna som täcker insidan av munnen och har viktiga funktioner.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Mundslemhinna</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Mundslemhinnan är den fuktiga, mjuka vävnad som täcker insidan av läppar, kinder, gom, munbotten och tungan. Den har viktiga skyddande och sensoriska funktioner.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mundslemhinnans uppbyggnad</h2>
          <p className="text-gray-700 leading-7 mb-6">Mundslemhinnan består av flera lager. Ytterst finns ett skyddande epitel som förnyas ständigt. Under detta ligger bindväv med blodkärl, nerver och körtlar. Slemhinnan producerar slem som håller munnen fuktig och skyddad.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Olika typer av mundslemhinna</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Masticerande slemhinna</strong> - Täcker gommen och tandköttet, tjock och tålig</li>
            <li><strong>Foderslemhinna</strong> - Täcker kinderna och läpparna, rörlig och flexibel</li>
            <li><strong>Specialiserad slemhinna</strong> - På tungan med smakpapiller</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mundslemhinnans funktioner</h2>
          <p className="text-gray-700 leading-7 mb-6">Skyddar underliggande vävnad mot bakterier och skador. Håller munnen fuktig genom slemproduktion. Känner av temperatur, beröring och smärta. Deltar i smakupplevelsen. Hjälper till vid talbildning. Läker snabbt vid små skador.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Tecken på frisk mundslemhinna</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Jämn rosa färg (kan variera något mellan personer)</li>
              <li>Fuktig och mjuk yta</li>
              <li>Ingen smärta eller obehag</li>
              <li>Inga sår, utväxter eller missfärgningar</li>
              <li>Snabb läkning vid små skador</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga problem med mundslemhinnan</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Afte</strong> - Små smärtsamma sår. <strong>Svamp i munnen</strong> - Vita beläggningar från jästsvamp. <strong>Leukoplaki</strong> - Vita fläckar som inte går att skrapa bort. <strong>Lichenplanus</strong> - Inflammatorisk hudsjukdom. <strong>Stomatit</strong> - Inflammation av slemhinnan. <strong>Torrhet</strong> - Från mediciner eller sjukdom.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">När ska du söka vård?</h2>
          <p className="text-gray-700 leading-7 mb-6">Sår som inte läker inom 2 veckor. Vita eller röda fläckar. Knölar eller utväxter. Långvarig smärta. Svårigheter att svälja. Blödningar utan känd orsak. Förändrad färg eller struktur.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö undersöker vi mundslemhinnan noggrant vid varje kontroll. Vi upptäcker tidiga förändringar och behandlar problem innan de blir allvarliga. Vid behov kan vi remittera till specialist.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka undersökning av munnen</h2>
          <p className="text-gray-600 mb-6">Har du problem med munnslemhinnan? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/afte" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Afte</Link>
              <Link href="/kunskapbanken/svamp-i-munnen" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Svamp i munnen</Link>
              <Link href="/kunskapbanken/munhala" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhåla</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

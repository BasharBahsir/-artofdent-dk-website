'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function PermanentaTanderPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Permanenta tänder" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Permanenta tänder</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">De tänder som är tänkta att hålla hela livet - lär dig hur du tar hand om dem.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Permanenta tänder</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Permanenta tänder, även kallade vuxentänder eller sekundära tänder, är de tänder som ersätter mjölktänderna och är tänkta att hålla hela livet. De börjar komma vid cirka 6 års ålder.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hur många permanenta tänder har man?</h2>
          <p className="text-gray-700 leading-7 mb-6">En vuxen har normalt 32 permanenta tänder, inklusive visdomständerna. Om visdomständerna tas bort eller aldrig kommer fram har man 28 tänder. Tänderna fördelas jämnt mellan överkäken och underkäken - 16 tänder i varje käke.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Typer av permanenta tänder</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>8 incisiver (framtänder)</strong> - Biter av mat</li>
            <li><strong>4 caniner (hörntänder)</strong> - River och skär</li>
            <li><strong>8 premolarer (små kindtänder)</strong> - Tuggar och maler</li>
            <li><strong>8 molarer (stora kindtänder)</strong> - Tuggar och maler</li>
            <li><strong>4 visdomständer (tredje molar)</strong> - Kommer sist, ofta problem</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">När kommer de permanenta tänderna?</h2>
          <p className="text-gray-700 leading-7 mb-6">De permanenta tänderna kommer i en viss ordning. Vid 6-7 år kommer första stora kindtanden och de nedre framtänderna. Vid 7-8 år kommer de övre framtänderna. Vid 9-11 år kommer hörntänderna och små kindtänderna. Vid 11-13 år kommer andra stora kindtanden. Vid 17-25 år kan visdomständerna komma (om de kommer alls).</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Vård av permanenta tänder</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta två gånger dagligen med fluortandkräm</li>
              <li>Använd tandtråd dagligen från tonåren</li>
              <li>Undvik för mycket socker och syra</li>
              <li>Besök tandläkaren regelbundet</li>
              <li>Använd tandskydd vid kontaktsport</li>
              <li>Ta hand om dem - de ska räcka hela livet!</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Skillnader mellan mjölktänder och permanenta tänder</h2>
          <p className="text-gray-700 leading-7 mb-6">Permanenta tänder är större och starkare än mjölktänder. De har tjockare emalj och större rötter. Permanenta tänder är gulare än mjölktänder (vilket är normalt). De permanenta tänderna ska inte bytas ut - de är tänkta att vara permanenta.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Problem med permanenta tänder</h2>
          <p className="text-gray-700 leading-7 mb-6">Karies kan utvecklas snabbt i nyframkomna tänder med tunn emalj. Trauma kan skada permanenta tänder, särskilt framtänder hos barn. Felställningar kan kräva tandreglering. Visdomständer kan växa snett och orsaka problem.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö följer vi utvecklingen av permanenta tänder från barndomen genom hela livet. Vi ger råd om vård, behandlar problem tidigt och hjälper dig behålla dina tänder friska hela livet.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vård av permanenta tänder</h2>
          <p className="text-gray-600 mb-6">Behöver du hjälp med dina tänder? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/hur-manga-tander-har-man" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Hur många tänder har man</Link>
              <Link href="/behandlingar/barnvard" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Barntandvård</Link>
              <Link href="/kunskapbanken/visdomstander" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Visdomständer</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

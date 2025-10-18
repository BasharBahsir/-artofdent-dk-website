'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function GingivaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Gingiva" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Gingiva - Tandköttet</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Den medicinska termen för tandkött och dess viktiga roll för munhälsan.</p>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Gingiva</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Gingiva är det medicinska namnet på tandköttet - den mjuka vävnad som omger tänderna och skyddar det underliggande käkbenet. Gingivan har flera viktiga funktioner för munhälsan.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Gingivans uppbyggnad</h2>
          <p className="text-gray-700 leading-7 mb-6">Gingivan består av flera lager. Det yttersta lagret är ett skyddande epitel som är tätt och motståndskraftigt. Under detta ligger bindväv med blodkärl och nerver. Gingivan fäster vid tänderna genom specialiserade fibrer som kallas gingivala fibrer.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Gingivans delar</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Fria gingivan</strong> - Den del som ligger närmast tanden, bildar en ficka</li>
            <li><strong>Bundna gingivan</strong> - Fast del som är tätt fäst vid käkbenet</li>
            <li><strong>Interdental papill</strong> - Tandköttet mellan tänderna</li>
            <li><strong>Gingivalt sule</strong> - Den grunt som syns mellan fri och bunden gingiva</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Gingivans funktioner</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Skyddar tandrötterna och käkbenet mot bakterier</li>
              <li>Fungerar som en barriär mot infektioner</li>
              <li>Stödjer och stabiliserar tänderna</li>
              <li>Fördelar tuggkraften</li>
              <li>Läker snabbt vid små skador</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Gingivit - inflammation i gingivan</h2>
          <p className="text-gray-700 leading-7 mb-6">Gingivit är inflammation av tandköttet, ofta orsakad av plackbildning. Tecken inkluderar röd, svullen gingiva som blöder lätt. Gingivit är reversibel med god munhygien men kan utvecklas till parodontit om den inte behandlas.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö har vi specialiserad kunskap om gingivans hälsa. Vi undersöker noggrant och behandlar tidiga tecken på gingivit. Våra tandhygienister ger professionell rengöring och råd om hemvård.</p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka gingival undersökning</h2>
          <p className="text-gray-600 mb-6">Har du problem med tandköttet? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/frakt-tandkott" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Friskt tandkött</Link>
              <Link href="/kunskapbanken/parodontit-malmo-tandkottssjukdom" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Parodontit</Link>
              <Link href="/kunskapbanken/blödande-tandkött" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Blödande tandkött</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

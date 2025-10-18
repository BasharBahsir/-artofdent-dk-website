'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function FrisktTandkottPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Friskt tandkött" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Friskt tandkött</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Lär dig känna igen friskt tandkött och hur du håller det friskt.</p>
        </div>
      </div>

      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Friskt tandkött</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Friskt tandkött är grunden för friska tänder. Tandköttet omsluter och skyddar tandrötterna och käkbenet. När tandköttet mår bra, mår hela munnen bra.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Kännetecken på friskt tandkött</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Ljusrosa färg (kan variera något beroende på hudton)</li>
            <li>Fast och spänt, inte svullet eller löstsittande</li>
            <li>Blöder inte vid borstning eller tandtrådsanvändning</li>
            <li>Ligger tätt an mot tänderna</li>
            <li>Har en prickig yta, som apelsinskal</li>
            <li>Luktar neutralt, ingen dålig andedräkt</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandköttets viktiga funktioner</h2>
          <p className="text-gray-700 leading-7 mb-6">Tandköttet skyddar tandrötterna och käkbenet mot bakterier. Det håller tänderna på plats och fungerar som en tätning mellan tand och käkben. Friskt tandkött hjälper också till att distribuera tuggkraften jämnt.</p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Håll tandköttet friskt</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta tänderna två gånger dagligen</li>
              <li>Använd tandtråd eller mellanrumsborste dagligen</li>
              <li>Massera tandköttet försiktigt vid borstning</li>
              <li>Ät näringsrik mat och begränsa socker</li>
              <li>Sluta röka - rökning skadar tandköttet allvarligt</li>
              <li>Besök tandhygienist regelbundet</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tecken på tandköttsproblem</h2>
          <p className="text-gray-700 leading-7 mb-6">Röd, svullen eller blödande tandkött kan vara tecken på gingivit (tandköttsinflammation). Dålig andedräkt, känsliga tänder eller tandkött som drar sig tillbaka kan också indikera problem. Sök tandvård tidigt - tandköttsproblem är lättare att behandla i tidigt stadium.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö har vi erfarna tandhygienister och tandläkare som specialiserat sig på tandkötts hälsa. Vi erbjuder professionell rengöring, tandköttskontroller och behandling av tandköttssjukdomar.</p>
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tandköttskontroll</h2>
          <p className="text-gray-600 mb-6">Vill du kontrollera ditt tandkött? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/gingiva" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Gingiva</Link>
              <Link href="/kunskapbanken/blödande-tandkött" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Blödande tandkött</Link>
              <Link href="/behandlingar/tandhygienist" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandhygienist</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

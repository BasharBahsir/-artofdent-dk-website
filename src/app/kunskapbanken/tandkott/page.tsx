'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandkottPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Tandkött" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Tandkött</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Den viktiga vävnad som skyddar tandrötterna och håller tänderna på plats.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Tandkött</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Tandköttet, medicinskt kallat gingiva, är den mjuka vävnad som omsluter tänderna och skyddar det underliggande käkbenet. Friskt tandkött är avgörande för att behålla friska tänder.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandköttets uppbyggnad</h2>
          <p className="text-gray-700 leading-7 mb-6">Tandköttet består av flera lager: Ett yttre skyddande epitel som är tätt och motståndskraftigt. Under detta ligger bindväv med blodkärl som ger näring. Tandköttet fäster vid tänderna genom specialiserade fibrer. Dessa fibrer bildar en tätning som skyddar käkbenet från bakterier.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandköttets delar</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Fria tandköttet</strong> - Ligger närmast tanden, kan dras lite från tanden</li>
            <li><strong>Bundna tandköttet</strong> - Fast del som är tätt fäst vid käkbenet</li>
            <li><strong>Interdentala papillen</strong> - Tandköttet mellan tänderna</li>
            <li><strong>Marginala gingivan</strong> - Tandköttskanten runt varje tand</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Friskt tandkötts kännetecken</h2>
          <p className="text-gray-700 leading-7 mb-6">Ljusrosa färg (kan variera något). Fast och spänt, inte svullet. Blöder inte vid borstning. Ligger tätt an mot tänderna. Har en prickig yta som apelsinskal. Luktar neutralt utan dålig andedräkt.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Håll tandköttet friskt</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta tänderna varsamt två gånger dagligen</li>
              <li>Använd tandtråd eller mellanrumsborste dagligen</li>
              <li>Massera tandköttet försiktigt vid borstning</li>
              <li>Undvik tobak som skadar tandköttet allvarligt</li>
              <li>Ät näringsrik mat med C-vitamin</li>
              <li>Besök tandhygienist regelbundet</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga tandköttsproblem</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Gingivit</strong> - Tandköttsinflammation med rodnad och blödning. Reversibel med god munhygien. <strong>Parodontit</strong> - Allvarligare inflammation som bryter ned käkben. Kräver professionell behandling. <strong>Tandköttsrecession</strong> - Tandköttet drar sig tillbaka och blottar tandroten. <strong>Hyperplasi</strong> - Tandköttet svullnar och växer, ofta från mediciner.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö är vi specialister på tandköttshälsa. Våra tandhygienister ger professionell rengöring och råd. Vi behandlar tandköttsproblem i tidigt stadium och kan remittera till parodontolog vid behov.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tandköttskontroll</h2>
          <p className="text-gray-600 mb-6">Problem med tandköttet? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
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
              <Link href="/kunskapbanken/frakt-tandkott" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Friskt tandkött</Link>
              <Link href="/kunskapbanken/parodontit-malmo-tandkottssjukdom" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Parodontit</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

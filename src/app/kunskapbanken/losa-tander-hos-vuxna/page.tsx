'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function LosaTanderPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Lösa tänder hos vuxna" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Lösa tänder hos vuxna</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Orsaker, symtom och behandling av lösa tänder - sök vård tidigt för bästa resultat.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Lösa tänder hos vuxna</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Lösa tänder hos vuxna är alltid ett varningstecken som kräver omedelbar tandvård. Till skillnad från barns mjölktänder som naturligt lossnar, bör permanenta tänder sitta fast och stabilt hela livet.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga orsaker till lösa tänder</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Parodontit</strong> - Tandköttsinflammation som bryter ned käkbenet</li>
            <li><strong>Trauma</strong> - Slag eller olyckor som skadar tandens fäste</li>
            <li><strong>Bruxism</strong> - Tandgnissling som belastar tänderna</li>
            <li><strong>Osteoporos</strong> - Benförlust som påverkar käkbenet</li>
            <li><strong>Graviditet</strong> - Hormonella förändringar kan tillfälligt lossa tänder</li>
            <li><strong>Mediciner</strong> - Vissa läkemedel kan påverka tandköttet</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Symtom att vara uppmärksam på</h2>
          <p className="text-gray-700 leading-7 mb-6">Tanden känns rörlig när du trycker på den med tungan eller fingret. Smärta eller obehag vid tuggning. Blödande tandkött runt den lösa tanden. Svullnad eller rodnad i tandköttet. Tandköttet har dragit sig tillbaka så att tandroten syns. Dålig andedräkt eller dålig smak i munnen.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Viktigt att veta</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Lösa tänder förbättras sällan av sig själva</li>
              <li>Ju tidigare du söker vård, desto bättre chans att rädda tanden</li>
              <li>Obehandlade lösa tänder kan leda till tandförlust</li>
              <li>Infektion kan sprida sig till andra tänder och käkben</li>
              <li>Modern tandvård kan ofta rädda även lösa tänder</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Behandlingsalternativ</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Djuprengöring</strong> vid parodontit för att ta bort bakterier. <strong>Tandskena</strong> vid bruxism för att skydda tänderna. <strong>Skening</strong> - fästa den lösa tanden vid intilliggande tänder. <strong>Kirurgisk behandling</strong> för att återuppbygga förlorat käkben. <strong>Extraktion och implantat</strong> om tanden inte kan räddas.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö tar vi lösa tänder på allvar. Vi undersöker noggrant för att hitta orsaken och erbjuder snabb behandling. Vårt mål är alltid att rädda tanden om det är möjligt. Vi använder modern teknik och beprövade metoder.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Har du en lös tand?</h2>
          <p className="text-gray-600 mb-6">Sök vård omedelbart! Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">RING OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/parodontit-malmo-tandkottssjukdom" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Parodontit</Link>
              <Link href="/kunskapbanken/bruxism" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Bruxism</Link>
              <Link href="/kunskapbanken/ersatta-forlorade-tander" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Ersätta tänder</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

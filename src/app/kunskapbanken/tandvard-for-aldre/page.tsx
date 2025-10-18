'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandvardForAldrePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (1).jpg" alt="Tandvård för äldre" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Tandvård för äldre</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Särskilda behov och lösningar för god munhälsa i hög ålder.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Tandvård för äldre</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Äldre har ofta särskilda tandvårdsbehov på grund av åldrande, mediciner och sjukdomar. Med rätt vård och uppmärksamhet kan du behålla friska tänder och god munhälsa även i hög ålder.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vanliga tandproblem hos äldre</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Muntorrhet</strong> - Från mediciner, vanligaste problemet</li>
            <li><strong>Tandköttsrecession</strong> - Tandköttet drar sig tillbaka</li>
            <li><strong>Rotkaries</strong> - När tandroten blottas blir den känslig för karies</li>
            <li><strong>Tandlossning</strong> - Från långvarig tandköttsinflammation</li>
            <li><strong>Nedsatt motorik</strong> - Svårare att borsta effektivt</li>
            <li><strong>Proteser</strong> - Behöver anpassning när käkben förändras</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Muntorrhet - ett stort problem</h2>
          <p className="text-gray-700 leading-7 mb-6">Många äldre lider av muntorrhet (xerostomi) från mediciner. Detta ökar risken för karies, svampinfektioner och obehag. Symtom inkluderar torr mun, svårigheter att svälja, dålig andedräkt och sår i munnen. Behandling inkluderar konstgjord saliv, salivstimulering, anpassning av mediciner när möjligt och extra god munhygien.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Tips för god munhälsa i hög ålder</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta tänderna eller protesen två gånger dagligen</li>
              <li>Använd mjuk tandborste och fluortandkräm</li>
              <li>Drick mycket vatten för att motverka muntorrhet</li>
              <li>Använd elektrisk tandborste vid nedsatt motorik</li>
              <li>Sök tandvård regelbundet, även med proteser</li>
              <li>Informera tandläkaren om alla mediciner du tar</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vård av tandproteser</h2>
          <p className="text-gray-700 leading-7 mb-6">Rengör protesen dagligen med mjuk borste och protesrengöringsmedel. Förvara i vatten nattetid. Känn efter förändringar i passform - käkbenet förändras. Besök tandläkaren regelbundet för kontroll och justering. Byte av proteser kan behövas var 5-7:e år.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandvårdsstöd för äldre</h2>
          <p className="text-gray-700 leading-7 mb-6">Personer över 65 år får förhöjt tandvårdsbidrag. Extra stöd finns vid vissa sjukdomar och funktionsnedsättningar. Hemtandvård kan ordnas för de som inte kan ta sig till kliniken. Kommunal tandvård erbjuder särskilt anpassade tjänster.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö har vi stor erfarenhet av att behandla äldre patienter. Vi är extra uppmärksamma på muntorrhet, medicinbiverkningar och anpassar behandlingen efter dina behov. Vi tar oss tid och skapar en trygg miljö.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tid för äldretandvård</h2>
          <p className="text-gray-600 mb-6">Behöver du anpassad tandvård? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/tandproteser-malmo-kompletta-losningar" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandproteser</Link>
              <Link href="/kunskapbanken/saliv" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Saliv</Link>
              <Link href="/behandlingar/tiotandvard" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tiotandvård</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

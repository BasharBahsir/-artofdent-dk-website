'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function MunhalsaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Munhälsa" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Munhälsa</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">God munhälsa är grunden för friska tänder och påverkar hela kroppens hälsa.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Munhälsa</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Munhälsa handlar om mycket mer än bara friska tänder. Det påverkar din allmänna hälsa, självkänsla och livskvalitet. God munhälsa är en viktig del av den totala hälsan.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad är god munhälsa?</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Friska tänder utan karies eller skador</li>
            <li>Rosa, fast tandkött som inte blöder</li>
            <li>Neutral andedräkt</li>
            <li>Smärtfri tuggning och bitning</li>
            <li>Inga infektioner eller inflammationer</li>
            <li>God salivproduktion</li>
            <li>Fungerande tuggfunktion</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Munhälsans koppling till allmän hälsa</h2>
          <p className="text-gray-700 leading-7 mb-6">Forskning visar starka samband mellan munhälsa och flera andra sjukdomar. Parodontit (tandköttsinflammation) är kopplad till hjärt-kärlsjukdomar, diabetes, lunginflammation och stroke. Bakterier från munnen kan sprida sig till andra delar av kroppen. God munhälsa kan därför minska risken för flera allvarliga sjukdomar.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Grundläggande munhygien</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Borsta tänderna 2 gånger dagligen i 2 minuter</li>
              <li>Använd tandtråd eller mellanrumsborste dagligen</li>
              <li>Använd fluortandkräm</li>
              <li>Skölj med munsköljning vid behov</li>
              <li>Byt tandborste var 3:e månad</li>
              <li>Besök tandläkaren minst 2 gånger per år</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Faktorer som påverkar munhälsan</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Kost</strong> - Socker och syra skadar tänderna, medan näring stärker dem. <strong>Rökning</strong> - Ökar risken för tandköttsjukdom och cancer kraftigt. <strong>Alkohol</strong> - Torkar ut munnen och ökar kariesrisk. <strong>Stress</strong> - Kan leda till tandgnissling och försämrad munhygien. <strong>Mediciner</strong> - Många ger muntorrhet som biverkning.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tecken på dålig munhälsa</h2>
          <p className="text-gray-700 leading-7 mb-6">Blödande tandkött vid borstning. Dålig andedräkt som inte går över. Tandvärk eller känslighet. Lös eller rörlig tand. Sår i munnen som inte läker. Svullnad i ansikte eller tandkött. Svårigheter att tugga eller svälja.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö hjälper vi dig att uppnå och bibehålla god munhälsa. Vi erbjuder förebyggande vård, grundliga kontroller och personliga råd. Våra tandläkare och tandhygienister ser till helheten - inte bara tänderna.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka munhälsokontroll</h2>
          <p className="text-gray-600 mb-6">Vill du förbättra din munhälsa? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/tandhalsa" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandhälsa</Link>
              <Link href="/behandlingar/tandhygienist" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandhygienist</Link>
              <Link href="/kunskapbanken/munhygien-malmo-expertrad-hemma" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhygien</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

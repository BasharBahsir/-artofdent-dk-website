'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandhalsaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Tandhälsa" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Tandhälsa</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">God tandhälsa är grunden för friska tänder och ett vackert leende hela livet.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Tandhälsa</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Tandhälsa handlar om att hålla tänderna och tandköttet friska och funktionella. God tandhälsa påverkar inte bara munnen utan också din allmänna hälsa, självkänsla och livskvalitet.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad är god tandhälsa?</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Tänder fria från karies och infektioner</li>
            <li>Friskt, rosa tandkött som inte blöder</li>
            <li>Alla tänder kvar och funktionella</li>
            <li>God tuggförmåga</li>
            <li>Ingen tandvärk eller obehag</li>
            <li>Neutral andedräkt</li>
            <li>Ett leende du är nöjd med</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Grundpelarna för god tandhälsa</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Daglig munhygien</strong> - Borsta två gånger dagligen i två minuter med fluortandkräm. Använd tandtråd eller mellanrumsborste dagligen. <strong>Rätt kost</strong> - Begränsa socker och sura livsmedel. Ät regelbundna måltider istället för ständigt mellanmål. <strong>Regelbundna tandläkarbesök</strong> - Kontroll minst två gånger per år. Professionell tandrengöring hos tandhygienist.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Faktorer som påverkar tandhälsan</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li><strong>Kost</strong> - Socker och syra skadar, näringsrik mat stärker</li>
              <li><strong>Rökning</strong> - Allvarligt skadligt för tänder och tandkött</li>
              <li><strong>Alkohol</strong> - Torkar ut munnen och ökar kariesrisk</li>
              <li><strong>Stress</strong> - Kan leda till tandgnissling och dålig munhygien</li>
              <li><strong>Mediciner</strong> - Många ger muntorrhet som biverkning</li>
              <li><strong>Sjukdomar</strong> - Diabetes, hjärtsjukdom påverkar munnen</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandhälsans koppling till allmän hälsa</h2>
          <p className="text-gray-700 leading-7 mb-6">Forskning visar tydliga samband mellan munhälsa och allmän hälsa. Tandköttsinflammation är kopplad till hjärt-kärlsjukdom, stroke och diabetes. Dålig tandhälsa kan förvärra befintliga sjukdomar. Bakterier från munnen kan spridas till andra organ. God tandhälsa minskar risken för flera allvarliga sjukdomar.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tandhälsa i olika åldrar</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Barn</strong> - Fokus på att förebygga karies och skapa goda vanor. <strong>Tonåringar</strong> - Extra viktigt under tandställning och hormonella förändringar. <strong>Vuxna</strong> - Förebygga tandköttsproblem och bevara tänderna. <strong>Äldre</strong> - Hantera muntorrhet, proteser och åldrande tänder.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö hjälper vi dig att uppnå och bibehålla god tandhälsa genom hela livet. Vi erbjuder förebyggande vård, behandling när det behövs och personliga råd för dina behov.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka tandhälsokontroll</h2>
          <p className="text-gray-600 mb-6">Vill du förbättra din tandhälsa? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/munhalsa" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhälsa</Link>
              <Link href="/kunskapbanken/munhygien-malmo-expertrad-hemma" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhygien</Link>
              <Link href="/behandlingar/tandundersokning" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tandundersökning</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

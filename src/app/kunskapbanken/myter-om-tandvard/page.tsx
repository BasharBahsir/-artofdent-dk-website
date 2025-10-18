'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function MyterOmTandvardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Myter om tandvård" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Myter om tandvård</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Sanningen bakom vanliga missuppfattningar om tänder och tandvård.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Myter om tandvård</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Det finns många myter och missuppfattningar om tandvård. Här reder vi ut sanningen bakom de vanligaste myterna för att hjälpa dig ta bättre hand om dina tänder.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Myt 1: Socker är den enda orsaken till karies</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Sanningen:</strong> Socker är en viktig faktor, men inte den enda. Även syra från frukt, läsk och vin kan skada emaljen. Hur ofta du äter och dricker mellan måltider spelar större roll än mängden socker. Bakterier i munnen omvandlar även stärkelse från bröd och pasta till syra.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Myt 2: Hårdare borstning ger renare tänder</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Sanningen:</strong> För hård borstning skadar tandemalj och tandkött. Använd mjuka borst och borsta försiktigt i två minuter. Låt tandkrämen göra jobbet - det är fluoret och borstningens rörelse som rengör, inte kraften.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Myt 3: Mjölktänder behöver inte brytas så noga</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Sanningen:</strong> Mjölktänder är viktiga platshållare för de permanenta tänderna. Karies i mjölktänder kan sprida sig till vävnaden runt och skada de permanenta tänderna som håller på att utvecklas. Dessutom behövs mjölktänderna för tuggning och talbildning.</p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Vanliga myter och sanningar</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li><strong>Myt:</strong> Blödande tandkött ska man inte borsta | <strong>Sanning:</strong> Borsta försiktigt, blödning beror ofta på inflammation</li>
              <li><strong>Myt:</strong> Tandblekning skadar emaljen | <strong>Sanning:</strong> Professionell blekning är säker när den görs rätt</li>
              <li><strong>Myt:</strong> Man behöver inte tandläkare om tänderna inte gör ont | <strong>Sanning:</strong> Många problem upptäcks bara vid kontroll</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Myt 4: Visdomständer måste alltid tas bort</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Sanningen:</strong> Bara visdomständer som orsakar problem behöver tas bort. Om de växer rakt, har plats och håller sig rena kan de få sitta kvar. Tandläkaren bedömer varje fall individuellt.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Myt 5: Äpplen rengör tänderna lika bra som borstning</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Sanningen:</strong> Att äta äpplen stimulerar salivproduktionen vilket är bra, men ersätter inte tandborstning. Äpplen innehåller dessutom syra och socker som kan skada tänderna om de äts för ofta.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Myt 6: Tandvård är bara kosmetiskt</h2>
          <p className="text-gray-700 leading-7 mb-6"><strong>Sanningen:</strong> Tandvård är en viktig del av allmän hälsa. Tandköttsinflammation är kopplad till hjärtsjukdom, diabetes och stroke. Infektioner i tänderna kan sprida sig till andra delar av kroppen.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö ger vi dig evidensbaserad information och behandling. Vi hjälper dig att skilja fakta från myter och ger råd baserat på vetenskap och beprövad erfarenhet.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Få rätt information om tandvård</h2>
          <p className="text-gray-600 mb-6">Undrar du över något? Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/vanliga-fragor-om-tander" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Vanliga frågor</Link>
              <Link href="/kunskapbanken/munhygien-malmo-expertrad-hemma" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhygien</Link>
              <Link href="/kunskapbanken/karies" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Karies</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

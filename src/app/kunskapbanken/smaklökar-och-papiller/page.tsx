'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function SmaklokarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Smaklokar och papiller" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Smaklokar och papiller</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Så fungerar smaksinnet och hur tungan uppfattar olika smaker.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Smaklokar och papiller</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Smaklokar och papiller på tungan gör det möjligt för oss att uppleva olika smaker. Det är ett komplext system som hjälper oss njuta av mat och skyddar oss från skadliga ämnen.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad är papiller?</h2>
          <p className="text-gray-700 leading-7 mb-6">Papiller är små upphöjningar på tungans yta som ger den dess grova struktur. Det finns fyra typer av papiller: <strong>Filiformpapiller</strong> - mest talrika, ger tungan dess sammetslika yta. <strong>Fungiformpapiller</strong> - svampformade, innehåller smaklökar. <strong>Foliatpapiller</strong> - på tungans sidor. <strong>Vallpapiller</strong> - stora papiller längst bak på tungan.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad är smaklökar?</h2>
          <p className="text-gray-700 leading-7 mb-6">Smaklökar är små sensoriska organ som innehåller smakceller. En vuxen har cirka 5000-10000 smaklökar, främst på tungan men även i gommen och svalget. Varje smaklök innehåller 50-100 smakceller som kan känna av olika smaker.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">De fem grundsmakerna</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li><strong>Sött</strong> - Socker och kolhydrater, ger energi</li>
            <li><strong>Salt</strong> - Mineraler som kroppen behöver</li>
            <li><strong>Surt</strong> - Syra, kan varna för förstörd mat</li>
            <li><strong>Beskt</strong> - Kan varna för giftiga ämnen</li>
            <li><strong>Umami</strong> - Proteiner och glutamat, köttig smak</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Faktorer som påverkar smaksinnet</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Ålder - smaksinnet försämras något med åren</li>
              <li>Rökning - skadar smaklökarna</li>
              <li>Mediciner - kan påverka smakupplevelsen</li>
              <li>Sjukdomar - vissa sjukdomar ändrar smaksinnet</li>
              <li>Munhälsa - inflammationer kan påverka smaken</li>
              <li>Temperatur - varma rätter upplevs mer smakrika</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hur fungerar smaksinnet?</h2>
          <p className="text-gray-700 leading-7 mb-6">När du äter löser saliven upp smakmolekyler från maten. Molekylerna når smakcellerna i smaklökarna. Smakcellerna skickar signaler till hjärnan via nerver. Hjärnan tolkar signalerna som olika smaker. Luktsinnet samarbetar med smaksinnet för helhetsupplevelsen.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Problem med smaksinnet</h2>
          <p className="text-gray-700 leading-7 mb-6">Försämrat smaksinne (hypogeusi) kan bero på ålder, mediciner eller sjukdom. Förlust av smaksinne (ageusi) är ovanligt men kan uppstå vid nervskador. Förändrat smaksinne (dysgeusi) ger konstiga smaker, ofta från mediciner. Muninfektioner kan tillfälligt påverka smaken.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö undersöker vi hela munhålan inklusive tungan vid varje kontroll. Vi upptäcker förändringar på tungan och kan hjälpa vid problem med smaksinnet kopplat till munhälsa.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka munundersökning</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent för en grundlig kontroll. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/tunga" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tunga</Link>
              <Link href="/kunskapbanken/saliv" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Saliv</Link>
              <Link href="/kunskapbanken/munhala" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhåla</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

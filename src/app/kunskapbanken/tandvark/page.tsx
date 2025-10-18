'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TandvarkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Miljöfoton på kliniken (3).jpg"
            alt="Tandvård hos Art of Dent"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tandvärk
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">
            Akut tandvärk? Vi på Art of Dent i Malmö hjälper dig snabbt med professionell tandvård och smärtlindring.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <Link href="/kunskapbanken#sjukdomar" className="hover:text-gray-700">Sjukdomar</Link>
            <span>/</span>
            <span className="text-gray-900">Tandvärk</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">
            Tandvärk är ett av de vanligaste skälen till att söka akut tandvård. Hos oss på Art of Dent i Malmö tar vi emot patienter med tandvärk snabbt och erbjuder effektiv smärtlindring och behandling.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Vad orsakar tandvärk?</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Tandvärk uppstår oftast på grund av karies (hål i tänderna), men kan också bero på andra faktorer som tandköttsinflammation, 
            sprickor i tanden, eller problem med tidigare tandbehandlingar. Smärtan kan vara konstant eller komma i vågor, 
            och kan förvärras av kyla, värme eller söta smaker.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Symptom på tandvärk</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Konstant eller pulserande smärta i tanden</li>
            <li>Ökad smärta vid intag av kall eller varm mat/dryck</li>
            <li>Smärta vid tuggning eller tryck mot tanden</li>
            <li>Svullnad runt den drabbade tanden</li>
            <li>Feber eller huvudvärk i svåra fall</li>
            <li>Dålig smak i munnen från infekterad tand</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Behandling av tandvärk hos tandläkare i Malmö</h2>
          <p className="text-gray-700 leading-7 mb-6">
            På vår tandläkarklinik i Malmö utreder vi alltid orsaken till din tandvärk för att ge rätt behandling. Vid karies utför vi lagning eller krona. 
            Om tandnerven är skadad kan rotfyllning vara nödvändig. Vi arbetar alltid med smärtfri behandling och modern utrustning för bästa resultat.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-lg font-medium text-red-800">Sök akut tandvård om du har:</h3>
                <ul className="mt-2 text-red-700 list-disc pl-5 space-y-1">
                  <li>Svår tandvärk som inte lindras av smärtstillande</li>
                  <li>Svullnad i ansiktet eller käken</li>
                  <li>Feber i kombination med tandvärk</li>
                  <li>Svårighet att svälja eller andas</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Förebyggande åtgärder</h2>
          <p className="text-gray-700 leading-7 mb-6">
            Den bästa behandlingen av tandvärk är förebyggande. Borsta tänderna två gånger dagligen med fluortandkräm, 
            använd tandtråd eller mellanrumsborstar, och besök tandläkaren regelbundet för kontroller. 
            Undvik söta mellanmål och drycker, och använd munskydd vid sport för att skydda tänderna från skador.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tandläkare Malmö - Boka tid vid tandvärk</h2>
            <p className="text-gray-600">
              Har du tandvärk? Kontakta Art of Dent i Malmö för akut tandvård. Ring oss på <strong>040-121 108</strong> eller boka tid online. Vi tar emot dig snabbt och hjälper dig med professionell smärtlindring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Förnamn*
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Ditt förnamn"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-2">
                Efternamn*
              </label>
              <input
                type="text"
                id="lastname"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Ditt efternamn"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-post*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="din@email.se"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefonnummer*
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="070-123 45 67"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Meddelande
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Beskriv dina besvär..."
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button className="bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                SKICKA
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Information om artikeln
            </h3>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Mer om tandvärk</h4>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/kunskapbanken/munhygien" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                  Munhygien
                </Link>
                <Link href="/kunskapbanken/tandkottsinflammation" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                  Tandköttsinflammation
                </Link>
                <Link href="/kunskapbanken/tandsten" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                  Tandsten
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

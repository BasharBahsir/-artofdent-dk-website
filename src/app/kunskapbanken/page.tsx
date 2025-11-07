'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allBlogPosts } from '@/data/blog-posts'
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function KunskapbankenPage() {
  const [visiblePosts, setVisiblePosts] = useState(6)
  const featuredPosts = allBlogPosts.filter(post => post.featured)
  const recentPosts = allBlogPosts.slice(0, visiblePosts)
  const categories = [...new Set(allBlogPosts.map(post => post.category))]

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 6, allBlogPosts.length))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32 lg:py-40">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Miljöfoton på kliniken (3).jpg"
            alt="Art of Dent klinik"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Vidensbank
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-xl">
              Her finder du al information du har brug for om tænder, tandpleje og mundsygdomme.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-16 sm:mt-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-x-6">
              <Link
                href="/boka-tid"
                className="rounded-full bg-accent-400 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 transition-all"
              >
                BOOK ONLINE
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                +46 40-12 11 08
              </Link>
            </div>
          </div>
          
          {/* Rating Badge */}
          <div className="absolute bottom-8 right-8 hidden lg:block">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg className="h-5 w-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <defs>
                      <linearGradient id="halfStarHero">
                        <stop offset="50%" stopColor="currentColor"/>
                        <stop offset="50%" stopColor="#d1d5db"/>
                      </linearGradient>
                    </defs>
                    <path fill="url(#halfStarHero)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-start">
                <Image
                  src="/images/muntra.png"
                  alt="Muntra"
                  width={80}
                  height={20}
                  className="h-5"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Emergency Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-accent-400 py-3">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-white text-sm">
              Har du brug for akut tandpleje? Ring Artofdent på <strong>+46 40-12 11 08</strong> eller ABC Tandklinikgruppen på <strong>+46 40-18 44 00</strong> for at finde en ledig tid eller book tid online
            </p>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Her finder du alt du behøver at vide om mundpleje, tænder og tandkød
          </h2>
          
          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              Vi hos Art of Dent vil hjælpe dig med at opretholde den bedst mulige mundhealth. Her finder du al vores 
              samlede information om mundpleje, tandsundhed, tænder, tandkød, tandpleje og sygdomme i 
              mundhulen.
            </p>
            
            <p>
              For at opretholde god mundsundhed kræves en kombination af omhyggelige rutiner hjemme og 
              regelmæssige besøg hos tandlægen. På den måde får tandlægen mulighed for at opdage eventuelle 
              problemer, før de bliver besværlige og kræver omfattende behandling. Hvornår var du sidst hos 
              tandlægen? Udskyd ikke besøget - book tid allerede i dag.
            </p>
          </div>
          
          <div className="mt-10">
            <Link
              href="/boka-tid"
              className="inline-flex items-center rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 transition-all"
            >
              BOOK TID ONLINE
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Knowledge Base Categories */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Fakta om tänder, tandkött och slemhinnor */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fakta om tænder, tandkød og slimhinder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <Link href="/kunskapbanken/caniner" className="block text-accent-500 hover:text-accent-600 transition-colors">Caniner</Link>
              <Link href="/kunskapbanken/emalj" className="block text-accent-500 hover:text-accent-600 transition-colors">Emalj</Link>
              <Link href="/kunskapbanken/ersatta-forlorade-tander" className="block text-accent-500 hover:text-accent-600 transition-colors">Ersätta förlorade tänder</Link>
              <Link href="/kunskapbanken/frakt-tandkott" className="block text-accent-500 hover:text-accent-600 transition-colors">Friskt tandkött</Link>
              <Link href="/kunskapbanken/gingiva" className="block text-accent-500 hover:text-accent-600 transition-colors">Gingiva</Link>
              <Link href="/kunskapbanken/gommen" className="block text-accent-500 hover:text-accent-600 transition-colors">Gommen</Link>
              <Link href="/kunskapbanken/hur-manga-tander-har-man" className="block text-accent-500 hover:text-accent-600 transition-colors">Hur många tänder har man?</Link>
              <Link href="/kunskapbanken/horntand" className="block text-accent-500 hover:text-accent-600 transition-colors">Hörntand</Link>
              <Link href="/kunskapbanken/incisiver" className="block text-accent-500 hover:text-accent-600 transition-colors">Incisiver</Link>
              <Link href="/kunskapbanken/kindtand" className="block text-accent-500 hover:text-accent-600 transition-colors">Kindtand</Link>
              <Link href="/kunskapbanken/kakben" className="block text-accent-500 hover:text-accent-600 transition-colors">Käkben</Link>
              <Link href="/kunskapbanken/kake" className="block text-accent-500 hover:text-accent-600 transition-colors">Käke</Link>
              <Link href="/kunskapbanken/losa-tander-hos-vuxna" className="block text-accent-500 hover:text-accent-600 transition-colors">Lösa tänder hos vuxna</Link>
              <Link href="/kunskapbanken/molar" className="block text-accent-500 hover:text-accent-600 transition-colors">Molar</Link>
              <Link href="/kunskapbanken/munhala" className="block text-accent-500 hover:text-accent-600 transition-colors">Munhåla</Link>
              <Link href="/kunskapbanken/munhalsa" className="block text-accent-500 hover:text-accent-600 transition-colors">Munhälsa</Link>
            </div>
            <div className="space-y-3">
              <Link href="/kunskapbanken/mundslemhinna" className="block text-accent-500 hover:text-accent-600 transition-colors">Mundslemhinna</Link>
              <Link href="/kunskapbanken/myter-om-tandvard" className="block text-accent-500 hover:text-accent-600 transition-colors">Myter om tandvård</Link>
              <Link href="/kunskapbanken/permanenta-tander" className="block text-accent-500 hover:text-accent-600 transition-colors">Permanenta tänder</Link>
              <Link href="/kunskapbanken/premolar" className="block text-accent-500 hover:text-accent-600 transition-colors">Premolar</Link>
              <Link href="/kunskapbanken/saliv" className="block text-accent-500 hover:text-accent-600 transition-colors">Saliv</Link>
              <Link href="/kunskapbanken/smaklökar-och-papiller" className="block text-accent-500 hover:text-accent-600 transition-colors">Smaklokar och papiller</Link>
              <Link href="/kunskapbanken/sportkörtel" className="block text-accent-500 hover:text-accent-600 transition-colors">Spottkörel</Link>
              <Link href="/kunskapbanken/sa-paverkas-tanderna-av-det-du-ater" className="block text-accent-500 hover:text-accent-600 transition-colors">Så påverkas tänderna av det du äter</Link>
              <Link href="/kunskapbanken/tand" className="block text-accent-500 hover:text-accent-600 transition-colors">Tand</Link>
              <Link href="/kunskapbanken/tandkott" className="block text-accent-500 hover:text-accent-600 transition-colors">Tandkött</Link>
              <Link href="/kunskapbanken/tandens-uppbyggnad" className="block text-accent-500 hover:text-accent-600 transition-colors">Tandens uppbyggnad</Link>
              <Link href="/kunskapbanken/tandhalsa" className="block text-accent-500 hover:text-accent-600 transition-colors">Tandhälsa</Link>
            </div>
            <div className="space-y-3">
              <Link href="/kunskapbanken/tandvard-for-aldre" className="block text-accent-500 hover:text-accent-600 transition-colors">Tandvård för äldre</Link>
              <Link href="/kunskapbanken/tunga" className="block text-accent-500 hover:text-accent-600 transition-colors">Tunga</Link>
              <Link href="/kunskapbanken/vanliga-fragor-om-tander" className="block text-accent-500 hover:text-accent-600 transition-colors">Ofte stillede spørgsmål om tænder</Link>
              <Link href="/kunskapbanken/visdomstander" className="block text-accent-500 hover:text-accent-600 transition-colors">Visdomständer</Link>
            </div>
          </div>
        </section>

        {/* Sjukdomar och besvär */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sygdomme og gener</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <Link href="/kunskapbanken/afte" className="block text-accent-500 hover:text-accent-600 transition-colors">Afte</Link>
              <Link href="/kunskapbanken/alveoliti" className="block text-accent-500 hover:text-accent-600 transition-colors">Alveoliti</Link>
              <Link href="/kunskapbanken/amelogenesis-imperfekta" className="block text-accent-500 hover:text-accent-600 transition-colors">Amelogenesis imperfekta</Link>
              <Link href="/kunskapbanken/apikal-parodontiti" className="block text-accent-500 hover:text-accent-600 transition-colors">Apikal parodontiti</Link>
              <Link href="/kunskapbanken/avslitten-tand" className="block text-accent-500 hover:text-accent-600 transition-colors">Avslitten tand</Link>
              <Link href="/kunskapbanken/bakterier-i-munnen" className="block text-accent-500 hover:text-accent-600 transition-colors">Bakterier i munnen</Link>
              <Link href="/kunskapbanken/belaggning-pa-tungan" className="block text-accent-500 hover:text-accent-600 transition-colors">Beläggning på tungan</Link>
              <Link href="/kunskapbanken/bettfel" className="block text-accent-500 hover:text-accent-600 transition-colors">Bettfel</Link>
              <Link href="/kunskapbanken/blottade-tandhalsar" className="block text-accent-500 hover:text-accent-600 transition-colors">Blottade tandhalsar</Link>
              <Link href="/kunskapbanken/blasor-i-munnen" className="block text-accent-500 hover:text-accent-600 transition-colors">Blåsor i munnen</Link>
              <Link href="/kunskapbanken/blödande-tandkött" className="block text-accent-500 hover:text-accent-600 transition-colors">Blödande tandkött</Link>
              <Link href="/kunskapbanken/bruxism" className="block text-accent-500 hover:text-accent-600 transition-colors">Bruxism</Link>
              <Link href="/kunskapbanken/dental-sinus" className="block text-accent-500 hover:text-accent-600 transition-colors">Dental sinus</Link>
              <Link href="/kunskapbanken/dentinogenesis-imperfekta" className="block text-accent-500 hover:text-accent-600 transition-colors">Dentinogenesis imperfekta</Link>
              <Link href="/kunskapbanken/diastema" className="block text-accent-500 hover:text-accent-600 transition-colors">Diastema</Link>
            </div>
            <div className="space-y-3">
              <Link href="/kunskapbanken/gula-tander" className="block text-accent-500 hover:text-accent-600 transition-colors">Gula tänder</Link>
              <Link href="/kunskapbanken/gummy-smile" className="block text-accent-500 hover:text-accent-600 transition-colors">Gummy smile</Link>
              <Link href="/kunskapbanken/hyperdontia" className="block text-accent-500 hover:text-accent-600 transition-colors">Hyperdontia</Link>
              <Link href="/kunskapbanken/hal-i-tanderna" className="block text-accent-500 hover:text-accent-600 transition-colors">Hål i tänderna</Link>
              <Link href="/kunskapbanken/hostblasor" className="block text-accent-500 hover:text-accent-600 transition-colors">Hostblåsor</Link>
              <Link href="/kunskapbanken/ilningar-i-tanderna" className="block text-accent-500 hover:text-accent-600 transition-colors">Ilningar i tänderna</Link>
              <Link href="/kunskapbanken/initialkaries" className="block text-accent-500 hover:text-accent-600 transition-colors">Initialkaries</Link>
              <Link href="/kunskapbanken/karies" className="block text-accent-500 hover:text-accent-600 transition-colors">Karies</Link>
              <Link href="/kunskapbanken/knöl-i-munnen" className="block text-accent-500 hover:text-accent-600 transition-colors">Knöl i munnen</Link>
              <Link href="/kunskapbanken/korsbett" className="block text-accent-500 hover:text-accent-600 transition-colors">Korsbett</Link>
              <Link href="/kunskapbanken/kronisk-halitosis" className="block text-accent-500 hover:text-accent-600 transition-colors">Kronisk halitosis</Link>
              <Link href="/kunskapbanken/leukoplaki" className="block text-accent-500 hover:text-accent-600 transition-colors">Leukoplaki</Link>
              <Link href="/kunskapbanken/mesiodens" className="block text-accent-500 hover:text-accent-600 transition-colors">Mesiodens</Link>
              <Link href="/kunskapbanken/metallsmak-i-munnen" className="block text-accent-500 hover:text-accent-600 transition-colors">Metallsmak i munnen</Link>
              <Link href="/kunskapbanken/mineraliseringsstörning" className="block text-accent-500 hover:text-accent-600 transition-colors">Mineraliseringsstörning</Link>
            </div>
            <div className="space-y-3">
              <Link href="/kunskapbanken/periimplantit" className="block text-accent-500 hover:text-accent-600 transition-colors">Periimplantit</Link>
              <Link href="/kunskapbanken/perikoroniti" className="block text-accent-500 hover:text-accent-600 transition-colors">Perikoroniti</Link>
              <Link href="/kunskapbanken/plack" className="block text-accent-500 hover:text-accent-600 transition-colors">Plack</Link>
              <Link href="/kunskapbanken/pulpit" className="block text-accent-500 hover:text-accent-600 transition-colors">Pulpit</Link>
              <Link href="/kunskapbanken/ranula" className="block text-accent-500 hover:text-accent-600 transition-colors">Ranula</Link>
              <Link href="/kunskapbanken/rotsresorption" className="block text-accent-500 hover:text-accent-600 transition-colors">Rotsresorption</Link>
              <Link href="/kunskapbanken/rutna-tander" className="block text-accent-500 hover:text-accent-600 transition-colors">Rutna tänder</Link>
              <Link href="/kunskapbanken/saxbett" className="block text-accent-500 hover:text-accent-600 transition-colors">Saxbett</Link>
              <Link href="/kunskapbanken/skadad-tand" className="block text-accent-500 hover:text-accent-600 transition-colors">Skadad tand</Link>
              <Link href="/kunskapbanken/sluta-snarka-hjalpmedel" className="block text-accent-500 hover:text-accent-600 transition-colors">Sluta snarka hjälpmedel</Link>
              <Link href="/kunskapbanken/sneda-tander" className="block text-accent-500 hover:text-accent-600 transition-colors">Sneda tänder</Link>
              <Link href="/kunskapbanken/spottsten" className="block text-accent-500 hover:text-accent-600 transition-colors">Spottsten</Link>
              <Link href="/kunskapbanken/spricka-i-tand" className="block text-accent-500 hover:text-accent-600 transition-colors">Spricka i tand</Link>
              <Link href="/kunskapbanken/stomatit" className="block text-accent-500 hover:text-accent-600 transition-colors">Stomatit</Link>
              <Link href="/kunskapbanken/svamp-i-munnen" className="block text-accent-500 hover:text-accent-600 transition-colors">Svamp i munnen</Link>
            </div>
            <div className="space-y-3">
              <Link href="/kunskapbanken/tandsten" className="block text-accent-500 hover:text-accent-600 transition-colors">Tandsten</Link>
              <Link href="/kunskapbanken/tandvark" className="block text-accent-500 hover:text-accent-600 transition-colors">Tandvärk</Link>
              <Link href="/kunskapbanken/temporomandibular-dysfunktion" className="block text-accent-500 hover:text-accent-600 transition-colors">Temporomandibulär dysfunktion (TMD)</Link>
              <Link href="/kunskapbanken/trasiga-tander" className="block text-accent-500 hover:text-accent-600 transition-colors">Trasiga tänder</Link>
              <Link href="/kunskapbanken/tonsillstenar" className="block text-accent-500 hover:text-accent-600 transition-colors">Tonsillstenar</Link>
              <Link href="/kunskapbanken/tungans-sjukdomar" className="block text-accent-500 hover:text-accent-600 transition-colors">Tungans sjukdomar</Link>
              <Link href="/kunskapbanken/tander-flytar-pa-sig-som-vuxen" className="block text-accent-500 hover:text-accent-600 transition-colors">Tänder flytar på sig som vuxen</Link>
              <Link href="/kunskapbanken/tander-och-graviditet" className="block text-accent-500 hover:text-accent-600 transition-colors">Tänder och graviditet</Link>
              <Link href="/kunskapbanken/tander-och-atstörningar" className="block text-accent-500 hover:text-accent-600 transition-colors">Tänder och ätstörningar</Link>
              <Link href="/kunskapbanken/tillbakadraget-tandkött" className="block text-accent-500 hover:text-accent-600 transition-colors">Tillbakadraget tandkött</Link>
              <Link href="/kunskapbanken/underbett" className="block text-accent-500 hover:text-accent-600 transition-colors">Underbett</Link>
              <Link href="/kunskapbanken/uhlagda-tander" className="block text-accent-500 hover:text-accent-600 transition-colors">Uhlagda tänder</Link>
              <Link href="/kunskapbanken/vit-tunga" className="block text-accent-500 hover:text-accent-600 transition-colors">Vit tunga</Link>
              <Link href="/kunskapbanken/vita-flackar-pa-tanderna" className="block text-accent-500 hover:text-accent-600 transition-colors">Vita fläckar på tänderna</Link>
              <Link href="/kunskapbanken/öppet-bett" className="block text-accent-500 hover:text-accent-600 transition-colors">Öppet bett</Link>
              <Link href="/kunskapbanken/överbett" className="block text-accent-500 hover:text-accent-600 transition-colors">Överbett</Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 rounded-2xl p-12 text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vent ikke med at søge akut tandpleje</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Du kan booke en akuttid via vores online booking eller ringe til Artofdent på +46 40-12 11 08 eller ABC Tandklinikgruppen på +46 40-18 44 00.
          </p>
          <Link
            href="/boka-tid"
            className="inline-flex items-center rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all"
          >
            BOOK TID ONLINE
          </Link>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'
import { useState, useRef } from 'react'

const faqs = [
  {
    question: "Hvad koster børnetandpleje for danske patienter?",
    answer: "Som danske patienter betaler I direkte for behandlingen, men får betydelige besparelser sammenlignet med København. Vi tilbyder konkurrencedygtige priser på børnetandpleje, og vigtigst af alt - vi dækker jeres rejseomkostninger over Øresund! Kontakt os for aktuelle priser på børnebehandlinger."
  },
  {
    question: "Hvor ligger jeres klinik?",
    answer: "Vi findes på Södra Förstadsgatan 31 i Malmö - let tilgængeligt fra København med tog over Øresund."
  },
  {
    question: "Hvordan booker jeg tid til mit barn?",
    answer: "Som dansk patient kan du bare booke tid direkte hos os online eller ringe til +46 40-18 44 00. Vi hjælper gerne danske familier med hele processen og sørger for, at dit barn får den bedste behandling."
  },
  {
    question: "Kan jeg vælge tandlæge?",
    answer: "Selvfølgelig er det dig og dit barn, der får lov til at vælge den tandlæge, I føler jer mest trygge ved. Vi stræber efter at skabe en fleksibel og tilpasningsvenlig oplevelse, hvor I kan finde den tandlæge, der passer jeres behov og ønsker bedst. Jeres komfort og tillid er vores prioritet, når det gælder om at tilbyde positiv og tilpasset pleje."
  },
  {
    question: "Hvorfor vælge jer til børnetandpleje?",
    answer: "Med lang og solid erfaring inden for børnetandpleje er vores primære mål at give dit barn den bedst mulige oplevelse til konkurrencedygtige priser. Vi stræber efter at skabe et trygt og positivt miljø, hvor hvert barn kan føle sig trygt. Som danske patienter får I betydelige besparelser sammenlignet med København, og vi dækker endda rejseomkostningerne over Øresund!"
  },
  {
    question: "Kan man få tandregulering for børn hos jer?",
    answer: "Ja. Vores børnetandlæge og tandregleringsspecialist overvåger dit barns bidudvikling og tilbyder støtte, når det er nødvendigt, inklusive mulighed for tandregulering."
  }
]

export default function BarnTandvardPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      if (isMuted) {
        video.muted = false
        setIsMuted(false)
      } else {
        video.muted = true
        setIsMuted(true)
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                Børnetandpleje
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Dit barns trygge sted fra start til slut. Vi fokuserer på at give hvert barn en bekymringsfri tandplejeoplevelse med vores erfarne team af specialister. Som danske patienter får I betydelige besparelser sammenlignet med København!
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-600">
                  <h3 className="font-semibold text-primary-800 mb-2">Specialister i børnetandpleje</h3>
                  <p className="text-primary-700 text-sm">
                    Professionel børnetandpleje til konkurrencedygtige priser. Vi tilbyder kvalitetstandpleje til danske familier med betydelige besparelser og vi dækker jeres rejse over Øresund!
                  </p>
                  <Link href="/boka-tid" className="inline-flex items-center mt-2 text-primary-600 hover:text-primary-800 font-medium text-sm">
                    Book tid nu →
                  </Link>
                </div>
                
                <div className="flex items-start gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Vi tilpasser os efter dit barn</span>
                    <p className="text-neutral-600">Vi fokuserer på at give hvert barn en bekymringsfri tandplejeoplevelse med vores erfarne team af specialister.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Børnebidsspecialist og akuthjælp</span>
                    <p className="text-neutral-600">Med vores børnetandlæge og tandregleringsspecialist følger vi dit barns bidsudvikling og giver støtte ved behov, inklusive tandregulering. Vi hjælper også ved akutte problemer som tandpine eller skadede tænder.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/boka-tid"
                  className="rounded-full bg-primary-700 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 transition-all hover:shadow-xl"
                >
                  BOOK ONLINE
                </Link>
                <Link
                  href="/kontakt"
                  className="rounded-full border-2 border-secondary-400 bg-white px-8 py-3 text-base font-semibold text-secondary-400 shadow-lg hover:bg-secondary-400 hover:text-white hover:border-secondary-500 transition-all hover:shadow-xl"
                >
                  KONTAKT OS
                </Link>
              </div>
            </div>

            {/* Right side - Video */}
            <div className="lg:pl-8">
              <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                <video
                  ref={videoRef}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  poster="/images/barnvard-poster.jpg"
                >
                  <source src="/videos/barnvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Mute Toggle Button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 left-4 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-opacity hover:opacity-80 focus:outline-none"
                >
                  {isMuted ? (
                    <SpeakerXMarkIcon className="h-5 w-5" />
                  ) : (
                    <SpeakerWaveIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Giv dit barn den bedste start på god tandsundhed hos os. Med over 20 års erfaring blandt personalet og dyb viden inden for børne- og ungdomstandpleje stræber vi efter at skabe et trygt og behageligt miljø. Som danske patienter får I professionel børnetandpleje til konkurrencedygtige priser.
            </p>
            
            <div className="bg-accent-50 p-6 rounded-lg mt-8">
              <h3 className="text-2xl font-bold text-accent-800 mb-3">Vælg det bedste for dit barn - vælg os</h3>
              <p className="text-accent-700 mb-3">
                Vi tilbyder kvalitetstandpleje til danske familier med betydelige besparelser sammenlignet med København. Vi er sikre på, at I vil få en fantastisk oplevelse, og vi dækker endda jeres rejse over Øresund!
              </p>
              <p className="text-base text-accent-900">
                <strong>Ring ABC Tandklinikgruppen på +46 40-18 44 00</strong> for at booke tid eller få svar på dine spørgsmål.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left side - Title */}
            <div>
              <h2 className="text-4xl font-normal text-gray-900 leading-tight">
                Ofte stillede spørgsmål
              </h2>
            </div>

            {/* Right side - FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full text-left py-2 focus:outline-none"
                  >
                    <span className="text-lg font-normal text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <MinusIcon className="h-6 w-6 text-yellow-500" />
                      ) : (
                        <PlusIcon className="h-6 w-6 text-yellow-500" />
                      )}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="mt-4 pr-8">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

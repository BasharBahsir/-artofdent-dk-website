'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'
import { useState, useRef } from 'react'

const faqs = [
  {
    question: "Kostar det extra att lista mig hos er?",
    answer: "Vi är auktoriserade av Region Skåne och erbjuder en kostnadsfri registrering för ditt barn hos oss. Detta innebär att du inte behöver oroa dig för några kostnader när du listar ditt barn hos vår klinik. Vårt samarbete med Region Skåne möjliggör en smidig och bekymmersfri upplevelse för dig och ditt barn."
  },
  {
    question: "Var ligger er klinik?",
    answer: "Vi finns på Södra första gatan 31 i Malmö."
  },
  {
    question: "Tar det långt tid att byta?",
    answer: "Nej, allt du behöver göra är att byta mottagning på 1177."
  },
  {
    question: "Kan jag välja tandläkare?",
    answer: "Självklart är det du och ditt barn som får välja den tandläkare ni känner er mest bekväma med. Vi strävar efter att skapa en flexibel och anpassningsbar upplevelse där ni kan hitta den tandläkare som passar era behov och önskemål bäst. Er komfort och tillit är vår prioritet när det gäller att erbjuda en positiv och anpassad vård."
  },
  {
    question: "Varför ska jag byta?",
    answer: "Med en lång och gedigen erfarenhet inom barntandvård, är vårt främsta mål att ge ditt barn den bästa möjliga upplevelsen. Vi strävar efter att skapa en trygg och positiv miljö där varje barn kan känna sig bekvämt. Din tillit är vår motivation när vi arbetar för att säkerställa ditt barns välmående och en hälsosam tandhälsa."
  },
  {
    question: "Kan man utföra tandställning för barn hos er?",
    answer: "Ja. Vår barntandläkare och tandregleringsspecialist övervakar din bettutveckling och erbjuder stöd när det behövs, inklusive möjlighet till tandställning."
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
                Barn tandvård
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Ditt barns trygga punkt från början till slut. Vi fokuserar på att ge varje barn en bekymmersfri tandvårdsupplevelse med vårt erfarna team av specialister.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-600">
                  <h3 className="font-semibold text-primary-800 mb-2">En del av Region Skåne</h3>
                  <p className="text-primary-700 text-sm">
                    Alla barn och ungdomar i åldrarna 0-19 år välkomna att listas hos oss. Vi är stolta över att vara en del av Region Skånes uppdrag.
                  </p>
                  <Link href="https://www.1177.se" target="_blank" className="inline-flex items-center mt-2 text-primary-600 hover:text-primary-800 font-medium text-sm">
                    Gå till 1177 →
                  </Link>
                </div>
                
                <div className="flex items-start gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Vi anpassar oss efter ditt barn</span>
                    <p className="text-neutral-600">Vi fokuserar på att ge varje barn en bekymmersfri tandvårdsupplevelse med vårt erfarna team av specialister.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Barnbettsspecialist och akuthjälp</span>
                    <p className="text-neutral-600">Med vår barntandläkare och tandregleringsspecialist följer vi din bettutveckling och ger stöd vid behov, inklusive tandställning. Vi hjälper även vid akuta problem som tandvärk eller skadade tänder.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/boka-tid"
                  className="rounded-full bg-primary-700 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 transition-all hover:shadow-xl"
                >
                  BOKA ONLINE
                </Link>
                <Link
                  href="/kontakt"
                  className="rounded-full border-2 border-secondary-400 bg-white px-8 py-3 text-base font-semibold text-secondary-400 shadow-lg hover:bg-secondary-400 hover:text-white hover:border-secondary-500 transition-all hover:shadow-xl"
                >
                  KONTAKTA OSS
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
              Ge ditt barn den bästa starten för god tandhälsa genom att lista hos oss. Regelbundna och kostnadsfria undersökningar till och med 19-årsåldern. Med över 20 års erfarenhet bland personalen och djup kunskap inom barn- och ungdomstandvård strävar vi efter att skapa en trygg och bekväm miljö.
            </p>
            
            <div className="bg-accent-50 p-6 rounded-lg mt-8">
              <h3 className="text-2xl font-bold text-accent-800 mb-3">Välj det bästa för ditt barn - välj oss</h3>
              <p className="text-accent-700 mb-3">
                Lista ditt barn helt utan förpliktelser. Vi vill ge dig och ditt barn möjlighet till kvalitativ tandvård eftersom vi är säkra på att ni kommer att få en fantastisk upplevelse.
              </p>
              <p className="text-base text-accent-900">
                <strong>Ring ABC Tandklinikgruppen på 040-18 44 00</strong> för att lista ditt barn eller få svar på dina frågor.
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
                Vanliga frågor
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

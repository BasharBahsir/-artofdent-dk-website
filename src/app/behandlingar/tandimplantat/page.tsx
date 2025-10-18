'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { PlusIcon, MinusIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import { useState, useRef } from 'react'

const faqs = [
  {
    question: "Hur lång tid tar en tandimplantatbehandling?",
    answer: "Hela processen tar vanligtvis 3-6 månader från första konsultationen till färdig krona. Detta inkluderar läkning och osseointegration där implantatet växer samman med käkbenet."
  },
  {
    question: "Gör det ont att sätta in tandimplantat?",
    answer: "Behandlingen utförs under lokalbedövning så du känner ingen smärta under ingreppet. Efter behandlingen kan det vara lite ömt, men detta är normalt och går över inom några dagar."
  },
  {
    question: "Vad kostar tandimplantat?",
    answer: "Kostnaden varierar beroende på antal implantat och behandlingens komplexitet. Vi ger alltid en kostnadskalkyl innan behandling påbörjas. Kontakta oss för en kostnadsfri konsultation."
  },
  {
    question: "Kan alla få tandimplantat?",
    answer: "De flesta kan få tandimplantat, men tillräckligt med käkben krävs. Vi gör en noggrann bedömning vid konsultationen och kan vid behov göra benuppbyggnad först."
  }
]

export default function TandimplantatPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

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
                Tandimplantat
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                En permanent lösning för ett leende som varar. Tandimplantat är den mest avancerade och hållbara metoden för att ersätta förlorade tänder. Vi använder den senaste tekniken för att säkerställa ett naturligt och funktionellt resultat.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Naturligt utseende och känsla</span>
                    <p className="text-neutral-600">Våra implantat ser ut och känns som dina egna tänder, vilket ger dig självförtroendet att le och äta som vanligt.</p>
                  </div>
                </div>
                <div className="flex items-start gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Långvarig hållbarhet</span>
                    <p className="text-neutral-600">Med rätt skötsel kan tandimplantat hålla livet ut, vilket gör dem till en kostnadseffektiv lösning på lång sikt.</p>
                  </div>
                </div>
                <div className="flex items-start gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Bevarar käkbenet</span>
                    <p className="text-neutral-600">Implantat stimulerar käkbenet och förhindrar benförlust, vilket hjälper till att bevara din ansiktsstruktur.</p>
                  </div>
                </div>
                <div className="flex items-start gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Förbättrad tuggförmåga</span>
                    <p className="text-neutral-600">Till skillnad från proteser sitter implantat fast, vilket gör att du kan äta dina favoritmat utan bekymmer.</p>
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

            {/* Right side - Image */}
            <div className="lg:pl-8">
              <Image
                src="/images/Miljöfoton på kliniken (25).jpg"
                alt="Art of Dent tandimplantat - Permanent lösning"
                width={500}
                height={375}
                className="w-full h-auto rounded-lg shadow-sm"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section - Like homepage */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Våra specialister
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Möt vårt team av erfarna specialister som arbetar med tandimplantat. Vi kombinerar expertis med personlig omsorg för att ge dig det bästa resultatet.
            </p>
          </div>
          
          {/* Video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-900">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/specialists.mp4" type="video/mp4" />
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

      {/* Moderna faciliteter Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div>
              <div className="relative">
                <Image
                  src="/images/Miljöfoton på kliniken (4).jpg"
                  alt="Modern tandimplantat klinik - Artofdent Malmö"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:pl-8">
              <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Moderna faciliteter
              </h3>
              <p className="text-lg leading-8 text-gray-600">
                Vår klinik är utrustad med den senaste tekniken för att säkerställa säkra och framgångsrika implantatbehandlingar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 sm:py-24 bg-white">
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

      {/* CTA Section */}
      <div className="bg-primary-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Redo att få ditt nya leende?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              Boka en konsultation idag för att diskutera dina möjligheter med tandimplantat. Vi hjälper dig att få tillbaka ditt självförtroende.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/boka-tid"
                className="rounded-full bg-white px-8 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                Boka konsultation
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-primary-600 transition-all"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

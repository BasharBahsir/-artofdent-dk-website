'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StarIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'
import ClinicSelector from '@/components/ClinicSelector'

interface HeroProps {
  selectedClinic?: string
  onClinicChange?: (clinicSlug: string) => void
}

export default function Hero({ selectedClinic, onClinicChange }: HeroProps) {
  const [showClinicSelector, setShowClinicSelector] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const currentlyMuted = !video.muted;
      video.muted = currentlyMuted;
      setIsMuted(currentlyMuted);
      if (!currentlyMuted) {
        video.volume = 0.7;
      }
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-accent-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 sm:pb-32 lg:flex lg:px-8 lg:pt-8 lg:pb-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {/* Trust indicators */}
          <div className="mb-8">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="flex items-center gap-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-accent-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.9 af 5.0 | bedømmelser:</span>
            </div>
            <p className="text-sm text-gray-600 italic">
              &ldquo;Professionel tandpleje med en varm tilgang. Føler mig tryg her.&rdquo;
            </p>
          </div>
          
          <div className="mb-6 text-sm text-gray-600">
            Almindelig tandpleje | Specialisttandpleje | Tandlæge
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Din tandlæge i hjertet af Malmö
          </h1>
          
          {/* Øresund Bridge Cost Coverage Banner */}
          <div className="mt-6 mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-x-2 mb-2">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-green-800">SÆRLIGT TILBUD TIL DANSKE PATIENTER</span>
            </div>
            <p className="text-sm text-green-700">
              <strong>Vi betaler din rejse over Øresund!</strong> Tog, bus eller bilafgift - vi dækker omkostningerne når du vælger os.
            </p>
          </div>
          
          <div className="mt-6 space-y-2 text-lg leading-8 text-gray-600">
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 bg-secondary-400 rounded-full" />
              <span>Betydelige besparelser sammenlignet med København</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 bg-secondary-400 rounded-full" />
              <span>Generøse garantier på alle behandlinger</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-2 w-2 bg-secondary-400 rounded-full" />
              <span>Fleksible betalingsløsninger</span>
            </div>
          </div>

          {/* Clinic selector chip */}
          <div className="mt-8 mb-6">
            <button
              onClick={() => setShowClinicSelector(true)}
              className="mt-8 flex items-center gap-x-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="h-2 w-2 bg-secondary-400 rounded-full" />
              {selectedClinic ? `Malmö - ${selectedClinic}` : 'Vælg klinik'}
            </button>
          </div>

          {/* CTA Buttons */}
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

        {/* Hero video */}
        <div className="-mx-6 mt-16 sm:mx-0 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-12 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-[34.5rem] h-[25.9rem] rounded-2xl bg-gray-50 object-cover shadow-2xl"
                poster="/images/still_tak.png"
              >
                <source src="/videos/intro.mp4" type="video/mp4" />
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

              {/* Rating card positioned at edge */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-lg border border-white/20">
                <div className="flex items-center gap-x-2">
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-accent-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinic Selector Modal */}
      {showClinicSelector && (
        <ClinicSelector
          onClose={() => setShowClinicSelector(false)}
          onSelect={(clinicSlug: string) => {
            onClinicChange?.(clinicSlug)
            setShowClinicSelector(false)
          }}
        />
      )}

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-accent-200 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  )
}

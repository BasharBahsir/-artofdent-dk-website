'use client'

import { useRef, useState } from 'react'
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

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

  const handleVideoLoad = () => {
    const video = videoRef.current
    if (video) {
      video.currentTime = 4 // Start from 4 seconds
    }
  }

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tandvård för hela livet
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Från den första mjölktanden till avancerade specialistbehandlingar - vi erbjuder komplett tandvård för alla åldrar. 
            Med våra specialister inom käkkirurgi och parodontologi säkerställer vi optimal munhälsa genom hela livet.
          </p>
        </div>

        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              poster="/images/video-poster.jpg"
              onLoadedData={handleVideoLoad}
            >
              <source src="/videos/artofdent.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Mute Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/30"
              aria-label={isMuted ? 'Slå på ljud' : 'Stäng av ljud'}
            >
              {isMuted ? (
                <SpeakerXMarkIcon className="h-6 w-6" />
              ) : (
                <SpeakerWaveIcon className="h-6 w-6" />
              )}
            </button>

            {/* Play indicator overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 opacity-0 hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Video description */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Lär dig mer om våra tjänster och hur vi kan hjälpa dig att upprätthålla optimal munhälsa
            </p>
          </div>
        </div>

        {/* Key points from video */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100">
              <Image
                src="/images/icons/happy-tooth.png"
                alt="Barn- och Ungdomstandvård"
                width={29}
                height={29}
                className="w-7 h-7"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Barn- och Ungdomstandvård</h3>
            <p className="mt-2 text-sm text-gray-600">
              Från första mjölktanden - vi skapar positiva tandvårdsupplevelser för de yngsta
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100">
              <Image
                src="/images/icons/kak_kirurgi.png"
                alt="Käkkirurgi"
                width={29}
                height={29}
                className="w-7 h-7"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Käkkirurgi</h3>
            <p className="mt-2 text-sm text-gray-600">
              Avancerade kirurgiska ingrepp med våra specialister inom oral- och käkkirurgi
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent-100">
              <Image
                src="/images/icons/healthcare.png"
                alt="Parodontologi"
                width={29}
                height={29}
                className="w-7 h-7"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Parodontologi</h3>
            <p className="mt-2 text-sm text-gray-600">
              Specialistvård för tandkött och stödjevävnader - för friska tänder hela livet
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

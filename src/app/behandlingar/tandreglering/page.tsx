'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const faqs = [
  {
    question: "Hur lång tid tar en tandreglering?",
    answer: "Behandlingstiden varierar mellan 6 månader och 2-3 år beroende på hur omfattande korrigeringen är. Vi gör en noggrann bedömning och ger dig en tidsplan vid första konsultationen."
  },
  {
    question: "Kan vuxna ha tandställning?",
    answer: "Absolut! Allt fler vuxna väljer tandreglering. Med moderna alternativ som Invisalign kan behandlingen vara diskret och bekväm för vuxna i alla åldrar."
  },
  {
    question: "Gör tandställning ont?",
    answer: "Det är normalt att känna ett visst tryck och obehag de första dagarna efter justering, men det ska inte göra ont. Eventuella besvär försvinner snabbt och kan lindras med receptfria smärtstillande."
  },
  {
    question: "Vad kostar tandreglering?",
    answer: "Kostnaden varierar beroende på typ av behandling och omfattning. Vi ger alltid en kostnadskalkyl innan behandling påbörjas. Kontakta oss för en kostnadsfri konsultation."
  }
]

export default function TandregleringPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
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
                Tandreglering
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Få ett rakt och vackert leende med modern tandreglering. Vi erbjuder både traditionella tandställningar och diskreta alternativ som Invisalign för barn och vuxna.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full" />
                  <span className="text-neutral-600">Invisalign - diskret och avtagbar</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full" />
                  <span className="text-neutral-600">Traditionell tandställning</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full" />
                  <span className="text-neutral-600">För barn och vuxna</span>
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
                src="/images/Miljöfoton på kliniken (1).jpg"
                alt="Art of Dent tandreglering - Rakt leende"
                width={500}
                height={375}
                className="w-full h-auto rounded-lg shadow-sm"
                priority
              />
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

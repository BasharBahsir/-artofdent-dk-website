'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const faqs = [
  {
    question: "Hur ofta ska jag besöka tandhygienist?",
    answer: "Vi rekommenderar att du besöker tandhygienist var 6:e månad för optimal munhälsa. Vid tandköttsproblem eller annan problematik kan det behövas tätare besök."
  },
  {
    question: "Vad ingår i ett besök hos tandhygienist?",
    answer: "Ett besök inkluderar tandsten- och plackborttagning, polering av tänderna, fluorbehandling samt rådgivning om munhygien och rätt tandborstning."
  },
  {
    question: "Gör det ont att ta bort tandsten?",
    answer: "Tandstensavlägsning kan kännas obehagligt men ska inte göra ont. Vi använder lokalbedövning vid behov för att du ska känna dig bekväm under behandlingen."
  },
  {
    question: "Kan jag äta direkt efter behandlingen?",
    answer: "Du kan äta direkt efter behandlingen, men undvik starkt färgade drycker som kaffe, te och rödvin de första timmarna för bästa resultat."
  }
]

export default function TandhygienistPage() {
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
                Tandhygienist
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Professionell tandvård för optimal munhälsa. Våra erfarna tandhygienister hjälper dig att hålla tänderna rena och friska med regelbundna kontroller och behandlingar.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full" />
                  <span className="text-neutral-600">Tandsten- och plackborttagning</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full" />
                  <span className="text-neutral-600">Polering och fluorbehandling</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full" />
                  <span className="text-neutral-600">Personlig munhygienrådgivning</span>
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
                src="/images/Miljöfoton på kliniken (2).jpg"
                alt="Art of Dent tandhygienist - Professionell tandvård"
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

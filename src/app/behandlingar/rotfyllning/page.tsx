'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const faqs = [
  {
    question: "När behövs en rotfyllning?",
    answer: "Rotfyllning behövs när tandnerven är inflammerad eller infekterad, ofta på grund av djup karies, sprickor i tanden eller trauma. Symtom kan vara stark tandvärk, känslighet och svullnad."
  },
  {
    question: "Gör rotfyllning ont?",
    answer: "Rotfyllning utförs under lokalbedövning så du känner ingen smärta under behandlingen. Efter behandlingen kan det vara lite ömt, men detta försvinner inom några dagar."
  },
  {
    question: "Hur länge tar en rotfyllning?",
    answer: "En rotfyllning tar vanligtvis 1-2 timmar och kan kräva 1-3 besök beroende på komplexiteten. Vi säkerställer att behandlingen görs noggrant för bästa resultat."
  },
  {
    question: "Kan tanden räddas med rotfyllning?",
    answer: "Ja, rotfyllning räddar tanden i de flesta fall och kan hålla livet ut med rätt vård. Alternativet är ofta att dra ut tanden, så rotfyllning är en värdefull behandling."
  }
]

export default function RotfyllningPage() {
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
                Rotfyllning
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Rädda din tand med professionell rotfyllning. Vi behandlar inflammerad eller infekterad tandnerv med moderna tekniker för att bevara din naturliga tand.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full" />
                  <span className="text-neutral-600">Räddar din naturliga tand</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full" />
                  <span className="text-neutral-600">Moderna tekniker och utrustning</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="h-2 w-2 bg-secondary-400 rounded-full" />
                  <span className="text-neutral-600">Smärtfri behandling</span>
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
                src="/images/Miljöfoton på kliniken (3).jpg"
                alt="Art of Dent rotfyllning - Rädda din tand"
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

'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const faqs = [
  {
    question: "Hvor hurtigt kan I tage imod mig?",
    answer: "Vi på Art of Dent stræber efter at kunne hjælpe dig, som søger akut tandpleje, så hurtigt som muligt og kan næsten altid give dig en tid inden for et par timer. Tilgængelig tandpleje er vigtigt for os - det skal være nemt at gå til tandlægen, og det skal gå hurtigt at få hjælp. Vi har dagligt flere tider afsat til akut tandpleje. Finder du ikke en passende tid via vores onlinebooking, kan du ringe til os på 040-121 108, så gør vi vores bedste for at finde en passende tid. Som dansk patient dækker vi dine rejseomkostninger over Øresund."
  },
  {
    question: "Jeg har slået en tand ud - hvad gør jeg?",
    answer: "Hvis du har slået en tand ud, er det vigtigt, at du søger akut tandpleje. Kontakt din tandlæge for at booke en tid. Jo hurtigere du får hjælp, desto større er mulighederne for at redde tanden. Hvis det er muligt, er det bedst at opbevare tanden i munden - tænk på, at tanden skal være ren. Hvis det ikke er muligt, er et glas mælk den næstbedste opbevaringsmåde. Opbevar ikke tanden i et glas vand, da det kan skade tandroden."
  },
  {
    question: "Mit barn har slået en tand ud - hvad gør jeg?",
    answer: "Hvis et barn har slået en tand ud, skal du altid kontakte barnets sædvanlige tandlæge. Hvis de ikke kan tage imod jer, kan I kontakte os. I Sverige er tandplejen gratis indtil barnet fylder 19 år - det gælder også akut tandpleje. Det betyder, at I ikke behøver at betale for besøget, uanset hvilken tandlæge I går til. Vigtigt at huske: Hvis dit barn har slået en mælketand ud, er det vigtigt aldrig at forsøge at sætte tanden tilbage, da det kan skade de underliggende permanente tænder."
  },
  {
    question: "Gør det ondt at trække en tand ud?",
    answer: "Det gør ikke ondt at trække en tand ud. Det kan dog opfattes som ubehageligt. Efter en ekstraktion er det vigtigt at følge tandlægens anbefalinger."
  },
  {
    question: "Hvor finder jeg jer?",
    answer: "Vi tilbyder akut tandpleje på alle vores klinikker.",
    hasLink: true,
    linkText: "klinikker",
    linkHref: "/kontakt"
  }
]

export default function AkutTandvardPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side - Content */}
            <div className="lg:pr-8">
              <h1 className="text-4xl font-normal text-gray-900 mb-8 leading-tight">
                Akut tandpine
              </h1>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Når ulykken er ude, og du rammes af akutte tandproblemer, er det vigtigt, at du kan få den rette hjælp hurtigt. Uanset om du har problemer med tandpine, stikkende smerter eller har beskadiget en tand eller fyldning, skal du ikke behøve at vente på hjælp og gå rundt med smerter. Derfor tilbyder vi på Art of Dent akut tandpleje af højeste kvalitet med generøse åbningstider på hverdage og aftener. Som dansk patient dækker vi dine rejseomkostninger over Øresund.
                </p>
                
                <p>
                  <strong>Har du akutte smerter? Ring til os på 040-121 108</strong> - vi gør altid alt, hvad vi kan, for at arrangere en tid så hurtigt som muligt.
                </p>
                
                <p>
                  Hos os får du hjælp af erfarne tandlæger og tandplejersker, som kun bruger det allernyeste udstyr. Selv om du har smerter eller lider af tandlægeangst, er vi specialister i at give dig en behagelig oplevelse - før, under og efter behandlingen.
                </p>
                
                <p>
                  På mange akutklinikker er pristillægget om aftenen ofte højere. Vi på Art of Dent har fair priser og tager samme pris for tandpleje i alle vores åbningstider. Danske patienter sparer endda endnu mere med vores gratis transport over Øresund.
                </p>
              </div>
            </div>

            {/* Right side - Clinic image */}
            <div className="lg:pl-8">
              <Image
                src="/images/Miljöfoton på kliniken (3).jpg"
                alt="Art of Dent klinik - Akut tandvård"
                width={500}
                height={375}
                className="w-full h-auto rounded-lg shadow-sm"
                priority
              />
              
              {/* Google Reviews Section */}
              <div className="mt-6">
                <a 
                  href="https://share.google/nao5M152Szlv0MdwJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white rounded-lg shadow-sm border-transparent hover:shadow-md transition-shadow"
                >
                  {/* Header with Google logo and rating */}
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">5.0</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent Review */}
                  <div className="mb-3">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      &ldquo;Meget venligt personale og rolig atmosfære. Min datter var nervøs før besøget, men tandlægen fik hende til at føle sig helt tryg. Anbefales varmt til børnefamilier!&rdquo;
                    </p>
                  </div>
                  
                  <p className="text-xs text-gray-500">Se alle vores Google anmeldelser →</p>
                </a>
              </div>
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
                        {faq.hasLink ? (
                          <>
                            Vi erbjuder akut tandvård på alla våra{' '}
                            <Link href={faq.linkHref} className="text-primary-600 hover:text-primary-500 underline">
                              {faq.linkText}
                            </Link>
                            .
                          </>
                        ) : (
                          faq.answer
                        )}
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

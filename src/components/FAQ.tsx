import { useState } from 'react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  { 
    question: 'Har jag tillgång till tandvårdsstödet?', 
    answer: 'Ja, vi hjälper dig med tandvårdsbidrag och högkostnadsskydd. Från 23 år får du 300 kr per år i allmänt tandvårdsbidrag, och vid höga kostnader kan du få högkostnadsskydd som täcker 50-85% av kostnaden över 3000 kr per år.'
  },
  { 
    question: 'Jag vill lista mig hos er, hur gör jag?', 
    answer: 'Ring oss på Artofdent 040-12 11 08 eller ABC Tandklinikgruppen 040-18 44 00 så hjälper vi dig med listningen. Du kan också komma till kliniken så ordnar vi allt på plats. Listning är kostnadsfri och du kan byta när du vill.'
  },
  { 
    question: 'Hur bokar eller avbokar jag min tid?', 
    answer: 'Du kan boka tid online via vår hemsida, ringa oss direkt, eller skicka ett meddelande via kontaktformuläret. För avbokning, ring oss senast 24 timmar innan din tid för att undvika avgift. Vi erbjuder flexibla tider för att passa ditt schema.'
  }
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Title and Image */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
              Vanliga frågor och svar
            </h2>
            <div className="relative">
              <Image
                src="/images/Miljöfoton på kliniken (1).jpg"
                alt="Art of Dent reception - Välkomnande miljö"
                width={500}
                height={375}
                className="w-full h-auto rounded-lg shadow-sm"
                priority
              />
            </div>
          </div>

          {/* Right side - FAQ List */}
          <div className="lg:pt-16">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full text-left py-2 focus:outline-none"
                  >
                    <span className="text-lg font-normal text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
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
    </div>
  )
}

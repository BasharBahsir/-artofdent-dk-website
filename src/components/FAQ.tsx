import { useState } from 'react'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  { 
    question: 'Har jeg adgang til tandplejeydelser?', 
    answer: 'Som dansk patient tilbyder vi betydelige besparelser sammenlignet med København. Vi hjælper dig med at forstå dine muligheder og dækker endda dine rejseomkostninger over Øresund. Kontakt os for personlig rådgivning om priser og behandlingsmuligheder.'
  },
  { 
    question: 'Jeg vil gerne være patient hos jer, hvordan gør jeg?', 
    answer: 'Ring til os på Artofdent 040-12 11 08 eller ABC Tandklinikgruppen 040-18 44 00, så hjælper vi dig med tilmeldingen. Du kan også komme til klinikken, så ordner vi alt på stedet. Tilmelding er gratis, og du kan skifte når du vil.'
  },
  { 
    question: 'Hvordan booker eller afbestiller jeg min tid?', 
    answer: 'Du kan booke tid online via vores hjemmeside, ringe til os direkte eller sende en besked via kontaktformularen. For afbestilling skal du ringe til os senest 24 timer før din tid for at undgå gebyr. Vi tilbyder fleksible tider, der passer til dit skema.'
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
              Ofte stillede spørgsmål
            </h2>
            <div className="relative">
              <Image
                src="/images/Miljöfoton på kliniken (1).jpg"
                alt="Art of Dent reception - Velkomstmiljø"
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

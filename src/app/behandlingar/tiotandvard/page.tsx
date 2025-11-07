'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { PlusIcon, MinusIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const faqs = [
  {
    question: "Hvornår træder reformen i kraft?",
    answer: "Fra og med 1. januar 2026."
  },
  {
    question: "Hvem gælder den for?",
    answer: "Alle, der er 67 år eller ældre og er indskrevet i det svenske forsikringssystem. Som dansk patient kan du også drage fordel af dette system, når du vælger tandpleje i Malmö."
  },
  {
    question: "Hvor meget betaler jeg?",
    answer: "Du betaler 10% af referenceprisen for de behandlinger, der er omfattet. Staten står for de resterende omkostninger. Erstatningen registreres automatisk via Försäkringskassan, når du besøger en tandlæge, der er tilknyttet."
  },
  {
    question: "Hvordan ved jeg, om en behandling er omfattet?",
    answer: "Din tandlæge hjælper dig med at se, hvad der indgår i senior tandplejen, og hvad der stadig dækkes af nuværende højkostnadsbeskyttelse."
  }
]

const includedTreatments = [
  "Fyldninger",
  "Rodfyldninger", 
  "Tandudtrækninger",
  "Aftagelig protetik (proteser)",
  "Tand- og implantatstøttede kroner og broer på tænder 1-5",
  "Akut behandling (selve behandlingen)"
]

const excludedTreatments = [
  "Undersøgelser og kontroller",
  "Røntgen", 
  "Forebyggende behandlinger (tandhygiejnist)",
  "Æstetisk tandpleje (tandblekning m.m.)",
  "Kroner/broer på tænder bag position 5",
  "Akutundersøgelse/røntgen"
]

const treatmentPrices = [
  { name: "Fyldning (1 flade)", normalPrice: 1200, tiotandPrice: 120 },
  { name: "Fyldning (2 flader)", normalPrice: 1800, tiotandPrice: 180 },
  { name: "Rodfyldning", normalPrice: 4500, tiotandPrice: 450 },
  { name: "Tandudtrækning", normalPrice: 2200, tiotandPrice: 220 },
  { name: "Krona (framtand)", normalPrice: 8500, tiotandPrice: 850 },
  { name: "Bro (3 enheter)", normalPrice: 18000, tiotandPrice: 1800 },
  { name: "Delprotes", normalPrice: 12000, tiotandPrice: 1200 },
  { name: "Helprotes", normalPrice: 15000, tiotandPrice: 1500 }
]

export default function TiotandvardPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([])
  const [birthYear, setBirthYear] = useState('')
  const [showCalculator, setShowCalculator] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const toggleTreatment = (treatmentName: string) => {
    setSelectedTreatments(prev => 
      prev.includes(treatmentName) 
        ? prev.filter(t => t !== treatmentName)
        : [...prev, treatmentName]
    )
  }

  const calculateSavings = () => {
    const selected = treatmentPrices.filter(t => selectedTreatments.includes(t.name))
    const totalNormal = selected.reduce((sum, t) => sum + t.normalPrice, 0)
    const totalTiotand = selected.reduce((sum, t) => sum + t.tiotandPrice, 0)
    const savings = totalNormal - totalTiotand
    return { totalNormal, totalTiotand, savings }
  }

  const checkEligibility = () => {
    if (!birthYear || birthYear.length !== 4) return null
    const currentYear = new Date().getFullYear()
    const age = currentYear - parseInt(birthYear)
    return age >= 67
  }

  const isEligible = checkEligibility()
  const { totalNormal, totalTiotand, savings } = calculateSavings()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="py-16 sm:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-800 mb-6 leading-tight">
              Tiotandvård
            </h1>
            <p className="text-xl text-primary-600 mb-4 font-medium">
              Prisvärd tandvård för dig som är över 67 år
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Med Tiotandvården betalar du bara en tiondel av kostnaden för många tandbehandlingar. 
              Reformen gör det enklare för dig som senior att få den tandvård du behöver – till ett lägre pris och med samma höga kvalitet.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-100">
              <div className="text-3xl font-bold text-primary-600 mb-2">10%</div>
              <div className="text-sm text-gray-600">av kostnaden betalar du</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-100">
              <div className="text-3xl font-bold text-primary-600 mb-2">67+</div>
              <div className="text-sm text-gray-600">år för att vara berättigad</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-100">
              <div className="text-3xl font-bold text-primary-600 mb-2">2026</div>
              <div className="text-sm text-gray-600">när reformen träder i kraft</div>
            </div>
          </div>

          {/* Calculator CTA */}
          <div className="text-center">
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg"
            >
              {showCalculator ? 'Dölj kalkylatorn' : 'Beräkna dina besparingar'}
            </button>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      {showCalculator && (
        <div className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary-800 mb-8 text-center">
                Tiotandvård Kalkylator
              </h2>
              
              {/* Age Check */}
              <div className="mb-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="text-lg font-medium text-primary-800 mb-4">
                  Steg 1: Kontrollera din ålder
                </h3>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    placeholder="Ange födelseår (ex. 1955)"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    min="1900"
                    max="2010"
                  />
                  {isEligible !== null && (
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      isEligible 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {isEligible ? '✓ Berättigad' : '✗ Ej berättigad än'}
                    </div>
                  )}
                </div>
                {isEligible === false && (
                  <p className="mt-2 text-sm text-gray-600">
                    Du måste vara 67 år eller äldre för att vara berättigad till Tiotandvård.
                  </p>
                )}
              </div>

              {/* Treatment Selection */}
              {isEligible && (
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-primary-800 mb-4">
                    Steg 2: Välj behandlingar du är intresserad av
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {treatmentPrices.map((treatment) => (
                      <label
                        key={treatment.name}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          selectedTreatments.includes(treatment.name)
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedTreatments.includes(treatment.name)}
                          onChange={() => toggleTreatment(treatment.name)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                          selectedTreatments.includes(treatment.name)
                            ? 'border-primary-500 bg-primary-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedTreatments.includes(treatment.name) && (
                            <CheckIcon className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{treatment.name}</div>
                          <div className="text-sm text-gray-600">
                            Normalpris: {treatment.normalPrice.toLocaleString()} kr → 
                            Tiotandvård: {treatment.tiotandPrice.toLocaleString()} kr
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {isEligible && selectedTreatments.length > 0 && (
                <div className="bg-gradient-to-r from-green-50 to-primary-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-800 mb-4">
                    Dina beräknade besparingar
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">
                        {totalNormal.toLocaleString()} kr
                      </div>
                      <div className="text-sm text-gray-600">Normalpris</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">
                        {totalTiotand.toLocaleString()} kr
                      </div>
                      <div className="text-sm text-gray-600">Med Tiotandvård</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        -{savings.toLocaleString()} kr
                      </div>
                      <div className="text-sm text-gray-600">Du sparar</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-700">
                      Det är en besparing på {Math.round((savings / totalNormal) * 100)}%!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Information Sections */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          {/* Section 1 */}
          <div className="mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">
                  Vad innebär Tiotandvård?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  När du kommer till oss som är berättigad till Tiotandvården hjälper vi dig att få rätt vård till rätt pris. Hos Art of Dent får du:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Information om vad Tiotandvården innebär och vilka behandlingar som omfattas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    En individuell undersökning och behandlingsplan anpassad efter dina behov
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    Stöd i att använda tandvårdsstödet så att du bara betalar en tiondel av kostnaden
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Målet är att du ska känna dig trygg, förstå dina möjligheter och få en tandvård som är både prisvärd och av hög kvalitet.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">
                  En undersökning som ger dig rätt stöd
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Med Tiotandvården får du som är över 67 år tillgång till prisvärd tandvård där du bara betalar en tiondel av kostnaden för många behandlingar. Vid en undersökning fokuserar vi på att tidigt upptäcka och förebygga problem så att du kan behålla en god munhälsa länge. Ju tidigare vi kan ge rätt vård, desto enklare, tryggare och mer kostnadseffektivt blir det för dig.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 - Treatment Coverage */}
          <div className="mb-16">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-primary-800 mb-6">
                  Vilka behandlingar omfattas?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Included */}
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <CheckIcon className="w-5 h-5" />
                      Ingår i Tiotandvård
                    </h3>
                    <ul className="space-y-2">
                      {includedTreatments.map((treatment, index) => (
                        <li key={index} className="flex items-start gap-2 text-green-700">
                          <CheckIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded */}
                  <div className="bg-red-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                      <XMarkIcon className="w-5 h-5" />
                      Ingår inte i Tiotandvård
                    </h3>
                    <ul className="space-y-2">
                      {excludedTreatments.map((treatment, index) => (
                        <li key={index} className="flex items-start gap-2 text-red-700">
                          <XMarkIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vi ser frem til at tage os af dit smil
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Uden at det behøver at koste for meget. Velkommen til en mere behagelig tandplejeoplevelse!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boka-tid"
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Boka konsultation
            </Link>
            <Link
              href="/kontakt"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Kontakta oss
            </Link>
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
                Ofte stillede spørgsmål om senior tandpleje
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

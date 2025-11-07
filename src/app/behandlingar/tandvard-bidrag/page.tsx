'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const faqs = [
  {
    question: "Hvor meget kommer mit besøg til at koste?",
    answer: "Omkostningerne for dit besøg afhænger af, hvilke behandlinger der er nødvendige. Dit tandplejetilskud trækkes automatisk fra den samlede omkostning. Kontakt os for en gratis konsultation, hvor vi kan give dig et overslag. Som dansk patient sparer du desuden betydeligt sammenlignet med København!"
  },
  {
    question: "Dækker mit tandplejetilskud alle mine behandlinger?",
    answer: "Tandplejetilskuddet dækker grundlæggende tandpleje, men ikke æstetiske behandlinger. Tilskuddet bruges automatisk, når du besøger os, og trækkes fra din samlede omkostning. Vi hjælper dig med at maksimere dit tilskud."
  }
]

export default function TandvardBidragPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [birthYear, setBirthYear] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [calculatedBenefit, setCalculatedBenefit] = useState({ yearly: 0, total: 0, message: '' })

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const calculateBenefit = () => {
    if (!birthYear || birthYear.length !== 4) return

    const currentYear = new Date().getFullYear()
    const age = currentYear - parseInt(birthYear)

    let yearly = 0
    let message = ''

    if (age < 20) {
      yearly = 0
      message = 'Du har gratis tandpleje! Husk at booke dit besøg.'
    } else if (age >= 20 && age <= 23) {
      yearly = 600
      message = 'Tid til at gå til tandlægen? Du kan have op til 1200 kr i ATB.'
    } else if (age >= 24 && age <= 64) {
      yearly = 300
      message = 'Tid til at gå til tandlægen? Du kan have op til 600 kr i ATB.'
    } else if (age >= 65) {
      yearly = 600
      message = 'Tid til at gå til tandlægen? Du kan have op til 1200 kr i ATB.'
    }

    const total = yearly * 2 // Can save for 2 years

    setCalculatedBenefit({ yearly, total, message })
    setShowResult(true)
    
    // Auto-scroll to result section
    setTimeout(() => {
      const resultSection = document.getElementById('result-section')
      if (resultSection) {
        resultSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const getBenefitDescription = () => {
    if (calculatedBenefit.yearly === 0) {
      return 'Tandvård är kostnadsfri till och med det år du fyller 19. Du blir kallad av din tandläkare för din årliga undersökning.'
    } else if (calculatedBenefit.yearly === 600 && calculatedBenefit.total === 1200) {
      return 'Du kan ha 1200 kr i Allmänt Tandvårdsbidrag (Du tilldelas 600 kr per år i Allmän Tandvårdsbidrag som kan sparas i högst 24 månader).'
    } else if (calculatedBenefit.yearly === 300) {
      return 'Du kan ha 600 kr i Allmänt Tandvårdsbidrag (Du tilldelas 300 kr per år i Allmän Tandvårdsbidrag som kan sparas i högst 24 månader).'
    } else {
      return 'Du kan ha 1200 kr i Allmänt Tandvårdsbidrag (Du tilldelas 600 kr per år i Allmän Tandvårdsbidrag som kan sparas i högst 24 månader).'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="py-16 sm:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-normal text-primary-800 mb-6 leading-tight">
              Har du missat ditt tandvårdsbidrag?
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Visste du att du har fram till den 30 juni på dig att använda tandvårdsbidraget? 
              Därefter ersätts ditt gamla belopp med ett nytt, det går inte att spara mer än två belopp 
              samtidigt. Du kan spara ditt bidrag i högst 24 månader.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h2 className="text-2xl font-semibold text-primary-700 text-center mb-6">
              Allmänt Tandvårdsbidrag
            </h2>
            
            <p className="text-center text-gray-600 mb-8">
              Varje år får du ett tandvårdsbidrag från Försäkringskassan, som är giltig i två år.<br/>
              Exempelvis i år får du ett nytt bidrag den 1 juli, så se till att ta vara på det med ett besök hos Art of Dent.
            </p>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-medium text-primary-700 text-center mb-6">
                Se hur mycket du får i tandvårdsbidrag
              </h3>
              
              <div className="max-w-md mx-auto">
                <label htmlFor="birthYear" className="block text-sm font-medium text-gray-700 mb-2">
                  Vilket år är du född? Ex. 1982
                </label>
                <input
                  type="number"
                  id="birthYear"
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      calculateBenefit()
                    }
                  }}
                  placeholder="Ange födelseår"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-center"
                  min="1900"
                  max="2010"
                />
                
                <button
                  onClick={calculateBenefit}
                  className="w-full mt-4 bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors"
                >
                  VISA DITT TANDVÅRDSBIDRAG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Result Section */}
      {showResult && (
        <div id="result-section" className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-primary-800 text-center mb-6">
                {calculatedBenefit.message}
              </h3>
              
              <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-gray-700 text-center">
                  {getBenefitDescription()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Information Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-lg text-gray-600 mb-8 text-center">
            Statistik från Försäkringskassan visar att över 50% av den svenska befolkningen 
            inte använder sitt tandvårdsbidrag. Därför vill vi informera våra patienter 
            om detta så de kan ta hand om sina tänder oavsett deras ekonomiska situation.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Så funkar det:</h3>
            
            <div className="space-y-4 text-gray-700">
              <p>• Det allmänna tandvårdsbidraget, ATB, är ett bidrag som du får av Försäkringskassan för att underlätta dina tandvårdskostnader.</p>
              
              <p>• Du får bidraget varje år den 1 juli från och med att du fyller 20 år.</p>
              
              <p>• Ett bidrag kan sparas i högst 2 år innan det återställs. Om du inte går till tandläkaren på över 2 år kommer du att förlora ett bidrag.</p>
              
              <p>• Som mest går bidraget upp till 600 kr eller 1200 kr, beroende på din ålder. Om du är mellan 20-23 år eller 65+ så är ditt bidrag 600 kr/år och om du är mellan 24-64 år gammal så får du 300 kr/år.</p>
              
              <p>• Du behöver inte ansöka om ditt bidrag. Du får det automatiskt och registreras hos din tandläkare.</p>
              
              <p>• Ditt bidrag kan inte användas till estetiska behandlingar.</p>
              
              <p>• Summan för ditt bidrag bestäms och ansvaras av den svenska staten enligt deras budget och är lika mycket för alla vårdgivare som har samarbete med Försäkringskassan.</p>
              
              <p>• Till och med det år du fyller 19 är tandvård gratis i Sverige.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/boka-tid"
              className="bg-primary-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-800 transition-colors text-center"
            >
              Boka online
            </Link>
            <Link
              href="/kontakt"
              className="bg-secondary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary-700 transition-colors text-center"
            >
              Ring nu
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
                De vanligaste frågorna om ATB
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

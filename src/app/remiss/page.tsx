'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { PaperAirplaneIcon, UserGroupIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'Digital Remisshantering',
    description: 'Skicka remisser digitalt direkt till våra specialister genom vårt säkra system.',
    icon: PaperAirplaneIcon,
  },
  {
    name: 'Specialist Expertis',
    description: 'Våra erfarna specialister inom parodontologi och käkkirurgi tar emot komplexa fall.',
    icon: UserGroupIcon,
  },
  {
    name: 'Snabb Handläggning',
    description: 'Vi prioriterar remisser och erbjuder snabba behandlingstider för era patienter.',
    icon: ClockIcon,
  },
  {
    name: 'Säker Kommunikation',
    description: 'All kommunikation sker genom säkra kanaler med fullständig dokumentation.',
    icon: ShieldCheckIcon,
  },
]

export default function RemissPage() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://muntra-dev.github.io/referral-page/index.js"]')
    if (existingScript) {
      return
    }

    // Load the Muntra widget script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://muntra-dev.github.io/referral-page/index.js'
    script.async = false // Load synchronously to ensure proper initialization
    
    // Set the correct attribute after script loads
    script.onload = () => {
      setTimeout(() => {
        const widget = document.querySelector('.muntra-referral-widget')
        if (widget) {
          widget.setAttribute('muntra_clinic_id', '1750')
          widget.removeAttribute('data-muntra-clinic-id')
          console.log('Muntra widget initialized with clinic ID 1750')
        }
      }, 100)
    }
    
    script.onerror = () => {
      console.error('Failed to load Muntra widget script')
    }
    
    // Add script to the end of body
    document.body.appendChild(script)
    
    // Cleanup function
    return () => {
      // Remove script when component unmounts
      const scriptToRemove = document.querySelector('script[src="https://muntra-dev.github.io/referral-page/index.js"]')
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-dental-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dental-900 sm:text-6xl">
              Henvisning til Art of Dent
            </h1>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Send henvisninger digitalt til vores specialister inden for parodontologi og kæbekirurgi. 
              Vi modtager komplekse tilfælde og tilbyder højkvalitets specialistbehandling i Malmö. Som dansk patient dækker vi dine rejseomkostninger over Øresund.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dental-900 sm:text-4xl">
              Fordele ved vores henvisningssystem
            </h2>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Vi gør det nemt for jer at sende henvisninger og for jeres patienter at få specialistbehandling. Danske patienter får dækket rejseomkostninger.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.name} className="flex flex-col">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg">
                    <benefit.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-dental-900">
                    {benefit.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-dental-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Specialists Section */}
      <div className="bg-dental-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dental-900 sm:text-4xl">
              Vores Specialister
            </h2>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Erfarna specialister som tar emot remisser inom sina expertområden
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-dental-900 mb-4">
                Parodontologi
              </h3>
              <p className="text-dental-600 mb-6">
                Specialistbehandling av tandkött och stödjevävnader. Vi tar emot remisser för komplexa parodontala fall, 
                regenerativ behandling och implantatkirurgi.
              </p>
              <div className="text-sm text-dental-500">
                <p><strong>Specialist:</strong> Aleksander Milosavljevic</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-dental-900 mb-4">
                Käkkirurgi
              </h3>
              <p className="text-dental-600 mb-6">
                Kirurgisk behandling inom käk- och ansiktsområdet. Vi hanterar komplexa extraktioner, 
                implantatkirurgi och käkkirurgiska ingrepp.
              </p>
              <div className="text-sm text-dental-500">
                <p><strong>Specialist:</strong> Mikael Korduner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Widget Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-dental-900 sm:text-4xl">
              Skicka Remiss
            </h2>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Använd formuläret nedan för att skicka en digital remiss till ABC Tandklinikgruppen. 
              Alla fält är obligatoriska och remissen behandlas säkert enligt GDPR.
            </p>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Obs:</strong> Om formuläret inte visas korrekt, kontakta oss direkt på 040-18 44 00 eller 
                <a href="mailto:info@abctandklinikgruppen.se" className="underline ml-1">info@abctandklinikgruppen.se</a>
              </p>
            </div>
          </div>
          
          {/* Muntra Referral Widget */}
          <div className="mx-auto max-w-4xl">
            <div 
              className="muntra-referral-widget"
              data-muntra-clinic-id="1750"
              style={{ 
                minHeight: '1000px',
                width: '100%',
                margin: '10px auto 0',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#ffffff'
              }}
            ></div>
          </div>
          
          {/* Custom CSS for Muntra Widget */}
          <style jsx>{`
            .muntra-referral-widget {
              font-family: inherit !important;
            }
            .muntra-referral-widget * {
              box-sizing: border-box !important;
            }
            .muntra-referral-widget input,
            .muntra-referral-widget textarea,
            .muntra-referral-widget select,
            .muntra-referral-widget button {
              font-family: inherit !important;
              color: #374151 !important;
            }
            .muntra-referral-widget button {
              background-color: #3b82f6 !important;
              color: white !important;
              border: none !important;
              padding: 8px 16px !important;
              border-radius: 6px !important;
              cursor: pointer !important;
            }
            .muntra-referral-widget button:hover {
              background-color: #2563eb !important;
            }
          `}</style>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-dental-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-dental-900 mb-6">
              Kontaktinformation för Remisser
            </h3>
            <div className="space-y-4 text-dental-600">
              <p>
                <strong>E-post:</strong> info@abctandklinikgruppen.se
              </p>
              <p>
                <strong>Telefon:</strong> 040-18 44 00
              </p>
              <p>
                <strong>Adress:</strong> Södra Förstadsgatan 31 (IDOFFCENTRUM), 211 43 Malmö
              </p>
            </div>
            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800">
                <strong>Viktigt:</strong> För akuta fall, kontakta oss direkt på telefon. 
                Digitala remisser behandlas inom 1-2 arbetsdagar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

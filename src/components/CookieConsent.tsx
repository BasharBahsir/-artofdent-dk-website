'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('samtycke')
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    preferences: false,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setIsVisible(false)
  }

  const handleReject = () => {
    const consent = {
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setIsVisible(false)
  }

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Cookie-indstillinger</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('samtykke')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'samtykke'
                ? 'border-primary-700 text-primary-700'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Samtykke
          </button>
          <button
            onClick={() => setActiveTab('information')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'information'
                ? 'border-primary-700 text-primary-700'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Information
          </button>
          <button
            onClick={() => setActiveTab('om')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'om'
                ? 'border-primary-700 text-primary-700'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Om
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'samtycke' && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Vi bruger cookies!</h2>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                På Artofdent.dk bruger vi <strong>cookies</strong> til at tilpasse indholdet og annoncerne til vores brugere, levere 
                funktioner til sociale medier og analysere vores trafik. Vi videregiver også sådanne identifikatorer og andre 
                oplysninger fra din enhed til de sociale medier og annonce- og analysevirksomheder, som vi samarbejder med. Disse kan 
                igen kombinere oplysningerne med andre oplysninger, som du har leveret, eller som de har indsamlet, når du har 
                brugt deres tjenester.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Nødvendig</h3>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="sr-only"
                    />
                    <div className="w-12 h-6 bg-primary-700 rounded-full shadow-inner">
                      <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-6 translate-y-0.5"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Indstillinger</h3>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={() => togglePreference('preferences')}
                      className="sr-only"
                    />
                    <div 
                      className={`w-12 h-6 rounded-full shadow-inner cursor-pointer transition-colors ${
                        preferences.preferences ? 'bg-primary-700' : 'bg-gray-300'
                      }`}
                      onClick={() => togglePreference('preferences')}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform translate-y-0.5 ${
                        preferences.preferences ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Statistik</h3>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={preferences.statistics}
                      onChange={() => togglePreference('statistics')}
                      className="sr-only"
                    />
                    <div 
                      className={`w-12 h-6 rounded-full shadow-inner cursor-pointer transition-colors ${
                        preferences.statistics ? 'bg-primary-700' : 'bg-gray-300'
                      }`}
                      onClick={() => togglePreference('statistics')}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform translate-y-0.5 ${
                        preferences.statistics ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Marknadsföring</h3>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                      className="sr-only"
                    />
                    <div 
                      className={`w-12 h-6 rounded-full shadow-inner cursor-pointer transition-colors ${
                        preferences.marketing ? 'bg-primary-700' : 'bg-gray-300'
                      }`}
                      onClick={() => togglePreference('marketing')}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform translate-y-0.5 ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'information' && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Cookie Information</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Nödvändiga cookies</h3>
                  <p>Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av i våra system.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Inställningar</h3>
                  <p>Dessa cookies gör det möjligt för webbplatsen att komma ihåg val du gör och ge förbättrade, mer personliga funktioner.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Statistik</h3>
                  <p>Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in och rapportera information anonymt.</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Marknadsföring</h3>
                  <p>Dessa cookies används för att leverera annonser som är mer relevanta för dig och dina intressen.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'om' && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Om cookies</h2>
              <div className="text-sm text-gray-600 space-y-3">
                <p>
                  Cookies är små textfiler som kan användas av webbplatser för att göra en användares upplevelse mer effektiv.
                </p>
                <p>
                  Lagen säger att vi får lagra cookies på din enhet om de är strikt nödvändiga för att denna webbplats ska fungera. 
                  För alla andra typer av cookies behöver vi ditt tillstånd.
                </p>
                <p>
                  Denna webbplats använder olika typer av cookies. En del cookies placeras ut av tredjepartstjänster som visas på våra sidor.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 p-6 border-t bg-gray-50">
          <button
            onClick={handleReject}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors"
          >
            Avvisa
          </button>
          <button
            onClick={handleAcceptSelected}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors"
          >
            Tillåt urval
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-4 py-2 bg-primary-700 text-white rounded hover:bg-primary-800 transition-colors"
          >
            Tillåt alla
          </button>
        </div>
      </div>
    </div>
  )
}

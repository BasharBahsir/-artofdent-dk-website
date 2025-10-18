'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClinicSelector from '@/components/ClinicSelector'
import { CalendarIcon, ClockIcon, UserIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function BookingPage() {
  const [selectedClinic, setSelectedClinic] = useState<string>('')
  const [showClinicSelector, setShowClinicSelector] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const treatments = [
    'Allmän undersökning',
    'Tandimplantat',
    'Tandblekning',
    'Akut tandvård',
    'Ortodonti',
    'Tandsten/rengöring',
    'Rotfyllning',
    'Annat'
  ]

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ]

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          clinic: selectedClinic
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          treatment: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        })
        setSelectedClinic('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting booking:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Boka din tid
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Välj klinik och fyll i dina uppgifter så kontaktar vi dig för att bekräfta din bokning.
            </p>
          </div>

          {/* Clinic Selection */}
          <div className="mt-12 bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              1. Välj klinik
            </h2>
            
            {selectedClinic ? (
              <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                <div>
                  <p className="font-medium text-primary-900">
                    {selectedClinic === 'artofdent-malmo' ? 'Artofdent Malmö' : 'ABC Tandklinikgruppen Malmö'}
                  </p>
                  <p className="text-sm text-primary-600">
                    {selectedClinic === 'artofdent-malmo' ? 'Hantverkaregatan 6D, 211 55 Malmö' : 'Södra Förstadsgatan 31, 211 43 Malmö'}
                  </p>
                </div>
                <button
                  onClick={() => setShowClinicSelector(true)}
                  className="text-sm font-medium text-primary-600 hover:text-primary-500"
                >
                  Byt klinik
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowClinicSelector(true)}
                className="w-full p-4 border-2 border-dashed border-neutral-300 rounded-lg text-neutral-500 hover:border-primary-300 hover:text-primary-600 transition-colors"
              >
                Klicka för att välja klinik
              </button>
            )}
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="mt-8 bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">
              2. Dina uppgifter
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Namn *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ditt fullständiga namn"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Telefon *
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="070-123 45 67"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  E-post *
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="din@email.se"
                  />
                </div>
              </div>

              {/* Treatment */}
              <div className="sm:col-span-2">
                <label htmlFor="treatment" className="block text-sm font-medium text-neutral-700 mb-2">
                  Behandling *
                </label>
                <select
                  id="treatment"
                  required
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Välj behandling</option>
                  {treatments.map((treatment) => (
                    <option key={treatment} value={treatment}>
                      {treatment}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-neutral-700 mb-2">
                  Önskat datum
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                  <input
                    type="date"
                    id="preferredDate"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-neutral-700 mb-2">
                  Önskad tid
                </label>
                <div className="relative">
                  <ClockIcon className="absolute left-3 top-3 h-5 w-5 text-neutral-400" />
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Välj tid</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Meddelande (valfritt)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="block w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Beskriv eventuella besvär eller önskemål..."
                />
              </div>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Bokningsförfrågan skickad!</h3>
                    <p className="mt-1 text-sm text-green-700">Vi kontaktar dig inom 24 timmar för att bekräfta din bokning.</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Något gick fel</h3>
                    <p className="mt-1 text-sm text-red-700">Försök igen eller ring oss direkt på 040-12 11 08.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={!selectedClinic || isSubmitting}
                className="w-full rounded-lg bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Skickar...' : 'Skicka bokningsförfrågan'}
              </button>
              {submitStatus !== 'success' && (
                <p className="mt-2 text-sm text-neutral-500 text-center">
                  Vi kontaktar dig inom 24 timmar för att bekräfta din bokning.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Clinic Selector Modal */}
      {showClinicSelector && (
        <ClinicSelector
          onClose={() => setShowClinicSelector(false)}
          onSelect={(clinicSlug) => {
            setSelectedClinic(clinicSlug)
            setShowClinicSelector(false)
          }}
        />
      )}

      <Footer />
    </div>
  )
}

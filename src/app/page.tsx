'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutVideo from '@/components/AboutVideo'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  const [selectedClinic, setSelectedClinic] = useState<string>('')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div>
        <Hero 
          selectedClinic={selectedClinic} 
          onClinicChange={setSelectedClinic} 
        />
      </div>
      <ServicesGrid />
      <AboutVideo />
      <WhyChooseUs />
      <FAQ />

      {/* Call to Action Section */}
      <div className="bg-primary-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Redo att boka din nästa tandläkarbesök?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Vi finns här för dig med professionell tandvård, moderna behandlingar och en trygg miljö. Boka din tid idag!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/boka-tid"
                className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 transition-all hover:shadow-xl"
              >
                BOKA ONLINE
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-white hover:text-primary-700 transition-all hover:shadow-xl"
              >
                KONTAKTA OSS
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

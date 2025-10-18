'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function GommenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image src="/images/Miljöfoton på kliniken (3).jpg" alt="Gommen" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Gommen</h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-2xl mx-auto">Munhålans tak och dess viktiga funktioner för tal och sväljning.</p>
        </div>
      </div>
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Hem</Link>
            <span>/</span>
            <Link href="/kunskapbanken" className="hover:text-gray-700">Fakta</Link>
            <span>/</span>
            <span className="text-gray-900">Gommen</span>
          </nav>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-8 mb-8">Gommen är munhålans tak och separerar munhålan från näshålan. Den har viktiga funktioner för tal, sväljning och andning.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Gommens uppbyggnad</h2>
          <p className="text-gray-700 leading-7 mb-6">Gommen består av två delar: <strong>Hårda gommen</strong> (palatum durum) som är främre delen med fast benstruktur täckt av slemhinna. <strong>Mjuka gommen</strong> (palatum molle) som är bakre delen som består av muskulatur och kan röra sig.</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Gommens funktioner</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-7 mb-6 space-y-2">
            <li>Separerar munhålan från näshålan</li>
            <li>Hjälper till vid tuggning genom att forma mat</li>
            <li>Viktig för talbildning och resonans</li>
            <li>Stänger av näshålan vid sväljning</li>
            <li>Skyddar näshålan från mat och vätska</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Vanliga gomproblem</h3>
            <ul className="text-blue-700 list-disc pl-5 space-y-1">
              <li>Gomspalt - missbildning som kan opereras</li>
              <li>Inflammation från brännande mat eller dryck</li>
              <li>Svamp i munnen kan påverka gommen</li>
              <li>Sår eller irritation från proteser</li>
              <li>Torr gom från muntorrhet</li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Varför välja Art of Dent?</h2>
          <p className="text-gray-700 leading-7 mb-6">På Art of Dent i Malmö undersöker vi hela munhålan inklusive gommen vid varje kontroll. Vi upptäcker tidiga förändringar och behandlar problem innan de blir allvarliga.</p>
        </div>
        <div className="bg-primary-50 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Boka munhålekontroll</h2>
          <p className="text-gray-600 mb-6">Kontakta oss på Art of Dent. Ring <strong>040-121 108</strong> eller boka tid online.</p>
          <div className="flex justify-center gap-4">
            <Link href="/boka-tid" className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">BOKA TID ONLINE</Link>
            <Link href="/kontakt" className="rounded-full border-2 border-primary-700 bg-white px-8 py-3 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-all">KONTAKTA OSS</Link>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Relaterade ämnen</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/kunskapbanken/munhala" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Munhåla</Link>
              <Link href="/kunskapbanken/mundslemhinna" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Mundslemhinna</Link>
              <Link href="/kunskapbanken/tunga" className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Tunga</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

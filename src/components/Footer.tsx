import Link from 'next/link'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

const footerSections = {
  populæreBehandlinger: [
    { name: 'Akut tandpleje', href: '/behandlingar/akut-tandvard' },
    { name: 'Tandimplantater', href: '/behandlingar/tandimplantat' },
    { name: 'Æstetisk tandpleje', href: '/behandlingar/estetisk-tandvard' },
    { name: 'Børnetandpleje', href: '/behandlingar/barnvard' },
  ],
  hurtigeLinks: [
    { name: 'Book tid online', href: '/boka-tid' },
    { name: 'Vidensbank', href: '/kunskapbanken' },
    { name: 'Vores team', href: '/om-oss#team' },
  ],
  information: [
    { name: 'Om Artofdent', href: '/om-oss' },
    { name: 'Kontakt & åbningstider', href: '/kontakt' },
    { name: 'Vores klinikker', href: '/kontakt#kliniker' },
    { name: 'Databeskyttelsespolitik', href: '/dataskyddspolicy' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Populära behandlingar */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Populære behandlinger</h3>
            <ul className="space-y-3">
              {footerSections.populæreBehandlinger.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Snabblänkar */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Hurtige links</h3>
            <ul className="space-y-3">
              {footerSections.hurtigeLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Information</h3>
            <ul className="space-y-3">
              {footerSections.information.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Rating */}
          <div className="flex flex-col items-start">
            <a 
              href="https://www.google.com/search?sca_esv=fa0d648ec49d7a9f&sxsrf=AE3TifPEjkZ261GzrWU7KOFQoJrmSVC-Xg:1759969155790&q=artofdent&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EytEx2XwYYBjMPBvMY363rsCuSdMgcXLvsL9-jaGgSqipHuiquuSQUMcLWOKEqAnOO3VlmY%3D&uds=AOm0WdH6nlfKCX7KLFCq2cu8xOlCiCn55BYsMQisKzOb0f97sa95Urkz3UOfCGNMGPdrbkgMxdCIh8tgn4llQReU0Ubn0T3efe266dqxeqp3oF5oXkTJXmg&sa=X&sqi=2&ved=2ahUKEwii1-KC7JWQAxV0FBAIHbyIEjMQ3PALegQIHxAE&biw=1536&bih=730&dpr=1.25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity"
            >
              {/* Google Logo */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </a>
            
            <p className="text-gray-400 text-sm">
              Baseret på Google anmeldelser
            </p>

            {/* Muntra Rating */}
            <a 
              href="https://www.muntra.com/art-of-dent-academy-ab/c/3552?language=sv"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white font-bold text-lg">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="flex items-start">
                <Image
                  src="/images/muntra.png"
                  alt="Muntra"
                  width={120}
                  height={24}
                  className="h-6 brightness-0 invert mb-2"
                />
              </div>
              
              <p className="text-gray-400 text-sm">
                Baseret på Muntra anmeldelser
              </p>
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and social */}
            <div className="flex items-center gap-6">
              <Link href="/" className="text-2xl font-bold text-white tracking-wide">
                ART<span className="text-gray-100">OF</span>DENT
              </Link>
              
              {/* Social icons */}
              <div className="flex gap-4">
                <a href="https://www.instagram.com/artofdentacademy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/Artofdent23/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-default">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright and legal */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>© Art of Dent 2025</span>
              <Link href="/dataskyddspolicy" className="hover:text-white">
                Databeskyttelsespolitik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

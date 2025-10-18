import Link from 'next/link'
import Header from '@/components/Header'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Artikeln kunde inte hittas
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Den artikel du letar efter finns inte eller har flyttats. 
          Gå tillbaka till kunskapbanken för att hitta andra intressanta artiklar.
        </p>
        <div className="space-x-4">
          <Link
            href="/kunskapbanken"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Tillbaka till Kunskapbanken
          </Link>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
          >
            Hem
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

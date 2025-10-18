import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { AcademicCapIcon, GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline'

const teamMembers = [
  {
    name: 'Ammar Alwaily',
    title: 'Legitimerad tandläkare',
    image: '/images/ammar.avif',
    bio: 'Medgrundare av Art of Dent, fjärde generationens tandläkare.',
    clinic: 'Artofdent Malmö'
  },
  {
    name: 'Saif Alwaily',
    title: 'Legitimerad tandläkare',
    image: '/images/saif.avif',
    bio: 'Medgrundare av Art of Dent, med över 15 års erfarenhet som allmäntandläkare och kunnig inom implantatkirurgi.',
    clinic: 'Artofdent Malmö'
  },
  {
    name: 'Camelia Kokonozis',
    title: 'Tandsköterska',
    image: '/images/camilla.avif',
    bio: 'Erfaren tandsköterska som bidrar till en trygg och effektiv vård.',
    clinic: 'Artofdent Malmö'
  },
  {
    name: 'Carmen Wiberg',
    title: 'Tandsköterska',
    image: '/images/carmen.avif',
    bio: 'En viktig del av vårt team som ser till att ditt besök blir så behagligt som möjligt.',
    clinic: 'Artofdent Malmö'
  },
  {
    name: 'Elin Hansson',
    title: 'Tandsköterska',
    image: '/images/elin.avif',
    bio: 'Med sin expertis och omsorg är Elin en klippa i vårt team.',
    clinic: 'Artofdent Malmö'
  },
  {
    name: 'Mikael Korduner',
    title: 'Övertandläkare/Käkkirurg',
    image: '/images/mickeal.avif',
    bio: 'Specialist med djup kunskap inom käkkirurgi.',
    clinic: 'Artofdent Malmö'
  },
  {
    name: 'Sara Nabil',
    title: 'Legitimerad Tandhygienist',
    image: '/images/sara.avif',
    bio: 'Med över 10 års erfarenhet och en passion för barns tandhälsa, garanterar Sara en trygg och positiv upplevelse.',
    clinic: 'Artofdent Malmö & ABC Tandklinikgruppen'
  },
  {
    name: 'Marianne Lipiäinen Rosenberg',
    title: 'Leg. tandläkare - Specialist i barntandvård',
    image: '/images/women_placeholder.jpg',
    bio: 'Omfattande erfarenhet som barntandläkare, tidigare lärare på Tandvårdshögskolan i Malmö.',
    clinic: 'ABC Tandklinikgruppen'
  },
  {
    name: 'Michael Blitz',
    title: 'Leg. tandläkare - specialist i tandreglering',
    image: '/images/man_placeholder.avif',
    bio: 'Över 25 års erfarenhet inom privat sektor, en värdefull konsult för fall som kräver tandreglering.',
    clinic: 'ABC Tandklinikgruppen'
  },
  {
    name: 'Bernt Schuss',
    title: 'Leg. tandläkare - klinikchef',
    image: '/images/man_placeholder.avif',
    bio: 'En av de mest erfarna tandläkarna i Malmö, har lett flera framgångsrika kliniker.',
    clinic: 'ABC Tandklinikgruppen'
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-dental-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dental-900 sm:text-6xl">
              Möt vårt team
            </h1>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Våra erfarna tandläkare och tandhygienister arbetar tillsammans för att ge dig 
              den bästa möjliga tandvården. Vi tror på personlig service och långsiktiga relationer.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-dental-100"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-dental-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium mb-3">
                    {member.title}
                  </p>

                  <p className="text-sm text-dental-600 mb-4 line-clamp-2">
                    {member.bio}
                  </p>

                  <div className="text-xs text-dental-500 font-medium mt-4 pt-4 border-t border-dental-100">
                    {member.clinic}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Boka tid hos vårt team
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Vi ser fram emot att ta hand om din munhälsa
          </p>
          <div className="mt-8">
            <Link
              href="/boka-tid"
              className="rounded-full bg-accent-400 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all"
            >
              BOKA ONLINE
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

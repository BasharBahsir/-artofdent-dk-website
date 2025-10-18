import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { HeartIcon, ShieldCheckIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Professionalism',
    description: 'Vi arbetar alltid med högsta kvalitet och använder modern teknik för bästa resultat.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Omsorg',
    description: 'Varje patient är unik och vi tar oss tid att lyssna och förstå dina behov.',
    icon: HeartIcon,
  },
  {
    name: 'Innovation',
    description: 'Vi följer de senaste metoderna och investerar i modern utrustning.',
    icon: SparklesIcon,
  },
  {
    name: 'Tillgänglighet',
    description: 'Vi finns här för dig med flexibla tider och snabb akuthjälp när du behöver oss.',
    icon: UserGroupIcon,
  },
]

const teamMembers = [
  {
    name: 'Saif Al Waily',
    role: 'Allmäntandläkare',
    image: '/images/newpics/saif_new.jpg',
    hasPhoto: true,
    imagePosition: 'object-top sm:object-center'
  },
  {
    name: 'Ammar Al Waily',
    role: 'Allmäntandläkare',
    image: '/images/newpics/ammar_new.jpg',
    hasPhoto: true,
    imagePosition: 'object-top sm:object-center'
  },
  {
    name: 'Martin Akej',
    role: 'Allmäntandläkare',
    image: '/images/newpics/martin_new.jpg',
    hasPhoto: true,
    imagePosition: 'object-top sm:object-center'
  },
  {
    name: 'Bashar Bashir',
    role: 'Allmäntandläkare',
    image: '/images/Bashar.png',
    hasPhoto: true,
    imagePosition: 'object-top sm:object-center'
  },
  {
    name: 'Palwasha Momand',
    role: 'ST Parodontolog',
    image: '/images/Palwasha.jpg',
    hasPhoto: true,
    imagePosition: 'object-top sm:object-center'
  },
  {
    name: 'Mikael Korduner',
    role: 'Övertandläkare/Käkkirurg',
    image: '/images/mickeal.png',
    hasPhoto: true,
    imagePosition: 'object-center'
  },
  {
    name: 'Aleksander Milosavljevic',
    role: 'Övertandläkare/Parodontolog',
    image: '/images/alex.png',
    hasPhoto: true,
    imagePosition: 'object-top sm:object-center'
  },
  {
    name: 'Benrt Shcuss',
    role: 'Allmäntandläkare',
    image: '/images/Bert.png',
    hasPhoto: true,
    imagePosition: 'object-center'
  },
  {
    name: 'Sara Nabil',
    role: 'Tandhygienist',
    image: '/images/newpics/sara_new.JPG',
    hasPhoto: true,
    imagePosition: 'object-center'
  },
  {
    name: 'Elin Hansson',
    role: 'Tandsköterska',
    image: '/images/newpics/elin_hansson_new.JPG',
    hasPhoto: true,
    imagePosition: 'object-top sm:object-center'
  },
  {
    name: 'Juliana Doroftei',
    role: 'Tandsköterska',
    image: '/images/newpics/juliana_new.jpg',
    hasPhoto: true,
    imagePosition: 'object-top sm:object-center'
  },
  {
    name: 'Mona Brinck',
    role: 'Tandsköterska',
    image: '/images/mona.png',
    hasPhoto: true,
    imagePosition: 'object-top sm:object-center'
  },
  {
    name: 'Elin Bengtsson',
    role: 'Tandsköterska',
    image: '/images/newpics/elin_bengtsson_new.jpg',
    hasPhoto: true,
    imagePosition: 'object-top sm:object-center'
  }
]

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-dental-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dental-900 sm:text-6xl">
              En tandvårdstradition sedan 1968
            </h1>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Välkommen till Art of Dent, där stolthet i vårt historiska arv som sträcker sig tillbaka till 1968 möter nytänkande i händerna på tandläkarbröderna Saif Al Waily och Ammar Al Waily, fjärde generationens tandvårdsexperter.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl bg-dental-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <Image
                  src="/images/Miljöfoton på kliniken (34).jpg"
                  alt="Art of Dent klinik - Modern tandvårdsmiljö"
                  width={800}
                  height={600}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-base leading-7 text-dental-700 lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-primary-600">Välkommen till Art of dent!</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-dental-900 sm:text-4xl">
                  Fjärde generationens tandläkare
                </h2>
                <div className="mt-6 space-y-6">
                  <p>
                    Hos Art of Dent välkomnar tandläkarbröderna Saif Al Waily och Ammar Al Waily både vuxna och barn till tandvårdskliniken. Med en rik historia som sträcker sig tillbaka till 1968, är vi stolta över att fortsätta denna tradition som fjärde generationens tandläkare.
                  </p>
                  <p>
                    Vårt moderna team består av tre tandläkare, en tandhygienist och tre tandsköterskor. Tillsammans erbjuder vi en bred och mångsidig allmäntandvård. Med en djup förståelse för att hantera tandvårdsrädsla är vår strävan att omskapa varje besök hos oss till en positiv och förtroendeingivande upplevelse.
                  </p>
                  <p>
                    För de som önskar tandreglering står toppmodern Invisalign-teknik till buds, och vid mer utmanande fall har vi möjligheten att remittera till specialister.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-dental-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dental-900 sm:text-4xl">
              Våra värderingar
            </h2>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Vi bygger vår verksamhet på fyra grundpelare som styr allt vi gör
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg">
                    <value.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-dental-900">
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-dental-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dental-900 sm:text-4xl">
              Möt vårt expertteam
            </h2>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Vårt erfarna team av specialister och vårdpersonal arbetar tillsammans för att ge dig den bästa tandvården
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className={`h-80 w-full object-cover ${member.imagePosition} grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold leading-7 text-dental-900">
                    {member.name}
                  </h3>
                  <p className="text-sm leading-6 text-primary-600 font-medium">
                    {member.role}
                  </p>
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
            Redo att bli en del av vår familj?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Välkommen att boka ditt första besök hos oss
          </p>
          <div className="mt-8 flex items-center justify-center">
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

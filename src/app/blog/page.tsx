import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { ClockIcon, UserIcon } from '@heroicons/react/24/outline'

const blogPosts = [
  {
    title: '5 tips för bättre munhygien',
    excerpt: 'Upptäck enkla men effektiva sätt att förbättra din dagliga munhygien och hålla dina tänder friska.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Anna Lindström',
    date: '15 mars 2024',
    readTime: '5 min',
    category: 'Munhygien',
    slug: '5-tips-munhygien'
  },
  {
    title: 'Allt du behöver veta om tandimplantat',
    excerpt: 'En komplett guide till tandimplantat - vad de är, hur de fungerar och vad du kan förvänta dig.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Erik Johansson',
    date: '10 mars 2024',
    readTime: '8 min',
    category: 'Behandlingar',
    slug: 'allt-om-tandimplantat'
  },
  {
    title: 'Så vitt kan dina tänder bli?',
    excerpt: 'Lär dig om olika blekning metoder och vad du kan förvänta dig av professionell tandblekning.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Sarah Mitchell',
    date: '5 mars 2024',
    readTime: '6 min',
    category: 'Estetisk tandvård',
    slug: 'tandblekning-guide'
  },
  {
    title: 'Tandvård för barn - när ska man börja?',
    excerpt: 'Viktiga råd om när och hur du ska introducera ditt barn till tandvården för bästa möjliga start.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Maria Andersson',
    date: '1 mars 2024',
    readTime: '7 min',
    category: 'Barntandvård',
    slug: 'tandvard-for-barn'
  },
  {
    title: 'Så kan du övervinna tandvårdsrädsla',
    excerpt: 'Professionella tips och tekniker för att hantera tandvårdsrädsla och få en bättre upplevelse.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Anna Lindström',
    date: '25 februari 2024',
    readTime: '6 min',
    category: 'Tandvårdsrädsla',
    slug: 'overvinna-tandvardsradsla'
  },
  {
    title: 'Invisalign vs traditionell tandställning',
    excerpt: 'En jämförelse mellan moderna och traditionella metoder för att räta tänder.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Erik Johansson',
    date: '20 februari 2024',
    readTime: '9 min',
    category: 'Ortodonti',
    slug: 'invisalign-vs-tandstallning'
  }
]

const categories = ['Alla', 'Munhygien', 'Behandlingar', 'Estetisk tandvård', 'Barntandvård', 'Tandvårdsrädsla', 'Ortodonti']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-dental-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-dental-900 sm:text-6xl">
              Blogg & Rådgivning
            </h1>
            <p className="mt-6 text-lg leading-8 text-dental-600">
              Läs våra senaste artiklar och tips om tandvård, munhälsa och behandlingar från våra experter.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-dental-200 bg-white sticky top-20 z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  category === 'Alla'
                    ? 'bg-primary-600 text-white'
                    : 'bg-dental-100 text-dental-700 hover:bg-dental-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-dental-100"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-primary-600 px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dental-900 group-hover:text-primary-600 transition-colors mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-dental-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-dental-100 text-xs text-dental-500">
                    <div className="flex items-center gap-x-2">
                      <UserIcon className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <ClockIcon className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-dental-400">
                    {post.date}
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="rounded-full bg-white/90 p-2 shadow-sm">
                    <span className="text-sm font-medium text-primary-600">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="rounded-full border-2 border-primary-600 px-8 py-3 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-all">
              Ladda fler artiklar
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Få tips och råd direkt i din inkorg
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Prenumerera på vårt nyhetsbrev och få de senaste artiklarna och erbjudandena
            </p>
            <div className="mt-8 flex max-w-md mx-auto gap-x-4">
              <input
                type="email"
                placeholder="Din e-postadress"
                className="min-w-0 flex-auto rounded-full border-0 px-6 py-3 text-dental-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white"
              />
              <button className="rounded-full bg-accent-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-500 transition-all">
                Prenumerera
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

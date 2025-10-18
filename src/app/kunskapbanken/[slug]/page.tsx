import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { allBlogPosts } from '@/data/blog-posts'
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = allBlogPosts.find((post) => post.slug === slug)
  
  if (!post) {
    return {
      title: 'Artikel inte hittad | Artofdent Malmö',
    }
  }

  return {
    title: `${post.title} | Artofdent Malmö`,
    description: post.metaDescription,
    keywords: post.seoKeywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = allBlogPosts.find((post) => post.slug === slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = allBlogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/kunskapbanken"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Tillbaka till Kunskapbanken
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
              {post.category}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              {post.readTime} min läsning
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 leading-8 mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 border-t border-gray-200 pt-6">
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <span>{new Date(post.publishDate).toLocaleDateString('sv-SE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-8 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:my-2"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />').replace(/#{1,3}\s/g, match => {
              const level = match.trim().length
              return level === 1 ? '<h2>' : level === 2 ? '<h3>' : '<h4>'
            }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- (.*?)(<br \/>|$)/g, '<li>$1</li>') }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Taggar:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Behöver du tandvård i Malmö?
            </h3>
            <p className="text-gray-600 mb-6">
              Kontakta oss för en kostnadsfri konsultation och låt våra experter hjälpa dig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Kontakta oss
              </Link>
              <Link
                href="/boka-tid"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-600 bg-white border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Boka tid
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Relaterade Artiklar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                        {relatedPost.category}
                      </span>
                      <span>{relatedPost.readTime} min</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      <Link 
                        href={`/kunskapbanken/${relatedPost.slug}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedPost.author}</span>
                      <span>{new Date(relatedPost.publishDate).toLocaleDateString('sv-SE')}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

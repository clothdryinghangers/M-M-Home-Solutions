import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CategoryContent from '@/components/CategoryContent'
import { getCategoryData } from '@/lib/categories'

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = [
    'ceiling-cloth-drying-hangers',
    'wall-mounted-cloth-hangers',
    'invisible-grills',
    'pigeon-safety-nets',
    'bamboo-roller-blinds',
    'shoe-racks',
    'anti-bird-spikes',
    'mosquito-nets',
    'outdoor-indoor-gaming-nets',
  ]

  return categories.map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = getCategoryData(params.slug)
  
  return {
    title: `${category.title} in Hyderabad & Secunderabad | Free Installation`,
    description: category.description,
    keywords: category.keywords,
    openGraph: {
      title: `${category.title} in Hyderabad & Secunderabad`,
      description: category.description,
      type: 'website',
    },
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryData(params.slug)

  return (
    <main className="min-h-screen">
      <Header />
      <CategoryContent category={category} />
      <Footer />
    </main>
  )
}


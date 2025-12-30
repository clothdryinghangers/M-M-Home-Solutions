import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductContent from '@/components/ProductContent'
import { getCategoryData } from '@/lib/categories'

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string; productSlug: string } }): Promise<Metadata> {
  const category = getCategoryData(params.slug)
  const product = category.products.find(p => p.slug === params.productSlug) || category.products[0]
  
  return {
    title: `${product.name} in Hyderabad & Secunderabad | ${category.name}`,
    description: `${product.description}. Available in Hyderabad, Secunderabad, and all areas. Free installation, 3-5 years warranty.`,
    keywords: `${product.name} Hyderabad, ${product.name} Secunderabad, ${category.name} ${product.name}`,
    openGraph: {
      title: `${product.name} in Hyderabad & Secunderabad`,
      description: product.description,
      type: 'website',
    },
  }
}

export default function ProductPage({ params }: { params: { slug: string; productSlug: string } }) {
  const category = getCategoryData(params.slug)
  const product = category.products.find(p => p.slug === params.productSlug) || category.products[0]

  return (
    <main className="min-h-screen">
      <Header />
      <ProductContent category={category} product={product} />
      <Footer />
    </main>
  )
}


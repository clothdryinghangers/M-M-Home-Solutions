import { MetadataRoute } from 'next'
import { getAllCategories } from '@/lib/categories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.homesolutions.in' // Update with your actual domain
  
  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]

  // Category pages
  const categories = getAllCategories()
  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    // Product pages
    category.products.forEach((product) => {
      routes.push({
        url: `${baseUrl}/category/${category.slug}/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  })

  return routes
}


import { MetadataRoute } from 'next'
import { getAllCategories } from '@/lib/categories'

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://clothdryinghangers.com').replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = getAllCategories()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const catalogRoutes: MetadataRoute.Sitemap = categories.flatMap((category) => {
    const categoryUrl = `${baseUrl}/category/${category.slug}`

    const categoryEntry: MetadataRoute.Sitemap[number] = {
      url: categoryUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }

    const productEntries: MetadataRoute.Sitemap = category.products.map((product) => ({
      url: `${categoryUrl}/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))

    return [categoryEntry, ...productEntries]
  })

  return [...staticRoutes, ...catalogRoutes]
}

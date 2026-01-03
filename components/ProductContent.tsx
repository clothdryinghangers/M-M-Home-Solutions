import Link from 'next/link'
import { FiPhone, FiCheck, FiArrowLeft } from 'react-icons/fi'
import { CategoryData } from '@/lib/categories'

interface ProductContentProps {
  category: CategoryData
  product: {
    name: string
    slug: string
    description: string
    image: string
    price?: string
  }
}

export default function ProductContent({ category, product }: ProductContentProps) {
  const whatsappNumber = '918790260037'
  const whatsappMessage = encodeURIComponent(`Hello! I am interested in ${product.name}. Please provide more details and pricing.`)
  const isClothHangerCategory = category.slug === 'ceiling-cloth-drying-hangers' || category.slug === 'wall-mounted-cloth-hangers'
  const isInvisibleGrillsCategory = category.slug === 'invisible-grills'
  const warrantyText = isClothHangerCategory ? '1-3 Years Comprehensive Warranty' : isInvisibleGrillsCategory ? '5 Years Comprehensive Warranty' : '3-5 Years Comprehensive Warranty'

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={`/category/${category.slug}`} className="hover:text-primary-600 transition-colors">
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Link
            href={`/category/${category.slug}`}
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-6"
          >
            <FiArrowLeft className="h-5 w-5" />
            <span>Back to {category.name}</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="text-lg text-gray-700 mb-6">
                {product.description.split('\n\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Product Features
                </h3>
                <ul className="space-y-2">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FiCheck className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warranty & Installation */}
              <div className="bg-primary-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What's Included
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <FiCheck className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{warrantyText}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FiCheck className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Free Professional Installation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FiCheck className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Same Day Delivery Available</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FiCheck className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>24/7 Customer Support</span>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href="tel:+918790260037"
                  className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg border-2 border-[#D1B483]"
                >
                  <FiPhone className="h-6 w-6" />
                  <span>Call Now for Pricing</span>
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-lg"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Available in All Areas of Hyderabad & Secunderabad
            </h2>
            <p className="text-gray-700 mb-4">
              We provide {product.name.toLowerCase()} installation services across all areas including:
            </p>
            <div className="flex flex-wrap gap-2">
              {category.areas.map((area, index) => (
                <span
                  key={index}
                  className="bg-white text-primary-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                >
                  {area}
                </span>
              ))}
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg text-sm font-semibold">
                + All areas in Hyderabad & Secunderabad
              </span>
            </div>
          </div>

          {/* Related Products from Same Category */}
          {category.products.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Other {category.name} Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.slug}
                    href={`/category/${category.slug}/${relatedProduct.slug}`}
                    className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                      relatedProduct.slug === product.slug ? 'ring-2 ring-primary-600' : ''
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {relatedProduct.slug === product.slug && (
                        <div className="absolute top-2 right-2 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Current
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}


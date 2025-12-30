import Link from 'next/link'
import { FiPhone, FiMessageCircle, FiCheck, FiArrowLeft } from 'react-icons/fi'
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
  const whatsappNumber = '916309484800'
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
                  href="tel:+916309484800"
                  className="w-full flex items-center justify-center space-x-2 bg-[#FFD700] text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-[#E6C200] transition-colors text-lg"
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
                  <FiMessageCircle className="h-6 w-6" />
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


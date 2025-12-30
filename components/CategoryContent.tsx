import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMessageCircle, FiCheck } from 'react-icons/fi'
import { CategoryData } from '@/lib/categories'

interface CategoryContentProps {
  category: CategoryData
}

export default function CategoryContent({ category }: CategoryContentProps) {
  const whatsappNumber = '916309484800'
  const whatsappMessage = encodeURIComponent(`Hello! I am interested in ${category.name} services.`)
  const isClothHangerCategory = category.slug === 'ceiling-cloth-drying-hangers' || category.slug === 'wall-mounted-cloth-hangers'
  const isInvisibleGrillsCategory = category.slug === 'invisible-grills'
  const warrantyText = isClothHangerCategory ? '1-3 Years Warranty' : isInvisibleGrillsCategory ? '5 Years Warranty' : '3-5 Years Warranty'

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-110"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {category.h1}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {category.h2}
              </h2>
              <div className="prose prose-lg max-w-none mb-8">
                {category.content.split('\n\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
                <p className="text-gray-700 leading-relaxed">
                  Our team of experienced professionals ensures quality installation with free service and comprehensive warranty. Contact us today for a free consultation and quote.
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FiCheck className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Get Free Quote
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for a free consultation and quote. We provide same-day delivery and free installation.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+916309484800"
                    className="w-full flex items-center justify-center space-x-2 bg-[#FFD700] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#E6C200] transition-colors"
                  >
                    <FiPhone className="h-5 w-5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    <FiMessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Why Choose Us?</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <FiCheck className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>{warrantyText}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <FiCheck className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Free Installation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <FiCheck className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>Same Day Delivery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <FiCheck className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span>24/7 Support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      {category.products.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/category/${category.slug}/${product.slug}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-primary-600 font-semibold">
                      View Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}


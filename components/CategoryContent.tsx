import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiCheck } from 'react-icons/fi'
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
                    className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors border-2 border-[#D1B483]"
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
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
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


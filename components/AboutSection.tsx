import { FiAward, FiUsers, FiCheckCircle, FiMapPin } from 'react-icons/fi'

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About M & M HomeSolutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for premium home improvement solutions in Hyderabad & Secunderabad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                M & M HomeSolutions is a leading provider of home improvement and installation services across Hyderabad and Secunderabad. With over 8 years of experience, we have successfully completed 10,000+ projects and served 9,000+ happy clients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We specialize in premium home improvement solutions including cloth drying hangers, invisible grills, safety nets, blinds, shoe racks, and more. Our commitment to quality, free installation, and comprehensive warranty has made us a trusted name in the industry.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our mission is to transform homes across Hyderabad and Secunderabad by providing high-quality, affordable home improvement solutions with exceptional customer service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in building long-term relationships with our clients through transparency, reliability, and commitment to excellence. Every installation is backed by our comprehensive warranty and 24/7 support.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiAward className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiUsers className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">9000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiCheckCircle className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <FiMapPin className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Area Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


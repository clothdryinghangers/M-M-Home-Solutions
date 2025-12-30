import { FiShield, FiTruck, FiClock, FiHeadphones } from 'react-icons/fi'

const features = [
  {
    icon: FiShield,
    title: '3-5 Years Warranty',
    description: 'Comprehensive warranty on all products and installations',
  },
  {
    icon: FiTruck,
    title: 'Free Installation',
    description: 'Professional installation included with every purchase',
  },
  {
    icon: FiClock,
    title: 'Same Day Delivery',
    description: 'Quick delivery service across Hyderabad & Secunderabad',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for your peace of mind',
  },
]

export default function TrustFeatures() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Why Choose Us?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            We provide premium home improvement solutions with unmatched service quality
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-6 border-2 border-gray-200 md:border-gray-100 rounded-lg md:rounded-none shadow-lg md:shadow-none hover:border-primary-600 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-red mb-3 rounded-full">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


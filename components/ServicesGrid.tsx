import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const services = [
  {
    name: 'Cloth Drying Hangers',
    slug: 'ceiling-cloth-drying-hangers',
    description: 'Premium ceiling-mounted solutions for efficient cloth drying',
    image: '/images/services/ceiling-cloth-drying-hangers.jpg',
  },
  {
    name: 'Wall Mounted Cloth Hangers',
    slug: 'wall-mounted-cloth-hangers',
    description: 'Space-saving wall-mounted hangers for compact spaces',
    image: '/images/services/wall-mounted-cloth-hangers.jpg',
  },
  {
    name: 'Invisible Grills',
    slug: 'invisible-grills',
    description: 'Modern safety grills without compromising your view',
    image: '/images/services/invisible-grills.jpg',
  },
  {
    name: 'Pigeon Safety Nets',
    slug: 'pigeon-safety-nets',
    description: 'Durable nets to protect your home from pigeons',
    image: '/images/services/pigeon-safety-nets.jpg',
  },
  {
    name: 'Bamboo / Roller Blinds',
    slug: 'bamboo-roller-blinds',
    description: 'Elegant window solutions for privacy and style',
    image: '/images/services/bamboo-roller-blinds.jpg',
  },
  {
    name: 'Shoe Racks',
    slug: 'shoe-racks',
    description: 'Organize your footwear with premium storage solutions',
    image: '/images/services/shoe-racks.jpg',
  },
  {
    name: 'Anti Bird Spikes',
    slug: 'anti-bird-spikes',
    description: 'Effective bird deterrent solutions for balconies',
    image: '/images/services/anti-bird-spikes.jpg',
  },
  {
    name: 'Mosquito Nets',
    slug: 'mosquito-nets',
    description: 'Protect your family from mosquitoes with premium nets',
    image: '/images/services/mosquito-nets.jpg',
  },
  {
    name: 'Gaming Nets',
    slug: 'outdoor-indoor-gaming-nets',
    description: 'Outdoor and indoor gaming nets for sports enthusiasts',
    image: '/images/services/outdoor-indoor-gaming-nets.jpg',
  },
]

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white border-b-4 border-[#D1B483]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products and Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive home improvement solutions across Hyderabad & Secunderabad
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/category/${service.slug}`}
              className="group bg-white border border-gray-100 hover:border-primary-600 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors uppercase tracking-wide">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <div className="flex items-center text-accent-red font-semibold uppercase tracking-wide text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Shop Now</span>
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


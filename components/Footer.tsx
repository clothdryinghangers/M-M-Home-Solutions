import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const serviceAreas = [
  'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
  'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
  'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
  'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
]

const categories = [
  { name: 'Cloth Drying Hangers', slug: 'ceiling-cloth-drying-hangers' },
  { name: 'Wall Mounted Cloth Hangers', slug: 'wall-mounted-cloth-hangers' },
  { name: 'Invisible Grills', slug: 'invisible-grills' },
  { name: 'Pigeon Safety Nets', slug: 'pigeon-safety-nets' },
  { name: 'Bamboo / Roller Blinds', slug: 'bamboo-roller-blinds' },
  { name: 'Shoe Racks', slug: 'shoe-racks' },
  { name: 'Anti Bird Spikes', slug: 'anti-bird-spikes' },
  { name: 'Mosquito Nets', slug: 'mosquito-nets' },
  { name: 'Gaming Nets', slug: 'outdoor-indoor-gaming-nets' },
]

export default function Footer() {
  return (
    <footer className="bg-[#113735] text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold text-[#D1B483]">
                M & M
              </div>
              <div className="text-xs font-semibold text-[#D1B483] uppercase tracking-wide">
                HOME SOLUTIONS
              </div>
            </div>
            <p className="mb-4">
              Premium home improvement and installation services across Hyderabad & Secunderabad. Quality products with professional installation.
            </p>
            <div className="space-y-2">
              <a href="tel:+918790260037" className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors">
                <FiPhone className="h-5 w-5 flex-shrink-0" />
                <span>+91 8790260037</span>
              </a>
              <a href="mailto:hyderabadceilinghangers@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors">
                <FiMail className="h-5 w-5 flex-shrink-0" />
                <span>hyderabadceilinghangers@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2">
                <FiMapPin className="h-5 w-5 mt-1" />
                <span>Hyderabad & Secunderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Products and Services</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {serviceAreas.map((area) => (
                <li key={area} className="hover:text-primary-400 transition-colors">
                  {area}
                </li>
              ))}
              <li className="text-primary-400 font-semibold mt-2">
                + All areas in Hyderabad & Secunderabad
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="tel:+918790260037" className="hover:text-primary-400 transition-colors">
                  Call Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} M&M Home Solutions. All rights reserved. | Service in Hyderabad & Secunderabad
          </p>
        </div>
      </div>
    </footer>
  )
}


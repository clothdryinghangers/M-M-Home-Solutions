import { FiAward, FiUsers, FiCheckCircle, FiMapPin } from 'react-icons/fi'

const serviceAreas = [
  // Original Areas
  'Kompally', 'ECIL', 'Kukatpally', 'Hitech City', 'Gachibowli',
  'Madhapur', 'Miyapur', 'Ameerpet', 'Begumpet', 'Banjara Hills',
  'Jubilee Hills', 'Manikonda', 'Uppal', 'LB Nagar', 'Tarnaka',
  'Alwal', 'Bowenpally', 'Trimulgherry', 'Sainikpuri', 'Malkajgiri',
  // Secunderabad Areas
  'Secunderabad', 'Abids', 'Nampally', 'Himayatnagar', 'Barkas',
  'Charminar', 'Mehdipatnam', 'Malakpet', 'Dilsukhnagar', 'Kothapet',
  'Musheerabad', 'RTC Cross Roads', 'Paradise', 'Mettuguda', 'Bolarum',
  // North Hyderabad
  'Bachupally', 'Nizampet', 'JNTU', 'KPHB', 'Moula Ali',
  'Suchitra', 'Quthbullapur', 'Boduppal', 'Nagole', 'Hayathnagar',
  'Vanasthalipuram', 'Chaitanyapuri', 'Kondapur', 'Hafeezpet', 'Serilingampally',
  // South Hyderabad
  'Rajendranagar', 'Shamshabad', 'Attapur', 'Meerpet', 'Jagathgirigutta',
  'Balanagar', 'Sanathnagar', 'Masab Tank', 'Somajiguda', 'Panjagutta',
  'Erragadda', 'SR Nagar', 'Lakdikapul', 'Khairatabad', 'Narayanguda',
  'Basheerbagh', 'Koti', 'Gandhinagar', 'Chikkadpally', 'Ramanthapur',
  'Nacharam', 'Peerzadiguda', 'Ghatkesar', 'Medchal', 'Shamirpet',
  // West Hyderabad
  'Patancheru', 'Nanakramguda', 'Financial District', 'Kokapet', 'Tellapur',
  'Narsingi', 'Osman Nagar', 'Bandlaguda', 'Lingampally', 'Mallapur',
  // Additional Areas
  'Yousufguda', 'Ameerpet', 'Punjagutta', 'Somajiguda', 'Erragadda',
  'SR Nagar', 'Lakdikapul', 'Khairatabad', 'Narayanguda', 'Basheerbagh',
  'Koti', 'Gandhinagar', 'Chikkadpally', 'Ramanthapur', 'Nacharam',
  'Peerzadiguda', 'Ghatkesar', 'Medchal', 'Shamirpet', 'Patancheru',
  'Nanakramguda', 'Financial District', 'Kokapet', 'Tellapur', 'Narsingi',
  'Osman Nagar', 'Bandlaguda', 'Lingampally', 'Mallapur', 'Bachupally',
  'Boduppal', 'Gachibowli', 'Miyapur', 'Kukatpally', 'Kondapur',
  'Hafeezpet', 'Serilingampally', 'Rajendranagar', 'Shamshabad', 'Attapur',
  'Meerpet', 'Jagathgirigutta', 'Balanagar', 'Sanathnagar', 'Masab Tank',
]

const stats = [
  {
    icon: FiAward,
    number: '8+',
    label: 'Years in Industry',
    description: 'Extensive experience in home improvement',
  },
  {
    icon: FiUsers,
    number: '9000+',
    label: 'Happy Clients',
    description: 'Satisfied customers across Hyderabad',
  },
  {
    icon: FiCheckCircle,
    number: '10,000+',
    label: 'Projects Completed',
    description: 'Successfully delivered installations',
  },
  {
    icon: FiMapPin,
    number: '100%',
    label: 'Area Coverage',
    description: 'Serving ALL areas of Hyderabad & Secunderabad',
  },
]

export default function ExperienceStats() {
  return (
    <section className="section-padding bg-[#113735] text-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Our Experience Speaks
          </h2>
          <p className="text-base md:text-lg text-primary-100 max-w-2xl mx-auto">
            Trusted by thousands of homeowners across Hyderabad and Secunderabad
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gray-800 border-2 border-gray-600 md:border-gray-700 p-5 md:p-5 rounded-lg md:rounded-none shadow-lg md:shadow-none hover:border-accent-red hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1">
                {stat.number}
              </div>
              <div className="text-base md:text-lg font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-primary-100 text-xs md:text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
            <p className="text-lg text-primary-100 mb-6">
              We provide services across ALL areas of Hyderabad and Secunderabad
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {Array.from(new Set(serviceAreas)).map((area, index) => (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded text-xs text-primary-100 hover:border-accent-red transition-colors"
                >
                  {area}
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <div className="text-base font-semibold text-white">
                + All other areas in Hyderabad & Secunderabad
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


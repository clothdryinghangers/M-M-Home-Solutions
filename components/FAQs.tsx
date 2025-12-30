'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What areas do you serve in Hyderabad and Secunderabad?',
    answer: 'We provide home improvement services across ALL areas of Hyderabad and Secunderabad, including Kompally, ECIL, Kukatpally, Hitech City, Gachibowli, Madhapur, Miyapur, Ameerpet, Begumpet, Banjara Hills, Jubilee Hills, Manikonda, Uppal, LB Nagar, Tarnaka, Alwal, Bowenpally, Trimulgherry, Sainikpuri, Malkajgiri, and all other localities. Our service coverage is 100% across both cities.',
  },
  {
    question: 'Is installation free?',
    answer: 'Yes, we provide FREE installation for all our products across Hyderabad and Secunderabad. Our professional installation team will visit your location and install the products at no additional cost.',
  },
  {
    question: 'What warranty do you offer on your products?',
    answer: 'We offer comprehensive warranties on all our products. Cloth drying hangers and wall mounted cloth hangers come with 3-5 years warranty, while invisible grills come with 5 years warranty. Other products have warranties ranging from 3-5 years depending on the product type. All warranty details are provided at the time of purchase.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most installations are completed on the same day. Our team typically completes installations within 2-4 hours depending on the product type and complexity. We also offer same-day delivery and installation services for urgent requirements.',
  },
  {
    question: 'What types of cloth drying hangers do you offer?',
    answer: 'We offer two main types: Cloth Drying Hangers (ceiling-mounted Cloth Hangers, adjustable height) and Wall Mounted Cloth Hangers (space-saving wall-mounted design with 6 roods). Both are made from sturdy Jindal Stainless Steel and are weather-resistant.',
  },
  {
    question: 'Are invisible grills safe for children?',
    answer: 'Yes, our invisible grills are designed with high safety standards using stainless steel construction. They provide maximum safety while maintaining unobstructed views. The grills are strong enough to prevent accidents while being nearly invisible from a distance.',
  },
  {
    question: 'How do pigeon safety nets work?',
    answer: 'Our pigeon safety nets are made from UV-resistant, durable material that creates a barrier preventing pigeons from entering your balconies, windows, and terraces. The nets are transparent, easy to clean, and custom-fitted to your space. They come with 3-5 years warranty.',
  },
  {
    question: 'What is the difference between bamboo and roller blinds?',
    answer: 'Bamboo blinds are made from natural bamboo materials, offering an eco-friendly and elegant look. Roller blinds are modern fabric blinds available in various colors and designs. Both offer privacy control, UV protection, and energy efficiency. We can help you choose based on your preferences and requirements.',
  },
  {
    question: 'Do you provide custom sizing for products?',
    answer: 'Yes, we provide custom sizing for most of our products including invisible grills, safety nets, mosquito nets, blinds, and gaming nets. Our team will take measurements at your location and provide products that fit perfectly.',
  },
  {
    question: 'How do I book a service or get a quote?',
    answer: 'You can contact us via phone call or WhatsApp. Simply call us or send a WhatsApp message, and our team will schedule a free consultation visit to your location. We provide detailed quotes and can answer all your questions during the visit.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept multiple payment methods including cash, UPI Payment. Payment terms and options will be discussed during the consultation. We also offer flexible payment plans for larger installations.',
  },
  {
    question: 'Do you provide maintenance services?',
    answer: 'Yes, we provide maintenance and repair services for all products we install. Our warranty includes free maintenance for the warranty period. After warranty, we offer affordable maintenance services to keep your installations in perfect condition.',
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate FAQ schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section className="section-padding bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our home improvement services in Hyderabad & Secunderabad
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3
                    className="text-lg md:text-xl font-semibold text-gray-900 pr-4"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FiChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div
                    className="px-6 py-4 bg-white"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <p className="text-gray-700 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


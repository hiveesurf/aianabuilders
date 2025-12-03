'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle, FiHome, FiShield, FiMapPin } from 'react-icons/fi'

export default function ResidentialFeatures() {
  const features = [
    'Prime locations in Faridabad and NCR',
    'Modern amenities and facilities',
    'Legal clearance and documentation',
    'Flexible payment plans',
    'Expert guidance throughout the process',
    'Post-purchase support',
  ]

  const locations = [
    'Charmwood Village',
    'All HUDA Sectors, Faridabad',
    'Sector 15, 16, 21, 22, 25, 28',
    'BPTP Projects',
    'Omaxe Projects',
    'Pinnacle Tower',
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-500 to-black700 flex items-center justify-center">
                <FiHome className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-estate-dark">Why Choose Us?</h2>
            </div>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <FiCheckCircle className="w-6 h-6 text-estate-dark flex-shrink-0 mt-0.5" />
                  <span className="text-estate-medium text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center">
                <FiMapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-estate-dark">Popular Locations</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 p-3 bg-gradient-to-r from-gray-50 to-accent-50 rounded-lg"
                >
                  <FiMapPin className="w-5 h-5 text-estate-dark flex-shrink-0" />
                  <span className="text-estate-dark font-medium">{location}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


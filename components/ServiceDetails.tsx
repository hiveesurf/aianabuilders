'use client'

import { motion } from 'framer-motion'
import { FiMapPin } from 'react-icons/fi'
import Link from 'next/link'

export default function ServiceDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-4xl font-serif font-bold text-estate-dark mb-6 text-center">
            Service Areas
          </h2>
          <p className="text-xl text-estate-medium mb-8 text-center max-w-3xl mx-auto">
            Aiana Builders is dealing in all over Delhi and NCR. We are expert at Charmwood Village along with all HUDA sector in Faridabad and Gurgaon.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              'Charmwood Village, Faridabad',
              'All HUDA Sectors, Faridabad',
              'All HUDA Sectors, Gurgaon',
              'Delhi NCR Region',
              'Noida',
              'Ghaziabad',
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <FiMapPin className="w-5 h-5 text-estate-dark flex-shrink-0" />
                <span className="text-estate-dark font-medium">{area}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


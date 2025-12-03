'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiHome } from 'react-icons/fi'
import Link from 'next/link'

export default function SpecialProjects() {
  const specialProjects = [
    { name: 'BPTP Plots & Flats Faridabad', location: 'Faridabad' },
    { name: 'Pinnacle Tower Faridabad', location: 'Faridabad' },
    { name: 'Omaxe Flats in Faridabad', location: 'Faridabad' },
    { name: 'Charmwood Plaza Faridabad', location: 'Charmwood Village' },
    { name: 'Sale/Purchase/Rent Faridabad', location: 'Faridabad & NCR' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-estate-dark mb-4">
            Specialized Projects
          </h2>
          <p className="text-xl text-estate-medium max-w-3xl mx-auto">
            Our expertise extends to specific projects and areas in Faridabad
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-3">
                <FiHome className="w-6 h-6 text-estate-dark" />
                <h3 className="text-xl font-bold text-estate-dark">{project.name}</h3>
              </div>
              <div className="flex items-center text-estate-medium">
                <FiMapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{project.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Enquire About Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


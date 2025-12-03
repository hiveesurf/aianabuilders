'use client'

import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiHome, FiShield, FiAward, FiUsers } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-estate-dark mb-6">
              Welcome to Aiana Builders
            </h2>
            <p className="text-lg text-estate-medium mb-6 leading-relaxed">
              Aiana Builder is a reputed Real estate consultant in Faridabad. We are serving our clients since last 20 Years in the field of Real estate. We are offering services to our clients like Property advisor, Power of attorney in Faridabad, Property registry in Faridabad, Property for Rent, Property Maintenance in Faridabad, House tax in Faridabad.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-estate-dark font-semibold hover:text-estate-dark transition-colors"
            >
              <span>Read More</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: FiHome, title: '25+ Years', desc: 'Experience' },
              { icon: FiShield, title: 'Trusted', desc: 'Service' },
              { icon: FiAward, title: 'Reputed', desc: 'Consultant' },
              { icon: FiUsers, title: '1000+', desc: 'Happy Clients' },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-accent-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  {IconComponent && <IconComponent className="w-8 h-8 text-estate-dark mx-auto mb-3" />}
                  <h3 className="text-2xl font-bold text-estate-dark mb-1">{item.title}</h3>
                  <p className="text-estate-medium">{item.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


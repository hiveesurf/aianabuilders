'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiTarget, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi'

export default function AboutContent() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  
  const stats = [
    { icon: FiTrendingUp, number: '25+', label: 'Years of Experience', gradient: 'from-primary-500 to-primary-700', bgGradient: 'from-primary-100 to-primary-50' },
    { icon: FiUsers, number: '1000+', label: 'Happy Clients', gradient: 'from-blue-500 to-blue-700', bgGradient: 'from-blue-100 to-blue-50' },
    { icon: FiAward, number: '500+', label: 'Properties Sold', gradient: 'from-green-500 to-green-700', bgGradient: 'from-green-100 to-green-50' },
    { icon: FiTarget, number: '100%', label: 'Customer Satisfaction', gradient: 'from-orange-500 to-orange-700', bgGradient: 'from-orange-100 to-orange-50' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl mb-6">
              {imageErrors[0] ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600">
                  <span className="text-white font-bold text-2xl">Aiana Builders</span>
                </div>
              ) : (
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Aiana Builders Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={() => setImageErrors(prev => ({ ...prev, [0]: true }))}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-estate-dark mb-6">
              Our Story
            </h2>
            <p className="text-lg text-estate-medium mb-4 leading-relaxed">
              We at Aiana Builders & Promoters (P) Ltd., a reputed Real estate agent in Faridabad Established in Year 1990. We are serving our clients since last 25 Year in the field of sale, purchase and renting of plots and flats in Faridabad and NCR (Delhi, Gurgaon, Noida, Ghaziabad).
            </p>
            <p className="text-lg text-estate-medium mb-4 leading-relaxed">
              Aiana Builder is an reputed Real estate consultant in Faridabad. We are serving our clients since last 20 Years in the field of Real estate. We are offering services to our clients like Property advisor, Power of attorney in Faridabad, Property registry in Faridabad, Property for Rent, Property Maintenance in Faridabad, House tax in Faridabad.
            </p>
            <p className="text-lg text-estate-medium leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us one of the most trusted real estate consultants in the region. We understand that buying, selling, or renting a property is one of the most important decisions in your life, and we are here to make that process smooth and stress-free.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl mb-6">
              {imageErrors[1] ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                  <span className="text-white font-bold text-xl">Why Choose Us</span>
                </div>
              ) : (
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Why Choose Us"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onError={() => setImageErrors(prev => ({ ...prev, [1]: true }))}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-transparent"></div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 via-blue-50 to-accent-50 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-estate-dark mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                '25+ years of industry experience',
                'Expert knowledge of Faridabad and NCR markets',
                'Comprehensive real estate services',
                'Trusted by 1000+ satisfied clients',
                'Authorized partner with leading builders',
                'Transparent and honest dealings',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <div className="w-3 h-3 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full shadow-md"></div>
                  <span className="text-estate-dark font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${stat.bgGradient} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                </div>
                <div className="text-3xl font-bold text-estate-dark mb-1">{stat.number}</div>
                <div className="text-estate-medium text-sm font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


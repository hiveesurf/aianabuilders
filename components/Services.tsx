'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Services() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Sale/Purchase/Rent Faridabad',
      description: 'End-to-end services for property sale, purchase, and renting',
      gradient: 'from-primary-600 to-primary-800',
      bgGradient: 'from-primary-100 to-primary-50'
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Property Registry Faridabad',
      description: 'Complete property registration services in Faridabad',
      gradient: 'from-blue-600 to-blue-800',
      bgGradient: 'from-blue-100 to-blue-50'
    },
    {
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Power of Attorney Faridabad',
      description: 'Professional POA services for property transactions',
      gradient: 'from-purple-600 to-purple-800',
      bgGradient: 'from-purple-100 to-purple-50'
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Property Maintenance NCR',
      description: 'Comprehensive property maintenance services in NCR',
      gradient: 'from-green-600 to-green-800',
      bgGradient: 'from-green-100 to-green-50'
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'House Tax Payment Faridabad',
      description: 'Assistance with house tax payments in Faridabad',
      gradient: 'from-orange-600 to-orange-800',
      bgGradient: 'from-orange-100 to-orange-50'
    },
    {
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'BPTP Plots & Flats Faridabad',
      description: 'Specialized expertise in BPTP projects across Faridabad',
      gradient: 'from-pink-600 to-pink-800',
      bgGradient: 'from-pink-100 to-pink-50'
    },
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
            Our Services
          </h2>
          <p className="text-xl text-estate-medium max-w-3xl mx-auto">
            Aiana Builders offering all kind of Real estate related services in Faridabad and NCR like Sale, Purchase and Renting.
          </p>
          <p className="text-lg text-estate-medium max-w-3xl mx-auto mt-4">
            Aiana Builders is dealing in all over Delhi and NCR. We are expert at Charmwood Village along with all HUDA sector in Faridabad and Gurgaon.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${service.bgGradient} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2`}
              >
                <div className="relative h-40 w-full overflow-hidden bg-gray-200">
                  {imageErrors[index] ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                      <span className="text-white font-bold">{service.title}</span>
                    </div>
                  ) : (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                    />
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white text-center px-4 drop-shadow-lg z-10">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-estate-medium">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


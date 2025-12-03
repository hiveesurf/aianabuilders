'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiMapPin, FiHome, FiSquare, FiArrowRight } from 'react-icons/fi'
import { generateWhatsAppUrl } from '@/utils/whatsapp'

export default function RentalProperties() {
  const [filter, setFilter] = useState('all')

  const properties = [
    {
      id: 1,
      type: 'Apartment',
      title: '4 Bedroom Luxury Apartment',
      location: 'Kennwood Tower - Charmwood Village, Faridabad',
      bedrooms: 4,
      area: '2500 sq ft',
      price: '₹45,000/month',
      furnished: 'Semi-Furnished',
      available: true,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      type: 'Apartment',
      title: '3 Bedroom Modern Apartment',
      location: 'Sector 21, Faridabad',
      bedrooms: 3,
      area: '1800 sq ft',
      price: '₹35,000/month',
      furnished: 'Fully Furnished',
      available: true,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      type: 'Villa',
      title: '5 Bedroom Luxury Villa',
      location: 'Sector 25, Faridabad',
      bedrooms: 5,
      area: '4000 sq ft',
      price: '₹80,000/month',
      furnished: 'Fully Furnished',
      available: true,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      type: 'Apartment',
      title: '2 Bedroom Cozy Apartment',
      location: 'Sector 15, Faridabad',
      bedrooms: 2,
      area: '1200 sq ft',
      price: '₹25,000/month',
      furnished: 'Unfurnished',
      available: true,
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      type: 'Townhouse',
      title: '4 Bedroom Townhouse',
      location: 'Sector 22, Faridabad',
      bedrooms: 4,
      area: '2200 sq ft',
      price: '₹50,000/month',
      furnished: 'Semi-Furnished',
      available: true,
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      type: 'Apartment',
      title: '3 Bedroom Penthouse',
      location: 'Sector 28, Faridabad',
      bedrooms: 3,
      area: '2000 sq ft',
      price: '₹55,000/month',
      furnished: 'Fully Furnished',
      available: true,
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
  ]

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.type.toLowerCase() === filter.toLowerCase())

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
            Available Properties for Rent
          </h2>
          <p className="text-xl text-estate-medium max-w-3xl mx-auto mb-8">
            Find your perfect rental property in Faridabad
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Apartment', 'Villa', 'Townhouse'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type.toLowerCase())}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  filter === type.toLowerCase()
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-estate-dark hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-primary-600/30 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-estate-dark">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Available
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="text-2xl font-bold text-estate-dark">{property.price}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-estate-dark mb-3">{property.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-estate-medium">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-estate-medium">
                    <div className="flex items-center">
                      <FiHome className="w-4 h-4 mr-2" />
                      <span className="text-sm">{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <FiSquare className="w-4 h-4 mr-2" />
                      <span className="text-sm">{property.area}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-estate-medium">
                    <FiHome className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.furnished}</span>
                  </div>
                </div>
                <a
                  href={generateWhatsAppUrl({
                    title: property.title,
                    type: property.type,
                    location: property.location,
                    price: property.price,
                    bedrooms: property.bedrooms,
                    area: property.area,
                    furnished: property.furnished,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


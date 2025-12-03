'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiSearch, FiX } from 'react-icons/fi'

export default function PropertyGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const categories = [
    { id: 'all', name: 'All Properties' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'plots', name: 'Plots' },
  ]

  const propertyImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Residential Plot - replaced
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', // Warehouse - replaced
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  ]

  const properties = [
    { id: 1, category: 'residential', name: 'Luxury Apartment', location: 'Charmwood Village', image: propertyImages[0] },
    { id: 2, category: 'residential', name: 'Modern Villa', location: 'Sector 21', image: propertyImages[1] },
    { id: 3, category: 'commercial', name: 'Office Space', location: 'Sector 15', image: propertyImages[2] },
    { id: 4, category: 'residential', name: 'Penthouse', location: 'Sector 22', image: propertyImages[3] },
    { id: 5, category: 'plots', name: 'Residential Plot', location: 'Sector 28', image: propertyImages[4] },
    { id: 6, category: 'commercial', name: 'Shop', location: 'Sector 16', image: propertyImages[5] },
    { id: 7, category: 'residential', name: 'Duplex', location: 'Sector 25', image: propertyImages[6] },
    { id: 8, category: 'commercial', name: 'Warehouse', location: 'Sector 18', image: propertyImages[7] },
    { id: 9, category: 'residential', name: 'Studio Apartment', location: 'Sector 20', image: propertyImages[8] },
  ]

  const filteredProperties = selectedCategory === 'all' 
    ? properties 
    : properties.filter(p => p.category === selectedCategory)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-estate-dark hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(property.id)}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                {imageErrors[property.id] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600">
                    <div className="text-center">
                      <h3 className="text-white font-bold text-lg mb-1">{property.name}</h3>
                      <p className="text-white/80 text-sm">{property.location}</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => setImageErrors(prev => ({ ...prev, [property.id]: true }))}
                  />
                )}
                <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-primary-600/30 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiSearch className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg mb-1">{property.name}</h3>
                <p className="text-white/80 text-sm">{property.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-primary-600/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <FiX className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl w-full"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={filteredProperties.find(p => p.id === selectedImage)?.image || propertyImages[0]}
                  alt="Property"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}


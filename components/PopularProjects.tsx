'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiMapPin, FiStar } from 'react-icons/fi'
import Link from 'next/link'

export default function PopularProjects() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  
  const projects = [
    { name: 'Pinnacle Tower', location: 'Faridabad', rating: 4.8, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Ibiza Town', location: 'Faridabad', rating: 4.7, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Charmwood Plaza', location: 'Charmwood Village', rating: 4.9, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { name: 'BPTP Parklands Plots', location: 'Faridabad', rating: 4.6, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { name: 'BPTP Princess Park', location: 'Faridabad', rating: 4.8, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { name: 'BPTP Elite Floor', location: 'Faridabad', rating: 4.7, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { name: 'BPTP Granduara', location: 'Faridabad', rating: 4.9, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Omaxe Forest Spa', location: 'Faridabad', rating: 4.8, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Omaxe Hills', location: 'Faridabad', rating: 4.7, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { name: 'Lakewood City', location: 'Faridabad', rating: 4.9, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-estate-dark mb-4">
            Popular Projects
          </h2>
          <p className="text-xl text-estate-medium max-w-3xl mx-auto">
            Top rated builders around you. All facilities offering related Sale/Purchase/Rent.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden">
                {imageErrors[index] ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-300 to-primary-500">
                    <span className="text-white font-bold text-lg text-center px-4">{project.name}</span>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                  />
                )}
                <div className="absolute inset-0 bg-primary-600/20 group-hover:bg-primary-600/30 transition-colors"></div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <FiStar className="w-4 h-4 text-accent-500 fill-accent-500" />
                  <span className="text-sm font-semibold text-estate-dark">{project.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-estate-dark mb-2">{project.name}</h3>
                <div className="flex items-center text-estate-medium">
                  <FiMapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>
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
            href="/residential"
            className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


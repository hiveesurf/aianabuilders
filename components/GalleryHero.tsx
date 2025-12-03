'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function GalleryHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
          alt="Property Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/70 via-gray-700/60 to-gray-900/70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-lg">
            Property Gallery
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Explore our collection of premium properties in Faridabad and NCR
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

